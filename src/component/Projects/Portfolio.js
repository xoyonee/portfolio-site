import classes from "./inProjects.module.css";
import Card from "../../UI/Card";
import imac from "../../assets/img/mockup/portfolio-iMac.png";

const Portfolio = () => {
  return (
    <Card>
      <div className={classes.card}>
        <div className={classes.img_box}>
          <img className={classes.imac} src={imac} alt="booklocker-iMac" />
        </div>
        <div className={classes.desc}>
          <h3>Portfolio(종합 포트폴리오 사이트)</h3>
          <div>
            <p>
            🔹 현재 페이지의 해당되는 포트폴리오용의 종합 포트폴리오 사이트입니다.
            </p>
            <p>
            🔹 첫 리액트 프로젝트입니다. 'react-router-hash-link'라는 라이브러리로 링크를 걸어 내부이동 애니메이션을 표현했습니다.
            </p>
            <ul>
              <li>
                <h3>⚙️ 주요 기능 ⚙️</h3>
              </li>
              <li>✔️ 간단한 자기소개</li>
              <li>✔️ 인적 사항</li>
              <li>✔️ 기술 스택</li>
              <li>✔️ 스크롤 애니메이션</li>
              <li>✔️ 내부이동 애니메이션</li>
            </ul>
            <h3>🔧 기술 스택 🔧</h3>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&#38;logo=javaScipt&#38;logoColor=black" />

            <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&#38;logo=react&#38;logoColor=black" />

            <img src="https://img.shields.io/badge/vercel-000000?style=flat-square&#38;logo=vercel&#38;logoColor=white" />

            <a href="https://book-locker-project.vercel.app/">
              ✈️ 데모 사이트 보러가기 ✈️
            </a>
            <a href="https://github.com/xoyonee/Book-Locker-project">
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

export default Portfolio;
