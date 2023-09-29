import {useState} from 'react';

const ResumeItem = ({title,company,description}) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };
    return(
        <>
        <div className="resItem">
        <div className={isPanelOpen?"resume-panel active":"resume-panel"}>
        <div className="resume-header">
            <h1>{title}</h1>
            <p>{company}</p>
        </div>
        <div className="resume-content">
            <p>{description}</p>
        </div>

    </div>
    <button className="toggle-button" onClick={togglePanel}>Read Description</button>
    </div>
    </>
    )
}
export default ResumeItem;