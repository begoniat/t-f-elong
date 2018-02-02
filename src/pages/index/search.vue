<template>
  <div id="search" class="iconfont">
    <div class="place">
      <p class="place-icon icon">&#xe612;</p>
      <p class="place-add">北京市</p>
      <p class="place-tra icon">&#xe602;</p>
      <p class="place-near-icon icon">&#xe604;</p>
      <p class="place-near">附近</p>
    </div>
    <index-date></index-date>
  </div>
</template>

<script>
  import IndexDate from './date'
  export default {
    name: "index-search",
    components: {
      IndexDate
    }
  }
  var rempx = document.documentElement.clientWidth / 7.5;
  document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
</script>

<style scoped lang="stylus">
  #search
    height: 5.9rem
    overflow: hidden
    margin: 0 12px
    .place
      height: .44rem
      margin-top: 12px
      padding: .24rem 0
      border-bottom: 1px solid #ddd
      position: relative
      display: flex
      .place-icon
        width: 16px
        height: 16px
        display: block
        position: absolute
        top: 50%
        margin-top: -10px
        font-size: 18px
        margin-left: 8px
        line-height: 21px
        color: #999
      .place-add
        line-height: 20px
        overflow: hidden
        padding-right: 20px
        margin-right: 164px
        white-space: nowrap
        text-overflow: ellipsis
        font-size: 16px
        padding-left: 40px
      .place-tra
        width: 12px
        height: 12px
        color: #ccc
        font-size: 20px
      .place-near-icon
        color: #49f
        font-size: 14px
        height: 16px
        width: 14px
        margin-left: 10px
        margin-top: 3px
      .place-near
        margin-left: 4px
        color: #49f
        font-size: 14px
        margin-top: 3px
</style>








