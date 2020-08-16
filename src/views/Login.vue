<template>
<div class="unauth">
 <form id="login" @submit="checkCredentials" class="border border-light">
     <!--User name-->
      <h4 class="text-left"><span class="label label-default">Username :</span></h4>
      <input id="defaultLoginFormEmail" class="form-control mb-4 "  type="text" v-model="userid"  placeholder="Enter Username"  required>      
      
      <!--User name-->
      <h4 class="text-left"><span class="label label-default">Password :</span></h4>
      <input id="defaultLoginFormPassword" class="form-control mb-4" type="password" v-model="password"  placeholder="Enter Password"  required><br>
      
      <!--Button-->
       <input  class="btn btn-info btn-block my-4"  type="submit" value="Submit">
       
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
            // var login_id = this.userid
            // var password = this.password
            // if(login_id == ""){
            //     $("#l-error").removeClass('d-none')
            //  }
            // else if(password == ""){
            //     $("#p-error").removeClass('d-none')
            // }
            // else{
            //      $("#l-error").addClass('d-none')
            //       $("#p-error").addClass('d-none')
            // $(".loader").css("display", "block");
            $(".loader").show()
           axios.get('UserManagement/checkCredentials', {
                params: {
                    loginid:this.userid,
                    password:this.password
                }
                })
                .then(response => {(this.response = response.data)
                console.log(response)
                 alert(response.data)
                 $(".loader").hide()
                 if(response.data == true)
                 {                    
                    this.$cookies.set("token",this.userid,60 * 60 * 24 * 30);
                    $("#nav").addClass('d-none')      
                    $("#loggedin").removeClass('d-none')
                    this.$router.push('home')
                    
                 }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                
                // $(".loader").css("display", "none");
        //}
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
    }
}
</script>
<style scoped>

</style>