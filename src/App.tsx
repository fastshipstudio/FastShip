import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


const HomePage = () => (
  <>
    <Hero />
    <Brands />
    <Reviews />
    <FAQ />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="font-['Plus_Jakarta_Sans'] tracking-tight">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App