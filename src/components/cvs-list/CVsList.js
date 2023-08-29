import CVTableRow from './CVTableRow'
import React, { useEffect, useState } from "react"

const API_URI = 'https://ynw0liq6ah.execute-api.eu-west-1.amazonaws.com/alpha';
const PATH = '/cvs'

const CVsList = () => {

    const [cvs, setCVS] = useState([]);
/*
    const fetchUserData = () => {
         fetch(API_URI + PATH)
             .then(response => {
                 return response.json()
             })
             .then(data => {
                 const list = data.map((item) => {
                     return { data: [(data.indexOf(item) + 1), item.cvID, item.description] };
                 });
                 console.log(list);
                 setCVS(list)
             });
     }

    useEffect(() => {
        fetchUserData();
    }, []);
*/
    const TABLE_HEDER = { data: ['#', 'Name', 'Description'] };

    const cvslist = [
        { data: ['1', 'firstcv'] },
        { data: ['2', 'second-cv', 'CV for QA automation position'] },
        { data: ['3', 'My manager', 'CV for Manager QA'] }];

  //  const table = cvs.map((cv) => {
    const table = cvslist.map((cv) => {

        return <CVTableRow data={cv} arrayIndex={cvslist.indexOf(cv)} key={cv.data[0]} />;
    });

    return (<div>
        <CVTableRow data={TABLE_HEDER} className='table-row__header' />
        {table}
    </div>);
}

export default CVsList;