<template lang="pug">
  .happy
    h2 {{info.title}}
    img(:src="info.url", onAbort="alert('ha cancelado la carga de la imagen')")
    .pieDePag
      p.author {{info.copyright}} @copyright
      p.fecha {{info.date}}
    p.description {{info.explanation}}
    p
      a(:href="info.hdurl" target="_blank") FULL HD
    
    a.compartir(v-if="info.url" :href="urlImage", target="_blank") compartir 


</template>

<script>
import Megusta from '@/components/Megusta.vue'

export default {
  name: 'HappyBirthday',
  props:['info'],
  components: { Megusta },
  data(){
    return{
      urlOrigin: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffacebook.com%2F&amp;src=sdkpreparse'
    }
  },
  computed:{
    urlImage(){
        const self = this
        let a = ''
        function change () {
          // a = self.urlOrigin.replace('facebook.com%2F', 'images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg')
          a = self.urlOrigin.replace('https%3A%2F%2Ffacebook.com%2F', self.info.hdurl)
        }
        change()
        return a
      }
  }

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
  
  .compartir
    font-size: 1rem
    font-family: 'Montserrat', sans-serif
    width: 20%
    border-style: none
    margin: 5px
    padding: 5px
    transition: .2s
    border-radius: 4px
    border-bottom: 4px solid #fff
    background: #fff
    text-decoration: none
    transition: all .1s
    color: #fff
    background: #475AB1
    border-bottom: 1px solid #475AB1

    &:hover 
      background: rgb(255, 30, 107)
      color: rgb(245, 245, 245) 
      border-bottom: 4px solid rgb(138, 20, 60)
      background: rgb(199, 28, 86)
      box-shadow: 0px 2px 5px 2px #808080
      cursor: pointer
    &:active
      transform: scale(1.2)
    &:focus
      outline: 0

  

</style>
