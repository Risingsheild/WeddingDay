import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { RSVP } from './pages/RSVP';
import { HowWeMet } from './pages/HowWeMet';
import { Location } from './pages/Location';
import { PageTransition } from './components/PageTransition';
import { FloatingDecorations } from './components/FloatingDecorations';

import './App.css';
import './styles/Navbar.css';
import './styles/WeddingCountdown.css';

function NavLinks() {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <Link
        to="/"
        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
      >
        Home
      </Link>
      <Link
        to="/location"
        className={`nav-link ${location.pathname === '/location' ? 'active' : ''}`}
      >
        Location
      </Link>
      <Link
        to="/gallery"
        className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
      >
        Gallery
      </Link>
      <Link
        to="/rsvp"
        className={`nav-link ${location.pathname === '/rsvp' ? 'active' : ''}`}
      >
        RSVP
      </Link>
      <Link
        to="/how-we-met"
        className={`nav-link ${location.pathname === '/how-we-met' ? 'active' : ''}`}
      >
        How We Met
      </Link>
    </nav>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="app-background" style={{ backgroundImage: `url(/images/AlternativeBackground.webp)` }}>
      <div className="overlay"></div>
      <FloatingDecorations />
      <div className="app-content">
        <NavLinks />
        <AnimatePresence mode="wait">
          <PageTransition>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/location" element={<Location />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/how-we-met" element={<HowWeMet />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
