<template lang="pug">
  div(@scroll="scroled")

    figure
      img(src="@/assets/nasaLogo.png")
      img.nave(src='@/assets/nave.svg' )

    nav
      ul
        li: a(href="#") Home
        li: a(href="#") Cumpleaños
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
  div
    display: flex
    justify-content: space-between
    align-content: center
    align-items: center
    background: linear-gradient(180deg, #202A90, #E7E9EE)
    // background: linear-gradient(to left/right, white, black)
    // background: rgb(117, 235, 225)
    width: 100%
    margin: 0
    height: 200px

    figure
      margin: 0

      img
        height: 60px
        padding: 20px


    ul
      height: inherit

      li
        height: inherit


        a
          text-decoration: none
          display: flex
          align-items: center
          align-content: center
          text-align: center
          justify-content: center
          height: 40px
          width: 90px
          color: rgb(91, 16, 80)

        &:last-child
          margin-right: 30px
  .nave
    position: absolute
    width: 100px
    animation: 10s naveOnSpace infinite 


  @keyframes naveOnSpace
    0%
      transform: translateY(-200px)
    25%
      transform: translateY(100px) translateX(50px) rotate(45deg)
    50%
      transform: translateY(0px) translateX(50px) rotate(0deg)
    55%
      transform: rotate(45deg) translateX(50px)
    75%
      transform: translateY(0px) translateX(1000px) rotate(45deg)
    100%
      transform: translateY(-200px) translateX(0px) rotate(270deg)

</style>
