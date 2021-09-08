import React from 'react'

export default function JobPositionTable(props) {
    return (
        <table className="table table-striped table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th colSpan="3" className="text-center h3 p-2">Job Positions Table</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Job Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.jobPositions.map(jp => 
                            <tr>
                                <th>{jp.id}</th>
                                <td>{jp.jobTitle}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning" onClick={() => props.editCallback(jp)}>Edit</button>
                                    <button className="btn btn-sm btn-danger ml-2" onClick={() => props.deleteCallback(jp)}>Delete</button>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
    )
}
