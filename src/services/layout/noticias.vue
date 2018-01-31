<template lang="pug">
  
  div
    h2 Enterate de lo más interesante en Platzi-Planet
    ul
      li(v-for="noticia in noticias")
        h3 {{noticia.title}}
        p {{noticia.description}}



</template>

<script>
  import Noticias from '@/services/bdd/noticias.js'

  export default {
    name: 'noticias',
    data(){
      return {
        noticias: Noticias
      }
    }
  }
</script>

<style lang="sass" scoped>

  div
    width: 25%
    margin: 10px
    background: #ffff

  h2
    padding: 10px 5px
    margin: 0
    border-bottom: 1px solid rgb(86.4%, 87.8%, 86.7%)

  ul
    margin: 0
  li
    border-bottom: 1px solid rgb(86.4%, 87.8%, 86.7%)
    background: rgba(93.2%, 93.7%, 93.7%, 0.1)
    margin-top: 5px
    margin-bottom: 5px

  @media screen and (max-width: 800px)
    div
      background: red
      display: none

</style>
