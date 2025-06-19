import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import LinkedInToClientSystem from "./pages/Linkedin";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Learn from "./pages/Learn";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/linkedin" element={<LinkedInToClientSystem/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/learn" element={<Learn/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
