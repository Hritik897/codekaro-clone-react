import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Loginform from '../Loginform/Loginform'
const Navbar = () => {

  const [click,setClick] = useState(false)

const  handleClick = ()=>{
     setClick(true)
}

const  handleCancel = ()=>{
  setClick(false)
}


  const style = {
color:'black' , textDecoration:'none'
  }
  
  return (
    <>
      <div className='navbar'>
        <div  className='navbar_left'>
          <h1><Link to='/' style={style}> codekaro</Link></h1>
          <div className='nav'>
          <Link to='/Freecourses' className='navbtn'>Free Courses</Link>
          <Link to='/Courses' className='navbtn'>Courses</Link>
          <Link to='/About us' className='navbtn'>About us</Link>
          </div>
         
        </div>

        <div className='navbar_right'>
          <Link to='/' className='navbtn' onClick={handleClick}>Register </Link>
          <Link to='/' className='loginbtn'>Login  </Link>
        </div>
      </div>
      {click ? <Loginform onCancel={handleCancel}/> : null  }
    </>




  )
}

export default Navbar