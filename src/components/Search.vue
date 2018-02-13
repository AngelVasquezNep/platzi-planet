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

      form()
        input(type="radio",
             id="videos",
             name="media",
             value="Videos",
             v-model="formulario")
        
        label(for="videos" ) Videos
        
        input(type="radio",
             id="imagenes",
             name="media", 
             value="Imagenes", 
             v-model="formulario")
        
        label(for="imagenes" ) Imágenes
      
      p(v-if="resultado.collection") Total Videos: {{totalVideos}} 
      p(v-if="resultado.collection") Total Imágenes: {{totalImages}}


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

</style>
