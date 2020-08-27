<template>
<div class="unauth login-unauth">
     
 <!-- <form id="login" @submit="checkCredentials" class="border border-light"> -->
    <form id="login" @submit="checkCredentials" class="shadow-lg bg-white">
        <h2 class="h4 mb-4">Login</h2>
     <!--User name-->
     <!-- <p class="text-left m-0">Username</p> -->
      <!-- <h3 class="text-left"><span class="label label-default">Username :</span></h3> -->
      <input id="defaultLoginFormEmail" class="form-control mb-4 "  type="text" v-model="userid"  placeholder="Username"  required>      
      
      <!--User name-->
      <!-- <p class="text-left m-0">Password</p> -->
      <!-- <h3 class="text-left"><span class="label label-default">Password :</span></h3> -->
      <input id="defaultLoginFormPassword" class="form-control" type="password" v-model="password"  placeholder="Password"  required><br>
      <label class="text-right">
           <input type="checkbox" class="mr-2" value="remember-me" id="remember_me">Remember Me
       </label>
      <!--Button-->
       <input  class="btn btn-info btn-block mb-4"  type="submit" value="Submit">
       <label>
           Don't have an account <router-link to="/register">Sign up</router-link>
       </label>
    </form>
    
</div>    
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
    name : "Login",
    data() {
        return{
            response : false,           
            password:null,            
            userid:null,       
        }
    },
    methods : {
        checkCredentials(){
            $(".loader").show()
                if ($('#remember_me').is(':checked')) {
                    // save username and password
                    localStorage.usrname = $('#defaultLoginFormEmail').val();
                    localStorage.pass = $('#defaultLoginFormPassword').val();
                    //localStorage.chkbx = $('#remember_me').val();
                } else {
                    localStorage.usrname = '';
                    localStorage.pass = '';
                    //localStorage.chkbx = '';
                }
        

           axios.get('UserManagement/checkCredentials', {
                params: {
                    loginid:this.userid,
                    password:this.password
                }
                })
                .then(response => {(this.response = response.data)
                console.log(response)
               //  alert(response.data)
                 $(".loader").hide()
                 if(response.data.Result == "true")
                 {                    
                    this.$cookies.set("token",response.data.value,60 * 60 * 24 * 30);
                    $("#nav").addClass('d-none')      
                    $("#loggedin").removeClass('d-none')
                    this.$router.push('home')      
                    window.hostname = this.userid              
                 }
                 else if(response.data.Result == "false"){
                     alert(response.data.value);
                 }
                })
                .catch(error => {
                    $(".loader").hide()
                    alert("Something went wrong..!!!")
                    console.log(error)
                    this.errored = true
                })
        }   
    }
    ,
    mounted : function(){
       if(document.cookie != '')
       {
            $("#nav").addClass('d-none')      
            $("#loggedin").removeClass('d-none')
            this.$router.push('home')
       }
       else{           
            // save username and password
            this.userid = localStorage.usrname;
            this.password = localStorage.pass;
            
            $('#defaultLoginFormEmail').val(localStorage.usrname);
            $('#defaultLoginFormPassword').val(localStorage.pass) ;
            if(this.userid!="")
            {
                $('#remember_me').prop('checked', true);
            }              
            
       }
    }
}
</script>
<style scoped>

</style>