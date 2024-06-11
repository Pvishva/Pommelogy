import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/Signup'
// import Home from './components/Home'

function App() {
  return (
    <Router>
      {/*<Header />*/}
      {/* <Home /> */}
      <SignUp />
      <Routes>
        {/*<Route path='/' exact component={Home} />*/}
        <Route path='/signup' exact component={SignUp} />
      </Routes>
    </Router>
  )
}

export default App
