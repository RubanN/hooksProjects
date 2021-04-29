import React,{useState}from "react";

export default()=>{
    const [count,setCount] = useState(0);
    return(
        <div>
            {count}
            <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
            <button onClick={()=>setCount((prev)=>prev-1)}>Decrement</button>
        </div>
    )
}