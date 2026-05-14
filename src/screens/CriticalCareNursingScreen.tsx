import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface CriticalCareNursingScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const CriticalCareNursingScreen: React.FC<CriticalCareNursingScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'icu-nursing',
      icon: '🏥',
      color: 'from-red-500 to-red-600',
      title: 'ICU Nursing',
      bestFor: ['Intensive Care', 'Critical Monitoring', 'Life Support', 'Emergency Response'],
      duration: '3 Years',
      careers: ['ICU Nurse', 'Critical Care Nurse', 'Intensive Care Specialist'],
      recommended: 'Students interested in intensive care, critical monitoring, and life support.',
      coreFocus: 'Intensive care, critical monitoring, life support',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      stressLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Critical Care Nursing, ACLS, BLS',
      higherStudy: 'B.Sc Critical Care Nursing Lateral Entry',
      commonCareers: 'ICU Nurse, Critical Care Nurse, Intensive Care Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'emergency-nursing',
      icon: '🚑',
      color: 'from-orange-500 to-orange-600',
      title: 'Emergency Nursing',
      bestFor: ['Emergency Care', 'Trauma Response', 'Critical Assessment', 'Life Saving'],
      duration: '3 Years',
      careers: ['Emergency Nurse', 'Trauma Nurse', 'ER Specialist'],
      recommended: 'Students interested in emergency care, trauma response, and critical assessment.',
      coreFocus: 'Emergency care, trauma response, critical assessment',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      stressLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Emergency Nursing, Trauma Care, CPR',
      higherStudy: 'B.Sc Emergency Nursing Lateral Entry',
      commonCareers: 'Emergency Nurse, Trauma Nurse, ER Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'cardiac-care-nursing',
      icon: '❤️',
      color: 'from-pink-500 to-pink-600',
      title: 'Cardiac Care Nursing',
      bestFor: ['Cardiac Care', 'Heart Monitoring', 'Cardiac Emergency', 'ICU Cardiac'],
      duration: '3 Years',
      careers: ['Cardiac Nurse', 'Heart Monitor Specialist', 'ICU Cardiac Nurse'],
      recommended: 'Students interested in cardiac care, heart monitoring, and cardiac emergency.',
      coreFocus: 'Cardiac care, heart monitoring, cardiac emergency',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      stressLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Cardiac Care Nursing, ECG Monitoring, ACLS',
      higherStudy: 'B.Sc Cardiac Care Nursing Lateral Entry',
      commonCareers: 'Cardiac Nurse, Heart Monitor Specialist, ICU Cardiac Nurse',
      difficulty: 'Very Hard'
    },
    {
      id: 'neonatal-nursing',
      icon: '👶',
      color: 'from-purple-500 to-purple-600',
      title: 'Neonatal Critical Care',
      bestFor: ['Neonatal Care', 'Infant ICU', 'Baby Critical Care', 'NICU'],
      duration: '3 Years',
      careers: ['Neonatal Nurse', 'NICU Specialist', 'Infant Critical Care Nurse'],
      recommended: 'Students interested in neonatal care, infant ICU, and baby critical care.',
      coreFocus: 'Neonatal care, infant ICU, baby critical care',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      stressLevel: 'High',
      industryDemand: 'High',
      certifications: 'Neonatal Nursing, Infant Care, NICU Certification',
      higherStudy: 'B.Sc Neonatal Nursing Lateral Entry',
      commonCareers: 'Neonatal Nurse, NICU Specialist, Infant Critical Care Nurse',
      difficulty: 'Very Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      icu: 'Intensive care, critical monitoring, life support',
      emergency: 'Emergency care, trauma response, critical assessment',
      cardiac: 'Cardiac care, heart monitoring, cardiac emergency',
      neonatal: 'Neonatal care, infant ICU, baby critical care'
    },
    {
      feature: 'Technical Level',
      icu: 'High',
      emergency: 'High',
      cardiac: 'Very High',
      neonatal: 'Very High'
    },
    {
      feature: 'Practical Level',
      icu: 'Very High',
      emergency: 'Very High',
      cardiac: 'Very High',
      neonatal: 'Very High'
    },
    {
      feature: 'Stress Level',
      icu: 'Very High',
      emergency: 'Very High',
      cardiac: 'High',
      neonatal: 'High'
    },
    {
      feature: 'Industry Demand',
      icu: 'Very High',
      emergency: 'Very High',
      cardiac: 'Very High',
      neonatal: 'High'
    },
    {
      feature: 'Certifications',
      icu: 'Critical Care Nursing, ACLS, BLS',
      emergency: 'Emergency Nursing, Trauma Care, CPR',
      cardiac: 'Cardiac Care Nursing, ECG Monitoring, ACLS',
      neonatal: 'Neonatal Nursing, Infant Care, NICU Certification'
    },
    {
      feature: 'Higher Study Opportunities',
      icu: 'B.Sc Critical Care Nursing Lateral Entry',
      emergency: 'B.Sc Emergency Nursing Lateral Entry',
      cardiac: 'B.Sc Cardiac Care Nursing Lateral Entry',
      neonatal: 'B.Sc Neonatal Nursing Lateral Entry'
    },
    {
      feature: 'Common Careers',
      icu: 'ICU Nurse, Critical Care Nurse, Intensive Care Specialist',
      emergency: 'Emergency Nurse, Trauma Nurse, ER Specialist',
      cardiac: 'Cardiac Nurse, Heart Monitor Specialist, ICU Cardiac Nurse',
      neonatal: 'Neonatal Nurse, NICU Specialist, Infant Critical Care Nurse'
    },
    {
      feature: 'Difficulty Level',
      icu: 'Very Hard',
      emergency: 'Very Hard',
      cardiac: 'Very Hard',
      neonatal: 'Very Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🏥',
      title: 'Choose ICU Nursing If:',
      reasons: [
        'You enjoy intensive care and critical monitoring',
        'You are interested in life support and critical patient management',
        'You want ICU-based nursing careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🚑',
      title: 'Choose Emergency Nursing If:',
      reasons: [
        'You enjoy emergency care and trauma response',
        'You are interested in critical assessment and life saving',
        'You want emergency-based nursing careers'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '❤️',
      title: 'Choose Cardiac Care Nursing If:',
      reasons: [
        'You enjoy cardiac care and heart monitoring',
        'You are interested in cardiac emergency and heart health',
        'You want cardiac-based nursing careers'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '👶',
      title: 'Choose Neonatal Critical Care If:',
      reasons: [
        'You enjoy neonatal care and infant ICU',
        'You are interested in baby critical care and infant health',
        'You want neonatal-based nursing careers'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const careers = [
    {
      title: 'ICU Nurse',
      icon: '🏥',
      skills: ['Critical Care', 'Life Support', 'Patient Monitoring'],
      roadmap: 'Diploma → ICU Nurse → Senior ICU Nurse → ICU Manager',
      salary: '₹6-20 LPA',
      demand: 'Very High',
      futureScope: 'Critical Care Management, ICU Leadership'
    },
    {
      title: 'Emergency Nurse',
      icon: '🚑',
      skills: ['Emergency Care', 'Trauma Response', 'Critical Assessment'],
      roadmap: 'Diploma → Emergency Nurse → Senior ER Nurse → ER Manager',
      salary: '₇-22 LPA',
      demand: 'Very High',
      futureScope: 'Emergency Management, Trauma Leadership'
    },
    {
      title: 'Cardiac Nurse',
      icon: '❤️',
      skills: ['Cardiac Care', 'Heart Monitoring', 'ECG Interpretation'],
      roadmap: 'Diploma → Cardiac Nurse → Senior Cardiac Nurse → Cardiac Manager',
      salary: '₆-20 LPA',
      demand: 'Very High',
      futureScope: 'Cardiac Management, Heart Care Leadership'
    },
    {
      title: 'Neonatal Nurse',
      icon: '👶',
      skills: ['Neonatal Care', 'Infant ICU', 'Baby Critical Care'],
      roadmap: 'Diploma → Neonatal Nurse → Senior NICU Nurse → NICU Manager',
      salary: '₅-18 LPA',
      demand: 'High',
      futureScope: 'Neonatal Management, Infant Care Leadership'
    },
    {
      title: 'Critical Care Specialist',
      icon: '⚕️',
      skills: ['Critical Care', 'Advanced Life Support', 'Patient Assessment'],
      roadmap: 'Diploma → Critical Care Specialist → Senior Specialist → Critical Care Director',
      salary: '₈-25 LPA',
      demand: 'Very High',
      futureScope: 'Critical Care Leadership, Advanced Specialization'
    },
    {
      title: 'Trauma Nurse',
      icon: '🏥',
      skills: ['Trauma Care', 'Emergency Response', 'Critical Assessment'],
      roadmap: 'Diploma → Trauma Nurse → Senior Trauma Nurse → Trauma Manager',
      salary: '₇-22 LPA',
      demand: 'Very High',
      futureScope: 'Trauma Management, Emergency Leadership'
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
        <button onClick={() => setScreen('nursing-patient-care')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🚑</span>
            <h1 className="text-4xl font-bold text-white">Critical Care Nursing Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive critical care nursing diploma programs with various specializations for rewarding nursing careers in intensive and emergency care after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('nursing-patient-care')}>Nursing & Patient Care</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Critical Care Nursing Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search critical care specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="icu-nursing">ICU Nursing</option>
              <option value="emergency-nursing">Emergency Nursing</option>
              <option value="cardiac-care-nursing">Cardiac Care Nursing</option>
              <option value="neonatal-nursing">Neonatal Critical Care</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Critical Care Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Cardiac</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Neonatal</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.icu}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.emergency}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.cardiac}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.neonatal}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Critical Care Nursing Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Intensive critical care education with advanced training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Biology preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 8 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on ICU and emergency department training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Critical Care License</h4>
                    <p className="text-white/80 text-sm">Critical Care Nursing and ACLS certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Critical Patient Assessment</h4>
                    <p className="text-white/80 text-sm">Advanced patient assessment and monitoring techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Life Support Systems</h4>
                    <p className="text-white/80 text-sm">Ventilator management and life support equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Emergency Response</h4>
                    <p className="text-white/80 text-sm">Rapid response to medical emergencies and trauma</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Critical Communication</h4>
                    <p className="text-white/80 text-sm">Effective communication in high-stress situations</p>
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

export default CriticalCareNursingScreen;
