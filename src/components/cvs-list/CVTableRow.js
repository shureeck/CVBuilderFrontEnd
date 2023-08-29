import './CVTableRow.css'
import { useNavigate } from 'react-router-dom';

const CVTableRow = (props) => {
    const navigate = useNavigate();

    const TableRowClickHandler = (event) => {
        const rowElemetnt = event.target.parentElement;
        if (rowElemetnt.className.includes('table-row__header')) {
            return;
        }
        const cvID = rowElemetnt.childNodes[1].textContent;
        navigate(`cv?cvID=${cvID}`);
    
    }
    const id = props.data.data[0];
    const name = props.data.data[1];
    const dsecription = props.data.data[2];
    let classes = 'table-row';
    if (props.className) {
        classes = `${classes} ${props.className}`;
    }
    if (props.arrayIndex % 2 === 0){
        classes = `${classes} table-row__dark-bg`
    }
        return <div className={classes} onClick={TableRowClickHandler}>
            <div className="table-cell table_cell__1">
                {id}
            </div>
            <div className="table-cell table_cell__2">
                {name}
            </div>
            <div className="table-cell table_cell__3">
                {dsecription}
            </div>
        </div>;
}
export default CVTableRow;