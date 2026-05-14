import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  showFallbackButton?: boolean;
}

const suggestedQuestions = [
  "Which stream is best after 10th?",
  "What career suits my interests?",
  "What are the highest paying careers?",
  "Which diploma course is best?",
  "Can I switch streams later?",
  "What skills should I learn?",
  "Government jobs after 10th",
  "Best IT careers",
  "Sports career opportunities",
  "Medical vs Engineering",
  "How to become a software engineer?",
  "What course is best for business?",
  "Career options for creative students",
  "What if I am confused about my future?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m your PathBloom assistant. I can help you explore career paths, find the right stream, and discover opportunities. What would you like to know?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const { setScreen } = useApp();

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(inputText);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        showFallbackButton: response.showFallbackButton,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): { text: string; showFallbackButton?: boolean } => {
    const input = userInput.toLowerCase();

    // Stream after 10th
    if (input.includes('stream') && input.includes('10th') || input.includes('after 10th')) {
      return {
        text: 'After 10th, you have several great options: Science (for Engineering/Medical), Commerce (for Business/Finance), Arts (for Humanities/Law), or Vocational courses (for skill-based careers). Take our interest test to discover which stream suits you best!'
      };
    }

    // Career suits interests
    if (input.includes('career') && input.includes('interest') || input.includes('suits my interests')) {
      return {
        text: 'Finding a career that matches your interests is crucial! Our Interest Test analyzes your preferences across 15 streams to recommend the best career paths. Would you like to take the test?'
      };
    }

    // Highest paying careers
    if (input.includes('highest paying') || input.includes('salary') || input.includes('high salary')) {
      return {
        text: 'Some of the highest paying careers include Software Engineering, Data Science, Medicine (Doctors/Specialists), Investment Banking, AI/ML Engineering, and Management Consulting. However, the best career is one that matches your skills and interests!'
      };
    }

    // Best diploma course
    if (input.includes('diploma') && input.includes('best') || input.includes('which diploma')) {
      return {
        text: 'The best diploma depends on your interests! Popular options include: Polytechnic (Engineering), Hotel Management, Fashion Design, Digital Marketing, Medical Lab Technology, and Computer Applications. Each offers great career opportunities!'
      };
    }

    // Switch streams later
    if (input.includes('switch') || input.includes('change stream') || input.includes('later')) {
      return {
        text: 'Yes, you can switch streams! Many students change paths after 12th or even during college. For example, Commerce students can pursue MBA, Arts students can switch to Law, and Science students can explore Management. Keep your options open!'
      };
    }

    // Skills to learn
    if (input.includes('skills') && input.includes('learn') || input.includes('what skills')) {
      return {
        text: 'Essential skills for the future include: Digital literacy, Communication, Problem-solving, Data analysis, Programming basics, and Adaptability. Soft skills like teamwork and leadership are equally valuable. Start with what interests you most!'
      };
    }

    // Government jobs after 10th
    if (input.includes('government') && input.includes('10th') || input.includes('govt jobs')) {
      return {
        text: 'After 10th, you can prepare for government jobs through: Railways (Group D), Police (Constable), Forest Department, and various state-level exams. However, I recommend completing 12th for better opportunities. Check our Government Exams section for details!'
      };
    }

    // Best IT careers
    if (input.includes('it') && input.includes('career') || input.includes('software') || input.includes('tech jobs')) {
      return {
        text: 'Top IT careers include: Software Developer, Data Scientist, Cybersecurity Analyst, Cloud Architect, AI/ML Engineer, DevOps Engineer, and UI/UX Designer. The IT sector offers excellent growth and salary prospects!'
      };
    }

    // Sports career opportunities
    if (input.includes('sports') || input.includes('athlete') || input.includes('fitness')) {
      return {
        text: 'Sports careers are exciting! Options include: Professional Athlete, Sports Coach, Fitness Trainer, Sports Management, Sports Journalism, Physiotherapist, and Sports Nutritionist. Check our Skill-Based Courses section for sports-related programs!'
      };
    }

    // Medical vs Engineering
    if (input.includes('medical') && input.includes('engineering') || input.includes('doctor vs engineer')) {
      return {
        text: 'Both are excellent! Medical is ideal if you love Biology, want to serve patients, and are ready for long study (MBBS + specialization). Engineering suits you if you enjoy Math/Physics, love technology, and want to build solutions. Take our aptitude test to see which fits better!'
      };
    }

    // How to become software engineer
    if (input.includes('software engineer') || input.includes('become software')) {
      return {
        text: 'To become a Software Engineer: 1) Take Science with Computer Science in 11th-12th, 2) Pursue B.Tech/B.E. in CS or IT, 3) Learn programming (Python, Java, JavaScript), 4) Build projects, 5) Get internships. Check our Computer IT Engineering section for detailed guidance!'
      };
    }

    // Best course for business
    if (input.includes('business') && input.includes('course') || input.includes('entrepreneur')) {
      return {
        text: 'For business careers, consider: BBA (Bachelor of Business Administration), B.Com (Commerce), MBA (Masters), or specialized diplomas in Digital Marketing, Entrepreneurship, or Finance. Our Business Management section has detailed information!'
      };
    }

    // Career options for creative students
    if (input.includes('creative') || input.includes('design') || input.includes('art')) {
      return {
        text: 'Creative careers are booming! Options include: Graphic Design, Animation, Fashion Design, Interior Design, Photography, Content Writing, UI/UX Design, and Fine Arts. Check our Design & Creative Diplomas section for amazing opportunities!'
      };
    }

    // Confused about future
    if (input.includes('confused') || input.includes('don\'t know') || input.includes('unsure')) {
      return {
        text: 'It\'s completely normal to feel confused! The best way forward is to take our Interest and Aptitude tests. They analyze your strengths and preferences to recommend suitable career paths. Remember, your career journey is unique - take it one step at a time!'
      };
    }

    // General career/job questions
    if (input.includes('career') || input.includes('job')) {
      return {
        text: 'I can help you explore career paths! Take our interest and aptitude tests to discover your ideal career. Would you like to start the assessment?'
      };
    }

    // Test/assessment questions
    if (input.includes('test') || input.includes('assessment')) {
      return {
        text: 'We offer two types of assessments: Interest Test (12 questions) and Aptitude Test (5 questions). Both help us recommend the best career path for you.'
      };
    }

    // Stream/course questions
    if (input.includes('stream') || input.includes('course')) {
      return {
        text: 'We analyze 15 different streams including Engineering, Medical, Commerce, Arts, and Vocational courses. Each stream has multiple career paths.'
      };
    }

    // Premium/subscription questions
    if (input.includes('premium') || input.includes('subscription')) {
      return {
        text: 'Our Premium plan gives you access to detailed college information, scholarship opportunities, and personalized career counseling. Would you like to know more about pricing?'
      };
    }

    // Help/support questions
    if (input.includes('help') || input.includes('support')) {
      return {
        text: 'I\'m here to help! You can ask me about careers, assessments, streams, colleges, or any other questions about PathBloom.'
      };
    }

    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return {
        text: 'Hello! Welcome to PathBloom. How can I assist you with your career journey today?'
      };
    }

    // Smart fallback response
    return {
      text: 'I couldn\'t find the exact answer for that. Visit CareerPath to explore detailed career guidance, streams, courses, and opportunities.',
      showFallbackButton: true
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
    handleSendMessage();
  };

  const handleExploreCareerPath = () => {
    setScreen('home');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-violet-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">PathBloom Assistant</h3>
                    <p className="text-white/80 text-xs">Online • Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#0d0d1a]">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 ${
                      message.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-indigo-500 to-violet-600'
                          : 'bg-gradient-to-br from-emerald-500 to-teal-600'
                      }`}
                    >
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] rounded-2xl p-3 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white'
                          : 'bg-white/10 text-white border border-white/10'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.showFallbackButton && (
                        <motion.button
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          onClick={handleExploreCareerPath}
                          className="mt-3 w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                        >
                          Explore CareerPath
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      )}
                      <p className={`text-[10px] mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-white/50'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Suggested Questions */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-2"
                  >
                    {suggestedQuestions.slice(0, 6).map((question, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 bg-[#0d0d1a] border-t border-white/10">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
