<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
   	<!--<router-link to="/ticket"></router-link>-->
   	<!--<mt-button type="danger">danger</mt-button>-->
   	<router-link to="/list"></router-link>
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
