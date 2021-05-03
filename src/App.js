import React,{useState} from "react";
import './App.css';
import SecondUseffect from "./Components/SecondUseffect";
import FirstUseffect from "./FirstUseffect";
// import HooksToDo from './HooksToDo'
// import First from './Components/First'
import LoginForm from "./Components/LoginForm"

export default()=> {
  const adminUser={
    email:'ruban8801@gmail.com',
    password:'Ruban@123,'
  }
const [user,setUser] = useState({name:"",email:""});
const [error,setError]= useState("");

const Login = details =>{
  console.log(details);
  if(details.email == adminUser.email && details.password == adminUser.password){
    alert("user logged in")
  }else{
    alert("Sorry Ii did not match with user ID")
  }
}

const Logout =()=>{
  console.log("Logout");
}
  return (
    <div className="App">
      {/* <HooksToDo onSubmit={text=>setTodos([{text,complete:false},...todos])} 
      /> */}
       <FirstUseffect name="ruban"/>          
      <SecondUseffect/>
      {(user.email !="")?(
        <div className="welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
            
    </div>
  );
}

