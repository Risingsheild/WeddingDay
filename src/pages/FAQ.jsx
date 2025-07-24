import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapper } from '../components/PageWrapper';
import '../styles/FAQ.css';

const faqData = [
  {
    category: "Wedding Details",
    icon: "💐",
    questions: [
      {
        question: "What time should I arrive?",
        answer: "Guest arrival begins at 3:00 PM. We recommend arriving by 4:45 PM to ensure you're seated before the ceremony begins at 5:00 PM."
      },
      {
        question: "What is the dress code?",
        answer: "We're having a semi-formal celebration! Think cocktail attire or dressy casual. Ladies, feel free to wear florals or pastels that complement our mauve theme. Gentlemen, a nice suit or dress pants with a button-down shirt would be perfect."
      },
      {
        question: "Will the ceremony be indoors or outdoors?",
        answer: "Our ceremony will be held outdoors in the beautiful gardens at Willows Lodge, weather permitting. In case of rain, we have a stunning indoor backup location at the same venue."
      },
      {
        question: "How long will the celebration last?",
        answer: "The festivities begin at 3:00 PM and will conclude around 11:00 PM. This includes the ceremony, cocktail hour, dinner, and dancing!"
      }
    ]
  },
  {
    category: "Travel & Accommodations",
    icon: "🏨",
    questions: [
      {
        question: "Is there parking available?",
        answer: "Yes! Willows Lodge provides complimentary valet parking for all wedding guests. Just pull up to the main entrance and they'll take care of your car."
      },
      {
        question: "Are there hotel room blocks available?",
        answer: "We have secured special group rates at Willows Lodge and nearby hotels. Please see our Location page for booking details and discount codes. We recommend booking early as rooms fill up quickly!"
      },
      {
        question: "What's the best airport to fly into?",
        answer: "Seattle-Tacoma International Airport (SEA) is the closest major airport, about 45 minutes from the venue. Bellingham International Airport (BLI) is smaller but closer, about 30 minutes away."
      },
      {
        question: "Do you recommend renting a car?",
        answer: "While not necessary if you're staying at Willows Lodge, a car can be helpful for exploring the beautiful Woodinville wine country. Uber and Lyft are also readily available in the area."
      }
    ]
  },
  {
    category: "Reception & Dining",
    icon: "🍽️",
    questions: [
      {
        question: "What type of food will be served?",
        answer: "We're serving a plated dinner featuring Pacific Northwest cuisine with options for all dietary preferences. Our menu includes locally sourced salmon, herb-crusted chicken, and a delicious vegetarian option."
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer: "Absolutely! Please let us know about any dietary restrictions, allergies, or special meal requests when you RSVP. Our caterer can accommodate vegetarian, vegan, gluten-free, and other dietary needs."
      },
      {
        question: "Will there be an open bar?",
        answer: "Yes! We'll have a full open bar featuring signature cocktails, local wines, beer, and non-alcoholic beverages throughout the reception."
      },
      {
        question: "What are your signature cocktails?",
        answer: "We're featuring 'Katie's Garden Spritz' (elderflower, prosecco, and fresh herbs) and 'Nick's Old Fashioned' (bourbon, mauve bitters, and orange). Plus a special lavender lemonade for non-alcohol drinkers!"
      }
    ]
  },
  {
    category: "Gifts & Registry",
    icon: "💝",
    questions: [
      {
        question: "Do you have a wedding registry?",
        answer: "Yes! We're registered at Williams Sonoma, Target, and have a cash fund for our honeymoon. You can find all the details on our registry page (coming soon!) or ask our families."
      },
      {
        question: "Should I bring my gift to the wedding?",
        answer: "While we appreciate your thoughtfulness, we recommend having gifts shipped directly to our home for security and convenience. If you do bring a card, there will be a beautifully decorated gift table at the reception."
      },
      {
        question: "What if I can't make it to the wedding?",
        answer: "We completely understand! Your presence is the greatest gift, but if you'd still like to send something, registry items can be shipped to our home address which will be provided with your RSVP confirmation."
      }
    ]
  },
  {
    category: "Children & Plus-Ones",
    icon: "👨‍👩‍👧‍👦",
    questions: [
      {
        question: "Are children welcome?",
        answer: "We love your little ones! Children are welcome at both the ceremony and reception. We'll have some kid-friendly activities and meal options available."
      },
      {
        question: "Can I bring a plus-one?",
        answer: "Plus-ones are specified on your invitation. If your invitation says 'and guest' or includes your partner's name, then yes! If you're unsure, please reach out to us directly."
      },
      {
        question: "Will there be childcare available?",
        answer: "While we're not providing formal childcare, the venue has quiet spaces where families can step away if needed. We recommend arranging your own childcare if you'd prefer to fully enjoy the celebration."
      }
    ]
  },
  {
    category: "Music & Entertainment",
    icon: "🎵",
    questions: [
      {
        question: "Will there be dancing?",
        answer: "Absolutely! We'll have a dance floor and DJ playing a mix of classics, current hits, and your song requests. Don't forget to include your song request when you RSVP!"
      },
      {
        question: "What kind of music will you play?",
        answer: "We're planning a mix of romantic classics for dinner, upbeat hits for dancing, and some special songs that are meaningful to us. We love everything from indie folk to classic rock to current pop!"
      },
      {
        question: "Can I request a song?",
        answer: "Yes! There's a spot on our RSVP form for song requests. We can't guarantee every song will be played, but we'll do our best to include your favorites."
      }
    ]
  },
  {
    category: "Weather & Backup Plans",
    icon: "🌤️",
    questions: [
      {
        question: "What if it rains?",
        answer: "April in Washington can be unpredictable, but don't worry! Willows Lodge has a beautiful indoor ceremony space that's just as romantic as the outdoor garden. We'll make the final decision the morning of the wedding."
      },
      {
        question: "Should I bring a jacket?",
        answer: "Yes! April evenings can be cool, so we recommend bringing a light jacket or wrap. Ladies, a cute pashmina or cardigan would be perfect!"
      },
      {
        question: "What's the weather usually like in April?",
        answer: "April in Woodinville is usually mild with temperatures in the 60s°F during the day and 50s°F in the evening. There's a chance of light rain, so we recommend checking the forecast before traveling."
      }
    ]
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <PageWrapper>
      <div className="faq-container">
        <div className="faq-header floral-border">
          <h1>Frequently Asked Questions</h1>
          <p className="script-text">Everything you need to know about our special day</p>
          <div className="floral-accent">🌸💜🌸</div>
        </div>

        <div className="faq-intro">
          <p>We're so excited to celebrate with you! Here are answers to the most common questions about our wedding day. If you don't see your question here, please don't hesitate to reach out to us directly.</p>
        </div>

        <div className="faq-categories">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="faq-category floral-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.category}</h2>
              </div>

              <div className="questions-list">
                {category.questions.map((item, questionIndex) => (
                  <div key={questionIndex} className="question-item">
                    <button
                      className={`question-button ${openItems[`${categoryIndex}-${questionIndex}`] ? 'active' : ''}`}
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                      aria-expanded={openItems[`${categoryIndex}-${questionIndex}`] || false}
                    >
                      <span className="question-text">{item.question}</span>
                      <span className="question-icon">
                        {openItems[`${categoryIndex}-${questionIndex}`] ? '🌸' : '🌿'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {openItems[`${categoryIndex}-${questionIndex}`] && (
                        <motion.div
                          className="answer-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="answer-text">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="faq-contact floral-card">
          <h3>Still Have Questions?</h3>
          <p>Don't hesitate to reach out! We're happy to help with any other questions or concerns.</p>
          <div className="contact-options">
            <div className="contact-person">
              <h4>🤵 Nick</h4>
              <a href="mailto:wellsnick3@gmail.com">wellsnick3@gmail.com</a>
              <p>Best for: Logistics, travel, groomsmen questions</p>
            </div>
            <div className="contact-person">
              <h4>👰 Katie</h4>
              <a href="mailto:kmeehan0131@gmail.com">kmeehan0131@gmail.com</a>
              <p>Best for: Details, attire, bridesmaids questions</p>
            </div>
          </div>
        </div>

        <div className="faq-footer">
          <p className="script-text">We can't wait to celebrate with you! 💕</p>
        </div>
      </div>
    </PageWrapper>
  );
}