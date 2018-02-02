<template>
  <div class="fly-ticket">
  	<header>
  		<img src="../assets/RENAMEK0FD5LJ9H51MCJA14K986CCJ.jpg"/>
  	</header>
  	<section>
  		<ul>
  			<li id="span1" @click="clickFun">单程</li>
  			<li id="span2" @click="clickFun">往返</li>
  		</ul>
  		<ol>
  			<li>
  				<div class="city">
  					<div class="city1">
	  					<span class="city1_span">北京</span>
	  					<b class="city1_b">出发</b>
	  				</div>
	  				<img src="../assets/下载.png"/>
	  				<div class="city2">
	  					<b class="city2_b">到达</b>
	  					<span class="city2_span">上海</span>
	  				</div>
  				</div>
  				<div class="date">
  					<span>2018-01-29</span>
  					<b>周一</b>
  				</div>
  				<div class="jicang">
  					<span>只看头等舱/商务舱</span>
  					<!--<div class="yuan_big">
  						<div class="yuan_small"></div>
  					</div>-->
  					<mt-switch></mt-switch>
  				</div>
  				<div class="search">
  					<img src="../assets/search.png"/>
  					<router-link to="/list">
  						<a href="#">搜索</a><!--页面跳转-->
  					</router-link>
  					
  				</div>
  			</li>
  			
  			<li id="li2">
  				<div class="city">
  					<div class="city1">
	  					<span class="city1_span">北京</span>
	  					<b class="city1_b">出发</b>
	  				</div>
	  				<img src="../assets/下载.png"/>
	  				<div class="city2">
	  					<b class="city2_b">到达</b>
	  					<span class="city2_span">上海</span>
	  				</div>
  				</div>
  				<div class="date_next">
  					<div class="date3">
	  					<span>2018-01-29</span>
	  					<b>周一</b>
	  				</div>
	  				<span class="days">5天</span>
	  				<div class="date4">
	  					<b>周五</b>
	  					<span>2018-02-02</span>
	  				</div>
  				</div>
  				<div class="jicang">
  					<span>只看头等舱/商务舱</span>
  					<!--<div class="yuan_big">
  						<div class="yuan_small"></div>
  					</div>-->
  					<mt-switch></mt-switch>
  				</div>
  				<div class="search">
  					<img src="../assets/search.png"/>
  					<router-link to="/list">
  						<a href="#">搜索</a><!--页面跳转-->
  					</router-link>
  					
  				</div>
  			</li>
  		</ol>
  		
  	</section>
  	<footer>
  		<div class="xuanzuo">
  			<router-link to="/login">
	  			<a href="#">
	  				<img src="../assets/onlinechosesite.png">
	  				<p>在线选座</p>
	  			</a>
	  		</router-link>
  		</div>
  		<div>
  			<router-link to="/login">
	  			<a href="#">
	  				<img src="../assets/flightDynamics.png">
	  				<p>航班动态</p>
	  			</a>
	  		</router-link>
  		</div>
  		<div>
  			<router-link to="/photo">
	  			<a href="#">
	  				<img src="../assets/lowflyprice.png">
	  				<p>特价机票</p>
	  			</a>
	  		</router-link>
  		</div>
  		<div>
  			<router-link to="/login">
	  			<a href="#">
	  				<img src="../assets/myorder.png">
	  				<p>我的订单</p>
	  			</a>
	  		</router-link>
  		</div>
  	</footer>
  </div>
</template>

<script src="./js/ticket.js">
/*import axios from 'axios';

export default {
  name: 'Ticket',
  data () {
    return {
			
    }
  },
  mounted(){
	  	axios.get('/web/flight/figure/wp/2017/10/31/RENAMEK0FD5LJ9H51MCJA14K986CCJ.jpg')
	  .then((response)=> {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }
}*/
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style/ticket.css">

</style>
