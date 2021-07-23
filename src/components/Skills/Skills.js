import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import Coder from './../../img/undraw_my_code_snippets_lynx (1).svg'

const listTitleStyle = {fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}

const frontendSkills =
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>HTML - CSS - JavaScript - jQuery</li>
</ul>

const frameworkSkills =
<ul>
    <li style={listTitleStyle}>FRAMEWORK</li>
    <li>ReactJS</li>
</ul>

const styleSkills =
<ul>
    <li style={listTitleStyle}>STYLE</li>
    <li>Bootstrap</li>
</ul>

const backendSkills =
<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Node.js</li>
</ul>

const databaseSkills =
<ul>
    <li style={listTitleStyle}>DATABASE</li>
    <li>MySQL - MongoDb</li>
</ul>

const otherSkills =
<ul>
<li style={listTitleStyle}>TOOLS</li>
    <li>GitHub - Heroku</li>
</ul>

const totalSkills = [frontendSkills,frameworkSkills, styleSkills, backendSkills, databaseSkills, otherSkills]


const Skills = () => {
    return (
        <div className={classes.Skills} id="skills">
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