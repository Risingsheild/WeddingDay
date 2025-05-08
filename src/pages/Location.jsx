import { motion } from 'framer-motion';
import { PageWrapper } from '../components/PageWrapper';
import '../styles/Home.css';

export function Location() {
    return (
        <PageWrapper>
            <div className="center-content">
                <motion.div
                    className="location-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="location-content">
                        <div className="location-info">
                            <h2 className="text-2xl font-semibold mb-2">Location</h2>
                            <p className="mb-4">
                                Willows Lodge, 14580 NE 145th St, Woodinville, WA 98072
                                <a
                                    href="https://maps.google.com/?q=Willows+Lodge,+14580+NE+145th+St,+Woodinville,+WA+98072"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="directions-link"
                                >
                                    Get Directions
                                </a>
                            </p>
                            <div className="hotels-list">
                                <h3>Nearby Hotels</h3>
                                <ul>
                                    <li>
                                        <a href="https://www.willowslodge.com/" target="_blank" rel="noopener noreferrer">
                                            Willows Lodge
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.marriott.com/en-us/hotels/seawm-woodinville-marriott/" target="_blank" rel="noopener noreferrer">
                                            Woodinville Marriott
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.hamptoninn.com" target="_blank" rel="noopener noreferrer">
                                            Hampton Inn & Suites
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="map-container">
                            <iframe
                                title="Willows Lodge Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.832026160589!2d-122.14963072386042!3d47.737876884170065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900e370b63a90b%3A0x15a5945148ac38d5!2sWillows+Lodge!5e0!3m2!1sen!2sus!4v1714921840000!5m2!1sen!2sus"
                                className="square-box"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="valet-note">
                        <p>🚗 Don't worry about parking - we've got you covered with free valet!</p>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
} 