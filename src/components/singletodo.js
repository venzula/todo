import React from "react";

const Singletodo = ({ item, handledelete }) => {
  return (
    <div className="single-todo">
      <div>{item}</div>
      <button
        //we are using onclick method and in the onclick method we are creating an anonomous arrow function and we are using handledelete method
        onClick={() => handledelete(item)}
        className="delete-button"
        type="submit"
      >
        X
      </button>
    </div>
  );
};

export default Singletodo;
