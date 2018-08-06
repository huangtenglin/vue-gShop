import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store';
import './mock/mockServer.js';
import VueLazyload from 'vue-lazyload';
import {Button} from 'mint-ui';
import Split from "./components/Split/Split.vue";
import './filters';
import loading from './common/images/loading.gif';
Vue.component('Split',Split);
Vue.component(Button.name,Button);
//加载模块化
Vue.use(VueLazyload,{
  loading,
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h=>h(App),
    router,
    store
});

