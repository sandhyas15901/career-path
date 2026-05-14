import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface EmergencyMedicalTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const EmergencyMedicalTechnologyScreen: React.FC<EmergencyMedicalTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'emergency-response',
      icon: '🚑',
      color: 'from-red-500 to-red-600',
      title: 'Emergency Response',
      bestFor: ['Emergency Response', 'Trauma Care', 'Medical Emergency', 'Critical Care'],
      duration: '3 Years',
      careers: ['Emergency Response Technician', 'Trauma Care Specialist', 'Critical Care Technician'],
      recommended: 'Students interested in emergency response, trauma care, and medical emergency services.',
      coreFocus: 'Emergency response, trauma care, medical emergency',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      stressLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Emergency Response License, Trauma Care Certificate',
      higherStudy: 'B.Sc Emergency Medicine Lateral Entry',
      commonCareers: 'Emergency Response Technician, Trauma Care Specialist, Critical Care Technician',
      difficulty: 'Very Hard'
    },
    {
      id: 'trauma-care',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600',
      title: 'Trauma Care',
      bestFor: ['Trauma Management', 'Emergency Surgery', 'Critical Trauma', 'Life Support'],
      duration: '3 Years',
      careers: ['Trauma Care Technician', 'Emergency Surgery Assistant', 'Life Support Specialist'],
      recommended: 'Students interested in trauma management, emergency surgery, and critical trauma care.',
      coreFocus: 'Trauma management, emergency surgery, critical trauma',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      stressLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Trauma Care License, Emergency Surgery Certificate',
      higherStudy: 'B.Sc Trauma Care Lateral Entry',
      commonCareers: 'Trauma Care Technician, Emergency Surgery Assistant, Life Support Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'critical-care-emergency',
      icon: '⚕️',
      color: 'from-purple-500 to-purple-600',
      title: 'Critical Care Emergency',
      bestFor: ['Critical Care', 'Emergency ICU', 'Life Support', 'Emergency Medicine'],
      duration: '3 Years',
      careers: ['Critical Care Technician', 'Emergency ICU Specialist', 'Life Support Technician'],
      recommended: 'Students interested in critical care, emergency ICU, and life support services.',
      coreFocus: 'Critical care, emergency ICU, life support',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      stressLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Critical Care License, Emergency ICU Certificate',
      higherStudy: 'B.Sc Critical Care Lateral Entry',
      commonCareers: 'Critical Care Technician, Emergency ICU Specialist, Life Support Technician',
      difficulty: 'Very Hard'
    },
    {
      id: 'disaster-management',
      icon: '🆘',
      color: 'from-blue-500 to-blue-600',
      title: 'Disaster Management',
      bestFor: ['Disaster Response', 'Emergency Management', 'Mass Casualty', 'Emergency Planning'],
      duration: '3 Years',
      careers: ['Disaster Management Technician', 'Emergency Management Specialist', 'Mass Casualty Coordinator'],
      recommended: 'Students interested in disaster response, emergency management, and mass casualty care.',
      coreFocus: 'Disaster response, emergency management, mass casualty',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      stressLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Disaster Management License, Emergency Management Certificate',
      higherStudy: 'B.Sc Disaster Management Lateral Entry',
      commonCareers: 'Disaster Management Technician, Emergency Management Specialist, Mass Casualty Coordinator',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      emergency: 'Emergency response, trauma care, medical emergency',
      trauma: 'Trauma management, emergency surgery, critical trauma',
      critical: 'Critical care, emergency ICU, life support',
      disaster: 'Disaster response, emergency management, mass casualty'
    },
    {
      feature: 'Technical Level',
      emergency: 'High',
      trauma: 'Very High',
      critical: 'Very High',
      disaster: 'High'
    },
    {
      feature: 'Practical Level',
      emergency: 'Very High',
      trauma: 'Very High',
      critical: 'Very High',
      disaster: 'High'
    },
    {
      feature: 'Accuracy Level',
      emergency: 'High',
      trauma: 'Very High',
      critical: 'Very High',
      disaster: 'High'
    },
    {
      feature: 'Stress Level',
      emergency: 'Very High',
      trauma: 'Very High',
      critical: 'Very High',
      disaster: 'Very High'
    },
    {
      feature: 'Industry Demand',
      emergency: 'Very High',
      trauma: 'Very High',
      critical: 'Very High',
      disaster: 'High'
    },
    {
      feature: 'Certifications',
      emergency: 'Emergency Response License, Trauma Care Certificate',
      trauma: 'Trauma Care License, Emergency Surgery Certificate',
      critical: 'Critical Care License, Emergency ICU Certificate',
      disaster: 'Disaster Management License, Emergency Management Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      emergency: 'B.Sc Emergency Medicine Lateral Entry',
      trauma: 'B.Sc Trauma Care Lateral Entry',
      critical: 'B.Sc Critical Care Lateral Entry',
      disaster: 'B.Sc Disaster Management Lateral Entry'
    },
    {
      feature: 'Common Careers',
      emergency: 'Emergency Response Technician, Trauma Care Specialist, Critical Care Technician',
      trauma: 'Trauma Care Technician, Emergency Surgery Assistant, Life Support Specialist',
      critical: 'Critical Care Technician, Emergency ICU Specialist, Life Support Technician',
      disaster: 'Disaster Management Technician, Emergency Management Specialist, Mass Casualty Coordinator'
    },
    {
      feature: 'Difficulty Level',
      emergency: 'Very Hard',
      trauma: 'Very Hard',
      critical: 'Very Hard',
      disaster: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🚑',
      title: 'Choose Emergency Response If:',
      reasons: [
        'You enjoy emergency response and trauma care',
        'You are interested in medical emergency and critical care',
        'You want emergency response-based careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🏥',
      title: 'Choose Trauma Care If:',
      reasons: [
        'You enjoy trauma management and emergency surgery',
        'You are interested in critical trauma and life support',
        'You want trauma care-based emergency careers'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '⚕️',
      title: 'Choose Critical Care Emergency If:',
      reasons: [
        'You enjoy critical care and emergency ICU',
        'You are interested in life support and emergency medicine',
        'You want critical care-based emergency careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🆘',
      title: 'Choose Disaster Management If:',
      reasons: [
        'You enjoy disaster response and emergency management',
        'You are interested in mass casualty and emergency planning',
        'You want disaster management-based emergency careers'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const careers = [
    {
      title: 'Emergency Response Technician',
      icon: '🚑',
      skills: ['Emergency Response', 'Trauma Care', 'Medical Emergency', 'Critical Care'],
      roadmap: 'Diploma → Emergency Technician → Senior Technician → Emergency Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Emergency Management Leadership, Trauma Care Management'
    },
    {
      title: 'Trauma Care Technician',
      icon: '🏥',
      skills: ['Trauma Management', 'Emergency Surgery', 'Critical Trauma', 'Life Support'],
      roadmap: 'Diploma → Trauma Technician → Senior Technician → Trauma Manager',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Trauma Care Management, Emergency Surgery Leadership'
    },
    {
      title: 'Critical Care Technician',
      icon: '⚕️',
      skills: ['Critical Care', 'Emergency ICU', 'Life Support', 'Emergency Medicine'],
      roadmap: 'Diploma → Critical Care Technician → Senior Technician → Critical Care Manager',
      salary: '₶6-24 LPA',
      demand: 'Very High',
      futureScope: 'Critical Care Management, Emergency ICU Leadership'
    },
    {
      title: 'Disaster Management Technician',
      icon: '🆘',
      skills: ['Disaster Response', 'Emergency Management', 'Mass Casualty', 'Emergency Planning'],
      roadmap: 'Diploma → Disaster Technician → Senior Technician → Disaster Manager',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Disaster Management Leadership, Emergency Management Leadership'
    },
    {
      title: 'Emergency ICU Specialist',
      icon: '⚕️',
      skills: ['Emergency ICU', 'Critical Care', 'Life Support', 'Emergency Medicine'],
      roadmap: 'Diploma → ICU Specialist → Senior Specialist → ICU Manager',
      salary: '₶7-26 LPA',
      demand: 'Very High',
      futureScope: 'Emergency ICU Management, Critical Care Leadership'
    },
    {
      title: 'Life Support Specialist',
      icon: '💓',
      skills: ['Life Support', 'Emergency Medicine', 'Critical Care', 'Emergency Response'],
      roadmap: 'Diploma → Life Support Specialist → Senior Specialist → Life Support Manager',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Life Support Management, Emergency Medicine Leadership'
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
            <span className="text-4xl">🚑</span>
            <h1 className="text-4xl font-bold text-white">Emergency Medical Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive emergency medical technology diploma programs with various specializations for rewarding emergency care careers after 10th grade.
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
          <span className="text-white font-medium">Emergency Medical Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search emergency specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="emergency-response">Emergency Response</option>
              <option value="trauma-care">Trauma Care</option>
              <option value="critical-care-emergency">Critical Care Emergency</option>
              <option value="disaster-management">Disaster Management</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Emergency Medical Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Emergency Response</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Trauma Care</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Critical Care</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Disaster Management</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.emergency}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.trauma}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.critical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.disaster}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Emergency Medical Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive emergency medical technology education with trauma care training</p>
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
                    <p className="text-white/80 text-sm">Hands-on emergency medical and trauma care training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Emergency Medical Technology License</h4>
                    <p className="text-white/80 text-sm">Emergency Medical Technology and Trauma Care certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Emergency Response</h4>
                    <p className="text-white/80 text-sm">Emergency response procedures and medical emergency techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Trauma Care</h4>
                    <p className="text-white/80 text-sm">Trauma care procedures and emergency surgery support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Critical Care</h4>
                    <p className="text-white/80 text-sm">Critical care procedures and emergency ICU support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Life Support</h4>
                    <p className="text-white/80 text-sm">Life support procedures and emergency medical techniques</p>
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

export default EmergencyMedicalTechnologyScreen;
