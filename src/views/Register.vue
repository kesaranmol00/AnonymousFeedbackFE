<template>
  <div class="unauth">
    
    <!-- <form @submit="checkForm" class="text-center border border-light" >  -->
<form @submit="checkForm" class="text-center shadow-lg p-3 bg-white rounded" > 
  <h3 class="h4 mb-4 ">Sign up</h3>
 <div class="form-row mb-4">
        <div class="col">
            <!-- First name -->
            <input v-model="firstName" required type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
        </div>
        <div class="col">
            <!-- Last name -->
            <input v-model="lastName" required type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
        </div>
    </div>
    <!-- Phone number -->
    <input type="text" class="form-control  mt-4" placeholder="Phone number" v-model="phonenum" @keypress="isNumber($event)" maxlength = "10" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
    <!--User id -->
    <input v-model="userid" required  type="text"  class=" mt-4 form-control" placeholder="User name">
    <!-- <span v-if="msg.userid">{{msg.userid}}</span> -->
    <small v-if="msg.userid"  role="alert" class="alert alert-danger form-text text-muted mb-4">
       {{msg.userid}}
    </small>
     <!-- E-mail -->
    <input v-model="email" required type="email"  class="form-control mt-4" placeholder="E-mail">
    <!-- <span v-if="msg.email">{{msg.email}}</span> -->
    <small v-if="msg.email"  role="alert" class="alert alert-danger form-text text-muted mb-4">
       {{msg.email}}
    </small>
    <!-- Password -->
    <input v-model="password" required type="password" id="defaultRegisterFormPassword" class="mt-4 form-control" placeholder="Password">
    <!-- <span v-if="msg.password">{{msg.password}}</span> -->
    <small v-if="msg.password" role="alert" class="p-alert alert alert-danger form-text text-muted mb-4">
      <li v-for="message in msg.password" :key="message.id">         
           {{message}}         
       </li>
    </small>

       <input type="submit" value="Submit" class="btn btn-info my-4 btn-block">
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  data(){
    return {
        firstName:null,
        lastName: null,
        email: null ,
        password:null,
        phonenum:null,
        userid:null,      
        msg: [],
         rules: [
				{ message:'One lowercase letter required.', regex:/[a-z]+/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"8 characters minimum.", regex:/.{8,}/ },
				{ message:"One number required.", regex:/[0-9]+/ }
			],
    }
  },
  watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    password(value){
      this.password = value;
      this.validatePassword(value);
    },
    userid(value)
    {
        this.userid = value;
        this.IsUserIdValid(value)
    }
  },
  methods:{
    validateEmail(value){
      if ((/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/).test(value))
        {
            this.msg['email'] = '';
        } else{
            this.msg['email'] = 'Invalid Email Address';
        } 
    },
    validatePassword(value){
       let errors = []
      for (let condition of this.rules) {
				if (!condition.regex.test(value)) {
					errors.push(condition.message)
        }
      }
      if (errors.length === 0) {
				this.msg['password'] = ''
			} else {
				this.msg['password'] = errors
			}
    },
    checkForm :function(e){
       e.preventDefault();
       if(!this.firstName) return false;
       if(!this.lastName) return false;
       if(!this.email || this.msg['email'].length > 0 ) return false
       if(!this.password || this.msg['password'].length > 0) return false;
       if(!this.userid || this.msg['userid'].length >0) 
       return false
       $(".loader").show()
        axios.get('UserManagement/registerUser',{
                    params: {
                        firstname:this.firstName,
                        lastname:this.lastName,
                        emailid:this.email,
                        password:this.password,
                        userid: this.userid,
                        phonenumber:this.phonenum
                    }
                })
                .then(response => {(response = response.data)
                console.log(response)
                $(".loader").hide()
                // alert(response.data)
                if(response == true)
                {
                    alert("Registered sucessfully..!!")
                    this.$router.push('/')
                }
                else {
                    console.log(response)
                    alert("something went wrong. Please try again after some time")
                }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
       
    },
    IsUserIdValid(){
        axios.get('UserManagement/checkUserId/'+  this.userid)
                .then(response => {(this.response = response.data)
               // console.log(response)
                // alert(response.data)
                if(response.data == false)
                    {
                        this.msg['userid'] = 'user id already exists. Please try another.'  
                        var alertmsg = this.userid + "already exists. Please try other"
                        alert(alertmsg) 
                       // alert("user id already exists. please try another")                     
                    }
                    else if(response.data == true)
                    {
                        this.msg['userid'] = ''
                    }
                    else {
                        console.log(response.data)
                        alert("something went wrong. Please try again after some time")
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-alert{
     text-align: left; 
    padding: 0.5rem 0.25rem 0.5rem 2.5rem;
}
</style>
