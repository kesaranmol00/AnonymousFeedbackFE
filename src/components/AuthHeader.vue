<template>
    <div>
        <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |  
      <a href="javascript:;" v-on:click="DeleteCookie()">Log out</a>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods :{
        DeleteCookie() {
            // var token = document.cookie;
            if(confirm("Are you sure you want to log out ?")){

                document.cookie=document.cookie+";max-age=0"

                $("#nav").removeClass('d-none')      
                $("#loggedin").addClass('d-none')
                this.$router.push('/')
                
            }
        },
    }
}
</script>