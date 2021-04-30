import React,{useState} from "react";
import './App.css';
import FirstUseffect from "./FirstUseffect";
// import HooksToDo from './HooksToDo'
// import First from './Components/First'


export default()=> {

  return (
    <div className="App">
      {/* <HooksToDo onSubmit={text=>setTodos([{text,complete:false},...todos])} 
      /> */}
       <FirstUseffect name="ruban"/>          
  
            
    </div>
  );
}

