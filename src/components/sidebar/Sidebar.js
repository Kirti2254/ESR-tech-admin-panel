import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import {LineStyle,Group,
LocalPostOffice,Book,ViewList,ContactMail} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Dashboard</h3>
            <ul className='sidebarList'>
            
                <li className='sidebarListItem active'>
                 <LineStyle className='sidebarIcon'/>
                 Home
                </li>
            </ul>
        </div>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Quick Menu</h3>
            <ul className='sidebarList'>
            <Link to = '/users' className='link'>
                <li className='sidebarListItem'>
                 <Group className='sidebarIcon'/>
                Users
                </li>
                </Link>
            </ul>
        </div>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Notifications</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                 <LocalPostOffice className='sidebarIcon'/>
                Message
                </li>
                <li className='sidebarListItem'>
                 <ContactMail className='sidebarIcon'/>
                 Mail
                </li>
            </ul>
        </div>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Blogs</h3>
            <ul className='sidebarList'>
            <Link to = '/blogs' className='link'>
                <li className='sidebarListItem'>
                 <Book className='sidebarIcon'/>
                 Blog
                </li>
                </Link>
                
                <li className='sidebarListItem'>
                 <ViewList className='sidebarIcon'/>
                 Blog List
                </li>
                
            </ul>
        </div>
         <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Testimonial</h3>
            <ul className='sidebarList'>
               
                <li className='sidebarListItem'>
                 <Book className='sidebarIcon'/>
                 Testimonial
                </li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default Sidebar