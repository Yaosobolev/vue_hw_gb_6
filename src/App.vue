<template>
  <div id="app">
    <!-- <HeaderComp /> -->
    <HomeComp />
    <ProjectComp />
    <!-- <FooterComp /> -->
    <projectDetailsComp />
    
  </div>
</template>

<script>
// import HeaderComp from './components/HeaderComp.vue'
// import FooterComp from './components/FooterComp.vue'
import ProjectComp from './components/ProjectComp.vue'
import HomeComp from './components/HomeComp.vue'
import projectDetailsComp from './components/projectDetailsComp.vue'

export default {
  name: 'App',
  components: {
    // HeaderComp,
    // FooterComp,
    ProjectComp,
    HomeComp,
    projectDetailsComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
