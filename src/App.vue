<template>
  <div id="app">
    <div id="nav">
     <UnAuthHeader/>
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
import UnAuthHeader from './components/UnAuthHeader.vue'
import Footer from './components/Footer.vue'
export default {
  components :{
    AuthHeader,
    UnAuthHeader,
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
  /* background-color: #edf4f2 ; */
}
.header, .footer{
  /* background-color: #63b7af; */
  background-color: #138496;
  height: 50px;
}
.header{
  font-size: 30px;
}
.unauth{
  margin : 2% 30%;
  border-radius: 10px;
  min-height : 76.5vh; 
}
.auth, .unauth{
  padding:20px;
}
.auth{
  min-height: 84.8vh;
}
#nav a {
  font-weight: bold;
  color: #3b6978;  
}

#nav a.router-link-exact-active {
  color: #204051;
}
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
  }
@media only screen and (min-width: 800px) {
    .unauth,.about{
      margin : 2% 30% !important;
    }
}
@media only screen and (max-width: 800px) and (min-width: 426px) {
    .unauth,.about{
      margin : 2% 18% !important;
    }
}

@media only screen and (max-width: 425px) {
    .unauth,.about{
      margin : 2% 10% !important;
    }    
  form{
      padding: 3rem 1rem 1rem 1rem !important;      
  }
  .footer .media-icon span{
    display: block
  }
  .footer{
    height: 95px;
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
</style>
