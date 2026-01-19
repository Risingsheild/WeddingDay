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
        answer: "We recommend arriving by 4:30 PM to ensure you're seated before the ceremony begins at 5:00 PM."
      },
      {
        question: "What is the dress code?",
        answer: "We're having a semi-formal celebration! Think cocktail attire or dressy casual. Ladies, feel free to wear florals or pastels that complement our garden theme. Gentlemen, a nice suit or dress pants with a button-down shirt would be perfect."
      },
      {
        question: "Will the ceremony be indoors or outdoors?",
        answer: "Our ceremony will be held outdoors in the beautiful gardens at Willows Lodge. In case of rain, we have a lovely covered area to ensure everyone stays dry while still enjoying the scenery."
      },
      {
        question: "How long will the celebration last?",
        answer: "The festivities begin at 5:00 PM and will conclude around 11:00 PM. This includes the ceremony, cocktail hour, dinner, and dancing!"
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
        answer: "We have secured special group rates at Willows Lodge. Please see our Location page for booking details and discount codes. We recommend booking early as rooms fill up quickly!"
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
        answer: "We're serving a plated dinner featuring Pacific Northwest cuisine with options for all dietary preferences. Our menu includes chicken, beef, steelhead and a vegan option."
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer: "Absolutely! Please let us know about any dietary restrictions, allergies, or special meal requests when you RSVP."
      },
      {
        question: "Will there be an open bar?",
        answer: "Yes! We'll have a full open bar featuring signature cocktails, local wines, beer, and non-alcoholic beverages throughout the cocktail hour and reception."
      },
    ]
  },
  {
    category: "Gifts & Registry",
    icon: "💝",
    questions: [
      {
        question: "Do you have a wedding registry?",
        answer: "We have chosen not to create a registry. Your presence at our wedding is the greatest gift we could ask for! However, if you feel inclined to give, a contribution towards our honeymoon fund would be deeply appreciated."
      },
    ]
  },
  {
    category: "Children & Plus-Ones",
    icon: "👨‍👩‍👧‍👦",
    questions: [
      {
        question: "Are children welcome?",
        answer: "We love your little ones, but we've chosen to make this special day adults only."
      },
      {
        question: "Can I bring a plus-one?",
        answer: "Plus-ones are specified on your invitation. If your invitation says 'and guest' or includes your partner's name, then yes! If you're unsure, please reach out to us directly."
      },
    ]
  },
  {
    category: "Weather Considerations",
    icon: "🌤️",
    questions: [
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
              <p>Best for: Logistics & travel</p>
            </div>
            <div className="contact-person">
              <h4>👰 Katie</h4>
              <a href="mailto:kmeehan0131@gmail.com">kmeehan0131@gmail.com</a>
              <p>Best for: Details & attire</p>
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