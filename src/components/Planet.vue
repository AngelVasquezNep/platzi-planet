<template lang="pug">
  //- .container(v-if = "item.data[0].media_type=='image'") 
  .container(v-if = "changes") 
    
    h2 Titulo
    figure
      img(:src="item.links[0].href")
    .info
      p {{item.data[0].description}}

</template>

<script>
import nasa from '@/services/api/fetchEarth'

export default {
  name: 'Planet',
  data(){
    return{
      item: {},
      changes: false
    }
  },
  created(){
    const id = this.$route.params.id
    const self = this
    nasa.search(id)
      .then(json=> {
        console.log("Primer promesa")
        this.item = json.collection.items[0]
        this.changes = true
      })
  }
}
</script>

<style lang="sass" scoped>
  .container
    width: 75%
    display: inline-block
    padding: 5px
    // align-items: center
    // justify-content: center
    // background-color: #164e35
    
    h2 
      background: #808080
      color: #fff
      margin: 0
      padding: 15px 0
      border-radius: 5px 5px 0 0 

    figure  
      padding: 0
      margin: 0 auto
      width: 100%
      background: #808080

      img
        width: 80%
    
    .info
      p
        margin: 0
        padding: 15px 0
      background: #808080



  @media screen and (max-width: 800px)
    .container
      width: 100%  

</style>
