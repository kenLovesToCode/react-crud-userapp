import React, {useReducer} from 'react'

export default function UserEditor(props) {

    const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}), {
        id: props.user.id || "",
        firstName: props.user.firstName || "",
        lastName: props.user.lastName || "",
        age: props.user.age || "",
        jobTitle: props.user.jobTitle || ""
    });

    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setUserInput({
            [name]: newValue
        });
    }

    const submitForm = () => {
        props.saveCallback(userInput);
    }

    return (
        <div className="m-2">
            <div className="form-group">
                <label>ID : </label>
                <input type="text" value={userInput.id} onChange={handleChange} className="form-control" disabled name="id"/>
            </div>
            <div className="form-group">
                <label>First Name : </label>
                <input placeholder="Enter Firstname..." type="text" value={userInput.firstName} onChange={handleChange} className="form-control" name="firstName"/>
            </div>
            <div className="form-group">
                <label>Last Name : </label>
                <input placeholder="Enter Lastname..." type="text" value={userInput.lastName} onChange={handleChange} className="form-control" name="lastName"/>
            </div>
            <div className="form-group">
                <label>Age : </label>
                <input placeholder="Enter Age..." type="text" value={userInput.age} onChange={handleChange} className="form-control" name="age"/>
            </div>
            <div className="form-group">
                <select value={userInput.jobTitle} name="jobTitle" className="form-control" onChange={handleChange}>
                    {
                        props.jobPositions.map(jp => (
                            <option key={jp.id} value={jp.jobTitle}>
                                {jp.jobTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="text-center">
                <button className="btn btn-success" onClick={submitForm}>Save</button>
                <button className="btn btn-danger ml-1" onClick={props.cancelCallback}>Cancel</button>
            </div>
        </div>
    )
}
