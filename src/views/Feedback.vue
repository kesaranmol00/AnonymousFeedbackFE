<template>
    <li>
        <!-- <div v-for="feed in feedback" :key="feed.key"> -->
             <!-- {{feedback.Name}}
            {{feedback.ForUser}} -->
            {{feedback.Comment}}
        <!-- </div> -->
    </li>
</template>

<script>
export default {
    name:"Feedback",
    props : ["feedback"],
}
</script>