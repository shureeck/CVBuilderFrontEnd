import Input from "./Input";
import './InputExpirience.css'
const InputEducation = (props) => {
    const education = props.value;
    const startDateChangeHandler = (value) => {
        const obj = { ...education };
        obj.startDate = value;
        props.onChange(props.id, obj);
    }
    const endDateChangeHandler = (value) => {
        const obj = { ...education };
        obj.endDate = value;
        props.onChange(props.id, obj);
    }
    const degreeChangeHandler = (value) => {
        const obj = { ...education };
        obj.degree = value;
        props.onChange(props.id, obj);
    }
    const organizationChangeHandler = (value) => {
        const obj = { ...education };
        obj.university = value;
        props.onChange(props.id, obj);
    }

    const removeClickHandler = () => { props.onRemove(props.id); }

    return <div className="input-expirience">
        <Input className='input-expirience__date' onChange={startDateChangeHandler} label="Start date" type="month" value={education.startDate} />
        <div className="decorate" />
        <Input className='input-expirience__date' onChange={endDateChangeHandler} label="End date" type="month" value={education.endDate} />
        <Input label="Degree" onChange={degreeChangeHandler} value={education.degree} />
        <Input label="Organization" onChange={organizationChangeHandler} value={education.university} />
        <button type="button" onClick={removeClickHandler} className="input-expirience__remove-button" >Remove education</button>
    </div>
}

export default InputEducation;