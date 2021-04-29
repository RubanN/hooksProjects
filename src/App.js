import React,{useState} from "react";
import './App.css';
// import HooksToDo from './HooksToDo'
import First from './Components/First'
import Second from './Components/Second'
export default()=> {

  return (
    <div className="App">
      {/* <HooksToDo onSubmit={text=>setTodos([{text,complete:false},...todos])} 
      /> */}
       <First/>
       <Second/>
          
  
            <h1>Hello</h1> 
    </div>
  );
}

// export default App;
