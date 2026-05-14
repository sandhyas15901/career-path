import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface UIUXWebTechnologiesScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const UIUXWebTechnologiesScreen: React.FC<UIUXWebTechnologiesScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'ui-ux-design',
      icon: '🎨',
      color: 'from-blue-500 to-blue-600',
      title: 'UI/UX Design Diploma',
      bestFor: ['UI Design', 'UX Design', 'Web Design', 'App Design'],
      duration: '3 Years',
      careers: ['UI Designer', 'UX Designer', 'Product Designer', 'Web Designer'],
      recommended: 'Students interested in user interface design, user experience, and digital product design.',
      coreFocus: 'UI/UX design, user research, prototyping',
      technicalLevel: 'Intermediate',
      creativeLevel: 'Very High',
      practicalWork: 'High',
      industryDemand: 'Very High',
      certifications: 'Figma, Adobe XD, Sketch, UI/UX',
      higherStudy: 'B.E/B.Tech Design/Multimedia Lateral Entry',
      commonCareers: 'UI Designer, UX Designer, Product Designer',
      difficulty: 'Medium'
    },
    {
      id: 'web-development',
      icon: '🌐',
      color: 'from-green-500 to-green-600',
      title: 'Web Development Diploma',
      bestFor: ['Web Development', 'Web Design', 'Full Stack', 'Web Programming'],
      duration: '3 Years',
      careers: ['Web Developer', 'Full Stack Developer', 'Web Designer', 'Backend Developer'],
      recommended: 'Students interested in web development, web programming, and full stack development.',
      coreFocus: 'Web programming, web technologies, full stack',
      technicalLevel: 'Intermediate',
      creativeLevel: 'High',
      practicalWork: 'Very High',
      industryDemand: 'Very High',
      certifications: 'HTML/CSS, JavaScript, React, Node.js',
      higherStudy: 'B.E/B.Tech Computer Science/Web Development Lateral Entry',
      commonCareers: 'Web Developer, Full Stack Developer, Web Designer',
      difficulty: 'Medium'
    },
    {
      id: 'frontend-development',
      icon: '💻',
      color: 'from-purple-500 to-purple-600',
      title: 'Frontend Development Diploma',
      bestFor: ['Frontend Development', 'Web Design', 'UI Development', 'JavaScript'],
      duration: '3 Years',
      careers: ['Frontend Developer', 'UI Developer', 'Web Designer', 'JavaScript Developer'],
      recommended: 'Students interested in frontend development, web design, and UI development.',
      coreFocus: 'Frontend programming, UI development, web technologies',
      technicalLevel: 'Intermediate',
      creativeLevel: 'High',
      practicalWork: 'Very High',
      industryDemand: 'Very High',
      certifications: 'HTML/CSS, JavaScript, React, Vue.js',
      higherStudy: 'B.E/B.Tech Computer Science/Frontend Development Lateral Entry',
      commonCareers: 'Frontend Developer, UI Developer, Web Designer',
      difficulty: 'Medium'
    },
    {
      id: 'full-stack-development',
      icon: '🔧',
      color: 'from-orange-500 to-orange-600',
      title: 'Full Stack Development Diploma',
      bestFor: ['Full Stack Development', 'Web Development', 'Backend Development', 'Database'],
      duration: '3 Years',
      careers: ['Full Stack Developer', 'Backend Developer', 'Web Developer', 'Database Developer'],
      recommended: 'Students interested in full stack development, backend development, and database management.',
      coreFocus: 'Full stack programming, backend development, database',
      technicalLevel: 'Advanced',
      creativeLevel: 'Medium',
      practicalWork: 'Very High',
      industryDemand: 'Very High',
      certifications: 'HTML/CSS, JavaScript, Node.js, Database',
      higherStudy: 'B.E/B.Tech Computer Science/Full Stack Development Lateral Entry',
      commonCareers: 'Full Stack Developer, Backend Developer, Web Developer',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      uiUx: 'UI/UX design, user research, prototyping',
      webDev: 'Web programming, web technologies, full stack',
      frontend: 'Frontend programming, UI development, web technologies',
      fullstack: 'Full stack programming, backend development, database'
    },
    {
      feature: 'Technical Level',
      uiUx: 'Intermediate',
      webDev: 'Intermediate',
      frontend: 'Intermediate',
      fullstack: 'Advanced'
    },
    {
      feature: 'Creative Level',
      uiUx: 'Very High',
      webDev: 'High',
      frontend: 'High',
      fullstack: 'Medium'
    },
    {
      feature: 'Practical Work',
      uiUx: 'High',
      webDev: 'Very High',
      frontend: 'Very High',
      fullstack: 'Very High'
    },
    {
      feature: 'Industry Demand',
      uiUx: 'Very High',
      webDev: 'Very High',
      frontend: 'Very High',
      fullstack: 'Very High'
    },
    {
      feature: 'Certifications',
      uiUx: 'Figma, Adobe XD, Sketch, UI/UX',
      webDev: 'HTML/CSS, JavaScript, React, Node.js',
      frontend: 'HTML/CSS, JavaScript, React, Vue.js',
      fullstack: 'HTML/CSS, JavaScript, Node.js, Database'
    },
    {
      feature: 'Higher Study Opportunities',
      uiUx: 'B.E/B.Tech Design/Multimedia Lateral Entry',
      webDev: 'B.E/B.Tech Computer Science/Web Development Lateral Entry',
      frontend: 'B.E/B.Tech Computer Science/Frontend Development Lateral Entry',
      fullstack: 'B.E/B.Tech Computer Science/Full Stack Development Lateral Entry'
    },
    {
      feature: 'Common Careers',
      uiUx: 'UI Designer, UX Designer, Product Designer',
      webDev: 'Web Developer, Full Stack Developer, Web Designer',
      frontend: 'Frontend Developer, UI Developer, Web Designer',
      fullstack: 'Full Stack Developer, Backend Developer, Web Developer'
    },
    {
      feature: 'Difficulty Level',
      uiUx: 'Medium',
      webDev: 'Medium',
      frontend: 'Medium',
      fullstack: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🎨',
      title: 'Choose UI/UX Design If:',
      reasons: [
        'You enjoy user interface and experience design',
        'You are interested in digital product design',
        'You want UI/UX design careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🌐',
      title: 'Choose Web Development If:',
      reasons: [
        'You enjoy web programming and development',
        'You are interested in web technologies',
        'You want web development careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '💻',
      title: 'Choose Frontend Development If:',
      reasons: [
        'You enjoy frontend programming and UI development',
        'You are interested in web technologies',
        'You want frontend development careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🔧',
      title: 'Choose Full Stack Development If:',
      reasons: [
        'You enjoy full stack programming and backend development',
        'You are interested in database management',
        'You want full stack development careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'UI/UX Designer',
      icon: '🎨',
      skills: ['UI Design', 'UX Research', 'Prototyping'],
      roadmap: 'Diploma → Junior UI/UX Designer → UI/UX Designer → Senior Designer',
      salary: '₹5-18 LPA',
      demand: 'Very High',
      futureScope: 'Product Design, Design Systems, UX Strategy'
    },
    {
      title: 'Full Stack Developer',
      icon: '🔧',
      skills: ['Full Stack Development', 'Backend Development', 'Database'],
      roadmap: 'Diploma → Junior Full Stack Developer → Full Stack Developer → Senior Developer',
      salary: '₹6-20 LPA',
      demand: 'Very High',
      futureScope: 'Cloud Development, DevOps, Architecture'
    },
    {
      title: 'Frontend Developer',
      icon: '💻',
      skills: ['Frontend Development', 'JavaScript', 'React'],
      roadmap: 'Diploma → Junior Frontend Developer → Frontend Developer → Senior Developer',
      salary: '₹4-16 LPA',
      demand: 'Very High',
      futureScope: 'Modern Frameworks, Web3, Progressive Web Apps'
    },
    {
      title: 'Web Developer',
      icon: '🌐',
      skills: ['Web Development', 'HTML/CSS', 'JavaScript'],
      roadmap: 'Diploma → Junior Web Developer → Web Developer → Senior Developer',
      salary: '₹3-14 LPA',
      demand: 'Very High',
      futureScope: 'Modern Web Technologies, Cloud Web Apps'
    },
    {
      title: 'Product Designer',
      icon: '📱',
      skills: ['Product Design', 'UI/UX', 'User Research'],
      roadmap: 'Diploma → Junior Product Designer → Product Designer → Senior Designer',
      salary: '₹6-20 LPA',
      demand: 'Very High',
      futureScope: 'Product Strategy, Design Leadership'
    },
    {
      title: 'Backend Developer',
      icon: '⚙️',
      skills: ['Backend Development', 'Database', 'APIs'],
      roadmap: 'Diploma → Junior Backend Developer → Backend Developer → Senior Developer',
      salary: '₹5-18 LPA',
      demand: 'Very High',
      futureScope: 'Cloud Architecture, Microservices'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('computer_it_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎨</span>
            <h1 className="text-4xl font-bold text-white">UI/UX & Web Technologies</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on UI/UX design, web development, frontend development, and full stack development for modern web careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('computer_it_diplomas')}>Computer & IT Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">UI/UX & Web Technologies</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="uiux">UI/UX Design</option>
              <option value="web">Web Development</option>
              <option value="frontend">Frontend Development</option>
              <option value="fullstack">Full Stack Development</option>
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
                    <div className="flex justify-between"><span className="text-white/50">Creative Level:</span><span className="text-white/80">{course.creativeLevel}</span></div>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">UI/UX Design</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Web Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Frontend Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Full Stack Development</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.uiUx}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.webDev}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.frontend}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.fullstack}</td>
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
            {[
              {
                title: 'DCET',
                icon: '📝',
                eligibility: '10th with Science & Math',
                process: 'Entrance Exam → Counseling → Admission',
                higherStudy: 'Direct 2nd Year B.E/B.Tech Computer Science/Web Development',
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
                title: 'Lateral Entry to B.E/B.Tech CSE',
                icon: '🔄',
                eligibility: 'Diploma in Computer Science/Web Development',
                process: 'LEET Exam → Counseling → 2nd Year Admission',
                higherStudy: 'Complete Engineering Degree',
                successRate: '70%'
              }
            ].map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
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
            {[
              {
                title: 'Figma UI/UX Design',
                level: 'Beginner',
                duration: '3 Months',
                icon: '🎨',
                relevance: 'Essential for UI/UX design',
                skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping']
              },
              {
                title: 'React.js Development',
                level: 'Intermediate',
                duration: '4 Months',
                icon: '⚛️',
                relevance: 'Essential for frontend development',
                skills: ['React', 'JavaScript', 'Component Development', 'State Management']
              },
              {
                title: 'Node.js Backend',
                level: 'Intermediate',
                duration: '4 Months',
                icon: '🟢',
                relevance: 'Essential for backend development',
                skills: ['Node.js', 'Express', 'API Development', 'Database']
              },
              {
                title: 'HTML/CSS/JavaScript',
                level: 'Beginner',
                duration: '3 Months',
                icon: '🌐',
                relevance: 'Foundation for web development',
                skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
              },
              {
                title: 'Vue.js Development',
                level: 'Intermediate',
                duration: '4 Months',
                icon: '💚',
                relevance: 'Modern frontend framework',
                skills: ['Vue.js', 'JavaScript', 'Component Development', 'Vue Router']
              },
              {
                title: 'MongoDB Database',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🍃',
                relevance: 'NoSQL database skills',
                skills: ['MongoDB', 'NoSQL', 'Database Design', 'Mongoose']
              }
            ].map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
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
                types: ['UI/UX Design', 'Web Development', 'Full Stack']
              },
              {
                name: 'Startups',
                icon: '🚀',
                demand: 'Very High',
                growth: '+30%',
                opportunities: 'Tech Startups, Product Companies, SaaS Companies',
                types: ['Full Stack', 'Frontend', 'UI/UX Design']
              },
              {
                name: 'E-commerce Companies',
                icon: '🛒',
                demand: 'Very High',
                growth: '+22%',
                opportunities: 'Amazon, Flipkart, Shopify, E-commerce Platforms',
                types: ['Web Development', 'UI/UX Design', 'Frontend']
              },
              {
                name: 'Digital Agencies',
                icon: '🏢',
                demand: 'High',
                growth: '+18%',
                opportunities: 'Web Agencies, Design Agencies, Marketing Agencies',
                types: ['UI/UX Design', 'Web Development', 'Frontend']
              },
              {
                name: 'FinTech Companies',
                icon: '💰',
                demand: 'Very High',
                growth: '+20%',
                opportunities: 'Banks, Payment Companies, Financial Services',
                types: ['Full Stack', 'UI/UX Design', 'Web Development']
              },
              {
                name: 'Healthcare Tech',
                icon: '🏥',
                demand: 'High',
                growth: '+15%',
                opportunities: 'Healthcare Apps, Medical Websites, Health Tech',
                types: ['UI/UX Design', 'Web Development', 'Frontend']
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
                title: 'UI/UX Design Freelancer',
                icon: '🎨',
                skills: ['UI Design', 'UX Research', 'Prototyping', 'Figma'],
                earning: '₹25,000-1,50,000/month',
                growth: 'Very High',
                opportunities: 'App Design, Web Design, Product Design'
              },
              {
                title: 'Web Development Freelancer',
                icon: '🌐',
                skills: ['Web Development', 'HTML/CSS', 'JavaScript', 'React'],
                earning: '₹30,000-2,00,000/month',
                growth: 'Very High',
                opportunities: 'Website Development, Web Apps, E-commerce'
              },
              {
                title: 'Full Stack Freelancer',
                icon: '🔧',
                skills: ['Full Stack', 'Backend', 'Database', 'APIs'],
                earning: '₹40,000-2,50,000/month',
                growth: 'Very High',
                opportunities: 'Full Stack Projects, Web Applications, SaaS'
              },
              {
                title: 'Frontend Freelancer',
                icon: '💻',
                skills: ['Frontend', 'JavaScript', 'React', 'Vue.js'],
                earning: '₹25,000-1,80,000/month',
                growth: 'Very High',
                opportunities: 'Frontend Projects, UI Development, React Apps'
              },
              {
                title: 'Web Agency Founder',
                icon: '🏢',
                skills: ['Web Development', 'Business Management', 'Client Relations'],
                earning: '₹50,000-5,00,000/month',
                growth: 'High',
                opportunities: 'Web Agency, Design Studio, Development Company'
              },
              {
                title: 'SaaS Product Founder',
                icon: '🚀',
                skills: ['Product Development', 'Full Stack', 'Business Strategy'],
                earning: '₹1,00,000-10,00,000/month',
                growth: 'Very High',
                opportunities: 'SaaS Products, Web Applications, Tech Startups'
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
                title: 'NIC Web Developer',
                icon: '🏛️',
                eligibility: 'Diploma in Computer Science/Web Development',
                skills: ['Web Development', 'Government Systems', 'Security Clearance'],
                growth: 'Digital government initiatives',
                salary: '₹5-12 LPA'
              },
              {
                title: 'Government UI/UX Designer',
                icon: '🎨',
                eligibility: 'Diploma in UI/UX Design/Web Development',
                skills: ['UI/UX Design', 'Government Portals', 'Digital Services'],
                growth: 'Digital governance expansion',
                salary: '₹4-10 LPA'
              },
              {
                title: 'Public Sector Web Developer',
                icon: '🌐',
                eligibility: 'Diploma in Computer Science/Web Development',
                skills: ['Web Development', 'Public Services', 'Government Systems'],
                growth: 'Digital public services',
                salary: '₹4-11 LPA'
              },
              {
                title: 'E-governance Developer',
                icon: '💻',
                eligibility: 'Diploma in Computer Science/Web Development',
                skills: ['E-governance', 'Web Development', 'Digital Services'],
                growth: 'E-governance initiatives',
                salary: '₹5-13 LPA'
              },
              {
                title: 'Government Full Stack Developer',
                icon: '🔧',
                eligibility: 'Diploma in Computer Science/Full Stack Development',
                skills: ['Full Stack', 'Government Applications', 'Database'],
                growth: 'Government digital transformation',
                salary: '₹6-14 LPA'
              },
              {
                title: 'Digital Services UI/UX Designer',
                icon: '📱',
                eligibility: 'Diploma in UI/UX Design/Multimedia',
                skills: ['UI/UX Design', 'Digital Services', 'User Research'],
                growth: 'Digital service expansion',
                salary: '₹4-9 LPA'
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
                title: 'UI/UX Design Revolution',
                icon: '🎨',
                growth: '25%',
                description: 'Growing importance of user experience in digital products',
                salaryImpact: '+25%',
                demand: 'Very High'
              },
              {
                title: 'Web Development Boom',
                icon: '🌐',
                growth: '22%',
                description: 'Massive growth in web applications and digital platforms',
                salaryImpact: '+20%',
                demand: 'Very High'
              },
              {
                title: 'Full Stack Development Rise',
                icon: '🔧',
                growth: '20%',
                description: 'Increasing demand for versatile full stack developers',
                salaryImpact: '+22%',
                demand: 'Very High'
              },
              {
                title: 'Frontend Framework Evolution',
                icon: '💻',
                growth: '18%',
                description: 'Modern frontend frameworks and component-based development',
                salaryImpact: '+18%',
                demand: 'Very High'
              },
              {
                title: 'SaaS Product Development',
                icon: '🚀',
                growth: '28%',
                description: 'Rise of Software as a Service and web-based products',
                salaryImpact: '+30%',
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

export default UIUXWebTechnologiesScreen;
