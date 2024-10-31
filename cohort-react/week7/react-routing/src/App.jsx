import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {

  return (
    <div>
      <div>
        <button onClick={() => {
          window.location.href = "/";
        }}>Landing page</button>

        <button onClick={() => {
          window.location.href ="/dashboard";
        }}>Dashboard</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
