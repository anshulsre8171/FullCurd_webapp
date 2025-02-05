
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Component/Navbar'
import { Register } from './Component/Register'
import { View } from './Component/View'
import { Edit } from './Component/Edit'
import Login from './Component/Login'
import { Home } from './Component/Home'
import { Student } from './Component/Student'
import { Dashboard } from './Component/Dashboard'
import { Footer } from './Component/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/studentreg' element={<Student />} />
          <Route path='/view' element={<View />} />

          <Route path='/edit/:_id' element={<Edit />} />
          <Route path='*' element={<h1>page not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
