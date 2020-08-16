<template>
  <div class="about auth">
     <!-- <h3 class="h4 mb-4">Update Account</h3> -->
     <h3>Update Account</h3>
    <form @submit="checkForm" class="text-center border border-light p-3">

      <div class="form-row mb-4">
        <div class="col">
            <!-- First name -->
            <input v-model="firstName" required type="text" class="form-control" placeholder="First name">
        </div>
        <div class="col">
            <!-- Last name -->
            <input v-model="lastName" required type="text" class="form-control" placeholder="Last name">
        </div>
      </div>
      <!-- User Id -->
    <input type="text" class="form-control  mt-4" placeholder="User Id" v-model="userid" disabled>
     <!-- User email id -->
    <input type="text" class="form-control  mt-4" placeholder="Email id" v-model="emailid" disabled>
       <!-- Phone number -->
    <input type="text" class="form-control  mt-4" placeholder="Phone number" v-model="phonenum" @keypress="isNumber($event)" maxlength = "10" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">

    <!--Old Passowrd -->
    <input v-model="oldPassword" required type="password" class="mt-4 form-control" placeholder="Old Password">
      <small v-if="msg.oldpassword" role="alert" class="alert alert-danger form-text text-muted mb-4">                
            {{msg.oldpassword}}  
      </small>

    <!--New  Password -->
    <input v-model="password" required type="password" class="mt-4 form-control" placeholder="New Password">
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
        emailid :null,
        oldPassword : null,
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
       if(!this.password || this.msg['password'].length > 0) return false;
       $(".loader").show()
        axios.get('UserManagement/updateUser',{
                    params: {
                        firstname:this.firstName,
                        lastname:this.lastName,
                        password:this.password,                       
                        phonenumber:this.phonenum,
                        userid : this.userid,
                        oldPassword : this.oldPassword
                    }
                })
                .then(response => {(response = response.data)
                console.log(response)
                 $(".loader").hide()
                // alert(response.data)
                if(response == true)
                {
                    alert("Updated sucessfully..!!")
                    this.$router.push('/home')
                }
                else {
                    this.msg['oldpassword'] = response
                     $("#oldpassword").load(window.location.href + "#oldpassword" );
                }
                })
                .catch(error => {
                    console.log(error)
                    alert("something went wrong. Please try again after some time")
                    $(".loader").hide()
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
      $(".loader").show()
      axios.get('UserManagement/getUser/'+ token)
      .then(response => {(this.response = response.data)
        // console.log(response.data)
        this.firstName = response.data.FirstName
        this.lastName = response.data.LastName
        this.phonenum = response.data.PhoneNumber
        this.emailid = response.data.EmailId
        $(".loader").hide()
      })
      .catch(error => {
        console.log(error)
        this.errored = true
        $(".loader").hide()
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
.about{
   margin : 0 30%;
  border-radius: 10px;
  /* height: 84.8vh; */
}
.p-alert{
     text-align: left; 
    padding: 0.5rem 0.25rem 0.5rem 2.5rem;
}

</style>