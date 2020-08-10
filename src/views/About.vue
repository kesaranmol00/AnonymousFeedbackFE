<template>
  <div class="about">
    <h1>Update Account</h1>
    <form @submit="checkForm">     
      <label for="first name">First Name:</label>
      <input type="text" v-model="firstName" required>
      <br>
      <label for="last name">Last Name:</label>
      <input type="text" v-model="lastName" required>
      <br>
      <label for="phonenum">Phone number:</label>
      <input type="text" v-model="phonenum" @keypress="isNumber($event)" maxlength = "10" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
      <span v-if="msg.userid">{{msg.phonenum}}</span>
      <br>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required><br>
      <span v-if="msg.password">{{msg.password}}</span>
      <br>
       <input type="submit" value="Submit">
    </form>

  </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
   data(){
    return {
        firstName:null,
        lastName: null,
        password:null,
        phonenum:null,    
        userid :null,
        msg: [],
    }
  },
   watch: {
    password(value){
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods:{
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
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
       if(!this.password || this.msg['password'].length > 0) return false;
      
        axios.get('UserManagement/updateUser',{
                    params: {
                        firstname:this.firstName,
                        lastname:this.lastName,
                        password:this.password,                       
                        phonenumber:this.phonenum,
                        userid : this.userid
                    }
                })
                .then(response => {(response = response.data)
                console.log(response)
                // alert(response.data)
                if(response == true)
                {
                    alert("Updated sucessfully..!!")
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
     }
  },
  mounted : function(){
    let token = document.cookie;
    if( token !="")
    {
      token = token.split("=")[1]
      this.userid = token
      axios.get('UserManagement/getUser/'+ token)
      .then(response => {(this.response = response.data)
        console.log(response.data)
        this.firstName = response.data.FirstName
        this.lastName = response.data.LastName
        this.phonenum = response.data.PhoneNumber
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
   }
   else{
      $("#nav").removeClass('d-none')      
      $("#loggedin").addClass('d-none')
      alert("Please login again")
      this.$router.push('/')      
   }
  }
}
</script>
<style scoped>
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