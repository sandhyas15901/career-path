import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface InteriorDesignScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const InteriorDesignScreen: React.FC<InteriorDesignScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'residential-design',
      icon: '🏠',
      color: 'from-green-500 to-green-600',
      title: 'Residential Design',
      bestFor: ['Residential Design', 'Home Interiors', 'Space Planning', 'Interior Decoration'],
      duration: '3 Years',
      careers: ['Residential Designer', 'Interior Decorator', 'Space Planner', 'Home Stager'],
      recommended: 'Students interested in residential design, home interiors, and space planning.',
      coreFocus: 'Residential design, home interiors, space planning',
      technicalLevel: 'Medium',
      creativeLevel: 'High',
      industryDemand: 'High',
      certifications: 'Residential Design Certificate, Interior Decoration License',
      higherStudy: 'B.Sc Interior Design Lateral Entry',
      commonCareers: 'Residential Designer, Interior Decorator, Space Planner, Home Stager',
      difficulty: 'Medium'
    },
    {
      id: 'commercial-design',
      icon: '🏢',
      color: 'from-blue-500 to-blue-600',
      title: 'Commercial Design',
      bestFor: ['Commercial Design', 'Office Interiors', 'Retail Design', 'Hospitality Design'],
      duration: '3 Years',
      careers: ['Commercial Designer', 'Office Interior Designer', 'Retail Designer', 'Hospitality Designer'],
      recommended: 'Students interested in commercial design, office interiors, and retail design.',
      coreFocus: 'Commercial design, office interiors, retail design',
      technicalLevel: 'High',
      creativeLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Commercial Design Certificate, Office Interior License',
      higherStudy: 'B.Sc Commercial Design Lateral Entry',
      commonCareers: 'Commercial Designer, Office Interior Designer, Retail Designer, Hospitality Designer',
      difficulty: 'Hard'
    },
    {
      id: 'space-planning',
      icon: '📐',
      color: 'from-purple-500 to-purple-600',
      title: 'Space Planning',
      bestFor: ['Space Planning', 'Layout Design', 'Furniture Arrangement', 'Functional Design'],
      duration: '3 Years',
      careers: ['Space Planner', 'Layout Designer', 'Furniture Arranger', 'Functional Designer'],
      recommended: 'Students interested in space planning, layout design, and furniture arrangement.',
      coreFocus: 'Space planning, layout design, furniture arrangement',
      technicalLevel: 'Medium',
      creativeLevel: 'High',
      industryDemand: 'High',
      certifications: 'Space Planning Certificate, Layout Design License',
      higherStudy: 'B.Sc Space Planning Lateral Entry',
      commonCareers: 'Space Planner, Layout Designer, Furniture Arranger, Functional Designer',
      difficulty: 'Medium'
    },
    {
      id: 'sustainable-design',
      icon: '🌿',
      color: 'from-orange-500 to-orange-600',
      title: 'Sustainable Design',
      bestFor: ['Sustainable Design', 'Eco-Friendly Interiors', 'Green Design', 'Environmental Design'],
      duration: '3 Years',
      careers: ['Sustainable Designer', 'Eco-Friendly Interior Designer', 'Green Design Consultant', 'Environmental Designer'],
      recommended: 'Students interested in sustainable design, eco-friendly interiors, and green design.',
      coreFocus: 'Sustainable design, eco-friendly interiors, green design',
      technicalLevel: 'High',
      creativeLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Sustainable Design Certificate, Eco-Friendly Design License',
      higherStudy: 'B.Sc Sustainable Design Lateral Entry',
      commonCareers: 'Sustainable Designer, Eco-Friendly Interior Designer, Green Design Consultant, Environmental Designer',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      residential: 'Residential design, home interiors, space planning',
      commercial: 'Commercial design, office interiors, retail design',
      space: 'Space planning, layout design, furniture arrangement',
      sustainable: 'Sustainable design, eco-friendly interiors, green design'
    },
    {
      feature: 'Technical Level',
      residential: 'Medium',
      commercial: 'High',
      space: 'Medium',
      sustainable: 'High'
    },
    {
      feature: 'Creative Level',
      residential: 'High',
      commercial: 'High',
      space: 'High',
      sustainable: 'Very High'
    },
    {
      feature: 'Industry Demand',
      residential: 'High',
      commercial: 'Very High',
      space: 'High',
      sustainable: 'Very High'
    },
    {
      feature: 'Certifications',
      residential: 'Residential Design Certificate, Interior Decoration License',
      commercial: 'Commercial Design Certificate, Office Interior License',
      space: 'Space Planning Certificate, Layout Design License',
      sustainable: 'Sustainable Design Certificate, Eco-Friendly Design License'
    },
    {
      feature: 'Higher Study Opportunities',
      residential: 'B.Sc Interior Design Lateral Entry',
      commercial: 'B.Sc Commercial Design Lateral Entry',
      space: 'B.Sc Space Planning Lateral Entry',
      sustainable: 'B.Sc Sustainable Design Lateral Entry'
    },
    {
      feature: 'Common Careers',
      residential: 'Residential Designer, Interior Decorator, Space Planner, Home Stager',
      commercial: 'Commercial Designer, Office Interior Designer, Retail Designer, Hospitality Designer',
      space: 'Space Planner, Layout Designer, Furniture Arranger, Functional Designer',
      sustainable: 'Sustainable Designer, Eco-Friendly Interior Designer, Green Design Consultant, Environmental Designer'
    },
    {
      feature: 'Difficulty Level',
      residential: 'Medium',
      commercial: 'Hard',
      space: 'Medium',
      sustainable: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🏠',
      title: 'Choose Residential Design If:',
      reasons: [
        'You enjoy residential design and home interiors',
        'You are interested in space planning and interior decoration',
        'You want residential design-based creative careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏢',
      title: 'Choose Commercial Design If:',
      reasons: [
        'You enjoy commercial design and office interiors',
        'You are interested in retail design and hospitality design',
        'You want commercial design-based creative careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📐',
      title: 'Choose Space Planning If:',
      reasons: [
        'You enjoy space planning and layout design',
        'You are interested in furniture arrangement and functional design',
        'You want space planning-based creative careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🌿',
      title: 'Choose Sustainable Design If:',
      reasons: [
        'You enjoy sustainable design and eco-friendly interiors',
        'You are interested in green design and environmental design',
        'You want sustainable design-based creative careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Residential Designer',
      icon: '🏠',
      skills: ['Residential Design', 'Home Interiors', 'Space Planning', 'Interior Decoration'],
      roadmap: 'Diploma → Residential Designer → Senior Designer → Design Director',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Residential Design Management, Interior Decoration Leadership'
    },
    {
      title: 'Commercial Designer',
      icon: '🏢',
      skills: ['Commercial Design', 'Office Interiors', 'Retail Design', 'Hospitality Design'],
      roadmap: 'Diploma → Commercial Designer → Senior Designer → Commercial Design Director',
      salary: '₶6-24 LPA',
      demand: 'Very High',
      futureScope: 'Commercial Design Management, Office Interior Leadership'
    },
    {
      title: 'Space Planner',
      icon: '📐',
      skills: ['Space Planning', 'Layout Design', 'Furniture Arrangement', 'Functional Design'],
      roadmap: 'Diploma → Space Planner → Senior Planner → Planning Director',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Space Planning Management, Layout Design Leadership'
    },
    {
      title: 'Sustainable Designer',
      icon: '🌿',
      skills: ['Sustainable Design', 'Eco-Friendly Interiors', 'Green Design', 'Environmental Design'],
      roadmap: 'Diploma → Sustainable Designer → Senior Designer → Sustainable Design Director',
      salary: '₶7-28 LPA',
      demand: 'Very High',
      futureScope: 'Sustainable Design Management, Eco-Friendly Design Leadership'
    },
    {
      title: 'Interior Decorator',
      icon: '🏠',
      skills: ['Interior Decoration', 'Home Interiors', 'Space Planning', 'Residential Design'],
      roadmap: 'Diploma → Interior Decorator → Senior Decorator → Decoration Director',
      salary: '₶4-18 LPA',
      demand: 'High',
      futureScope: 'Interior Decoration Management, Home Interiors Leadership'
    },
    {
      title: 'Office Interior Designer',
      icon: '🏢',
      skills: ['Office Interiors', 'Commercial Design', 'Space Planning', 'Layout Design'],
      roadmap: 'Diploma → Office Interior Designer → Senior Designer → Interior Design Director',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Office Interior Management, Commercial Design Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('design-creative-diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏠</span>
            <h1 className="text-4xl font-bold text-white">Interior Design Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive interior design diploma programs with various specializations for rewarding creative careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('design-creative-diplomas')}>Design & Creative Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Interior Design Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search interior design specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="residential-design">Residential Design</option>
              <option value="commercial-design">Commercial Design</option>
              <option value="space-planning">Space Planning</option>
              <option value="sustainable-design">Sustainable Design</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Interior Design Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Residential</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Commercial</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Space Planning</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Sustainable</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.residential}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.commercial}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.space}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.sustainable}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Interior Design Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive interior design education with hands-on training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Any background with Art and Design preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on interior design and space planning training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Interior Design License</h4>
                    <p className="text-white/80 text-sm">Interior Design and Space Planning certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Interior Design</h4>
                    <p className="text-white/80 text-sm">Interior design procedures and space planning techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Space Planning</h4>
                    <p className="text-white/80 text-sm">Space planning procedures and layout design techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Commercial Design</h4>
                    <p className="text-white/80 text-sm">Commercial design procedures and office interior techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Sustainable Design</h4>
                    <p className="text-white/80 text-sm">Sustainable design procedures and eco-friendly techniques</p>
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

export default InteriorDesignScreen;
