import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface OperationTheatreTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const OperationTheatreTechnologyScreen: React.FC<OperationTheatreTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'ot-technician',
      icon: '⚕️',
      color: 'from-red-500 to-red-600',
      title: 'OT Technician',
      bestFor: ['OT Support', 'Surgical Assistance', 'OT Management', 'Sterilization'],
      duration: '3 Years',
      careers: ['OT Technician', 'Surgical Assistant', 'OT Manager'],
      recommended: 'Students interested in operation theatre support, surgical assistance, and OT management.',
      coreFocus: 'OT support, surgical assistance, OT management',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'OT Technician License, Surgical Assistance Certificate',
      higherStudy: 'B.Sc OT Technology Lateral Entry',
      commonCareers: 'OT Technician, Surgical Assistant, OT Manager',
      difficulty: 'Hard'
    },
    {
      id: 'surgical-technician',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600',
      title: 'Surgical Technician',
      bestFor: ['Surgical Support', 'OT Assistance', 'Surgical Instruments', 'Patient Care'],
      duration: '3 Years',
      careers: ['Surgical Technician', 'OT Assistant', 'Surgical Instrument Specialist'],
      recommended: 'Students interested in surgical support, OT assistance, and surgical instruments.',
      coreFocus: 'Surgical support, OT assistance, surgical instruments',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Surgical Technician License, OT Assistance Certificate',
      higherStudy: 'B.Sc Surgical Technology Lateral Entry',
      commonCareers: 'Surgical Technician, OT Assistant, Surgical Instrument Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'anesthesia-technician',
      icon: '💉',
      color: 'from-purple-500 to-purple-600',
      title: 'Anesthesia Technician',
      bestFor: ['Anesthesia Support', 'Patient Monitoring', 'Anesthesia Administration', 'Critical Care'],
      duration: '3 Years',
      careers: ['Anesthesia Technician', 'Anesthesia Assistant', 'Critical Care Specialist'],
      recommended: 'Students interested in anesthesia support, patient monitoring, and anesthesia administration.',
      coreFocus: 'Anesthesia support, patient monitoring, anesthesia administration',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Anesthesia Technician License, Patient Monitoring Certificate',
      higherStudy: 'B.Sc Anesthesia Technology Lateral Entry',
      commonCareers: 'Anesthesia Technician, Anesthesia Assistant, Critical Care Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'ot-management',
      icon: '📋',
      color: 'from-blue-500 to-blue-600',
      title: 'OT Management',
      bestFor: ['OT Management', 'Sterilization', 'OT Operations', 'Quality Control'],
      duration: '3 Years',
      careers: ['OT Manager', 'Sterilization Manager', 'Quality Control Specialist'],
      recommended: 'Students interested in OT management, sterilization, and OT operations.',
      coreFocus: 'OT management, sterilization, OT operations',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'OT Management License, Sterilization Certificate',
      higherStudy: 'B.Sc OT Management Lateral Entry',
      commonCareers: 'OT Manager, Sterilization Manager, Quality Control Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      ot: 'OT support, surgical assistance, OT management',
      surgical: 'Surgical support, OT assistance, surgical instruments',
      anesthesia: 'Anesthesia support, patient monitoring, anesthesia administration',
      management: 'OT management, sterilization, OT operations'
    },
    {
      feature: 'Technical Level',
      ot: 'High',
      surgical: 'High',
      anesthesia: 'Very High',
      management: 'High'
    },
    {
      feature: 'Practical Level',
      ot: 'Very High',
      surgical: 'Very High',
      anesthesia: 'Very High',
      management: 'High'
    },
    {
      feature: 'Accuracy Level',
      ot: 'Very High',
      surgical: 'Very High',
      anesthesia: 'Very High',
      management: 'Very High'
    },
    {
      feature: 'Industry Demand',
      ot: 'Very High',
      surgical: 'Very High',
      anesthesia: 'Very High',
      management: 'High'
    },
    {
      feature: 'Certifications',
      ot: 'OT Technician License, Surgical Assistance Certificate',
      surgical: 'Surgical Technician License, OT Assistance Certificate',
      anesthesia: 'Anesthesia Technician License, Patient Monitoring Certificate',
      management: 'OT Management License, Sterilization Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      ot: 'B.Sc OT Technology Lateral Entry',
      surgical: 'B.Sc Surgical Technology Lateral Entry',
      anesthesia: 'B.Sc Anesthesia Technology Lateral Entry',
      management: 'B.Sc OT Management Lateral Entry'
    },
    {
      feature: 'Common Careers',
      ot: 'OT Technician, Surgical Assistant, OT Manager',
      surgical: 'Surgical Technician, OT Assistant, Surgical Instrument Specialist',
      anesthesia: 'Anesthesia Technician, Anesthesia Assistant, Critical Care Specialist',
      management: 'OT Manager, Sterilization Manager, Quality Control Specialist'
    },
    {
      feature: 'Difficulty Level',
      ot: 'Hard',
      surgical: 'Hard',
      anesthesia: 'Very Hard',
      management: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '⚕️',
      title: 'Choose OT Technician If:',
      reasons: [
        'You enjoy OT support and surgical assistance',
        'You are interested in OT management and sterilization',
        'You want OT-based operation theatre careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🏥',
      title: 'Choose Surgical Technician If:',
      reasons: [
        'You enjoy surgical support and OT assistance',
        'You are interested in surgical instruments and patient care',
        'You want surgical-based operation theatre careers'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '💉',
      title: 'Choose Anesthesia Technician If:',
      reasons: [
        'You enjoy anesthesia support and patient monitoring',
        'You are interested in anesthesia administration and critical care',
        'You want anesthesia-based operation theatre careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📋',
      title: 'Choose OT Management If:',
      reasons: [
        'You enjoy OT management and sterilization',
        'You are interested in OT operations and quality control',
        'You want management-based operation theatre careers'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const careers = [
    {
      title: 'OT Technician',
      icon: '⚕️',
      skills: ['OT Support', 'Surgical Assistance', 'OT Management', 'Sterilization'],
      roadmap: 'Diploma → OT Technician → Senior OT Technician → OT Manager',
      salary: '₹4-15 LPA',
      demand: 'Very High',
      futureScope: 'OT Management, Surgical Support Leadership'
    },
    {
      title: 'Surgical Technician',
      icon: '🏥',
      skills: ['Surgical Support', 'OT Assistance', 'Surgical Instruments', 'Patient Care'],
      roadmap: 'Diploma → Surgical Technician → Senior Surgical Technician → Surgical Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Surgical Management, OT Support Leadership'
    },
    {
      title: 'Anesthesia Technician',
      icon: '💉',
      skills: ['Anesthesia Support', 'Patient Monitoring', 'Anesthesia Administration', 'Critical Care'],
      roadmap: 'Diploma → Anesthesia Technician → Senior Anesthesia Technician → Anesthesia Manager',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Anesthesia Management, Critical Care Leadership'
    },
    {
      title: 'OT Manager',
      icon: '📋',
      skills: ['OT Management', 'Sterilization', 'OT Operations', 'Quality Control'],
      roadmap: 'Diploma → OT Technician → Senior OT Technician → OT Manager',
      salary: '₶6-20 LPA',
      demand: 'High',
      futureScope: 'OT Management Leadership, Sterilization Management'
    },
    {
      title: 'Surgical Instrument Specialist',
      icon: '🔧',
      skills: ['Surgical Instruments', 'OT Assistance', 'Surgical Support', 'Patient Care'],
      roadmap: 'Diploma → Surgical Technician → Instrument Specialist → Surgical Instrument Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Surgical Instrument Management, OT Support Leadership'
    },
    {
      title: 'Critical Care Specialist',
      icon: '🚑',
      skills: ['Critical Care', 'Patient Monitoring', 'Anesthesia Administration', 'Emergency Response'],
      roadmap: 'Diploma → Anesthesia Technician → Critical Care Specialist → Critical Care Manager',
      salary: '₶7-26 LPA',
      demand: 'Very High',
      futureScope: 'Critical Care Management, Anesthesia Leadership'
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
        <button onClick={() => setScreen('imaging-operation-theatre')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">⚕️</span>
            <h1 className="text-4xl font-bold text-white">Operation Theatre Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive operation theatre technology diploma programs with various specializations for rewarding OT and surgical careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('imaging-operation-theatre')}>Imaging & Operation Theatre</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Operation Theatre Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search OT specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="ot-technician">OT Technician</option>
              <option value="surgical-technician">Surgical Technician</option>
              <option value="anesthesia-technician">Anesthesia Technician</option>
              <option value="ot-management">OT Management</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Operation Theatre Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">OT Technician</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Surgical Technician</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Anesthesia Technician</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">OT Management</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.ot}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.surgical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.anesthesia}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.management}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Operation Theatre Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive operation theatre technology education with OT training</p>
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
                    <p className="text-white/80 text-sm">Hands-on operation theatre and surgical assistance training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: OT Technology License</h4>
                    <p className="text-white/80 text-sm">Operation Theatre Technology and Surgical Assistance certification</p>
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
                    <h4 className="text-white font-semibold mb-1">OT Support</h4>
                    <p className="text-white/80 text-sm">Operation theatre support and surgical assistance procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Surgical Assistance</h4>
                    <p className="text-white/80 text-sm">Surgical support and operation theatre assistance techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Sterilization</h4>
                    <p className="text-white/80 text-sm">OT sterilization and infection control procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">OT Management</h4>
                    <p className="text-white/80 text-sm">Operation theatre management and OT operations procedures</p>
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

export default OperationTheatreTechnologyScreen;
