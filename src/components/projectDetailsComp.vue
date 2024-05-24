<template>
    <div class="bigProject">
    <HeaderComp />
    <ProjectDetails  />
    <FooterComp />
    </div>
</template>

<script>

import FooterComp from './FooterComp.vue';
import HeaderComp from './HeaderComp.vue';
import ProjectDetails from './ProjectDetails.vue';
export default{
    name:'projectDetailsComp',
    components:{
        FooterComp,
        HeaderComp,
        ProjectDetails
    },
}
</script>

<style scoped>

</style>