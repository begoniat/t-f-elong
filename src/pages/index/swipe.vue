<template>
  <swiper class="slide-container" :options="swiperOption">
    <swiper-slide class="slide-container-swiper" :key="item.id" v-for="item in list">
      <img :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <!-- <swiper :options="swiperOption" ref="mySwiper" class="slide-container">
    <swiper-slide v-for="item in list" class="slide-container-swiper">
      <img :src="item.imgUrl">
    </swiper-slide>
  </swiper> -->
</template>

<script>
  export default {
    name: "index-swiper",
    props: ['list'],
    data () {
      return {
        swiperOption: {
          loop: true,
          pagination: ".swiper-pagination",
          autoplay: 2500,
          autoplayDisableOnInteraction: false,//autoplay禁用交互
          initialSlide:1
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/asset/common/varibles.styl'
  .slide-container
    position:relative
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 37.6%
    .slide-container-swiper
      img
        width: 100%
    .swiper-pagination >>> .swiper-pagination-bullet
      background: #fff
</style>







