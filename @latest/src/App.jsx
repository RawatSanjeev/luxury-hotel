import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from'./components/Home/home';
import Navbar from'./components/Navbar/navbar';
import Footer from'./components/Footer/footer';
import './App.css'
import AboutUs from './components/aboutUs/aboutUs';
import Contact from './components/contact/Contact';
import Villas from './components/Villas/Villas';
import SingleVilla from './components/Villas/singleVilla';

const App = () => {
  return (
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
            <Route path="/villas" element={<Villas/>}/>
            <Route path="/villa/:id" element={<SingleVilla/>} />
          </Routes>
          <Footer />
        </Router>
      
  )
  

}

export default App;
