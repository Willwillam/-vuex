<template>
    <div style="color: blue;border: 1px solid #ccc;padding: 10px;width: 700px;margin:10px auto;border-radius: 10px">
      我是儿子2
      我的id是 {{getDoneId}} 我的长度是 {{getLength}}
      哥哥叫我做的事 {{message}}
      <div>
        这是我要传给哥哥的数据
       <button @click="toBigBro">反馈</button>
      </div>
      <div>
        爷爷给我的嘱托 {{message}}
      </div>
    </div>
</template>

<script>
  import eventVue from "../js/bus.js"
  import {mapGetters} from 'vuex'
    export default {
        name: "son2",
        data(){
          return {
            message:"",
            message1:"你的酒买好了,给钱",
          }
        },
      created(){
          this.getWine()
      },
      computed:{
        message2(){
          return this.$store.state.grandpa
        },
        ...mapGetters({
          getDoneId : 'getDone',
          getLength : 'getLength',
        })
      },
      methods : {
          toBigBro(){
            eventVue.$emit("toBigBro",this.message1)
          },
          getWine () {
            eventVue.$on("getWine",(messages)=>{
              this.message = messages
            })
          }
      }
    }
</script>

<style scoped>

</style>
