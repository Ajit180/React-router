import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {

   
  const [count,setCount]=useState(0);
  //UseRef Concept Use Here
  //let a = 0; 
 //useREf 
 console.log("Components is Rerendered!");
 
 const a = useRef(0);
 

 useEffect(()=>{
 //// Before useRef
  //a = a+1;
   //console.log(`Rendering and the value of a is ${a}`); 
   // if i didn't use the useRef here then when this useEffect once it run then the value of a = 1 after
   // each rendering the value of a is not persist it will not change so i have to use the useref

  //  After Using the UseRef
   a.current = a.current +1
   console.log(`Rendering and the value of a is ${a.current}`); // a = 1,2,3,4,5,6......
 })
  

  return (
    <div>
       <h1>This is the Contact Page</h1>
       <button className='bg-blue-500 text-black px-4 py-2 rounded border-2 border-black'
        onClick={()=>setCount((count)=>count+1)}>Count is {count}</button>
        <br />
       <Link to="/contact">Contact</Link>
       
    </div>
  )
}

export default About
