<template>
  <div>
    <index-swiper :list="indexList"></index-swiper>
    <index-search></index-search>
    <index-list :list="iconList"></index-list>
    <index-middle></index-middle>
    <index-img></index-img>
    <index-place :list='indexPlace'></index-place>
  </div>
</template>
<script>
  import IndexSwiper from './swipe'
  import IndexHeader from './header'
  import IndexSearch from './search'
  import IndexList from './list'
  import IndexMiddle from './middle'
  import IndexImg from './img'
  import IndexPlace from './place'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      IndexSwiper,
      IndexHeader,
      IndexSearch,
      IndexList,
      IndexMiddle,
      IndexImg,
      IndexPlace
    },
    data () {
      return {
        indexList: [],
        iconList: [],
        indexPlace: []
      }
    },
    created () {
        axios.get('/api/index.json')
        .then((res) => {
          this.indexList = res.data.data.slider
          this.iconList = res.data.list.icon
          this.indexPlace = res.data.city.cityImg
        })
        .catch((res) => {

        })
      }
  }
</script>
<style lang="stylus" scoped>

</style>