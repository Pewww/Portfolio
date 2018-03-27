<template>
  <div id= "side-part">
    <img :src= "redirectImg.src"
         :alt= "redirectImg.alt"
         class= "redirect-img"
         @click= "redirect"
    >

    <div class= "side-btn">
      <span class= "side-lines"></span>
    </div>

    <a v-for= "infos in personalInfo"
       :key= "infos.id"
       :href= "infos.href"
       class= "info-links">
      <img :src= "infos.src" :alt= "infos.alt">
    </a>
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
      },

      personalInfo: [
        {
          id: 1,
          src: require('../assets/images/facebook-logo2.png'),
          alt: '페이스북 링크',
          href: 'https://www.facebook.com'
        },
        {
          id: 2,
          src: require('../assets/images/github-logo.png'),
          alt: '깃허브 링크',
          href: 'https://www.github.com'
        }
      ]
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
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
    z-index: 9999;
  }

  #side-part img {
    cursor: pointer;
  }

  .redirect-img {
    width: 45px;
    margin: 32px 0 0 28px;
  }

  .info-links {
    display: block;
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
  }

  .info-links:nth-child(3) {
    margin-bottom: 40px;
  }

  .side-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 26px;
    height: 40px;
    cursor: pointer;
  }

  .side-btn:hover .side-lines {
    background-color: #00a8e8;
  }

  .side-btn:hover
  .side-lines::before {
    width: 26px;
    top: -8px;
    background-color: #00a8e8;
  }

  .side-btn:hover
  .side-lines::after {
    width: 26px;
    top: 5px;
    background-color: #00a8e8;
  }

  .side-lines,
  .side-lines::before,
  .side-lines::after {
    display: block;
    background-color: #000;
    transition: 0.25s;
  }

  .side-lines {
    width: 26px;
    height: 3px;
  }

  .side-lines::before {
    content: '';
    width: 24px;
    height: 3px;
    position: relative;
    top: -10px;
    margin-top: 18px;
  }

  .side-lines::after {
    content: '';
    width: 20px;
    height: 3px;
    position: relative;
    top: 7px;
  }
</style>
