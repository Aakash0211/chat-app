import React from 'react'
import './InfoBar.css'
import closeIcon from './closeIcon.png'
import onlineIcon from './onlineIcon.png'
const InfoBar = ({room}) => (
       <div className="infoBar">
          <div className="leftInnerContainer">
           <img className="onlineIcon" src={onlineIcon} alt='online Icon' />
           <h3>{room}</h3>
          </div>            
          <div className='rightInnerContainer'>
           <a href='/'><img src={closeIcon} alt=''/></a>
          </div>
        </div>
    
)

export default InfoBar
