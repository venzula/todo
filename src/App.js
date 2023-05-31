import { useState } from "react";
import "./App.css";
import Addnewtodo from "./components/addnewtodo";
import Singletodo from "./components/singletodo";

function App() {
  const [alltodos, setalltodos] = useState([]);
  const handledelete = (item) => {
    setalltodos(alltodos.filter((x) => x !== item));
  };
  return (
    <div className="App  bg-yellow-900">
      <h1 className="text-4xl text-purple-400">To Do Application</h1>
      <Addnewtodo alltodos={alltodos} setalltodos={setalltodos} />
      {alltodos.length > 0 ? (
        //we are mapping through all of our todos and then passing the item as a prop
        alltodos.map((item) => (
          <Singletodo item={item} handledelete={handledelete} />
        ))
      ) : (
        <p>please add a todo</p>
      )}
    </div>
  );
}

export default App;
