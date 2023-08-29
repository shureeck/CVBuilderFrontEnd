import './ContactItem.css'
const ContactItem = (props) => {
    const tittle = props.tittle;
    const contact = props.contact;
    return (<div className="contact-item">
        <h4>{tittle}</h4>
        <div>{contact}</div>
    </div>);
}
export default ContactItem; 