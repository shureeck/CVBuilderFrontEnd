import './Experience.css'
import Period from "./ExperiencePeriod";
import Organization from "./ExperienceDetails";


const Experience = (props) => {
    const header = props.header;
    const expirienceList = props.experience;
    if (typeof expirienceList === 'undefined' || expirienceList.length === 0) {
        return;
    }
    const items = expirienceList.map((experience) => {
        return (
            <div key={expirienceList.indexOf(experience)}>
                <Period period={experience.period} />
                <Organization position={experience.position}
                    name={experience.organization}
                    responsibility={experience.responsibilityList} />
            </div>
        );
    });
    return (<div>
        <h3>{header}</h3>
        <div className='expirience'>
            {items}
        </div>
    </div>);
}

export default Experience;