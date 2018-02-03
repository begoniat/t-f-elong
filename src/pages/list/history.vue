<template>
  <div id="history">
    <div class="title">搜索历史</div>
    <div class="city-list">
      <ul>
        <li>
          <span>北京</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "list-history"
  }
</script>
<style scoped lang="stylus">
  #history
    padding: 0 12px
    margin-bottom: 8px
    border-bottom: 1px solid #ddd
    .title
      font-size: 10px
      margin-bottom: 6px
      line-height:24px
      color: #999
    .city-list
      ul
        padding-bottom: 1px
        overflow: hidden
        li
          padding: 0 12px
          width: 23%
          border-radius: 3px
          margin-right: 5%
          margin-bottom: 12px
          background: #FFF
          height: 40px
          border: 0
          float: left
          text-align: center
          span
            line-height: 40px
</style>