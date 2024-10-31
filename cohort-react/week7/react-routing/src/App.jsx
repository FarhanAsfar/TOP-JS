import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
