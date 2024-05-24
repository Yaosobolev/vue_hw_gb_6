<template>
    <div class="banner center">
        <div class="image"><img src="../assets/home-banner.jpeg" alt="banner"></div>
        <div class="intro">
            <div class="intro__content">
                <h2 class="intro__content_title">Let Your Home Be Unique</h2>
                <p class="intro__content_text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            </div>
            <button class="intro__btn"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeBanner",
        components: {
        }
    }
</script>

<style scoped>
    .center {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }
    .banner {
        width: 1200px;
        height: 758px;
        border-radius: 50px;
        position: relative;
    }
    .intro {
        width: 434px;
        height: 342px;
        display: flex;
        flex-direction: column;
        gap: 21px;
        position: absolute;
        top: 100px;
        left: 52px;
    }
    .image img {
        width: 1200px;
        height: 758px;
        border-radius: 50px;
    }
    .intro__content{
        width: 434px;
        height: 246px;
    }
    .intro__content_title {
        font-family: DM Serif Display;
        font-size: 65px;
        font-weight: 400;
        line-height: 81px;
        letter-spacing: 0em;
        text-align: left;
        color: #292F36;
    }
    .intro__content_text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }
    .intro__btn{
        width: 220px;
        height: 75px;
        padding: 26px 48px;
        gap: 10px;
        border-radius: 18px;  
        color: #fff;
        background-color: #292F36;
    }
</style>