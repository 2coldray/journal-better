import React, { useContext } from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
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
              <Card className='col-sm-12 col-lg-3 mx-3 shadow-lg text-center' id='home-card-2'>
                <Card.Body>
                  <Card.Title as='h4'>{Day}</Card.Title>
                  <ListGroup className='list-group list-group-flush mb-3'>
                  <Link
                    to={{ pathname: "/DaySummary", Date: Day }}
                  >
                    <WeekCard DateTime={Day} />
                  </Link>
                  </ListGroup>
                  <Link
                    to={{ pathname: "/DayJournal", Date: Day }}
                    className='dj-link'
                  >
                    Open your journal...
                  </Link>
                </Card.Body>
              </Card>
            ))}
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Week;
