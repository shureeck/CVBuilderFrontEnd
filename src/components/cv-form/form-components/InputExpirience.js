import Input from "./Input";
import TextArea from "./TextArea";
import './InputExpirience.css'

const InputExpirience = (props) => {
    const work = props.value;
    const startDateChangeHandler = (value) => {
        const workHistory = { ...work };
        workHistory.startDate = value;
        props.onChange(props.id, workHistory);
    }
    const endDateChangeHandler = (value) => {
        const workHistory = { ...work };
        workHistory.endDate = value;
        props.onChange(props.id, workHistory);
    }
    const positionChangeHandler = (value) => {
        const workHistory = { ...work };
        workHistory.position = value;
        props.onChange(props.id, workHistory);
    }
    const companyChangeHandler = (value) => {
        const workHistory = { ...work };
        workHistory.organization = value;
        props.onChange(props.id, workHistory);
    }
    const responsibilityChangeHandler = (value) => {
        const workHistory = { ...work };
        workHistory.responsibilityList = value;
        props.onChange(props.id, workHistory);
    }

    const removeClickHandler = () => { props.onRemove(props.id); }

    return <div id={props.id} className="input-expirience">
        <Input className='input-expirience__date' onChange={startDateChangeHandler} label="Start date" type="date" value={work.startDate} />
        <div className="decorate" />
        <Input className='input-expirience__date' onChange={endDateChangeHandler} label="End date" type="date" value={work.endDate} />
        <Input label="Position" onChange={positionChangeHandler} value={work.position} />
        <Input label="Company" onChange={companyChangeHandler} value={work.organization} />
        <TextArea label="Responsibility" onChange={responsibilityChangeHandler} value={work.responsibilityList} />
        <button type="button" onClick={removeClickHandler} className="input-expirience__remove-button">Remove expirience</button>
    </div>
}

export default InputExpirience;