import './InputContact.css'
const InputContact = (props) => {
    const tittle = props.tittle;
    const value = props.value;
    const placeholder = tittle;

    const tittleChangeHandler = (event) => {
        const obj = {
            data: props.value,
            tittle: event.target.value
        }
        props.onChange(props.id, obj)
    }
    const valueChangeHandler = (event) => {
        const obj = {
            data: event.target.value,
            tittle: props.tittle
        }
        props.onChange(props.id, obj)
    }

    const removeHandler = () => { props.onRemove(props.id); }


    return (<div className="input-contact">
        <input className="input-contact__title" onChange={tittleChangeHandler} placeholder="tittle" value={tittle} />
        <input className="input-contact__value" onChange={valueChangeHandler} placeholder={placeholder} value={value} />
        <button type="button" className="input-contact__button" disabled={props.disabled} onClick={removeHandler} >X</button>
    </div>);
}

export default InputContact;