import InputEducation from './form-components/InputEducation'
import './ExpirienceForm.css'

const EducationForm = (props) => {
    const education = props.value;
    const items = [];
    const educationChangeHandler = (id, value) => {
        const array = [...education];
        array[id] = value;
        props.onDataChange(array);
    }
    const removeHandler = (id) => {
        const array = [...education];
        array.splice(id, 1);
        props.onDataChange(array);
    }
    const addHandler = () => {
        const array = [...education];
        array.push({
            startDate: '', endDate: '',
            degree: '', organization: ''
        });
        props.onDataChange(array);
    }

    for (let i in education) {
        items.push(<InputEducation id={i} key={i} value={education[i]} onRemove={removeHandler} onChange={educationChangeHandler} />);
    }

    return <div className='expirience-form'>
        {items}
        <button type="button" className='expirience-form__add-button' onClick={addHandler}>Add education</button>
    </div>
}


export default EducationForm;