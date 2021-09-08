import React, {useReducer} from 'react'

export default function UserEditor(props) {

    const [jobPositionInput, setJobPositionInput] = useReducer((state, newState) => ({...state, ...newState}), {
        id: props.jobPosition.id || "",
        jobTitle: props.jobPosition.jobTitle || "",
    });

    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;

        setJobPositionInput({
            [name] : newValue,
        });
    }

    const submitForm = () => {
        props.saveCallback(jobPositionInput);
    }

    return (
        <div className="m-2">
            <div className="form-group">
                <label>ID : </label>
                <input type="text" value={jobPositionInput.id} className="form-control" disabled name="id"/>
            </div>
            <div className="form-group">
                <label>Job Title : </label>
                <input type="text" placeholder="Enter Job Title..." value={jobPositionInput.jobTitle} className="form-control" name="jobTitle" onChange={handleChange}/>
            </div>
            <div className="text-center">
                <button className="btn btn-success" onClick={submitForm}>Save</button>
                <button className="btn btn-danger ml-1" onClick={props.cancelCallback}>Cancel</button>
            </div>
        </div>
    )
}
