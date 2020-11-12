import React, { useState, useContext } from "react";
import "./pages.css";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import jwtModule from "jsonwebtoken";

const DayJournal = () => {
  const { jwt } = useContext(AuthContext);
  // const [UserId, setUserId] = useState("");
  const [name, setName] = useState("FINALLY");
  const [DateTime, setDateTime] = useState("Wednesday");
  const [plans, setPlans] = useState("IT WORKS IT REALLY WORKS");


  const handleNameInputChange = (e) => {
    let { value } = e.target;
    setName(value);
  };
  const handleDateInputChange = (e) => {
    let { value } = e.target;
    setDateTime(value);
  };
  const handlePlansInputChange = (e) => {
    let { value } = e.target;
    setPlans(value);
  };
  const {REACT_APP_SECRET} = process.env

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    console.log(decoded._id);
    axios.post("/api/addNote/" + decoded._id,  {
      name: name,
      datetime: DateTime,
      user_plans: plans,
    }).then(response => {
      console.log(response);
    })
  }
  return (
    <div className='day-background-img'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <form
            onSubmit ={handleFormSubmit}>
              <div class='form-group text-center mx-auto'>
                <label for='exampleFormControlTextarea1'>
                  <h2>Day 1</h2>
                </label>
                <br />
                <br />
                <textarea
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='7'
                ></textarea>
              </div>
              <div className='col-row-12 text-center'>
                <button type='submit' className='btn btn-light' id='save-btn'>
                  Save Entry<i className='far fa-save'></i>
                </button>
                {/* <button type='button' className='btn btn-primary' id='edit-btn'>
                  Edit Entry <i class='far fa-edit'></i>
                </button> */}
                <br />
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayJournal;
