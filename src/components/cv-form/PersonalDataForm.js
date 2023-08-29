import Input from "./form-components/Input";
import { useState } from "react";
const PersonalDataForm = (props) => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [date, setDate] = useState('');

    const data = props.value;

    const firstNameChangeHandler = (value) => {
        const customData = {
            ...data,
            firstName: value
        }
        props.onDataChange(customData)
    }
    const lastNameChangeHandler = (value) => {
        const customData = {
            ...data,
            lastName: value
        }
        props.onDataChange(customData)
    }
    const dateChangeHAndler = (value) => {
        const customData = {
            ...data,
            date: value
        }
        props.onDataChange(customData)
    }

    return (<div>
        <Input label='First name' value={data.firstName} onChange={firstNameChangeHandler} />
        <Input label='Last name' value={data.lastName} onChange={lastNameChangeHandler} />
        <Input type="date" value={data.date} onChange={dateChangeHAndler} label='Birth date' />
    </div>);
}

export default PersonalDataForm;