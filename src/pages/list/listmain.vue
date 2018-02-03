<template>
  <div id="list-main">
    <list-history></list-history>
    <list-hot :list='listHot'></list-hot>
    <list-search :list='listSearch'></list-search>
  </div>
</template>
<script>
  import ListHistory from './history'
  import ListHot from './hot'
  import ListSearch from './search'
  import axios from 'axios'
  export default {
    name: "listmain",
    components: {
      ListHistory,
      ListHot,
      ListSearch
    },
    data () {
      return {
        listHot: [],
        listSearch: []
      }
    },
    created () {
      axios.get('/api/list.json')
      .then((res) => {
        this.listHot = res.data.data.hotcity
        this.listSearch = res.data.data.search
        // console.log(this.listSearch)
      })
    }
  }
</script>
<style scoped lang="stylus">
  #list-main
    padding: 6px 12px 12px 12px
    background: #f4f4f4
    overflow: hidden
</style>