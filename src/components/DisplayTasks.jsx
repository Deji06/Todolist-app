import React from "react";
import { FaTrashAlt } from "react-icons/fa";
// import { CiEdit } from "react-icons/ci";
// import EditTask from "./EditTask";

const DisplayTasks = ({ setTaskArray, taskArray, setEditTaskBar, filterOption, completed}) => {

  const handleCheck = (index) => {
    const updatedTasks = [...taskArray];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updatedTasks[index].status = "completed";
    setTaskArray(updatedTasks);
  };
  
//  delete task function
  const deleteTask = (name) => {
   const newArray = taskArray.filter((task)=> task.name !== name)
    setTaskArray(newArray);
  };


// edit Task function
// const editTask = () => {
//   setEditTaskBar(prev => !prev)
// }
  console.log(taskArray);
  return (
    <>
      {taskArray
      .filter((task) => filterOption === "all" || task.status === filterOption )
      .map((task, index) => {
        return (
          <div className="box_container"
            key={index}
            style={{
              backgroundColor: "#fff",
              width: "500px",
              padding: "10px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="checkbox"
                checked={task.status.completed}
                name="check"
                onChange={() => handleCheck(index)}
              />
              <p style={{  textDecoration: task.completed ? "line-through" : "none"}}>
                {" "}
                {task.name}
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => deleteTask(task.name)}>
                <FaTrashAlt />
              </button>
              {/* <button onClick={editTask}>
                <CiEdit />
              </button> */}
            </div>
            {}
          </div>
        );
      })}
    </>
  );
};

export default DisplayTasks;
