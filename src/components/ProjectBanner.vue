<template>
    <div class="banner center">
        <div class="image">
            <img src="../assets/proj-banner.jpg" alt="banner">
        </div>
        <div class="info">
            <div class="info-block">
                <h2 class="info__title">Our Project</h2>
                <p class="info__text">Home / Project</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectBanner",
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .center {
        padding-left: calc(50% - 960px);
        padding-right: calc(50% - 960px);
    }
    .banner {
        max-width: 1920px;
        height: 350px;
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 200px;
    }
    .image>img{
        width: 1920px;
        height: 350px;
    }
    .info {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 504px;
        height: 178px;
        top: 175px;
        padding: 41px 125px 41px 125px;
        border-radius: 37px 37px 0px 0px;
        background-color: #FFF;
    }
    .info-block {
        display: flex;
        flex-direction: column;
        width: 254px;
        height: 96px;
    }
    .info__title {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        /* line-height: 63px; */
        letter-spacing: 0em;
        /* text-align: center; */
        color: #292F36;
    }
    .info__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        /* line-height: 33px; */
        letter-spacing: 0.01em;
        /* text-align: center; */
        color: #4D5053;
    }
</style>