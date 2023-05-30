import React, { useState } from "react";

const Addnewtodo = ({ alltodos, setalltodos }) => {
  const [inputchange, setinputchange] = useState("");
 const handleSubmit = (e) => {
   e.preventDefault();
   if (inputchange !== "") {
     // store all todos with the previous and new value
     setalltodos([...alltodos, inputchange]);
     //to make the box empty
     setinputchange("");
   }
 };
  return (
    <div>
      <form onSubmit={handleSubmit} className="Add-new-todo">
        <input className="border border-black h-8 w-[259px]"
          type="text"
          value={inputchange}
          onChange={(e) => setinputchange(e.target.value)}
        />
        <button className="bg-red-500 ml-6 py-4 px-10 text-white hover:bg-black">add</button>
      </form>
    </div>
  );
};

export default Addnewtodo;
