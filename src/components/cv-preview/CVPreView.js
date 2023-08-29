import CV from "../cv/CV";

const CVPreView = (props) => {
    const backClickHandler = () => {
        props.onBackClick(false);
    }

    const saveClickHandler = () => {
        console.log("API Call");
        console.log("Method: POST");
        console.log("Body:" + "\n" + JSON.stringify(props.value));
    }
    return (<div>
        <CV value={props.value} />
        <button type="button" onClick={backClickHandler}>Back</button>
        <button type="button" onClick={saveClickHandler}>Save</button>
    </div>);
}

export default CVPreView;