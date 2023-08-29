import InputExpirience from './form-components/InputExpirience'
import './ExpirienceForm.css'

const ExpirienceForm = (props) => {
    const items = []
    const workHistory = props.value;
    const expirienceChangeHandler = (id, value) => {
        const array = [...workHistory];
        array[id] = value;
        props.onDataChange(array);
    }
    const removeClickHandler = (id) => {
        const array = [...workHistory];
        array.splice(id, 1);
        props.onDataChange(array);
    }
    const addClickHandler = () => {
        const array = [...workHistory];
        array.push({
            startDate: '', endDate: '',
            position: '', organization: '', responsibilityList: ''
        });
        props.onDataChange(array);
    }

    for (let i in workHistory) {
        items.push(<InputExpirience value={workHistory[i]}
            key={i}
            id={i}
            onChange={expirienceChangeHandler}
            onRemove={removeClickHandler} />)
    }
    return <div className='expirience-form'>
        {items}
        <button type="button" onClick={addClickHandler} className='expirience-form__add-button'>Add expirience</button>


    </div>
}


export default ExpirienceForm;