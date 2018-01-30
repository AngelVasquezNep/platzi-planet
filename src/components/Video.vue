<template lang="pug">
  li(v-if="item.data[0].media_type=='video'")
    h2 Title: {{item.data[0].title}}
    input(type="button" value="Ver video" @click="buscarVideo" v-show="mostrarbotton")
    video(:src="video" v-if="changeVideo" controls)
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
  name:'Video',
  props:['item'],
  data(){
    return {
      video: '',
      changeVideo: false,
      mostrarbotton: true,
      id: this.item.data[0].nasa_id
    }
  },
  components:{ Megusta },
  methods:{
    buscarVideo(){
      console.log(this.item.href)
      const self = this
      nasa.get(this.item.href, function(res){
        self.video = res[0]
        self.changeVideo = true
        self.mostrarbotton = false
      })
    },
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

    video
      width: 100% 
      background: rgb(7%, 40.2%, 38.4%) 

    input
      font-size: 1.2em
      font-family: 'Montserrat', sans-serif
      width: 95%
      background: #D76D21
      color: white
      border-style: none
      border-bottom: 4px solid #A25D35
      border-radius: 4px
      padding: 10px
      transition: .2s

      &:hover
        // background: #AB5517
        box-shadow: 0 2px 5px 3px #808080
      &:active
        transform: scale(.95)
  .searchAbout
    text-decoration: underline
    color: #1D654B !important
    cursor: pointer

</style>
