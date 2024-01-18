import React from "react";
import './App.css'
import './index.css'
import Home from "./components/pages/Homes";
import Contactus from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import Blogs from "./components/pages/Blogs";
import Volunteer from "./components/pages/Volunteer";
import Projects from "./components/pages/Projects";
import FAQ from "./components/pages/FAQ";
import Donations from "./components/pages/Donations";
import {BrowserRouter as Router, Link, Routes,Route} from "react-router-dom";
import VolunteerForm from './components/pages/Volunteer/VolunteerForm'


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
       <Route path="/faq" element={<FAQ />} />

        <Route path="/donations" element={<Donations />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
