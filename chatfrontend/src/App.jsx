import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './component/auth/Login'
import { Register } from './component/auth/Register'
import { Chatbox } from './component/chatbox/chatbox'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/chat' element={<Chatbox />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
