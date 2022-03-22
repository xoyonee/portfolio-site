import classes from "./inProjects.module.css";
import Card from "../../UI/Card";
import imac from "../../assets/img/mockup/booklocker-iMac.png";
import iPad from "../../assets/img/mockup/booklocker-iPadc.png";
import iPhone from "../../assets/img/mockup/booklocker-iPhone.png";
import git_hub from "../../assets/img/skills/git_icon.jpg";

const BookLocker = () => {
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
          <h3>북라커(Book Locker)</h3>
          <div>
            <p>
              🎁 다양한 도서를 결제하고 소장하고 싶은 마음에서 시작된
              프로젝트입니다.
            </p>
            <p>
            🔹 많은 데이터가 오고 하지는 않지만 학습하기 위해서 redux를 사용했으며, NextJs도 마찬가지로 학습하기위해 적용시켜 제작했습니다.
            </p>
            <ul>
              <li>
                <h3>⚙️ 주요 기능 ⚙️</h3>
              </li>
              <li>✔️ 회원가입</li>
              <li>✔️ 로그인/로그아웃</li>
              <li>✔️ 장바구니에 담기</li>
              <li>✔️ 도서 검색</li>
              <li>✔️ 간단한 결재 시스템</li>
              <li>✔️ 댓글달기</li>
              <li>✔️ 파이어베이즈 데이터 읽기/생성</li>
            </ul>
            <h3>🔧 기술 스택 🔧</h3>
            <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&#38;logo=react&#38;logoColor=black" />

            <img src="https://img.shields.io/badge/next.js-000000?style=flat-square&#38;logo=next.js&#38;logoColor=white" />

            <img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&#38;logo=redux&#38;logoColor=white" />

            <img src="https://img.shields.io/badge/firebase-FFCA28?style=flat-square&#38;logo=firebase&#38;logoColor=black" />

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

export default BookLocker;
