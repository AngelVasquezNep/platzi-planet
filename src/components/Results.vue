<template lang="pug">
  .results

    //- ppsearch(:resultado="resultado", @search-planet="searchPlanet")
    .newSearch
      h2 Nos alegra tenerte en nuestro espacio
      p Vamos por otra busqueda
      router-link.enlace(to="/") Nueva Busqueda
    
    spinner(v-show="statusSpinner")

    .nullResult(v-if="statusRes")
      div(v-if="!resultado.collection.items.length > 0")
        h2 Lo sentimos, no hallamos lo que buscabas, intenta de nuevo.
        img(src="@/assets/invasion.png")
    

    ul(v-if="statusRes")
      
      a.subir(v-if="resultado.collection.items.length > 0", href="#") ^


      ppimages(v-for="item in resultado.collection.items",
               v-if="item.data[0].media_type=='image'", 
               v-show="formulario == 'Imagenes'",
               :key="item.data[0].nasa_id",
               :item="item")

      ppvideo(v-for="item in resultado.collection.items",
               v-if="item.data[0].media_type=='video'", 
               v-show="formulario == 'Videos'",
               :key="item.data[0].nasa_id",
               :item="item")


</template>

<script>

import nasa from '@/services/api/fetchEarth.js'
import Ppsearch from '@/components/Search.vue'
import Ppimages from '@/components/Images.vue'
import Ppvideo from '@/components/Video.vue'
import Spinner from '@/components/Spinner.vue'



export default {
  name:'Results',
  data(){
    return {
      formulario: 'Imagenes',
      qbusqueda: '',
      statusRes: false,
      statusSpinner: false,
      resultado: {},
    }
  },
  components:{ Ppimages, Ppvideo, Spinner, Ppsearch },
  methods:{
    busqueda(q){
      this.changePage = false
      this.statusRes = false
      this.statusSpinner = true
      nasa.search(q)
        .then(json=> {
          this.resultado = {}
          this.resultado = json
          this.statusSpinner = false
          this.statusRes = true
          this.qbusqueda = ''
        })
    },
    searchPlanet(q){
      this.busqueda(q)
    },
    algo(a){
      console.log(`Llegó ${a}`)
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
    this.$bus.$on('search-planet', (t)=>{
      this.busqueda(t)
    })
    
    const id = this.$route.params.id
    const self = this
    this.busqueda(id)  
  }
}


</script>

<style lang="sass" scoped>

.results
  width: 70%

  .newSearch
    background: linear-gradient(180deg, #EEEBEB, #E7E9EE)
    margin: .6rem
    padding: 2rem 0
    border: 1px solid #d3d3d3
    border-bottom: none

    h2 
      font-weight: 700
      font-size: 3rem

  .nullResult
    display: flex
    justify-content: center
    margin: 0 auto
    width: 90%
    div
      h2
       font-weight: 600
    
    img
      background: radial-gradient(red, #DC40A0,#E7E9EE, #E7E9EE)
      width: 100%


  .subir
    width: 40px
    height: 40px
    margin: 10px
    padding: 0
    border-radius: 50%
    position: fixed
    bottom: 0
    left: 0
    background: rgba(185, 19, 205, .5)
    color: #fff
    text-decoration: none 
    font-size: 2em
    font-weight: 700
    z-index: 10











</style>
