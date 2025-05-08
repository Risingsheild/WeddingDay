import { motion } from 'framer-motion';
import { PageWrapper } from '../components/PageWrapper';
import '../styles/HowWeMet.css';

const timelineEvents = [
  {
    date: "First Meeting",
    title: "The Beginning",
    description: "Our paths crossed at [location], where a simple hello turned into hours of conversation.",
    icon: "💫"
  },
  {
    date: "First Date",
    title: "Getting to Know Each Other",
    description: "Over coffee and laughter, we discovered our shared love for [shared interest].",
    icon: "☕"
  },
  {
    date: "Special Moment",
    title: "The Connection",
    description: "That moment when we both knew this was something special.",
    icon: "💝"
  },
  {
    date: "The Proposal",
    title: "The Big Question",
    description: "The magical moment when we decided to spend forever together.",
    icon: "💍"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const HowWeMet = () => {
  return (
    <PageWrapper>
      <div className="how-we-met-container">
        <motion.div
          className="story-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Story</h1>
          <p className="subtitle">A journey of love and laughter</p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-icon">{event.icon}</div>
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="love-quote"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p>"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."</p>
          <span className="quote-author">- Maya Angelou</span>
        </motion.div>
      </div>
    </PageWrapper>
  );
};