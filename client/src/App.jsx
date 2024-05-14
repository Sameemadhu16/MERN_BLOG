import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/about'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/SignUp" element={<SignUp />} />

      </Routes>

    </BrowserRouter>
  )
}
