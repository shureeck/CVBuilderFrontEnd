const Input = (props) => {
    const label = props.label;
    const id = label.replaceAll(' ', '-').replaceAll('[.:;,]', '').toLowerCase();
    const onChange = props.onChange;
    const type = (typeof props.type === 'undefined') ? 'text' : props.type;
    let clazz = 'input'
    if (typeof props.className !== 'undefined' && props.className.length > 0) {
        clazz = `${clazz} ${props.className}`;
    }
    const onChangeHandler = (event) => {
        props.onChange(event.target.value);
    }
    return (<div className={clazz}>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={label} onChange={onChangeHandler} value={props.value}></input>
    </div>);
}

export default Input;