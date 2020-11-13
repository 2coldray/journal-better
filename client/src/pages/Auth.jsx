import React from "react";
import "./pages.css";
import LoginModal from "../components/Modal/LoginModal"
import SignUpModal from "../components/Modal/SignUpModal"
import Header2 from "../components/Header2/Header2"

const Auth = () => {

  return (
    <>
      <Header2 />
      <div className='auth'>
        <h2 className='text-center' id='auth-text'>
          Break through the "thought loops" and solve problems.
      </h2>
        <br />
        <h2 className='text-center'>
          Compare how you want to live with how you actually live.
      </h2>
        <br />
        <h2 className='text-center'>Gain awareness, set goals</h2>
        <br />
        <h2 className='text-center'>Journal Better</h2>
        <br />
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h5 className='text-center'>Create an Account</h5>
            <br />
            <SignUpModal />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className='col-sm-12 text-center'>
            <h5 className='text-center'>Already a member?</h5>
            <br />
            <LoginModal />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
