import React from 'react'
import { useState } from 'react';
import "./App.css";

const TobeCode = () => {

function App() {
  const [value, setValue] = useState("");

  const [array, setArray] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const def = {
    title: value,
    finished: false,
  };

  const add = () => {
    setArray((prev) => [...prev, def]);
  };

  const del = (name) => {
    const new_array = array.filter((item) => item["title"] !== name);
    setArray(new_array);
  };

  const [editValue, setEditValue] = useState("");

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const [editDetails, setEditDetails] = useState({
    title: "",
    finished: "",
  });
  const edit = () => {
    del(editDetails.title);

    setArray((prev) => [
      ...prev,
      {
        title: editValue,
        finished: editDetails.finished,
      },
    ]);

    toggleEditModal();
  };

  const [editModal, setEditModal] = useState(false);

  const toggleEditModal = (val) => {
    setEditModal(!editModal);
    console.log(val);
  };

  return (
    <div className="App">
      <input onChange={handleChange} type="text" />
      <p onClick={add}> Add </p>

      <br />
      <br />
      <br />
      {array?.reverse().map((item, index) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <p style={item.finished ? { textDecoration: "line-through" } : {}}>
            {item.title}
          </p>
          <p
            onClick={() => {
              toggleEditModal(item.title);
              setEditDetails({ title: item.title, finished: item.finished });
            }}
          >
            Edit
          </p>
          <p onClick={() => del(item.title)}>delete</p>
        </div>
      ))}

      {editModal && (
        <div
          // onClick={toggleEditModal}
          style={{
            position: "fixed",
            left: "0px",
            top: "0px",
            width: "100vw",
            height: "100vh",
            background: "hsla(0, 0%, 0%, 0.27)",
            zIndex: "100",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input onChange={handleEditChange} type="text" />
          <p onClick={() => edit()}>edit</p>
        </div>
      )}
    </div>
  );
}

// export default App;

}
export default TobeCode


const [editValue, setEditValue] = useState("");
const [editDetails, setEditDetails] = useState({
  title: "",
  finished: "",
});

const handleEditChange = (e) => {
  setEditValue(e.target.value);
};

const edit = () => {
  del(editDetails.title);

  setArray((prev) => [
    ...prev,
    {
      title: editValue,
      finished: editDetails.finished,
    },
  ]);

  toggleEditModal();
};

const [editModal, setEditModal] = useState(false);

const toggleEditModal = (val) => {
  setEditModal(!editModal);
  console.log(val);
};

{editModal && (
    <div
      // onClick={toggleEditModal}
      style={{
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "100vw",
        height: "100vh",
        background: "hsla(0, 0%, 0%, 0.27)",
        zIndex: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input onChange={handleEditChange} type="text" />
      <p onClick={() => edit()}>edit</p>
    </div>
  )}
</div>
    
);
