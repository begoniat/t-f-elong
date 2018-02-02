<template>
  <div class="regist_box">
  	<header>
  		<router-link to="/login">
    		<i class="icon iconfont">&#xe697;</i>
    	</router-link>
  	</header>
    <section>
    	<h3>注册艺龙会员</h3>
    	<div class="div1">
    		<b>86</b>
    		<!--<span>请输入手机号</span>-->
    		<input type="text" v-model="username" placeholder="请输入手机号">
    	</div>
    	<div class="div2">
    		<span>请输入短信验证码</span>
    		<b>获取验证码</b>
    	</div>
    	<div class="div3">
    		<!--<span>请输入密码</span>-->
    		<input type="password" v-model="psw" placeholder="请输入密码">
    	</div>
    	<div class="div4">
    		<span @click="regist()" class="zhuce">注册</span>
    	</div>
    </section>
  </div>
</template>

<script src="./js/regist.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style/regist.css">

</style>
