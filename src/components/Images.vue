<template lang="pug">
  li(v-if="item.data[0].media_type=='image'")
    .titulo
      h2 Title: {{item.data[0].title}}
    figure
      img(:src="item.links[0].href")
    p {{item.data[0].description}}
    p.goplanet(@click="goToPlanet(item.data[0].nasa_id)") Go to Planet !
    p Para saber más: 
      span.searchAbout(
                   v-for="t in item.data[0].keywords",
                   @click="searchPlanet(t)",
                   title="Da click para saber más acerca de este tema"
                   ) {{t}} | 
    megusta(:item="item")

</template>

<script>
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
    
    searchPlanet(t){
      this.$bus.$emit('search-planet', t)
    },

    goToPlanet(id){
      this.$router.push({name: 'planet', params: {id}})
    }

  }
}
</script>

<style lang="sass" scoped>
  
  li
    background: #EEECEC
    width: 80%
    overflow: hidden
    margin: 10px 0
    border: 1px solid rgb(211, 211, 211)
    align-self: center
    figure
      width: 100%
      margin: 0
      img
        width: 100%


    .titulo
      min-height: 100px  
      margin: 0
      display: flex
      align-items: center
      justify-content: center
      
      h2
        margin: 0
    
  .goplanet
    margin: 10px 0
    font-weight: 800

  .searchAbout, .goplanet
    text-decoration: underline
    color: #1D654B !important
    cursor: pointer
  



  @media screen and (max-width: 800px)
    li
      width: 90%  
</style>
