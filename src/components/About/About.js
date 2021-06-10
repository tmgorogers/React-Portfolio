import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader.js'
import profilePic from './../../img/profilePic.jpg'

const About = () => {
    return (
        <div className={classes.AboutMe}>
            <PageHeader title={'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}></div>
                <h2>Hello! I'm Tierra</h2>
                <p>I am currently attending UNC-Charlotte Coding Program in Full Stack Web Development.</p>
            </div>
           <div className={classes.Photo}>
               <img className={classes.Me} src={profilePic} alt="me"></img>
           </div>
        </div>
    );
}

export default About;