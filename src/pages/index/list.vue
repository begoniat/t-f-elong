<template>
  <div>
    <div id="list" >
      <div class="icon-list" v-for="item in list">
        <p class="icon-name iconfont" v-html='item.iconName'></p>
        <p class="font-name">{{item.fontName}}</p>
      </div>
    </div>
    <div class="border"></div>
  </div>
</template>
<script>
  export default {
    name: "icon-list",
    props: {
      list: Array
    }
  }
</script>
<style scoped lang="stylus">
  #list
    height: 3rem
    div:nth-child(1)
      p:nth-child(1)
        color: red
    div:nth-child(2)
      p:nth-child(1)
        color: lightblue
    div:nth-child(3)
      p:nth-child(1)
        color: lightgreen
    div:nth-child(4)
      p:nth-child(1)
        color: green
    div:nth-child(5)
      p:nth-child(1)
        color: orange
    div:nth-child(6)
      p:nth-child(1)
        color: yellow
    div:nth-child(7)
      p:nth-child(1)
        color: lightblue
    div:nth-child(8)
      p:nth-child(1)
        color: yellow
    div:nth-child(9)
      p:nth-child(1)
        color: red
    div:nth-child(10)
      p:nth-child(1)
        color: red
    .icon-list
      height: 75px
      text-align: center
      width: 1.44rem
      float: left
      .icon-name
        font-size: 30px
        color: orange
        padding-top: 10px
      .font-name
        font-size: 14px
        color: #333
        margin-top: 8px
  .border
    border-top: 1px solid #ccc
    border-bottom: 1px solid #ccc
    height: 12px
    background: #f2f2f2
</style>