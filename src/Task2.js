import React, { useState } from 'react'

function Task2() {
    const[newstate,setNewstate]=useState(false);
  return (
    <div className={`${newstate}?"task2div":"newdiv"`}>
      Task 2
      <div  onClick={()=>setNewstate(!newstate)}>
{newstate?"true":"false"}
      </div>
    </div>
  )
}

export default Task2
