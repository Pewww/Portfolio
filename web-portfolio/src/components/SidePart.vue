<template>
  <div id= "side-part">
    <img :src= "redirectImg.src"
         :alt= "redirectImg.alt"
         class= "redirect-img"
         @click= "redirect"
    >
  </div>
</template>

<script>
export default {
  name: 'side-part',
  data () {
    return {
      redirectImg: {
        src: require('../assets/images/logo-black-blu.png'),
        alt: '새로고침'
      }
    }
  },
  methods: {
    redirect () {
      this.$router.go(0);
    }
  }
}
</script>

<style scoped>
  #side-part {
    width: 100px;
    height: 100%;
    float: left;
    position: fixed;
  }

  #side-part img {
    cursor: pointer;
  }

  .redirect-img {
    width: 45px;
    margin: 32px 0 0 28px;
  }
</style>


