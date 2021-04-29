import React,{useState} from "react";
import './App.css';
import HooksToDo from './HooksToDo'

export default()=> {
const [todos,setTodos] = useState([])
  return (
    <div className="App">
      <HooksToDo onSubmit={text=>setTodos([{text,complete:false},...todos])} 
      />
          <div>
            {todos.map(({text})=>(
              <div key={text}>{text}</div>
            ))}
            </div>    
    </div>
  );
}

// export default App;
