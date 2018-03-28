<template>
  <section>
    <div class= "main-intro">
      <div class= "intro-explain">
        <h3>BETTER LIFE</h3>
        <div class= "line"></div>
        <p class= "introduce">
          저는 웹 프론트엔드 개발자를 지망하는 대덕소프트웨어마이스터 <br>
          고등학교 학생입니다. 사람들에게 편의를 제공하고, 많은 도움을 줄 수 있는<br>
          멋진 개발자가 되기 위해 열심히 노력중입니다.
        </p>
        <a href= "" class= "read-more-btn">
          <span class= "read-more-text">더 알아보기</span>
          <div class= "read-more-cover"></div>
        </a>
      </div>
      <div class= "intro-picture"></div>
    </div>
    
    <ul class= "resume-cover">
      <a v-for= "resume in resumes"
         :href= "resume.href"
         :key= "resume.id"
         class= "resumes">
          <p class= "resume-title">
            {{ resume.title }}
          </p>
          <p class= "resume-content">
            {{ resume.content }}
          </p>
          <li class= "resume-background" :id= "resume.idName">
            <div class= "resume-back-cover"></div>
          </li>
      </a>
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
          id: 1,
          title: 'tellin.kr | Planning, Web-Frontend',
          content: 'Frontend Development',
          href: 'https://www.naver.com',
          idName: 'resume-back1'
        },
        {
          id: 2,
          title: 'entrydsm.hs.kr | Web-Frontend',
          content: 'Web Design, UI/UX, Frontend Development',
          href: 'https://www.naver.com',
          idName: 'resume-back2'
        },  
        {
          id: 3,
          title: 'QT | Chrome Extension',
          content: 'Web Design, Frontend Development',
          href: 'https://www.naver.com',
          idName: 'resume-back3'
        },
        {
          id: 4,
          title: 'Just Down | Web-Frontend',
          content: 'Frontend Development',
          href: 'https://www.naver.com',
          idName: 'resume-back4'
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
    font-weight: 900;
    color: #292929;
    letter-spacing: 1px;
    margin-top: 210px;
  }

  .introduce {
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
    text-align: center;
    text-decoration: none;
    margin-top: 26px;
    position: relative;
    overflow: hidden;
    transition: 0.2s ease-out;
  }

  .read-more-text {
    display: block;
    font-size: 17px;
    padding-top: 14px;
    letter-spacing: 0.2px;
    color: #FFF;
    font-family: 'nanumsquare';
    position: relative;
    z-index: 10;
  }

  .read-more-cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    top: -46px;
    position: absolute;
  }

  .read-more-btn:hover { margin-top: 18px; }
  .read-more-btn:hover .read-more-cover {
    top: 0;
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
    display: block;
    text-decoration: none;
    width: 100%;
    height: 250px;
    border-bottom: 1px solid #E7E7E7;
    list-style: none;
    position: relative;
  }

  .resumes:nth-of-type(1) {
    border-top: 1px solid #E7E7E7;
  }

  .resumes .resume-title,
  .resumes .resume-content {
    font-weight: 400;
    padding-left: 15vw;
    transition: 0.4s;
    font-family: 'montserrat';
    position: relative;
    z-index: 3;
  }

  .resumes .resume-title {
    color: #202020;
    font-size: 21px;
    letter-spacing: -0.8px;
    word-spacing: 1px;
    padding-top: 97px;
  }

  .resumes .resume-content {
    color: #6a6b6f;
    font-size: 12px;
    padding-top: 5px;
  }

  .resume-background {
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    transition: 0.4s;
  }

  .resume-back-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .resume-background#resume-back1 { background-image: url('../assets/images/back1.jpg'); }
  .resume-background#resume-back2 { background-image: url('../assets/images/back2.jpeg'); }
  .resume-background#resume-back3 { background-image: url('../assets/images/back3.jpg'); }
  .resume-background#resume-back4 { background-image: url('../assets/images/back4.jpg'); }

  .resumes:hover .resume-background {
    width: 100%;
  }

  .resumes:hover .resume-title,
  .resumes:hover .resume-content {
    color: #FFF;
    padding-left: 19vw;
  }
</style>
