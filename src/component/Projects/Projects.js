import classes from "./Projects.module.css";
import Card from "../../UI/Card";
import NSAD from "./NSAD";
import Picogram from "./Picogram";
import BookLocker from "./BookLocker";
import Portfolio from "./Portfolio";

const Projects = (props) => {
  return (
    <section className={classes.projects} id="projects">
      <div>
        <h1>PROJECTS</h1>
      </div>
      <BookLocker/>
      <Portfolio/>
      <NSAD />
      <Picogram/>
    </section>
  );
};

export default Projects;
