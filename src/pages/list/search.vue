<template>
  <div id="search">
    <div class="all-city">
      <ul v-for="items in list">
        <li>{{items.letter}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "list-search",
    props: {
      list: Array
    }
  }
</script>
<style scoped lang="stylus">
  .all-city
    margin-bottom: 12px
    padding: 17px 12px 25px
    ul
      li
        width: 16%
        margin-right: 2.5%
        margin-bottom: 2.5%
        border-radius: 3px
        height: 35px
        background: #FFF
        border: 1px solid #ccc
        text-align: center
        line-height: 33px
        float: left
</style>