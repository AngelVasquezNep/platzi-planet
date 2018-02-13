<template lang="pug">
  div
    Ppsearch(:resultado="resultado", @search-planet="searchPlanet")
    
    //- .formulario
  
    //-   //- SEARCH

    //-   h1 ¡Bienvenido a Platzi-Planet!
    
    //-   form(@submit.prevent="busqueda", )
    //-     input.buscador(type="search" v-model="qbusqueda", 
    //-           placeholder="¿Qué quieres saber?",
    //-           required)
    //-     input(type="submit" value="Enviar")

    //-   form()
    //-     input(type="radio" id="videos" name="media" value="Videos" v-model="formulario")
    //-     label(for="videos" ) Videos
        
    //-     input(type="radio" id="imagenes" name="media" value="Imagenes" v-model="formulario")
    //-     label(for="imagenes" ) Imágenes
    //-   p(v-if="statusRes") Total Videos: {{totalVideos}} 
    //-   p(v-if="statusRes") Total Imágenes: {{totalImages}} 
      
      //- END SEARCH

    


    .message(v-if="changePage")
      h2 THE SPACE IS YOURS
      img(src="@/assets/elon-musk.jpg")



    //- RESULTS


    .nullResult(v-if="statusRes")
      div(v-if="!resultado.collection.items.length")
        h2 Lo sentimos, no hallamos lo que buscabas, intenta de nuevo.
        img(src="@/assets/invasion.png")

    spinner(v-show="statusSpinner")

    ul(v-if="statusRes")
      


      ppimages(v-for="item in resultado.collection.items",
              :item="item", :key="item.data[0].nasa_id", 
                v-if="item.data[0].media_type=='image'", 
                v-show="formulario == 'Imagenes'")
      ppvideo(v-for="item in resultado.collection.items",
              :item="item", :key="item.data[0].nasa_id", 
                v-if="item.data[0].media_type=='video'", 
                v-show="formulario == 'Videos'")
    

    //- END RESULTS


</template>

<script>

import Ppsearch from '@/components/Search.vue'
import nasa from '@/services/api/fetchEarth.js'
import Ppimages from '@/components/Images.vue'
import Ppvideo from '@/components/Video.vue'
import Spinner from '@/components/Spinner.vue'



export default {
  name:'home',
  data(){
    return {
      formulario: 'Imagenes',
      qbusqueda: '',
      statusRes: false,
      statusSpinner: false,
      resultado: {},
      changePage:true
    }
  },
  components:{ Ppimages, Ppvideo, Spinner, Ppsearch },
  methods:{
    busqueda(){
      console.log("BUSQUEDA")
      this.changePage = false
      this.statusRes = false
      this.statusSpinner = true
      nasa.search(this.qbusqueda)
        .then(json=> {
          this.resultado = {}
          this.resultado = json
          this.statusSpinner = false
          this.statusRes = true
          this.qbusqueda = ''
        })
    },
    searchPlanet(q){
      console.log("llego " + q)
    }
  },
  computed:{
    totalImages(){
        return this.resultado.collection.items.reduce((resultado, item)=>{
        if(item.data[0].media_type == 'image'){
          resultado++
        }
        return resultado
      }, 0)
    },
    totalVideos(){
        return this.resultado.collection.items.reduce((resultado, item)=>{
        if(item.data[0].media_type == 'video'){
          resultado++
        }
        return resultado
      }, 0)
    }
  },
  created(){
    this.$bus.$on('search-about', (t)=>{
      this.qbusqueda = t
      this.busqueda()
    })
  }
}

</script>

<style lang="sass" scoped>
  div
    margin: 10px
    padding: 5px 
    width: 70%
    background: #FFFFFF

  h1
    font-family: 'Montserrat', sans-serif;
    font-weight: 600

  .formulario
    display: block
    margin: 0 auto
    background: #E7E9EE
    width: 100%
    padding: 2em 0

  .buscador
    padding: 5px 10px
    border-radius: 10px
    border-style: none
    &:focus
      outline: 0

  .message
    margin: 0 auto
    background: #E7E9EE
    background: linear-gradient(180deg, #E7E9EE, #fff)
    width: auto
    text-align: center
    h2 
      font-family: 'Montserrat', sans-serif
      font-weight: 700
      margin: 0
      padding: 20px 0
      font-size: 5rem
    img 
      width: 100%



  input
    margin: 10px
    font-size: 1.2em
    font-family: 'Montserrat', sans-serif

  input[type="submit"]
    color: #fff
    border-radius: 5px
    border-style: none
    padding: 5px
    border-bottom: 3px solid #E6E8EE
    background-color: #E6E8EE
    color: #000
    transition: .2s
    width: 30%
    
    &:hover, &:focus
      outline: 0
      box-shadow: 0px 2px 3px 2px #808080
      background-color: #0A8898
      border-bottom: 3px solid #808080
      color: #fff
    &:active
      transform: scale(.95)

  input[type="radio"]
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 15px;
    height: 15px;

    border: 2px solid #999;
    transition: 0.2s all linear;
    outline: none;

    margin: 0 

    &:checked
      border: 5px solid #282F30;

    &:active
      background-color: white;
      color: black;
      outline: 1px solid black;
  
  label
    margin: 0 15px

  ul
    overflow-y: scroll
    overflow-x: hidden
    max-height: 150vh
    padding: 4px

  p
    display: inline-flex
    margin: 15px

  li
    // display: block
    margin: 0

  .nullResult
    display: flex
    justify-content: center
    margin: 0 auto
    width: 90%
    div
      h2
       font-weight: 600
    
    img
      background: radial-gradient(red, #DC40A0,#FFFFFF, #FFFFFF)
      width: 100%

  @media screen and (max-width: 1024px)
    div
      width: 65%

  @media screen and (max-width: 800px)
    div
      width: 100%  
      margin: 0
      padding: 0
</style>
