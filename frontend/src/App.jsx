import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes> 
    </Router>
  );
}

export default App;
