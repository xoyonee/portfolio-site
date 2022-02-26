import classes from "./AboutMe.module.css";

import calendar from "../assets/svg/calendar-fill.svg";
import geo from "../assets/svg/geo-alt-fill.svg";
import pencil from "../assets/svg/pencil-fill.svg";
import envelope from "../assets/svg/envelope-fill.svg";
import person from "../assets/svg/person-fill.svg";
import telephone from "../assets/svg/telephone-fill.svg";

const AboutMe = () => {
  return (
    <section className={classes.about_me} id="aboutMe">
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
            <h2>학력</h2>
            <p>해성여자고등학교 졸업</p>
          </div>
        </li>
        <li className={classes.education}>
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
