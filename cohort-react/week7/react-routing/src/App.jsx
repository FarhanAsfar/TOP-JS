import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import {lazy, Suspense, startTransition} from 'react'

const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))

function App() {
  
  return (  
    <div> 
      
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/' element={<Landing />}></Route>
          </Routes>
        </Suspense>
                
      </BrowserRouter>
    </div>
  )
}

function Navbar(){
  const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => {
          startTransition(() => {
            navigate("/");
          })
        }}>Landing page</button>

        <button onClick={() => {
          startTransition(() => {
            navigate("/dashboard");
          })
        }}>Dashboard</button>
    </div>
  )
}

export default App
