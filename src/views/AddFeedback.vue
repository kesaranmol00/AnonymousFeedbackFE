<template>
    <div class="unauth">       
                <p class="alert alert-danger form-text text-muted mb-4 d-none">{{this.message}}</p>
            
            <div class="content">
                <!-- <input v-model="comment" required type="text"  class="form-control mt-4" placeholder="Add comment..."> -->
                <h3><span class="label label-default">Add Feedback</span></h3>
                <textarea v-model="comment" required type="text"  class="comment form-control mt-4" placeholder="Start writing..."></textarea> 
                <button  class="btn btn-info my-4 btn-block" @click="SaveFeedback()"> Send </button>
            </div>        
    </div>    
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
    data() {
        return{
        message : '',
        userid : null,
        comment:null
        }
    },
    methods :{
        SaveFeedback(){           
            if(this.comment ==null || this.comment == "")
            {
                this.message = "Please add some feeback to continue..!!"
                $(".alert").removeClass("d-none")               
            }
            else{
                $(".loader").show()
                 axios.get('Feedback/addFeedback', {
                    params: {
                        userid:this.$route.params.id,
                        comments:this.comment
                    }
                })
                .then(response => {(this.response = response.data)
                this.message = response.data
                  $(".loader").hide()
                  $(".alert").removeClass("d-none")
                })
                .catch(error => {
                    console.log(error)
                     $(".loader").hide()
                })
            }
        }
    },
    mounted : function(){
    let token = this.$route.params.id;
    if( token !="")
    {
      $(".loader").show()
      axios.get('UserManagement/getUser/'+ token)
      .then(response => {(this.response = response.data)        
        this.firstName = response.data.FirstName
        this.lastName = response.data.LastName
        console.log(response)
        if(response.data == "")
        {
            $(".comment").attr('disabled',true);
            $(".btn").attr('disabled',true);
            $(".alert").toggleClass("d-none")
            this.message = "User doesn't exist. Please try with correct user"
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
      this.$router.push('/')        
   }
   
  }
}
</script>

<style scoped>
.comment {
 min-height: 200px;
}
@media only screen and (max-width: 425px) {
  .comment {
 min-height: 150px;
}
}
</style>