<template>
    <div class="details">
        <ProjectDetailsBanner />
        <div class="center">
            <div class="content">
                <h2>{{ getTitle }}</h2>
                <p>{{ getText1 }}</p>
                <p>{{ getText2 }}</p>
            </div>
        </div>
        
    </div>
</template>


    <script>
    import ProjectDetailsBanner from './ProjectDetailsBanner.vue'
    // Подключение геттеров из хранилища
    import { mapGetters } from 'vuex';

    export default{
        name:"ProjectDetails",
        components: {
            ProjectDetailsBanner,
        },
        computed:{
            // Подключение действия из хранилища 
            ...mapGetters(['getTitle', 'getText1', 'getText2'])
        },
    }
</script>

<style scoped>
    .center {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
    }
    .content {
        width: 658px;
    }
    .content h2 {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
    }
    .content p {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }
</style>