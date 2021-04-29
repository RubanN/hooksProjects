import React, {useState} from 'react';

export default()=>{
    const [name,setName] = useState("")

    
    return(
            <label className="header-name">
                <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onClick={(e)=>e.target.setSelectName(0,e.target.value.length)}
                placeholder="untitled"
                />
            </label>
    )
}