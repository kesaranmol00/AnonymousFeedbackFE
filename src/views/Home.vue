<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div v-for="feedback in feedbacks" :key="feedback.key">      
      <Feedback id="feedback" v-bind:feedback ="feedback" />
    </div>
  </div>
</template>

<script>
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
      axios.get('Feedback/getFeedback/'+ token)
      .then(response => {(this.response = response.data)
        console.log(response.data)
        this.feedbacks = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
   }
   else{
      alert("Please login again")
      //window.location.href = 'http://localhost:8080'
      window.location.href = 'https://kesaranmol00.github.io/AnonymousFeedbackFE/'
   }
  }
}
</script>

<style scoped>
#feedback{
  border: 1px solid black;
}
</style>