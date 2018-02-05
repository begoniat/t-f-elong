<template>
  <div id="place" class="iconfont">
    <ul class="place">
      <li v-for="item in list" class="place-city" :style="{background: 'url('+item.cityimg+')'+item.position+'px', 'background-size': '100% 750px'}">
        <!-- <img :src="item.cityimg"> -->
        <div class="place-specific">
          <h3>{{item.cityname}}</h3>
          <p>
            <span>共有<i class="word">{{item.citynub}}</i>家酒店</span>
          </p>
          <i class="icon">&#xe62d;</i>
        </div>
      </li>
      <li class="place-word">©2009-2018 艺龙网信息技术（北京）有限公司</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "indexplace",
    props: {
      list: Array
    }
  }
</script>
<style scoped lang="stylus">
  #place
    .place
      .place-word
        font-size: 12px
        margin: 10px
        text-align: center
        color: #555
      .place-city
        margin-bottom: 4px
        .place-specific
          height: 75px
          overflow: hidden
          padding: 0 24px
          position: relative
          text-align: left
          h3
            font-size: 22px
            color: #fff
            margin-top: 16px
            margin-bottom: 2px
          p
            span
              color: #fff
              font-size: 12px
              .word
                color: #f55
          .icon
            position: absolute
            margin-top: -9px
            top: 50%
            left: 92%
            color: #fff
            font-size: 22px
</style>
