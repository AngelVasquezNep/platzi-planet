<template lang="pug">
  
  .noticias
    h2 Enterate de lo más interesante de Platzi-Planet
    ul
      li(v-for="noticia in noticias")
        h3
          a(:href="noticia.href", target="_blank") {{noticia.title}}
        p {{noticia.description}}
        //- img(:src="noticia.img", v-if="noticia.img")
        a(:href="noticia.href", target="_blank", v-if="noticia.img")
          img(:src="noticia.img", alt="")



</template>

<script>
  import noticias from '@/services/bdd/noticias.js'

  export default {
    name: 'noticias',
    data(){
      return {
         noticias
      }
    }
  }
</script>

<style lang="sass" scoped>

  .noticias
    width: 30%
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
  img 
    width: 90%

  @media screen and (max-width: 1024px)
    div
      width: 35%


  @media screen and (max-width: 800px)
    div
      background: red
      display: none

</style>
