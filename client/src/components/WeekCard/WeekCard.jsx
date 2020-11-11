import React, { useState, useEffect } from "react";
import axios from "axios";

function WeekCard(props) {
  //   const [DateTime, setDateTime] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);
  //   setDateTime(props.DateTime);

  useEffect(() => {
    axios
      .get("/api/notes/", {
        datetime: props.DateTime,
        amount: 2,
      })
      .then((response) => {
        response.data.forEach((note) => {
          setName(note.name);
          setNotes(...notes, name);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.DateTime, name, notes]);

  return (
    <div>
      {notes && notes.map((noteName) =>
        !noteName ? (
          <li className='list-group-item'>Hey journal some notes down for today</li>
        ) : (
          <li className='list-group-item'>{noteName}</li>
        )
      )}
    </div>
  );
}

export default WeekCard;
