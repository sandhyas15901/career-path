import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface ImagingOperationTheatreScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const ImagingOperationTheatreScreen: React.FC<ImagingOperationTheatreScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'medical-imaging-technology',
      icon: '📷',
      color: 'from-purple-500 to-purple-600',
      title: 'Medical Imaging Technology Diploma',
      bestFor: ['Medical Imaging', 'Radiology Support', 'Diagnostic Equipment', 'Image Analysis'],
      duration: '3 Years',
      careers: ['Imaging Technician', 'Radiology Assistant', 'Diagnostic Imaging Specialist'],
      recommended: 'Students interested in medical imaging, radiology support, and diagnostic equipment.',
      coreFocus: 'Medical imaging, radiology support, diagnostic equipment',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Imaging Technician License, Radiology Support Certificate',
      higherStudy: 'B.Sc Medical Imaging Lateral Entry',
      commonCareers: 'Imaging Technician, Radiology Assistant, Diagnostic Imaging Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'operation-theatre-technology',
      icon: '⚕️',
      color: 'from-red-500 to-red-600',
      title: 'Operation Theatre Technology Diploma',
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
      id: 'radiology-imaging',
      icon: '🔬',
      color: 'from-blue-500 to-blue-600',
      title: 'Radiology Imaging Diploma',
      bestFor: ['Radiology', 'Medical Imaging', 'Diagnostic Radiology', 'X-ray Technology'],
      duration: '3 Years',
      careers: ['Radiology Technician', 'X-ray Technician', 'Diagnostic Radiology Specialist'],
      recommended: 'Students interested in radiology, medical imaging, and diagnostic radiology.',
      coreFocus: 'Radiology, medical imaging, diagnostic radiology',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Radiology Technician, X-ray Technology Certificate',
      higherStudy: 'B.Sc Radiology Lateral Entry',
      commonCareers: 'Radiology Technician, X-ray Technician, Diagnostic Radiology Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'surgical-technology',
      icon: '🏥',
      color: 'from-green-500 to-green-600',
      title: 'Surgical Technology Diploma',
      bestFor: ['Surgical Support', 'OT Assistance', 'Surgical Instruments', 'Patient Care'],
      duration: '3 Years',
      careers: ['Surgical Technician', 'OT Assistant', 'Surgical Instrument Specialist'],
      recommended: 'Students interested in surgical support, OT assistance, and surgical instruments.',
      coreFocus: 'Surgical support, OT assistance, surgical instruments',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Surgical Technician, OT Assistance Certificate',
      higherStudy: 'B.Sc Surgical Technology Lateral Entry',
      commonCareers: 'Surgical Technician, OT Assistant, Surgical Instrument Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      imaging: 'Medical imaging, radiology support, diagnostic equipment',
      ot: 'OT support, surgical assistance, OT management',
      radiology: 'Radiology, medical imaging, diagnostic radiology',
      surgical: 'Surgical support, OT assistance, surgical instruments'
    },
    {
      feature: 'Technical Level',
      imaging: 'High',
      ot: 'High',
      radiology: 'Very High',
      surgical: 'High'
    },
    {
      feature: 'Practical Level',
      imaging: 'Very High',
      ot: 'Very High',
      radiology: 'High',
      surgical: 'Very High'
    },
    {
      feature: 'Accuracy Level',
      imaging: 'High',
      ot: 'Very High',
      radiology: 'Very High',
      surgical: 'Very High'
    },
    {
      feature: 'Industry Demand',
      imaging: 'Very High',
      ot: 'Very High',
      radiology: 'Very High',
      surgical: 'Very High'
    },
    {
      feature: 'Certifications',
      imaging: 'Imaging Technician License, Radiology Support Certificate',
      ot: 'OT Technician License, Surgical Assistance Certificate',
      radiology: 'Radiology Technician, X-ray Technology Certificate',
      surgical: 'Surgical Technician, OT Assistance Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      imaging: 'B.Sc Medical Imaging Lateral Entry',
      ot: 'B.Sc OT Technology Lateral Entry',
      radiology: 'B.Sc Radiology Lateral Entry',
      surgical: 'B.Sc Surgical Technology Lateral Entry'
    },
    {
      feature: 'Common Careers',
      imaging: 'Imaging Technician, Radiology Assistant, Diagnostic Imaging Specialist',
      ot: 'OT Technician, Surgical Assistant, OT Manager',
      radiology: 'Radiology Technician, X-ray Technician, Diagnostic Radiology Specialist',
      surgical: 'Surgical Technician, OT Assistant, Surgical Instrument Specialist'
    },
    {
      feature: 'Difficulty Level',
      imaging: 'Hard',
      ot: 'Hard',
      radiology: 'Very Hard',
      surgical: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '📷',
      title: 'Choose Medical Imaging Technology If:',
      reasons: [
        'You enjoy medical imaging and radiology support',
        'You are interested in diagnostic equipment and image analysis',
        'You want general medical imaging careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚕️',
      title: 'Choose Operation Theatre Technology If:',
      reasons: [
        'You enjoy OT support and surgical assistance',
        'You are interested in OT management and sterilization',
        'You want operation theatre-focused careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🔬',
      title: 'Choose Radiology Imaging If:',
      reasons: [
        'You enjoy radiology and medical imaging',
        'You are interested in diagnostic radiology and X-ray technology',
        'You want radiology-focused imaging careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🏥',
      title: 'Choose Surgical Technology If:',
      reasons: [
        'You enjoy surgical support and OT assistance',
        'You are interested in surgical instruments and patient care',
        'You want surgical-focused technology careers'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const careers = [
    {
      title: 'Imaging Technician',
      icon: '📷',
      skills: ['Medical Imaging', 'Radiology Support', 'Diagnostic Equipment'],
      roadmap: 'Diploma → Imaging Technician → Senior Technician → Imaging Manager',
      salary: '₹4-16 LPA',
      demand: 'Very High',
      futureScope: 'Imaging Management, Radiology Specialization'
    },
    {
      title: 'OT Technician',
      icon: '⚕️',
      skills: ['OT Support', 'Surgical Assistance', 'OT Management'],
      roadmap: 'Diploma → OT Technician → Senior Technician → OT Manager',
      salary: '₹5-18 LPA',
      demand: 'Very High',
      futureScope: 'OT Management, Surgical Coordination'
    },
    {
      title: 'Radiology Technician',
      icon: '🔬',
      skills: ['Radiology', 'Medical Imaging', 'Diagnostic Radiology'],
      roadmap: 'Diploma → Radiology Technician → Senior Technician → Radiology Manager',
      salary: '₹5-20 LPA',
      demand: 'Very High',
      futureScope: 'Radiology Management, Advanced Imaging'
    },
    {
      title: 'Surgical Technician',
      icon: '🏥',
      skills: ['Surgical Support', 'OT Assistance', 'Surgical Instruments'],
      roadmap: 'Diploma → Surgical Technician → Senior Technician → Surgical Manager',
      salary: '₹4-17 LPA',
      demand: 'Very High',
      futureScope: 'Surgical Management, Instrument Specialization'
    },
    {
      title: 'X-ray Technician',
      icon: '💡',
      skills: ['X-ray Technology', 'Diagnostic Imaging', 'Radiation Safety'],
      roadmap: 'Diploma → X-ray Technician → Senior Technician → X-ray Manager',
      salary: '₹4-15 LPA',
      demand: 'High',
      futureScope: 'X-ray Management, Radiation Safety'
    },
    {
      title: 'Diagnostic Imaging Specialist',
      icon: '📊',
      skills: ['Diagnostic Imaging', 'Image Analysis', 'Medical Reporting'],
      roadmap: 'Diploma → Imaging Specialist → Senior Specialist → Imaging Director',
      salary: '₹6-22 LPA',
      demand: 'Very High',
      futureScope: 'Imaging Management, Advanced Diagnostics'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('medical_paramedical_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">📷</span>
            <h1 className="text-4xl font-bold text-white">Imaging & Operation Theatre Technology</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive imaging and operation theatre technology diploma programs for rewarding medical technology careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Imaging & Operation Theatre Technology</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search imaging/OT courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="medical-imaging-technology">Medical Imaging Technology</option>
              <option value="operation-theatre-technology">Operation Theatre Technology</option>
              <option value="radiology-imaging">Radiology Imaging</option>
              <option value="surgical-technology">Surgical Technology</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaCourses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group" onClick={() => toggleCardExpansion(course.id)}>
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
                    <div className="flex justify-between"><span className="text-white/50">Accuracy Level:</span><span className="text-white/80">{course.accuracyLevel}</span></div>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Medical Imaging</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">OT Technology</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Radiology</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Surgical Tech</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.imaging}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.ot}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.radiology}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.surgical}</td>
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
                title: 'Imaging Technology Entrance',
                icon: '📝',
                eligibility: '10th with Science & Biology',
                process: 'Entrance Exam → Counseling → Admission',
                higherStudy: 'Direct 2nd Year B.Sc Medical Imaging',
                successRate: '60%'
              },
              {
                title: 'OT Technology Entrance',
                icon: '🎯',
                eligibility: '10th Pass with Science',
                process: 'State Exam → Merit List → Admission',
                higherStudy: 'Lateral Entry to OT Programs',
                successRate: '55%'
              },
              {
                title: 'Direct Admission',
                icon: '🎓',
                eligibility: '10th Pass with Science',
                process: 'Application → Interview → Admission',
                higherStudy: 'Regular B.Sc Imaging/OT Admission',
                successRate: '70%'
              },
              {
                title: 'Hospital Training',
                icon: '🔄',
                eligibility: '10th Pass with Science',
                process: 'Hospital Selection → Training → Admission',
                higherStudy: 'Hospital-based Imaging/OT Programs',
                successRate: '65%'
              }
            ].map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
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
                title: 'Medical Imaging Techniques',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '📷',
                relevance: 'Essential for all imaging professionals',
                skills: ['Medical Imaging', 'Radiology Support', 'Equipment Operation', 'Image Analysis']
              },
              {
                title: 'OT Management',
                level: 'Advanced',
                duration: '4 Months',
                icon: '⚕️',
                relevance: 'Core operation theatre skill',
                skills: ['OT Management', 'Surgical Assistance', 'Sterilization', 'OT Procedures']
              },
              {
                title: 'Radiology Technology',
                level: 'Advanced',
                duration: '4 Months',
                icon: '🔬',
                relevance: 'Essential for radiology professionals',
                skills: ['Radiology Technology', 'X-ray Operation', 'Radiation Safety', 'Diagnostic Imaging']
              },
              {
                title: 'Surgical Instrumentation',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🏥',
                relevance: 'Essential for surgical technology',
                skills: ['Surgical Instruments', 'OT Assistance', 'Instrument Management', 'Sterilization']
              },
              {
                title: 'Diagnostic Equipment',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '⚗️',
                relevance: 'Essential for diagnostic imaging',
                skills: ['Equipment Operation', 'Maintenance', 'Calibration', 'Troubleshooting']
              },
              {
                title: 'Patient Care in OT',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '💊',
                relevance: 'Essential for OT and imaging',
                skills: ['Patient Care', 'Safety Procedures', 'Emergency Response', 'Patient Communication']
              }
            ].map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
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
                growth: '+20%',
                opportunities: 'Government Hospitals, Private Hospitals, Medical Centers',
                types: ['Imaging Technician', 'OT Technician', 'Radiology Technician']
              },
              {
                name: 'Diagnostic Centers',
                icon: '🏢',
                demand: 'Very High',
                growth: '+18%',
                opportunities: 'Imaging Centers, Diagnostic Labs, Medical Imaging Facilities',
                types: ['Imaging Specialist', 'Radiology Technician', 'Diagnostic Analyst']
              },
              {
                name: 'Surgical Centers',
                icon: '⚕️',
                demand: 'Very High',
                growth: '+22%',
                opportunities: 'Surgical Hospitals, OT Centers, Surgical Facilities',
                types: ['OT Technician', 'Surgical Assistant', 'OT Manager']
              },
              {
                name: 'Medical Equipment Companies',
                icon: '🔬',
                demand: 'High',
                growth: '+16%',
                opportunities: 'Equipment Manufacturers, Medical Device Companies',
                types: ['Equipment Specialist', 'Technical Support', 'Training Specialist']
              },
              {
                name: 'Government Health',
                icon: '🏛️',
                demand: 'High',
                growth: '+15%',
                opportunities: 'Public Health Hospitals, Government Medical Centers',
                types: ['Government Imaging Technician', 'Public Health OT Technician']
              },
              {
                name: 'Research Centers',
                icon: '🔍',
                demand: 'Medium',
                growth: '+12%',
                opportunities: 'Medical Research, Clinical Research, Testing Centers',
                types: ['Research Technician', 'Clinical Imaging Specialist']
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
                title: 'Government Imaging Technician',
                icon: '🏛️',
                eligibility: 'Imaging Diploma + Registration',
                skills: ['Medical Imaging', 'Government Procedures', 'Equipment Operation'],
                growth: 'Public healthcare expansion',
                salary: '₹4-14 LPA'
              },
              {
                title: 'Government OT Technician',
                icon: '⚕️',
                eligibility: 'OT Diploma + Surgical Training',
                skills: ['OT Technology', 'Surgical Assistance', 'Government OT Procedures'],
                growth: 'Hospital infrastructure development',
                salary: '₹5-16 LPA'
              },
              {
                title: 'Public Health Radiology',
                icon: '🏥',
                eligibility: 'Radiology Diploma + Public Health Training',
                skills: ['Public Radiology', 'Diagnostic Services', 'Health Programs'],
                growth: 'Public health initiatives',
                salary: '₹4-15 LPA'
              },
              {
                title: 'Military Medical Technician',
                icon: '🎖️',
                eligibility: 'Medical Technology Diploma + Physical Fitness',
                skills: ['Military Medical Services', 'Emergency Care', 'Field Operations'],
                growth: 'Defense medical services',
                salary: '₹6-18 LPA'
              },
              {
                title: 'Railway Medical Technician',
                icon: '🚂',
                eligibility: 'Medical Technology Diploma + Railway Training',
                skills: ['Railway Medical Services', 'Emergency Response', 'Healthcare Support'],
                growth: 'Railway healthcare services',
                salary: '₹4-13 LPA'
              },
              {
                title: 'ESI Medical Technician',
                icon: '💼',
                eligibility: 'Medical Technology Diploma + ESI Training',
                skills: ['ESI Healthcare', 'Employee Medical Services', 'Industrial Health'],
                growth: 'Employee healthcare services',
                salary: '₹4-14 LPA'
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
                title: 'Advanced Medical Imaging',
                icon: '📷',
                growth: '22%',
                description: 'Advanced imaging technologies and AI-assisted diagnostics',
                salaryImpact: '+20%',
                demand: 'Very High'
              },
              {
                title: 'Robotic Surgery Support',
                icon: '🤖',
                growth: '25%',
                description: 'Growing robotic surgery and advanced OT technologies',
                salaryImpact: '+22%',
                demand: 'Very High'
              },
              {
                title: 'Digital Radiology',
                icon: '💻',
                growth: '20%',
                description: 'Digital radiology systems and PACS implementation',
                salaryImpact: '+18%',
                demand: 'Very High'
              },
              {
                title: 'Minimally Invasive Surgery',
                icon: '⚕️',
                growth: '18%',
                description: 'Advanced minimally invasive surgical techniques',
                salaryImpact: '+16%',
                demand: 'Very High'
              },
              {
                title: 'Telemedicine Imaging',
                icon: '📡',
                growth: '24%',
                description: 'Remote imaging and telemedicine diagnostics',
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

export default ImagingOperationTheatreScreen;
