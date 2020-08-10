<template>
  <div>
    <h1>Create a New Account</h1>
    <form @submit="checkForm">
      <label for="first name">First Name:</label>
      <input type="text" v-model="firstName" required>
      <br>
      <label for="last name">Last Name:</label>
      <input type="text" v-model="lastName" required>
      <br>
      <label for="userid">User Id:</label>
      <input type="text" v-model="userid" required>
      <span v-if="msg.userid">{{msg.userid}}</span>
      <br>
      <label for="phonenum">Phone number:</label>
      <input type="text" v-model="phonenum" @keypress="isNumber($event)" maxlength = "10" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
      <span v-if="msg.userid">{{msg.phonenum}}</span>
      <br>
      <label for="email">Email Address:</label>
      <input type="text" v-model="email" required> <br>
      <span v-if="msg.email">{{msg.email}}</span>

      <label for="password">Password:</label>
      <input type="password" v-model="password" required><br>
      <span v-if="msg.password">{{msg.password}}</span>
      <br>
       <input type="submit" value="Submit">
    </form>

  </div>
</template>

<script>
import axios from 'axios'
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
      let difference = 8 - value.length;
      if (value.length<8) {
        this.msg['password'] = 'Must be 8 characters! '+ difference + ' characters left' ;
      } else {
         this.msg['password'] = '';
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
                console.log(response)
                // alert(response.data)
                if(response.data == false)
                    {
                        this.msg['userid'] = 'user id already exists. Please try another.'                        
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
#visa {
  margin: 20px auto;
  max-width: 700px;
  margin-bottom: 28px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
span {
  padding-top: 0px;
  margin-top: 0px;
  font-size: 12px;
  color: red;
}
input {
  font-size: 30px;
  border: 1px double rgb(102, 97, 96) ;
  border-radius: 4px;
}

</style>
