<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
var rempx = document.documentElement.clientWidth / 7.5;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
export default {
  name: 'App'
}
</script>

<style>
@import './assets/style/common.css';
@import './assets/iconfont/iconfont.css';
</style>
