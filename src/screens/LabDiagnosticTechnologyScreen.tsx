import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface LabDiagnosticTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const LabDiagnosticTechnologyScreen: React.FC<LabDiagnosticTechnologyScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'medical-laboratory-technology',
      icon: '🔬',
      color: 'from-blue-500 to-blue-600',
      title: 'Medical Laboratory Technology Diploma',
      bestFor: ['Lab Testing', 'Medical Analysis', 'Diagnostic Services', 'Quality Control'],
      duration: '3 Years',
      careers: ['Lab Technician', 'Medical Technologist', 'Diagnostic Analyst'],
      recommended: 'Students interested in lab testing, medical analysis, and diagnostic services.',
      coreFocus: 'Lab testing, medical analysis, diagnostic services',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Lab Technician License, Medical Testing Certificate',
      higherStudy: 'B.Sc Medical Lab Technology Lateral Entry',
      commonCareers: 'Lab Technician, Medical Technologist, Diagnostic Analyst',
      difficulty: 'Hard'
    },
    {
      id: 'pathology-laboratory',
      icon: '🧪',
      color: 'from-purple-500 to-purple-600',
      title: 'Pathology Laboratory Diploma',
      bestFor: ['Pathology Testing', 'Tissue Analysis', 'Disease Diagnosis', 'Lab Research'],
      duration: '3 Years',
      careers: ['Pathology Technician', 'Lab Researcher', 'Disease Diagnostic Specialist'],
      recommended: 'Students interested in pathology testing, tissue analysis, and disease diagnosis.',
      coreFocus: 'Pathology testing, tissue analysis, disease diagnosis',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Pathology Technician, Tissue Analysis Certificate',
      higherStudy: 'B.Sc Pathology Lateral Entry',
      commonCareers: 'Pathology Technician, Lab Researcher, Disease Diagnostic Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'diagnostic-imaging',
      icon: '📷',
      color: 'from-green-500 to-green-600',
      title: 'Diagnostic Imaging Diploma',
      bestFor: ['Medical Imaging', 'Radiology Support', 'Diagnostic Equipment', 'Image Analysis'],
      duration: '3 Years',
      careers: ['Imaging Technician', 'Radiology Assistant', 'Diagnostic Imaging Specialist'],
      recommended: 'Students interested in medical imaging, radiology support, and diagnostic equipment.',
      coreFocus: 'Medical imaging, radiology support, diagnostic equipment',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Imaging Technician, Radiology Support Certificate',
      higherStudy: 'B.Sc Diagnostic Imaging Lateral Entry',
      commonCareers: 'Imaging Technician, Radiology Assistant, Diagnostic Imaging Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'clinical-laboratory',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600',
      title: 'Clinical Laboratory Diploma',
      bestFor: ['Clinical Testing', 'Patient Diagnostics', 'Hospital Lab Work', 'Medical Analysis'],
      duration: '3 Years',
      careers: ['Clinical Lab Technician', 'Hospital Lab Analyst', 'Patient Diagnostic Specialist'],
      recommended: 'Students interested in clinical testing, patient diagnostics, and hospital lab work.',
      coreFocus: 'Clinical testing, patient diagnostics, hospital lab work',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Clinical Lab Technician, Hospital Lab Certificate',
      higherStudy: 'B.Sc Clinical Lab Lateral Entry',
      commonCareers: 'Clinical Lab Technician, Hospital Lab Analyst, Patient Diagnostic Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      medical: 'Lab testing, medical analysis, diagnostic services',
      pathology: 'Pathology testing, tissue analysis, disease diagnosis',
      imaging: 'Medical imaging, radiology support, diagnostic equipment',
      clinical: 'Clinical testing, patient diagnostics, hospital lab work'
    },
    {
      feature: 'Technical Level',
      medical: 'High',
      pathology: 'Very High',
      imaging: 'High',
      clinical: 'High'
    },
    {
      feature: 'Practical Level',
      medical: 'Very High',
      pathology: 'High',
      imaging: 'Very High',
      clinical: 'Very High'
    },
    {
      feature: 'Accuracy Level',
      medical: 'Very High',
      pathology: 'Very High',
      imaging: 'High',
      clinical: 'Very High'
    },
    {
      feature: 'Industry Demand',
      medical: 'Very High',
      pathology: 'Very High',
      imaging: 'Very High',
      clinical: 'Very High'
    },
    {
      feature: 'Certifications',
      medical: 'Lab Technician License, Medical Testing Certificate',
      pathology: 'Pathology Technician, Tissue Analysis Certificate',
      imaging: 'Imaging Technician, Radiology Support Certificate',
      clinical: 'Clinical Lab Technician, Hospital Lab Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      medical: 'B.Sc Medical Lab Technology Lateral Entry',
      pathology: 'B.Sc Pathology Lateral Entry',
      imaging: 'B.Sc Diagnostic Imaging Lateral Entry',
      clinical: 'B.Sc Clinical Lab Lateral Entry'
    },
    {
      feature: 'Common Careers',
      medical: 'Lab Technician, Medical Technologist, Diagnostic Analyst',
      pathology: 'Pathology Technician, Lab Researcher, Disease Diagnostic Specialist',
      imaging: 'Imaging Technician, Radiology Assistant, Diagnostic Imaging Specialist',
      clinical: 'Clinical Lab Technician, Hospital Lab Analyst, Patient Diagnostic Specialist'
    },
    {
      feature: 'Difficulty Level',
      medical: 'Hard',
      pathology: 'Very Hard',
      imaging: 'Hard',
      clinical: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🔬',
      title: 'Choose Medical Laboratory Technology If:',
      reasons: [
        'You enjoy lab testing and medical analysis',
        'You are interested in diagnostic services and quality control',
        'You want general laboratory careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🧪',
      title: 'Choose Pathology Laboratory If:',
      reasons: [
        'You enjoy pathology testing and tissue analysis',
        'You are interested in disease diagnosis and lab research',
        'You want pathology-focused laboratory careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📷',
      title: 'Choose Diagnostic Imaging If:',
      reasons: [
        'You enjoy medical imaging and radiology support',
        'You are interested in diagnostic equipment and image analysis',
        'You want imaging-focused laboratory careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏥',
      title: 'Choose Clinical Laboratory If:',
      reasons: [
        'You enjoy clinical testing and patient diagnostics',
        'You are interested in hospital lab work and medical analysis',
        'You want clinical-focused laboratory careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Lab Technician',
      icon: '🔬',
      skills: ['Lab Testing', 'Medical Analysis', 'Quality Control'],
      roadmap: 'Diploma → Lab Technician → Senior Technician → Lab Manager',
      salary: '₹4-16 LPA',
      demand: 'Very High',
      futureScope: 'Lab Management, Quality Assurance'
    },
    {
      title: 'Pathology Technician',
      icon: '🧪',
      skills: ['Pathology Testing', 'Tissue Analysis', 'Disease Diagnosis'],
      roadmap: 'Diploma → Pathology Technician → Senior Technician → Pathology Manager',
      salary: '₹5-18 LPA',
      demand: 'Very High',
      futureScope: 'Pathology Management, Research Specialist'
    },
    {
      title: 'Imaging Technician',
      icon: '📷',
      skills: ['Medical Imaging', 'Radiology Support', 'Diagnostic Equipment'],
      roadmap: 'Diploma → Imaging Technician → Senior Technician → Imaging Manager',
      salary: '₹4-15 LPA',
      demand: 'Very High',
      futureScope: 'Radiology Management, Imaging Specialist'
    },
    {
      title: 'Clinical Lab Technician',
      icon: '🏥',
      skills: ['Clinical Testing', 'Patient Diagnostics', 'Hospital Lab Work'],
      roadmap: 'Diploma → Clinical Lab Technician → Senior Technician → Lab Coordinator',
      salary: '₹4-14 LPA',
      demand: 'Very High',
      futureScope: 'Clinical Lab Management, Hospital Diagnostics'
    },
    {
      title: 'Medical Technologist',
      icon: '⚗️',
      skills: ['Medical Technology', 'Advanced Testing', 'Lab Procedures'],
      roadmap: 'Diploma → Medical Technologist → Senior Technologist → Lab Director',
      salary: '₹6-20 LPA',
      demand: 'Very High',
      futureScope: 'Lab Management, Medical Technology Leadership'
    },
    {
      title: 'Diagnostic Analyst',
      icon: '📊',
      skills: ['Diagnostic Analysis', 'Test Results', 'Medical Reporting'],
      roadmap: 'Diploma → Diagnostic Analyst → Senior Analyst → Diagnostic Manager',
      salary: '₹5-17 LPA',
      demand: 'High',
      futureScope: 'Diagnostic Management, Medical Reporting'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('medical_paramedical_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🔬</span>
            <h1 className="text-4xl font-bold text-white">Lab & Diagnostic Technology</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive laboratory and diagnostic technology diploma programs for rewarding medical diagnostics careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Lab & Diagnostic Technology</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search lab courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="medical-laboratory-technology">Medical Laboratory Technology</option>
              <option value="pathology-laboratory">Pathology Laboratory</option>
              <option value="diagnostic-imaging">Diagnostic Imaging</option>
              <option value="clinical-laboratory">Clinical Laboratory</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaCourses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group" onClick={() => {
  if (course.id === 'medical-laboratory-technology') setScreen('medical-laboratory-technology');
  else if (course.id === 'pathology-laboratory') setScreen('pathology-laboratory');
  else if (course.id === 'diagnostic-imaging') setScreen('diagnostic-imaging');
  else if (course.id === 'clinical-laboratory') setScreen('clinical-laboratory');
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Medical Lab Tech</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Pathology Lab</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Diagnostic Imaging</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Clinical Lab</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.medical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.pathology}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.imaging}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.clinical}</td>
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
                title: 'Lab Technology Entrance',
                icon: '📝',
                eligibility: '10th with Science & Biology',
                process: 'Entrance Exam → Counseling → Admission',
                higherStudy: 'Direct 2nd Year B.Sc Medical Lab',
                successRate: '65%'
              },
              {
                title: 'DMLT Entrance',
                icon: '🎯',
                eligibility: '10th Pass with Science',
                process: 'State Exam → Merit List → Admission',
                higherStudy: 'Lateral Entry to Lab Programs',
                successRate: '60%'
              },
              {
                title: 'Direct Admission',
                icon: '🎓',
                eligibility: '10th Pass with Science',
                process: 'Application → Interview → Admission',
                higherStudy: 'Regular B.Sc Lab Admission',
                successRate: '75%'
              },
              {
                title: 'Hospital Training',
                icon: '🔄',
                eligibility: '10th Pass with Science',
                process: 'Hospital Selection → Training → Admission',
                higherStudy: 'Hospital-based Lab Programs',
                successRate: '70%'
              }
            ].map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
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
                title: 'Lab Testing Techniques',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🔬',
                relevance: 'Essential for all lab professionals',
                skills: ['Lab Testing', 'Sample Analysis', 'Quality Control', 'Safety Procedures']
              },
              {
                title: 'Pathology Analysis',
                level: 'Advanced',
                duration: '4 Months',
                icon: '🧪',
                relevance: 'Core pathology laboratory skill',
                skills: ['Pathology Testing', 'Tissue Analysis', 'Disease Diagnosis', 'Lab Research']
              },
              {
                title: 'Medical Imaging',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '📷',
                relevance: 'Essential for diagnostic imaging',
                skills: ['Medical Imaging', 'Radiology Support', 'Equipment Operation', 'Image Analysis']
              },
              {
                title: 'Clinical Diagnostics',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🏥',
                relevance: 'Essential for clinical laboratory',
                skills: ['Clinical Testing', 'Patient Diagnostics', 'Hospital Lab Work', 'Medical Reporting']
              },
              {
                title: 'Quality Control',
                level: 'Advanced',
                duration: '4 Months',
                icon: '✅',
                relevance: 'Essential for lab quality management',
                skills: ['Quality Control', 'Lab Standards', 'Testing Protocols', 'Documentation']
              },
              {
                title: 'Diagnostic Equipment',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '⚗️',
                relevance: 'Essential for lab equipment operation',
                skills: ['Equipment Operation', 'Maintenance', 'Calibration', 'Troubleshooting']
              }
            ].map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
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
                types: ['Lab Technician', 'Clinical Lab Technician', 'Diagnostic Analyst']
              },
              {
                name: 'Diagnostic Centers',
                icon: '🏢',
                demand: 'Very High',
                growth: '+18%',
                opportunities: 'Pathology Labs, Diagnostic Centers, Testing Facilities',
                types: ['Pathology Technician', 'Diagnostic Analyst', 'Lab Technician']
              },
              {
                name: 'Research Laboratories',
                icon: '🔬',
                demand: 'High',
                growth: '+22%',
                opportunities: 'Research Labs, Clinical Research, Testing Centers',
                types: ['Lab Researcher', 'Medical Technologist', 'Research Assistant']
              },
              {
                name: 'Pharmaceutical Companies',
                icon: '💊',
                demand: 'High',
                growth: '+16%',
                opportunities: 'Drug Companies, Pharma Manufacturing, Quality Control',
                types: ['Quality Control Analyst', 'Lab Technician', 'Testing Specialist']
              },
              {
                name: 'Government Health',
                icon: '🏛️',
                demand: 'High',
                growth: '+15%',
                opportunities: 'Public Health Labs, Government Hospitals, Health Departments',
                types: ['Government Lab Technician', 'Public Health Analyst', 'Diagnostic Specialist']
              },
              {
                name: 'Medical Equipment',
                icon: '⚗️',
                demand: 'Medium',
                growth: '+12%',
                opportunities: 'Equipment Companies, Calibration Services, Technical Support',
                types: ['Equipment Specialist', 'Technical Support', 'Calibration Technician']
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
                title: 'Government Lab Technician',
                icon: '🏛️',
                eligibility: 'Lab Technology Diploma + Registration',
                skills: ['Lab Testing', 'Government Lab Procedures', 'Quality Control'],
                growth: 'Public healthcare expansion',
                salary: '₹4-12 LPA'
              },
              {
                title: 'Pathology Lab Technician',
                icon: '🧪',
                eligibility: 'Pathology Diploma + Lab Training',
                skills: ['Pathology Testing', 'Tissue Analysis', 'Disease Diagnosis'],
                growth: 'Disease control programs',
                salary: '₹5-14 LPA'
              },
              {
                title: 'Public Health Lab Analyst',
                icon: '🏥',
                eligibility: 'Lab Diploma + Public Health Training',
                skills: ['Public Health Lab', 'Disease Surveillance', 'Health Testing'],
                growth: 'Public health initiatives',
                salary: '₹4-13 LPA'
              },
              {
                title: 'Railway Lab Technician',
                icon: '🚂',
                eligibility: 'Lab Diploma + Medical Training',
                skills: ['Railway Lab', 'Medical Testing', 'Health Services'],
                growth: 'Railway healthcare services',
                salary: '₹3-11 LPA'
              },
              {
                title: 'Military Lab Technician',
                icon: '⚕️',
                eligibility: 'Lab Diploma + Physical Fitness',
                skills: ['Military Lab', 'Emergency Testing', 'Medical Services'],
                growth: 'Defense medical services',
                salary: '₹5-15 LPA'
              },
              {
                title: 'ESI Lab Technician',
                icon: '💼',
                eligibility: 'Lab Diploma + ESI Training',
                skills: ['ESI Lab', 'Employee Health', 'Medical Testing'],
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
                title: 'Diagnostic Technology Advancement',
                icon: '🔬',
                growth: '22%',
                description: 'Advanced diagnostic technologies and automated testing',
                salaryImpact: '+20%',
                demand: 'Very High'
              },
              {
                title: 'Pathology Research Growth',
                icon: '🧪',
                growth: '18%',
                description: 'Increasing pathology research and disease diagnosis',
                salaryImpact: '+16%',
                demand: 'Very High'
              },
              {
                title: 'Medical Imaging Innovation',
                icon: '📷',
                growth: '20%',
                description: 'Advanced medical imaging and diagnostic equipment',
                salaryImpact: '+18%',
                demand: 'Very High'
              },
              {
                title: 'Clinical Lab Modernization',
                icon: '🏥',
                growth: '16%',
                description: 'Modern clinical laboratories and automated testing',
                salaryImpact: '+14%',
                demand: 'High'
              },
              {
                title: 'Quality Control Standards',
                icon: '✅',
                growth: '18%',
                description: 'Stricter quality control and lab standards',
                salaryImpact: '+16%',
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

export default LabDiagnosticTechnologyScreen;
