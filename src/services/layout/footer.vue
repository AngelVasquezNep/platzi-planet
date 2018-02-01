<template lang="pug">
  div
    p Platzi-planet
    p By Ángel Vasquez
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
    height: 9em
    margin-top: 5px
    margin-bottom: 0

    p
      font-size: 1em
      color: rgb(193, 247, 230)

  @media screen and (max-width: 800px)
    div
      margin-top: 100px
</style>
