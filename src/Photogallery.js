import React,{useEffect, useState} from 'react'

function Photogallery() {
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
    <p>Image Gallery</p>
    </div>
    <div style={{textAlign:'center'}}>
    <p>Click on an image</p>
    </div>
    <div className='div__arrangement'>
    
    <div>
      <img className='img__display' src='https://t.ly/JoO4-'  onClick={()=>setPhoto('https://t.ly/JoO4-')}></img>
      </div>
      <div >
        <img className='img__display' src='./browncat.webp' onClick={()=>setPhoto('./browncat.webp')}></img>
      </div>
    <div >
        <img  className='img__display'src='https://shorturl.at/hHT37' onClick={()=>setPhoto('https://shorturl.at/hHT37')}></img>
    </div>
    <div >
        <img  className='img__display' src='https://t.ly/OwMOQ' onClick={()=>setPhoto('https://t.ly/OwMOQ')}></img>
    </div>

    </div>
    <div className='mid__space'>

    </div>
    <div className='img_photo_res'>
        <img src={photo}></img>
    </div>
    </>
  )
}

export default Photogallery
