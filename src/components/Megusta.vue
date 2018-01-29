<template lang="pug">
  div
    .botones
      input(type="button" value="me gusta") 
      input(type="button" value="comentar" @click="coment") 
      input(type="button" value="compartir")
    .comentarios(v-show="mostrarComentario") 
      input(type="text" v-model="newComent.text" placeholder="Agregue su comentario")
      //- p(v-show="newComent.text!=''") {{newComent.text}} 

      p(v-for="com in comentariohecho") {{com.text}} {{com.hora}}  
      
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
      background: rgb(255, 30, 107)
      color: rgb(245, 245, 245)
      border-style: none
      border-bottom: 4px solid rgb(138, 20, 60)
      border-radius: 4px
      padding: 5px
      margin: 5px
      transition: .2s

      &:hover
        background: rgb(199, 28, 86)
      &:active
        transform: scale(.95)

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

    p
      padding: 10px
      background-color: #f5f5f5
      margin: 0
      color: #000

    
</style>
