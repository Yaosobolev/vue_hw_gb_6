<template>
    <div class="banner center">
        <div class="image"><img src="../assets/project/projectDetails-banner.jpg" alt="banner">
        </div> 
    </div>
</template>

<script>
    export default {
        name: "ProjectDetailsBanner",
        components: {
        }
    }
</script>

<style scoped>
    .center {
        padding-left: calc(50% - 960px);
        padding-right: calc(50% - 960px);
    }
    .banner {
        width: 1920px;
        height: 356px;
    }
    .image img {
        width: 1920px;
        height: 356px;
    }
</style>