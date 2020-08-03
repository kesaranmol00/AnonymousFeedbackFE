<template>
    <div>
        <div class="red">
            {{this.message}}
        </div>
        <div class="content">
            <textarea id="fd-box"></textarea>
            <button @click="SaveFeedback()"> Send </button>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return{
        message : ''
        }
    },
    methods :{
        SaveFeedback(){
            axios.get('Feedback/addFeedback', {
                params: {
                    userid:this.$route.params.id,
                    comments:document.getElementById("fd-box").value
                }
                })
                .then(response => {(this.response = response.data)
                this.message = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>

</style>