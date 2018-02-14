<template lang="pug">
  div
    Ppsearch
    
    .message
      h2 THE SPACE IS YOURS
      img(src="@/assets/elon-musk.jpg")

</template>

<script>

import Ppsearch from '@/components/Search.vue'

export default {
  name:'home',
  components:{ Ppsearch }
}

</script>

<style lang="sass" scoped>
  div
    margin: 10px
    padding: 5px 
    width: 70%
    background: #FFFFFF

  h1
    font-family: 'Montserrat', sans-serif;
    font-weight: 600

  .message
    margin: 0 auto
    background: #E7E9EE
    background: linear-gradient(180deg, #E7E9EE, #fff)
    width: auto
    text-align: center
    h2 
      font-family: 'Montserrat', sans-serif
      font-weight: 700
      margin: 0
      padding: 20px 0
      font-size: 5rem
    img 
      width: 100%


  @media screen and (max-width: 1024px)
    div
      width: 65%

  @media screen and (max-width: 800px)
    div
      width: 100%  
      margin: 0
      padding: 0
  @media screen and (max-width: 650px)
    .message
      h2
        font-size: 2rem
</style>
