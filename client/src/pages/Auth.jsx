import React from 'react';
import "./pages.css"
import axios from "axios";

const Auth = () => {
    return (
        <div className="auth">
            <h2 className="text-center" id="auth-text">Break through the "thought loops" and solve problems.</h2><br />
            <h2 className="text-center">Compare how you want to live with how you actually live.</h2><br />
            <h2 className="text-center">Gain awareness, set goals</h2><br />
            <h2 className="text-center">Journal Better</h2><br />
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h5 className="text-center">Create an Account</h5><br />
                    <button type="button" className="btn-lg btn-primary" data-toggle="modal" data-target="#signup">Sign-Up</button><br /><br /><br /><br />
                </div>
                <div className="col-sm-12 text-center">
                    <h5 className="text-center">Already a Member?</h5><br />
                    <button type="button" className="btn-lg btn-primary" data-toggle="modal" data-target="#login">Login</button><br /><br /><br /><br /><br /><br /><br />
                </div>
                <div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title ml-auto" id="exampleModalLabel">Create an Account</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div><br /><br />
                            <div className="container">
                                <form>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        <input id="first-name" type="text" className="form-control" name="first-name" placeholder="First Name" />
                                    </div><br /><br />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        <input id="last-name" type="text" className="form-control" name="last-name" placeholder="Last Name" />
                                    </div><br /><br />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                                    </div><br /><br />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                                    </div><br /><br />
                                    <div className="col-sm-12 text-center">
                                        <button type="button" class="btn btn-primary">Sign-Up</button><br /><br />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title ml-auto" id="exampleModalLabel">Already a Member?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div><br /><br />
                            <div className="container">
                                <form>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                                    </div><br /><br />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                                    </div><br /><br />
                                    <div className="col-sm-12 text-center">
                                        <button type="button" class="btn btn-primary">Login</button><br /><br />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;