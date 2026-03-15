import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import  Navbar from "./components/Navbar";
import  Home from "./components/Home";
import  About from "./components/About";
import  Services from "./components/Services";
import  OurPlan  from "./components/OurPlan";
import  Contact from "./components/Contact";
import  BMICalculator  from "./components/BMICalculator";
import Footer from "./components/Footer";
import Testimonials from './components/Testimonials';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Testimonials />
      <OurPlan />
      <Contact />
      
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<><About /></>} />
          <Route path="/services" element={<><Services /><Footer /></>} />
          <Route path="/pricing" element={<><OurPlan /><Footer /></>} />
          <Route path="/testimonials" element={<><Testimonials /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
        <ToastContainer theme="dark" position="top-center" />
      </Router>
    </>
  );
};

export default App;
