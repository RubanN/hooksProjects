import React,{useEffect} from 'react'

function FirstUseffect({name}) {
    const message = `Hello ,${name}!`; //Calculates output 
    useEffect(() =>{
        // This is react hooks way of calling document title method
        document.title ="Greetings page";
    },[])
    
    return (
        <div>
          {message}   
        </div>
    )
}

export default FirstUseffect
