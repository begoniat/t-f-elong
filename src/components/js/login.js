import axios from 'axios';
export default {
  name: 'Login',
  data () {
    return {
      username: "",
      psw:""
    }
  },
  methods:{
  	login:function(){//原地址:http://localhost:3000/api/login
  		axios.post('/api/login', {
		    username: this.username,
		    psw: this.psw
 	 	})
	  .then(function (response) {
	    console.log(response);
	    if(response.data.code==1){
	    	alert(response.data.message);
	    	location.href="#/ticket";
	    }else{
	    	alert(response.data.message);
	    }
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  	}
  }
}