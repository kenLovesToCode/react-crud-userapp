import React, {useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import UserDisplay from '../components/user/UserDisplay'
import JobPositionDisplay from '../components/job-position/JobPositionDisplay'

export default function HomePage() {

    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: 'Joe',
            lastName: 'Mama',
            age: 24,
            jobTitle: 'React Dev.'
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            age: 26,
            jobTitle: 'Data Scientist'
        },
        {
            id: 3,
            firstName: 'Dummy',
            lastName: 'Doe',
            age: 26,
            jobTitle: 'React Dev.'
        },
    ]);

    const [jobPositions, setJobPositions] = useState([
        {id: 1, jobTitle: 'React Dev.'},
        {id: 2, jobTitle: 'Data Scientist'},
        {id: 3, jobTitle: 'AI Developer'},
    ]);

    const [userID, setUserID] = useState(4);
    const [jobPositionID, setJobPositionID] = useState(4);


    const saveUser = (data) => {
        if(data.id === ''){
            //create new user
            setUserID(userID + 1);
            data.id = userID;
            setUsers([...users, data]);
        }else{
            //edit/update existing user
            setUsers(users => users.map(user => user.id === data.id ? data : user))
        }
    }

    const saveJobPosition = (data) => {
        if(data.id === ''){
            //create a new job position
            setJobPositionID(jobPositionID + 1);
            data.id = jobPositionID;
            setJobPositions([...jobPositions, data]);
        }else{
            //update existing job position
            setJobPositions(jobPositions => jobPositions.map(jp => jp.id === data.id ? data : jp))
        }
    }

    const deleteUser = data => {
        setUsers(users => users.filter(user => user.id !== data.id))
    }

    const deleteJobPosition = data => {
        setJobPositions(jobPositions => jobPositions.filter(jp => jp.id !== data.id))
    }

    return (
        <div className="container-fluid">
            <div className="row m-2">
                <div className="col-3">
                    <Link to="/users" style={{textDecoration: 'none'}}>
                        <button className="btn btn-block btn-lg btn-outline-primary">USERS</button>
                    </Link>
                    <Link to="/job-positions" style={{textDecoration: 'none'}}>
                        <button className="btn btn-block btn-lg btn-outline-primary mt-2">JOB POSITIONS</button>
                    </Link>
                </div>
                <div className="col">
                    <Switch>
                        <Route path="/users" component={() => (
                             <UserDisplay users={users} jobPositions={jobPositions} saveCallback={saveUser} deleteCallback={deleteUser}/>
                        )}/>
                        <Route path="/job-positions" component={() => (
                            <JobPositionDisplay jobPositions={jobPositions} saveCallback={saveJobPosition} deleteCallback={deleteJobPosition}/>
                        )} />
                    </Switch>

                   
                </div>
            </div>
        </div>
    )
}
