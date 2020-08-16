<template>
  <div class="home auth">
    <form class="shadow-lg p-3 mb-5 bg-white rounded">
      <span class="feedback-info d-block"> Share the link to your friends and family to get some interseting feedbacks about you</span>
      <input type="text" class="feedback-link mr-4" v-model="inputtxt"  id="myInput" readonly>

      <button @click="myFunction()" class="btn btn-info">Copy text</button>
    </form>
    <div v-if="feedbacks">
      <div class="feedback-container shadow-lg p-3 m-2 bg-white rounded" v-for="feedback in feedbacks" :key="feedback.key">      
        <Feedback class="feedback" v-bind:feedback ="feedback" />
      </div>
    </div>
    <div v-else>
      <div class="shadow-lg p-3 m-2 bg-white rounded"> 
          No Record found. Please share the feedback link to your friends
      </div>
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
           feedbacks :null,
           token:null,
           inputtxt : null
        }
    },
   components : {
        Feedback
    },
    created : function(){
      
    },
    methods :{
      myFunction() {
        /* Get the text field */
        var copyText = document.getElementById("myInput");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }
    },
  mounted : function(){
    this.token = document.cookie;
    if( this.token !="")
    {     
      this.token = this.token.split("=")[1]
      if(this.token != ''){
        $(".loader").show()
        axios.get('Feedback/getFeedback/'+ this.token)
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

   // this.inputtxt = "http://localhost:8080/#/addfeedback/" + window.hostname
   this.inputtxt = "https://kesaranmol00.github.io/AnonymousFeedbackFE/#/addfeedback/" +window.hostname
  //  var inputtext = "https://kesaranmol00.github.io/AnonymousFeedbackFE/#/addfeedback/" +this.token
  //  $("#myInput").value = inputtext
  }
}
</script>

<style scoped>
/* .feedback{
  border: 1px dotted black;   
  padding: 10px;  
  margin: 10px;
  border-radius: 5px;
}*/
.feedback-container{
  display: inline-block;
  width: 30%;
} 
.feedback{
  min-height: 100px;
}
.feedback-link{
  align-items: center;
}
#myInput{
  width: 30%;
}
.feedback-info{
    font-weight: bold;
    font-size: 20px;
}
@media only screen and (max-width: 425px) {
    .feedback-container{
  display: block;
  width: 96%;
}  
#myInput{
  width: 50%;
}
}
</style>