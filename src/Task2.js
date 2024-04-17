import React, { useState } from 'react'

function Task2() {
    const[newstate,setNewstate]=useState(false);
  return (
    <>
    <h1>Task 2</h1>
    <p>Here I have done conditional rendering and I am conditionally changing the backhground colour using the classname and also the text within the div. </p>
    <div className={newstate?'task2div':'newdiv'} onClick={()=>setNewstate(!newstate)}>
   
      
{newstate?"true":"false"}
     
    </div>
    </>
  )
}

export default Task2
