import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Learn from "./pages/Learn";
import Linkedin from "./pages/Linkedin";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/learn" element={<Learn/>}/>
        <Route path="/linkedin" element={<Linkedin/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
