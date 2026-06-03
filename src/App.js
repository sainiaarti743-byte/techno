import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission ';
import Contact from './pages/Contact';
import Facility from './pages/Facility';
import DirectorSection from './pages/DirectorSection';
import PrincipalMessage from './pages/PrincipalMessage';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/director-section" element={<DirectorSection />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};




