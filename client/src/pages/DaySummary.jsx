import React, { useEffect, useState, useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Header from "../components/Header/Header";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import jwtModule from "jsonwebtoken";

const DaySummary = (props) => {
  const { jwt } = useContext(AuthContext);

  const { REACT_APP_SECRET } = process.env;

  useEffect(() => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    axios
      .get(`/api/Notes/${decoded._id}/${props.location.Date}`)
      .then((res) => {
        setInputList(res.data.data);
      });
    axios
      .get(`/api/compareNotes/${decoded._id}/${props.location.Date}`)
      .then((res) => {
        console.log(res);
        setInputList2(res.data.data);
      });
  }, [REACT_APP_SECRET, jwt, props.location.Date]);

  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [userPlans, setUserPlans] = useState("");
  const [userPlans2, setUserPlans2] = useState("");
  const [inputList, setInputList] = useState([]);
  const [inputList2, setInputList2] = useState([]);

  // const [compare, setCompare] = useState(false);

  const handleNameChange = (e) => {
    let { value } = e.target;
    setName(value);
  };

  const handleNameChange2 = (e) => {
    let { value } = e.target;
    setName2(value);
  };

  const addNewNote = (e) => {
    e.preventDefault();
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);

    axios
      .post(`/api/addNote/${decoded._id}`, {
        user_plans: userPlans,
        name: name,
        datetime: props.location.Date,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setInputList(res.data.data);
          setName("");
          setUserPlans("");
        } else {
          console.error();
        }
      });
  };

  const deleteNote = (id, index) => {
    axios.delete(`/api/deleteNote/${id}`).then((res) => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    });
  };

  const addCompare = (e) => {
    e.preventDefault();
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    console.log("I was clicked");
    axios
      .post(`/api/addCompare/${decoded._id}`, {
        user_plans: userPlans2,
        name: name2,
        datetime: props.location.Date,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setInputList2(res.data.data);
          setName2("");
          setUserPlans2("");
        } else {
          console.error();
        }
      });
  };

  const deleteCompare = (id, index) => {
    axios.delete(`/api/deleteCompare/${id}`).then((res) => {
      console.log(res);
      const list = [...inputList2];
      list.splice(index, 1);
      setInputList2(list);
    });
  };

  const handleUserPlans = (e) => {
    let { value } = e.target;
    setUserPlans(value);
  };

  const handleUserPlans2 = (e) => {
    let { value } = e.target;
    setUserPlans2(value);
  };

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div id='Notes' className='mt-4 col-lg-5 col-sm-10'>
            <Card className='shadow-lg'>
              <Card.Header as='h4'>How do you want to live today?</Card.Header>
              <Card.Body>
                <Card.Title as='h5'>{props.location.Date}</Card.Title>
                <ListGroup>
                  {inputList.length ? (
                    inputList.map((x, i) => (
                      <ListGroup.Item key={i}>
                        <Card.Title as='h6'>{x.name}</Card.Title>
                        <Card.Text>
                          <div className='box'>
                            <p>{x.user_plans}</p>
                          </div>
                          <div className='btn-box'>
                            {inputList.length !== 1 && (
                              <>
                                <button
                                  className='mr10 btn btn-danger'
                                  onClick={() => deleteNote(x._id, i)}
                                >
                                  Remove
                                </button>
                              </>
                            )}
                          </div>
                        </Card.Text>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>
                      <Card.Text>
                        Write down your plans for today and how long you want to
                        do them.
                      </Card.Text>
                    </ListGroup.Item>
                  )}
                  <form onSubmit={addNewNote}>
                    <div class='form-group mb-n4'>
                      <label>Activity Name:</label>
                      <input
                        type='name'
                        class='form-control'
                        placeholder='Example: Read a book, 30 min'
                        value={name}
                        onChange={handleNameChange}
                      />
                    </div>
                    <div class='form-group'>
                      <label>Your Plans:</label>
                      <textarea
                        class='form-control'
                        rows='3'
                        value={userPlans}
                        onChange={handleUserPlans}
                      ></textarea>
                    </div>
                    <button type='submit' className='btn btn-info'>
                      {" "}
                      Add New Note
                    </button>
                  </form>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          <div id='Compare' className='mt-4 col-lg-5 col-sm-10'>
            <Card className='shadow-lg'>
              <Card.Header as='h4'>How did you live today?</Card.Header>
              <Card.Body>
                <Card.Title as='h5'>{props.location.Date}</Card.Title>
                <ListGroup>
                  {inputList2.length ? (
                    inputList2.map((x, i) => (
                      <ListGroup.Item key={i}>
                        <Card.Title as='h6'>{x.name}</Card.Title>
                        <Card.Text>
                          <div className='box'>
                            <p>{x.user_plans}</p>
                          </div>
                          <div className='btn-box'>
                            {inputList2.length !== 1 && (
                              <button
                                className='mr10 btn btn-danger'
                                onClick={() => deleteCompare(x._id, i)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </Card.Text>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>
                      <Card.Text>How did your plans end up?</Card.Text>
                    </ListGroup.Item>
                  )}
                  <form onSubmit={addCompare}>
                    <div class='form-group mb-n4'>
                      <label>Activity Name:</label>
                      <input
                        type='name'
                        class='form-control'
                        placeholder='Example: Started Lord of the Rings, 2 hours'
                        value={name2}
                        onChange={handleNameChange2}
                      />
                    </div>
                    <div class='form-group'>
                      <label>Your Plans:</label>
                      <textarea
                        class='form-control'
                        rows='3'
                        value={userPlans2}
                        onChange={handleUserPlans2}
                      ></textarea>
                    </div>
                    <button type='submit' className='btn btn-info'>
                      {" "}
                      Add Compare Note
                    </button>
                  </form>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaySummary;
