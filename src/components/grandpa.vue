<template>
  <div>
    我是爷爷
    <father></father>
    <div>
      我对孙子1要说的话 <button @click="enjoin">嘱托</button>
    </div>
  </div>
</template>

<script>
  import father from './father'
    export default {
        name: "grandpa",
        components:{
          father
        },
        data () {
          return{
            value1:"在学校好好吃饭",
          }
        },
        methods: {
          enjoin(){
            this.$store.commit("enjoin",this.value1)
          }
        }
    }
</script>

<style scoped>

</style>
