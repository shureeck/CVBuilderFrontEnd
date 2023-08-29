import TextArea from "./form-components/TextArea";
const DescriptionForm = (props) => {
    const descriptionChangeHandler = (value) => {
        props.onDataChange(value);
    }
    return (<div >
        <TextArea label='Description' onChange={descriptionChangeHandler} value={props.value} />
    </div>);
}

export default DescriptionForm;