<template>
  <footer>
    <h3>Let's Talk!</h3>
    <p>I'm ready for your company</p>
    <a href= "" class= "contact-btn">
      <div class= "contact-cover"></div>
      <span class= "contact-text">CONTACT ME</span>
    </a>
    <p class= "made-by">Coded by Pewww</p>
  </footer>
</template>

<script>
export default {
  name: 'main-footer'
}
</script>

<style scoped>
  /* 설계 잘못함 */
  footer {
    height: 442px;
    margin-top: 1000px;
    background-image: url('../assets/images/footer-back.jpg');
    background-size: cover;
    background-position: center;
  }

  h3 {
    font-family: 'againts';
    font-size: 90px;
    letter-spacing: 6px;
    color: #FFF;
    text-align: center;
    font-weight: normal;
    padding-top: 85px;
  }

  p {
    color: #FFF;
    font-family: 'montserrat';
    text-align: center;
    letter-spacing: 0.3px;
    font-weight: 600;
    padding-top: 15px;
  }

  .contact-btn {
    display: block;
    width: 150px;
    height: 44px;
    background-color: #00a8e8;
    margin: 0 auto;
    border-radius: 100px;
    margin-top: 30px;
    text-align: center;
    text-decoration: none;
    padding-top: 11px;
    position: relative;
    overflow: hidden;
  }

  .contact-btn:hover .contact-cover { bottom: 0; }
  .contact-btn:hover {
    animation: size 0.5s forwards ease-in-out 3;
  }

  @keyframes size {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .contact-cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 44px;
    transition: 0.3s;
  }

  .contact-text {
    color: #FFF;
    font-family: 'nanumsquare';
    letter-spacing: 0.2px;
    font-size: 17px;
    font-weight: 500;
    position: relative;
  }

  .made-by {
    color: #6A6B6F;
    font-weight: 400;
    font-size: 14px;
    padding-top: 50px;
  }
</style>