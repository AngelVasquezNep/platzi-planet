<template lang="pug">
  .results

    ppsearch(:resultado="resultado", @search-planet="searchPlanet")

    spinner(v-show="statusSpinner")

    .nullResult(v-if="statusRes")
      div(v-if="!resultado.collection.items.length")
        h2 Lo sentimos, no hallamos lo que buscabas, intenta de nuevo.
        img(src="@/assets/invasion.png")
    

    ul(v-if="items.length > 0")
      
      a.subir(v-if="items.length > 0", href="#") ^


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

import Ppsearch from '@/components/Search.vue'
import nasa from '@/services/api/fetchEarth.js'
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
      changePage:true
    }
  },
  components:{ Ppimages, Ppvideo, Spinner, Ppsearch },
  methods:{
    busqueda(){
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

    const id = this.$route.params.id
    const self = this
    nasa.search(id)
      .then(json=> {
        this.resultado = json.collection.items[0]
        statusRes = false
        statusSpinner = false
      })
  
  }
}


</script>

<style lang="sass" scoped>









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
