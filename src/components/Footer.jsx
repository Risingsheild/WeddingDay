import { motion } from 'framer-motion';
import '../styles/Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="wedding-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Nick & Katie</h3>
                    <p className="wedding-date">April 25, 2026</p>
                    <p className="wedding-location">Woodinville, Washington</p>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <a href="mailto:wellsnick3@gmail.com">Nick: wellsnick3@gmail.com</a>
                    <a href="mailto:kmeehan0131@gmail.com">Katie: kmeehan0131@gmail.com</a>
                </div>

                <div className="footer-section">
                    <h4>Navigation</h4>
                    <a href="/">Home</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/location">Location</a>
                    <a href="/rsvp">RSVP</a>
                </div>

                <div className="footer-decorative">
                    <span className="heart-decoration">💍</span>
                    <span className="heart-decoration">❤️</span>
                    <span className="heart-decoration">💍</span>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Nick & Katie. All rights reserved. 💕</p>
            </div>
        </motion.footer>
    );
}
