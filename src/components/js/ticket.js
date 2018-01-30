export default {
  name: 'Ticket',
  data () {
    return {
			
    }
  },
  methods:{
  	clickFun:function(){
  		var $uli = $("ul li");
			var $oli = $("ol li");
			$oli.addClass("hide");
			$oli.eq(0).removeClass().addClass("show");
			$uli.addClass("normal");
			$uli.eq(0).removeClass().addClass("click");
		
			$uli.click(function(){
			
				var $index = $(this).index();
				
				$(this).removeClass().addClass("click").siblings().removeClass().addClass("normal");
				
				$oli.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
			
			
			});
  	}
  /*	clickXian:function(){
  		$(".yuan_small2").css({"display":"block"});
  		$(".yuan_small").css({"display":"none"});
  		$(".yuan_big").css({"background":"blue"});
  	}*/
  }
}
		
		/*var $uli = $("ul li");
		var $oli = $("ol li");
		$oli.addClass("hide");
		$oli.eq(0).removeClass().addClass("show");
		$uli.addClass("normal");
		$uli.eq(0).removeClass().addClass("click");
		
		$uli.click(function(){
			
			var $index = $(this).index();
			
			$(this).removeClass().addClass("click").siblings().removeClass().addClass("normal");
			
			$oli.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
			
			
		});
*/