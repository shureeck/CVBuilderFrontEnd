import './ExperienceDetails.css'
const ExperienceDetails = (props) => {
    const responsibility = props.responsibility;
    let itemsResponsibility = []
    if (typeof responsibility !== 'undefined' && responsibility.length > 0) {
        itemsResponsibility = responsibility;
       // itemsResponsibility = responsibility.map((item) => { return <li key={item}>{item}</li> });
    }

    return (<div className="experience-datails">
        <h4>{props.position}</h4>
        <div>{props.name}</div>
        <ul>
            {itemsResponsibility}
        </ul>
    </div>);
}

export default ExperienceDetails;