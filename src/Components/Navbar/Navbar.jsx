import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar-parent'>
      <div className="logo">
         <img src="/Logo-main.png" alt="" /><span className="logo-small">
              SUSTAINABLITY</span>
              <img src="/Navbarseprator.png" alt="" />
      </div>
      <div className="navbar-elements">
       <li>People<span className='navbar-element-seprator'>|</span></li>
       <li>Planet<span className='navbar-element-seprator'>|</span></li>
       <li>Community<span className='navbar-element-seprator'>|</span></li>
       <li>Governance<span className='navbar-element-seprator'>|</span></li>
       <li>Sustainability Strategy</li>
      </div>
    </div>
  )
}

export default Navbar
