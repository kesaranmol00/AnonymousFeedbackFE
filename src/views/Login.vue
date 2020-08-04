<template>
<div>
   <div class="container">
    <label for="uname"><b>Username</b></label>
    <input id="login-name" type="text" placeholder="Enter Username" name="uname" required>
    <span class="required d-none" id="l-error">*Please enter login name</span>

    <label for="psw"><b>Password</b></label>
    <input id="password" type="password" placeholder="Enter Password" name="psw" required>
    <span class="required d-none" id="p-error">*Please enter password</span>
    <button @click="checkCredentials()" type="submit">Login</button>
    <!-- <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label> -->
  </div>
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
        }
    },
    // created() {
    //     this.$cookie.set("keyName", "temp", "expiring time")
    // },
    methods : {
        checkCredentials(){
            var login_id = document.getElementById("login-name").value
            var password = document.getElementById("password").value
            if(login_id == ""){
                $("#l-error").removeClass('d-none')
             }
            else if(password == ""){
                $("#p-error").removeClass('d-none')
            }
            else{
                 $("#l-error").addClass('d-none')
                  $("#p-error").addClass('d-none')
           axios.get('UserManagement/checkCredentials', {
                params: {
                    loginid:login_id,
                    password:password
                }
                })
                .then(response => {(this.response = response.data)
                console.log(response)
                 alert(response.data)
                 if(response.data == true)
                 {
                    let d = new Date();
                    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
                    let expires = "expires=" + d.toUTCString();
                    document.cookie = "Token=" + login_id + ";" + expires + ";path=/";
                    //window.location.href = 'http://localhost:8080/Home'
                    this.$router.push('home')
                    $("#nav").addClass('d-none')      
                    $("#loggedin").removeClass('d-none')
                    //window.location.href = 'https://kesaranmol00.github.io/AnonymousFeedbackFE/Home'
                 }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
        }
        }
    }
    ,
    mounted : function(){
       if(document.cookie != '')
       {
           this.$router.push('home')
            $("#nav").addClass('d-none')      
            $("#loggedin").removeClass('d-none')
         //window.location.href = 'http://localhost:8080/Home'
        // window.location.href = 'https://kesaranmol00.github.io/AnonymousFeedbackFE/Home'
       }
    }
}
</script>
<style scoped>
.container {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
.container label,.container input, .container button{
    display: block;
    
}
</style>