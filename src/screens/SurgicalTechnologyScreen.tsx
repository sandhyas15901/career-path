import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface SurgicalTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const SurgicalTechnologyScreen: React.FC<SurgicalTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'surgical-instrumentation',
      icon: '🏥',
      color: 'from-green-500 to-green-600',
      title: 'Surgical Instrumentation',
      bestFor: ['Surgical Instruments', 'Instrument Maintenance', 'Sterilization', 'Surgical Support'],
      duration: '3 Years',
      careers: ['Surgical Instrument Technician', 'Instrument Maintenance Specialist', 'Sterilization Technician'],
      recommended: 'Students interested in surgical instruments, instrument maintenance, and sterilization.',
      coreFocus: 'Surgical instruments, instrument maintenance, sterilization',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Surgical Instrumentation License, Instrument Maintenance Certificate',
      higherStudy: 'B.Sc Surgical Technology Lateral Entry',
      commonCareers: 'Surgical Instrument Technician, Instrument Maintenance Specialist, Sterilization Technician',
      difficulty: 'Hard'
    },
    {
      id: 'surgical-assisting',
      icon: '⚕️',
      color: 'from-blue-500 to-blue-600',
      title: 'Surgical Assisting',
      bestFor: ['Surgical Assistance', 'Operating Room Support', 'Patient Care', 'Surgical Procedures'],
      duration: '3 Years',
      careers: ['Surgical Assistant', 'Operating Room Technician', 'Patient Care Assistant'],
      recommended: 'Students interested in surgical assistance, operating room support, and surgical procedures.',
      coreFocus: 'Surgical assistance, operating room support, surgical procedures',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Surgical Assisting License, Operating Room Support Certificate',
      higherStudy: 'B.Sc Surgical Assisting Lateral Entry',
      commonCareers: 'Surgical Assistant, Operating Room Technician, Patient Care Assistant',
      difficulty: 'Hard'
    },
    {
      id: 'anesthesia-technology',
      icon: '💉',
      color: 'from-purple-500 to-purple-600',
      title: 'Anesthesia Technology',
      bestFor: ['Anesthesia Support', 'Patient Monitoring', 'Anesthetic Care', 'Surgical Support'],
      duration: '3 Years',
      careers: ['Anesthesia Technician', 'Patient Monitoring Specialist', 'Anesthetic Care Assistant'],
      recommended: 'Students interested in anesthesia support, patient monitoring, and anesthetic care.',
      coreFocus: 'Anesthesia support, patient monitoring, anesthetic care',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Anesthesia Technology License, Patient Monitoring Certificate',
      higherStudy: 'B.Sc Anesthesia Technology Lateral Entry',
      commonCareers: 'Anesthesia Technician, Patient Monitoring Specialist, Anesthetic Care Assistant',
      difficulty: 'Very Hard'
    },
    {
      id: 'surgical-technology-management',
      icon: '🏢',
      color: 'from-orange-500 to-orange-600',
      title: 'Surgical Technology Management',
      bestFor: ['Surgical Management', 'Operating Room Management', 'Surgical Services', 'Healthcare Administration'],
      duration: '3 Years',
      careers: ['Surgical Technology Manager', 'Operating Room Manager', 'Surgical Services Coordinator'],
      recommended: 'Students interested in surgical management, operating room management, and surgical services.',
      coreFocus: 'Surgical management, operating room management, surgical services',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Surgical Technology Management License, Operating Room Management Certificate',
      higherStudy: 'B.Sc Surgical Technology Management Lateral Entry',
      commonCareers: 'Surgical Technology Manager, Operating Room Manager, Surgical Services Coordinator',
      difficulty: 'Medium'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      instrumentation: 'Surgical instruments, instrument maintenance, sterilization',
      assisting: 'Surgical assistance, operating room support, surgical procedures',
      anesthesia: 'Anesthesia support, patient monitoring, anesthetic care',
      management: 'Surgical management, operating room management, surgical services'
    },
    {
      feature: 'Technical Level',
      instrumentation: 'High',
      assisting: 'High',
      anesthesia: 'Very High',
      management: 'Medium'
    },
    {
      feature: 'Practical Level',
      instrumentation: 'Very High',
      assisting: 'Very High',
      anesthesia: 'Very High',
      management: 'High'
    },
    {
      feature: 'Accuracy Level',
      instrumentation: 'Very High',
      assisting: 'Very High',
      anesthesia: 'Very High',
      management: 'High'
    },
    {
      feature: 'Industry Demand',
      instrumentation: 'High',
      assisting: 'Very High',
      anesthesia: 'Very High',
      management: 'High'
    },
    {
      feature: 'Certifications',
      instrumentation: 'Surgical Instrumentation License, Instrument Maintenance Certificate',
      assisting: 'Surgical Assisting License, Operating Room Support Certificate',
      anesthesia: 'Anesthesia Technology License, Patient Monitoring Certificate',
      management: 'Surgical Technology Management License, Operating Room Management Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      instrumentation: 'B.Sc Surgical Technology Lateral Entry',
      assisting: 'B.Sc Surgical Assisting Lateral Entry',
      anesthesia: 'B.Sc Anesthesia Technology Lateral Entry',
      management: 'B.Sc Surgical Technology Management Lateral Entry'
    },
    {
      feature: 'Common Careers',
      instrumentation: 'Surgical Instrument Technician, Instrument Maintenance Specialist, Sterilization Technician',
      assisting: 'Surgical Assistant, Operating Room Technician, Patient Care Assistant',
      anesthesia: 'Anesthesia Technician, Patient Monitoring Specialist, Anesthetic Care Assistant',
      management: 'Surgical Technology Manager, Operating Room Manager, Surgical Services Coordinator'
    },
    {
      feature: 'Difficulty Level',
      instrumentation: 'Hard',
      assisting: 'Hard',
      anesthesia: 'Very Hard',
      management: 'Medium'
    }
  ];

  const chooseOptions = [
    {
      icon: '🏥',
      title: 'Choose Surgical Instrumentation If:',
      reasons: [
        'You enjoy surgical instruments and instrument maintenance',
        'You are interested in sterilization and surgical Support',
        'You want surgical instrumentation-based careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '⚕️',
      title: 'Choose Surgical Assisting If:',
      reasons: [
        'You enjoy surgical assistance and operating room Support',
        'You are interested in surgical procedures and patient Care',
        'You want surgical assisting-based careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💉',
      title: 'Choose Anesthesia Technology If:',
      reasons: [
        'You enjoy anesthesia support and patient Monitoring',
        'You are interested in anesthetic care and surgical Support',
        'You want anesthesia technology-based careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🏢',
      title: 'Choose Surgical Technology Management If:',
      reasons: [
        'You enjoy surgical management and operating room Management',
        'You are interested in surgical Services and healthcare Administration',
        'You want surgical management-based careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Surgical Instrument Technician',
      icon: '🏥',
      skills: ['Surgical Instruments', 'Instrument Maintenance', 'Sterilization', 'Surgical Support'],
      roadmap: 'Diploma → Surgical Instrument Technician → Senior Technician → Instrument Manager',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Surgical Instrumentation Management, Instrument Maintenance Leadership'
    },
    {
      title: 'Surgical Assistant',
      icon: '⚕️',
      skills: ['Surgical Assistance', 'Operating Room Support', 'Surgical Procedures', 'Patient Care'],
      roadmap: 'Diploma → Surgical Assistant → Senior Assistant → Surgical Manager',
      salary: '₶6-20 LPA',
      demand: 'Very High',
      futureScope: 'Surgical Assisting Management, Operating Room Leadership'
    },
    {
      title: 'Anesthesia Technician',
      icon: '💉',
      skills: ['Anesthesia Support', 'Patient Monitoring', 'Anesthetic Care', 'Surgical Support'],
      roadmap: 'Diploma → Anesthesia Technician → Senior Technician → Anesthesia Manager',
      salary: '₶7-24 LPA',
      demand: 'Very High',
      futureScope: 'Anesthesia Technology Management, Patient Monitoring Leadership'
    },
    {
      title: 'Surgical Technology Manager',
      icon: '🏢',
      skills: ['Surgical Management', 'Operating Room Management', 'Surgical Services', 'Healthcare Administration'],
      roadmap: 'Diploma → Surgical Technology Manager → Senior Manager → Surgical Director',
      salary: '₶8-28 LPA',
      demand: 'High',
      futureScope: 'Surgical Technology Management, Operating Room Leadership'
    },
    {
      title: 'Operating Room Technician',
      icon: '⚕️',
      skills: ['Operating Room Support', 'Surgical Assistance', 'Patient Care', 'Surgical Procedures'],
      roadmap: 'Diploma → Operating Room Technician → Senior Technician → Operating Room Manager',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Operating Room Management, Surgical Assistance Leadership'
    },
    {
      title: 'Anesthetic Care Assistant',
      icon: '💉',
      skills: ['Anesthetic Care', 'Anesthesia Support', 'Patient Monitoring', 'Surgical Support'],
      roadmap: 'Diploma → Anesthetic Care Assistant → Senior Assistant → Anesthesia Manager',
      salary: '₶5-20 LPA',
      demand: 'Very High',
      futureScope: 'Anesthetic Care Management, Anesthesia Technology Leadership'
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
        <button onClick={() => setScreen('imaging-operation-theatre')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏥</span>
            <h1 className="text-4xl font-bold text-white">Surgical Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive surgical technology diploma programs with various specializations for rewarding surgical careers after 10th grade.
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
          <span className="text-white font-medium">Surgical Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search surgical technology specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="surgical-instrumentation">Surgical Instrumentation</option>
              <option value="surgical-assisting">Surgical Assisting</option>
              <option value="anesthesia-technology">Anesthesia Technology</option>
              <option value="surgical-technology-management">Surgical Technology Management</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Surgical Technology Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Instrumentation</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Assisting</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Anesthesia</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Management</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.instrumentation}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.assisting}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Surgical Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive surgical technology education with hands-on training</p>
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
                    <p className="text-white/80 text-sm">Hands-on surgical technology and operating room training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Surgical Technology License</h4>
                    <p className="text-white/80 text-sm">Surgical Technology and Operating Room certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Surgical Instruments</h4>
                    <p className="text-white/80 text-sm">Surgical instruments procedures and maintenance techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Surgical Assistance</h4>
                    <p className="text-white/80 text-sm">Surgical assistance procedures and operating room support techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Anesthesia Support</h4>
                    <p className="text-white/80 text-sm">Anesthesia support procedures and patient monitoring techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Surgical Management</h4>
                    <p className="text-white/80 text-sm">Surgical management procedures and operating room management techniques</p>
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

export default SurgicalTechnologyScreen;
