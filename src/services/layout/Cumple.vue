<template lang="pug">
  .cumple
    h1 Ingresa una fecha importante para ti y conoce cual fue la foto 
       | más popular de la NASA 
    form.formulario(@submit.prevent="buscarFoto")
      input.calendario(type="date", v-model="fecha" required)
      input.enviar(type="submit")
    
    spinner(v-if="!changeInfo")
    .imageDay(v-if="changeInfo")
      HappyBirthday(:info="info" :key="info.url")



</template>

<script>
import HappyBirthday from '@/components/HappyBirthday.vue'
import nasa from '@/services/api/fetchEarth.js'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'Cumple',
  components: { HappyBirthday, Spinner },
  data(){
    return {
      changeInfo: false,
      fecha: ''
    }
  },
  methods: {
    buscarFoto(){
      this.changeInfo = false
      nasa.cumple(this.fecha)
        .then(json =>{
          this.changeInfo = true
          this.info = json
        })
    }
  },
  mounted(){
    nasa.cumple('')
      .then(json=>{
        this.info = json
        this.changeInfo = true
      })
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

  @media screen and (max-width: 800px)
    .cumple
      width: 100%  
      margin: 0
      padding: 0


</style>
