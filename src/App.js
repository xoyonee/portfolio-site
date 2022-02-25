import { Fragment } from "react";
import Introduce from "./component/Introduce";
import AboutMe from "./component/AboutMe";
import Header from "./component/Header";
import Skills from "./component/Skills";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer";

import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <div>
        <Header />
      </div>
      <main>
        <Introduce />
        <AboutMe />
        <div className={classes.bg_skills}>
          <Skills />
        </div>
        <div className={classes.bg_Projects}>
          <Projects />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
