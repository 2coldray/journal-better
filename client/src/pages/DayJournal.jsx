import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./pages.css";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import jwtModule from "jsonwebtoken";

const DayJournal = (props) => {
  const { jwt } = useContext(AuthContext);
  const history = useHistory();
  // const [UserId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [DateTime, setDateTime] = useState("Wednesday");
  const [plans, setPlans] = useState("");

  const handleNameInputChange = (e) => {
    let { value } = e.target;
    setName(value);
  };

  const handlePlansInputChange = (e) => {
    let { value } = e.target;
    setPlans(value);
  };
  const { REACT_APP_SECRET } = process.env;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    console.log(decoded._id);
    axios
      .post("/api/addNote/" + decoded._id, {
        name: name,
        datetime: DateTime,
        user_plans: plans,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/Week");
        }
      });
  };
  return (
    <div className='day-background-img'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-12'>
            <form className='' onSubmit={handleFormSubmit}>
              <div className='form-group text-center mx-auto'>
                <label>
                  <h2>Day 1</h2>
                </label>
                <div className='form-group mx-auto'>
                  <label for='name'>Name of this event</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='Enter the name of the event'
                    value={name}
                    onChange={handleNameInputChange}
                  />
                </div>
                <div className='form-group mx-auto'>
                  <label for='exampleFormControlTextarea1'>
                    Your plans for today
                  </label>
                  <textarea
                    className='form-control'
                    id='eform-control'
                    rows='7'
                    value={plans}
                    onChange={handlePlansInputChange}
                  ></textarea>
                </div>
              </div>
              <div className='col-row-12 text-center'>
                <button type='submit' className='btn btn-light' id='save-btn'>
                  Save Entry <i className='far fa-save'></i>
                </button>
                {/* <button type='button' className='btn btn-primary' id='edit-btn'>
                  Edit Entry <i ='far fa-edit'></i>
                </button> */}
                <br />
                <br />
              </div>

              {/* <div class='form-group text-center mx-auto'>
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
                  Save Entry <i className='far fa-save'></i>
                </button>
                {/* <button type='button' className='btn btn-primary' id='edit-btn'>
                  Edit Entry <i class='far fa-edit'></i>
                </button>
                <br />
                <br />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayJournal;
