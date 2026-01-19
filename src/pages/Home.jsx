//import { useEffect, useState } from 'react';
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
            <li><span className="event-time">4:30<span className="time-period">pm</span></span> – Guest Arrival</li>
            <li><span className="event-time">5:00<span className="time-period">pm</span></span> – Ceremony </li>
            <li><span className="event-time">5:30<span className="time-period">pm</span></span> – Cocktail Hour</li>
            <li><span className="event-time">6:30 - 11:00<span className="time-period">pm</span></span> – Reception</li>
          </ul>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
