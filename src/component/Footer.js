import classes from "./Footer.module.css";

import envelope from "../assets/svg/envelope-fill.svg";
import github from "../assets/img/25231.png";
import telephone from "../assets/svg/telephone-fill.svg";

const Footer = () => {
  return (
    <footer className={classes.footer} id='contact'>
      <h1>CONTACT</h1>
      <ul>
        <li>
          <a href="tel:010-2967-2274">
            <img src={telephone} alt="telephone" />
            <p>010-2967-2274</p>
          </a>
        </li>
        <li>
          <a href="mailto:27yeonee@gmail.com">
            <img src={envelope} alt="envelope" />
            <p>27yeonee@gmail.com</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/xoyonee/">
            <img className={classes.github} src={github} alt="github" />
            <p>GitHub</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
