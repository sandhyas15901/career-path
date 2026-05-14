import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface FashionDesignScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const FashionDesignScreen: React.FC<FashionDesignScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'fashion-design',
      icon: '👗',
      color: 'from-pink-500 to-pink-600',
      title: 'Fashion Design',
      bestFor: ['Fashion Design', 'Garment Construction', 'Pattern Making', 'Fashion Illustration'],
      duration: '3 Years',
      careers: ['Fashion Designer', 'Garment Technologist', 'Pattern Maker', 'Fashion Illustrator'],
      recommended: 'Students interested in fashion design, garment construction, and pattern making.',
      coreFocus: 'Fashion design, garment construction, pattern making',
      technicalLevel: 'Medium',
      creativeLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Fashion Design Certificate, Garment Construction License',
      higherStudy: 'B.Sc Fashion Design Lateral Entry',
      commonCareers: 'Fashion Designer, Garment Technologist, Pattern Maker, Fashion Illustrator',
      difficulty: 'Medium'
    },
    {
      id: 'textile-design',
      icon: '🧵',
      color: 'from-purple-500 to-purple-600',
      title: 'Textile Design',
      bestFor: ['Textile Design', 'Fabric Development', 'Print Design', 'Material Science'],
      duration: '3 Years',
      careers: ['Textile Designer', 'Fabric Developer', 'Print Designer', 'Material Scientist'],
      recommended: 'Students interested in textile design, fabric development, and print design.',
      coreFocus: 'Textile design, fabric development, print design',
      technicalLevel: 'Medium',
      creativeLevel: 'High',
      industryDemand: 'High',
      certifications: 'Textile Design Certificate, Fabric Development License',
      higherStudy: 'B.Sc Textile Design Lateral Entry',
      commonCareers: 'Textile Designer, Fabric Developer, Print Designer, Material Scientist',
      difficulty: 'Medium'
    },
    {
      id: 'fashion-merchandising',
      icon: '🛍️',
      color: 'from-blue-500 to-blue-600',
      title: 'Fashion Merchandising',
      bestFor: ['Fashion Merchandising', 'Retail Management', 'Fashion Marketing', 'Brand Management'],
      duration: '3 Years',
      careers: ['Fashion Merchandiser', 'Retail Manager', 'Fashion Marketer', 'Brand Manager'],
      recommended: 'Students interested in fashion merchandising, retail management, and fashion marketing.',
      coreFocus: 'Fashion merchandising, retail management, fashion marketing',
      technicalLevel: 'Medium',
      creativeLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Fashion Merchandising Certificate, Retail Management License',
      higherStudy: 'B.Sc Fashion Merchandising Lateral Entry',
      commonCareers: 'Fashion Merchandiser, Retail Manager, Fashion Marketer, Brand Manager',
      difficulty: 'Easy'
    },
    {
      id: 'fashion-styling',
      icon: '✨',
      color: 'from-orange-500 to-orange-600',
      title: 'Fashion Styling',
      bestFor: ['Fashion Styling', 'Personal Styling', 'Image Consulting', 'Fashion Photography'],
      duration: '3 Years',
      careers: ['Fashion Stylist', 'Personal Stylist', 'Image Consultant', 'Fashion Photographer'],
      recommended: 'Students interested in fashion styling, personal styling, and image consulting.',
      coreFocus: 'Fashion styling, personal styling, image consulting',
      technicalLevel: 'Low',
      creativeLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Fashion Styling Certificate, Personal Styling License',
      higherStudy: 'B.Sc Fashion Styling Lateral Entry',
      commonCareers: 'Fashion Stylist, Personal Stylist, Image Consultant, Fashion Photographer',
      difficulty: 'Easy'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      design: 'Fashion design, garment construction, pattern making',
      textile: 'Textile design, fabric development, print design',
      merchandising: 'Fashion merchandising, retail management, fashion marketing',
      styling: 'Fashion styling, personal styling, image consulting'
    },
    {
      feature: 'Technical Level',
      design: 'Medium',
      textile: 'Medium',
      merchandising: 'Medium',
      styling: 'Low'
    },
    {
      feature: 'Creative Level',
      design: 'Very High',
      textile: 'High',
      merchandising: 'High',
      styling: 'Very High'
    },
    {
      feature: 'Industry Demand',
      design: 'High',
      textile: 'High',
      merchandising: 'Very High',
      styling: 'High'
    },
    {
      feature: 'Certifications',
      design: 'Fashion Design Certificate, Garment Construction License',
      textile: 'Textile Design Certificate, Fabric Development License',
      merchandising: 'Fashion Merchandising Certificate, Retail Management License',
      styling: 'Fashion Styling Certificate, Personal Styling License'
    },
    {
      feature: 'Higher Study Opportunities',
      design: 'B.Sc Fashion Design Lateral Entry',
      textile: 'B.Sc Textile Design Lateral Entry',
      merchandising: 'B.Sc Fashion Merchandising Lateral Entry',
      styling: 'B.Sc Fashion Styling Lateral Entry'
    },
    {
      feature: 'Common Careers',
      design: 'Fashion Designer, Garment Technologist, Pattern Maker, Fashion Illustrator',
      textile: 'Textile Designer, Fabric Developer, Print Designer, Material Scientist',
      merchandising: 'Fashion Merchandiser, Retail Manager, Fashion Marketer, Brand Manager',
      styling: 'Fashion Stylist, Personal Stylist, Image Consultant, Fashion Photographer'
    },
    {
      feature: 'Difficulty Level',
      design: 'Medium',
      textile: 'Medium',
      merchandising: 'Easy',
      styling: 'Easy'
    }
  ];

  const chooseOptions = [
    {
      icon: '👗',
      title: 'Choose Fashion Design If:',
      reasons: [
        'You enjoy fashion design and garment construction',
        'You are interested in pattern making and fashion illustration',
        'You want fashion design-based creative careers'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '🧵',
      title: 'Choose Textile Design If:',
      reasons: [
        'You enjoy textile design and fabric development',
        'You are interested in print design and material science',
        'You want textile design-based creative careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🛍️',
      title: 'Choose Fashion Merchandising If:',
      reasons: [
        'You enjoy fashion merchandising and retail management',
        'You are interested in fashion marketing and brand management',
        'You want fashion merchandising-based creative careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '✨',
      title: 'Choose Fashion Styling If:',
      reasons: [
        'You enjoy fashion styling and personal styling',
        'You are interested in image consulting and fashion photography',
        'You want fashion styling-based creative careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Fashion Designer',
      icon: '👗',
      skills: ['Fashion Design', 'Garment Construction', 'Pattern Making', 'Fashion Illustration'],
      roadmap: 'Diploma → Fashion Designer → Senior Designer → Creative Director',
      salary: '₶4-18 LPA',
      demand: 'High',
      futureScope: 'Fashion Design Management, Creative Direction Leadership'
    },
    {
      title: 'Textile Designer',
      icon: '🧵',
      skills: ['Textile Design', 'Fabric Development', 'Print Design', 'Material Science'],
      roadmap: 'Diploma → Textile Designer → Senior Designer → Textile Design Director',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Textile Design Management, Fabric Development Leadership'
    },
    {
      title: 'Fashion Merchandiser',
      icon: '🛍️',
      skills: ['Fashion Merchandising', 'Retail Management', 'Fashion Marketing', 'Brand Management'],
      roadmap: 'Diploma → Fashion Merchandiser → Senior Merchandiser → Merchandising Director',
      salary: '₶5-20 LPA',
      demand: 'Very High',
      futureScope: 'Fashion Merchandising Management, Retail Leadership'
    },
    {
      title: 'Fashion Stylist',
      icon: '✨',
      skills: ['Fashion Styling', 'Personal Styling', 'Image Consulting', 'Fashion Photography'],
      roadmap: 'Diploma → Fashion Stylist → Senior Stylist → Styling Director',
      salary: '₶3-12 LPA',
      demand: 'High',
      futureScope: 'Fashion Styling Management, Image Consulting Leadership'
    },
    {
      title: 'Garment Technologist',
      icon: '👗',
      skills: ['Garment Construction', 'Pattern Making', 'Fashion Design', 'Quality Control'],
      roadmap: 'Diploma → Garment Technologist → Senior Technologist → Production Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Garment Technology Management, Production Leadership'
    },
    {
      title: 'Fashion Marketer',
      icon: '🛍️',
      skills: ['Fashion Marketing', 'Brand Management', 'Fashion Merchandising', 'Retail Management'],
      roadmap: 'Diploma → Fashion Marketer → Senior Marketer → Marketing Director',
      salary: '₶6-24 LPA',
      demand: 'Very High',
      futureScope: 'Fashion Marketing Management, Brand Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('design-creative-diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">👗</span>
            <h1 className="text-4xl font-bold text-white">Fashion Design Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive fashion design diploma programs with various specializations for rewarding creative careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('design-creative-diplomas')}>Design & Creative Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Fashion Design Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search fashion design specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="fashion-design">Fashion Design</option>
              <option value="textile-design">Textile Design</option>
              <option value="fashion-merchandising">Fashion Merchandising</option>
              <option value="fashion-styling">Fashion Styling</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Fashion Design Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Fashion Design</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Textile Design</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Merchandising</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Fashion Styling</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.design}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.textile}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.merchandising}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.styling}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Fashion Design Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive fashion design education with hands-on training</p>
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
                    <p className="text-white/80 text-sm">Hands-on fashion design and garment construction training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Fashion Design License</h4>
                    <p className="text-white/80 text-sm">Fashion Design and Garment Construction certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Fashion Design</h4>
                    <p className="text-white/80 text-sm">Fashion design procedures and garment construction techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Textile Design</h4>
                    <p className="text-white/80 text-sm">Textile design procedures and fabric development techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Fashion Merchandising</h4>
                    <p className="text-white/80 text-sm">Fashion merchandising procedures and retail management techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Fashion Styling</h4>
                    <p className="text-white/80 text-sm">Fashion styling procedures and personal styling techniques</p>
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

export default FashionDesignScreen;
