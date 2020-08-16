<template>
  <div class="home auth">
    
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="feedback-container" v-for="feedback in feedbacks" :key="feedback.key">      
      <Feedback class="feedback" v-bind:feedback ="feedback" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import Feedback from './Feedback.vue'
export default {
  name: 'Home',
  data() {
        return{
           feedbacks :''
        }
    },
   components : {
        Feedback
    },
    created : function(){
      
    },
  mounted : function(){
    let token = document.cookie;
    if( token !="")
    {     
      token = token.split("=")[1]
      if(token != ''){
        $(".loader").show()
        axios.get('Feedback/getFeedback/'+ token)
        .then(response => {(this.response = response.data)
          console.log(response.data)
          this.feedbacks = response.data
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
   else{
      $("#nav").removeClass('d-none')      
      $("#loggedin").addClass('d-none')
      alert("Please login again")
      this.$router.push('/')      
       
     // window.location.href = 'http://localhost:8080'
     // window.location.href = 'https://kesaranmol00.github.io/AnonymousFeedbackFE/'
   }
  }
}
</script>

<style scoped>
/* .feedback{
  border: 1px dotted black;   
  padding: 10px;  
  margin: 10px;
  border-radius: 5px;
}
.feedback-container{
  display: inline;
 
} */
</style>