import React, { useState, useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./Modal.css"
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const SignUpModal = () => {

    const { setJwt } = useContext(AuthContext);
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFirstNameInputChange = (e) => {
        const { value } = e.target;
        setFirstName(value);
    };

    const handleLastNameInputChange = (e) => {
        const { value } = e.target;
        setLastName(value);
    };

    const handleEmailAddressInput = (e) => {
        const { value } = e.target;
        setEmailAddress(value);
    };

    const handlePasswordInputChange = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    const handleSignUpFormSubmit = (
        e,
        firstName,
        lastName,
        emailAddress,
        password
    ) => {
        e.preventDefault();
        axios
            .post("/api/signup", {
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress,
                password: password,
            })
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setJwt(response.data.data);
                history.push("/Tutorial");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Sign-Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="ml-auto">Create an Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br />
                    <div className='container'>
                        <form
                            onSubmit={(e) => {
                                handleSignUpFormSubmit(
                                    e,
                                    firstName,
                                    lastName,
                                    emailAddress,
                                    password
                                );
                            }}
                        >
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fas fa-user'></i>
                                </span>
                                <input
                                    id='first-name'
                                    type='text'
                                    className='form-control'
                                    name='first-name'
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={handleFirstNameInputChange}
                                />
                            </div>
                            <br />
                            <br />
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fas fa-user'></i>
                                </span>
                                <input
                                    id='last-name'
                                    type='text'
                                    className='form-control'
                                    name='last-name'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={handleLastNameInputChange}
                                />
                            </div>
                            <br />
                            <br />
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fas fa-envelope'></i>
                                </span>
                                <input
                                    id='email'
                                    type='text'
                                    className='form-control'
                                    name='email'
                                    placeholder='Email'
                                    value={emailAddress}
                                    onChange={handleEmailAddressInput}
                                />
                            </div>
                            <br />
                            <br />
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fas fa-lock'></i>
                                </span>
                                <input
                                    id='password'
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={handlePasswordInputChange}
                                />
                            </div>
                            <br />
                            <br />
                            <div className="col-sm-12 text-center">
                                <Button variant="info" onSubmit={handleSignUpFormSubmit} type="submit">
                                    Sign-Up
                            </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default SignUpModal;