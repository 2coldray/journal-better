import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./pages.css";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import DateContext from "../context/DateContext";
import jwtModule from "jsonwebtoken";

const Journal = () => {
  const { jwt } = useContext(AuthContext);
  const history = useHistory();

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
  }, []);

  const deleteJournal = (id) => {
      axios.delete(`/api/deleteEntry/${id}`).then(res => {
          console.log(res);
      })
      getAllEntries();
  }

  return (
    <>
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
            {/* <a
              class='list-group-item list-group-item-action'
              href='#list-item-2'
            >
              Item 2
            </a>
            <a
              class='list-group-item list-group-item-action'
              href='#list-item-3'
            >
              Item 3
            </a>
            <a
              class='list-group-item list-group-item-action'
              href='#list-item-4'
            >
              Item 4
            </a> */}
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
            {/* <h4 id='list-item-2'> Journal 2</h4>
            <p>...</p>
            <h4 id='list-item-3'> Journal 3</h4>
            <p>...</p>
            <h4 id='list-item-4'> Journal 4</h4>
            <p>...</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
