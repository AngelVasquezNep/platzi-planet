<template lang="pug">

    //- p(@click="volver") Volver
    ppimages(v-if="changes", :item="item")

</template>

<script>
import nasa from '@/services/api/fetchEarth'
import Ppimages from '@/components/Images.vue'

export default {
  name: 'Planet',
  components: {Ppimages },
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
        this.item = json.collection.items[0]
        this.changes = true
      })
  },
  methods:{
    volver(){
      window.history.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
