import './SkillsForm.css'
import InputSkills from "./form-components/InputSkills";

const SkillsForm = (props) => {
    const skillChangeHandler = (value) => {
        const id = value.id;
        const array = [...props.value];
        array[id] = value.value;
        props.onDataChange(array)
    }
    const removeHandler = (id) => {
        const array = [...props.value];
        array.splice(id, 1);
        props.onDataChange(array);
    }

    const addClickHandler = () => {
        const array = [...props.value];
        array.push('');
        props.onDataChange(array);

    }

    const items = [];
    for (let i in props.value) {
        items.push(<InputSkills
            id={i}
            value={props.value[i]}
            onChange={skillChangeHandler}
            disabled={props.value.length === 1}
            onRemove={removeHandler}
            key={i} />)
    }

    return (<div>
        {items}
        <button type='button' onClick={addClickHandler} className="skills-form__add-button">Add skill</button>
    </div>);

}
export default SkillsForm;