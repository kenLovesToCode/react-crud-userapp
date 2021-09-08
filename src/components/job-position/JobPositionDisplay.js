import React, {  useState } from 'react'
import JobPositionEditor from './JobPositionEditor'
import JobPositionTable from './JobPositionTable'

export default function JobPositionDisplay(props) {

    const [showEditor, setShowEditor] = useState(false);
    const [selectedJobPosition, setSelectedJobPosition] = useState(null);

    const createJobPosition = () => {
        setShowEditor(true);
        setSelectedJobPosition({});
    }

    const saveJobPosition = (data) => {
        props.saveCallback(data);
        setShowEditor(false);
        setSelectedJobPosition(null)
    }

    const cancelEditing = () => {
        setShowEditor(false);
        setSelectedJobPosition(null)
    }

    const startEditing = data => {
        setSelectedJobPosition(data);
        setShowEditor(true);
    }

    if(showEditor){
        //job position editor
        return <JobPositionEditor saveCallback={saveJobPosition} cancelCallback={cancelEditing} jobPosition={selectedJobPosition}/>
    }else{
        //job position table
        return (
            <div className="m-1">
            <JobPositionTable jobPositions={props.jobPositions} editCallback={startEditing} deleteCallback={props.deleteCallback}/>
            <button className="btn btn-success" onClick={createJobPosition}>Create new job position</button>
        </div>
        )
    }

    
}
