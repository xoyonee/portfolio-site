import classes from "./inProjects.module.css";
import Card from "../../UI/Card";
import imac from "../../assets/img/mockup/picogram-iMac.png";
import iPhone from "../../assets/img/mockup/picogram-iPhone.png";

const Picogram = () => {
  return (
    <Card>
      <div className={classes.card}>
        <div className={classes.img_box}>
          <img className={classes.imac} src={imac} alt="booklocker-iMac" />
          <img
            className={classes.iPhone}
            src={iPhone}
            alt="booklocker-iPhone"
          />
        </div>
        <div className={classes.desc}>
          <h3>Picogram(피코그램)</h3>
          <div>
            <p className={classes.title}>
              🔹 picogram(피코그램) 홈페이지를 pc, 모바일에 맞춰 반응형으로
              리뉴얼한 프로젝트입니다.
            </p>
            <p className={classes.title}>
              🔹 메인 홈페이지, 카테고리 페이지, 소개 페이지 3가지 페이지를
              구현하였습니다.
            </p>
            <p className={classes.title}>
              🔹 현재 페이지의 url에 따라 정보를 가져와 카테고리 페이지의
              아이템을 정렬했습니다.
            </p>
            <ul>
              <li>
                <h4>⚙️ 주요 기능 ⚙️</h4>
              </li>
              <li>
                ✔️ 메인: 메뉴바, 이미지 슬라이드, svg 애니메이션, 스크롤
                애니메이션
              </li>
              <li>✔️ 카테고리: 이미지 슬라이드, 상세페이지 모달</li>
              <li>✔️ 회사 소개: 횡 스크롤, 모바일: 드래그 슬라이드</li>
            </ul>
            <h4>🔧 기술 스택 🔧</h4>
            <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&#38;logo=html5&#38;logoColor=white" />
            <img src="https://img.shields.io/badge/css-1572B6?style=flat-square&#38;logo=css3&#38;logoColor=white" />
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&#38;logo=javaScipt&#38;logoColor=black" />

            <a href="http://yeonee27.dothome.co.kr/picogram/">
              ✈️ 데모 사이트 보러가기 ✈️
            </a>
            <a href="https://github.com/xoyonee/picogram-project">
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

export default Picogram;
