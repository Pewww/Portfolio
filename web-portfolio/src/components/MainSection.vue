<template>
  <section>
    <div class= "main-intro">
      <div class= "intro-explain">
        <h3>BETTER LIFE</h3>
        <div class= "line"></div>
        <p>
          저는 웹 프론트엔드 개발자를 지망하는 대덕소프트웨어마이스터 <br>
          고등학교 학생입니다. 사람들에게 편의를 제공하고, 많은 도움을 줄 수 있는<br>
          멋진 개발자가 되기 위해 열심히 노력중입니다.
        </p>
        <a href= "" class= "read-more-btn">
          더 알아보기
        </a>
      </div>
      <div class= "intro-picture"></div>
    </div>
    
    <ul class= "resume-cover">
      <li v-for= "resume in resumes"
          :key= "resume.id"
          class= "resumes">

      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'main-section',
  data () {
    return {
      resumes: [
        {
          id: 1
        },
        {
          id: 2
        },  
        {
          id: 3
        },
        {
          id: 4
        }
      ]
    }
  }
}
</script>

<style scoped>
  section {
    width: 100%;
    height: 700px;
    background-image: url('../assets/images/bg_picture.png');
    background-repeat: no-repeat;
  }

  .main-intro {
    width: 1160px;
    height: 100%;
    margin: 0 auto;
    /* border-left: 1px solid #E3E3E3;
    border-right: 1px solid #E3E3E3; */
  }

  .intro-explain {
    width: 50%;
    height: 100%;
    float: left;
    /* border-right: 1px solid #E3E3E3; */
    padding-left: 32px;
  }

  h3 {
    font-family: 'raleway';
    font-size: 40px;
    color: #292929;
    letter-spacing: 1px;
    margin-top: 210px;
  }

  p {
    color: #6a6b6f;
    font-family: 'nanumsquare';
    line-height: 1.85;
    font-size: 17px;
    margin-top: 26px;
  }

  .line {
    width: 60px;
    height: 7px;
    background-color: #292929;
    margin-top: 16px;
  }

  .read-more-btn {
    width: 172px;
    height: 46px;
    display: block;
    background-color: #00a8e8;
    border-radius: 100px;
    color: #FFF;
    text-align: center;
    font-family: 'nanumsquare';
    text-decoration: none;
    font-size: 17px;
    padding-top: 14px;
    letter-spacing: 0.2px;
    margin-top: 26px;
  }

  .intro-picture {
    width: 50%;
    height: 100%;
    float: right;
    background-image: url('../assets/images/happy-skull.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* 레주메 파트 */
  .resume-cover {
    height: 1000px;
  }

  .resumes {
    height: 250px;
    border-bottom: 1px solid #E7E7E7;
    list-style: none;
  }

  .resumes:nth-of-type(1) {
    border-top: 1px solid #E7E7E7;
  }
</style>