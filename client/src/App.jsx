import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/about'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute copy'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'



export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route elememt={<PrivateRoute/>}>
            <Route path="/DashBoard" element={<DashBoard />} /> 
        </Route>
        <Route elememt={<OnlyAdminPrivateRoute/>}>
            <Route path="/create-post" element={<CreatePost />} /> 
            <Route path="/update-post/:postId" element={<UpdatePost />} /> 
        </Route>
        <Route path='/post/:postSlug' element={<PostPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
