import './InputAdditional.css'
import Input from "./Input";
import TextArea from "./TextArea";

const InputAdditional = (props) => {
    const tittleChangeHandler = (value) => {
        const obj = { ...props.value };
        obj.tittle = value;
        props.onChange(props.id, obj);
    }
    const valueChangeHandler = (value) => {
        const obj = { ...props.value };
        obj.value = value;
        props.onChange(props.id, obj);
    }
    const removeHandler = () => {
        props.onRemove(props.id);
    }

    let titleValue = 'Additional information'
    return (<div className="input-additional">
        <Input label="Title" onChange={tittleChangeHandler} value={props.value.tittle} />
        <TextArea label="Content" onChange={valueChangeHandler} value={props.value.value} />
        <button type='button' onClick={removeHandler}>Remove</button>
    </div>);
}

export default InputAdditional;