import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  
  return (  
    <div> 
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Navbar(){
  const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>
    </div>
  )
}

export default App
