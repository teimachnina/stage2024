import React, { useState } from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { Banner } from '../Banner'
import { Products } from '../Products'
import {About} from'../About'

const Navbar = ({ theme, setTheme, toggleForm, setIsOpenBenner, setIsOpenProducts , setIsOpenAbout }) => {
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
      <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' />
      <ul>
        <li onClick={() => {setIsOpenBenner(true),setIsOpenAbout(false) ,setIsOpenProducts(false) }}>Home </li>
        <li onClick={() => { setIsOpenProducts(true), setIsOpenBenner(false) }} >Products</li>
        <li>Features</li>
        <li onClick={() => {setIsOpenAbout(true) , setIsOpenBenner(false) , setIsOpenProducts(false) }}>About</li>
        <li onClick={() => {toggleForm('login') ,setIsOpenAbout(false) , setIsOpenBenner(false) , setIsOpenProducts(false) }}>Login</li>
        <li onClick={() => {toggleForm('signup') , setIsOpenAbout(false) , setIsOpenBenner(false) , setIsOpenProducts(false)}}>Sign Up</li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>
      <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />

    </div>
  )
}

export default Navbar;
