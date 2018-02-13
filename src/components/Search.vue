<template lang="pug">
  .search
    
    h1 ¡Bienvenido a Platzi-Planet!
    
      //- form(@submit.prevent="busqueda" )
    form(@submit.prevent="goToPlanet(qbusqueda)")
      
      input.buscador(type="search",
            v-model="qbusqueda", 
            placeholder="¿Qué quieres saber?",
            required)

      input(type="submit", value="Enviar")


      //- form()
      //-   input(type="radio",
      //-        id="videos",
      //-        name="media",
      //-        value="Videos",
      //-        v-model="formulario")
        
      //-   label(for="videos" ) Videos
        
      //-   input(type="radio",
      //-        id="imagenes",
      //-        name="media", 
      //-        value="Imagenes", 
      //-        v-model="formulario")
        
      //-   label(for="imagenes" ) Imágenes
      
      //- p(v-if="resultado.collection") Total Videos: {{totalVideos}} 
      //- p(v-if="resultado.collection") Total Imágenes: {{totalImages}}


</template>

<script>


// import nasa from '@/services/api/fetchEarth.js'


export default {
  name:'search',
  props:['resultado'],
  data(){
    return {
      formulario: 'Imagenes',
      qbusqueda: '',
    }
  },
  methods:{
    busqueda(){
      this.$emit("search-planet", this.qbusqueda)
    },
    goToPlanet(id){
      this.$router.push({name: 'results', params: {id}} )
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
  .search
    display: block
    margin: 0 auto
    background: #E7E9EE
    width: 100%
    padding: 2em 0
    h1
      font-weight: 700

  .buscador
    padding: 5px 10px
    border-radius: 10px
    border-style: none
    &:focus
      outline: 0

  input
    margin: 10px
    font-size: 1.2rem
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


</style>
