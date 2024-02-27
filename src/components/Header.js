import {Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications} from '@material-ui/icons'

import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'

const Header = ()=>{
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="logo-career.jpeg" alt="logo"/>
                <div className='header__search'>
                <Search/>
                <input type="text" placeholder='Search'/>
                </div>
            </div>
        
        <div className='header__right'>
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg" title="me"/> 
        </div>
        </div>
        
)}

export default Header