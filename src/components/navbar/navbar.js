import React from 'react';
import './navbar.css'
import image from '../../assets/logo.png'
import menu from '../../assets/menu.png'
export default function Nav() {
    
  return <div className='nav'>
      <img className='sign' src={image} alt="logo" />
      <div>
          <ul className='ul'>
              <li className='item'>Services</li>
              <li className='item'>Marketplace</li>
              <li className='item'>Transport Directory</li>
              <li className='item'>Blogs</li>
              <li className='item'>Company</li>
              <li className='item'>English</li>
              <li><button className='butto'><p className='parr'>Login/signup</p></button></li>
              <img src={menu} />   
          </ul>
      </div>
  </div>;
}
