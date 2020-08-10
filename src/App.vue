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
  mounted : function(){
    if(document.cookie != '')
    {
     $("#nav").addClass('d-none')
    }
    else{
      $("#loggedin").addClass('d-none')
    }
  }
}
</script>
<style>
body{
  margin: 0 !important;
  /* background-color: #036266 !important; */
  /* background: url('./assets/banner.jpg');
  background-repeat: no-repeat;
  background-size: contain, cover;
  background-size: 100%; */

}
#app {  
    font-family: 'gotham rounded', 'open-sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  background-color: #036266; */
  
}
.unauth{
  /* background:#fff; */
  /* padding: 20px;
  border-radius: 10px 0 0 10px;
  float: right;
  width:30%;
  box-shadow: 0 0px 30px 10px #272727;
  height: auto; */
  /* width:60% !important; */  
}
#nav {
  /* padding: 30px;
 text-align: right;
 padding-top: 10%; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* .d-none{
  display: none;
} */
.required{
  color: yellowgreen;
}
.row label{
  color: #42b983
}
</style>
