import Input from "./form-components/Input";
const PositionForm = (props) => {
    const positionChangeHandler = (value) => {
        props.onDataChange(value);
    }

    return (<div>
        <Input label='Position' onChange={positionChangeHandler} value={props.value} />
    </div>);
}

export default PositionForm;