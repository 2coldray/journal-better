import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import jwtModule from "jsonwebtoken";

function WeekCard(props) {
  const { jwt } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);

  const { REACT_APP_SECRET } = process.env;

  useEffect(() => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    console.log(props.DateTime);
    axios.get(`/api/WeekNotes/${decoded._id}/${props.DateTime}`)
    .then(res=> {
      console.log(res.data.data);
      setNotes(res.data.data)
    });
  }, [props.DateTime, REACT_APP_SECRET, jwt]);

  return (
    <div>
      {notes.map((noteName) =>
        !noteName.name ? (
          <li className='list-group-item'>
            Hey journal some notes down for today
          </li>
        ) : (
          <li 
          key={noteName._id}
          id={noteName._id}
          className='list-group-item'
          >{noteName.name}</li>
        )
      )}
    </div>
  );
}

export default WeekCard;
