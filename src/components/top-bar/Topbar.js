import React from 'react';
import './Topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
        <div className='topLeft'>
            <span className='logo'>ESR Tech</span>
        </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                 <NotificationsNone/>
                 <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
                 <Language/>
                 <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
                 <Settings/>
                 <span className='topIconBadge'>2</span>
                </div>
                <img src ="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"  alt="" className='topAvatar'/>


            </div>

            
        

        </div>
    </div>
  )
}

export default Topbar