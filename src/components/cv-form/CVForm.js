import './CVForm.css'
import StepsProgress from "./StepsProgress";
import PersonalDataForm from './PersonalDataForm';
import PositionForm from './PositionForm';
import DescriptionForm from './DescriptionForm';
import ContactsForm from './ContactsForm';
import SkillsForm from './SkillsForm';
import ExpirienceForm from './ExpirienceForm';
import EducationForm from './EducationForm';
import AdditionalInformationForm from './AdditionalInformationForm';
import { useState } from 'react';
import CVObject from '../../CVObject'
import CV from '../cv/CV';
import CVPreView from '../cv-preview/CVPreView';
const CVForm = () => {
    const [preview, setPreview] = useState(false);
    const [count, setCount] = useState(0);
    const [personal, setPersonal] = useState({ firstName: '', lastName: '', date: '' })
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState(['']);
    const [contacts, setContacts] = useState([{ tittle: 'Address', data: '' },
    { tittle: 'E-mail', data: '' },
    { tittle: 'Phone', data: '' },
    { tittle: 'LinkedIn', data: '' }]);
    const [work, setWork] = useState([{
        startDate: '', endDate: '',
        position: '', organization: '', responsibilityList: ''
    }]);
    const [education, setEducation] = useState([{
        startDate: '', endDate: '',
        degree: '', organization: ''
    }]);
    const [additional, setAdditional] = useState([{ tittle: 'Additional information', value: '' }]);


    const nextClickHandler = () => {
        setCount((previoiusCount) => { return (previoiusCount + 1); });
        console.log(CVObject);

    }

    const previewClickHandler = () => {
        console.log("Submit button clicked");
        console.log(CVObject);
        setPreview(true);
    }

    const previousClickHandler = () => {
        console.log(count);
        setCount((previoiusCount) => { return (previoiusCount - 1); });
    }
    const personalDataChangeHandler = (value) => {
        CVObject.firstName = value.firstName;
        CVObject.lastName = value.lastName;
        CVObject.birthDate = value.date;
        setPersonal(value);
    }

    const positionChangeHandler = (value) => {
        CVObject.position = value;
        setPosition(value);
    }

    const descriptionChangeHandler = (value) => {
        CVObject.description = value;
        setDescription(value);
    }

    const skillsChangeHandler = (value) => {
        CVObject.skills = value;
        setSkills(value);
    }

    const contactsChangeHandler = (value) => {
        CVObject.contactsList = value;
        setContacts(value);
    }
    const workHistoryChangeHandler = (value) => {
        CVObject.workExperience = value;
        setWork(value);
    }
    const educationChangeHandler = (value) => {
        CVObject.education = value;
        setEducation(value);
    }
    const additionalInfChangeHandler = (value) => {
        CVObject.additionalInformation = value;
        setAdditional(value);
    }

    const steps = ['Personal data', 'Position', 'Summary',
        'Contacts', 'Skills', 'Work history',
        'Education', 'Additional information'];

    const forms = [<PersonalDataForm onDataChange={personalDataChangeHandler} value={personal} />,
    <PositionForm onDataChange={positionChangeHandler} value={position} />,
    <DescriptionForm onDataChange={descriptionChangeHandler} value={description} />,
    <ContactsForm onDataChange={contactsChangeHandler} value={contacts} />,
    <SkillsForm onDataChange={skillsChangeHandler} value={skills} />,
    <ExpirienceForm onDataChange={workHistoryChangeHandler} value={work} />,
    <EducationForm onDataChange={educationChangeHandler} value={education} />,
    <AdditionalInformationForm onDataChange={additionalInfChangeHandler} value={additional} />]

    const form = <form className="cv-form__form">
        {forms[count]}
        <div className='buttons'>
            <button type="button" disabled={count === 0} onClick={previousClickHandler}>Previous</button>
            <button type="button" disabled={count === forms.length - 1} onClick={nextClickHandler}>Next</button>;
            <button type="button" disabled={count < forms.length - 1} onClick={previewClickHandler}>Preview</button>;
        </div>
    </form>;

    const cvPreview = <CVPreView value={CVObject} onBackClick={setPreview} />;

    return (<div className="cv-form">
        <StepsProgress className='steps-progress' steps={steps} page={count} />
        {preview ? cvPreview : form}
    </div>);
}
export default CVForm;