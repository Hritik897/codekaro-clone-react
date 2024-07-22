import React from 'react'
import './Freecourses.css'
import Img2 from '../../../public/ck_header.png'
import { Link } from 'react-router-dom'
const Freecourses = () => {

  const styles = {color:'blue', backgroundColor:'#71b4eb', border:'none', borderRadius:'8px',padding:'3px 20px', fontSize:'12px'}

  return (
    <div className='freecourse'>
      <h1>Learn what fascinates you for free</h1>
      <p className='para'>More than 9000 students have attended our Masterclasses and loved them.</p>

      <Link to='/'>
        <div className='card'>
          <img src={Img2} alt="" />
          <div className='card-content'>
            <p style={{  color: 'black', fontSize: '18px' }}>Machine Learing Bootcamp</p>
            <p style={{ paddingTop: '10px',color: 'black', fontSize: '16px', fontWeight: '600'}}>From Sat, 12 Mar <span style={{ color: 'grey' }}>at 06:00 PM </span>  </p>
            <p style={{color:'black', fontSize:'14px'}}>Schedule: 06:00 to 07:00 PM</p>
            <button style={{color:'green', backgroundColor:'#6bfa6b', border:'none', borderRadius:'8px', padding:'3px 20px',fontSize:'12px', marginRight:'10px'}}>LiveSession</button>
            <button style={styles}>Free</button>


          </div>
        </div>
      </Link>
    </div>
  )
}

export default Freecourses