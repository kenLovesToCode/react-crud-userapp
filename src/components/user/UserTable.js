import React from 'react'

export default function UserTable(props) {
    return (
            <table className="table table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th colSpan="6" className="text-center h3 p-2">Users Table</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Job Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.users.map(user => 
                                <tr>
                                    <th>{user.id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.jobTitle}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning" onClick={() => props.editCallback(user)}>Edit</button>
                                        <button className="btn btn-sm btn-danger ml-2" onClick={() => props.deleteCallback(user)}>Delete</button>
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
    )
}
