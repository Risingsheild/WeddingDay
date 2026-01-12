import { motion } from 'framer-motion';
import { PageWrapper } from '../components/PageWrapper';
import '../styles/HowWeMet.css';

const timelineEvents = [
  {
    date: "First Date",
    title: "Board Game Night",
    description: "We met at a board game tavern. Were I learned Katie was a terrible loser and she learned I was a terrible winner.",
    icon: "🎲",
    image: "/images/boardgame.webp",
    funFact: "We played for hours and hours! Till she got so mad she threw the game in the trash."
  },
  {
    date: "Special Moment",
    title: "Katie's Graduation",
    description: "Katie graduating from University of Washington with her PharmD.",
    icon: "💝",
    image: "/images/PharmGrad.jpg",
    funFact: "We both said 'I love you' at the same time."
  },
  {
    date: "First Trip",
    title: "Adventure Together",
    description: "Our First big road trip where we explored the christmas lights in Leavenworth Washington.",
    icon: "✈️",
    image: "/images/Bellingham.jpg",
    funFact: "We almost got stuck in the snow together! And Nick ran away from me in a store after eating a way to Spicy Sauce."
  },
  {
    date: "Spartan Race",
    title: "Getting Dirty",
    description: "We tackled our first Spartan Race together. Mud, sweat, and teamwork!",
    icon: "🏃‍♂️",
    image: "/images/SpartanRace.jpg",
    funFact: "Katie Conquered her fear of Heights on the rope climb! Very Proud of her!"
  },
  {
    date: "The Proposal",
    title: "The Big Question",
    description: "The magical moment when we decided to spend forever together.",
    icon: "💍",
    image: "/images/Weddingimg1.jpg",
    funFact: "Nick almost dropped the ring!"
  },
  {
    date: "Post Poposal Dinner",
    title: "Dinner Celebration", 
    description: "Surrounded by friends and family, we got show off the ring and celebrate our engagement.",
    icon: "🎉",
    image: "/images/Engagement-Dinner.jpg",
    funFact: "The restaurant gave us some free champagne to celebrate!"
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
              className={`timeline-item zigzag-${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="timeline-icon">{event.icon}</div>
              {event.image && (
                <img src={event.image} alt={event.title} className="timeline-image" />
              )}
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                {event.funFact && (
                  <div className="fun-fact">💡 {event.funFact}</div>
                )}
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

        <motion.div
          className="whats-next-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <h2>What's Next?</h2>
          <p>We can't wait to start this new chapter together, surrounded by friends and family. Our adventure is just beginning!</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};