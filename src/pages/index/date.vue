<template>
  <div id="date" class="iconfont">
    <p class="icon-day">&#xe614;</p>
    <div class="date-in">
      <p class="date-in-type">入住</p>
      <div class="date-in-time">
        <p class="time-chuo">01月29日</p>
        <p class="today">今天</p>
      </div>
    </div>
    <div class="bottom"></div>
<!--     <div class="date-out">
      <p class="date-out-type">离店</p>
      <div class="date-out-time">
        <p class="time-chuo+1">01月30日</p>
        <p class="tommrow">明天</p>
      </div>
    </div>
    <div class="onenight">1晚</div>
    <p class="icon-tra">&#xe602;</p> -->
  </div>
</template>
<script>
  var rempx = document.documentElement.clientWidth / 7.5;
  document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
</script>
<style scoped lang="stylus">
  #date
    height: 1.16rem
    position: relative
    .date-in
      float: left
      padding-left: 40px
      margin-right: 10px
    .icon-day
      position: absolute
      width: 16px
      height: 16px
      top: 50%
      margin-top: -8px
      font-size: .3rem
      margin-left: 8px
      line-height: 21px
      color: #999;
      .date-in-type
        color: #999
        font-size: 14px
      .date-in-time
        .tommrow
          float: right
        .time-chuo
          float: left
</style>