import classes from "./Skills.module.css";

import photoshop from "../img/skills/photoshop_icon.png";
import illustration from "../img/skills/illustration_icon.png";
import premiere from "../img/skills/premiere_icon.png";
import aftereffects from "../img/skills/aftereffects.icon.png";
import git_hub from "../img/skills/git_icon.jpg";
import html from "../img/skills/html_icon.png";
import css from "../img/skills/css_icon.png";
import jquery from "../img/skills/jquery_icon.png";
import js from "../img/skills/js_icon.png";
import react from "../img/skills/react_icon.png";
import redux from "../img/skills/redux_icon.png";
import nextjs from "../img/skills/nextjs_icon.png";

const Skills = () => {
  return (
    <section className={classes.skills} id='skills'>
      <h1>SKILLS</h1>
      <div>
        <div className={`${classes.card} ${classes.design}`}>
          <h2>web-design</h2>
          <div className={classes.img_box}>
            <img src={photoshop} alt="photoshop" />
            <img src={illustration} alt="illustration" />
            <img src={premiere} alt="premiere" />
            <img src={aftereffects} alt="aftereffects" />
          </div>
        </div>
        <div className={`${classes.card} ${classes.git}`}>
          <h2>Version Control</h2>
          <div className={classes.img_box}>
            <img src={git_hub} alt="git_hub" />
          </div>
        </div>
        <div className={`${classes.card} ${classes.front}`}>
          <h2>Front-end</h2>
          <div>
            <div className={`${classes.img_box} ${classes.img_box1}`}>
              <img src={html} alt="html" />
              <img src={css} alt="css" />
              <img src={js} alt="js" />
            </div>
            <div className={`${classes.img_box} ${classes.img_box2}`}>
              <img src={jquery} alt="jquery" />
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
              <img src={nextjs} alt="nextjs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
