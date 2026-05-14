import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface NursingPatientCareScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const NursingPatientCareScreen: React.FC<NursingPatientCareScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'general-nursing',
      icon: '🏥',
      color: 'from-pink-500 to-pink-600',
      title: 'General Nursing Diploma',
      bestFor: ['Patient Care', 'Medical Assistance', 'Hospital Work', 'Healthcare Support'],
      duration: '3 Years',
      careers: ['Staff Nurse', 'Nursing Assistant', 'Patient Care Coordinator'],
      recommended: 'Students interested in patient care, medical assistance, and healthcare support.',
      coreFocus: 'Patient care, nursing practices, medical assistance',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Nursing License, First Aid, CPR',
      higherStudy: 'B.Sc Nursing Lateral Entry',
      commonCareers: 'Staff Nurse, Nursing Assistant, Patient Care Coordinator',
      difficulty: 'Medium-Hard'
    },
    {
      id: 'critical-care-nursing',
      icon: '🚑',
      color: 'from-red-500 to-red-600',
      title: 'Critical Care Nursing Diploma',
      bestFor: ['ICU Care', 'Emergency Response', 'Critical Patient Care', 'Medical Emergency'],
      duration: '3 Years',
      careers: ['Critical Care Nurse', 'ICU Nurse', 'Emergency Nurse'],
      recommended: 'Students interested in critical care, emergency response, and ICU patient care.',
      coreFocus: 'Critical care, emergency response, ICU management',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Critical Care Nursing, ACLS, Emergency Response',
      higherStudy: 'B.Sc Nursing Critical Care Lateral Entry',
      commonCareers: 'Critical Care Nurse, ICU Nurse, Emergency Nurse',
      difficulty: 'Hard'
    },
    {
      id: 'pediatric-nursing',
      icon: '👶',
      color: 'from-purple-500 to-purple-600',
      title: 'Pediatric Nursing Diploma',
      bestFor: ['Child Care', 'Pediatric Medicine', 'Infant Care', 'Child Health'],
      duration: '3 Years',
      careers: ['Pediatric Nurse', 'Child Care Specialist', 'Infant Care Nurse'],
      recommended: 'Students interested in child care, pediatric medicine, and infant care.',
      coreFocus: 'Pediatric care, child health, infant nursing',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Pediatric Nursing, Child Care Specialist',
      higherStudy: 'B.Sc Nursing Pediatric Lateral Entry',
      commonCareers: 'Pediatric Nurse, Child Care Specialist, Infant Care Nurse',
      difficulty: 'Medium'
    },
    {
      id: 'geriatric-nursing',
      icon: '👴',
      color: 'from-blue-500 to-blue-600',
      title: 'Geriatric Nursing Diploma',
      bestFor: ['Elderly Care', 'Geriatric Medicine', 'Senior Health', 'Elderly Support'],
      duration: '3 Years',
      careers: ['Geriatric Nurse', 'Elderly Care Specialist', 'Senior Health Nurse'],
      recommended: 'Students interested in elderly care, geriatric medicine, and senior health.',
      coreFocus: 'Geriatric care, elderly health, senior nursing',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Geriatric Nursing, Elderly Care Specialist',
      higherStudy: 'B.Sc Nursing Geriatric Lateral Entry',
      commonCareers: 'Geriatric Nurse, Elderly Care Specialist, Senior Health Nurse',
      difficulty: 'Medium'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      general: 'Patient care, nursing practices, medical assistance',
      critical: 'Critical care, emergency response, ICU management',
      pediatric: 'Pediatric care, child health, infant nursing',
      geriatric: 'Geriatric care, elderly health, senior nursing'
    },
    {
      feature: 'Technical Level',
      general: 'Medium',
      critical: 'High',
      pediatric: 'Medium',
      geriatric: 'Medium'
    },
    {
      feature: 'Practical Level',
      general: 'Very High',
      critical: 'Very High',
      pediatric: 'Very High',
      geriatric: 'Very High'
    },
    {
      feature: 'Empathy Level',
      general: 'Very High',
      critical: 'Very High',
      pediatric: 'Very High',
      geriatric: 'Very High'
    },
    {
      feature: 'Industry Demand',
      general: 'Very High',
      critical: 'Very High',
      pediatric: 'High',
      geriatric: 'High'
    },
    {
      feature: 'Certifications',
      general: 'Nursing License, First Aid, CPR',
      critical: 'Critical Care Nursing, ACLS, Emergency Response',
      pediatric: 'Pediatric Nursing, Child Care Specialist',
      geriatric: 'Geriatric Nursing, Elderly Care Specialist'
    },
    {
      feature: 'Higher Study Opportunities',
      general: 'B.Sc Nursing Lateral Entry',
      critical: 'B.Sc Nursing Critical Care Lateral Entry',
      pediatric: 'B.Sc Nursing Pediatric Lateral Entry',
      geriatric: 'B.Sc Nursing Geriatric Lateral Entry'
    },
    {
      feature: 'Common Careers',
      general: 'Staff Nurse, Nursing Assistant, Patient Care Coordinator',
      critical: 'Critical Care Nurse, ICU Nurse, Emergency Nurse',
      pediatric: 'Pediatric Nurse, Child Care Specialist, Infant Care Nurse',
      geriatric: 'Geriatric Nurse, Elderly Care Specialist, Senior Health Nurse'
    },
    {
      feature: 'Difficulty Level',
      general: 'Medium-Hard',
      critical: 'Hard',
      pediatric: 'Medium',
      geriatric: 'Medium'
    }
  ];

  const chooseOptions = [
    {
      icon: '🏥',
      title: 'Choose General Nursing If:',
      reasons: [
        'You enjoy general patient care and medical assistance',
        'You are interested in hospital work and healthcare support',
        'You want general nursing careers'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '🚑',
      title: 'Choose Critical Care Nursing If:',
      reasons: [
        'You enjoy emergency response and critical patient care',
        'You are interested in ICU management and emergency medicine',
        'You want critical care nursing careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '👶',
      title: 'Choose Pediatric Nursing If:',
      reasons: [
        'You enjoy child care and pediatric medicine',
        'You are interested in infant care and child health',
        'You want pediatric nursing careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '👴',
      title: 'Choose Geriatric Nursing If:',
      reasons: [
        'You enjoy elderly care and geriatric medicine',
        'You are interested in senior health and elderly support',
        'You want geriatric nursing careers'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const careers = [
    {
      title: 'Staff Nurse',
      icon: '🏥',
      skills: ['Patient Care', 'Medical Assistance', 'Nursing Practices'],
      roadmap: 'Diploma → Staff Nurse → Senior Nurse → Nursing Supervisor',
      salary: '₹4-15 LPA',
      demand: 'Very High',
      futureScope: 'Nursing Management, Specialized Nursing'
    },
    {
      title: 'Critical Care Nurse',
      icon: '🚑',
      skills: ['Critical Care', 'Emergency Response', 'ICU Management'],
      roadmap: 'Diploma → Critical Care Nurse → ICU Nurse → Critical Care Specialist',
      salary: '₹6-20 LPA',
      demand: 'Very High',
      futureScope: 'Critical Care Management, Emergency Medicine'
    },
    {
      title: 'Pediatric Nurse',
      icon: '👶',
      skills: ['Pediatric Care', 'Child Health', 'Infant Nursing'],
      roadmap: 'Diploma → Pediatric Nurse → Child Care Specialist → Pediatric Specialist',
      salary: '₹5-16 LPA',
      demand: 'High',
      futureScope: 'Pediatric Specialization, Child Healthcare'
    },
    {
      title: 'Geriatric Nurse',
      icon: '👴',
      skills: ['Geriatric Care', 'Elderly Health', 'Senior Nursing'],
      roadmap: 'Diploma → Geriatric Nurse → Elderly Care Specialist → Geriatric Specialist',
      salary: '₹5-14 LPA',
      demand: 'High',
      futureScope: 'Geriatric Specialization, Elder Care Management'
    },
    {
      title: 'Nursing Assistant',
      icon: '💊',
      skills: ['Patient Support', 'Medical Assistance', 'Healthcare Support'],
      roadmap: 'Diploma → Nursing Assistant → Senior Assistant → Nursing Coordinator',
      salary: '₹3-10 LPA',
      demand: 'Very High',
      futureScope: 'Nursing Coordination, Healthcare Management'
    },
    {
      title: 'Patient Care Coordinator',
      icon: '📋',
      skills: ['Care Coordination', 'Patient Management', 'Healthcare Planning'],
      roadmap: 'Diploma → Care Coordinator → Senior Coordinator → Care Manager',
      salary: '₹4-12 LPA',
      demand: 'High',
      futureScope: 'Care Management, Healthcare Administration'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('medical_paramedical_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏥</span>
            <h1 className="text-4xl font-bold text-white">Nursing & Patient Care</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive nursing and patient care diploma programs for rewarding healthcare careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Nursing & Patient Care</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search nursing courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="general-nursing">General Nursing</option>
              <option value="critical-care-nursing">Critical Care Nursing</option>
              <option value="pediatric-nursing">Pediatric Nursing</option>
              <option value="geriatric-nursing">Geriatric Nursing</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaCourses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group" onClick={() => {
  if (course.id === 'general-nursing') setScreen('general-nursing');
  else if (course.id === 'critical-care-nursing') setScreen('critical-care-nursing');
  else if (course.id === 'pediatric-nursing') setScreen('pediatric-nursing');
  else if (course.id === 'geriatric-nursing') setScreen('geriatric-nursing');
  else toggleCardExpansion(course.id);
}}>
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
                    <div className="flex justify-between"><span className="text-white/50">Practical Level:</span><span className="text-white/80">{course.practicalLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Empathy Level:</span><span className="text-white/80">{course.empathyLevel}</span></div>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">General Nursing</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Critical Care</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Pediatric</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Geriatric</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.general}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.critical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.pediatric}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.geriatric}</td>
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
                title: 'Nursing Entrance',
                icon: '📝',
                eligibility: '10th with Science & Biology',
                process: 'Entrance Exam → Counseling → Admission',
                higherStudy: 'Direct 2nd Year B.Sc Nursing',
                successRate: '70%'
              },
              {
                title: 'Medical Polytechnic',
                icon: '🎯',
                eligibility: '10th Pass with Science',
                process: 'State Exam → Merit List → Admission',
                higherStudy: 'Lateral Entry to Nursing Programs',
                successRate: '65%'
              },
              {
                title: 'Direct Admission',
                icon: '🎓',
                eligibility: '10th Pass with Science',
                process: 'Application → Interview → Admission',
                higherStudy: 'Regular B.Sc Nursing Admission',
                successRate: '80%'
              },
              {
                title: 'Hospital Training',
                icon: '🔄',
                eligibility: '10th Pass with Science',
                process: 'Hospital Selection → Training → Admission',
                higherStudy: 'Hospital-based Nursing Programs',
                successRate: '75%'
              }
            ].map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
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
                title: 'First Aid & CPR',
                level: 'Beginner',
                duration: '2 Months',
                icon: '🆘',
                relevance: 'Essential for all nursing professionals',
                skills: ['First Aid', 'CPR', 'Emergency Response', 'Basic Life Support']
              },
              {
                title: 'Patient Care Skills',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🏥',
                relevance: 'Core nursing competency',
                skills: ['Patient Care', 'Medical Assistance', 'Healthcare Support', 'Patient Communication']
              },
              {
                title: 'Medical Terminology',
                level: 'Beginner',
                duration: '2 Months',
                icon: '📋',
                relevance: 'Essential for healthcare communication',
                skills: ['Medical Terms', 'Healthcare Language', 'Documentation', 'Communication']
              },
              {
                title: 'Critical Care Skills',
                level: 'Advanced',
                duration: '4 Months',
                icon: '🚑',
                relevance: 'Specialized critical care nursing',
                skills: ['Critical Care', 'ICU Management', 'Emergency Response', 'Advanced Life Support']
              },
              {
                title: 'Pediatric Care',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '👶',
                relevance: 'Specialized child healthcare',
                skills: ['Pediatric Care', 'Child Health', 'Infant Care', 'Child Development']
              },
              {
                title: 'Geriatric Care',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '👴',
                relevance: 'Specialized elderly healthcare',
                skills: ['Geriatric Care', 'Elderly Health', 'Senior Support', 'Age-related Conditions']
              }
            ].map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
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
                name: 'Hospitals',
                icon: '🏥',
                demand: 'Very High',
                growth: '+22%',
                opportunities: 'Government Hospitals, Private Hospitals, Medical Centers',
                types: ['Staff Nurse', 'Critical Care Nurse', 'Nursing Assistant']
              },
              {
                name: 'Healthcare Centers',
                icon: '🏢',
                demand: 'Very High',
                growth: '+20%',
                opportunities: 'Clinics, Health Centers, Medical Facilities',
                types: ['General Nurse', 'Patient Care Coordinator', 'Nursing Assistant']
              },
              {
                name: 'Emergency Services',
                icon: '🚑',
                demand: 'Very High',
                growth: '+25%',
                opportunities: 'Ambulance Services, Emergency Departments, Trauma Centers',
                types: ['Emergency Nurse', 'Critical Care Nurse', 'Emergency Response']
              },
              {
                name: 'Elder Care Facilities',
                icon: '👴',
                demand: 'High',
                growth: '+18%',
                opportunities: 'Old Age Homes, Elder Care Centers, Geriatric Facilities',
                types: ['Geriatric Nurse', 'Elderly Care Specialist', 'Patient Care Coordinator']
              },
              {
                name: 'Pediatric Centers',
                icon: '👶',
                demand: 'High',
                growth: '+16%',
                opportunities: 'Children Hospitals, Pediatric Clinics, Child Care Centers',
                types: ['Pediatric Nurse', 'Child Care Specialist', 'Infant Care Nurse']
              },
              {
                name: 'Home Healthcare',
                icon: '🏠',
                demand: 'High',
                growth: '+20%',
                opportunities: 'Home Care Services, Private Nursing, Personal Care',
                types: ['Home Nurse', 'Personal Care Assistant', 'Patient Care Coordinator']
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Government Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Government Hospital Nurse',
                icon: '🏛️',
                eligibility: 'Nursing Diploma + Registration',
                skills: ['Patient Care', 'Medical Assistance', 'Government Procedures'],
                growth: 'Healthcare sector expansion',
                salary: '₹4-12 LPA'
              },
              {
                title: 'Public Health Nurse',
                icon: '🏥',
                eligibility: 'Nursing Diploma + Public Health Training',
                skills: ['Public Health', 'Community Nursing', 'Healthcare Programs'],
                growth: 'Public health initiatives',
                salary: '₹5-14 LPA'
              },
              {
                title: 'Military Nursing',
                icon: '⚕️',
                eligibility: 'Nursing Diploma + Physical Fitness',
                skills: ['Military Nursing', 'Emergency Care', 'Medical Services'],
                growth: 'Defense healthcare services',
                salary: '₹6-16 LPA'
              },
              {
                title: 'Railway Hospital Nurse',
                icon: '🚂',
                eligibility: 'Nursing Diploma + Medical Training',
                skills: ['Railway Healthcare', 'Emergency Response', 'Patient Care'],
                growth: 'Railway healthcare network',
                salary: '₹4-11 LPA'
              },
              {
                title: 'Primary Health Center Nurse',
                icon: '🏘️',
                eligibility: 'Nursing Diploma + Rural Healthcare',
                skills: ['Primary Care', 'Rural Health', 'Community Nursing'],
                growth: 'Rural healthcare development',
                salary: '₹3-10 LPA'
              },
              {
                title: 'ESI Hospital Nurse',
                icon: '💼',
                eligibility: 'Nursing Diploma + ESI Training',
                skills: ['ESI Healthcare', 'Employee Health', 'Medical Services'],
                growth: 'Employee healthcare services',
                salary: '₹4-12 LPA'
              }
            ].map((job, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
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
                title: 'Healthcare Digitalization',
                icon: '💻',
                growth: '20%',
                description: 'Digital healthcare systems and electronic medical records',
                salaryImpact: '+18%',
                demand: 'Very High'
              },
              {
                title: 'Critical Care Expansion',
                icon: '🚑',
                growth: '22%',
                description: 'Growing need for critical care and emergency nursing',
                salaryImpact: '+22%',
                demand: 'Very High'
              },
              {
                title: 'Geriatric Care Growth',
                icon: '👴',
                growth: '18%',
                description: 'Increasing elderly population driving geriatric nursing demand',
                salaryImpact: '+15%',
                demand: 'High'
              },
              {
                title: 'Pediatric Specialization',
                icon: '👶',
                growth: '16%',
                description: 'Specialized pediatric nursing and child healthcare',
                salaryImpact: '+16%',
                demand: 'High'
              },
              {
                title: 'Home Healthcare Rise',
                icon: '🏠',
                growth: '25%',
                description: 'Growing demand for home-based nursing and personal care',
                salaryImpact: '+20%',
                demand: 'Very High'
              }
            ].map((trend, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
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

export default NursingPatientCareScreen;
