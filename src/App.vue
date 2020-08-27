<template>
  <div id="app">
    <div id="nav">
     <!-- <UnAuthHeader/> -->
    </div>
    <div id="loggedin">
     <AuthHeader/>
    </div>      
      <router-view/>   
    <Footer/>
    <div class="loader"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import AuthHeader from './components/AuthHeader.vue'
// import UnAuthHeader from './components/UnAuthHeader.vue'
import Footer from './components/Footer.vue'
export default {
  components :{
    AuthHeader,
    // UnAuthHeader,
    Footer
  },
  data() {
        return{    
        mobileView : true,        
        }
    },
  mounted : function(){
    if(document.cookie != '')
    {
     $("#nav").addClass('d-none')
    }
    else{
      $("#loggedin").addClass('d-none')
    }
  },
  methods:{
        handleView() {
        this.mobileView = window.innerWidth <=425;
        },
  },
  created(){
        this.handleView();  
    }
}
</script>
<style>

#app {  
    font-family: 'gotham rounded', 'open-sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
background: #e68978;  /* fallback for old browsers
#ab6075  #e68978
 background: #2193b0;  /* fallback for old browsers */
 background: -webkit-linear-gradient(to bottom, #e68978, #ab6075);
 background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
}
.logout a, .btn{
  background: #e68978;  
   background: -webkit-linear-gradient(to bottom, #e68978, #ab6075);
 background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab,#ee7752);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
}
.header, .footer{
  /* background-color: #63b7af; */
  /* background-color: #138496; */
  height: 50px;
}
.header{
  font-size: 30px;
}
.unauth{
  margin : 0 30%;
  border-radius: 10px;
  min-height : 92.4vh; 
}
.auth, .unauth{
  padding:20px;
}
.auth{
  min-height: 84.8vh;
}
/* #nav a {
  font-weight: bold;
  color: #3b6978;  
}

#nav a.router-link-exact-active {
  color: #204051;
} */
.loader  { 
  background: white url('./assets/loader.gif') center center no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  top:0;
  opacity: 0.5;
}
form{
      padding: 1.2rem;    
       border-radius: 50px !important;  
  }
  .btn{
    /* background-color: #613073 !important; */
    border-radius: 30px !important;
  }
  .login-unauth form{
    border: 1px solid #727272;
     /* Shadow #727272 with 75% opacity */
  }
  form ::placeholder{
    color: red;
  }
  .login-unauth form{     
      padding: 30px;
      margin-top: 25%;
    }
    input{
      border-radius: 15px !important;
    }
@media only screen and (min-width: 800px) {
    .unauth,.about{
      /* margin : 2% 30% !important; */
    }
    .login-unauth{
      margin : 0% 35% !important;
    }
    
}
@media only screen and (max-width: 800px) and (min-width: 426px) {
    .unauth,.about{
      margin : 0% 18% !important;
    }
}

@media only screen and (max-width: 425px) {
    .unauth,.about{
      margin : 0% 10% !important;
    }    
  form{
      padding: 3rem 1rem 1rem 1rem !important;   
      margin-top: 08%;   
  }
  .footer .media-icon span{
    display: block
  }
  .footer{
    height: 40px;
  }
  .p-alert{
    padding-left: 1rem !important;
  }
}
    @media only screen and (max-width: 375px) {
    .unauth,.about{
      margin : 0 5% !important;
    }
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
