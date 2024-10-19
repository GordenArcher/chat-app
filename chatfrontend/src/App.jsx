import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './component/auth/Login'
import { Register } from './component/auth/Register'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          {/* <Route path='/chat' element={<Register />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
