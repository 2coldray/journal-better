import React, { useState, useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const LoginModal = () => {

    const { setJwt } = useContext(AuthContext);
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEmailAddressInput = (e) => {
        const { value } = e.target;
        setEmailAddress(value);
    };

    const handlePasswordInputChange = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    const handleLoginFormSubmit = (e, emailAddress, password) => {
        e.preventDefault();
        axios
            .post("/api/login", { emailAddress, password })
            .then((response) => {
                console.log(response.data);
                setJwt(response.data.data);
                history.push("/Week");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="ml-auto">Already a Member?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br />
                    <div className='container'>
                        <form
                            onSubmit={(e) => {
                                handleLoginFormSubmit(e, emailAddress, password);
                            }}
                        >
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
                                <Button variant="primary text-center" onSubmit={handleLoginFormSubmit} type="submit">
                                    Login
                            </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginModal;