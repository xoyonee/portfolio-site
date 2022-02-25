import Card from "../../UI/Card";
import classes from "./inProjects.module.css";
import imac from "../../assets/img/mockup/nsad-iMac.png";
import iPad from "../../assets/img/mockup/nsad-iPadc.png";
import iPhone from "../../assets/img/mockup/nsad-iPhone.png";

const NSAD = () => {
  return (
    <Card>
      <div className={classes.card}>
        <div className={classes.img_box}>
          <img className={classes.imac} src={imac} alt="booklocker-iMac" />
          <img className={classes.iPad} src={iPad} alt="booklocker-iPad" />
          <img
            className={classes.iPhone}
            src={iPhone}
            alt="booklocker-iPhone"
          />
        </div>
        <div className={classes.desc}>
          <h3>NSAD(엔에스에이디)</h3>
          <div>
            <p className={classes.title}>
              🔹 NSAD(엔에스에이디) 홈페이지를 pc, 태블릿, 모바일에 맞춰
              반응형으로 리뉴얼한 프로젝트입니다.
            </p>
            <p className={classes.title}>
              🔹 메인 홈페이지, 카테고리 페이지, 프로덕트 페이지 3가지 페이지를
              구현하였습니다.
            </p>
            <p className={classes.title}>
              🔹 현재 페이지의 url에 따라 정보를 가져와 카테고리 페이지의
              아이템을 정렬했으며, 프로덕트 페이지도 이와 같은 방식으로
              제작하였습니다.
            </p>
            <ul>
              <li>
                <h4>⚙️ 주요 기능 ⚙️</h4>
              </li>
              <li>✔️ 메인: 이미지 슬라이드 횡 스크롤 아래로 이동</li>
              <li>✔️ 카테고리: 스크롤 아이템 애니메이션</li>
              <li>✔️ 프로덕트: 상품 추가 후 총액 계산</li>
              <li>✔️ 페이지 상단으로 이동 가능한 탑 버튼</li>
              <li>✔️ swiper를 이용한 이미지 슬라이드</li>
            </ul>
            <h4>🔧 기술 스택 🔧</h4>
            <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&#38;logo=html5&#38;logoColor=white" />
            <img src="https://img.shields.io/badge/css-1572B6?style=flat-square&#38;logo=css3&#38;logoColor=white" />
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&#38;logo=javaScipt&#38;logoColor=black" />
            <img src="https://img.shields.io/badge/jquery-0769AD?style=flat-square&#38;logo=jquery&#38;logoColor=white"></img>

            <a href="http://yeonee27.dothome.co.kr/nsad/">
              ✈️ 데모 사이트 보러가기 ✈️
            </a>
            <a href="https://github.com/xoyonee/nsad-project">
              <img
                className={classes.git_hub}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="git-hub주소"
              />
              깃주소
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NSAD;
