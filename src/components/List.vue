<template>
  <div class="flight-list">
  	<header>
  		<div class="header1">
  			<router-link to="/ticket">
  				<i class="icon iconfont">&#xe697;</i>
  			</router-link>
  			
  			<span>选去程(北京-上海)</span>
  			<i class="icon iconfont">&#xe608;</i>
  		</div>
  		<div class="header2">
  			<div>
  				<i class="icon iconfont icon1">&#xe697;</i>
  				<span>前一天</span>
  			</div>
  			<div>
  				<span class="date">01-30明天</span>
  			</div>
  			<div>
  				<span>后一天</span>
  				<i class="icon iconfont icon2">&#xe620;</i>
  			</div>
  		</div>
  	</header>
    <section>
    	<!--<ul
			  v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="5">
  			<li v-for="item in list">
  				{{ item }}
  				<div class="box_left">
  					<div class="box_left1">
	  					<b>{{item.time1}}</b>
	  					<b>{{item.location1}}</b>
  					</div>
  					<div class="box_left2">
  						<span>{{item.time2}}</span>
  						<span>{{item.location2}}</span>
  					</div>
  					<div class="box_left3">
  						<span class="desc">{{item.description}}</span>
  					</div>
  				</div>
  				
  				<div class="box_right">
  					<span class="pri">{{item.price}}</span>
  				</div>
  			</li>
  			<mt-spinner type="triple-bounce" color="blue" :size="60"></mt-spinner>
			</ul>-->
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			  <ul>
			    <li v-for="item in list">
			    	<!--{{ item }}-->
			    	<div class="box_left">
	  					<div class="box_left1">
		  					<b>{{item.time1}}</b>
		  					<b>{{item.location1}}</b>
	  					</div>
	  					<div class="box_left2">
	  						<span>{{item.time2}}</span>
	  						<span>{{item.location2}}</span>
	  					</div>
	  					<div class="box_left3">
	  						<span class="desc">{{item.description}}</span>
	  					</div>
  					</div>
  				
  					<div class="box_right">
  						<span class="pri">{{item.price}}</span>
  					</div>
			    </li>
			    <mt-spinner type="triple-bounce" color="blue" :size="60"></mt-spinner>
			  </ul>
			</mt-loadmore>
    </section>
    <footer>
    	<div>
    		<img src="../assets/suggest-i.png"/>
    		<p>推荐</p>
    	</div>
    	<div>
    		<img src="../assets/white_time.png"/>
    		<p>时间</p>
    	</div>
    	<div>
    		<img src="../assets/white_price.png"/>
    		<p>价格</p>
    	</div>
    </footer>
  </div>
</template>

<script src="./js/list.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style/list.css">

</style>
