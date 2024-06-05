import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        if (id !== '_add') {
            EmployeeService.getEmployeeById(id).then((res) => {
                let employee = res.data;
                setEmployee({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailID: employee.emailID
                });
            });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        console.log('employee => ' + JSON.stringify(employee));

        if (id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                navigate('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, id).then(res => {
                navigate('/employees');
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const cancel = () => {
        navigate('/employees');
    };

    const getTitle = () => {
        return id === '_add' ? <h3 className="text-center">Add Employee</h3> : <h3 className="text-center">Update Employee</h3>;
    };

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={employee.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={employee.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Id:</label>
                                    <input
                                        placeholder="Email Address"
                                        name="emailID"
                                        className="form-control"
                                        value={employee.emailID}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeeComponent;
