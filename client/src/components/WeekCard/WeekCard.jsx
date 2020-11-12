import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import jwtModule from "jsonwebtoken";

function WeekCard(props) {
  //   const [DateTime, setDateTime] = useState("");
  const { jwt } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);
  //   setDateTime(props.DateTime);

  const { REACT_APP_SECRET } = process.env;

  useEffect(() => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    console.log(props.DateTime);
    axios.get(`/api/WeekNotes/5fa8728e9988e01d9cd232f9/${props.DateTime}`)
    .then(res=> console.log(res))
    // axios
    //   .get("/api/WeekNotes/" + decoded._id, {
    //     datetime: props.DateTime,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // console.log(props.DateTime);
    //     response.data.data.forEach((note) => {
    //       // console.log(note)
    //       setName(note.name);
    //       setNotes(...notes, name);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [props.DateTime, name, notes, REACT_APP_SECRET, jwt]);

  return (
    <div>
      {notes.map((noteName) =>
        !noteName ? (
          <li className='list-group-item'>
            Hey journal some notes down for today
          </li>
        ) : (
          <li className='list-group-item'>{noteName}</li>
        )
      )}
    </div>
  );
}

export default WeekCard;
