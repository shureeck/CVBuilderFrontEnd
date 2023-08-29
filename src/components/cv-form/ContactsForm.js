import './ContactsForm.css'
import InputContact from "./form-components/InputContact";

const ContactsForm = (props) => {

    const contacts = props.value
    const items = [];
    const contactsChangeHandler = (id, value) => {
        const array = [...contacts];
        array[id] = value;
        props.onDataChange(array);
    }
    const removeHandler = (id) => {
        const array = [...contacts];
        array.splice(id, 1);
        props.onDataChange(array);
    }
    const addClickHandler = () => {
        const array = [...contacts];
        array.push({ tittle: '', data: '' });
        props.onDataChange(array);
    }

    for (let i in contacts) {
        items.push(<InputContact key={i} id={i} onChange={contactsChangeHandler}
            tittle={contacts[i].tittle} onRemove={removeHandler}
            disabled={contacts.length === 1} value={contacts[i].data} />);
    }

    return (<div className="contact-form">
        {items}
        <button type="button" onClick={addClickHandler} className="contact-form__add-button">Add contact</button>
    </div>);

}

export default ContactsForm;