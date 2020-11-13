import React, { useContext } from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import WeekCard from "../components/WeekCard/WeekCard";
import DateContext from "../context/DateContext";
import axios from "axios";

const Week = () => {
  const { Week } = useContext(DateContext);

  return (
    <>
      <div className='day-background-img'>
        <div className='container'>
          <div className='row'>
            {Week.map((Day) => (
              <div className='col-md-3'>
                <div className='card-body' id='home-card-2'>
                  <h5 className='card-title'>{Day}</h5>

                  <p className='card-text'>
                    Plan your day, and share your thoughts
                  </p>
                  <ul className='list-group list-group-flush'>
                    <WeekCard DateTime={Day} />
                  </ul>
                  <Link
                    to={{ pathname: "/dayjournal", Date: Day }}
                    className='dj-link'
                  >
                    Open your journal...
                  </Link>
                </div>
              </div>
            ))}
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Week</h5>
                <p className='card-text'>
                  Take some time to reflect on your week
                </p>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
<<<<<<< HEAD




=======
>>>>>>> 39551e028e1948f5a4ecd70a26b7813250b658c2
    </>
  );
};

export default Week;
