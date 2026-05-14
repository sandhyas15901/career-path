import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface PharmacyPracticeScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const PharmacyPracticeScreen: React.FC<PharmacyPracticeScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'community-pharmacy',
      icon: '🏪',
      color: 'from-green-500 to-green-600',
      title: 'Community Pharmacy',
      bestFor: ['Drug Dispensing', 'Patient Counseling', 'Medicine Management', 'Pharmacy Operations'],
      duration: '3 Years',
      careers: ['Community Pharmacist', 'Pharmacy Manager', 'Drug Store Owner'],
      recommended: 'Students interested in drug dispensing, patient counseling, and pharmacy operations.',
      coreFocus: 'Drug dispensing, patient counseling, pharmacy operations',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Pharmacy License, Drug Dispensing Certificate',
      higherStudy: 'B.Pharm Community Lateral Entry',
      commonCareers: 'Community Pharmacist, Pharmacy Manager, Drug Store Owner',
      difficulty: 'Hard'
    },
    {
      id: 'clinical-pharmacy',
      icon: '🏥',
      color: 'from-blue-500 to-blue-600',
      title: 'Clinical Pharmacy',
      bestFor: ['Clinical Pharmacy', 'Patient Care', 'Drug Therapy', 'Hospital Pharmacy'],
      duration: '3 Years',
      careers: ['Clinical Pharmacist', 'Hospital Pharmacist', 'Drug Therapy Specialist'],
      recommended: 'Students interested in clinical pharmacy, patient care, and drug therapy.',
      coreFocus: 'Clinical pharmacy, patient care, drug therapy',
      technicalLevel: 'Very High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Clinical Pharmacy, Drug Therapy, Patient Care',
      higherStudy: 'B.Pharm Clinical Lateral Entry',
      commonCareers: 'Clinical Pharmacist, Hospital Pharmacist, Drug Therapy Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'industrial-pharmacy',
      icon: '🏭',
      color: 'from-purple-500 to-purple-600',
      title: 'Industrial Pharmacy',
      bestFor: ['Drug Manufacturing', 'Quality Control', 'Pharmaceutical Production', 'Drug Testing'],
      duration: '3 Years',
      careers: ['Industrial Pharmacist', 'Quality Control Analyst', 'Production Manager'],
      recommended: 'Students interested in drug manufacturing, quality control, and pharmaceutical production.',
      coreFocus: 'Drug manufacturing, quality control, pharmaceutical production',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Industrial Pharmacy, Quality Control, Production Management',
      higherStudy: 'B.Pharm Industrial Lateral Entry',
      commonCareers: 'Industrial Pharmacist, Quality Control Analyst, Production Manager',
      difficulty: 'Very Hard'
    },
    {
      id: 'regulatory-pharmacy',
      icon: '⚖️',
      color: 'from-orange-500 to-orange-600',
      title: 'Regulatory Pharmacy',
      bestFor: ['Drug Regulation', 'Quality Assurance', 'Compliance', 'Regulatory Affairs'],
      duration: '3 Years',
      careers: ['Regulatory Pharmacist', 'Quality Assurance Officer', 'Compliance Manager'],
      recommended: 'Students interested in drug regulation, quality assurance, and compliance.',
      coreFocus: 'Drug regulation, quality assurance, compliance',
      technicalLevel: 'High',
      practicalLevel: 'Medium',
      accuracyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Regulatory Pharmacy, Quality Assurance, Compliance',
      higherStudy: 'B.Pharm Regulatory Lateral Entry',
      commonCareers: 'Regulatory Pharmacist, Quality Assurance Officer, Compliance Manager',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      community: 'Drug dispensing, patient counseling, pharmacy operations',
      clinical: 'Clinical pharmacy, patient care, drug therapy',
      industrial: 'Drug manufacturing, quality control, pharmaceutical production',
      regulatory: 'Drug regulation, quality assurance, compliance'
    },
    {
      feature: 'Technical Level',
      community: 'High',
      clinical: 'Very High',
      industrial: 'Very High',
      regulatory: 'High'
    },
    {
      feature: 'Practical Level',
      community: 'Very High',
      clinical: 'Very High',
      industrial: 'High',
      regulatory: 'Medium'
    },
    {
      feature: 'Accuracy Level',
      community: 'Very High',
      clinical: 'Very High',
      industrial: 'Very High',
      regulatory: 'Very High'
    },
    {
      feature: 'Industry Demand',
      community: 'Very High',
      clinical: 'Very High',
      industrial: 'High',
      regulatory: 'Medium'
    },
    {
      feature: 'Certifications',
      community: 'Pharmacy License, Drug Dispensing Certificate',
      clinical: 'Clinical Pharmacy, Drug Therapy, Patient Care',
      industrial: 'Industrial Pharmacy, Quality Control, Production Management',
      regulatory: 'Regulatory Pharmacy, Quality Assurance, Compliance'
    },
    {
      feature: 'Higher Study Opportunities',
      community: 'B.Pharm Community Lateral Entry',
      clinical: 'B.Pharm Clinical Lateral Entry',
      industrial: 'B.Pharm Industrial Lateral Entry',
      regulatory: 'B.Pharm Regulatory Lateral Entry'
    },
    {
      feature: 'Common Careers',
      community: 'Community Pharmacist, Pharmacy Manager, Drug Store Owner',
      clinical: 'Clinical Pharmacist, Hospital Pharmacist, Drug Therapy Specialist',
      industrial: 'Industrial Pharmacist, Quality Control Analyst, Production Manager',
      regulatory: 'Regulatory Pharmacist, Quality Assurance Officer, Compliance Manager'
    },
    {
      feature: 'Difficulty Level',
      community: 'Hard',
      clinical: 'Very Hard',
      industrial: 'Very Hard',
      regulatory: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🏪',
      title: 'Choose Community Pharmacy If:',
      reasons: [
        'You enjoy drug dispensing and patient counseling',
        'You are interested in medicine management and pharmacy operations',
        'You want community-based pharmacy careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏥',
      title: 'Choose Clinical Pharmacy If:',
      reasons: [
        'You enjoy clinical pharmacy and patient care',
        'You are interested in drug therapy and hospital pharmacy',
        'You want clinical-based pharmacy careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🏭',
      title: 'Choose Industrial Pharmacy If:',
      reasons: [
        'You enjoy drug manufacturing and quality control',
        'You are interested in pharmaceutical production and drug testing',
        'You want industrial-based pharmacy careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚖️',
      title: 'Choose Regulatory Pharmacy If:',
      reasons: [
        'You enjoy drug regulation and quality assurance',
        'You are interested in compliance and regulatory affairs',
        'You want regulatory-based pharmacy careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Community Pharmacist',
      icon: '🏪',
      skills: ['Drug Dispensing', 'Patient Counseling', 'Pharmacy Operations'],
      roadmap: 'Diploma → Community Pharmacist → Pharmacy Manager → Drug Store Owner',
      salary: '₹4-15 LPA',
      demand: 'Very High',
      futureScope: 'Pharmacy Management, Drug Store Ownership'
    },
    {
      title: 'Clinical Pharmacist',
      icon: '🏥',
      skills: ['Clinical Pharmacy', 'Patient Care', 'Drug Therapy'],
      roadmap: 'Diploma → Clinical Pharmacist → Senior Pharmacist → Pharmacy Director',
      salary: '₶6-20 LPA',
      demand: 'Very High',
      futureScope: 'Clinical Pharmacy Management, Hospital Pharmacy Leadership'
    },
    {
      title: 'Industrial Pharmacist',
      icon: '🏭',
      skills: ['Drug Manufacturing', 'Quality Control', 'Pharmaceutical Production'],
      roadmap: 'Diploma → Industrial Pharmacist → Quality Analyst → Production Manager',
      salary: '₶6-22 LPA',
      demand: 'High',
      futureScope: 'Pharmaceutical Management, Quality Control Leadership'
    },
    {
      title: 'Regulatory Pharmacist',
      icon: '⚖️',
      skills: ['Drug Regulation', 'Quality Assurance', 'Compliance'],
      roadmap: 'Diploma → Regulatory Pharmacist → Quality Officer → Compliance Manager',
      salary: '₵5-18 LPA',
      demand: 'Medium',
      futureScope: 'Regulatory Management, Quality Assurance Leadership'
    },
    {
      title: 'Pharmacy Manager',
      icon: '💊',
      skills: ['Pharmacy Management', 'Drug Store Operations', 'Staff Management'],
      roadmap: 'Diploma → Pharmacy Manager → Senior Manager → Pharmacy Director',
      salary: '₵5-18 LPA',
      demand: 'Very High',
      futureScope: 'Pharmacy Leadership, Drug Store Chain Management'
    },
    {
      title: 'Quality Control Analyst',
      icon: '🔬',
      skills: ['Quality Control', 'Drug Testing', 'Quality Assurance'],
      roadmap: 'Diploma → Quality Analyst → Senior Analyst → Quality Manager',
      salary: '₵4-16 LPA',
      demand: 'High',
      futureScope: 'Quality Management, Pharmaceutical Quality Leadership'
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
        <button onClick={() => setScreen('pharmacy')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">💊</span>
            <h1 className="text-4xl font-bold text-white">Pharmacy Practice Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive pharmacy practice diploma programs with various specializations for rewarding pharmacy careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('pharmacy')}>Pharmacy</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Pharmacy Practice Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search pharmacy specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="community-pharmacy">Community Pharmacy</option>
              <option value="clinical-pharmacy">Clinical Pharmacy</option>
              <option value="industrial-pharmacy">Industrial Pharmacy</option>
              <option value="regulatory-pharmacy">Regulatory Pharmacy</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pharmacy Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Community</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Clinical</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Industrial</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Regulatory</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.community}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.clinical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.industrial}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.regulatory}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pharmacy Practice Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive pharmacy practice education with drug dispensing training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Chemistry preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on pharmacy and drug dispensing training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Pharmacy License</h4>
                    <p className="text-white/80 text-sm">Pharmacy Practice and Drug Dispensing certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Drug Dispensing</h4>
                    <p className="text-white/80 text-sm">Accurate drug dispensing and medication management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Patient Counseling</h4>
                    <p className="text-white/80 text-sm">Medication guidance and patient consultation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pharmacy Operations</h4>
                    <p className="text-white/80 text-sm">Pharmacy management and drug store operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Medicine Management</h4>
                    <p className="text-white/80 text-sm">Inventory management and medicine tracking</p>
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

export default PharmacyPracticeScreen;
