import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ContactUS from './Pages/ContactUS/ContactUS'
import DashBoard from './Pages/DashBoard/DashBoard'
import Process from './Pages/Process/Process'
import Work from './Pages/Work/Work'
import AboutUS from './Pages/AboutUs/AboutUS'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AboutUS' element={<AboutUS />} />
      <Route path='/ContactUs' element={<ContactUS />} />
      <Route path='/DashBoard' element={<DashBoard />} />
      <Route path='/Process' element={<Process />} />
      <Route path='/Work' element={<Work />} />
    </Routes>
  )
}

export default App