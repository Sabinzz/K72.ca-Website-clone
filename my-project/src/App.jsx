import { useState } from 'react'


import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Agence from './Pages/Agence.jsx'
import Project from './Pages/Project.jsx'
import Home from './Pages/Home'
import NavBar from './Component/Common/NavBar.jsx'
import NavMenu from './Component/Common/NavMenu.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
    <NavMenu/>
    {/* <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/Agence' element={<Agence/>}></Route>
      <Route path='/Projects' element={<Project/>}></Route>
    </Routes> */}
        </BrowserRouter>
 
    </>
  )
}

export default App
