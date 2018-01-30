<template lang="pug">
  .happy
    h2 {{info.title}}
    img(:src="info.url")
    .pieDePag
      p.author {{info.copyright}} @copyright
      p.fecha {{info.date}}
    p.description {{info.explanation}}
    p
      a(:href="info.hdurl" target="_blank") FULL HD
</template>

<script>
import Megusta from '@/components/Megusta.vue'

export default {
  name: 'HappyBirthday',
  props:['info'],
  components: { Megusta },
  data(){
    return{
      algo: 'Algo'
    }
  },

}
</script>

<style lang="sass" scoped>

  .happy
    padding: 10px

  h2
    margin-top: 30px
    padding: 15px
    padding-top: 30px
    border-top: 1px solid #808080    

  img
    width: 100%

  .pieDePag
    display: flex
    justify-content: space-between
    font-size: .9em
  a
    font-size: 1.2em

</style>
