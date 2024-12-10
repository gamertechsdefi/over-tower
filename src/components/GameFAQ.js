import React, { useState } from 'react';

const GameFAQ = () => {
  const faqs = [
    {
      question: "How do I earn points?",
      answer: "Players can earn points through completing daily missions, participating in tournaments & PvP and ranking high on seasonal leaderboards."
    },
    {
      question: "Is it free to play?",
      answer: "Players can start for free but will need to acquire initial units and resources to compete effectively."
    },
    {
      question: "How often are tournaments held?",
      answer: "Weekly tournaments run Friday through Sunday, with special monthly events offering larger prize pools."
    },
    {
      question: "What determines matchmaking?",
      answer: "Players are matched based on tower level, past performance, and ranking tier to ensure fair competition."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-8 py-16 px-8 md:px-16 bg-green-100">
      <h2 className="text-3xl font-bold text-gray-800">FAQ</h2>
      
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center gap-4"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <span className={`text-green-700 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameFAQ;