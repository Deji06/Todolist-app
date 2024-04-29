import React from "react";
import { useState } from "react";

const SetTask = ({ setTaskArray, taskArray, setShowTaskBar ,userInputValue, setUserInputValue, filterOption, }) => {
  // const [userInputValue, setuserInputValue] = useState("");

  const [completed, setCompleted] = useState("incomplete")
  // const[]

  const handleUserInput = (event) => {
    event.preventDefault();
    //  console.log(userInputValue);
    setUserInputValue(event.target.value);
  };
  
  const addTask = () => {
    console.log(taskArray);
    console.log(userInputValue);
    // console.log(taskArray.includes(userInputValue));


    userInputValue==='' ? alert('input task'):setTaskArray((prevuserInputValue) => {
            return [
              ...prevuserInputValue,
              { name:userInputValue, completed: completed === "completed", status: completed },
            ];
          });
      setShowTaskBar(false);
    }

    console.log({completed})

  const cancelTask = () => {
    setShowTaskBar(false);
  };

  return (
    <>
      <div
        className="form_container"
        style={{
          width: "500px",
          boxShadow: " 0 0 20px rgba(0,0,0,.2)",
          position: "absolute",
          left: "450px",
          top: "200px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", color: "#646681" }}>Add to do</h3>

        <form>
          <label htmlFor="inputTask">Title</label>
          <input
            id="inputTask"
            type="text"
            value={userInputValue}
            onChange={handleUserInput}
          />
          <label htmlFor="option">status</label>
          <select name="" id="" onChange={(e) => setCompleted(e.target.value)}>
            <option value="incomplete">incomplete</option>
            <option value="completed">complete</option>
          </select>
        </form>

        <div
          className="btn-container"
          style={{ display: "flex", gap: "2rem", marginTop: "20px" }}
        >
          <button
            style={{
              backgroundColor: "#646FF0",
              outline: "none",
              cursor: "pointer",
              padding: "15px 30px",
              borderRadius: "5px",
              border: "none",
              color: "#fff",
            }}
            onClick={addTask}
          >
            Add task
          </button>

          <button
            style={{
              backgroundColor: "#646FF0",
              outline: "none",
              cursor: "pointer",
              padding: "15px 30px",
              borderRadius: "5px",
              border: "none",
              color: "#fff",
            }}
            onClick={cancelTask}
          >
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default SetTask;
