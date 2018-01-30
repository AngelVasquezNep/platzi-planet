<template lang="pug">
  li(v-if="item.data[0].media_type=='image'")
    h2 Title: {{item.data[0].title}}
    img(:src="item.links[0].href")
    p {{item.data[0].description}}
    p Para saber más: 
      span.searchAbout(v-for="t in item.data[0].keywords",
                   @click="searchAbout(t)",
                   href="#") {{t}} | 
    megusta(:item="item")

</template>

<script>
import nasa from '@/services/api/fetchEarth.js'
import Megusta from '@/components/Megusta.vue'

export default {
  name:'Images',
  props:['item'],
  data(){
    return {
    }
  },
  components:{ Megusta },
  methods:{
    searchAbout(t){
      this.$bus.$emit('search-about', t)
    }
  }
}
</script>

<style lang="sass" scoped>
  
  li
    background: #EEECEC
    width: 100%
    overflow: hidden
    margin: 10px 0
    border: 1px solid rgb(211, 211, 211)

    img
      width: 90%
    
  .searchAbout
    text-decoration: underline
    color: #1D654B !important
    cursor: pointer
    
</style>
