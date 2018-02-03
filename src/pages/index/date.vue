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
    <div class="date-out">
      <p class="date-out-type">离店</p>
      <div class="date-out-time">
        <p class="time-chuo1">01月30日</p>
        <p class="tommrow">明天</p>
      </div>
    </div>
    <div class="onenight">1晚</div>
    <p class="icon-tra">&#xe602;</p>
  </div>
</template>
<script>
  var rempx = document.documentElement.clientWidth / 7.5;
  document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
</script>
<style scoped lang="stylus">
  #date
    height: .68rem
    position: relative
    padding: 12px 0
    border-bottom: 1px solid #ccc
    .icon-day
      position: absolute
      width: 16px
      height: 16px
      top: 50%
      margin-top: -8px
      font-size: .38rem
      margin-left: 8px
      line-height: 21px
      color: #999;
    .date-in
      float: left
      padding-left: 40px
      margin-right: 10px
      .date-in-type
        color: #999
        font-size: 10px
      .date-in-time
        .time-chuo
          float: left
        .today
          float: right
          font-size: 8px
          margin-top: 5px
          color: #555
    .bottom
      border-bottom: 1px solid #555
      width: 14px
      margin-right: 10px
      margin-top: 16px
      float: left
    .date-out
      float: left
      margin-right: 10px
      .date-out-type
        color: #999
        font-size: 10px
      .date-out-time
        .time-chuo1
          float: left
        .tommrow
          float: right
          font-size: 8px
          margin-top: 5px
          color: #555
    .onenight
      margin-top: 10px
      position: absolute
      right: 35px
      color: #999
      font-size: 8px
    .icon-tra
      float: right
      font-size: 23px
      color: #ccc
      margin-bottom: -2px
</style>