<template>
<div>
   <div class="unauth">
    <div class="row">
        <label class="col-4" for="uname"><b>Username *: </b></label>
        <input class="col-8" id="login-name" type="text" placeholder="Enter Username" name="uname" required>
    </div>
    <div>
        <div class="col-4"></div>
        <span class="col-8 required d-none" id="l-error">*Please enter login name</span>
    </div>
    <div class="row">
        <label class="col-4" for="psw"><b>Password *:</b></label>
        <input class="col-8" id="password" type="password" placeholder="Enter Password" name="psw" required>
    </div>
    <div>
        <div class="col-4"></div>
        <span class="col-8 required d-none" id="p-error">*Please enter password</span>
    </div>
    <div>
        <button @click="checkCredentials()"  type="button" class="btn">Login</button>
    </div>
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
                    
                    $("#nav").addClass('d-none')      
                    $("#loggedin").removeClass('d-none')
                    this.$router.push('home')
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
            $("#nav").addClass('d-none')      
            $("#loggedin").removeClass('d-none')
            this.$router.push('home')
         //window.location.href = 'http://localhost:8080/Home'
        // window.location.href = 'https://kesaranmol00.github.io/AnonymousFeedbackFE/Home'
       }
    }
}
</script>
<style scoped>
.row label{
    text-align: right;
}
.row{
    padding:10px;
}
.btn {
    color: #fff;
    background-color: #42b983;
}
</style>