<template lang="pug">
  //- div(@scroll="scroled")
  #particles-js
    img.nave(src='@/assets/nave.svg' )
    figure
      a(href="https://www.nasa.gov/" target="_blank") 
        img(src="@/assets/nasaLogo.png")

    nav
      ul
        router-link.enlace(to="/") Home
        router-link.enlace(to="/cumple") Cumpleaños
        //- li: a(href="#") Home
        //- li: a(href="#") Cumpleaños
</template>

<script>
export default {
  name:'ppheader',
}
</script>

<style lang="sass" scoped>
  #particles-js
    display: flex
    justify-content: space-between
    align-content: center
    align-items: center
    background: linear-gradient(180deg, #202A90, #E7E9EE)
    width: 100%
    margin: 0
    height: 200px
    overflow: hidden

    figure
      margin: 0

      img
        height: 80px
        padding: 0px

    nav
      display: flex


    ul
      height: inherit
      margin: 0
      padding: 15px

      .enlace
        text-decoration: none
        color: rgb(91, 16, 80)
        padding: 10px
        cursor: pointer
        transition: all .5s
        outline: none

        &:hover, &:focus
          box-shadow: inset 0px -2px 0px 0px rgb(91, 16, 80)
          color: white

    
  .nave
    width: 100px
    padding: 10px
    animation: 15s naveOnSpace infinite 


  @keyframes naveOnSpace
    0%
      transform: translateY(-200px)
    15%
      transform: translateX(0px)
    25%
      transform: translateX(0px)
    50%
      transform: translateX(0px) rotate(45deg)
    55%
      transform: translateY(0px) translateX(1500px) rotate(45deg)
    85%
      transform: translateY(0px) translateX(1500px) rotate(225deg)

    100%
      transform: translateY(0px) translateX(-650px) rotate(225deg)

  @media screen and (max-width: 800px)
    #particles-js
      display: block
      height: 260px

      nav
        display: initial


</style>
