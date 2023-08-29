const TextArea = (props) => {
    const label = props.label;
    const id = label.replaceAll(' ', '-').replaceAll('[.:;,]', '').toLowerCase();
    const value = props.value;
    const type = (typeof props.type === 'undefined') ? 'text' : props.type;
    const onChangeHandler = (event) => {
        props.onChange(event.target.value);
    }
    return (<div>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} placeholder={label} onChange={onChangeHandler} value={props.value}></textarea>
    </div>);
}

export default TextArea;