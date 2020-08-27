<template>
   <div class="header">
		
      <div class="m-navigation" :class="{'showd' : showNav}">
            <a  class="navigation-icon"  @click="showNav = !showNav">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
        <span class="m-view" :class="{'open' :!showNav}">            
            <router-link @click="showNav = !showNav" class=" nav-links" to="/home">Feedbacks</router-link>
            <router-link @click="showNav = !showNav" class="nav-links" to="/about">My Account</router-link>
            <div class="logout">
                <a @click="showNav = !showNav" class="logout-link" href="javascript:;" v-on:click="DeleteCookie()">Log out</a>
            </div>
        </span>
    </div>
   </div>	
</template>

<script>
import $ from 'jquery'
//import VueCookies from 'vue-cookies'
export default {
    data() {
        return{
        showNav : false
        }
    },
    methods :{
        DeleteCookie() {
            if(confirm("Are you sure you want to log out ?")){
                
                this.$cookies.remove("token");
                $("#nav").removeClass('d-none')      
                $("#loggedin").addClass('d-none')
                this.$router.push('/')                
            }
            else
            $('.navigation-icon').find('i').toggleClass('fa-times fa-bars')
        }          
    },
    
     mounted : function(){
        //  var topfordekstop = 85
        $('.nav-links').on('click', function () {
        //var targetSec = $(this).text().replace(/\s+/g,' ').trim();      
        //$('.navigation-icon').find('i').toggleClass('fa-times fa-bars')
        // $('html, body').animate({           
        //         scrollTop: ($('#' + targetSec).offset().top- topfordekstop)
        // }, 1000);
        })
        $('.navigation-icon').click(function(){
            $(this).find('i').toggleClass('fa-times fa-bars')
        });
        
    }
}
</script>
<style scoped>

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.nav-links,.logout-link{
    text-decoration: none;
    text-transform: uppercase;
    color:#666;
    display: block;
    color: #666;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    display: inline;
}
.navigation, .m-navigation{
    width: 100%;
    position: fixed;
    color:  #000;   
    z-index: 3; 
     text-align: left;
}
.navigation-icon i{
   font-size: 20px;
    padding: 8px;
    /* background-color: black; */
    color: #000;
    border-radius: 5px;
    margin: 10px;
    border: 2px solid black;
}
.navigation-icon{
    float: left;
    width: 8%;
}
 
.open{
    display: none;
}
.showd{
    background-color: #FAFAFA;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
     
}

.logout{
    /* border: 1px solid red;
    border-radius: 20px;
    background-color: rgb(240, 167, 167);; */
    float: right;
    width: 15%;
}
.logout a{
   
    border-radius: 10px;
    color: #fff;
   /* background: -webkit-linear-gradient(to right, #e68978, #ab6075);
 background: linear-gradient(to right, #e68978, #ab6075);
 box-shadow: 0 1px 3px rgba(0,0,0,.4); */
}
.nav-links:first-child{    
     border-right: 1px solid #eee;
}
.m-view{
    float: left;
    width: 92%;
    text-align: center;
}
.nav-links:hover{
    text-decoration: underline;
    
}
@media only screen and (max-width: 425px) {
  .m-view .nav-links{
    border-bottom: 1px solid #eee;
    color: #666;
    font-size: 18px;
    display: block;
    text-align: center;
    padding: 10px;
    border-right: none;
}
.logout{
    /* border: 1px solid red;
    border-radius: 20px;
    background-color: rgb(240, 167, 167);; */
    float: none;
    width: 100%;
    margin-bottom: 12px;
}
.m-view{
    width: 85%;
}
.navigation-icon{
 
    width: 15%;
}
}
</style>