<template>
  <div class="login_box">
    <header>
    	<router-link to="/ticket">
    		<i class="icon iconfont">&#xe697;</i>
    	</router-link>
    	<router-link to="/regist">
    		<a href="#">注册</a>
    	</router-link>
    </header>
    <section>
    	<h3>欢迎来到艺龙旅行</h3>
    	<div class="div1">
    		<b>86</b>
    		<!--<span>请输入手机号</span>-->
    		<input type="text" v-model="username" placeholder="请输入手机号">
    	</div>
    	<div class="div2">
    		<!--<span>请输入图形验证码</span>-->
    		<input type="password" v-model="psw" placeholder="请输入密码">
    	</div>
    	<div class="div3">
    		<span>请输入短信验证码</span>
    		<b>获取验证码</b>
    	</div>
    	<div class="div4">
    		<a href="#" @click="login()">登录</a>
    	</div>
    </section>
  </div>
</template>

<script src="./js/login.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style/login.css">

</style>
