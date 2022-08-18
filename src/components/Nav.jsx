import React from 'react'
import logo from '../images/TrollFace.png';
const Nav = () => {
  return (
    <div className='nav'>
     
          <img src={logo} alt='logo' />
          <span className='right-text'>Meme Generator</span>
         

    </div>
  )
}

export default Nav