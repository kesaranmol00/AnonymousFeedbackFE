<template>
  <div class="home auth">
      <p>       
          <span>
            Your Feedbacks
          </span>
         Get more feedbacks :
        <input type="text" class="feedback-link mr-4" v-model="inputtxt"  id="myInput" readonly>

      <button @click="myFunction()" class="btn btn-info">Copy Link</button>
      <span class="d-block mt-3"> Share with your friends and family</span>
    </p>
    <!--&mdash; <form class="shadow-lg p-3 m-2 bg-white rounded">
      <span class="feedback-info d-block"> Share the link to your friends and family to get some interseting feedbacks about you</span>
      <input type="text" class="feedback-link mr-4" v-model="inputtxt"  id="myInput" readonly>

      <button @click="myFunction()" class="btn btn-info">Copy text</button>
    </form> -->
    <div  class="feedback-container" v-if="feedbacks">
      <span class="feedback-block shadow-lg p-3 m-2 rounded" v-for="feedback in feedbacks" :key="feedback.key">      
        <Feedback class="feedback" v-bind:feedback ="feedback" />
      </span>
    </div>
    <div class="no-record d-none">
      <div class="alert alert-info p-3 m-2"> 
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
          if(response.data.length == 0){
            $(".no-record").removeClass('d-none')
          }
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
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  color: #fff;
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
input,.btn{
  border-radius: 5px !important;
}
.feedback-block{
  border:1px dashed #F0F0F0;
}
p {
  text-transform: uppercase;
  letter-spacing: .5em;
 
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 1em 0em;
  background: #090d00;
  color: #F0F0F0;
}
p span:first-child {
  font: 700 4em/1 "Oswald", sans-serif;
  letter-spacing: 0;
  padding: .25em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  /* Clip Background Image */
  background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  /* Animate Background Image */
  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 80s linear infinite;
  /* Activate hardware acceleration for smoother animations */
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
}

/* Animate Background Image */
@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
@media only screen and (max-width: 425px) {
    .feedback-container{
    grid-template-columns: 1fr;
}  
#myInput{
  width: 50%;
}
p{
letter-spacing: .05em;
font-size: 14px;
}
p span:first-child{
 font: 700 2em/1 "Oswald", sans-serif;
}
}
</style>

<style scoped>


</style>