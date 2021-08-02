import PageHeader from "../PageHeader/PageHeader";
import classes from "./Projects.module.css";
import connectDatingApp from "./../../img/connectDatingApp.png";
import FitnessTracker from "./../../img/fitnessTracker.png";
import NoteTaker from "./../../img/noteTaker.png";
import PasswordGenerator from "./../../img/password-Generator.png";

import WorkDayScheduler from "./../../img/workDayScheduler.png";

const playBtnSvg = (url) => {
  return (
    <div
      className={classes.PlayButton}
      onClick={(e) => window.open(url, "_blank").focus}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
      >
        <g>
          <g fill="#231F20">
            <path d="m354.2,247.4l-135.1-92.4c-4.2-3.1-15.4-3.1-16.3,8.6v184.8c1,11.7 12.4,11.9 16.3,8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2zm-130.5,81.3v-145.4l106.1,72.7-106.1,72.7z" />
            <path d="M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,480.1    C132.4,480.1,31.9,379.6,31.9,256S132.4,31.9,256,31.9S480.1,132.4,480.1,256S379.6,480.1,256,480.1z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

const projectPhoto = (url, thumbnail, description) => {
  return (
    <div className={classes.ProjectsContainer}>
      <div className={classes.Thumbnail}>
        {playBtnSvg(url)}
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
    </div>
  );
};
const passwordGeneratorProjectdescription =
  "An application that enables employees to generate random passwords based on criteria that they have selected.  The users will be prompted to choose a length of at least 8 characters and no more than 128 characters and choose lowercase, uppercase, numeric, and/or special charcaters. When the users answered all prompts then the the password is generated that matches the selected criteria.";

const workDaySchedulerProjectdescription =
  " A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.";

const noteTakerProjectdescription =
  "A small business owner want to write and save notes. So that they can organize their thoughts and keep track of tasks they need to complete";

const fitnessTrackerProjectdescription =
  "As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.";

const connectProjectdescription =
  "A simple and fun  web application that allows the user to sign up, login to their profile and match with other users, connecting through direct messages.";

const Projects = () => {
  return (
    <div className={classes.Projects} id="projects">
      <PageHeader title={"Projects"} />
      <div className={classes.ProjectsContent}>
        <div className={classes.Paragraph}>
          <p>Check out some of my projects: </p>
        </div>
        <div className={classes.Photos}>
          {projectPhoto(
            "https://tmgorogers.github.io/Password-Generator/",
            PasswordGenerator,
            passwordGeneratorProjectdescription
          )}
          {projectPhoto(
            "https://tmgorogers.github.io/Work-Day-Scheduler/",
            WorkDayScheduler,
            workDaySchedulerProjectdescription
          )}
          {projectPhoto(
            "https://drive.google.com/file/d/1oQLs3-e0oCmV35OC7y3imaX0qEEtGZ6Z/view?usp=sharing/",
            NoteTaker,
            noteTakerProjectdescription
          )}
          {projectPhoto(
            "https://tmgorogers.github.io/Workout-Tracker/",
            FitnessTracker,
            fitnessTrackerProjectdescription
          )}
          {projectPhoto(
            "https://connect-dating-app.herokuapp.com/",
            connectDatingApp,
            connectProjectdescription
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
