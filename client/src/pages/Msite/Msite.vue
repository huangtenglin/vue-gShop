<template>
  <div class="on">
    <section class="msite">
      <HeaderTop :title="address.name">
        <router-link slot="search" to="/search" class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link slot="login" to="/login" class="header_login">
          <span class="header_login_text">登录|注册</span>
        </router-link>
      </HeaderTop>
      <nav class="msite_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(catogorys,index) in categorysArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(catogory,index) in catogorys" :key="index">
                <div class="food_container">
                  <img :src="imgBaseUrl+catogory.image_url">
                </div>
                <span>{{catogory.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list border-1px">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList/>
      </div>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import HeaderTop from '../../components/HeaderTop/HeaderTop';
  import ShopList from '../../components/ShopList/ShopList';
  import 'swiper/dist/css/swiper.min.css';
  import {mapState} from 'vuex'

  export default {
    mounted() {
      this.$store.dispatch('getShops');

      this.$store.dispatch('getCategorys');//初始获取异步数据
    },
    data(){
      return{
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    computed: {
      ...mapState(['address', 'categorys']),
      categorysArr() {
        const max = 8;
        const arr = [];
        const {categorys} = this;
        let smallArr = [];

        categorys.forEach(function(category){
          if(smallArr.length === 0){
            arr.push(smallArr);
          }
          smallArr.push(category);
          if(smallArr.length === max){
            smallArr = [];
          }
        });
        return arr;
      },
    },
    watch:{
      categorys(value){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
        })
      }
    },

    components: {
      HeaderTop,
      ShopList
    }

    //watch是一个单独的组件形式模式
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .msite_header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        margin-left -5%
      .header_title_text
        font-size 20px
        color #fff
        display block
      .header_login
        font-size 15px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
