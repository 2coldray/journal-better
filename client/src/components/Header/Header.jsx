import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import DateContext from "../../context/DateContext";
import logo from "../../assets/images/journal-better.png";
<<<<<<< HEAD
import AuthContext from "../../context/AuthContext";
import jwtModule from "jsonwebtoken";
=======
import { BiLogOut } from 'react-icons/bi';
>>>>>>> 67cae6f4b0f40d82a49407c8e7987c6f409491bc

const Header = () => {
  const { Today } = useContext(DateContext);
  const { jwt } = useContext(AuthContext);

  const { REACT_APP_SECRET } = process.env;
  const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
        <Link className="navbar-brand" to="/Week">
          <img src={logo} className="logo" alt="Journal Better Home" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/Week">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{ pathname: "/DayJournal", Date: Today }}
              >
                Journal Entry
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={{ pathname: "/DaySummary", Date: Today }}>
                Today's Summary
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Journal">
                Journal
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className='nav-item'>
          <h5 className='nav-link'>{decoded.firstName} {decoded.lastName}</h5>
          </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {/* <i className="fas fa-sign-out-alt mr-1"></i> */}
                {/* <ion-icon name="exit-outline mr-2"></ion-icon> */}
                <BiLogOut  className="mr-1" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
