<template>
  <div id= "main-part">
    <main-header />
    <main-section />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from './MainHeader'
import MainSection from './MainSection'
import MainFooter from './MainFooter'

export default {
  name: 'main-part',
  components: {
    MainHeader,
    MainSection,
    MainFooter
  }
}
</script>

<style scoped>
  #main-part {
    width: calc(100% - 100px);
    height: 100%;
    float: right;
  }
</style>


