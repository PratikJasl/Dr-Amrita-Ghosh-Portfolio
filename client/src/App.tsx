import './App.css'
import {Route, Routes} from "react-router-dom"
import Navbar from './components/navbar/navbar'
import Home from './components/sections/home'
import Services from './components/sections/services'
import Testimonials from './components/sections/testimonials'
import Community from './components/sections/community'
import Contact from './components/sections/contact'
import Carousel from './components/sections/carasoul'

function App() {
  return (
    <>
      <Navbar/>

      <div className="pt-15">
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Testimonials" element={<Testimonials/>}></Route>
          <Route path="/Community" element={<Community/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </div>
      
      <Carousel />
      <Home/>
      <Services />
      <Testimonials />
      <Community />
      <Contact />
    </>
  )
}

export default App
