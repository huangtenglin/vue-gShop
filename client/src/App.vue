<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFoot"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue';

  export default {
    //异步显示数据
    mounted() {
      this.$store.dispatch('getAddress');
      //异步获取用户个人信息账号
      this.$store.dispatch('getUser');
    },
    components: {
      FooterGuide,
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
    background: #f5f5f5
    position relative
</style>
