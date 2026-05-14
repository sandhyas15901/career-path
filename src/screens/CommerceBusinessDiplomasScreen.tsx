import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Clock, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface CommerceBusinessDiplomasScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const CommerceBusinessDiplomasScreen: React.FC<CommerceBusinessDiplomasScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const diplomaCourses = [
    {
      id: 'business-management',
      icon: '🟦',
      color: 'from-blue-500 to-blue-600',
      title: 'Business Management Diploma',
      description: 'Master business operations, team management, organizational skills, and corporate administration',
      duration: '2–3 Years',
      careers: ['Business Assistant', 'Office Administrator', 'Operations Executive', 'Management Support Executive'],
      bestFor: ['Business Operations', 'Team Management', 'Organizational Skills', 'Corporate Administration'],
      recommended: 'Students interested in business operations, Management Systems, and corporate environments.',
      coreFocus: 'Business operations, management principles, corporate Administration',
      technicalLevel: 'Medium',
      difficulty: 'Medium',
      industryDemand: 'High',
      salary: '₹3-12 LPA',
      skills: ['Leadership', 'Communication', 'Planning', 'Problem Solving']
    },
    {
      id: 'accounting-finance',
      icon: '🟩',
      color: 'from-green-500 to-green-600',
      title: 'Accounting & Finance Diploma',
      description: 'Learn accounting basics, financial management, taxation, and bookkeeping fundamentals',
      duration: '2–3 Years',
      careers: ['Accounts Assistant', 'Finance Executive', 'Tax Assistant', 'Billing Executive'],
      bestFor: ['Accounting Basics', 'Financial Management', 'Taxation', 'Bookkeeping'],
      recommended: 'Students interested in numbers, finance, accounting systems, and taxation.',
      coreFocus: 'Accounting principles, financial management, taxation Systems',
      technicalLevel: 'High',
      difficulty: 'Medium',
      industryDemand: 'Very High',
      salary: '₹4-15 LPA',
      skills: ['Accounting', 'Financial Analysis', 'Taxation', 'Excel']
    },
    {
      id: 'banking-insurance',
      icon: '🟨',
      color: 'from-purple-500 to-purple-600',
      title: 'Banking & Insurance Diploma',
      description: 'Understand banking operations, financial services, insurance systems, and customer handling',
      duration: '2–3 Years',
      careers: ['Banking Assistant', 'Insurance Advisor Assistant', 'Relationship Executive', 'Financial Service Associate'],
      bestFor: ['Banking Operations', 'Financial Services', 'Insurance Systems', 'Customer Handling'],
      recommended: 'Students interested in banking systems, insurance, and financial Service Industries.',
      coreFocus: 'Banking operations, insurance products, financial Services',
      technicalLevel: 'Medium',
      difficulty: 'Medium',
      industryDemand: 'High',
      salary: '₹3-14 LPA',
      skills: ['Banking Operations', 'Customer Service', 'Financial Products', 'Risk Assessment']
    },
    {
      id: 'digital-marketing-ecommerce',
      icon: '🟪',
      color: 'from-orange-500 to-orange-600',
      title: 'Digital Marketing & E-Commerce Diploma',
      description: 'Master social media marketing, online business, SEO & advertising, and e-commerce platforms',
      duration: '1–2 Years',
      careers: ['Digital Marketing Executive', 'SEO Assistant', 'Social Media Executive', 'E-Commerce Support Executive'],
      bestFor: ['Social Media Marketing', 'Online Business', 'SEO & Advertising', 'E-Commerce Platforms'],
      recommended: 'Students interested in online business, social media, and digital Marketing careers.',
      coreFocus: 'Digital marketing, e-commerce platforms, social Media Management',
      technicalLevel: 'Medium',
      difficulty: 'Easy',
      industryDemand: 'Very High',
      salary: '₹3-16 LPA',
      skills: ['Digital Marketing', 'SEO', 'Social Media', 'E-Commerce']
    },
    {
      id: 'retail-sales-management',
      icon: '🟥',
      color: 'from-red-500 to-red-600',
      title: 'Retail & Sales Management Diploma',
      description: 'Learn retail operations, sales techniques, customer service, and store management',
      duration: '1–2 Years',
      careers: ['Sales Executive', 'Retail Associate', 'Store Supervisor Assistant', 'Customer Relationship Executive'],
      bestFor: ['Retail Operations', 'Sales Techniques', 'Customer Service', 'Store Management'],
      recommended: 'Students interested in sales, retail businesses, and customer Management.',
      coreFocus: 'Retail operations, sales techniques, customer Relationship Management',
      technicalLevel: 'Low',
      difficulty: 'Easy',
      industryDemand: 'High',
      salary: '₹2-10 LPA',
      skills: ['Sales', 'Customer Service', 'Retail Operations', 'Inventory Management']
    },
    {
      id: 'entrepreneurship-startup-management',
      icon: '🟫',
      color: 'from-yellow-500 to-yellow-600',
      title: 'Entrepreneurship & Startup Management Diploma',
      description: 'Develop startup planning, business development, leadership skills, and small business Management',
      duration: '1–2 Years',
      careers: ['Startup Assistant', 'Small Business Owner', 'Business Development Executive', 'Entrepreneur Support Executive'],
      bestFor: ['Startup Planning', 'Business Development', 'Leadership Skills', 'Small Business Management'],
      recommended: 'Students interested in startups, business ideas, leadership, and entrepreneurship.',
      coreFocus: 'Entrepreneurship, business planning, leadership Development',
      technicalLevel: 'Medium',
      difficulty: 'Hard',
      industryDemand: 'Medium',
      salary: '₹2-20 LPA',
      skills: ['Entrepreneurship', 'Business Planning', 'Leadership', 'Innovation']
    },
    {
      id: 'logistics-supply-chain',
      icon: '⬛',
      color: 'from-teal-500 to-teal-600',
      title: 'Logistics & Supply Chain Management Diploma',
      description: 'Master supply chain operations, inventory management, warehouse systems, and logistics coordination',
      duration: '2–3 Years',
      careers: ['Logistics Coordinator', 'Supply Chain Assistant', 'Warehouse Executive', 'Inventory Management Assistant'],
      bestFor: ['Supply Chain Operations', 'Inventory Management', 'Warehouse Systems', 'Logistics Coordination'],
      recommended: 'Students interested in logistics, transportation systems, and supply Chain operations.',
      coreFocus: 'Logistics management, supply chain systems, inventory Control',
      technicalLevel: 'Medium',
      difficulty: 'Medium',
      industryDemand: 'High',
      salary: '₹3-13 LPA',
      skills: ['Logistics', 'Supply Chain Management', 'Inventory Management', 'Coordination']
    }
  ];

  const filteredCourses = diplomaCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.careers.some(career => career.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === 'all' || course.id === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  
  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('diploma_polytechnic' as any)} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-8">
          <div className="flex items-center justify-center text-white/70 text-sm flex-wrap">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses' as any)}>Academic Courses</span>
            <span className="mx-2">→</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic' as any)}>Diploma / Polytechnic</span>
            <span className="mx-2">→</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('commerce-business' as any)}>Commerce & Business Diplomas</span>
            <span className="mx-2">→</span>
            <span className="text-white font-medium">Commerce & Business</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white">Commerce & Business Diplomas</h1>
            <p className="text-white/80 text-lg max-w-3xl">Explore diploma pathways focused on business management, finance, accounting, banking, marketing, entrepreneurship, retail, and corporate careers after 10th grade.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search business courses, careers, or skills..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" 
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={selectedFilter} 
                onChange={(e) => setSelectedFilter(e.target.value)} 
                className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
              >
                <option value="all">All Business Courses</option>
                <option value="business-management">Business Management</option>
                <option value="accounting-finance">Accounting & Finance</option>
                <option value="banking-insurance">Banking & Insurance</option>
                <option value="digital-marketing-ecommerce">Digital Marketing & E-Commerce</option>
                <option value="retail-sales-management">Retail & Sales Management</option>
                <option value="entrepreneurship-startup-management">Entrepreneurship & Startup Management</option>
                <option value="logistics-supply-chain">Logistics & Supply Chain</option>
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          {/* Test button to verify setScreen works */}
          <div className="mb-4">
            <button 
              onClick={() => setScreen('business-management' as any)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Test Navigation to Business Management
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div 
                key={course.id} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group" 
                onClick={() => setScreen(course.id as any)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-3xl shadow-lg`}>{course.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{course.title}</h3>
                    <p className="text-white/80 text-sm mb-3 line-clamp-2">{course.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Best For
                    </h4>
                    <div className="space-y-1">
                      {course.bestFor.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-white/80 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-400" />
                      Duration
                    </h4>
                    <p className="text-white/80 text-sm font-medium">{course.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Career Opportunities
                    </h4>
                    <div className="space-y-1">
                      {course.careers.map((career, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-blue-400" />
                          <span className="text-white/80 text-sm">{career}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Recommended For
                    </h4>
                    <p className="text-white/80 text-sm italic bg-white/5 rounded-lg p-3">{course.recommended}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(course.industryDemand)}`}>{course.industryDemand} Demand</span>
                      <span className="text-white font-medium text-sm">{course.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* "Choose This If..." Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Choose This If...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-4">Choose Business Management If:</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You enjoy managing teams and operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You are interested in corporate environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You want management careers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.75, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-4">Choose Accounting & Finance If:</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You enjoy working with numbers and calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You are interested in finance and taxation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You want accounting careers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">🏦</div>
                <h3 className="text-lg font-bold text-white mb-4">Choose Banking & Insurance If:</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You enjoy financial services and customer interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You are interested in banking systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You want banking careers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.85, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-4">Choose Digital Marketing & E-Commerce If:</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You enjoy social media and online business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You are interested in advertising and branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You want digital business careers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">🛒</div>
                <h3 className="text-lg font-bold text-white mb-4">Choose Retail & Sales Management If:</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You enjoy customer interaction and sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You are interested in retail businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You want sales and retail careers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.95, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">🚚</div>
                <h3 className="text-lg font-bold text-white mb-4">Choose Logistics & Supply Chain Management If:</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You enjoy planning and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You are interested in warehouse and logistics systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You want supply chain careers</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Career Opportunities Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Career Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Accounts Assistant</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Junior → Senior → Accountant → Finance Manager</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Accounting</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Excel</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Taxation</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">Excellent growth in finance departments</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹3-8 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.85, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Business Operations Executive</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Executive → Manager → Business Head</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Management</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Planning</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Leadership</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">Strong corporate career growth</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹4-12 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🏦</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Banking Assistant</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Assistant → Officer → Manager → Branch Head</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Banking</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Customer Service</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Financial Products</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">Stable banking sector growth</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹3-10 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.95, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Digital Marketing Executive</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Executive → Manager → Digital Head</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Digital Marketing</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">SEO</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Social Media</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">Rapid digital industry growth</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹3-16 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.0, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">SEO Executive</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Executive → Senior → SEO Manager</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">SEO</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Analytics</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Content</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">High demand in digital space</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹4-18 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.05, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Sales Executive</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Executive → Manager → Sales Head</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Sales</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Communication</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Negotiation</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">Essential business function</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹2-10 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.1, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🛒</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Retail Associate</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Associate → Supervisor → Store Manager</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Retail</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Customer Service</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Inventory</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">Growing retail sector</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹2-8 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.15, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🚚</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Logistics Coordinator</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Career Roadmap</h4>
                    <p className="text-xs bg-white/10 rounded p-2">Coordinator → Manager → Supply Chain Head</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Logistics</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Supply Chain</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Coordination</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Future Scope</h4>
                    <p className="text-xs">Growing logistics industry</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Average Salary</h4>
                    <p className="text-xs font-medium text-green-400">₹3-13 LPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Industry Demand</h4>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Polytechnic Admissions & Higher Studies Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Polytechnic Admissions & Higher Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🎓</div>
                <h3 className="text-lg font-bold text-white mb-3">Direct Diploma Admission</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">10th pass with minimum 50% marks</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Admission Process</h4>
                    <p className="text-xs">Merit-based or entrance exam</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Higher Study Opportunities</h4>
                    <p className="text-xs">Lateral entry to BBA/B.Com 2nd year</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.95, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏛️</div>
                <h3 className="text-lg font-bold text-white mb-3">Government Commerce Polytechnic</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">10th pass with state domicile</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Admission Process</h4>
                    <p className="text-xs">State-level entrance exam</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Higher Study Opportunities</h4>
                    <p className="text-xs">Direct admission to degree programs</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.0, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-3">Business Entrance Admissions</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">10th + entrance exam preparation</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Admission Process</h4>
                    <p className="text-xs">National/State level entrance tests</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Higher Study Opportunities</h4>
                    <p className="text-xs">MBA preparation and advanced certifications</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.05, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-white mb-3">Lateral Entry to BBA/B.Com</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">Diploma with 60% marks</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Admission Process</h4>
                    <p className="text-xs">Direct entry to 2nd year</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Higher Study Opportunities</h4>
                    <p className="text-xs">MBA, M.Com, CA, CS, CMA</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skill Courses Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Skill Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.0, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🧮</div>
                <h3 className="text-lg font-bold text-white mb-3">Tally & Accounting Basics</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>3 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">Essential for accounting and finance careers</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.05, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-white mb-3">Business Communication</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>2 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">Critical for all business roles</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.1, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-3">Digital Marketing Basics</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>4 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">High demand in digital business</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.15, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-3">MS Excel & Office Skills</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>3 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">Universal business requirement</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏦</div>
                <h3 className="text-lg font-bold text-white mb-3">Banking Fundamentals</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>3 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">Essential for banking careers</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.25, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-3">Sales & Customer Service</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>2 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">Critical for sales roles</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.3, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🛒</div>
                <h3 className="text-lg font-bold text-white mb-3">E-Commerce Basics</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>4 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">Growing online business sector</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.35, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-3">Entrepreneurship Skills</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Level</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>6 months</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Relevance</span>
                    <p className="text-xs mt-1">Essential for startup success</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Industries Hiring Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Industries Hiring Commerce & Business Graduates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.1, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🏦</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Banks & Financial Institutions</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hiring Demand</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Trends</span>
                    <span className="text-green-400">↑ 15% YoY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Career Opportunities</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Banking</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Finance</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Risk</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.15, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Accounting Firms</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hiring Demand</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Trends</span>
                    <span className="text-green-400">↑ 12% YoY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Career Opportunities</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Audit</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Tax</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Consulting</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🛒</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Retail Companies</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hiring Demand</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Trends</span>
                    <span className="text-green-400">↑ 8% YoY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Career Opportunities</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Sales</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Merchandising</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Visual</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.25, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">E-Commerce Platforms</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hiring Demand</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Trends</span>
                    <span className="text-green-400">↑ 25% YoY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Career Opportunities</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Digital Marketing</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">E-Commerce</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Analytics</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.3, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🚚</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Logistics Companies</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hiring Demand</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Trends</span>
                    <span className="text-green-400">↑ 18% YoY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Career Opportunities</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Supply Chain</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Warehouse</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Transportation</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.35, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-4">🏢</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Corporate Offices</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hiring Demand</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Trends</span>
                    <span className="text-green-400">↑ 10% YoY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Career Opportunities</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Admin</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">HR</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Operations</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Freelancing & Startup Opportunities Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Freelancing & Startup Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-white mb-3">Freelance Accounting Services</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Skills Required</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Tally</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Taxation</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Excel</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earning Potential</h4>
                    <p className="text-xs text-green-400">₹15,000-50,000/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Growth Opportunities</h4>
                    <p className="text-xs">Build client base, expand to consulting</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.25, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-3">Social Media Marketing Services</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Skills Required</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Social Media</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Content</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Analytics</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earning Potential</h4>
                    <p className="text-xs text-green-400">₹20,000-80,000/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Growth Opportunities</h4>
                    <p className="text-xs">Agency formation, digital marketing</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.3, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🛒</div>
                <h3 className="text-lg font-bold text-white mb-3">Online Store Business</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Skills Required</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">E-Commerce</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Marketing</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Customer Service</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earning Potential</h4>
                    <p className="text-xs text-green-400">₹25,000-1,00,000/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Growth Opportunities</h4>
                    <p className="text-xs">Scale to multiple stores, private label</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.35, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏪</div>
                <h3 className="text-lg font-bold text-white mb-3">Retail Shop Startup</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Skills Required</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Retail</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Inventory</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Sales</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earning Potential</h4>
                    <p className="text-xs text-green-400">₹30,000-2,00,000/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Growth Opportunities</h4>
                    <p className="text-xs">Chain expansion, franchise model</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.4, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">💡</div>
                <h3 className="text-lg font-bold text-white mb-3">Business Consultancy Support</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Skills Required</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Business Strategy</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Planning</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Analysis</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earning Potential</h4>
                    <p className="text-xs text-green-400">₹25,000-1,50,000/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Growth Opportunities</h4>
                    <p className="text-xs">Specialization, corporate clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.45, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">📦</div>
                <h3 className="text-lg font-bold text-white mb-3">E-Commerce Product Selling</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Skills Required</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Product Sourcing</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Digital Marketing</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Logistics</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earning Potential</h4>
                    <p className="text-xs text-green-400">₹20,000-80,000/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Growth Opportunities</h4>
                    <p className="text-xs">Brand building, multiple categories</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Government Job Opportunities Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Government Job Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.3, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏦</div>
                <h3 className="text-lg font-bold text-white mb-3">Bank Clerk Jobs</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">10th/12th pass with basic computer knowledge</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Required Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Banking</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Computer</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Customer Service</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Career Growth</h4>
                    <p className="text-xs">Promotion to Officer, Manager positions</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.35, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">📋</div>
                <h3 className="text-lg font-bold text-white mb-3">SSC Commerce Roles</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">12th Commerce with graduation preferred</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Required Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Accounting</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">General Knowledge</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Reasoning</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Career Growth</h4>
                    <p className="text-xs">Promotion to higher administrative roles</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.4, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🚂</div>
                <h3 className="text-lg font-bold text-white mb-3">Railway Commercial Jobs</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">10th/12th pass with age limit 18-30</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Required Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Commerce</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Reasoning</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Career Growth</h4>
                    <p className="text-xs">Promotion to commercial supervisor roles</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.45, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏢</div>
                <h3 className="text-lg font-bold text-white mb-3">Government Office Assistant</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">12th pass with computer skills</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Required Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Office Skills</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Computer</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Communication</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Career Growth</h4>
                    <p className="text-xs">Promotion to section officer, department head</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏛️</div>
                <h3 className="text-lg font-bold text-white mb-3">Public Sector Banking Support</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">Graduation with commerce background</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Required Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Banking</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Finance</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Customer Service</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Career Growth</h4>
                    <p className="text-xs">Promotion to assistant manager, branch head</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.55, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-3">Tax & Finance Department Roles</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Eligibility</h4>
                    <p className="text-xs">Graduation with commerce/mathematics</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Required Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Taxation</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Accounting</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Financial Analysis</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Career Growth</h4>
                    <p className="text-xs">Promotion to tax officer, finance manager</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Industry Trends Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Industry Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.4, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏦</div>
                <h3 className="text-lg font-bold text-white mb-3">Digital Banking Growth</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Rate</span>
                    <span className="text-green-400">↑ 22% annually</span>
                  </div>
                  <div>
                    <span className="font-medium">Key Drivers</span>
                    <p className="text-xs mt-1">Mobile banking, UPI, digital payments</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salary Trends</span>
                    <span className="text-green-400">↑ 18% growth</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Demand</span>
                    <div className="flex gap-1 mt-1">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Tech Skills</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.45, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🛒</div>
                <h3 className="text-lg font-bold text-white mb-3">E-Commerce Industry Expansion</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Rate</span>
                    <span className="text-green-400">↑ 35% annually</span>
                  </div>
                  <div>
                    <span className="font-medium">Key Drivers</span>
                    <p className="text-xs mt-1">Online shopping, social commerce, quick delivery</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salary Trends</span>
                    <span className="text-green-400">↑ 25% growth</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Demand</span>
                    <div className="flex gap-1 mt-1">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Digital Skills</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-3">Startup Ecosystem Growth</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Rate</span>
                    <span className="text-green-400">↑ 28% annually</span>
                  </div>
                  <div>
                    <span className="font-medium">Key Drivers</span>
                    <p className="text-xs mt-1">Funding, innovation, digital transformation</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salary Trends</span>
                    <span className="text-green-400">↑ 30% growth</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Demand</span>
                    <div className="flex gap-1 mt-1">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Innovation</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.55, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">💻</div>
                <h3 className="text-lg font-bold text-white mb-3">Online Business Demand</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Rate</span>
                    <span className="text-green-400">↑ 40% annually</span>
                  </div>
                  <div>
                    <span className="font-medium">Key Drivers</span>
                    <p className="text-xs mt-1">Digital transformation, remote work, automation</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salary Trends</span>
                    <span className="text-green-400">↑ 32% growth</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Demand</span>
                    <div className="flex gap-1 mt-1">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Tech Skills</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.6, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">🏪</div>
                <h3 className="text-lg font-bold text-white mb-3">Retail Modernization Trends</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Rate</span>
                    <span className="text-green-400">↑ 15% annually</span>
                  </div>
                  <div>
                    <span className="font-medium">Key Drivers</span>
                    <p className="text-xs mt-1">Omnichannel retail, experiential stores</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salary Trends</span>
                    <span className="text-green-400">↑ 12% growth</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Demand</span>
                    <div className="flex gap-1 mt-1">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">High</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Customer Focus</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.65, type: 'spring', stiffness: 200, damping: 25 }} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-white mb-3">Financial Services Evolution</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Growth Rate</span>
                    <span className="text-green-400">↑ 20% annually</span>
                  </div>
                  <div>
                    <span className="font-medium">Key Drivers</span>
                    <p className="text-xs mt-1">FinTech, blockchain, digital payments</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salary Trends</span>
                    <span className="text-green-400">↑ 22% growth</span>
                  </div>
                  <div>
                    <span className="font-medium">Career Demand</span>
                    <div className="flex gap-1 mt-1">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Very High</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Finance Tech</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CommerceBusinessDiplomasScreen;
