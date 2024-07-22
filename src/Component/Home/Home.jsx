import React from 'react'
import Img1 from '../../../public/girl.png'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
<>
<div className="hero_section">
<img src={Img1} alt="" />
<h1>Improve your coding skills with <span style={{color:'red'}}> live Coding classes</span></h1>
<p>There are 72M students learning to code around the world. We try to make learning more accessible, equitable and more seamless for them.</p>
<Link to="/" className='hero_section_btn'>Start Learning For Free</Link>
</div>

</>  )
}

export default Home