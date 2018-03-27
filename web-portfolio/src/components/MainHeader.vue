<template>
  <div id= "background">
    <div class= "simple-intro">
      <h1>HELLO! I'M Pewww</h1>
      <h2>KOREAN WEB-FRONTEND DEVELOPER</h2>
      <div class= "contact-btn">
        <div class= "btn-cover"></div>
        <a href= "" class= "contact-url">CONTACT ME</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoped>
  #background {
    height: 100vh;
    background-image: url('../assets/images/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .simple-intro {
    position: relative;
    margin-top: -75px;
  }

  h1 {
    font-size: 90px;
    color: #FFF;
    font-family: 'againts';
    font-weight: 500;
    animation: pew 1s forwards;
  }

  @keyframes pew {
    from {
      letter-spacing: 0;
    }
    to {
      letter-spacing: 7px;
    }
  }

  h1::after {
    content: '';
    position: absolute;
    right: 50px;
    bottom: 0;
    background-image: url('../assets/images/title-underline.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 70px;
  }

  h2 {
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.5px;
    text-align: center;
    position: relative;
    top: 18px;
  }

  .contact-btn {
    width: 255px;
    height: 44px;
    background-color: #00a8e8;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 55px;
    border-radius: 100px;
    transition: 0.3s;
    overflow: hidden;
  }

  .btn-cover {
    position: absolute;
    width: 100%;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 255px;
    transition: 0.3s;
  }

  .contact-btn:hover { margin-top: 50px; }
  .contact-btn:hover .btn-cover { bottom: 0; }

  .contact-url {
    font-family: 'nanumsquare', sans-serif;
    color: #FFF;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    display: block;
    text-align: center;
    padding-top: 13px;
    letter-spacing: 0.5px;
    position: relative;
  }
</style>


