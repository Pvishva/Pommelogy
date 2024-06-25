import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Search from './components/Search'
import Variety from './components/Variety'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/variety' element={<Variety />} />
      </Routes>
    </Router>
  )
}

export default App
