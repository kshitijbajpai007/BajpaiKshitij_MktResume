import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';

function AnimatedRoutes() {
  const location = useLocation();
  // Group /work/:category and /work/:category/:slug under the same route transition key
  const routeKey = location.pathname.startsWith('/work/')
    ? location.pathname.split('/').slice(0, 3).join('/')
    : location.pathname;
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={routeKey}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:category" element={<CategoryPage />} />
        <Route path="/work/:category/:slug" element={<CategoryPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-neutral-800 selection:text-white">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <FloatingCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
