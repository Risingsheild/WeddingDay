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
