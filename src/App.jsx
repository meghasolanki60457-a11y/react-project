import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Courses from "./pages/Courses";

import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Found from "./pages/Found";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<Courses />} />
      
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<Found />} />


      
  
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;