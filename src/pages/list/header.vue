<template>
  <div id="header" class="iconfont">
    <div class="back" @click="handleBackClick"><</div>
    <div class="search">
      <i class="icon-search">&#xe6cf;</i>
      <input type="text" name="" placeholder="请输入城市名、行政区或景区">
    </div>
  </div>
</template>
<script>
  var rempx = document.documentElement.clientWidth / 7.5;
  document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
  export default {
    name: 'city-header',
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped lang="stylus">
  #header
    height: .88rem
    padding: 0 10px
    display: flex
    align-items: center
    background: #fff
    .back
      font-size: 28px
      color: #858585
      margin-right: 10px
    .search
      border: 1px solid #ddd
      border-radius: 5px
      width: 300px
      height: 32px
      text-align: center
      align-items: center
      display: flex
      background: #f4f4f4
    .icon-search
      font-size: 30px
      color: #ccc
    input
      border: none
      width: 260px
      height: 32
      color: #f4f4f4
      background: #f4f4f4
    input::-webkit-input-placeholder
      color: #ccc
</style>