import React from "react";
// import Task from './Task'
// import { useState } from 'react'

const Body = ({setShowTaskBar, filterOption , setFilterOption}) => {

  // const [filterOption, setFilterOption] = useState("all")

  const addTaskBtn = () => {
    setShowTaskBar((prevState) => !prevState);
  };
  
  console.log(filterOption)

  return (
    <div style={{ width: "600px", margin: "10px auto" }}>
      <div className="btn--con"  style={{ display: "flex", justifyContent: "space-between"}}>
        <button
          style={{
            backgroundColor: "#646FF0",
            outline: "none",
            cursor: "pointer",
            padding: "15px 30px",
            borderRadius: "5px",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
          }}
          onClick={addTaskBtn}
        >
          {" "}
          Add task
        </button>

        <select className="select--container"
          name="options"
          style={{
            backgroundColor: "#CCCDDE",
            outline: "none",
            cursor: "pointer",
            borderRadius: "5px",
            color: "#585858",
            fontSize: "1rem",
            padding: "7px 30px",
          }}
          onClick={e => setFilterOption(e.target.value)}
        >
          <option value="all">All</option>
          <option value="incomplete">incomplete</option>
          <option value="completed">completed</option>
        </select>
      </div>
      <div
        className="todo--container"
        style={{
          backgroundColor: "#ECEDF6",
          height: "100px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <span>no todos</span>
      </div>
    </div>
  );
};

export default Body;
