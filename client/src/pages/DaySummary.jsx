import React, { useEffect, useState } from "react";
 
function App() {
  // const [inputList, setInputList] = useState([{ timeBlock: ""}]);
  const [inputList, setInputList] = useState([]);
  const [timeBlock, setTimeBlock] = useState({timeblock: ""});

  const handleInputChange = (e, index=0) => {
    const { name, value } = e.target;
    // const list = [...inputList];
    setTimeBlock(e.target.value)
    // list[index][name] = value;
    // setInputList(list);
  };
   
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
   
  // handle click event of the Add button
  const handleAddClick = () => {

    
    setInputList([...inputList, timeBlock]);
  };
 
  return (
    <div className="App">
      {inputList.length ? inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="Time Block"
              placeholder="Enter time block notes"
              value={x.timeBlock}
              onChange={e => handleInputChange(e, i)}
            />
          <div className="btn-box">
            {inputList.length !== 1 && <button
              className="mr10"
              onClick={() => handleRemoveClick(i)}>Remove</button>}
            {/* inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button> */}
          </div>
          </div>
        );
      }):<div className="box">
      <input
        name="Time Block"
        placeholder="Enter time block notes"
        // value={x.timeBlock}
        // onChange={e => handleInputChange(e, i)}
      />
    <div className="btn-box">
      {inputList.length !== 1 && <button
        className="mr10"
      onClick={() => handleRemoveClick()}>Remove</button>}
      {/*inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>*/}
    </div>
    </div>}
    <button onClick={handleAddClick}>Add</button>
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
}
 
export default App;

// import React from "react";

// const DaySummary = () => {

//   const [inputList, setInputList] = useState([{ timeBlock: ""}]);
//   {inputList.map((x, i) => {
    
//   })}
//   return (
//     <div className="DaySummary">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card summary-card">
//               <div className="card-body">
//                 <h5 className="card-title">How do you want to live today?</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
//                 <p className="card-text">

//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card summary-card">
//               <div className="card-body">
//                 <h5 className="card-title">How did you choose to live today?</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
//                 <p className="card-text">
//                 <button className="btn btn-primary">New Time Block</button>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };


// export default DaySummary;