<template lang="pug">
  //- div(@scroll="scroled")
  #particles-js
    figure
      img(src="@/assets/nasaLogo.png")
    img.nave(src='@/assets/nave.svg' )

    nav
      ul
        router-link.enlace(to="/") Home
        router-link.enlace(to="cumple") Cumpleaños
        //- li: a(href="#") Home
        //- li: a(href="#") Cumpleaños
</template>

<script>
export default {
  name:'ppheader',
  methods:{
    scroled(ev){
      console.log(window.scrollY)
    }
  }
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

        &:hover
          box-shadow: inset 0px -2px 0px 0px rgb(91, 16, 80)
          color: white


  .nave
    // position: absolute
    width: 100px
    animation: 15s naveOnSpace infinite 


  @keyframes naveOnSpace
    0%
      transform: translateY(-200px)
    25%
      transform: translateY(150px) translateX(50px) rotate(45deg)
    50%
      transform: translateY(0px) translateX(0px) rotate(45deg)
    55%
      transform: translateY(0px) translateX(1500px) rotate(45deg)
    85%
      transform: translateY(0px) translateX(1500px) rotate(225deg)

    100%
      transform: translateY(0px) translateX(-650px) rotate(225deg)

</style>
