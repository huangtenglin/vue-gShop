import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqGoods,
  reqRating,
  reqInfo
} from "../api";
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOOD,
  RECEIVE_RATING,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutataion-types';

export default {
  //异步获取地址
  async getAddress({commit, state}) {
    const {latitude, longitude} = state;
    const geohash = latitude + ',' + longitude;
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys();
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //异步获取商店列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state;
    const result = await reqShops({latitude, longitude});
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops}); //间接改变state
    }
  },
  //记录用户的信息
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  //获的用户信息
  async getUser ({commit}) {
    const result = await reqUser();
    if(result.code===0) {
      const user = result.data;
      commit(RECEIVE_USER, {user})
    }
  },
  //用户退出
  async logout({commit}){
    const result = await reqLogout();
    if(result.code === 0){
      commit(RESET_USER);
    }
  },
  //获取商品列表
  async getGoods({commit,state},cb){
    const result = await reqGoods();
    if(result.code === 0){
      const goods = result.data;
      commit(RECEIVE_GOOD,{goods});
      cb && cb();
    }
  },
  //获取用户评论
  async getInfo ({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const result = await reqInfo();
    if(result.code===0) {
      const info = result.data;
      commit(RECEIVE_INFO, {info})
    }
  },
  //获取评分
  async getREATING({commit,state},cb){
    const result = await reqRating();
    if(result.code === 0){
      const ratings = result.data;
      commit(RECEIVE_RATING,{ratings});
      cb && cb();
    }
  },
  //实现food的增加效果
  updateFoodCount({commit,state},{food,isAdd}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food});
    }else{
      commit(DECREMENT_FOOD_COUNT,{food});
    }
  }
}
