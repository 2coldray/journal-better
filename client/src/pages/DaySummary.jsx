import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Axios from "axios";


const DaySummary = () => {
  // creates empty array and items to populate the array
  const [inputList, setInputList] = useState([]);
  const [timeBlock, setTimeBlock] = useState("");
  const [inputList2, setInputList2] = useState([]);
  const [timeBlock2, setTimeBlock2] = useState("");

  const handleInputChange = (e, index = 0) => {
    const { name, value } = e.target;
    setTimeBlock(e.target.value);
  };

  const handleInputChange2 = (e, index = 0) => {
    const { name, value } = e.target;
    setTimeBlock2(e.target.value);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleRemoveClick2 = (index2) => {
    const list2 = [...inputList];
    list2.splice(index2, 1);
    setInputList2(list2);
  };
  const [savedList, setSavedList] = useState([]);
  // handle click event of the Add button

  const handleAddClick = () => {
    setInputList([...inputList, timeBlock]);
  };

  const handleAddClick2 = () => {
    setInputList2([...inputList2, timeBlock2]);
  };
  const handleItemsSubmit = (list) => {
    console.log(list);
      API.postListItems(list)
      .then(res=>{
        setSavedList(res.data);
      })
      // setInputList([]);
  };

  const onChange = (e)=>{let {value}=e.target
  setTimeBlock(value)}



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
      { <div className="DaySummary">
        <div className="container">
          <div className="row">
            <button onClick={handleAddClick} {...() => handleItemsSubmit(inputList)}>Add</button>
            <div className="col-md-6">
              <div className="card summary-card">
                <div className="card-body">
                  <h5 className="card-title">How do you want to live today?</h5>

                  <p className="card-text">
                    {inputList.length ? (
                      inputList.map((x, i) => {
                        return (
                          <div className="box">
                            <p
                              key={i}
                              name="Time Block"
                              placeholder="Enter time block notes"
                              value={x.timeBlock}
                              onChange={(e) => handleInputChange(e, i)}
                            />
                            <div className="btn-box">
                              {inputList.length !== 1 && (
                                <button
                                  className="mr10"
                                  onClick={() => handleRemoveClick(i)}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="box">
                        <p
                         
                          name="Time Block"
                          placeholder="Enter time block notes"
                        />

                      </div>
                    )}
                    <input onChange value={timeBlock} onChange={onChange}/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}</> 
);}

export default DaySummary;