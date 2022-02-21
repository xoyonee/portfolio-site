import classes from "./AboutMe.module.css";

import calendar from "../svg/calendar-fill.svg";
import envelope from "../svg/envelope-fill.svg";
import geo from "../svg/geo-alt-fill.svg";
import pencil from "../svg/pencil-fill.svg";
import person from "../svg/person-fill.svg";
import telephone from "../svg/telephone-fill.svg";
import useScroll from "../hooks/useScroll";

const AboutMe = () => {
  return (
    <section className={classes.about_me} id='aboutMe'>
      <h1>ABOUT ME</h1>
      <ul>
        <li>
          <div className={classes.img_box}>
            <img src={person} alt="person" />
          </div>
          <div className={classes.menu}>
            <h2>이름</h2>
            <p>김소연</p>
          </div>
        </li>
        <li>
          <div className={classes.img_box}>
            <img src={calendar} alt="calendar" />
          </div>
          <div className={classes.menu}>
            <h2>생년월일</h2>
            <p>1996.05.27</p>
          </div>
        </li>
        <li>
          <div className={classes.img_box}>
            <img src={geo} alt="geo" />
          </div>
          <div className={classes.menu}>
            <h2>주소지</h2>
            <p>서울특별시 동대문구</p>
          </div>
        </li>
        <li>
          <div className={classes.img_box}>
            <img src={pencil} alt="pencil" />
          </div>
          <div className={classes.menu}>
            <h2>학력/교육</h2>
            <p>해성여자고등학교 졸업</p>
            <p>UI/UX 웹디자인</p>
            <p>&amp; 웹퍼블리셔 양성과정B</p>
          </div>
        </li>
        <li>
          <div className={classes.img_box}>
            <img src={envelope} alt="envelope" />
          </div>
          <div className={classes.menu}>
            <h2>이메일</h2>
            <p>27yeonee@gmail.com</p>
          </div>
        </li>
        <li>
          <div className={classes.img_box}>
            <img src={telephone} alt="telephone" />
          </div>
          <div className={classes.menu}>
            <h2>Tel</h2>
            <p>010-2967-2274</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
