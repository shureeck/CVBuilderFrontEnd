import './Photo.css'

const Photo =(props)=>{
    const imagePath =props.path;

    if(typeof imagePath === 'undefined'){
        return;
    }
    return(<div className="photo">
        <img src={imagePath} alt="Photo"></img>
    </div>);
}

export default Photo;