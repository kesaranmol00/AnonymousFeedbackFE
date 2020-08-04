<template>
<div>
   <div class="container">
    <label for="firstname"><b>First Name *: </b></label>
    <input id="first-name" type="text" placeholder="First Name" name="firstname">
    <span class="required d-none" id="fn-error">*First name is required</span>

    <label for="lastname"><b>Last Name *: </b></label>
    <input id="last-name" type="text" placeholder="Last Name" name="lastname">
    <span class="required d-none" id="ln-error">*Last name is required</span>

    <label for="emailid"><b>Email Id *: </b></label>
    <input id="email-id" type="text" placeholder="Email Id" name="emailid">
    <span class="required d-none" id="em-error">*Email Id is required</span>

    <label for="phonenumber"><b>Phone Number : </b></label>
    <input id="phone-number" type="text" placeholder="Phone Number" name="phonenumber">
    
    <label for="userid"><b>User Id *: </b></label>
    <input id="user-id" type="text" placeholder="User Id" name="userid">
    <span class="required d-none" id="uid-error">*User Id is required</span>
    <button @click="checkUserId()" type="submit">Check User Id</button>
    
    
    <label for="psw"><b>Password</b></label>
    <input id="password" type="password" placeholder="Password" name="psw" required>
    <span class="required d-none" id="p-error">*Please enter password</span>


    <button @click="registerUser()" type="submit">Register</button>
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
    name : "Register",
    data() {
        return{
            isAuthUserId : false,
            firstName:'',
            lastName: '',
            emailId: '' ,
            password:'',
            user_id:''
        }
    },
    methods:{
        checkUserId(){
            this.user_id = document.getElementById("user-id").value
            if( this.user_id == "")
            {
                alert("Please add user id")
                this.isAuthUserId = false
                return false;                
            }
            else if(this.user_id.length < 6)
            {
                alert("User id must be greater than 6 characters")
                this.isAuthUserId = false
                return false;                
            }
            else{
                axios.get('UserManagement/checkUserId/'+  this.user_id)
                .then(response => {(this.response = response.data)
                console.log(response)
                // alert(response.data)
                if(response.data == false)
                    {
                        this.isAuthUserId = false
                        alert("user id already exists. Please try another")

                    }
                    else if(response.data == true)
                    {
                        this.isAuthUserId = true
                    }
                    else {
                        this.isAuthUserId = false
                        console.log(response.data)
                        alert("something went wrong. Please try again after some time")
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
            }
        },
        
        isError(){
            this.checkUserId();
            if(this.isAuthUserId == false)
            {
                return false
            }
            else{
                this.firstName = document.getElementById("first-name").value
                if(this.firstName == "")
                {
                     $("#fn-error").removeClass('d-none')
                     return false;
                }
                else
                    $("#fn-error").addClass('d-none')

                this.lastName = document.getElementById("last-name").value
                if(this.lastName == "")
                {
                     $("#ln-error").removeClass('d-none')
                     return false;
                }
                else
                    $("#ln-error").addClass('d-none')

                this.emailId = document.getElementById("email-id").value
                 if(this.emailId == "")
                {
                     $("#em-error").removeClass('d-none')
                     return false;
                }
                else
                    $("#em-error").addClass('d-none')

                this.password = document.getElementById("password").value
                 if(this.password == "")
                {
                     $("#p-error").removeClass('d-none')
                     return false;
                }
                else
                    $("#p-error").addClass('d-none')
                return true;            
            }
        },
        registerUser(){

            if(this.isError() == true){
               // var pnumber = document.getElementById("phone-number").value
                 axios.get('UserManagement/registerUser',{
                    params: {
                        firstname:this.firstName,
                        lastname:this.lastName,
                        emailid:this.emailId,
                        password:this.password,
                        userid: this.user_id,
                        phonenumber:document.getElementById("phone-number").value
                    }
                })
                .then(response => {(response = response.data)
                console.log(response)
                // alert(response.data)
                if(response.data == true)
                {
                    //this.isAuthUserId = true
                }
                else {
                    //this.isAuthUserId = false
                    console.log(response.data)
                    alert("something went wrong. Please try again after some time")
                }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
            }
        },

    }
}
</script>
<style scoped>

</style>