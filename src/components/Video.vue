<template lang="pug">
  li(v-if="item.data[0].media_type=='video'")
    p Title: {{item.data[0].title}}
    input(type="button" value="Ver video" @click="buscarVideo" v-show="mostrarbotton")
    video(:src="video" v-if="changeVideo" controls)
    p {{item.data[0].description}}
    p Para saber más: {{item.data[0].keywords | separacion}}

    


</template>

<script>
import nasa from '@/services/api/fetchEarth.js'

export default {
  name:'Video',
  props:['item'],
  data(){
    return {
      video: '',
      changeVideo: false,
      mostrarbotton: true
    }
  },
  methods:{
    buscarVideo(){
      console.log(this.item.href)
      const self = this
      nasa.get(this.item.href, function(res){
        self.video = res[0]
        self.changeVideo = true
        self.mostrarbotton = false
      })
    }
  },
  filters:{
    separacion(...a){
      return `${a[0]}`
    }
  }
}
</script>

<style lang="sass" scoped>
  li
    background: rgba(166, 164, 166, 1)
    width: 100%
    overflow: hidden
    border-top: 2px solid rgb(165, 114, 179)
    border-bottom: 2px solid rgb(165, 114, 179)
    margin: 10px 0
    
    video
      width: 50% 
      background: rgb(7%, 40.2%, 38.4%) 
</style>
