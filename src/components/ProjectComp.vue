<template>
    <div>
        <HeaderComp />
        <ProjectBanner/>
        <ProjectContent />
        <FooterComp />
    </div>
</template>

<script>
    import ProjectBanner from './ProjectBanner.vue'
    import ProjectContent from './ProjectContent.vue'
    import FooterComp from './FooterComp.vue';
    import HeaderComp from './HeaderComp.vue';


    export default {
        name: "ProjectComp",
        components: {
            ProjectBanner,
            ProjectContent,
            HeaderComp,
            FooterComp
        }
    }
</script>

<style scoped>

</style>