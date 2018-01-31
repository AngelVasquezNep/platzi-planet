<template lang="pug">
  .container 
    p(v-if="elementos.collection") 
    img(v-if="elementos.collection"
         :src="elementos.collection.items[0].href")
</template>

<script>
import nasa from '@/services/api/fetchEarth'


export default {
  name: 'Planet',
  data(){
    return{
      elementos: {},
      datajson: {}
    }
  },
  created(){
    // const id = this.item.data[0].nasa_id
    const id = this.$route.params.id
    const self = this
    nasa.getById(id)
      .then(json=> {
        console.log("Primer promesa")
        this.elementos = json
        console.log(this.elementos)
      })
      .then(()=>{
        nasa.get(this.elementos.collection.items[this.elementos.collection.items.length - 1].href, function(json){
          self.datajson = json
          console.log(json)
        })
      })

  }
}
</script>

<style lang="sass" scoped>
  .container
    width: 75%
    display: block

    img
      width: 90%
</style>
