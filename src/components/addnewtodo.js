import React, { useState } from "react";

const Addnewtodo = ({ alltodos, setalltodos }) => {
  const [inputchange, setinputchange] = useState("");
  const Handlesubmit = (e) => {
    e.preventDefault();
    if (inputchange !== "") {
      // store all todos with the previous and new value
      setalltodos([...alltodos, inputchange]);
      //to make the box empty
      setinputchange("");
    }
  };

  return (
    <form onSubmit={Handlesubmit} className="Add-new-todo">
      <input
        className="border border-black h-8 w-[259px]"
        // for removing the console.log error and also changing the value of input box to null
        value={inputchange}
        // setting the value for input change ( same as everything written in the input box )
        onChange={(e) => setinputchange(e.target.value)}
        type="text"
      />

      <button
        type="submit"
        className="bg-red-500 ml-6 py-1 px-4 text-white hover:bg-black"
      >
        Add
      </button>
    </form>
  );
};

export default Addnewtodo;
