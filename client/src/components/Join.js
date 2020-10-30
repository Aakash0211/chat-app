import React,{useState} from 'react'
import './Join.css'
import {Link} from 'react-router-dom'
const Join=()=>{
    const [name,setName]=useState('')
    const [room,setRoom]=useState('')
    return (
        <div className='joinOuterContainer'>
            <div className="joinInnerContainer">
              <h1 className='heading'>Join</h1>
              <div><input className="joinInput" placeholder='Name' type="text" onChange={(event)=>setName(event.target.value)}></input></div>
              <div><input className="joinInput mt -20" placeholder='Room' type="text" onChange={(event)=>setRoom(event.target.value)}></input></div>
              <Link onClick={e=>(!name || ! room ) ? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
               <button className={'button mt-20'} type="submit">JOIN</button>
              </Link>
            </div>
            
        </div>   
         );
}

export default Join
