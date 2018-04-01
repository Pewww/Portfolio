<template>
  <ul id= "side-bar">
    <a v-for= "side in sideList"
       :key= "side.id"
       :href= "side.href"
       class= "side-lists">
       {{ side.title }}
       <br>
       <span>
         {{ side.explain }}
       </span>
    </a>
  </ul>
</template>

<script>
import eventBus from '../eventBus'

export default {
  name: 'side-bar',
  data () {
    return {
      sideList: [
        {
          id: 1,
          title: 'HOME',
          explain: 'A bit of everything',
          href: '#'
        },
        {
          id: 2,
          title: 'WHO AM I?',
          explain: 'Me trying to describe myself',
          href: '#'
        },
        {
          id: 3,
          title: 'SOME PROJECTS',
          explain: 'The cool ones',
          href: '#'
        },
        {
          id: 4,
          title: 'CONTACT ME',
          explain: 'Get in touch',
          href: '#'
        }
      ]
    }
  },
  mounted () {
    eventBus.$on('update:toggle', (val) => {
      this.$el.style.left = val ? 0 : defaultStatus;
    })
  }
}
</script>

<style scoped>
  #side-bar {
    width: 505px;
    height: 100%;
    background-color: #F5F5F5;
    position: absolute;
    z-index: 8888;
    left: -505px;
    top: 0;
    transition: 0.45s;
  }

  #side-bar a {
    display: block;
    width: 330px;
    height: 100px;
    margin-left: 137.5px;
    text-decoration: none;
    /* color: #00a8e8; */
    color: #202020;
    font-family: 'raleway';
    font-weight: 700;
    font-size: 26px;
    letter-spacing: 1px;
    line-height: 1;
    transition: 0.2s;
  }

  #side-bar a:nth-of-type(1) {
    margin-top: 33vh;
  }

  #side-bar a span {
    font-size: 14px;
    letter-spacing: 0.5px;
    font-family: 'montserrat';
  }

  #side-bar a:hover {
    color: #00A8E8;
    margin-left: 147.5px;
  }
</style>

