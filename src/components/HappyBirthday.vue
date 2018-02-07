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
    
    iframe(:src='urlComputed', 
          width='200', 
          height='28', 
          style='border:none;overflow:hidden', 
          scrolling='no', 
          frameborder='0', 
          allowtransparency='true')


</template>

<script>
import Megusta from '@/components/Megusta.vue'

export default {
  name: 'HappyBirthday',
  props:['info'],
  components: { Megusta },
  data(){
    return{
      url: 'https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ffacebook.com%2F&layout=button_count&size=large&mobile_iframe=true&width=159&height=28&appId'
    }
  },
  computed:{
    urlComputed(){
      const self = this
      let a = ''
      function change(){
        a = self.url.replace('https%3A%2F%2Ffacebook.com%2F', self.info.url)
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

</style>
