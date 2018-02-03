<template>
  <div>
    <list-header></list-header>
    <list-main></list-main>
  </div>
</template>
<script>
  import axios from 'axios'
  import ListHeader from './header'
  import ListMain from './listmain'
  export default {
    name: "list",
    components: {
      ListHeader,
      ListMain
    }
  }
</script>
<style scoped lang="stylus">

</style>