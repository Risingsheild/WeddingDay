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
                                <br />
                                <br />
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
                                            <p>*please contact us for more details** as we have a group rate for the night of the wedding, we also have link for 10% off the room rate</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.choicehotels.com/washington/kirkland/quality-inn-hotels/wa160?gal=undefined&gmp=MetaOrganic&gpa=GPADSAPR2&hmGUID=70319ed5-4fc1-42a7-b465-3e821f4fdb48&mc=HAGOHPUS&meta=PMFGPADUSSAPR2_WA160_mapresults_US_1_desktop_2025-06-26_selected___organic&pmf=hpagoogle&product=mapresults&adults=2&checkInDate=2025-06-26&checkOutDate=2025-06-27&ratePlanCode=SAPR2" target="_blank" rel="noopener noreferrer">
                                            Quality Inn & Suites
                                            <p>est. $150/night and about 10 minutes away</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=SEAWOHX&arrivalDate=2025-06-26&departureDate=2025-06-27&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0WW1XX2OLX3DA4MS5MS6_SEAWOHX7_298227037_&adType=FL&dsclid=70785210680356864&dclid=CM-Fv4-g-Y0DFS0TdgYdvYolZQ&hmGUID=bf119760-73b2-4997-bb5a-6345a5a3fd14" target="_blank" rel="noopener noreferrer">
                                            Hampton Inn & Suites
                                            <p>est. $250/night and about 10 minutes away</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="map-container">
                            <img
                                src="/images/assets_task_01jzv9avt9fkar2sxkqj23e0st_1752188870_img_0.webp"
                                alt="Willows Lodge"
                                className="square-box"
                                loading="lazy"
                            />
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