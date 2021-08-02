import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader.js";
import profilePic from "./../../img/profilePic.jpg";

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={"About Me"} />
      <div className={classes.Container}>
        <div className={classes.Text}></div>
        <h2>Hello! I'm Tierra</h2>
        <p>
          Highly self-motivated and goal-oriented professional committed to
          pursuing a long-term career change in Full Stack Web Development.
          Offers a 15-year track record demonstrating strong analytical and
          problem-solving skills, computer proficiency, and the ability to
          follow through with projects from inception to completion. Earned a
          certificate in Full Stack Web Development from the University of North
          Carolina of Charlotte Coding Boot Camp.
        </p>
      </div>
      <div className={classes.Photo}>
        <img className={classes.Me} src={profilePic} alt="me"></img>
      </div>
    </div>
  );
};

export default About;
