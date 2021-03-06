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
          <h3>λΆλΌμ»€(Book Locker)</h3>
          <div>
            <p>
              π λ€μν λμλ₯Ό κ²°μ νκ³  μμ₯νκ³  μΆμ λ§μμμ μμλ
              νλ‘μ νΈμλλ€.
            </p>
            <p>
            πΉ λ§μ λ°μ΄ν°κ° μ€κ³  νμ§λ μμ§λ§ νμ΅νκΈ° μν΄μ reduxλ₯Ό μ¬μ©νμΌλ©°, NextJsλ λ§μ°¬κ°μ§λ‘ νμ΅νκΈ°μν΄ μ μ©μμΌ μ μνμ΅λλ€.
            </p>
            <ul>
              <li>
                <h3>βοΈ μ£Όμ κΈ°λ₯ βοΈ</h3>
              </li>
              <li>βοΈ νμκ°μ</li>
              <li>βοΈ λ‘κ·ΈμΈ/λ‘κ·Έμμ</li>
              <li>βοΈ μ₯λ°κ΅¬λμ λ΄κΈ°</li>
              <li>βοΈ λμ κ²μ</li>
              <li>βοΈ κ°λ¨ν κ²°μ¬ μμ€ν</li>
              <li>βοΈ λκΈλ¬κΈ°</li>
              <li>βοΈ νμ΄μ΄λ² μ΄μ¦ λ°μ΄ν° μ½κΈ°/μμ±</li>
            </ul>
            <h3>π§ κΈ°μ  μ€ν π§</h3>
            <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&#38;logo=react&#38;logoColor=black" />

            <img src="https://img.shields.io/badge/next.js-000000?style=flat-square&#38;logo=next.js&#38;logoColor=white" />

            <img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&#38;logo=redux&#38;logoColor=white" />

            <img src="https://img.shields.io/badge/firebase-FFCA28?style=flat-square&#38;logo=firebase&#38;logoColor=black" />

            <img src="https://img.shields.io/badge/vercel-000000?style=flat-square&#38;logo=vercel&#38;logoColor=white" />

            <a href="https://book-locker-project.vercel.app/">
              βοΈ λ°λͺ¨ μ¬μ΄νΈ λ³΄λ¬κ°κΈ° βοΈ
            </a>
            <a href="https://github.com/xoyonee/Book-Locker-project">
              <img
                className={classes.git_hub}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="git-hubμ£Όμ"
              />
              κΉμ£Όμ
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookLocker;
