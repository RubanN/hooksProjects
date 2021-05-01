import {useEffect,useState} from 'react'


function SecondUseffect() {
   const [count,setCount] = useState(0)

   useEffect(() =>{
       document.title=`You click me${count}Times`
   })
   const increment=()=>{
       setCount(count+1)
   }
    return (
        <div>
   <p>You clicked {count}Times</p>           
   <button onClick={increment}>Click</button>
        </div>
    )
}

export default SecondUseffect
