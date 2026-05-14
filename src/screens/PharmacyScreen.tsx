import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface PharmacyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const PharmacyScreen: React.FC<PharmacyScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'pharmacy-practice',
      icon: '💊',
      color: 'from-green-500 to-green-600',
      title: 'Pharmacy Practice Diploma',
      bestFor: ['Drug Dispensing', 'Medicine Management', 'Pharmacy Operations', 'Patient Counseling'],
      duration: '3 Years',
      careers: ['Pharmacist', 'Pharmacy Technician', 'Drug Store Manager'],
      recommended: 'Students interested in drug dispensing, medicine management, and pharmacy operations.',
      coreFocus: 'Drug dispensing, medicine management, pharmacy operations',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Pharmacy License, Drug Dispensing Certificate',
      higherStudy: 'B.Pharm Lateral Entry',
      commonCareers: 'Pharmacist, Pharmacy Technician, Drug Store Manager',
      difficulty: 'Hard'
    },
    {
      id: 'pharmaceutical-chemistry',
      icon: '🧪',
      color: 'from-blue-500 to-blue-600',
      title: 'Pharmaceutical Chemistry Diploma',
      bestFor: ['Drug Formulation', 'Chemical Analysis', 'Quality Control', 'Research'],
      duration: '3 Years',
      careers: ['Pharmaceutical Chemist', 'Quality Control Analyst', 'Research Assistant'],
      recommended: 'Students interested in drug formulation, chemical analysis, and pharmaceutical research.',
      coreFocus: 'Drug formulation, chemical analysis, quality control',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Chemical Analysis, Quality Control, Research Methods',
      higherStudy: 'B.Pharm Chemistry Lateral Entry',
      commonCareers: 'Pharmaceutical Chemist, Quality Control Analyst, Research Assistant',
      difficulty: 'Very Hard'
    },
    {
      id: 'hospital-pharmacy',
      icon: '🏥',
      color: 'from-purple-500 to-purple-600',
      title: 'Hospital Pharmacy Diploma',
      bestFor: ['Hospital Pharmacy', 'Clinical Pharmacy', 'Drug Management', 'Patient Care'],
      duration: '3 Years',
      careers: ['Hospital Pharmacist', 'Clinical Pharmacist', 'Drug Management Officer'],
      recommended: 'Students interested in hospital pharmacy, clinical pharmacy, and drug management.',
      coreFocus: 'Hospital pharmacy, clinical pharmacy, drug management',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Hospital Pharmacy, Clinical Pharmacy, Drug Management',
      higherStudy: 'B.Pharm Hospital Lateral Entry',
      commonCareers: 'Hospital Pharmacist, Clinical Pharmacist, Drug Management Officer',
      difficulty: 'Hard'
    },
    {
      id: 'retail-pharmacy',
      icon: '🏪',
      color: 'from-orange-500 to-orange-600',
      title: 'Retail Pharmacy Diploma',
      bestFor: ['Retail Pharmacy', 'Drug Store Management', 'Customer Service', 'Business Operations'],
      duration: '3 Years',
      careers: ['Retail Pharmacist', 'Drug Store Owner', 'Pharmacy Manager'],
      recommended: 'Students interested in retail pharmacy, drug store management, and business operations.',
      coreFocus: 'Retail pharmacy, drug store management, business operations',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Retail Pharmacy, Drug Store Management, Business License',
      higherStudy: 'B.Pharm Retail Lateral Entry',
      commonCareers: 'Retail Pharmacist, Drug Store Owner, Pharmacy Manager',
      difficulty: 'Medium'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      practice: 'Drug dispensing, medicine management, pharmacy operations',
      chemistry: 'Drug formulation, chemical analysis, quality control',
      hospital: 'Hospital pharmacy, clinical pharmacy, drug management',
      retail: 'Retail pharmacy, drug store management, business operations'
    },
    {
      feature: 'Technical Level',
      practice: 'High',
      chemistry: 'Very High',
      hospital: 'High',
      retail: 'Medium'
    },
    {
      feature: 'Practical Level',
      practice: 'Very High',
      chemistry: 'High',
      hospital: 'Very High',
      retail: 'Very High'
    },
    {
      feature: 'Accuracy Level',
      practice: 'Very High',
      chemistry: 'Very High',
      hospital: 'Very High',
      retail: 'High'
    },
    {
      feature: 'Industry Demand',
      practice: 'Very High',
      chemistry: 'Very High',
      hospital: 'Very High',
      retail: 'High'
    },
    {
      feature: 'Certifications',
      practice: 'Pharmacy License, Drug Dispensing Certificate',
      chemistry: 'Chemical Analysis, Quality Control, Research Methods',
      hospital: 'Hospital Pharmacy, Clinical Pharmacy, Drug Management',
      retail: 'Retail Pharmacy, Drug Store Management, Business License'
    },
    {
      feature: 'Higher Study Opportunities',
      practice: 'B.Pharm Lateral Entry',
      chemistry: 'B.Pharm Chemistry Lateral Entry',
      hospital: 'B.Pharm Hospital Lateral Entry',
      retail: 'B.Pharm Retail Lateral Entry'
    },
    {
      feature: 'Common Careers',
      practice: 'Pharmacist, Pharmacy Technician, Drug Store Manager',
      chemistry: 'Pharmaceutical Chemist, Quality Control Analyst, Research Assistant',
      hospital: 'Hospital Pharmacist, Clinical Pharmacist, Drug Management Officer',
      retail: 'Retail Pharmacist, Drug Store Owner, Pharmacy Manager'
    },
    {
      feature: 'Difficulty Level',
      practice: 'Hard',
      chemistry: 'Very Hard',
      hospital: 'Hard',
      retail: 'Medium'
    }
  ];

  const chooseOptions = [
    {
      icon: '💊',
      title: 'Choose Pharmacy Practice If:',
      reasons: [
        'You enjoy drug dispensing and medicine management',
        'You are interested in pharmacy operations and patient counseling',
        'You want general pharmacy careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🧪',
      title: 'Choose Pharmaceutical Chemistry If:',
      reasons: [
        'You enjoy drug formulation and chemical analysis',
        'You are interested in quality control and pharmaceutical research',
        'You want chemistry-focused pharmacy careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🏥',
      title: 'Choose Hospital Pharmacy If:',
      reasons: [
        'You enjoy hospital pharmacy and clinical pharmacy',
        'You are interested in drug management and patient care',
        'You want hospital-based pharmacy careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🏪',
      title: 'Choose Retail Pharmacy If:',
      reasons: [
        'You enjoy retail pharmacy and drug store management',
        'You are interested in customer service and business operations',
        'You want retail and business-focused pharmacy careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Pharmacist',
      icon: '💊',
      skills: ['Drug Dispensing', 'Medicine Management', 'Patient Counseling'],
      roadmap: 'Diploma → Pharmacist → Senior Pharmacist → Pharmacy Manager',
      salary: '₹5-18 LPA',
      demand: 'Very High',
      futureScope: 'Pharmacy Management, Clinical Pharmacy'
    },
    {
      title: 'Pharmaceutical Chemist',
      icon: '🧪',
      skills: ['Drug Formulation', 'Chemical Analysis', 'Quality Control'],
      roadmap: 'Diploma → Pharmaceutical Chemist → Senior Chemist → Research Scientist',
      salary: '₹6-22 LPA',
      demand: 'Very High',
      futureScope: 'Research & Development, Quality Management'
    },
    {
      title: 'Hospital Pharmacist',
      icon: '🏥',
      skills: ['Hospital Pharmacy', 'Clinical Pharmacy', 'Drug Management'],
      roadmap: 'Diploma → Hospital Pharmacist → Clinical Pharmacist → Pharmacy Director',
      salary: '₹6-20 LPA',
      demand: 'Very High',
      futureScope: 'Clinical Pharmacy, Hospital Management'
    },
    {
      title: 'Retail Pharmacist',
      icon: '🏪',
      skills: ['Retail Pharmacy', 'Drug Store Management', 'Customer Service'],
      roadmap: 'Diploma → Retail Pharmacist → Store Manager → Pharmacy Owner',
      salary: '₹4-16 LPA',
      demand: 'High',
      futureScope: 'Pharmacy Business, Retail Management'
    },
    {
      title: 'Quality Control Analyst',
      icon: '🔬',
      skills: ['Quality Control', 'Chemical Analysis', 'Testing'],
      roadmap: 'Diploma → QC Analyst → Senior QC Analyst → Quality Manager',
      salary: '₹5-18 LPA',
      demand: 'Very High',
      futureScope: 'Quality Management, Regulatory Affairs'
    },
    {
      title: 'Pharmacy Technician',
      icon: '💉',
      skills: ['Pharmacy Assistance', 'Drug Dispensing', 'Inventory Management'],
      roadmap: 'Diploma → Pharmacy Technician → Senior Technician → Pharmacy Assistant',
      salary: '₹3-12 LPA',
      demand: 'High',
      futureScope: 'Pharmacy Management, Technical Supervision'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('medical_paramedical_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">💊</span>
            <h1 className="text-4xl font-bold text-white">Pharmacy</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive pharmacy diploma programs for rewarding pharmaceutical careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Pharmacy</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search pharmacy courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="pharmacy-practice">Pharmacy Practice</option>
              <option value="pharmaceutical-chemistry">Pharmaceutical Chemistry</option>
              <option value="hospital-pharmacy">Hospital Pharmacy</option>
              <option value="retail-pharmacy">Retail Pharmacy</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaCourses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group" onClick={() => {
  if (course.id === 'pharmacy-practice') setScreen('pharmacy-practice');
  else if (course.id === 'pharmaceutical-chemistry') setScreen('pharmaceutical-chemistry');
  else if (course.id === 'hospital-pharmacy') setScreen('hospital-pharmacy');
  else if (course.id === 'retail-pharmacy') setScreen('retail-pharmacy');
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Pharmacy Practice</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Pharmaceutical Chemistry</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Hospital Pharmacy</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Retail Pharmacy</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.practice}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.chemistry}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.hospital}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.retail}</td>
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
                title: 'Pharmacy Entrance',
                icon: '📝',
                eligibility: '10th with Science & Chemistry',
                process: 'Entrance Exam → Counseling → Admission',
                higherStudy: 'Direct 2nd Year B.Pharm',
                successRate: '65%'
              },
              {
                title: 'D.Pharm Entrance',
                icon: '🎯',
                eligibility: '10th Pass with Science',
                process: 'State Exam → Merit List → Admission',
                higherStudy: 'Lateral Entry to Pharmacy Programs',
                successRate: '60%'
              },
              {
                title: 'Direct Admission',
                icon: '🎓',
                eligibility: '10th Pass with Science',
                process: 'Application → Interview → Admission',
                higherStudy: 'Regular B.Pharm Admission',
                successRate: '75%'
              },
              {
                title: 'Industry Training',
                icon: '🔄',
                eligibility: '10th Pass with Science',
                process: 'Industry Selection → Training → Admission',
                higherStudy: 'Industry-based Pharmacy Programs',
                successRate: '70%'
              }
            ].map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
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
                title: 'Drug Dispensing',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '💊',
                relevance: 'Essential for all pharmacy professionals',
                skills: ['Drug Dispensing', 'Medicine Management', 'Prescription Handling', 'Drug Safety']
              },
              {
                title: 'Chemical Analysis',
                level: 'Advanced',
                duration: '4 Months',
                icon: '🧪',
                relevance: 'Core pharmaceutical chemistry skill',
                skills: ['Chemical Analysis', 'Quality Testing', 'Lab Techniques', 'Analytical Methods']
              },
              {
                title: 'Quality Control',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🔬',
                relevance: 'Essential for pharmaceutical quality',
                skills: ['Quality Control', 'Testing Methods', 'Standards Compliance', 'Documentation']
              },
              {
                title: 'Pharmacy Management',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🏪',
                relevance: 'Essential for retail and hospital pharmacy',
                skills: ['Pharmacy Management', 'Inventory Control', 'Customer Service', 'Business Operations']
              },
              {
                title: 'Clinical Pharmacy',
                level: 'Advanced',
                duration: '4 Months',
                icon: '🏥',
                relevance: 'Specialized hospital pharmacy skill',
                skills: ['Clinical Pharmacy', 'Patient Care', 'Drug Therapy', 'Hospital Procedures']
              },
              {
                title: 'Pharmaceutical Research',
                level: 'Advanced',
                duration: '4 Months',
                icon: '🔍',
                relevance: 'Essential for pharmaceutical development',
                skills: ['Research Methods', 'Drug Development', 'Testing Protocols', 'Data Analysis']
              }
            ].map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
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
                name: 'Pharmaceutical Companies',
                icon: '💊',
                demand: 'Very High',
                growth: '+20%',
                opportunities: 'Drug Companies, Pharma Manufacturing, Research Labs',
                types: ['Pharmacist', 'Quality Control', 'Research Assistant']
              },
              {
                name: 'Hospitals',
                icon: '🏥',
                demand: 'Very High',
                growth: '+18%',
                opportunities: 'Government Hospitals, Private Hospitals, Medical Centers',
                types: ['Hospital Pharmacist', 'Clinical Pharmacist', 'Drug Management']
              },
              {
                name: 'Retail Pharmacies',
                icon: '🏪',
                demand: 'High',
                growth: '+16%',
                opportunities: 'Drug Stores, Pharmacy Chains, Medical Shops',
                types: ['Retail Pharmacist', 'Store Manager', 'Pharmacy Assistant']
              },
              {
                name: 'Research Organizations',
                icon: '🔬',
                demand: 'Very High',
                growth: '+22%',
                opportunities: 'Research Labs, Clinical Research, Testing Centers',
                types: ['Research Assistant', 'Quality Analyst', 'Lab Technician']
              },
              {
                name: 'Government Health',
                icon: '🏛️',
                demand: 'High',
                growth: '+15%',
                opportunities: 'Public Health, Drug Control, Health Departments',
                types: ['Government Pharmacist', 'Drug Inspector', 'Health Officer']
              },
              {
                name: 'Medical Equipment',
                icon: '⚕️',
                demand: 'Medium',
                growth: '+12%',
                opportunities: 'Medical Device Companies, Equipment Suppliers',
                types: ['Pharmaceutical Sales', 'Product Specialist', 'Technical Support']
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
                title: 'Government Pharmacist',
                icon: '🏛️',
                eligibility: 'Pharmacy Diploma + Registration',
                skills: ['Drug Dispensing', 'Government Pharmacy', 'Public Health'],
                growth: 'Public healthcare expansion',
                salary: '₹5-15 LPA'
              },
              {
                title: 'Drug Inspector',
                icon: '🔍',
                eligibility: 'Pharmacy Diploma + Drug Control Training',
                skills: ['Drug Inspection', 'Quality Control', 'Regulatory Compliance'],
                growth: 'Drug regulation strengthening',
                salary: '₹6-18 LPA'
              },
              {
                title: 'Public Health Pharmacist',
                icon: '🏥',
                eligibility: 'Pharmacy Diploma + Public Health Training',
                skills: ['Public Health', 'Community Pharmacy', 'Health Programs'],
                growth: 'Public health initiatives',
                salary: '₹5-14 LPA'
              },
              {
                title: 'Railway Pharmacist',
                icon: '🚂',
                eligibility: 'Pharmacy Diploma + Medical Training',
                skills: ['Railway Pharmacy', 'Emergency Medicine', 'Patient Care'],
                growth: 'Railway healthcare services',
                salary: '₹4-12 LPA'
              },
              {
                title: 'Military Pharmacist',
                icon: '⚕️',
                eligibility: 'Pharmacy Diploma + Physical Fitness',
                skills: ['Military Pharmacy', 'Emergency Care', 'Medical Services'],
                growth: 'Defense medical services',
                salary: '₹6-16 LPA'
              },
              {
                title: 'ESI Pharmacist',
                icon: '💼',
                eligibility: 'Pharmacy Diploma + ESI Training',
                skills: ['ESI Healthcare', 'Employee Health', 'Medical Services'],
                growth: 'Employee healthcare services',
                salary: '₹4-13 LPA'
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
                title: 'Pharmaceutical Innovation',
                icon: '💊',
                growth: '22%',
                description: 'Growing pharmaceutical research and drug development',
                salaryImpact: '+20%',
                demand: 'Very High'
              },
              {
                title: 'Quality Control Expansion',
                icon: '🔬',
                growth: '18%',
                description: 'Increasing focus on drug quality and safety standards',
                salaryImpact: '+16%',
                demand: 'Very High'
              },
              {
                title: 'Clinical Pharmacy Growth',
                icon: '🏥',
                growth: '20%',
                description: 'Rising demand for clinical pharmacy and patient care',
                salaryImpact: '+18%',
                demand: 'Very High'
              },
              {
                title: 'Retail Pharmacy Modernization',
                icon: '🏪',
                growth: '16%',
                description: 'Modern retail pharmacy chains and digital pharmacies',
                salaryImpact: '+14%',
                demand: 'High'
              },
              {
                title: 'Pharmaceutical Research',
                icon: '🔍',
                growth: '25%',
                description: 'Expanding pharmaceutical research and development',
                salaryImpact: '+22%',
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

export default PharmacyScreen;
