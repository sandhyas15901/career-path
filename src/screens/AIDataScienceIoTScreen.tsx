import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface AIDataScienceIoTScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const AIDataScienceIoTScreen: React.FC<AIDataScienceIoTScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'ai-machine-learning',
      icon: '🤖',
      color: 'from-purple-500 to-purple-600',
      title: 'AI & Machine Learning Diploma',
      bestFor: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'AI Development'],
      duration: '3 Years',
      careers: ['AI Engineer', 'ML Engineer', 'AI Researcher', 'Machine Learning Specialist'],
      recommended: 'Students interested in AI, machine learning, and intelligent systems.',
      coreFocus: 'AI systems, machine learning, neural networks',
      technicalLevel: 'Advanced',
      mathLevel: 'Very High',
      practicalWork: 'Very High',
      industryDemand: 'Very High',
      certifications: 'TensorFlow, PyTorch, AWS ML',
      higherStudy: 'B.E/B.Tech Computer Science/AI/Data Science Lateral Entry',
      commonCareers: 'AI Engineer, ML Engineer, Data Scientist',
      difficulty: 'Hard'
    },
    {
      id: 'data-science',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
      title: 'Data Science Diploma',
      bestFor: ['Data Analysis', 'Statistics', 'Data Visualization', 'Big Data'],
      duration: '3 Years',
      careers: ['Data Scientist', 'Data Analyst', 'Business Analyst', 'Data Engineer'],
      recommended: 'Students interested in data analysis, statistics, and big data technologies.',
      coreFocus: 'Data analytics, statistics, big data processing',
      technicalLevel: 'Advanced',
      mathLevel: 'Very High',
      practicalWork: 'High',
      industryDemand: 'Very High',
      certifications: 'Python Data Science, SQL, Tableau',
      higherStudy: 'B.E/B.Tech Computer Science/AI/Data Science Lateral Entry',
      commonCareers: 'Data Scientist, Data Analyst, Business Analyst',
      difficulty: 'Hard'
    },
    {
      id: 'iot-development',
      icon: '🌐',
      color: 'from-green-500 to-green-600',
      title: 'IoT Development Diploma',
      bestFor: ['IoT Development', 'Embedded Systems', 'Sensor Networks', 'Smart Devices'],
      duration: '3 Years',
      careers: ['IoT Developer', 'Embedded Systems Engineer', 'IoT Specialist', 'Smart Device Developer'],
      recommended: 'Students interested in IoT, embedded systems, and smart device development.',
      coreFocus: 'IoT systems, embedded programming, sensor networks',
      technicalLevel: 'Intermediate',
      mathLevel: 'Medium',
      practicalWork: 'Very High',
      industryDemand: 'High',
      certifications: 'IoT Fundamentals, Embedded Systems, Arduino/Raspberry Pi',
      higherStudy: 'B.E/B.Tech Computer Science/Electronics Lateral Entry',
      commonCareers: 'IoT Developer, Embedded Engineer, IoT Specialist',
      difficulty: 'Medium-Hard'
    },
    {
      id: 'data-analytics',
      icon: '📈',
      color: 'from-orange-500 to-orange-600',
      title: 'Data Analytics Diploma',
      bestFor: ['Data Analytics', 'Business Intelligence', 'Reporting', 'Data Visualization'],
      duration: '3 Years',
      careers: ['Data Analyst', 'Business Intelligence Analyst', 'Reporting Specialist', 'Analytics Consultant'],
      recommended: 'Students interested in data analytics, business intelligence, and reporting.',
      coreFocus: 'Data analysis, business intelligence, reporting systems',
      technicalLevel: 'Intermediate',
      mathLevel: 'High',
      practicalWork: 'High',
      industryDemand: 'High',
      certifications: 'SQL, Power BI, Tableau, Excel Analytics',
      higherStudy: 'B.E/B.Tech Computer Science/Statistics Lateral Entry',
      commonCareers: 'Data Analyst, BI Analyst, Analytics Consultant',
      difficulty: 'Medium'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      aiML: 'AI systems, machine learning, neural networks',
      dataScience: 'Data analytics, statistics, big data processing',
      iot: 'IoT systems, embedded programming, sensor networks',
      dataAnalytics: 'Data analysis, business intelligence, reporting systems'
    },
    {
      feature: 'Technical Level',
      aiML: 'Advanced',
      dataScience: 'Advanced',
      iot: 'Intermediate',
      dataAnalytics: 'Intermediate'
    },
    {
      feature: 'Math Level',
      aiML: 'Very High',
      dataScience: 'Very High',
      iot: 'Medium',
      dataAnalytics: 'High'
    },
    {
      feature: 'Practical Work',
      aiML: 'Very High',
      dataScience: 'High',
      iot: 'Very High',
      dataAnalytics: 'High'
    },
    {
      feature: 'Industry Demand',
      aiML: 'Very High',
      dataScience: 'Very High',
      iot: 'High',
      dataAnalytics: 'High'
    },
    {
      feature: 'Certifications',
      aiML: 'TensorFlow, PyTorch, AWS ML',
      dataScience: 'Python Data Science, SQL, Tableau',
      iot: 'IoT Fundamentals, Embedded Systems, Arduino/Raspberry Pi',
      dataAnalytics: 'SQL, Power BI, Tableau, Excel Analytics'
    },
    {
      feature: 'Higher Study Opportunities',
      aiML: 'B.E/B.Tech Computer Science/AI/Data Science Lateral Entry',
      dataScience: 'B.E/B.Tech Computer Science/AI/Data Science Lateral Entry',
      iot: 'B.E/B.Tech Computer Science/Electronics Lateral Entry',
      dataAnalytics: 'B.E/B.Tech Computer Science/Statistics Lateral Entry'
    },
    {
      feature: 'Common Careers',
      aiML: 'AI Engineer, ML Engineer, Data Scientist',
      dataScience: 'Data Scientist, Data Analyst, Business Analyst',
      iot: 'IoT Developer, Embedded Engineer, IoT Specialist',
      dataAnalytics: 'Data Analyst, BI Analyst, Analytics Consultant'
    },
    {
      feature: 'Difficulty Level',
      aiML: 'Hard',
      dataScience: 'Hard',
      iot: 'Medium-Hard',
      dataAnalytics: 'Medium'
    }
  ];

  const chooseOptions = [
    {
      icon: '🤖',
      title: 'Choose AI & Machine Learning If:',
      reasons: [
        'You enjoy AI systems and machine learning',
        'You are interested in neural networks',
        'You want AI engineering careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📊',
      title: 'Choose Data Science If:',
      reasons: [
        'You enjoy data analysis and statistics',
        'You are interested in big data',
        'You want data science careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🌐',
      title: 'Choose IoT Development If:',
      reasons: [
        'You enjoy embedded systems and IoT',
        'You are interested in smart devices',
        'You want IoT development careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📈',
      title: 'Choose Data Analytics If:',
      reasons: [
        'You enjoy data analysis and reporting',
        'You are interested in business intelligence',
        'You want analytics careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'AI Engineer',
      icon: '🤖',
      skills: ['Machine Learning', 'Neural Networks', 'AI Development'],
      roadmap: 'Diploma → AI Engineer → Senior AI Engineer → AI Architect',
      salary: '₹8-25 LPA',
      demand: 'Very High',
      futureScope: 'AGI, Computer Vision, NLP, Robotics'
    },
    {
      title: 'Data Scientist',
      icon: '📊',
      skills: ['Data Analysis', 'Statistics', 'Machine Learning'],
      roadmap: 'Diploma → Data Scientist → Senior Data Scientist → Chief Data Officer',
      salary: '₹7-22 LPA',
      demand: 'Very High',
      futureScope: 'Big Data, Predictive Analytics, AI Integration'
    },
    {
      title: 'IoT Developer',
      icon: '🌐',
      skills: ['IoT Development', 'Embedded Systems', 'Sensor Networks'],
      roadmap: 'Diploma → IoT Developer → Senior IoT Developer → IoT Architect',
      salary: '₹5-18 LPA',
      demand: 'High',
      futureScope: 'Smart Cities, Industry 4.0, Edge Computing'
    },
    {
      title: 'Data Analyst',
      icon: '📈',
      skills: ['Data Analysis', 'Business Intelligence', 'Visualization'],
      roadmap: 'Diploma → Data Analyst → Senior Analyst → Analytics Manager',
      salary: '₹4-15 LPA',
      demand: 'High',
      futureScope: 'Advanced Analytics, Real-time Analytics, AI-assisted Analysis'
    },
    {
      title: 'ML Engineer',
      icon: '🧠',
      skills: ['Machine Learning', 'Model Deployment', 'AI Systems'],
      roadmap: 'Diploma → ML Engineer → Senior ML Engineer → ML Architect',
      salary: '₹8-20 LPA',
      demand: 'Very High',
      futureScope: 'Deep Learning, Reinforcement Learning, AutoML'
    },
    {
      title: 'Business Intelligence Analyst',
      icon: '💼',
      skills: ['BI Tools', 'Data Visualization', 'Business Analysis'],
      roadmap: 'Diploma → BI Analyst → Senior BI Analyst → BI Manager',
      salary: '₹5-16 LPA',
      demand: 'High',
      futureScope: 'Advanced BI, Real-time Dashboards, Predictive BI'
    }
  ];

  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech Computer Science/AI/Data Science',
      successRate: '75%'
    },
    {
      title: 'Polytechnic CET',
      icon: '🎯',
      eligibility: '10th Pass',
      process: 'State Exam → Merit List → Admission',
      higherStudy: 'Lateral Entry to Engineering',
      successRate: '60%'
    },
    {
      title: 'Direct Admission',
      icon: '🎓',
      eligibility: '10th Pass',
      process: 'Application → Interview → Admission',
      higherStudy: 'Regular B.E/B.Tech Admission',
      successRate: '85%'
    },
    {
      title: 'Lateral Entry to B.E/B.Tech CSE/AI/DS',
      icon: '🔄',
      eligibility: 'Diploma in Computer Science/AI/Data Science',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  const skillCourses = [
    {
      title: 'Python for Data Science',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🐍',
      relevance: 'Essential for data science and AI',
      skills: ['Python Basics', 'NumPy', 'Pandas']
    },
    {
      title: 'Machine Learning Basics',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🤖',
      relevance: 'Core AI/ML skills',
      skills: ['ML Algorithms', 'Model Training', 'Scikit-learn']
    },
    {
      title: 'SQL & Database',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🗄️',
      relevance: 'Essential for data handling',
      skills: ['SQL', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Data Visualization',
      level: 'Intermediate',
      duration: '3 Months',
      icon: '📊',
      relevance: 'Important for data presentation',
      skills: ['Tableau', 'Power BI', 'D3.js']
    },
    {
      title: 'IoT Development',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🌐',
      relevance: 'Core IoT skills',
      skills: ['Arduino', 'Raspberry Pi', 'Sensor Integration']
    },
    {
      title: 'TensorFlow/PyTorch',
      level: 'Advanced',
      duration: '4 Months',
      icon: '🧠',
      relevance: 'Advanced AI/ML frameworks',
      skills: ['Deep Learning', 'Neural Networks', 'Model Deployment']
    }
  ];

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getGrowthBadge = (growth: string) => {
    const growthValue = parseInt(growth.replace(/\D/g, ''));
    if (growthValue >= 20) return 'bg-green-500/20 text-green-300 border-green-500/30';
    if (growthValue >= 15) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (growthValue >= 10) return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('computer_it_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🤖</span>
            <h1 className="text-4xl font-bold text-white">AI, Data Science & IoT</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on artificial intelligence, data science, IoT development, and data analytics for cutting-edge technology careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('computer_it_diplomas')}>Computer & IT Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">AI, Data Science & IoT</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="data">Data Science</option>
              <option value="iot">IoT Development</option>
              <option value="analytics">Data Analytics</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaCourses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group" onClick={() => toggleCardExpansion(course.id)}>
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mx-auto mb-3`}>{course.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Best For</h4>
                    <div className="space-y-1">{course.bestFor.map((item, idx) => (<div key={idx} className="flex items-center gap-2"><Check className="w-3 h-3 text-green-400 flex-shrink-0" /><span className="text-white/80 text-xs">{item}</span></div>))}</div>
                  </div>
                  <div><span className="text-white/50 text-xs">Duration</span><p className="text-white/90 text-sm font-medium">{course.duration}</p></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-1">{course.careers.slice(0, 2).map((career, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">{career}</span>))}{course.careers.length > 2 && (<span className="px-2 py-1 bg-white/5 text-white/60 rounded-full text-xs">+{course.careers.length - 2} more</span>)}</div>
                  </div>
                  <div className="pt-3 border-t border-white/10"><p className="text-white/70 text-xs italic">{course.recommended}</p></div>
                </div>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: expandedCard === course.id ? 1 : 0, height: expandedCard === course.id ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="pt-4 border-t border-white/10 mt-4">
                  <div className="grid grid-cols-1 gap-3 text-xs">
                    <div className="flex justify-between"><span className="text-white/50">Core Focus:</span><span className="text-white/80">{course.coreFocus}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Technical Level:</span><span className="text-white/80">{course.technicalLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Math Level:</span><span className="text-white/80">{course.mathLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Practical Work:</span><span className="text-white/80">{course.practicalWork}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Industry Demand:</span><span className="text-white/80">{course.industryDemand}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Certifications:</span><span className="text-white/80">{course.certifications}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Higher Study:</span><span className="text-white/80">{course.higherStudy}</span></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Comparison Table</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white font-semibold text-sm">Feature</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">AI & ML</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Data Science</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">IoT Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Data Analytics</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.aiML}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.dataScience}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.iot}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.dataAnalytics}</td>
                </tr>))}</tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseOptions.map((option, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white text-2xl mx-auto mb-4`}>{option.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4 text-center">{option.title}</h3>
                <div className="space-y-2">{option.reasons.map((reason, idx) => (<div key={idx} className="flex items-start gap-2"><Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" /><span className="text-white/80 text-sm">{reason}</span></div>))}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + index * 0.05 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{career.icon}</div>
                  <h3 className="text-lg font-bold text-white">{career.title}</h3>
                </div>
                <div className="space-y-3">
                  <div><span className="text-white/50 text-xs">Career Roadmap</span><p className="text-white/80 text-sm">{career.roadmap}</p></div>
                  <div>
                    <span className="text-white/50 text-xs">Skills Needed</span>
                    <div className="flex flex-wrap gap-1 mt-1">{career.skills.map((skill, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{skill}</span>))}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><span className="text-white/50 text-xs">Average Salary</span><p className="text-white/90 text-sm font-medium">{career.salary}</p></div>
                    <div><span className="text-white/50 text-xs">Industry Demand</span><p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(career.demand)}`}>{career.demand}</p></div>
                  </div>
                  <div><span className="text-white/50 text-xs">Future Scope</span><p className="text-white/80 text-sm">{career.futureScope}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Polytechnic Admissions & Higher Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissions.map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
                  <h3 className="text-lg font-bold text-white">{admission.title}</h3>
                </div>
                <div className="space-y-3">
                  <div><span className="text-white/50 text-xs">Eligibility</span><p className="text-white/80 text-sm">{admission.eligibility}</p></div>
                  <div><span className="text-white/50 text-xs">Admission Process</span><p className="text-white/80 text-sm">{admission.process}</p></div>
                  <div><span className="text-white/50 text-xs">Higher Study Opportunities</span><p className="text-white/80 text-sm">{admission.higherStudy}</p></div>
                  <div><span className="text-white/50 text-xs">Success Rate</span><p className="text-white/90 text-sm font-medium">{admission.successRate}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div><span className="text-white/50 text-xs">Level</span><p className="text-white/90 text-sm font-medium">{course.level}</p></div>
                    <div><span className="text-white/50 text-xs">Duration</span><p className="text-white/90 text-sm font-medium">{course.duration}</p></div>
                  </div>
                  <div><span className="text-white/50 text-xs">Career Relevance</span><p className="text-white/80 text-sm">{course.relevance}</p></div>
                  <div>
                    <span className="text-white/50 text-xs">Skills Covered</span>
                    <div className="flex flex-wrap gap-1 mt-1">{course.skills.map((skill, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{skill}</span>))}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries Hiring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Tech Companies',
                icon: '💻',
                demand: 'Very High',
                growth: '+25%',
                opportunities: 'Google, Microsoft, Amazon, Apple, Meta',
                types: ['AI Development', 'Data Science', 'Machine Learning']
              },
              {
                name: 'AI Startups',
                icon: '🚀',
                demand: 'Very High',
                growth: '+35%',
                opportunities: 'OpenAI, Anthropic, Hugging Face, AI Startups',
                types: ['AI Research', 'Product Development', 'Innovation']
              },
              {
                name: 'Healthcare Tech',
                icon: '🏥',
                demand: 'High',
                growth: '+20%',
                opportunities: 'Healthcare AI, Medical Analytics, BioTech',
                types: ['Medical AI', 'Health Analytics', 'Biotech']
              },
              {
                name: 'Finance & Banking',
                icon: '🏦',
                demand: 'Very High',
                growth: '+22%',
                opportunities: 'Banks, FinTech, Insurance Companies',
                types: ['Risk Analytics', 'Fraud Detection', 'Algorithmic Trading']
              },
              {
                name: 'Manufacturing',
                icon: '🏭',
                demand: 'High',
                growth: '+18%',
                opportunities: 'Smart Manufacturing, Industrial IoT, Automation',
                types: ['Industrial IoT', 'Predictive Maintenance', 'Quality Control']
              },
              {
                name: 'Research Institutions',
                icon: '🔬',
                demand: 'Medium',
                growth: '+15%',
                opportunities: 'Universities, Research Labs, Government Research',
                types: ['Academic Research', 'Applied Research', 'Data Analysis']
              }
            ].map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{industry.icon}</div>
                  <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Demand</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(industry.demand)}`}>{industry.demand}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Growth</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(industry.growth)}`}>{industry.growth}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Opportunities</span>
                    <p className="text-white/80 text-sm">{industry.opportunities}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Job Types</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {industry.types.map((type, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{type}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Freelancing & Startup Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI/ML Consultant',
                icon: '🤖',
                skills: ['Machine Learning', 'AI Development', 'Model Training'],
                earning: '₹50,000-3,00,000/month',
                growth: 'Very High',
                opportunities: 'AI Consulting, Model Development, AI Solutions'
              },
              {
                title: 'Data Science Freelancer',
                icon: '📊',
                skills: ['Data Analysis', 'Statistics', 'Visualization'],
                earning: '₹40,000-2,50,000/month',
                growth: 'Very High',
                opportunities: 'Data Analytics, Business Intelligence, Reporting'
              },
              {
                title: 'IoT Solutions Developer',
                icon: '🌐',
                skills: ['IoT Development', 'Embedded Systems', 'Sensor Integration'],
                earning: '₹35,000-2,00,000/month',
                growth: 'High',
                opportunities: 'IoT Projects, Smart Devices, Automation'
              },
              {
                title: 'AI Startup Founder',
                icon: '🚀',
                skills: ['AI Innovation', 'Product Development', 'Business Strategy'],
                earning: '₹1,00,000-10,00,000/month',
                growth: 'Very High',
                opportunities: 'AI Products, SaaS Solutions, Tech Innovation'
              },
              {
                title: 'Data Analytics Consultant',
                icon: '📈',
                skills: ['Data Analytics', 'Business Intelligence', 'Reporting'],
                earning: '₹30,000-1,50,000/month',
                growth: 'High',
                opportunities: 'Analytics Consulting, BI Solutions, Data Strategy'
              },
              {
                title: 'ML Model Developer',
                icon: '🧠',
                skills: ['Model Development', 'Deep Learning', 'Deployment'],
                earning: '₹45,000-2,50,000/month',
                growth: 'Very High',
                opportunities: 'Custom Models, AI Solutions, Model Optimization'
              }
            ].map((opportunity, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{opportunity.icon}</div>
                  <h3 className="text-lg font-bold text-white">{opportunity.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Skills Required</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {opportunity.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Earning Potential</span>
                    <p className="text-white/90 text-sm font-medium">{opportunity.earning}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(opportunity.growth)}`}>{opportunity.growth}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Opportunities</span>
                      <p className="text-white/80 text-sm">{opportunity.opportunities}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Government Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'DRDO AI Scientist',
                icon: '🛡️',
                eligibility: 'Diploma in Computer Science/AI/Data Science',
                skills: ['AI Research', 'Defense Systems', 'Security Clearance'],
                growth: 'Prestigious defense sector',
                salary: '₹8-18 LPA'
              },
              {
                title: 'NIC Data Scientist',
                icon: '🏛️',
                eligibility: 'Diploma in Computer Science/Data Science',
                skills: ['Data Science', 'Government Systems', 'Security Clearance'],
                growth: 'Digital government initiatives',
                salary: '₹6-15 LPA'
              },
              {
                title: 'ISRO IoT Engineer',
                icon: '🚀',
                eligibility: 'Diploma in Computer Science/Electronics/IoT',
                skills: ['IoT Engineering', 'Space Technology', 'Technical Support'],
                growth: 'Space sector expansion',
                salary: '₹7-16 LPA'
              },
              {
                title: 'AI Research Scientist',
                icon: '🔬',
                eligibility: 'Diploma in Computer Science/AI',
                skills: ['AI Research', 'Machine Learning', 'Research Methods'],
                growth: 'National AI initiatives',
                salary: '₹6-14 LPA'
              },
              {
                title: 'Government Data Analyst',
                icon: '📊',
                eligibility: 'Diploma in Computer Science/Statistics',
                skills: ['Data Analysis', 'Government Analytics', 'Reporting'],
                growth: 'Data-driven governance',
                salary: '₹4-12 LPA'
              },
              {
                title: 'Smart City IoT Engineer',
                icon: '🏙️',
                eligibility: 'Diploma in Computer Science/IoT',
                skills: ['IoT Development', 'Smart Systems', 'Urban Planning'],
                growth: 'Smart city projects',
                salary: '₹5-13 LPA'
              }
            ].map((job, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{job.icon}</div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/80 text-sm">{job.eligibility}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Required Skills</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Career Growth</span>
                    <p className="text-white/80 text-sm">{job.growth}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Salary Range</span>
                    <p className="text-white/90 text-sm font-medium">{job.salary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Revolution',
                icon: '🤖',
                growth: '30%',
                description: 'Massive adoption of AI across all industries and sectors',
                salaryImpact: '+35%',
                demand: 'Very High'
              },
              {
                title: 'Data Science Boom',
                icon: '📊',
                growth: '25%',
                description: 'Exponential growth in data-driven decision making',
                salaryImpact: '+30%',
                demand: 'Very High'
              },
              {
                title: 'IoT Expansion',
                icon: '🌐',
                growth: '20%',
                description: 'Rapid growth in connected devices and smart systems',
                salaryImpact: '+25%',
                demand: 'High'
              },
              {
                title: 'Machine Learning Evolution',
                icon: '🧠',
                growth: '28%',
                description: 'Advanced ML applications in business and research',
                salaryImpact: '+32%',
                demand: 'Very High'
              },
              {
                title: 'Big Data Analytics',
                icon: '📈',
                growth: '22%',
                description: 'Growing importance of big data in business decisions',
                salaryImpact: '+28%',
                demand: 'Very High'
              }
            ].map((trend, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{trend.icon}</div>
                  <h3 className="text-lg font-bold text-white">{trend.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Description</span>
                    <p className="text-white/80 text-sm">{trend.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth Rate</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(trend.growth)}`}>{trend.growth}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Salary Impact</span>
                      <p className="text-white/90 text-sm font-medium">{trend.salaryImpact}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Industry Demand</span>
                    <p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(trend.demand)}`}>{trend.demand}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIDataScienceIoTScreen;
