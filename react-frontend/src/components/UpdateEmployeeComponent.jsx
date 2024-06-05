import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailID: ''
    });

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            let employeeData = res.data;
            setEmployee({
                firstName: employeeData.firstName,
                lastName: employeeData.lastName,
                emailID: employeeData.emailID
            });
        });
    }, [id]);

    const changeFirstNameHandler = (event) => {
        setEmployee({ ...employee, firstName: event.target.value });
    };

    const changeLastNameHandler = (event) => {
        setEmployee({ ...employee, lastName: event.target.value });
    };

    const changeEmailIDHandler = (event) => {
        setEmployee({ ...employee, emailID: event.target.value });
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        let updatedEmployee = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailID: employee.emailID
        };
        console.log('employee => ' + JSON.stringify(updatedEmployee));
        EmployeeService.updateEmployee(employee,id).then(res=>{
            navigate('/employees');
        });
    };

    const cancel = () => {
        navigate('/employees');
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Employee Details</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                    <input
                                        placeholder='First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={employee.firstName}
                                        onChange={changeFirstNameHandler}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name:</label>
                                    <input
                                        placeholder='Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={employee.lastName}
                                        onChange={changeLastNameHandler}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Email Address:</label>
                                    <input
                                        placeholder='Email Address'
                                        name='emailID'
                                        className='form-control'
                                        value={employee.emailID}
                                        onChange={changeEmailIDHandler}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={updateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployeeComponent;
