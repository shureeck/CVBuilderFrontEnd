import './CV.css'
import { useSearchParams } from "react-router-dom";
import CVinJSON from "./CVinJSON";
import LeftCard from "./cards/LeftCard";
import RightCard from "./cards/RightCard";
import FullName from './content/FullName';
import Skills from './content/Skills';
import Contacts from './content/Contacts';
import Summary from './content/Summary';
import Experience from './content/Experience';
import Photo from './content/Photo';
import React, { useEffect, useState } from "react"

const API_URI = 'https://ynw0liq6ah.execute-api.eu-west-1.amazonaws.com/alpha';
const PATH = '/cvs'

const CV = (props) => {
  const [cv, setCV] = useState([]);
  const [searchParams] = useSearchParams();
  const cvID = searchParams.get('cvID');
  console.log(cvID);
  /*
    const fetchUserData = () => {
      fetch(`${API_URI}${PATH}?cvID=${cvID}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data);
          setCV(data)
        });
    }
    useEffect(() => {
      fetchUserData();
    }, []);
  */

  console.log("From API:");
  console.log(cv);
  const cvJSON = CVinJSON.replaceAll('\n', ' ').replaceAll('\t', ' ').replaceAll('\r', ' ');
  let obj = (typeof props.value === 'undefined') ? JSON.parse(cvJSON) : props.value;
  //const obj = cv;

  console.log("From JSON:");
  console.log(obj);

  const name = obj.firstName;
  const lastName = obj.lastName
  const skills = obj.skills;
  const contacts = obj.contactsList;
  const summary = obj.description;
  const experience = obj.workExperience;
  let education = obj.education;

  if (typeof education !== 'undefined' && education.length > 0) {
    education = obj.education.map((item) => {
      return {
        period: item.period,
        organization: item.university,
        position: item.degree
      };
    })
  }

  return (
    <div className="cv">
      <LeftCard>
        <Photo path="https://album.mediaset.es/eimg/2019/07/25/mznxmSUxhGyt1BucGilvR2.jpg?w=480" />
        <FullName name={name} lastname={lastName} />
        <Contacts contacts={contacts} />
        <Skills skills={skills} />
      </LeftCard>
      <RightCard>
        <Summary content={summary} t />
        <Experience header="Work history" experience={experience} />
        <Experience header="Education" experience={education} />
      </RightCard>
    </div>
  );
}

export default CV;