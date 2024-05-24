<template>
    <div class="counter center">
        <div class="counter__content">
            <div class="item__bord">
                <h2>12</h2>
                <p>Years Of Experiance</p>
            </div>
            <div class="item__bord">
                <h2>85</h2>
                <p>Success Project</p>
            </div>
            <div class="item__bord">
                <h2>15</h2>
                <p>Active Project</p>
            </div>
            <div class="item">
                <h2>95</h2>
                <p>Happy CUstomers</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeCounter",
        components: {
        }
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
    .counter {
        width: 1920px;
        height: 457px;
        background-color: #F4F0EC;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .counter__content {
        width: 1082px;
        height: 155px;
        display: flex;
        flex-direction: row;
        gap: 76px;
    }
    .item__bord {
        width: 230px;
        height: 155px;
        padding-right: 60px;
        border-right: 1px solid #CDA274;
    }
    .item {
        width: 170px;
        height: 155px;
    }
    .item__bord>h2, .item>h2 {
        font-family: DM Serif Display;
        font-size: 85px;
        font-weight: 400;
        line-height: 106px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #CDA274;
    }
    .item__bord>p, .item>p {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }
</style>