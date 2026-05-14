import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface GeneralNursingScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const GeneralNursingScreen: React.FC<GeneralNursingScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'staff-nursing',
      icon: '🏥',
      color: 'from-pink-500 to-pink-600',
      title: 'Staff Nursing',
      bestFor: ['Hospital Nursing', 'Patient Care', 'Medical Assistance', 'Healthcare Support'],
      duration: '3 Years',
      careers: ['Staff Nurse', 'Nursing Assistant', 'Patient Care Coordinator'],
      recommended: 'Students interested in hospital nursing, patient care, and medical assistance.',
      coreFocus: 'Hospital nursing, patient care, medical assistance',
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
      id: 'community-nursing',
      icon: '🏘️',
      color: 'from-green-500 to-green-600',
      title: 'Community Nursing',
      bestFor: ['Community Health', 'Public Health', 'Home Care', 'Health Education'],
      duration: '3 Years',
      careers: ['Community Nurse', 'Public Health Nurse', 'Home Care Nurse'],
      recommended: 'Students interested in community health, public health, and home care.',
      coreFocus: 'Community health, public health, home care',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Community Nursing License, Public Health Certificate',
      higherStudy: 'B.Sc Community Nursing Lateral Entry',
      commonCareers: 'Community Nurse, Public Health Nurse, Home Care Nurse',
      difficulty: 'Medium'
    },
    {
      id: 'industrial-nursing',
      icon: '🏭',
      color: 'from-blue-500 to-blue-600',
      title: 'Industrial Nursing',
      bestFor: ['Industrial Health', 'Occupational Safety', 'Employee Health', 'Work Safety'],
      duration: '3 Years',
      careers: ['Industrial Nurse', 'Occupational Health Nurse', 'Safety Officer'],
      recommended: 'Students interested in industrial health, occupational safety, and employee health.',
      coreFocus: 'Industrial health, occupational safety, employee health',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      empathyLevel: 'High',
      industryDemand: 'Medium',
      certifications: 'Industrial Nursing License, Occupational Safety Certificate',
      higherStudy: 'B.Sc Industrial Nursing Lateral Entry',
      commonCareers: 'Industrial Nurse, Occupational Health Nurse, Safety Officer',
      difficulty: 'Medium'
    },
    {
      id: 'military-nursing',
      icon: '🎖️',
      color: 'from-purple-500 to-purple-600',
      title: 'Military Nursing',
      bestFor: ['Military Health', 'Defense Services', 'Field Nursing', 'Emergency Care'],
      duration: '3 Years',
      careers: ['Military Nurse', 'Defense Health Officer', 'Field Nurse'],
      recommended: 'Students interested in military health, defense services, and field nursing.',
      coreFocus: 'Military health, defense services, field nursing',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      empathyLevel: 'High',
      industryDemand: 'Medium',
      certifications: 'Military Nursing License, Defense Health Certificate',
      higherStudy: 'B.Sc Military Nursing Lateral Entry',
      commonCareers: 'Military Nurse, Defense Health Officer, Field Nurse',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      staff: 'Hospital nursing, patient care, medical assistance',
      community: 'Community health, public health, home care',
      industrial: 'Industrial health, occupational safety, employee health',
      military: 'Military health, defense services, field nursing'
    },
    {
      feature: 'Technical Level',
      staff: 'Medium',
      community: 'Medium',
      industrial: 'Medium',
      military: 'High'
    },
    {
      feature: 'Practical Level',
      staff: 'Very High',
      community: 'Very High',
      industrial: 'High',
      military: 'Very High'
    },
    {
      feature: 'Empathy Level',
      staff: 'Very High',
      community: 'Very High',
      industrial: 'High',
      military: 'High'
    },
    {
      feature: 'Industry Demand',
      staff: 'Very High',
      community: 'High',
      industrial: 'Medium',
      military: 'Medium'
    },
    {
      feature: 'Certifications',
      staff: 'Nursing License, First Aid, CPR',
      community: 'Community Nursing License, Public Health Certificate',
      industrial: 'Industrial Nursing License, Occupational Safety Certificate',
      military: 'Military Nursing License, Defense Health Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      staff: 'B.Sc Nursing Lateral Entry',
      community: 'B.Sc Community Nursing Lateral Entry',
      industrial: 'B.Sc Industrial Nursing Lateral Entry',
      military: 'B.Sc Military Nursing Lateral Entry'
    },
    {
      feature: 'Common Careers',
      staff: 'Staff Nurse, Nursing Assistant, Patient Care Coordinator',
      community: 'Community Nurse, Public Health Nurse, Home Care Nurse',
      industrial: 'Industrial Nurse, Occupational Health Nurse, Safety Officer',
      military: 'Military Nurse, Defense Health Officer, Field Nurse'
    },
    {
      feature: 'Difficulty Level',
      staff: 'Medium-Hard',
      community: 'Medium',
      industrial: 'Medium',
      military: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🏥',
      title: 'Choose Staff Nursing If:',
      reasons: [
        'You enjoy hospital nursing and patient care',
        'You are interested in medical assistance and healthcare support',
        'You want hospital-based nursing careers'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '🏘️',
      title: 'Choose Community Nursing If:',
      reasons: [
        'You enjoy community health and public health',
        'You are interested in home care and health education',
        'You want community-based nursing careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏭',
      title: 'Choose Industrial Nursing If:',
      reasons: [
        'You enjoy industrial health and occupational safety',
        'You are interested in employee health and work safety',
        'You want industrial-based nursing careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🎖️',
      title: 'Choose Military Nursing If:',
      reasons: [
        'You enjoy military health and defense services',
        'You are interested in field nursing and emergency care',
        'You want defense-based nursing careers'
      ],
      color: 'from-purple-500 to-purple-600'
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
      title: 'Community Nurse',
      icon: '🏘️',
      skills: ['Community Health', 'Public Health', 'Home Care'],
      roadmap: 'Diploma → Community Nurse → Senior Nurse → Public Health Manager',
      salary: '₹3-12 LPA',
      demand: 'High',
      futureScope: 'Public Health Management, Community Health Leadership'
    },
    {
      title: 'Industrial Nurse',
      icon: '🏭',
      skills: ['Industrial Health', 'Occupational Safety', 'Employee Health'],
      roadmap: 'Diploma → Industrial Nurse → Senior Nurse → Health Manager',
      salary: '₹4-14 LPA',
      demand: 'Medium',
      futureScope: 'Occupational Health Management, Industrial Safety'
    },
    {
      title: 'Military Nurse',
      icon: '🎖️',
      skills: ['Military Health', 'Defense Services', 'Field Nursing'],
      roadmap: 'Diploma → Military Nurse → Senior Nurse → Defense Health Officer',
      salary: '₅-16 LPA',
      demand: 'Medium',
      futureScope: 'Defense Health Management, Military Medical Services'
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

  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('nursing-patient-care')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏥</span>
            <h1 className="text-4xl font-bold text-white">General Nursing Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive general nursing diploma programs with various specializations for rewarding nursing careers after 10th grade.
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
          <span className="text-white font-medium">General Nursing Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search nursing specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="staff-nursing">Staff Nursing</option>
              <option value="community-nursing">Community Nursing</option>
              <option value="industrial-nursing">Industrial Nursing</option>
              <option value="military-nursing">Military Nursing</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nursing Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Staff Nursing</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Community</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Industrial</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Military</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.staff}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.community}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.industrial}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.military}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">General Nursing Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive nursing education with practical training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background preferred but not mandatory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on experience in hospitals and healthcare centers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Nursing License</h4>
                    <p className="text-white/80 text-sm">Registered Nurse (RN) certification upon completion</p>
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
                    <h4 className="text-white font-semibold mb-1">Patient Care</h4>
                    <p className="text-white/80 text-sm">Comprehensive patient assessment and care management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Medical Procedures</h4>
                    <p className="text-white/80 text-sm">Basic and advanced medical procedures and techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Emergency Response</h4>
                    <p className="text-white/80 text-sm">Emergency care and critical situation handling</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Health Communication</h4>
                    <p className="text-white/80 text-sm">Effective communication with patients and healthcare teams</p>
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

export default GeneralNursingScreen;
