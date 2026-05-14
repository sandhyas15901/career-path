import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface CriticalCareEmergencyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const CriticalCareEmergencyScreen: React.FC<CriticalCareEmergencyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'icu-critical-care',
      icon: '⚕️',
      color: 'from-red-500 to-red-600',
      title: 'ICU Critical Care',
      bestFor: ['ICU Support', 'Critical Care', 'Emergency Medicine', 'Life Support'],
      duration: '3 Years',
      careers: ['ICU Technician', 'Critical Care Specialist', 'Emergency Medicine Assistant'],
      recommended: 'Students interested in ICU support, critical care, and emergency Medicine.',
      coreFocus: 'ICU support, critical Care, emergency Medicine',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'ICU Critical Care License, Emergency Medicine Certificate',
      higherStudy: 'B.Sc Critical Care Lateral Entry',
      commonCareers: 'ICU Technician, Critical Care Specialist, Emergency Medicine Assistant',
      difficulty: 'Very Hard'
    },
    {
      id: 'emergency-medicine',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600',
      title: 'Emergency Medicine',
      bestFor: ['Emergency Medicine', 'Critical Care', 'Emergency Response', 'Life Support'],
      duration: '3 Years',
      careers: ['Emergency Medicine Technician', 'Critical Care Specialist', 'Emergency Response Coordinator'],
      recommended: 'Students interested in emergency Medicine, critical Care, and emergency Response.',
      coreFocus: 'Emergency Medicine, critical Care, emergency Response',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Emergency Medicine License, Critical Care Certificate',
      higherStudy: 'B.Sc Emergency Medicine Lateral Entry',
      commonCareers: 'Emergency Medicine Technician, Critical Care Specialist, Emergency Response Coordinator',
      difficulty: 'Very Hard'
    },
    {
      id: 'trauma-care',
      icon: '🆘',
      color: 'from-purple-500 to-purple-600',
      title: 'Trauma Care',
      bestFor: ['Trauma Care', 'Emergency Surgery', 'Critical Trauma', 'Life Support'],
      duration: '3 Years',
      careers: ['Trauma Care Technician', 'Emergency Surgery Assistant', 'Critical Trauma Specialist'],
      recommended: 'Students interested in trauma Care, emergency Surgery, and critical Trauma.',
      coreFocus: 'Trauma Care, emergency Surgery, critical Trauma',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Trauma Care License, Emergency Surgery Certificate',
      higherStudy: 'B.Sc Trauma Care Lateral Entry',
      commonCareers: 'Trauma Care Technician, Emergency Surgery Assistant, Critical Trauma Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'life-support',
      icon: '💓',
      color: 'from-blue-500 to-blue-600',
      title: 'Life Support',
      bestFor: ['Life Support', 'Emergency Medicine', 'Critical Care', 'Patient Monitoring'],
      duration: '3 Years',
      careers: ['Life Support Technician', 'Emergency Medicine Specialist', 'Patient Monitoring Specialist'],
      recommended: 'Students interested in life Support, emergency Medicine, and patient Monitoring.',
      coreFocus: 'Life Support, emergency Medicine, patient Monitoring',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Life Support License, Emergency Medicine Certificate',
      higherStudy: 'B.Sc Life Support Lateral Entry',
      commonCareers: 'Life Support Technician, Emergency Medicine Specialist, Patient Monitoring Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      icu: 'ICU support, critical Care, emergency Medicine',
      emergency: 'Emergency Medicine, critical Care, emergency Response',
      trauma: 'Trauma Care, emergency Surgery, critical Trauma',
      life: 'Life Support, emergency Medicine, patient Monitoring'
    },
    {
      feature: 'Technical Level',
      icu: 'Very High',
      emergency: 'Very High',
      trauma: 'Very High',
      life: 'High'
    },
    {
      feature: 'Practical Level',
      icu: 'Very High',
      emergency: 'Very High',
      trauma: 'Very High',
      life: 'Very High'
    },
    {
      feature: 'Accuracy Level',
      icu: 'Very High',
      emergency: 'Very High',
      trauma: 'Very High',
      life: 'Very High'
    },
    {
      feature: 'Industry Demand',
      icu: 'Very High',
      emergency: 'Very High',
      trauma: 'Very High',
      life: 'Very High'
    },
    {
      feature: 'Certifications',
      icu: 'ICU Critical Care License, Emergency Medicine Certificate',
      emergency: 'Emergency Medicine License, Critical Care Certificate',
      trauma: 'Trauma Care License, Emergency Surgery Certificate',
      life: 'Life Support License, Emergency Medicine Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      icu: 'B.Sc Critical Care Lateral Entry',
      emergency: 'B.Sc Emergency Medicine Lateral Entry',
      trauma: 'B.Sc Trauma Care Lateral Entry',
      life: 'B.Sc Life Support Lateral Entry'
    },
    {
      feature: 'Common Careers',
      icu: 'ICU Technician, Critical Care Specialist, Emergency Medicine Assistant',
      emergency: 'Emergency Medicine Technician, Critical Care Specialist, Emergency Response Coordinator',
      trauma: 'Trauma Care Technician, Emergency Surgery Assistant, Critical Trauma Specialist',
      life: 'Life Support Technician, Emergency Medicine Specialist, Patient Monitoring Specialist'
    },
    {
      feature: 'Difficulty Level',
      icu: 'Very Hard',
      emergency: 'Very Hard',
      trauma: 'Very Hard',
      life: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '⚕️',
      title: 'Choose ICU Critical Care If:',
      reasons: [
        'You enjoy ICU support and critical Care',
        'You are interested in emergency Medicine and life Support',
        'You want ICU-based critical care careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🏥',
      title: 'Choose Emergency Medicine If:',
      reasons: [
        'You enjoy emergency Medicine and critical Care',
        'You are interested in emergency Response and life Support',
        'You want emergency medicine-based critical Care careers'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🆘',
      title: 'Choose Trauma Care If:',
      reasons: [
        'You enjoy trauma Care and emergency Surgery',
        'You are interested in critical Trauma and life Support',
        'You want trauma care-based critical Care careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '💓',
      title: 'Choose Life Support If:',
      reasons: [
        'You enjoy life Support and emergency Medicine',
        'You are interested in patient Monitoring and critical Care',
        'You want life support-based critical Care careers'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const careers = [
    {
      title: 'ICU Technician',
      icon: '⚕️',
      skills: ['ICU Support', 'Critical Care', 'Emergency Medicine', 'Life Support'],
      roadmap: 'Diploma → ICU Technician → Senior Technician → ICU Manager',
      salary: '₶6-24 LPA',
      demand: 'Very High',
      futureScope: 'ICU Management, Critical Care Leadership'
    },
    {
      title: 'Emergency Medicine Technician',
      icon: '🏥',
      skills: ['Emergency Medicine', 'Critical Care', 'Emergency Response', 'Life Support'],
      roadmap: 'Diploma → Emergency Technician → Senior Technician → Emergency Manager',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Emergency Medicine Management, Critical Care Leadership'
    },
    {
      title: 'Trauma Care Technician',
      icon: '🆘',
      skills: ['Trauma Care', 'Emergency Surgery', 'Critical Trauma', 'Life Support'],
      roadmap: 'Diploma → Trauma Technician → Senior Technician → Trauma Manager',
      salary: '₶6-20 LPA',
      demand: 'Very High',
      futureScope: 'Trauma Care Management, Emergency Surgery Leadership'
    },
    {
      title: 'Life Support Technician',
      icon: '💓',
      skills: ['Life Support', 'Emergency Medicine', 'Critical Care', 'Patient Monitoring'],
      roadmap: 'Diploma → Life Support Technician → Senior Technician → Life Support Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Life Support Management, Emergency Medicine Leadership'
    },
    {
      title: 'Critical Care Specialist',
      icon: '⚕️',
      skills: ['Critical Care', 'Emergency Medicine', 'ICU Support', 'Life Support'],
      roadmap: 'Diploma → Critical Care Specialist → Senior Specialist → Critical Care Manager',
      salary: '₶7-26 LPA',
      demand: 'Very High',
      futureScope: 'Critical Care Management, Emergency Medicine Leadership'
    },
    {
      title: 'Emergency Response Coordinator',
      icon: '🏥',
      skills: ['Emergency Response', 'Critical Care', 'Emergency Medicine', 'Life Support'],
      roadmap: 'Diploma → Response Coordinator → Senior Coordinator → Emergency Manager',
      salary: '₶7-28 LPA',
      demand: 'Very High',
      futureScope: 'Emergency Response Management, Critical Care Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('emergency-cardiac-dialysis')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">⚕️</span>
            <h1 className="text-4xl font-bold text-white">Critical Care Emergency Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive critical care emergency diploma programs with various specializations for rewarding emergency care careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('emergency-cardiac-dialysis')}>Emergency, Cardiac & Dialysis</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Critical Care Emergency Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search critical care specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="icu-critical-care">ICU Critical Care</option>
              <option value="emergency-medicine">Emergency Medicine</option>
              <option value="trauma-care">Trauma Care</option>
              <option value="life-support">Life Support</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Critical Care Emergency Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">ICU</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Emergency</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Trauma</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Life Support</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.icu}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.emergency}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.trauma}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.life}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Critical Care Emergency Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive critical care emergency education with ICU training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Biology and Chemistry preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on critical care emergency and ICU training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Critical Care Emergency License</h4>
                    <p className="text-white/80 text-sm">Critical Care Emergency and ICU Medicine certification</p>
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
                    <h4 className="text-white font-semibold mb-1">ICU Support</h4>
                    <p className="text-white/80 text-sm">ICU support procedures and critical care techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Emergency Medicine</h4>
                    <p className="text-white/80 text-sm">Emergency medicine procedures and critical care techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Critical Care</h4>
                    <p className="text-white/80 text-sm">Critical care procedures and emergency medicine support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Life Support</h4>
                    <p className="text-white/80 text-sm">Life support procedures and emergency medicine techniques</p>
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

export default CriticalCareEmergencyScreen;
