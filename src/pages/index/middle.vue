<template>
  <div>
    <div id="middle" class="iconfont">
      <div class="tool-list">
        <div class="tool-list-account">
          <p class="icon">&#xe6e6;</p>
          <p class="word">账户</p>
        </div>
         <div class="tool-list-order">
          <p class="icon">&#xe61f;</p>
          <p class="word">订单</p>
        </div>
        <div class="tool-list-phone">
          <p class="icon">&#xe613;</p>
          <p class="word">电话</p>
        </div>
      </div>
    </div>
    <div class="border"></div>
  </div>
</template>
<script>
  
</script>
<style scoped lang="stylus">
  #middle
    height: 43px
    .tool-list
      display: flex
      justify-content: space-around
      .tool-list-account,.tool-list-order,.tool-list-phone
        padding: 12px 0
        display: flex
        justify-content: center
        .icon
          font-size: 22px
          float: left
          margin-right: 8px
          color: skyblue
        .word
          float: left
          margin-top: 2px
      .tool-list-order
        border-left: 1px solid #ccc
        border-right: 1px solid #ccc
        padding: 12px 45px
  .border
    border-top: 1px solid #ccc
    border-bottom: 1px solid #ccc
    height: 12px
    background: #f2f2f2
</style>