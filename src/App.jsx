import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Example from './pages/Example';
import About from './pages/About';
import Footer from './components/Footer';
import Button from './components/Button';

const App = () => {
  const isPricingPage = window.location.pathname === '/pricing';

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/example" element={<Example />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;