import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import ScrollToTop from './Componets/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Service';
import Diagnostics from './pages/Diagnostics';
import Consultancy from './pages/Consultancy';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;