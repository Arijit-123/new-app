import React, { useState,useEffect } from 'react'

function Task3and4() {
const [data,setdata]=useState();
useEffect(() => {
    fetchdata()
}, [])

async function fetchdata(){
    const data=await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20");
const newdata=await data.json();
setdata(newdata.results);
}

  return (
    <div>
    <h1>Task 3 and Task 4</h1>
    <p>Here I have used asynchronous function where I am calling it using a useffect and then fetching a data from it. This was regarding task 4. Below I am using map function which is a ES6 js function and am iterating through all its values.</p>
      <table>
      <tr>
    <th>City</th>
    <th>Country</th>
    <th>TimeZone</th>
    <th>Lattitude</th>
    <th>Longitude</th>
  </tr>
{data?.map((item)=>(
  <>
  <tr>
   <td className='border border-black flex justify-center items-center' > {item.ascii_name}</td>
    <td className='border border-black'>{item.cou_name_en}</td>
    <td className='border border-black flex justify-center items-center'>{item.timezone}</td>
    <td className='border border-black'>{item.coordinates.lat}</td>
    <td className='border border-black'>{item.coordinates.lon}</td>
  </tr>
  </>
  ))
}
 
      </table>
    </div>
  )
}

export default Task3and4
