import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import axios from "axios";
import Header from "../components/Header/Header";
import AuthContext from "../context/AuthContext";
import DateContext from "../context/DateContext";
import jwtModule from "jsonwebtoken";
import {startOfISOWeek, getWeek} from "date-fns"

const Journal = () => {
  const { jwt } = useContext(AuthContext);
  const{StartWeek, FullWeek} = useContext(DateContext);

  const { REACT_APP_SECRET } = process.env;

  const [journal, setJournal] = useState([]);

  const getAllEntries = () => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios.get(`/api/getEntries/${decoded._id}`).then((res) => {
      console.log(res);
      setJournal(res.data.data);
    });
  }

  useEffect(() => {
    getAllEntries();
    console.log(new Date().toLocaleDateString("en-US").split("/"));
    console.log(startOfISOWeek(new Date()));
    console.log(StartWeek);
    console.log(FullWeek);
  }, []);

  const deleteJournal = (id) => {
      axios.delete(`/api/deleteEntry/${id}`).then(res => {
          console.log(res);
      })
      getAllEntries();
  }

  return (
    <>
    <Header/>
      <div className='container-fluid'>
        <div className='row'>
          <div id='list-example' class='col-3 list-group mx-3'>
            {journal.map((day) => (
              <a
                class='list-group-item list-group-item-action'
                href={day.datetime}
              >
                {day.datetime}
              </a>
            ))}
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
                <Link to={{pathname:"/DayJournal", id: entry._id, entry: entry.entry, Date: entry.datetime}}><button type="button" className="btn btn-primary"> Edit </button></Link>
                <button type="submit" className="btn btn-danger" onClick={() => deleteJournal(entry._id)}> Delete </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
