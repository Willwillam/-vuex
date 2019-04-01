<template>
   <div>
      我是爸爸
     <!--我要通过属性把值传递给我的儿子-->
     <son1 :message="value" :message1="value1" @moreMoney = "getMoreMoney"></son1>
     <son2></son2>
     <div>
       儿子对我说的话 <span style="font-weight: bold">{{value2}}</span>
     </div>
   </div>
</template>

<script>
  import son1 from "./son1"
  import son2 from "./son2"
    export default {
        name: "father",
        components:{
          son1,
          son2,
        },
        data () {
          return{
            value:"你是个乖孩子",
            value1:"加油孩子",
            value2:"",
          }
        },
      methods:{
        getMoreMoney(value){
          this.value2 = value
        },
      }
    }
</script>

<style scoped>

</style>
