import './FullName.css'

const FullName = (props) => {
    const name = props.name;
    const lastname = props.lastname;

    return (<div className='full-name'>{name} <br /> {lastname}</div>);
}

export default FullName;