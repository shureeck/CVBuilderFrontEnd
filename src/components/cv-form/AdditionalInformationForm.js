import './AdditionalInformationForm.css'
import InputAdditional from "./form-components/InputAdditional";

const AdditionalInformationForm = (props) => {
    const data = props.value;
    const items = []
    const additionlInformationChangeHandler = (id, value) => {
        const array = [...data];
        array[id] = value;
        props.onDataChange(array);
    }

    const removeHandler = (id) => {
        const array = [...data];
        array.splice(id, 1);
        props.onDataChange(array);
    }

    const addHandler = () => {
        const array = [...data];
        array.push({ tittle: '', value: '' });
        props.onDataChange(array);
    }

    for (let i in data) {
        items.push(<InputAdditional key={i} id={i} value={data[i]}
            onChange={additionlInformationChangeHandler}
            onRemove={removeHandler} />)

    }

    return (
        <div className="additional-information-form">
            {items}
            <button type="button" onClick={addHandler} className="additional-information-form__add-button">Add additional block</button>
        </div>
    );
}

export default AdditionalInformationForm;