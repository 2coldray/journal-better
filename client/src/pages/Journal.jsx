import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import "./pages.css";
import axios from "axios";
import Header from "../components/Header/Header";
import AuthContext from "../context/AuthContext";
import jwtModule from "jsonwebtoken";

const Journal = () => {
  const { jwt } = useContext(AuthContext);

  const { REACT_APP_SECRET } = process.env;

  const [journal, setJournal] = useState([]);

  const getAllEntries = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios.get(`/api/getEntries/${decoded._id}`).then((res) => {
      console.log(res);
      setJournal(res.data.data);
    });
  };

  useEffect(() => {
    getAllEntries();
  }, []);

  const getToday = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios.get(`/api/Today/${decoded._id}/getEntry`).then(res => {
      setJournal(res.data.data);
    })
  }
  const getWeek = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios.get(`/api/ThisWeek/${decoded._id}/getEntries`).then(res => {
      setJournal(res.data.data);
    })
  }
  const getLastWeek = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios.get(`/api/LastWeek/${decoded._id}/getEntries`).then(res => {
      setJournal(res.data.data);
    })
  }
  const getMonth = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios.get(`/api/CurrentMonth/${decoded._id}/getEntries`).then(res => {
      setJournal(res.data.data);
    })
  }
  const getLastMonth = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios.get(`/api/LastMonth/${decoded._id}/getEntries`).then(res => {
      setJournal(res.data.data);
    })
  }

  const deleteJournal = (id) => {
    axios.delete(`/api/deleteEntry/${id}`).then((res) => {
      console.log(res);
    });
    getAllEntries();
  };

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div id='list-example' class='col-3 list-group mr-3'>
            <ListGroup className="">
              <ListGroup.Item action onClick={getToday}>Today</ListGroup.Item>
              <ListGroup.Item action onClick={getWeek}>This Week</ListGroup.Item>
              <ListGroup.Item action onClick={getLastWeek}>Last Week</ListGroup.Item>
              <ListGroup.Item action onClick={getMonth}>This Month</ListGroup.Item>
              <ListGroup.Item action onClick={getLastMonth}>Last Month</ListGroup.Item>
              <ListGroup.Item action onClick={getAllEntries}>All</ListGroup.Item>
            </ListGroup>
            {/* {journal.map((day) => (
              <a
                class='list-group-item list-group-item-action'
                href={day.datetime}
              >
                {day.datetime}
              </a>
            ))} */}
          </div>
          <div
            data-spy='scroll'
            data-target='#list-example'
            data-offset='0'
            class='scrollspy-example col-8'
          >
            {journal.map((entry) => (
              <>
                <h4 id='list-item-2'> {entry.datetime}</h4>
                <p>{entry.entry}</p>
                <Link
                  to={{
                    pathname: "/DayJournal",
                    id: entry._id,
                    entry: entry.entry,
                    Date: entry.datetime,
                  }}
                >
                  <button type='button' className='btn btn-primary'>
                    {" "}
                    Edit{" "}
                  </button>
                </Link>
                <button
                  type='submit'
                  className='btn btn-danger'
                  onClick={() => deleteJournal(entry._id)}
                >
                  {" "}
                  Delete{" "}
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
