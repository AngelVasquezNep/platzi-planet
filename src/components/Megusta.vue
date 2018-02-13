<template lang="pug">
  div
    p.alertMegusta(v-show="megusta") A ti y a toda la Galaxia les gusta esta imagen
    //- iframe(:src='urlImage', width='132', height='28', style='border:none;overflow:hidden', scrolling='no', frameborder='0', allowtransparency='true')
    .botones
      input(type="button", 
            value="me gusta", 
            title="Me gusta",
            @click="addMegusta", 
            :class="{megustaOk: megusta}")  

      input(type="button", 
            value="comentar", 
            title="Deja tu comentario",
            @click="coment") 

      a(:href="urlImage", target="_blank") compartir 

    .comentarios(v-show="mostrarComentario") 

      div(v-for="(com, index) in comentariohecho", class="newComent") 
        p {{com.text}} 
        p(class="horario") Realizado a las: {{com.hora}}  
        span(class="cancel", 
             @click="removeComent(index)",
             title="Eliminar comentario" ) x
      
      input(type="text", 
            v-model="newComent.text", 
            placeholder="Agregue su comentario",
            @keyup.enter="addComentario")
      
      input.enviar(type="button", 
            value="enviar", 
            @click="addComentario",
            @keyup.enter="addComentario")
</template>

<script>
  export default {
    name: 'Megusta',
    props: ['item'],
    data(){
      return{
        mostrarComentario: false,
        comentariohecho: [],
        newComent:{text:'', hora:0},
        mostrarLink: false,
        megusta: false,
        urlOrigin: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffacebook.com%2F&amp;src=sdkpreparse'
      }
    },
    methods:{
      coment(){
        if(this.mostrarComentario == true) {
          this.mostrarComentario = false 
        } else if(this.mostrarComentario == false) {
          this.mostrarComentario = true
        }
      },
      addComentario(){
        if(this.newComent.text != ''){
          let hoy = new Date()
          this.newComent.hora = `${hoy.getHours()}:${hoy.getMinutes()}`
          this.comentariohecho.push(this.newComent)
          this.newComent = {text:'', hora:0}
        }
      },
      
      compartir(){
        
      },
      removeComent(index){
        this.comentariohecho.splice(index,1)
      },
      addMegusta(){
        this.megusta ? this.megusta = false : this.megusta = true
      }
    },
    computed:{
      urlImage(){
        const self = this
        let a = ''
        function change () {
          // a = self.urlOrigin.replace('facebook.com%2F', 'images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg')
          a = self.urlOrigin.replace('https%3A%2F%2Ffacebook.com%2F', self.item.links[0].href)
        }
        change()
        return a
      }
    }
  }  
</script>

<style lang="sass" scoped>
  div 
    background-color: #fff
    color: #fff

    .link
      color: #000
      padding: 20px
      p
        &:last-child
          color: rgb(1.1%, 30.9%, 99.9%)
          font-weight: 700
        
      p
        margin: 0
    
    .megustaOk
      background: rgb(239, 25, 141) !important
      color: #000 !important
      border-bottom: 4px solid rgb(170, 4, 110) !important
      box-shadow: 0px 2px 5px 2px #808080
      cursor: pointer
      outline: 0
      transform: scale(.95)

    .alertMegusta
      margin: 0
      padding: 10px
      background: rgb(67, 186, 209)
      // color: #e36a25 !important

    input[type="button"], a
      font-size: .9em
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

    a
      color: #fff
      background: #475AB1
      border-bottom: 1px solid #475AB1

    input[type="text"]
      width: 91%
      margin: 5px
      padding: 5px
      font-family: 'Montserrat', sans-serif
      
    .comentarios
      margin-top: 5px
      border-top: 1px solid rgb(235, 235, 235)
      padding: 10px 0
      input[type="button"]
        align-content: flex-end

    .botones
      display: flex
      justify-content: space-around 
      width: 100% 

    
    
    .newComent
      padding: 10px
      margin: 10px
      background-color: #f5f5f5
      color: #000
      border: 1px solid rgba(253, 22, 223, 0.1)
      border-radius: 5px
      position: relative
      transition: .2s
      padding-bottom: 0
      
      &:hover
        background-color: rgb(192, 192, 192)

    .horario
      border-top: 1px solid #b9b9b9
      margin: 0
      padding: 2px
      display: flex
      justify-content: flex-end

    .enviar
      width: 80% !important
    

    .cancel
      border: 1px solid rgba(253, 22, 223, 0.1)
      padding: 5px 10px
      border-radius: 20px
      margin: 5px
      color: #808080
      position: absolute
      top: 0
      right: 0
      font-weight: 600
      transition: .1s
      cursor: pointer
      
      &:hover
        background: rgb(211, 15, 108)
        box-shadow: 0px 2px 5px #000
        color: #fff

      &:active
        transform: scale(.9)
  

  @media screen and (max-width: 800px)
    div
      input[type="button"], a
        font-size: .9em

  @media screen and (max-width: 500px)
    div
      input[type="button"], a
        font-size: .8em


</style>
