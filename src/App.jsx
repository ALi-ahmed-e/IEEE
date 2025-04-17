import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Committees from './pages/Committees'
import Workshops from './pages/Workshops'
import Events from './pages/Events'
import OurTeams from './pages/OurTeams'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
      <div className=' '>
        <BrowserRouter>
        <Header/>
        
        
        <Routes>

          <Route path='/' element={<Home />} />    

          <Route path='/committees' element={<Committees />} />    


          <Route path='/workshops' element={<Workshops />} />               

          <Route path='/events' element={<Events />} />

          <Route path='/teams' element={<OurTeams />} />

          <Route path='/contact' element={<Contact />} />


        </Routes>
        
        </BrowserRouter>
      </div>
    </>
  )
}

export default App


