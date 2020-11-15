import React, { useState, useEffect, useContext } from "react";
import { ListGroup } from "react-bootstrap";
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
    axios.get(`/api/WeekNotes/${decoded._id}/${props.DateTime}`).then((res) => {
      console.log(res.data.data);
      setNotes(res.data.data);
    });
  }, [props.DateTime, REACT_APP_SECRET, jwt]);

  return (
    <>
      {notes.length ? (
        notes.map((noteName) => (
          <ListGroup.Item action key={noteName._id} id={noteName._id}>
            {noteName.name}
          </ListGroup.Item>
        ))
      ) : (
        <ListGroup.Item action aria-rowspan='3'>
          Hey write down some plans for today
        </ListGroup.Item>
      )}
    </>
  );
}

export default WeekCard;
