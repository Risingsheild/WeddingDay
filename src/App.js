
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { RSVP } from './pages/RSVP';
import { HowWeMet } from './pages/HowWeMet';

import './App.css';
import './styles/Navbar.css';
import './styles/WeddingCountdown.css';
import background from './images/Wedding-background.avif';


export default function App() {
  return (
    <Router>
       <div className="app-background" style={{ backgroundImage: `url(${background})` }} >
       <div className="overlay"></div>
       <div className="app-content">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/rsvp" className="nav-link">RSVP</Link>
          <Link to="/how-we-met" className="nav-link">How We Met</Link>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/how-we-met" element={<HowWeMet />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}
