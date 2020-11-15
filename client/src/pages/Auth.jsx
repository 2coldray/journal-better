import React from "react";
import "./pages.css";
import LoginModal from "../components/Modal/LoginModal";
import SignUpModal from "../components/Modal/SignUpModal";
import Header2 from "../components/Header2/Header2";

const Auth = () => {
  return (
    <>
      <Header2 />
      <div className="auth">
        <h2 className="text-center auth-text-font" id="auth-text">
          Break through "thought loops" and solve problems.
        </h2>
        <br />
        <h2 className="text-center auth-text-font">
          Compare how you want to live with how you actually live.
        </h2>
        <br />
        <h2 className="text-center auth-text-font">
          Gain awareness, set goals
        </h2>
        <br />
        <h2 className="text-center auth-text-font">Journal Better</h2>
        <br />
        <div className="row">
          <div className="col-sm-5"></div>
          <div className="card auth-card col-sm-2 shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <div className="col-sm-12 text-center">
                <h5 className="text-center">Create an Account</h5>
                <br />
                <SignUpModal />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="col-sm-12 text-center">
                <h5 className="text-center">Already a member?</h5>
                <br />
                <LoginModal />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>
    </>
  );
};

export default Auth;
