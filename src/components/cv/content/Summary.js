const Summary = (props) => {
    const content = props.content;
    if (typeof content === 'undefined' || content.length === 0) {
        return;
    }
    return (<div className="summary">
        {content}
    </div>);
}
export default Summary;