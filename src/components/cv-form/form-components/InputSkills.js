import './InputSkills.css'

const InputSkills = (props) => {
    const inputChangeHandler = (event) => {
        const changed = {
            id: props.id,
            value: event.target.value
        };
        props.onChange(changed);
    }

    const removeClickHandler = () => {
        props.onRemove(props.id);
    }
    

    return (<div className="input-skill">
        <input className="input-skill__input" onChange={inputChangeHandler} placeholder='Skill' value={props.value} />
        <button type='button' onClick={removeClickHandler} disabled={props.disabled} className="input-skill__button">X</button>
    </div>);
}

export default InputSkills;