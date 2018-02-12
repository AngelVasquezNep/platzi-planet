<template lang="pug">
  div
    p Platzi-planet 2018
    p By Ángel Vasquez
    p: a(href="https://twitter.com/angelvasqueznep?lang=es", target="_blank") Twitter
    p: a(href="https://github.com/AngelVasquezNep/platzi-planet", target="_blank") GitHub

</template>

<script>
export default {
name: 'ppfooter'
}
</script>

<style lang="sass" scoped>
  div
    display: flex
    align-items: center
    flex-direction: column
    justify-content: center
    background: rgb(70, 175, 241)
    margin-top: 5px
    margin-bottom: 0
    font-family: 'Montserrat', sans-serif;

    p
      text-align: center
      padding: 0px 20px
      font-size: 1.2rem
      color: rgb(193, 247, 230)

      a
       color: rgb(193, 247, 230)


  @media screen and (max-width: 800px)
    div
      margin-top: 20px
</style>
