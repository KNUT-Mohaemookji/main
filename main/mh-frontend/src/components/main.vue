<template>
  <div class="body"
  @click="menuOff()">
      <header>
        <img src="https://avatars.githubusercontent.com/u/83266629?s=200&v=4" alt="" class="logo">
      </header>
      <section>
        <div class="backImg1">
          <div class="inner">
            <span class="text_firstLine">배고픈데...</span>
            <span class="text_secondLine">모해묵지?!</span>
          </div>
        </div>
        <div class="backImg2">
          <div class="inner">
            <div class="text2">오늘은 이거다! <br> 음식을 카테고리 <br> 별로!</div>
            <img src="https://user-images.githubusercontent.com/76980526/127959158-4c0530ec-1873-403c-9221-4fc310be5669.jpeg" alt="" class="bigImage">
            <img src="https://user-images.githubusercontent.com/76980526/127960267-25f47a80-4acf-4afd-91ee-4e853f57e1ba.jpeg" alt="" class="smallImage">
            <!-- <button class="videoList_button"
            @click="videoListLink()">
            영상 보러가기</button> -->
          </div>
        </div>
        <div class="backImg3">
          <div class="inner">
            <div class="text3">요리하러 가기!</div>
            <button class="videoList_button"
            @click="videoListLink()">
            Watch!</button>
            <button class="about_button"
            @click="aboutLink()">
            about</button>
          </div>
        </div>
      </section>
  </div>  
</template>
<script>

export default {
  mounted(){
    this.loding();
  },
  methods:{
    // 화면이 켜질 때 동작
    loding(){
      const text_firstLine = document.querySelector('.text_firstLine');
      const text_secondLine = document.querySelector('.text_secondLine');
      setTimeout(() => {
        text_firstLine.classList.add('event');
      }, 500);
      setTimeout(function(){
        text_secondLine.classList.add('event')
      }, 1500)
      const big_image = document.querySelector('.bigImage');
      const small_image = document.querySelector('.smallImage');
      setInterval(() => {
        big_image.classList.toggle('event');   
      }, 1000);
      setInterval(()=>{
        small_image.classList.toggle('event');
      }, 1500);
    },
    menuOn(){
      let menuUl = document.querySelector('.menu ul');
      setTimeout(() => {
        menuUl.classList.add('event');
      }, 300);
    },
    menuOff(){
      let menuUl = document.querySelector('.menu ul.event');
            menuUl.classList.remove('event');
    },
    // videoList로 url 이동
    videoListLink(){
        this.$router.push({
            path : '/videoList'
        })
    },
    // about으로 url 이동
    aboutLink(){
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>
<style scoped>
  template{
    margin: 0;
  }
  .body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-image: url("https://user-images.githubusercontent.com/76980526/127947926-96572de8-6f09-4680-9e87-c55a03d6e61f.jpeg");
    background-size: cover;
    opacity: .7;
  }
  a{
    text-decoration: none;
  }
  ul, li{
    list-style: none;
  }
  .inner{
    width: 1200px;
    margin: auto;
  }
  .logo{
    position: fixed;
    z-index: 10;
    cursor: pointer;
    margin: 2% 3%;
    left: 0;
    top: 10px;
    border-radius: 50%;
    width: 75px;
    height: 75px;
  }
  .menu{
    z-index: 10;
    position: fixed;
    cursor: pointer;
    margin: 2% 3%;
    font-weight: 700;
    line-height: 10px;
    font-size: 30px;
    top: 10px;
    right: 0;
  }
  .menu ul{
    position: absolute;
    z-index: 10;
    top: -70px;
    width: 300px;
    background-color: black;
    opacity: .2;
    display: none;
    height: 100vh;
    transition: 1s;
    transform: translate(70px);
  }
  .menu ul.event{
    display: inherit;
    opacity: .7;
    transform: translateX(-270px);
  }
  .menu ul li a{
    line-height: 50px;
    font-size: 25px;
    color: white;
  }
  /* 화면 로딩되면 위로 올라오게 만들 예정. */
  .backImg1{

  }
  .text_firstLine{
    position: absolute;
    opacity: 0;
    top: 20%;
    margin: 500px 0px;
    color: rgb(231, 235, 238);
    z-index: 1;
    font-size: 100px;
    font-weight: 700;
    transition: 1s;
  }
  .text_firstLine.event{
    opacity: 1;
    transform: translateY(-250px);
  }
  .text_secondLine{
    position: absolute;
    opacity: 0;
    margin: 500px 0px;
    color: rgb(231, 235, 238);
    top: 25%;
    z-index: 1;
    font-weight: 700;
    transition: 1s;
    font-size: 150px;
  }
  .text_secondLine.event{
    opacity: 1;
    transform: translateY(-150px);
  }
  .backImg2{
    position: relative;
    z-index: 1;
    top: 100vh;
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;
  }
  .text2{
    position: absolute;
    font-size: 80px;
    font-weight: 700;
    top: 0;
    margin: 5%;
  }
  .bigImage{
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    top: 0;
    right: 0;
    margin: 10%;
    transition: 1s;
  }
  .bigImage.event{
    transform: translateY(50px);
  }
  .smallImage{
    bottom: 0;
    right: 0;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 8% 30%;
    transition: 1s;
  }
  .smallImage.event{
    transform: translateY(50px);
  }
  .videoList_button, .about_button{
    display: none;
  }
/* 반응형 시작(휴대폰 사이즈) */
@media(max-width: 365px){
  .body{
    /* background-image: none;
    background-color: antiquewhite; */
    background-size: cover;
  }
  .logo{
    width: 50px;
    height: 50px;
  }
  .text2{
    margin: 50% 15%;
    font-size: 40px;
  }
  .bigImage{
    width: 150px;
    height: 150px;
    margin-top: 120%;
  }
  .smallImage{
    width: 100px;
    height: 100px;
    margin: 50% 50%;
  }
  .text_firstLine{
    top: 30%;
    left: 25%;
    font-size: 50px;
  }
  .text_secondLine{
    top: 28%;
    left: 16%;
    font-size: 60px;
  }
  .backImg2{

  }
  .videoList_button, .about_button{
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    color: rgb(0, 0, 0);
    margin: 250px 100px;
    border-radius: 10px 10px;
    font-size: 20px;
    font-weight: 700;
    width: 150px;
    height: 70px;
    cursor: pointer;
    box-shadow: 3px 3px 3px #333;
    /* 버튼 배경 투명하게 해주기 */
    background-color: transparent; 
  }
  .about_button{
    margin: 150px 100px;
  }
  .backImg3{
    position: relative;
    z-index: 1;
    top: 100vh;
    width: 100vw;
    height: 100vh;
    background-image: url("https://user-images.githubusercontent.com/76980526/143383154-18f43968-0508-48c7-8c54-272d5ae8e9a8.png");
    background-size: cover;
  }
  .text3{
    position: absolute;
    text-shadow: 2px 2px 2px #333;;
    color: rgb(255, 255, 255);
    font-size: 50px;
    font-weight: 700;
    margin: 120% 7%;
  }
}

</style>