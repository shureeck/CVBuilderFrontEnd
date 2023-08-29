const Skills = (props) => {
    const skills = props.skills;;
    if (typeof skills === 'undefined' || skills.length === 0) {
        return;
    }
    const listOfElements = skills.map((skill) => { return <p key={skill}>{skill}</p> });
    return (<div className='skills'>
        <h3>Skills</h3>
        {listOfElements}
    </div>);
}


export default Skills;