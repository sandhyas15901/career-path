import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface UIUXWebDesignScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const UIUXWebDesignScreen: React.FC<UIUXWebDesignScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'ui-design',
      icon: '🎨',
      color: 'from-blue-500 to-blue-600',
      title: 'UI Design',
      bestFor: ['UI Design', 'Visual Design', 'Interface Design', 'Design Systems'],
      duration: '3 Years',
      careers: ['UI Designer', 'Visual Designer', 'Interface Designer', 'Design System Specialist'],
      recommended: 'Students interested in UI design, visual design, and interface design.',
      coreFocus: 'UI design, visual design, interface design',
      technicalLevel: 'High',
      creativeLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'UI Design Certificate, Visual Design License',
      higherStudy: 'B.Sc UI Design Lateral Entry',
      commonCareers: 'UI Designer, Visual Designer, Interface Designer, Design System Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'ux-design',
      icon: '👤',
      color: 'from-purple-500 to-purple-600',
      title: 'UX Design',
      bestFor: ['UX Design', 'User Research', 'Interaction Design', 'Usability Testing'],
      duration: '3 Years',
      careers: ['UX Designer', 'User Researcher', 'Interaction Designer', 'Usability Specialist'],
      recommended: 'Students interested in UX design, user research, and interaction design.',
      coreFocus: 'UX design, user research, interaction design',
      technicalLevel: 'High',
      creativeLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'UX Design Certificate, User Research License',
      higherStudy: 'B.Sc UX Design Lateral Entry',
      commonCareers: 'UX Designer, User Researcher, Interaction Designer, Usability Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'web-design',
      icon: '🌐',
      color: 'from-green-500 to-green-600',
      title: 'Web Design',
      bestFor: ['Web Design', 'Frontend Development', 'Responsive Design', 'Web Development'],
      duration: '3 Years',
      careers: ['Web Designer', 'Frontend Developer', 'Responsive Designer', 'Web Developer'],
      recommended: 'Students interested in web design, frontend development, and responsive design.',
      coreFocus: 'Web design, frontend development, responsive design',
      technicalLevel: 'Very High',
      creativeLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Web Design Certificate, Frontend Development License',
      higherStudy: 'B.Sc Web Design Lateral Entry',
      commonCareers: 'Web Designer, Frontend Developer, Responsive Designer, Web Developer',
      difficulty: 'Hard'
    },
    {
      id: 'product-design',
      icon: '📱',
      color: 'from-orange-500 to-orange-600',
      title: 'Product Design',
      bestFor: ['Product Design', 'Digital Products', 'Product Strategy', 'Design Thinking'],
      duration: '3 Years',
      careers: ['Product Designer', 'Digital Product Manager', 'Design Strategist', 'Product Manager'],
      recommended: 'Students interested in product design, digital products, and product strategy.',
      coreFocus: 'Product design, digital products, product strategy',
      technicalLevel: 'High',
      creativeLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Product Design Certificate, Digital Product License',
      higherStudy: 'B.Sc Product Design Lateral Entry',
      commonCareers: 'Product Designer, Digital Product Manager, Design Strategist, Product Manager',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      ui: 'UI design, visual design, interface design',
      ux: 'UX design, user research, interaction design',
      web: 'Web design, frontend development, responsive design',
      product: 'Product design, digital products, product strategy'
    },
    {
      feature: 'Technical Level',
      ui: 'High',
      ux: 'High',
      web: 'Very High',
      product: 'High'
    },
    {
      feature: 'Creative Level',
      ui: 'High',
      ux: 'High',
      web: 'High',
      product: 'Very High'
    },
    {
      feature: 'Industry Demand',
      ui: 'Very High',
      ux: 'Very High',
      web: 'Very High',
      product: 'Very High'
    },
    {
      feature: 'Certifications',
      ui: 'UI Design Certificate, Visual Design License',
      ux: 'UX Design Certificate, User Research License',
      web: 'Web Design Certificate, Frontend Development License',
      product: 'Product Design Certificate, Digital Product License'
    },
    {
      feature: 'Higher Study Opportunities',
      ui: 'B.Sc UI Design Lateral Entry',
      ux: 'B.Sc UX Design Lateral Entry',
      web: 'B.Sc Web Design Lateral Entry',
      product: 'B.Sc Product Design Lateral Entry'
    },
    {
      feature: 'Common Careers',
      ui: 'UI Designer, Visual Designer, Interface Designer, Design System Specialist',
      ux: 'UX Designer, User Researcher, Interaction Designer, Usability Specialist',
      web: 'Web Designer, Frontend Developer, Responsive Designer, Web Developer',
      product: 'Product Designer, Digital Product Manager, Design Strategist, Product Manager'
    },
    {
      feature: 'Difficulty Level',
      ui: 'Medium',
      ux: 'Medium',
      web: 'Hard',
      product: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🎨',
      title: 'Choose UI Design If:',
      reasons: [
        'You enjoy UI design and visual design',
        'You are interested in interface design and design systems',
        'You want UI design-based creative careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👤',
      title: 'Choose UX Design If:',
      reasons: [
        'You enjoy UX design and user research',
        'You are interested in interaction design and usability testing',
        'You want UX design-based creative careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🌐',
      title: 'Choose Web Design If:',
      reasons: [
        'You enjoy web design and frontend development',
        'You are interested in responsive design and web development',
        'You want web design-based creative careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📱',
      title: 'Choose Product Design If:',
      reasons: [
        'You enjoy product design and digital products',
        'You are interested in product strategy and design thinking',
        'You want product design-based creative careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'UI Designer',
      icon: '🎨',
      skills: ['UI Design', 'Visual Design', 'Interface Design', 'Design Systems'],
      roadmap: 'Diploma → UI Designer → Senior UI Designer → UI Design Director',
      salary: '₶5-20 LPA',
      demand: 'Very High',
      futureScope: 'UI Design Management, Visual Design Leadership'
    },
    {
      title: 'UX Designer',
      icon: '👤',
      skills: ['UX Design', 'User Research', 'Interaction Design', 'Usability Testing'],
      roadmap: 'Diploma → UX Designer → Senior UX Designer → UX Design Director',
      salary: '₶6-24 LPA',
      demand: 'Very High',
      futureScope: 'UX Design Management, User Research Leadership'
    },
    {
      title: 'Web Designer',
      icon: '🌐',
      skills: ['Web Design', 'Frontend Development', 'Responsive Design', 'Web Development'],
      roadmap: 'Diploma → Web Designer → Senior Web Designer → Web Design Director',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Web Design Management, Frontend Development Leadership'
    },
    {
      title: 'Product Designer',
      icon: '📱',
      skills: ['Product Design', 'Digital Products', 'Product Strategy', 'Design Thinking'],
      roadmap: 'Diploma → Product Designer → Senior Product Designer → Product Design Director',
      salary: '₶8-30 LPA',
      demand: 'Very High',
      futureScope: 'Product Design Management, Digital Product Leadership'
    },
    {
      title: 'Frontend Developer',
      icon: '🌐',
      skills: ['Frontend Development', 'Web Design', 'Responsive Design', 'Web Development'],
      roadmap: 'Diploma → Frontend Developer → Senior Developer → Frontend Lead',
      salary: '₶7-26 LPA',
      demand: 'Very High',
      futureScope: 'Frontend Development Management, Web Development Leadership'
    },
    {
      title: 'Digital Product Manager',
      icon: '📱',
      skills: ['Digital Products', 'Product Strategy', 'Design Thinking', 'Product Management'],
      roadmap: 'Diploma → Digital Product Manager → Senior Manager → Product Director',
      salary: '₶10-35 LPA',
      demand: 'Very High',
      futureScope: 'Digital Product Management, Product Strategy Leadership'
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

  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('design-creative-diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎨</span>
            <h1 className="text-4xl font-bold text-white">UI/UX & Web Design Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive UI/UX and web design diploma programs with various specializations for rewarding creative careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('design-creative-diplomas')}>Design & Creative Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">UI/UX & Web Design Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search UI/UX specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="ui-design">UI Design</option>
              <option value="ux-design">UX Design</option>
              <option value="web-design">Web Design</option>
              <option value="product-design">Product Design</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">UI/UX & Web Design Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((specialization, index) => (
              <motion.div key={specialization.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialization.color} flex items-center justify-center text-white text-2xl mx-auto mb-3`}>{specialization.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{specialization.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Best For</h4>
                    <div className="space-y-1">{specialization.bestFor.map((item, idx) => (<div key={idx} className="flex items-center gap-2"><Check className="w-3 h-3 text-green-400 flex-shrink-0" /><span className="text-white/80 text-xs">{item}</span></div>))}</div>
                  </div>
                  <div><span className="text-white/50 text-xs">Duration</span><p className="text-white/90 text-sm font-medium">{specialization.duration}</p></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-1">{specialization.careers.map((career, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">{career}</span>))}</div>
                  </div>
                  <div className="pt-3 border-t border-white/10"><p className="text-white/70 text-xs italic">{specialization.recommended}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Specialization Comparison</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white font-semibold text-sm">Feature</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">UI Design</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">UX Design</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Web Design</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Product Design</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.ui}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.ux}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.web}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.product}</td>
                </tr>))}</tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseOptions.map((option, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
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
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + index * 0.05 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">UI/UX & Web Design Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive UI/UX and web design education with hands-on training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Any background with Art and Computer Science preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on UI/UX and web design training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: UI/UX & Web Design License</h4>
                    <p className="text-white/80 text-sm">UI/UX and Web Design certification</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Skills Developed</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">UI/UX Design</h4>
                    <p className="text-white/80 text-sm">UI/UX design procedures and user research techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Web Development</h4>
                    <p className="text-white/80 text-sm">Web development procedures and frontend design techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Product Design</h4>
                    <p className="text-white/80 text-sm">Product design procedures and design thinking techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Design Systems</h4>
                    <p className="text-white/80 text-sm">Design systems procedures and interface design techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UIUXWebDesignScreen;
