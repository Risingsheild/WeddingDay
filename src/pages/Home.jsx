import { useEffect, useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { WeddingCountdown } from '../components/WeddingCountdown';
import '../styles/Home.css';

export function Home() {

  return (
    <PageWrapper>
      <div className="center-content">
        <motion.div
          className="hero-wedding-bg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Nick & Katie</h1>
          <p>We're getting married!</p>
          <p className="date">April 25, 2026</p>
        </motion.div>


        <WeddingCountdown />
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <p className="mb-4">Willows Lodge, 14580 NE 145th St, Woodinville, WA 98072</p>
          <div className="mt-2">
            <iframe
              title="Willows Lodge Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.832026160589!2d-122.14963072386042!3d47.737876884170065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900e370b63a90b%3A0x15a5945148ac38d5!2sWillows%20Lodge!5e0!3m2!1sen!2sus!4v1714921840000!5m2!1sen!2sus"
              className="square-box"
            ></iframe>
          </div>
        </div>

        <motion.div
          className="mt-10 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">Nearby Hotels</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://www.willowslodge.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">Willows Lodge</a></li>
            <li><a href="https://www.marriott.com/en-us/hotels/seawm-woodinville-marriott/" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">Woodinville Marriott</a></li>
            <li><a href="https://www.hamptoninn.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">Hampton Inn & Suites</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="timeline-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Event Schedule</h2>
          <ul className="timeline-list">
            <li>3:00 PM – Guest Arrival</li>
            <li>5:00 PM – Ceremony Begins</li>
            <li>5:30 PM – Cocktail Hour</li>
            <li>6:30 - 11:00 PM – Reception</li>
          </ul>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
