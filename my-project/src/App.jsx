import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Agence from './Pages/Agence.jsx'
import Project from './Pages/Project.jsx'
import Home from './Pages/Home'
import NavBar from './Component/Common/NavBar.jsx'
import NavMenu from './Component/Common/NavMenu.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <NavBar onMenuOpen={() => setIsMenuOpen(true)} />
      {isMenuOpen && <NavMenu onClose={() => setIsMenuOpen(false)} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Agence' element={<Agence />} />
        <Route path='/Projects' element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
