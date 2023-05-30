import { useState } from "react";
import "./App.css";
import Addnewtodo from "./components/addnewtodo";
import Singletodo from "./components/singletodo";

function App() {
  const [alltodos, setalltodos] = useState([])

  const handleDelete= ()=>{
    setalltodos(alltodos.filter((item)=>item !==item))
  }
  return (
    <div className="App    bg-yellow-900">
      <h1 className="text-4xl text-purple-400">To Do Application</h1>
      <Addnewtodo alltodos={alltodos} setalltodos={setalltodos} />
      {alltodos.map((item)=>(

      <Singletodo item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default App;
