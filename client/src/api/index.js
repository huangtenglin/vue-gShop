/*
包含n个接口请求函数的模块
每个函数的返回值都是promise
 */
import ajax from './ajax'
const BASEURL = '';
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(BASEURL + '/position/'+geohash);

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax(BASEURL+'/index_category');

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax(BASEURL+'/shops', {latitude, longitude});

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASEURL+'/login_pwd',{name,pwd,captcha},"POST");
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASEURL+'/sendcode',{phone});
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = (phone,code) =>ajax(BASEURL+'/login_sms',{phone,code},"POST");
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUser = () =>ajax(BASEURL+'/userinfo');
// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () =>ajax(BASEURL+'/logout');

//获取商家用户信息
export const reqGoods = () =>ajax('/shop_goods');
//获取评分
export const reqRating = () =>ajax('/shop_ratings');
//获取用户评论
export const reqInfo = () =>ajax('/shop_info');
