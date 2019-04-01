<template>
  <div style="color: red;border: 1px solid #ccc;padding: 10px;width: 700px;margin:10px auto;border-radius: 10px;">
  我是哥哥
    我的名字是 {{name}}
    <div>
      父亲给我传的值1是 <span style="font-weight: 700">{{message}}</span>
    </div>
    <div>
      父亲给我传的值2是  <span style="font-weight: 700">{{message1}}</span>
    </div>
    <div>
      传递给父亲的数据 <button @click="toFather">给父亲的话</button>
    </div>
    <div>
      这是我要传递给弟弟的数据 <button @click="toLittleBro()">去买酒</button>
    </div>
    <div>
      这是弟弟给我说的话 {{message3}}
    </div>
    <div>
      增加一个数 <button @click="increase">增加</button>{{value}}
      减少一个数 <button @click="decrease">减少</button>
    </div>
    <div>
      爷爷给我的嘱咐 {{message5}}
    </div>
  </div>
</template>

<script>
  import eventVue from "../js/bus"
  import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
       name: "son1",
       //父亲给我传的值 我需要在props里面接收(属性) 血缘传递 根深蒂固
       props :{
         //要定义传入的类型
          message: String,
          message1: String,
       },
      data () {
         return{
           message2:"弟弟晚上给我买瓶酒回来",
           message3:"",
           message4:"这个月零花钱不够了,多给点吧",
           message6:"niubi"
         }
      },
      computed:{
        ...mapState({
                   value: "count",
                   message5:'grandpa',
                   name(state){
                      return (state.userInfo.name + this.message6)
                   }
          }),
      },
      methods:{
        toFather(){
            this.$emit("moreMoney",this.message4)
        },
        // increase(){
        //   this.$store.commit("increment")
        // },
        // decrease(){
        //   this.$store.commit("decrement")
        // },
        ...mapMutations({
          decrease:"DECREMENT"
        }),
        ...mapActions({
          increase:"increment"
        }),
        toLittleBro(){
          eventVue.$emit('getWine',this.message2)
        },
        littleBro(){
          eventVue.$on("toBigBro", (message) => {
            this.message3 = message
          })
        },
      },
      created(){
         this.littleBro()
      }
    }
</script>

<style scoped>

</style>
