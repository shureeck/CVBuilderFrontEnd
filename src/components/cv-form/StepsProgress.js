import './StepsProgress.css'
import PersonalDataForm from "./PersonalDataForm";

const StepsProgress = (props) => {
    const style = { background: "rgba(90, 116, 148, 0.3)" };
    const count = props.page;
    const steps = props.steps.map((step) => {
        let className = 'step';
        if (props.steps.indexOf(step) === 0) {
            className = `${className} first`
        }
        if (props.steps.indexOf(step) === (props.steps.length - 1)
            || props.steps.indexOf(step) === count) {
            className = `${className} last`
        }


        if (props.steps.indexOf(step) <= count) {
            return <div key={step} style={style} className={className}><p>{step}</p></div>
        } else { return <div key={step} className={className}><p>{step}</p></div> }
    });

    return (<div className='steps-progerss'>
        {steps}
    </div>);
}

export default StepsProgress;
