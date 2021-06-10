import PageHeader from '../PageHeader/PageHeader'
import classes from './Projects.module.css'
import cleanCode from './../../img/cleanCode.jpg'
import cleanCode from './../../img/cleanCode.jpg'
import cleanCode from './../../img/cleanCode.jpg'
import cleanCode from './../../img/cleanCode.jpg'
import cleanCode from './../../img/cleanCode.jpg'
import cleanCode from './../../img/cleanCode.jpg'

const projectPhoto = (url, thumbnail, description) => {
    return(
        <div className={classes.ProjectsContainer}>
            <div className={classes.Thumbnail}>
                <img src={thumbnail} alt="thumbnail"></img>
            </div>
            <div className={classes.Text}>
                <p>{description}</p>
            </div>
        </div>
    )
}
const Projects = () => {
    return (
        <div className={classes.Projects}>
            <PageHeader title={"Projects"} />
            <div className={classes.ProjectsContent}>
                <div className={classes.Paragraph}>
                    <p>Check out some of my projects: </p>
                </div>
                <div className={classes.Photos}>

                </div>
            </div>
        </div>
    );
}

export default Projects;