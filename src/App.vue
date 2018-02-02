<template lang="pug">

  #app
    ppheader
    
    .container
      router-view
      //- pphome
      //- ppcumple
      ppnoticias

    ppfooter

</template>

<script>
import Ppfooter from '@/services/layout/footer.vue'
import Ppheader from '@/services/layout/header.vue'
import Pphome from '@/services/layout/home.vue'
import Ppnoticias from '@/services/layout/noticias.vue'
import Ppcumple from '@/services/layout/Cumple.vue'


export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{ Ppfooter, Ppheader, Pphome, Ppnoticias, Ppcumple }
}
</script>

<style lang="sass">

#app
  // font-family: 'Avenir', Helvetica, Arial, sans-serif
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  align-content: center
  color: #2c3e50
  display: block
  height: 100vh
  margin: 0 auto


h1, h2
  font-weight: normal


ul
  list-style-type: none
  padding: 0


li
  display: inline-block
  margin: 0 10px


a
  color: #42b983

.container
  display: flex
  align-content: space-between


.right
  background: red
  display: block
  height: 100px
  width: 25%





</style>
