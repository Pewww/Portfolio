<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: 'againts';
    src: url(./assets/fonts/againts.otf);
  }

  #app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  #app > div {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
</style>
