import React from 'react';
import "./pages.css"

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
                    <h5 className="text-center">Already a member?</h5><br />
                    <button type="button" className="btn-lg btn-primary" data-toggle="modal" data-target="#login">Login</button><br /><br /><br /><br /><br /><br /><br />
                </div>
                <div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;