<template>
    <div class="main">
            <header>
                <div class="inner">
                    <b-nav tabs justified class="menus">
                        <b-nav-item v-for="menuList in menu"
                        :key="menuList" class="menu">{{menuList}}</b-nav-item>
                    </b-nav>
                </div>
            </header>
            <section>
                <div class="inner">
                    <!--검색창-->
                    <!-- <div class="search">
                        <b-form-input
                        v-model="searchTitle"
                         class="searchInput" placeholder="영상 제목을 입력해주세요"></b-form-input>
                        <b-input-group-append>
                        <b-button class="searchButton" size="sm" text="Button" variant="success">Button</b-button>
                        </b-input-group-append>
                    </div> -->
                    <!--페이지 다시 로딩되면서 영상 랜덤으로 변경.-->
                    <div class="reload">
                         <fa :icon="['fab', 'github']" />
                    </div>
                    <div class="viderList">
                        <!--json 파일의 개수만큼 영상 틀 생김.-->
                        <div class="videoInformations"
                        v-for="movieCount, i in 10"
                        :key="i" >
                            <div class="video" id="video">
                                <div class="videoInner">
                                    <img id="videoImg" class = "videoImg" :src="videoImg[i]" alt="이미지 없음."
                                    @click="watchVideo()"/>
                                    {{i}}
                                    <div class="videoInformation">
                                        <div class="videoTitle">
                                            {{videoTitle[i]}}
                                        </div>
                                        <div class="videoUser">
                                            {{videoUser[i]}}
                                        </div>
                                    </div>
                                </div> 
                            </div>                       
                        </div>
                    </div>
                    <!--영상 누르면 화면 어두워지고 동영상 나오도록 하기-->
                    <div class="movieBox" @click="movieDown()"/>
                    <div class="movie">
                        <!-- <video controls autoplay muted src="https://www.youtube.com/embed/kfGi3rTct8c">
                        </video> -->
                        <iframe  frameborder="0"></iframe>
                        <div class="inMovieInformation">
                            <div class="inVideoTitle" id="inVideoTitle">영상 이름</div>
                            <div class="inVideoViews">영상 조회수</div>
                            <div class="profile">
                                <img class = "profileImg" :src="videoImg[i]" alt="이미지 없음."/>
                                <div class="profileRight">
                                    <div class="profileName" id="profileName">채널 이름</div>
                                    <div class="subscribe">구독자 수</div>
                                </div>
                            </div>
                            <!--영상 상세설명 표시되는 곳.-->
                            <div>
                                <b-button
                                :class="visible ? null : 'collapsed'"
                                :aria-expanded="visible ? 'true' : 'false'"
                                aria-controls="collapse-4"
                                @click="visible = !visible"
                                >
                                더 보기
                                </b-button>
                                <b-collapse id="collapse-4" v-model="visible" class="videoDetailedDescription">
                                <b-card>영상 상세설명</b-card>
                                </b-collapse>
                            </div>
                        </div>
                    </div>
                    <h2 class="movieDown" @click="movieDown()">x</h2>
                </div>
            </section>
            <!-- <Footer/> -->
        </div>
</template>

