import axios from 'axios';
export default {
  name: 'Photo',
  data () {
    return {
      photos: []
    }
  },
  mounted(){//原地址:http://m.elong.com/flight/promotion/lowprice/location
  	axios.get('/flight/promotion/lowprice/location')
  	.then( (response) =>{
    	console.log(response);
    	this.photos=response.data.lowestPriceList;
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
  },
  methods:{
  	tolist:function(){
  		location.href="/#/list";
  	}
  }
}