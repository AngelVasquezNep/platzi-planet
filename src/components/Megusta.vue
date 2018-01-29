<template lang="pug">
  div
    .botones
      input(type="button" value="me gusta") 
      input(type="button" value="comentar" @click="coment") 
      input(type="button" value="compartir")
    .comentarios(v-show="mostrarComentario") 
      input(type="text" v-model="newComent.text" placeholder="Agregue su comentario")
      //- p(v-show="newComent.text!=''") {{newComent.text}} 

      div(v-for="com in comentariohecho", class="newComent") 
        p {{com.text}} 
        p(class="horario") Realizado a las: {{com.hora}}  
        span(class="cancel") x
      
      input(type="button" value="enviar" @click="addComentario")
</template>

<script>
  export default {
    name: 'Megusta',
    data(){
      return{
        mostrarComentario: false,
        comentariohecho: [],
        newComent:{text:'', hora:0}
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
      }
    }
  }  
</script>

<style lang="sass" scoped>
  div 
    background-color: #fff
    color: #fff


    input[type="button"]
      font-size: 1.2em
      font-family: 'Montserrat', sans-serif
      width: 20%
      border-style: none
      margin: 5px
      padding: 5px
      transition: .2s
      border-radius: 4px
      border-bottom: 4px solid #fff
      background: #fff

      &:hover
        background: rgb(255, 30, 107)
        color: rgb(245, 245, 245)
        border-bottom: 4px solid rgb(138, 20, 60)
        background: rgb(199, 28, 86)
        box-shadow: 0px 2px 5px #000
        cursor: pointer
      &:active
        transform: scale(.95)
      &:focus
        outline: 0

    input[type="text"]
      width: 91%
      font-size: 1.2em
      margin: 5px
      padding: 5px
      font-family: 'Montserrat', sans-serif

    .comentarios
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
    

    .cancel
      box-shadow: 0px 2px 5px #000
      border: 1px solid rgba(253, 22, 223, 0.1)
      padding: 5px 10px
      border-radius: 20px
      margin: 5px
      color: #fff
      background: rgb(211, 15, 108)
      position: absolute
      top: 0
      right: 0
      font-weight: 600
      transition: .1s
      
      &:hover
        background: rgb(139, 2, 67)
        cursor: pointer
      &:active
        transform: scale(.9)

    
</style>