<script>
import Footer from './footer.vue'
import data from '../data/data.json'
export default {
    components: {
        Footer
    },
    data(){
        return{
            navigations: [
                {
                    name : 'Main',
                    href: '/'
                }
            ],
            menu: ["전체", "끼니", "다이어트", "운동", "간식"], // 메뉴 리스트
            movieLength: data.length,
            videoImg: [],
            videoUser: [],
            videoTitle: [],
            video: [],
            // 상세설명 더 보기 누르기 전까지 안나오도록 설정.
            visible: false
        }
    },
    mounted(){
        this.underLine();
        this.watch();
        this.videoBg();
    },  
    created(){
        // this.indent();
        this.videoInformation();
    },
    methods:{
        underLine(){
            const menu = document.querySelectorAll('.menu');
            for(var i = 0; i < menu.length; i++){
                    menu[i].onmouseover = function(){
                        let underLine = document.querySelectorAll('.underLine');
                        for(var j = 0; j <= underLine.length; j++){
                            underLine[j].classList.add('event');
                        }
                    }
                    menu[i].onmouseout = function(){
                        let underLine = document.querySelectorAll('.underLine');
                        for(var z = 0; z <= underLine.length; z++){
                            underLine[z].classList.remove('event');
                    }
                }
            }
        },
        watchVideo(){
            let movieBox = document.querySelector('.movieBox');
            let movie = document.querySelector('.movie');
            let movieDowm = document.querySelector('.movieDown');
            movieBox.style.display = "block";
            movie.style.display = "block";
            movieDowm.style.display = "block";
        },
        movieDown(){
            let movieBox = document.querySelector('.movieBox');
            let movie = document.querySelector('.movie');
            let movieDowm = document.querySelector('.movieDown');
            movieBox.style.display = "none";
            movie.style.display = "none";
            movieDowm.style.display = "none";
        },
        mainLink(){
            this.$router.push({
                path : '/'
            })
        },
        // 비디오 영상, 이미지, 제목, 비디오 등등을 표시.
        videoInformation(){
            let movieInner = data;
            console.log(data.length);
            // 영상 이미지 넣기
            movieInner.map(a => {
                this.videoImg.push(a.thumbnail);
            })
            // 영상 제목 넣기
            movieInner.map(a => {
                this.videoUser.push(a.query);
            })
            // 영상 설명 넣기
            movieInner.map(a => {
                this.videoTitle.push(a.title);
            })
            movieInner.map(a => {
                this.video.push(a.url);
            })
        },
        // 이미지 클릭 시 유튜브 영상 보이게 하기
        watch(){
            const videoImg = document.querySelectorAll('.videoImg');
            // // 이렇게 변수로 따로 지정 안해주면 제대로 안뜬다.
            const video = this.video;
            const videoTitle = this.videoTitle;
            const videoUser = this.videoUser;
            for(let i in video){
                videoImg[i].addEventListener('click', function(){
                    const movieLink = document.querySelector('.movie iframe'); // 영상부분
                    movieLink.src = video[i];
                    // 영상이름 나오는 부분은 id값으로 가져와서 설정하기(innerText, textContent적용이 되기 때문)
                    // 영상 제목 넣기
                    const inVideoTitle = document.getElementById('inVideoTitle');
                    inVideoTitle.innerText = videoTitle[i];
                    // 채널이름 넣기 
                    const profileName = document.getElementById('profileName');
                    profileName.innerText = videoUser[i];
                })
            }
        },
        // 영상 이미지 가져오기 (높은 해상도로) 코드 개선하기.
        replaceDiffSizeImage(src, size = 700){
            // 대문자 SX300으로 시작하는 text를 SX700으로 해당하는 text로 변경 
            // 하지만 700은 다른 사이즈로도 변경할 수 있도록 size라는 매개변수를 아래와 같이 적이주자.
            movieInner.map(a => {
                this.videoImg.push(a.thumbnail);
            })
            return src.replace('SX300', `SX${size}`)
        }
    }
}
</script>
<style scoped>
    *{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .main{
        position: relative;
        width: 100%;
    }
    .inner{
        position: relative;
        margin: auto;
        width: 1000px;
        background-color: #FED2AA;
        height: 100%;
    }
    header{
        position: relative;
        width: 100%;
        height: 120px;
        background-color: #FED2AA;
    }
    .menus{
        position: absolute;
        top: 78px;
        left: 25px;
    }
    .menu{
        width: 100px;
    }
    .menu a{
        color: #fff;
    }
    .menu a:hover{
        color: #333;
    }
    .underLine{
        margin-top: 30px;
        width: 100%;
        height: 4px;
        background-color: #fff;
        opacity: 0;
        transition: 1s;
    }
    .underLine.event{
        transform: translateY(-20px);
        opacity: 1;
    }
    section{
        position: relative;
        width: 100%;
        height: 70%;
    }
    /* 검색 창 */
    /* .search{
        position: absolute;
        right: 0;
        top: 30px;
        background-color: white;
        display: flex;
    }
    .searchInput{
        width: 200px;
        height: 30px;
    }
    .searchButton{
        background-color: #c4c4c4;
    } */
    .viderList{
        position: absolute;
    }
    .videoImg{
        position: absolute;
        width: 295px;
        height: 200px;
        border-radius: 10px;
        border: 3px solid rgb(205, 203, 203);
        cursor: pointer;
    }
    .videoInformations{
        width: 700px;
        height: 250px;
        border-radius: 10px;
        background-color: rgb(238, 235, 235);
    }
    .video{
        position: relative;
        top: 20px;
        margin: 30px 20px;
        width: 300px;
        height: 200px;
        border-radius: 10px;
    }
    .videoInner{
        position: absolute;
        display: flex;
    }
    .videoInformation{
        position: absolute;
        left: 200px;
        margin: 30px 100px;
    }
    .videoInformation:nth-child(4),
    .videoInformation:nth-child(5),
    .videoInformation:nth-child(6){
        position: relative;
        /* margin-top: 400px;
        margin-left: 10px; */
    }
    .videoInformation{
        position: relative;
    }
    .videoUser{
        font-size: 12px;
        margin-left: 20px;
    }
    .videoTitle{
        width: 300px;
        font-size: 16px;
        margin-left: 20px;
    }
    .darkBg{
        margin-top: 180px;
        background:rgba(0, 0, 0, 0.5);
        opacity: 0;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        transition: 1s;
    }
    .darkBg.event{
        opacity: .7;
        transform: translateY(-200px);
    }
    .title{
        color: #fff;
        padding: 10px;
        font-size: 25px;
        font-weight: 700;
    }
    .name{
        color: #fff;
        padding: 10px;
        font-size: 20px;
        font-weight: 500;
    }
    /* 영상 상세정보 */
    .movieBox{
        position:fixed;
        right: 1px;
        top: 1px;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        opacity: .5;
        display: none;
    }
    .movie{
        position: fixed;
        width: 1000px;
        height: 600px;
        background-color: #d3d0d0;
        border: solid 1px #333;
        border-radius: 10px;
        display: none;
        overflow-y: scroll;
    }
    .movie iframe{
        border: solid 2px rgb(131, 131, 131);
        width: 800px;
        height: 500px;
        margin: 5% 7%;
        border-radius: 10px;
        z-index: 10;
    }
    .movieDown{
        position: fixed;
        width: 80px;
        height: 50px;
        color: #fff;
        top : 150px;
        right: 220px;
        border-radius: 10px;
        cursor: pointer;
        display: none;
    }
    .inMovieInformation{
        margin-left: 80px;
    }
    .inVideoTitle{
        margin-top: -20px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 700;
    }
    .inVideoViews{
        margin-bottom: 10px;
        font-size: 14px;
    }
    .profile{
        display: flex;
        margin-bottom: 10px;
    }
    .profileImg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid 3px rgb(172, 171, 171);
        background-color: rgb(208, 203, 203);
        font-size: 10px;
    }
    .profileRight{
        margin-left: 20px;
    }
    .profileName{
        font-size: 14px;
        font-weight: 700;
    }
    .subscribe{
        font-size: 12px;
    }
    .collapsed{
        margin-bottom: 10px;
        font-size: 14px;
        /* border-bottom: solid 1px #333; */
        border-top : none;
        border-right: none;
        border-left: none;
        font-weight: 700;
        color: #333;
        background-color: #d3d0d0;
    }
    .videoDetailedDescription{
        margin-top: 10px;
        width: 800px;
    }
    /* 반응형 시작(휴대폰 사이즈) */
