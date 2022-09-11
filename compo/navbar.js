import React from 'react'
import Master from '../pages/master/index'
import Navbar_Style from '../styles/navbar.module.css'
function Navbar() {
  return (
    <div>
      <div className={Navbar_Style.navbar_Main}>
        <Master />
      </div>
    </div> 
  )
}

export default Navbar
