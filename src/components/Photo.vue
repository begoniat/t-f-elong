<template>
  <div class="photo_explanation">
    <header>
    	<img src="../assets/RENAMEK0FD5LJ9H51MCJA14K986CCJ.jpg"/>
    </header>
    <section>
    	<b>精选航线</b>
    	<!--<div>
    		<img src="../assets/BJS.jpg" alt="" />
    		<img src="../assets/BJS.jpg" alt="" />
    		<img src="../assets/BJS.jpg" alt="" />
    	</div>-->
    	<ul>
    		<!--<router-link to="/list">-->
	    		<li v-for="item in photos" @click="tolist()">
	    			<img :src="item.imageUrl"/>
	    		</li>
	    	<!--</router-link>-->
    	</ul>
    </section>
  </div>
</template>

<script src="./js/photo.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style/photo.css">

</style>
