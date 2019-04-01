import Vue from 'vue'
import Vuex from "vuex"
import  * as types from './type'
Vue.use(Vuex)

export default  new Vuex.Store({
  state:{
    count:1,
    grandpa:"",
    userInfo: { name: "jojo" },
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations:{
    [types.INCREMENT] (state){
       state.count++
    },
    [types.DECREMENT] (state){
       state.count--
    },
    enjoin(state,words){
      state.grandpa = words
    },
  },
  getters:{
    getDone: state => {
      return state.todos.filter(item => item.done)
    },
    getLength(state){
      return state.todos.length
    }
  },
  actions:{
    increment({commit}){
      return new Promise((res, rej) => {
        if(res){
          setTimeout(()=>{
          commit(types.INCREMENT)
          },200)
        }
      })
    }
  }
})
