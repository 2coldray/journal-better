import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import WeekCard from  "../components/WeekCard/WeekCard";
import axios from "axios";

const Week = () => {

  return (
    <>
      <div className='day-background-img'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Day 1</h5>

                <p className='card-text'>
                  Plan your day, and share your thoughts
                </p>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime='Sunday' />
                </ul>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Day 2</h5>

                <p className='card-text'>
                  Plan your day, and share your thoughts
                </p>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime='Sunday' />
                </ul>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Day 3</h5>
                <p className='card-text'>
                  Plan your day, and share your thoughts
                </p>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime='Sunday' />
                </ul>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Day 4</h5>
                <p className='card-text'>
                  Plan your day, and share your thoughts
                </p>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime='Sunday' />
                </ul>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Day 5</h5>
                <p className='card-text'>
                  Plan your day, and share your thougts
                </p>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime='Sunday' />
                </ul>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Day 6</h5>
                <p className='card-text'>
                  Plan your day, and share your thougts
                </p>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime='Sunday' />
                </ul>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card-body' id='home-card-2'>
                <h5 className='card-title'>Day 7</h5>
                <p className='card-text'>
                  Plan your day, and share your thougts
                </p>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime='Sunday' />
                </ul>
                <Link to='/dayjournal' className='dj-link'>
                  Open your journal...
                </Link>
              </div>
            </div>
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

    </div>
    </div>
    </div>

    </>

  );
};

export default Week;
