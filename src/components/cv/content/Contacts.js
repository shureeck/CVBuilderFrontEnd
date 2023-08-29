import ContactItem from "./ContactItem";

const Contacts = (props) => {

    const contacts = props.contacts;;
    if (typeof contacts === 'undefined' || contacts.length === 0) {
        return;
    }
    const items = contacts.map((contact) => {
        return <ContactItem tittle={contact.tittle}
            key={contact.tittle}
            contact={contact.data} />;
    });
    return (<div className='contacts'>
        <h3>Contact informaton</h3>
        {items}
    </div>);
}

export default Contacts;