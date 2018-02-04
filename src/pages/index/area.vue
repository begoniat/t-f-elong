<template>
  <div>
    <div id="area" class="iconfont">
      <p class="icon">&#xe6cf;</p>
      <div class="area-pos">酒店名称/位置不限</div>
      <p class="icon-tra">&#xe602;</p> 
    </div>
    <div id="price" class="iconfont">
      <p class="icon">&#xe641;</p>
      <div class="area-pos">价格星级不限</div>
      <p class="icon-tra">&#xe602;</p>
    </div>
  </div>
</template>
<script>
  var rempx = document.documentElement.clientWidth / 7.5;
  document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
</script>
<style scoped lang="stylus">
  #area,#price
    height: .44rem
    position: relative
    padding: 12px 0
    border-bottom: 1px solid #ccc
    .icon
      position: absolute
      width: 16px
      height: 16px
      top: 50%
      margin-top: -11px
      font-size: .4rem
      margin-left: 8px
      line-height: 21px
      color: #ccc;
    .area-pos
      float: left
      padding-left: 40px
      margin-right: 10px
      color: #ccc
      font-size: 18px
    .icon-tra
      font-size: 23px
      color: #ccc
      margin-bottom: -2px
      float: right
</style>