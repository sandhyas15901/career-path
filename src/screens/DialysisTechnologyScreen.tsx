import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface DialysisTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const DialysisTechnologyScreen: React.FC<DialysisTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'hemodialysis',
      icon: '💧',
      color: 'from-blue-500 to-blue-600',
      title: 'Hemodialysis',
      bestFor: ['Kidney Dialysis', 'Blood Purification', 'Renal Therapy', 'Patient Care'],
      duration: '3 Years',
      careers: ['Hemodialysis Technician', 'Renal Care Specialist', 'Dialysis Nurse Assistant'],
      recommended: 'Students interested in kidney dialysis, blood purification, and renal therapy.',
      coreFocus: 'Kidney dialysis, blood purification, renal therapy',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Hemodialysis License, Renal Care Certificate',
      higherStudy: 'B.Sc Dialysis Technology Lateral Entry',
      commonCareers: 'Hemodialysis Technician, Renal Care Specialist, Dialysis Nurse Assistant',
      difficulty: 'Hard'
    },
    {
      id: 'peritoneal-dialysis',
      icon: '🏥',
      color: 'from-purple-500 to-purple-600',
      title: 'Peritoneal Dialysis',
      bestFor: ['Peritoneal Dialysis', 'Home Dialysis', 'Renal Support', 'Patient Education'],
      duration: '3 Years',
      careers: ['Peritoneal Dialysis Technician', 'Home Dialysis Specialist', 'Renal Support Coordinator'],
      recommended: 'Students interested in peritoneal dialysis, home dialysis, and renal Support.',
      coreFocus: 'Peritoneal dialysis, home dialysis, renal support',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Peritoneal Dialysis License, Home Dialysis Certificate',
      higherStudy: 'B.Sc Peritoneal Dialysis Lateral Entry',
      commonCareers: 'Peritoneal Dialysis Technician, Home Dialysis Specialist, Renal Support Coordinator',
      difficulty: 'Hard'
    },
    {
      id: 'renal-rehabilitation',
      icon: '💪',
      color: 'from-green-500 to-green-600',
      title: 'Renal Rehabilitation',
      bestFor: ['Renal Rehab', 'Kidney Therapy', 'Exercise Therapy', 'Patient Recovery'],
      duration: '3 Years',
      careers: ['Renal Rehab Technician', 'Kidney Therapy Specialist', 'Exercise Therapy Assistant'],
      recommended: 'Students interested in renal rehab, kidney therapy, and exercise Therapy.',
      coreFocus: 'Renal rehab, kidney therapy, exercise Therapy',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Renal Rehab License, Kidney Therapy Certificate',
      higherStudy: 'B.Sc Renal Rehabilitation Lateral Entry',
      commonCareers: 'Renal Rehab Technician, Kidney Therapy Specialist, Exercise Therapy Assistant',
      difficulty: 'Medium'
    },
    {
      id: 'transplant-coordination',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600',
      title: 'Transplant Coordination',
      bestFor: ['Transplant Support', 'Kidney Transplant', 'Organ Donation', 'Patient Coordination'],
      duration: '3 Years',
      careers: ['Transplant Coordinator', 'Kidney Transplant Specialist', 'Organ Donation Coordinator'],
      recommended: 'Students interested in transplant support, kidney transplant, and organ donation.',
      coreFocus: 'Transplant support, kidney transplant, organ donation',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Transplant Coordination License, Organ Donation Certificate',
      higherStudy: 'B.Sc Transplant Coordination Lateral Entry',
      commonCareers: 'Transplant Coordinator, Kidney Transplant Specialist, Organ Donation Coordinator',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      hemodialysis: 'Kidney dialysis, blood purification, renal therapy',
      peritoneal: 'Peritoneal dialysis, home dialysis, renal Support',
      rehabilitation: 'Renal rehab, kidney Therapy, exercise Therapy',
      transplant: 'Transplant support, kidney transplant, organ Donation'
    },
    {
      feature: 'Technical Level',
      hemodialysis: 'High',
      peritoneal: 'High',
      rehabilitation: 'Medium',
      transplant: 'High'
    },
    {
      feature: 'Practical Level',
      hemodialysis: 'Very High',
      peritoneal: 'Very High',
      rehabilitation: 'High',
      transplant: 'High'
    },
    {
      feature: 'Accuracy Level',
      hemodialysis: 'Very High',
      peritoneal: 'Very High',
      rehabilitation: 'High',
      transplant: 'Very High'
    },
    {
      feature: 'Industry Demand',
      hemodialysis: 'Very High',
      peritoneal: 'High',
      rehabilitation: 'High',
      transplant: 'Medium'
    },
    {
      feature: 'Certifications',
      hemodialysis: 'Hemodialysis License, Renal Care Certificate',
      peritoneal: 'Peritoneal Dialysis License, Home Dialysis Certificate',
      rehabilitation: 'Renal Rehab License, Kidney Therapy Certificate',
      transplant: 'Transplant Coordination License, Organ Donation Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      hemodialysis: 'B.Sc Dialysis Technology Lateral Entry',
      peritoneal: 'B.Sc Peritoneal Dialysis Lateral Entry',
      rehabilitation: 'B.Sc Renal Rehabilitation Lateral Entry',
      transplant: 'B.Sc Transplant Coordination Lateral Entry'
    },
    {
      feature: 'Common Careers',
      hemodialysis: 'Hemodialysis Technician, Renal Care Specialist, Dialysis Nurse Assistant',
      peritoneal: 'Peritoneal Dialysis Technician, Home Dialysis Specialist, Renal Support Coordinator',
      rehabilitation: 'Renal Rehab Technician, Kidney Therapy Specialist, Exercise Therapy Assistant',
      transplant: 'Transplant Coordinator, Kidney Transplant Specialist, Organ Donation Coordinator'
    },
    {
      feature: 'Difficulty Level',
      hemodialysis: 'Hard',
      peritoneal: 'Hard',
      rehabilitation: 'Medium',
      transplant: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '💧',
      title: 'Choose Hemodialysis If:',
      reasons: [
        'You enjoy kidney dialysis and blood purification',
        'You are interested in renal Therapy and patient Care',
        'You want hemodialysis-based careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🏥',
      title: 'Choose Peritoneal Dialysis If:',
      reasons: [
        'You enjoy peritoneal dialysis and home dialysis',
        'You are interested in renal Support and patient Education',
        'You want peritoneal dialysis-based careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '💪',
      title: 'Choose Renal Rehabilitation If:',
      reasons: [
        'You enjoy renal rehab and kidney Therapy',
        'You are interested in exercise Therapy and patient Recovery',
        'You want renal rehabilitation-based careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏥',
      title: 'Choose Transplant Coordination If:',
      reasons: [
        'You enjoy transplant support and kidney transplant',
        'You are interested in organ Donation and patient Coordination',
        'You want transplant coordination-based careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Hemodialysis Technician',
      icon: '💧',
      skills: ['Kidney Dialysis', 'Blood Purification', 'Renal Therapy', 'Patient Care'],
      roadmap: 'Diploma → Hemodialysis Technician → Senior Technician → Dialysis Manager',
      salary: '₶4-16 LPA',
      demand: 'Very High',
      futureScope: 'Dialysis Management, Renal Care Leadership'
    },
    {
      title: 'Peritoneal Dialysis Technician',
      icon: '🏥',
      skills: ['Peritoneal Dialysis', 'Home Dialysis', 'Renal Support', 'Patient Education'],
      roadmap: 'Diploma → Peritoneal Technician → Senior Technician → Peritoneal Manager',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Peritoneal Dialysis Management, Home Dialysis Leadership'
    },
    {
      title: 'Renal Rehab Technician',
      icon: '💪',
      skills: ['Renal Rehab', 'Kidney Therapy', 'Exercise Therapy', 'Patient Recovery'],
      roadmap: 'Diploma → Renal Rehab Technician → Senior Technician → Rehab Manager',
      salary: '₶4-14 LPA',
      demand: 'High',
      futureScope: 'Renal Rehabilitation Management, Kidney Therapy Leadership'
    },
    {
      title: 'Transplant Coordinator',
      icon: '🏥',
      skills: ['Transplant Support', 'Kidney Transplant', 'Organ Donation', 'Patient Coordination'],
      roadmap: 'Diploma → Transplant Coordinator → Senior Coordinator → Transplant Manager',
      salary: '₶6-20 LPA',
      demand: 'Medium',
      futureScope: 'Transplant Coordination Management, Organ Donation Leadership'
    },
    {
      title: 'Renal Care Specialist',
      icon: '💧',
      skills: ['Renal Therapy', 'Kidney Support', 'Dialysis Care', 'Patient Monitoring'],
      roadmap: 'Diploma → Renal Specialist → Senior Specialist → Renal Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Renal Care Management, Kidney Support Leadership'
    },
    {
      title: 'Kidney Transplant Specialist',
      icon: '🏥',
      skills: ['Kidney Transplant', 'Organ Donation', 'Transplant Support', 'Patient Coordination'],
      roadmap: 'Diploma → Transplant Specialist → Senior Specialist → Transplant Director',
      salary: '₶7-25 LPA',
      demand: 'Medium',
      futureScope: 'Kidney Transplant Management, Organ Donation Leadership'
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
        <button onClick={() => setScreen('emergency-cardiac-dialysis')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">💧</span>
            <h1 className="text-4xl font-bold text-white">Dialysis Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive dialysis technology diploma programs with various specializations for rewarding renal care careers after 10th grade.
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
          <span className="text-white font-medium">Dialysis Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search dialysis specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="hemodialysis">Hemodialysis</option>
              <option value="peritoneal-dialysis">Peritoneal Dialysis</option>
              <option value="renal-rehabilitation">Renal Rehabilitation</option>
              <option value="Transplant-coordination">Transplant Coordination</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Dialysis Technology Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Hemodialysis</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Peritoneal</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Rehabilitation</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Transplant</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.hemodialysis}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.peritoneal}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.rehabilitation}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.transplant}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Dialysis Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive dialysis technology education with renal care training</p>
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
                    <p className="text-white/80 text-sm">Hands-on dialysis technology and renal care training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Dialysis Technology License</h4>
                    <p className="text-white/80 text-sm">Dialysis Technology and Renal Care certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Kidney Dialysis</h4>
                    <p className="text-white/80 text-sm">Kidney dialysis procedures and blood purification techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Blood Purification</h4>
                    <p className="text-white/80 text-sm">Blood purification procedures and renal therapy techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Renal Therapy</h4>
                    <p className="text-white/80 text-sm">Renal therapy procedures and kidney support techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Patient Care</h4>
                    <p className="text-white/80 text-sm">Patient care procedures and renal support techniques</p>
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

export default DialysisTechnologyScreen;
