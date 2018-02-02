import axios from 'axios';
export default {
  name: 'Regist',
  data () {
    return {
      username: "",
      psw:""
    }
  },
  methods:{
  	regist:function(){//原地址:http://localhost:3000/api/regist
  		axios.post('/api/regist', {
    		username: this.username,
    		psw: this.psw
  		})
  		.then( (response) =>{
   			console.log(response);
   			if(response.data.code==1){
   				alert(response.data.message);

   				//location.href="http://localhost:8080/#/login";
					location.href="/#/login";
   			}/*else if(response.data.code==-109){
   				alert(response.data.message);
   			}else{
   				alert(response.data.message);
   			}*/
   			else{
   				alert(response.data.message);
   			}
  		})
  		.catch( (error)=> {
    		console.log(error);
    		if(response.data.code==-110){
    			alert(response.data.message);
    		}
    		
  		});
  	}
  }
}