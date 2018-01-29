<template lang="pug">
  div
    .formulario
      
      h1 ¡Bienvenido a Platzi-Planet!
    
      form(@submit.prevent="busqueda", )
        input.buscador(type="search" v-model="qbusqueda", 
              placeholder="¿Qué quieres saber?",
              required)
        input(type="submit" value="Enviar")

      form()
        input(type="radio" id="videos" name="media" value="Videos" v-model="formulario")
        label(for="videos" ) Videos
        
        input(type="radio" id="imagenes" name="media" value="Imagenes" v-model="formulario")
        label(for="imagenes" ) Imagenes
      p(v-if="statusRes") Total Imagenes: {{totalImages}} 
      p(v-if="statusRes") Total Videos: {{totalVideos}} 


    ul(v-if="statusRes")
      //- p Total Imagenes: {{totalImages}} 
      //- p Total Videos: {{totalVideos}} 

      ppimages(v-for="item in resultado.collection.items",
              :item="item", :key="item.data[0].nasa_id", 
                v-if="item.data[0].media_type=='image'", 
                v-show="formulario == 'Imagenes'")
      ppvideo(v-for="item in resultado.collection.items",
              :item="item", :key="item.data[0].nasa_id", 
                v-if="item.data[0].media_type=='video'", 
                v-show="formulario == 'Videos'")
</template>

<script>
import nasa from '@/services/api/fetchEarth.js'
import Ppimages from '@/components/Images.vue'
import Ppvideo from '@/components/Video.vue'


export default {
  name:'home',
  data(){
    return {
      formulario: 'Imagenes',
      qbusqueda: '',
      statusRes: false,
      resultado: {},
      totalImagenescontadas: 0
    }
  },
  components:{ Ppimages, Ppvideo },
  methods:{
    busqueda(){
      nasa.nasaSearch(this.qbusqueda)
        .then(json=> {
          this.resultado = {}
          this.resultado = json
          this.statusRes = true
          this.qbusqueda = ''
        })
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
  }
}

</script>

<style lang="sass" scoped>
  div
    margin: 10px
    padding: 5px 
    width: 75%
    background: #FFFFFF

  h1
    font-family: 'Montserrat', sans-serif;
    font-weight: 600

  .formulario
    display: block
    margin: 0 auto
    background: rgb(93.3%, 93.1%, 92.8%)
    width: 100%
    padding: 2em 0

  .buscador
    padding: 5px
    border-radius: 10px
    &:focus
      outline: 0

  input
    margin: 10px
    font-size: 1.2em
 
  ul
    overflow-y: scroll
    overflow-x: hidden
    max-height: 150vh
    padding: 4px
    span

  p
    display: inline-flex
    margin: 0 15px

  li
    // display: block
    margin: 0
  
  input
    font-family: 'Montserrat', sans-serif
</style>
