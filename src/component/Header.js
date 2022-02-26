import { useEffect, useRef, useState } from "react";
import classes from "./Header.module.css";
import useScroll from "../hooks/useScroll";

import { HashLink } from "react-router-hash-link";

const Header = () => {
  // header scroll값에 따라 css적용하기
  const headerRef = useRef(null);
  const { scrollEventHandler, scrollEvent } = useScroll();
  const [buggerChk, setBuggerChk] = useState(false);

  useEffect(() => {
    let header_bot = headerRef.current.clientHeight;

    window.addEventListener("scroll", () => {
      scrollEventHandler(header_bot);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        scrollEventHandler(header_bot);
      });
    };
  }, [headerRef]);

  const buggerChkHandler = () => {
    setBuggerChk(!buggerChk);
    console.log(buggerChk);
  };
  return (
    <header
      className={scrollEvent ? classes.header_active : null}
      ref={headerRef}
    >
      <nav>
        <div className={classes.logo}>
          <HashLink smooth to="#">
            Soyeon's Portfolio
          </HashLink>
        </div>
        <div className={classes.gnb}>
          <div className={classes.bugger} onClick={buggerChkHandler}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>
          <div
            className={
              !buggerChk
                ? `${classes.pan}`
                : `${classes.pan} ${classes.pan_active}`
            }
          >
            <HashLink key="sec1" smooth to="/#introduce">
              INTRODUCE
            </HashLink>
            <HashLink key="sec2" smooth to="/#aboutMe">
              ABOUT ME
            </HashLink>
            <HashLink key="sec3" smooth to="/#skills">
              SKILLS
            </HashLink>
            <HashLink key="sec4" smooth to="/#projects">
              PROJECTS
            </HashLink>
            <HashLink key="sec5" smooth to="/#contact">
              CONTACT
            </HashLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
