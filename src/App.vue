<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    var rempx = document.documentElement.clientWidth / 7.5;
    document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
  }
}
</script>

<style>
@import './assets/style/common.css';
@import './assets/iconfont/iconfont.css';
</style>
