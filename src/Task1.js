import React,{useEffect, useState} from 'react'

function Task1() {
    const [photo,setPhoto]=useState('');

    useEffect(()=>{
        storevalue()
    },[])
    function storevalue(){
        setPhoto('https://shorturl.at/elrtD')
    }

  return (
    <>
    <div className='header'>
    <h1>Task1</h1>
    <p>Here I have made React application where I have written a multiline jsx program for a photo album here I am updating the state with the photo the user has clicked.</p>
    <p>Image Gallery</p>
    </div>
    <div style={{textAlign:'center', margin:'20px'}}>
    <p>Click on an image</p>
    </div>
    <div className='div__arrangement'>
    
    <div>
      <img className='img__display' src='./cat1.jpg'  onClick={()=>setPhoto('./cat1.jpg')}></img>
      </div>
      <div >
        <img className='img__display' src='./cat2.jpg' onClick={()=>setPhoto('./cat2.jpg')}></img>
      </div>
    <div >
        <img  className='img__display'src='./dog1.jpg' onClick={()=>setPhoto('dog1.jpg')}></img>
    </div>
    <div >
        <img  className='img__display' src='./download.jpg' onClick={()=>setPhoto('./download.jpg')}></img>
    </div>

    </div>
    <div className='mid__space'>

    </div>
    <div className='img_photo_res'>
        <img className='img__display' src={photo}></img>
    </div>
    </>
  )
}

export default Task1;
