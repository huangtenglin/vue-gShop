import Vue from 'vue';
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOOD,
  RECEIVE_RATING,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
}
  from './mutataion-types'
export default {

  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  //保存用户信息
  [RECEIVE_USER](state, {user}) {
    state.user = user;
  },
  //重置用户信息
  [RESET_USER](state) {
    state.user = {}
  },
  //保存用户信息
  [RECEIVE_GOOD](state,{goods}){
    state.goods = goods;
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info;
  },
  [RECEIVE_RATING](state,{ratings}){
    state.ratings = ratings;
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    //如果第一次没有count,则我们不能进行数据绑定，则要手动设置绑定
    if(!food.count){
      Vue.set(food,'count',1)
      //将food添加到cartFoods中
      state.cartFoods.push(food);
    }else{
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--;
      //当变为0的时候，将food从cartFood中移除
      state.cartFoods.splice(state.cartFoods.indexOf(food),1)
    }else if(food.count === 0){
      food.count = 0;
    }
  }
}

