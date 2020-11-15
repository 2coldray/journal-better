import React, { useContext } from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import WeekCard from "../components/WeekCard/WeekCard";
import DateContext from "../context/DateContext";
import Header from "../components/Header/Header";

const Week = () => {
  const { Week } = useContext(DateContext);

  return (
    <>
      <Header />
      <div className='day-background-img'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            {Week.map((Day) => (
              <Card className='col-sm-12 col-lg-3  mx-3 shadow-lg' id='home-card-2'>
                <Card.Body>
                  <Card.Title>{Day}</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <ul className='list-group list-group-flush'>
                    <WeekCard DateTime={Day} />
                  </ul>
                  <Link
                    to={{ pathname: "/DayJournal", Date: Day }}
                    className='dj-link'
                  >
                    Open your journal...
                  </Link>
                </Card.Body>
              </Card>
            ))}

            {/* <div className='col-md-3'>
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
              </div> */}
            {/* <Card className='col-4' id='home-card-2'>
              <Card.Body>
                <Card.Title>{Day}</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <ul className='list-group list-group-flush'>
                  <WeekCard DateTime={Day} />
                </ul>
                <Link
                  to={{ pathname: "/DayJournal", Date: Day }}
                  className='dj-link'
                >
                  Open your journal...
                </Link>
              </Card.Body>
            </Card> */}
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Week;
