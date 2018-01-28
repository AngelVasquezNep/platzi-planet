<template lang="pug">
  li(v-if="item.data[0].media_type=='image'")
    h2 Title: {{item.data[0].title}}
    img(:src="item.links[0].href")
    p {{item.data[0].description}}
    p Para saber más: {{item.data[0].keywords | separacion}}

</template>

<script>
import nasa from '@/services/api/fetchEarth.js'

export default {
  name:'Images',
  props:['item'],
  data(){
    return {
    }
  },
  filters:{
    separacion(...a){
      return `${a[0]}`
    }
  },
  methods:{
    
  }
}
</script>

<style lang="sass" scoped>
  
  li
    background: #EEECEC
    width: 100%
    overflow: hidden
    margin: 10px 0

    img
      width: 90%
    
</style>
