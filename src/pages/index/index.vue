<template>
  <div>
    <index-swiper :list="indexList"></index-swiper>
    <index-search></index-search>
    <!-- <index-date></index-date> -->
  </div>
</template>
<script>
  import IndexSwiper from './swipe'
  import IndexHeader from './header'
  import IndexSearch from './search'
  // import IndexDate from './date'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      IndexSwiper,
      IndexHeader,
      IndexSearch,
      // IndexDate
    },
    data () {
      return {
        indexList: []
      }
    },
    methods: {

    },
    created () {
        axios.get('/api/index.json')
        .then((res) => {
          const detailInfo = res.data.data
          this.indexList = detailInfo.slider
        })
        .catch((res) => {

        })
      }
  }
</script>