@media(max-width: 365px){
    .inner{
        width: 365px;
    }
    /* header */
    header{
        height: 113px;
    }
    .menus{
        font-size: 12px;
    }
    .menu{
        margin-left: -45px;
    }
    /* section */
    .videoInformations{
        width: 350px;
        height: 150px;
    }
    .videoInformation{
        width: 100px;
        height: 150px;
        left: 30px;
        bottom: 15px;
    }
    .videoImg{
        width: 120px;
        height: 100px;
        margin : 0, -300px;
    }
     .videoTitle{
        width: 120px;
        font-size: 10px;
    }
    .videoUser{
        font-size: 8px;
    }
    .movie{
        width: 350px;
        height: 500px;
    }
    .movie iframe{
        width: 330px;
        height: 170px;
        margin: 3% 2%;
    }
    .movieDown{
        display: none;
    }
    .inMovieInformation{
        margin: 10px 0;
        padding: 10px;
    }
    .inVideoTitle{
        font-size: 14px;
    }
    .inVideoViews{
        font-size: 12px;
    }
    .profileImg{
        width: 35px;
        height: 35px;
    }
    .protileName{
        font-size: 12px;
    }
    .subscribe{
        font-size: 10px;
    }
    .collapsed{
        font-size: 12px;
    }
    .videoDetailedDescription{
        width: 320px;
    }
}
</style>