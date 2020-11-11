import React from "react";
import "./pages.css";
// import Header from "../components/Header/Header";
import WeekCard from "../components/WeekCard/WeekCard";

const Week = () => {
  return (

    <>
      <div className="day-background-img">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">Sunday</h5>
                <ul className="list-group list-group-flush">
                    <WeekCard
                      DateTime="Sunday"
                    />
                </ul>
                {/* <p className="card-text">TEXT HERE</p> */}
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">Monday</h5>
                <ul className="list-group list-group-flush">
                    <WeekCard
                      DateTime="Monday"
                    />
                </ul>
                {/* <p className="card-text">TEXT HERE</p> */}
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">Tuesday</h5>
                <ul className="list-group list-group-flush">
                    <WeekCard
                      DateTime="Tuesday"
                    />
                </ul>
                {/* <p className="card-text">TEXT HERE</p> */}
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">Wednesday</h5>
                <ul className="list-group list-group-flush">
                    <WeekCard
                      DateTime="Wednesday"
                    />
                </ul>
                {/* <p className="card-text">TEXT HERE</p> */}
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div>
            </div>
          </div><br /><br />
          <div className="row">
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">Thursday</h5>
                <ul className="list-group list-group-flush">
                    <WeekCard
                      DateTime="Thursday"
                    />
                </ul>
                {/* <p className="card-text">TEXT HERE</p> */}
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">Friday</h5>
                <ul className="list-group list-group-flush">
                    <WeekCard
                      DateTime="Friday"
                    />
                </ul>
                {/* <p className="card-text">TEXT HERE</p> */}
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">Saturday</h5>
                <ul className="list-group list-group-flush">
                    <WeekCard
                      DateTime="Saturday"
                    />
                </ul>
                {/* <p className="card-text">TEXT HERE</p> */}
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body" id="home-card-2">
                <h5 className="card-title">1 Week</h5>
                <p className="card-text">
                  Take some time to reflect on the week.
                </p>
                <a href="" className="card-link">
                  Open your journal...
                </a>
              </div><br /><br /><br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Week;
