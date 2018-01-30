<template lang="pug">
  .cumple
    h1 Ingresa una fecha importante para ti y conoce cual fue la foto 
       | más popular de la NASA 
    form.formulario(@submit.prevent="buscarFoto")
      input.calendario(type="date" required)
      input.enviar(type="submit")
    
    HappyBirthday(v-for="i in info", :info="i" :key="i.url")

</template>

<script>
import HappyBirthday from '@/components/HappyBirthday.vue'

export default {
  name: 'Cumple',
  components: { HappyBirthday },
  data(){
    return {
      info: [
        {
            "copyright": "Pierre Destribats", 
            "date": "2017-01-10", 
            "explanation": "Who guards the north?  The featured picture was taken last March in Finnish Lapland where weather can include sub-freezing temperatures and driving snow.  Surreal landscapes sometimes result, where white alien-looking sentinels seem to patrol the landscape.  In actuality though, the aliens are snow-covered trees, and the red hut they seem to be guarding is an outhouse.  Far in the distance, behind this uncommon Earthly vista, is a beautiful night sky which includes a green aurora, bright stars, and streaks of orbiting satellites.  Of course, in the spring, the trees thaw and Lapland looks much  different.", 
            "hdurl": "https://apod.nasa.gov/apod/image/1701/SnowTreesAurora_Destribats_3000.jpg", 
            "media_type": "image", 
            "service_version": "v1", 
            "title": "Sentinels of a Northern Sky", 
            "url": "https://apod.nasa.gov/apod/image/1701/SnowTreesAurora_Destribats_1080.jpg"
          }
      ]
    }
  },
  methods: {
    buscarFoto(){
      console.log("TODO OK")
    }
  }
}
</script>

<style lang="sass" scoped>

  .cumple
    width: 75%


  .calendario
    font-family: 'Montserrat', sans-serif
    font-size: 1.2em
    padding: 5px
    text-align: center
    border-style: none
    border-radius: 5px
    outline: none

  .enviar
    margin: 0 20px
    padding: 5px
    padding-top: 10px
    font-size: 1.2em
    width: 20%
    min-width: 100px
    outline: none
    border-style: none
    border-radius: 5px
    transition: .2s
    background: #E7E9EE
    &:hover, &:focus
      box-shadow: 0 3px 2px 3px #808080
      color: #fff
      background-color: #6F3E6E




</style>
