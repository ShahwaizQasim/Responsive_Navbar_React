import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/navbar'
import Home from './Pages/home'
import Blog from './Pages/blog'
import Contact from './Pages/contact'
import About from './Pages/about'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
