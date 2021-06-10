import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import Coder from './../../img/coder.svg'

const listTitleStyle = {fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}

const frontendSkills =
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>ReactJS - HTML - CSS - JavaScript -jQuery</li>
</ul>
const backendSkills =
<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Node.js - MySQL - MongoDb</li>
</ul>
const otherSkills =
<ul>
<li style={listTitleStyle}>OTHER</li>
    <li>Git</li>
</ul>

const totalSkills = [frontendSkills, backendSkills, otherSkills]


const Skills = () => {
    return (
        <div className={classes.Skills}>
            <PageHeader title={'My Skills'}/>
            <p>
                Below are some programming languages, toolkits, frameworks and libraries that I worked with and like.
            </p>
            <div className={classes.Container}>
                <img src={Coder} alt="Coder" />

                {totalSkills.map(skills => {
                    return (
                        <div className={classes.List}>
                           {skills} 
                             </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Skills;