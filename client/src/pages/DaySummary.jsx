import React, { useEffect, useState } from "react";
import API from "../utils/API";
const DaySummary = () => {
  // creates empty array and items to populate the array
  const [inputList, setInputList] = useState([]);
  const [timeBlock, setTimeBlock] = useState({ timeblock: "" });
  const [inputList2, setInputList2] = useState([]);
  const [timeBlock2, setTimeBlock2] = useState({ timeblock: "" });

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
    if (Array.isArray(list)) {
      API.postListItems(list);
      // .then(res=>{
      //   setSavedList(res.data);
      // })
      // setInputList([]);
    }
  };

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
      <div className="DaySummary">
        <div className="container">
          <div className="row">
            <button onClick={handleAddClick}>Add</button>
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
                    <input/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {/* {savedList.map(listItem =>(
  <li className="list-group">{
  {listItem}
  }
  </li>
))} */}
        </ul>
      </div>
      <button onClick={() => handleItemsSubmit(inputList)}>SUBMIT</button>
    </>
  );
};

export default DaySummary;

// <div className="col-md-6">
// <div className="card summary-card">
//   <div className="card-body">
//     <h5 className="card-title">
//       How did you choose to live today?
//     </h5>

//     <p className="card-text">
//       {inputList2.length ? (
//         inputList2.map((x, i) => {
//           return (
//             <div className="box">
//               <div className="card-body">
//                 <p
//                   class="card-text"
//                   name="Time Block"
//                   placeholder="Enter time block notes"
//                   value={x.timeBlock}
//                   onChange={(e) => handleInputChange2(e, i)}
//                 />
//               </div>
//               <div className="btn-box">
//                 {inputList2.length !== 1 && (
//                   <button
//                     className="mr10"
//                     onClick={() => handleRemoveClick2(i)}
//                   >
//                     Remove
//                   </button>
//                 )}
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div className="box">
//           <input
//             name="Time Block"
//             placeholder="Enter time block notes"
//           />
//           <div className="btn-box">
//             {inputList2.length !== 1 && (
//               <button
//                 className="mr10"
//                 onClick={() => handleRemoveClick2()}
//               >
//                 Remove
//               </button>
//             )}
//             {/*inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>*/}
//           </div>
//         </div>
//       )}
//     </p>
//   </div>
// </div>
// </div>
// <button onClick={handleAddClick2}>Add</button>

// function takeListAndSend(list){
//   if(Array.isArray(list)){
//     console.log(list);
//   }
// }

// takeListAndSend([1,2,3,4])
