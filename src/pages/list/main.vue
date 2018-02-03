<template>
  <div id="list-main">
    <list-history></list-history>
    <list-hot :list='listHot'></list-hot>
  </div>
</template>
<script>
  import ListHistory from './history'
  import ListHot from './hot'
  import axios from 'axios'
  export default {
    name: "listmain",
    components: {
      ListHistory,
      ListHot
    },
    data () {
      return {
        listHot: []
      }
    },
    created () {
      axios.get('/api/list.json')
      .then((res) => {
        this.listHot = res.data.data.hotcity
        console.log(res)
      })
      .catch((res) => {

      })
    }
  }
</script>
<style scoped lang="stylus">
  #list-main
    padding: 6px 12px 12px 12px
    background: #f4f4f4
</style>