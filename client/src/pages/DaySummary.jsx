import React, { useEffect, useState, useContext } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import API from "../utils/API";
import Header from "../components/Header/Header";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import jwtModule from "jsonwebtoken";

const DaySummary = (props) => {
  const { jwt } = useContext(AuthContext);

  const { REACT_APP_SECRET } = process.env;

  useEffect(() => {
    const decoded = jwtModule.verify(jwt, REACT_APP_SECRET);
    API.getTodayNotes(decoded._id).then((res) => {
      setInputList(res.data.data);
    });
  }, [REACT_APP_SECRET, jwt]);

  
  const [name, setName] = useState("");
  const [userPlans, setUserPlans] = useState("");
  const [inputList, setInputList] = useState([]);
  const [inputList2, setInputList2] = useState([]);


  const handleNameChange = (e) => {
    let { value } = e.target;
    setName(value);
  };

  // const handleInputChange = (e, index = 0) => {
  //   const { name, value } = e.target;
  //   setTimeBlock(e.target.value);
  // };

  // const handleInputChange2 = (e, index = 0) => {
  //   const { name, value } = e.target;
  //   setTimeBlock2(e.target.value);
  // };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  // const handleRemoveClick2 = (index2) => {
  //   const list2 = [...inputList];
  //   list2.splice(index2, 1);
  //   setInputList2(list2);
  // };
  // const [savedList, setSavedList] = useState([]);
  // handle click event of the Add button

  // const handleAddClick = () => {
  //   setInputList([...inputList, timeBlock]);
  // };

  // const handleAddClick2 = () => {
  //   setInputList2([...inputList2, timeBlock2]);
  // };
  // const handleItemsSubmit = (list) => {
  //   console.log(list);
  //   API.postListItems(list).then((res) => {
  //     setSavedList(res.data);
  //     setTimeBlock("");
  //   });
  //   // setInputList([]);
  // };

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

  const deleteNote = (id) => {
    axios.delete(`/api/deleteNote/${id}`).then()
  } 

  const handleUserPlans = (e) => {
    let { value } = e.target;
    setUserPlans(value);
    // TODO: set date time here always
  };

  /* Phil's stuff he added 
  const [item, setItem] = useState({
    item:"",
    title:""
  });
  const[philsList, setPhilsList] = useState([]);
  const handleItemChange = (e)=>{
    setItem(e.target.value);
  }
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    API.postItem(item.item, item.title, <user_id>)
    .then(res=> console.log(res.data));
  }
  */

  //   {inputList.length ? inputList.map((x, i) => {
  //     return (
  //       <div className="box">
  //         <input
  //           name="Time Block"
  //           placeholder="Enter time block notes"
  //           value={x.timeBlock}
  //           onChange={e => handleInputChange(e, i)}
  //         />
  //       <div className="btn-box">
  //         {inputList.length !== 1 && <button
  //           className="mr10"
  //           onClick={() => handleRemoveClick(i)}>Remove</button>}
  //       </div>
  //       </div>
  //     );
  //   }):<div className="box">
  //   <input
  //     name="Time Block"
  //     placeholder="Enter time block notes"
  //   />
  // <div className="btn-box">
  //   {inputList.length !== 1 && <button
  //     className="mr10"
  //   onClick={() => handleRemoveClick()}>Remove</button>}
  //   {/*inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>*/}
  // </div>
  // </div>}

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div id='Notes' className='col-5 mt-4'>
            <Card className='shadow-lg'>
              <Card.Header as='h4'>How do you want to live today?</Card.Header>
              <Card.Body>
                <Card.Title as='h5'>Special title treatment</Card.Title>
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
                              <button
                                className='mr10 btn btn-danger'
                                onClick={() => handleRemoveClick(i)}
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
                      <Card.Text>Write down your plans for today</Card.Text>
                    </ListGroup.Item>
                  )}
                  <form onSubmit={addNewNote}>
                    <div class='form-group mb-n4'>
                      <label>Activity Name:</label>
                      <input
                        type='name'
                        class='form-control'
                        placeholder='Enter Activity'
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
                    <button type='submit' className='btn btn-primary'>
                      {" "}
                      Add New Note
                    </button>
                  </form>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
          <div id='Compare' className='col-5 mt-4'>
            <Card className='shadow-lg'>
              <Card.Header>How did you live today?</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <ListGroup>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </ListGroup>
              </Card.Body>
              <Card.Footer>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaySummary;
