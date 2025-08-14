import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/util/NavBar'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './css/App.css'

function App() {
  return (
    <div>
      <NavBar />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
