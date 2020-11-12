import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./pages.css";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import jwtModule from "jsonwebtoken";

const DayJournal = (props) => {
  const { jwt } = useContext(AuthContext);
  const history = useHistory();

  const [plans, setPlans] = useState("");
  const [CreateOrUpdate, setCreateOrUpdate] = useState("");

  // props.location.id = journalentry._id
  // props.location.entry = journalentry.entry
  // props.location.Date = journalentry.datetime

  useEffect(() => {
    !props.location.entry
      ? setCreateOrUpdate("Create")
      : setCreateOrUpdate("Update");
  }, [props.location.entry]);

  useEffect(() => {
    if (CreateOrUpdate === "Update") {
      setPlans(props.location.entry);
    }
  }, [CreateOrUpdate, props.location]);


  const { REACT_APP_SECRET } = process.env;

  const Update = () => {
    axios
      .put(`/api/JournalEntry/${props.location.id}`, {
        entry: plans,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/Journal");
        }
      });
  };

  const Create = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    console.log(decoded._id);
    axios
      .post(`/api/addEntry/${decoded._id}`, {
        entry: plans,
        datetime: props.location.Date,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/Journal");
        }
      });
  };

  const handlePlansInputChange = (e) => {
    let { value } = e.target;
    setPlans(value);
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (CreateOrUpdate === "Update") {
      Update();
    } else {
      Create();
    }
  };
  return (
    <div className='day-background-img'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-12'>
            <form className='' onSubmit={handleFormSubmit}>
              <div className='form-group text-center mx-auto'>
                <label>
                  <h2>{props.location.Date}</h2>
                </label>
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
