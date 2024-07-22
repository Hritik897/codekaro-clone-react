import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Freecourses from './Component/FreeCourses/Freecourses'
import Courses from './Component/Courses/Courses'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Freecourses' element={<Freecourses/>} />
      <Route path='/Courses' element={<Courses/>} />
      <Route path='/Freecourses' element={<Freecourses/>} />


      </Routes>
    </BrowserRouter>

    <Footer/>
     


    </>
   
  )
}

export default App
