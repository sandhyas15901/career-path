import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface DentalEyeRehabilitationScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const DentalEyeRehabilitationScreen: React.FC<DentalEyeRehabilitationScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'dental-technology',
      icon: '🦷',
      color: 'from-indigo-500 to-indigo-600',
      title: 'Dental Technology Diploma',
      bestFor: ['Dental Care', 'Dental Lab', 'Prosthodontics', 'Dental Materials'],
      duration: '3 Years',
      careers: ['Dental Technician', 'Dental Lab Assistant', 'Prosthodontics Specialist'],
      recommended: 'Students interested in dental care, dental laboratory work, and prosthodontics.',
      coreFocus: 'Dental care, dental laboratory, prosthodontics',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      precisionLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Dental Technician License, Dental Lab Certificate',
      higherStudy: 'B.Sc Dental Technology Lateral Entry',
      commonCareers: 'Dental Technician, Dental Lab Assistant, Prosthodontics Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'optometry-technology',
      icon: '👁️',
      color: 'from-blue-500 to-blue-600',
      title: 'Optometry Technology Diploma',
      bestFor: ['Eye Care', 'Vision Testing', 'Optical Services', 'Eye Health'],
      duration: '3 Years',
      careers: ['Optometry Technician', 'Vision Care Specialist', 'Optical Assistant'],
      recommended: 'Students interested in eye care, vision testing, and optical services.',
      coreFocus: 'Eye care, vision testing, optical services',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      precisionLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Optometry Technician License, Vision Testing Certificate',
      higherStudy: 'B.Sc Optometry Lateral Entry',
      commonCareers: 'Optometry Technician, Vision Care Specialist, Optical Assistant',
      difficulty: 'Hard'
    },
    {
      id: 'rehabilitation-therapy',
      icon: '♿',
      color: 'from-green-500 to-green-600',
      title: 'Rehabilitation Therapy Diploma',
      bestFor: ['Rehabilitation', 'Physical Therapy', 'Patient Recovery', 'Therapeutic Care'],
      duration: '3 Years',
      careers: ['Rehabilitation Therapist', 'Physical Therapy Assistant', 'Recovery Specialist'],
      recommended: 'Students interested in rehabilitation, physical therapy, and patient recovery.',
      coreFocus: 'Rehabilitation, physical therapy, patient recovery',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Rehabilitation Therapy License, Physical Therapy Certificate',
      higherStudy: 'B.Sc Rehabilitation Therapy Lateral Entry',
      commonCareers: 'Rehabilitation Therapist, Physical Therapy Assistant, Recovery Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'prosthetics-orthotics',
      icon: '🦿',
      color: 'from-purple-500 to-purple-600',
      title: 'Prosthetics & Orthotics Diploma',
      bestFor: ['Prosthetics', 'Orthotics', 'Mobility Aids', 'Patient Support'],
      duration: '3 Years',
      careers: ['Prosthetics Technician', 'Orthotics Specialist', 'Mobility Aid Technician'],
      recommended: 'Students interested in prosthetics, orthotics, and mobility aid design.',
      coreFocus: 'Prosthetics, orthotics, mobility aids',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      precisionLevel: 'High',
      industryDemand: 'High',
      certifications: 'Prosthetics Technician License, Orthotics Certificate',
      higherStudy: 'B.Sc Prosthetics & Orthotics Lateral Entry',
      commonCareers: 'Prosthetics Technician, Orthotics Specialist, Mobility Aid Technician',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      dental: 'Dental care, dental laboratory, prosthodontics',
      optometry: 'Eye care, vision testing, optical services',
      rehabilitation: 'Rehabilitation, physical therapy, patient recovery',
      prosthetics: 'Prosthetics, orthotics, mobility aids'
    },
    {
      feature: 'Technical Level',
      dental: 'High',
      optometry: 'High',
      rehabilitation: 'Medium',
      prosthetics: 'High'
    },
    {
      feature: 'Practical Level',
      dental: 'Very High',
      optometry: 'Very High',
      rehabilitation: 'Very High',
      prosthetics: 'Very High'
    },
    {
      feature: 'Precision Level',
      dental: 'Very High',
      optometry: 'Very High',
      rehabilitation: 'Medium',
      prosthetics: 'High'
    },
    {
      feature: 'Empathy Level',
      dental: 'Medium',
      optometry: 'Medium',
      rehabilitation: 'Very High',
      prosthetics: 'High'
    },
    {
      feature: 'Industry Demand',
      dental: 'High',
      optometry: 'High',
      rehabilitation: 'Very High',
      prosthetics: 'High'
    },
    {
      feature: 'Certifications',
      dental: 'Dental Technician License, Dental Lab Certificate',
      optometry: 'Optometry Technician License, Vision Testing Certificate',
      rehabilitation: 'Rehabilitation Therapy License, Physical Therapy Certificate',
      prosthetics: 'Prosthetics Technician License, Orthotics Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      dental: 'B.Sc Dental Technology Lateral Entry',
      optometry: 'B.Sc Optometry Lateral Entry',
      rehabilitation: 'B.Sc Rehabilitation Therapy Lateral Entry',
      prosthetics: 'B.Sc Prosthetics & Orthotics Lateral Entry'
    },
    {
      feature: 'Common Careers',
      dental: 'Dental Technician, Dental Lab Assistant, Prosthodontics Specialist',
      optometry: 'Optometry Technician, Vision Care Specialist, Optical Assistant',
      rehabilitation: 'Rehabilitation Therapist, Physical Therapy Assistant, Recovery Specialist',
      prosthetics: 'Prosthetics Technician, Orthotics Specialist, Mobility Aid Technician'
    },
    {
      feature: 'Difficulty Level',
      dental: 'Hard',
      optometry: 'Hard',
      rehabilitation: 'Medium',
      prosthetics: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🦷',
      title: 'Choose Dental Technology If:',
      reasons: [
        'You enjoy dental care and dental laboratory work',
        'You are interested in prosthodontics and dental materials',
        'You want dental-focused technology careers'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: '👁️',
      title: 'Choose Optometry Technology If:',
      reasons: [
        'You enjoy eye care and vision testing',
        'You are interested in optical services and eye health',
        'You want optometry-focused technology careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '♿',
      title: 'Choose Rehabilitation Therapy If:',
      reasons: [
        'You enjoy rehabilitation and physical therapy',
        'You are interested in patient recovery and therapeutic care',
        'You want rehabilitation-focused therapy careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🦿',
      title: 'Choose Prosthetics & Orthotics If:',
      reasons: [
        'You enjoy prosthetics and orthotics design',
        'You are interested in mobility aids and patient support',
        'You want prosthetics-focused technology careers'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const careers = [
    {
      title: 'Dental Technician',
      icon: '🦷',
      skills: ['Dental Care', 'Dental Lab', 'Prosthodontics'],
      roadmap: 'Diploma → Dental Technician → Senior Technician → Lab Manager',
      salary: '₹4-14 LPA',
      demand: 'High',
      futureScope: 'Dental Lab Management, Prosthodontics Specialization'
    },
    {
      title: 'Optometry Technician',
      icon: '👁️',
      skills: ['Eye Care', 'Vision Testing', 'Optical Services'],
      roadmap: 'Diploma → Optometry Technician → Senior Technician → Optical Manager',
      salary: '₹4-15 LPA',
      demand: 'High',
      futureScope: 'Optical Management, Vision Care Specialization'
    },
    {
      title: 'Rehabilitation Therapist',
      icon: '♿',
      skills: ['Rehabilitation', 'Physical Therapy', 'Patient Recovery'],
      roadmap: 'Diploma → Rehabilitation Therapist → Senior Therapist → Therapy Manager',
      salary: '₹3-12 LPA',
      demand: 'Very High',
      futureScope: 'Rehabilitation Management, Physical Therapy'
    },
    {
      title: 'Prosthetics Technician',
      icon: '🦿',
      skills: ['Prosthetics', 'Orthotics', 'Mobility Aids'],
      roadmap: 'Diploma → Prosthetics Technician → Senior Technician → Prosthetics Manager',
      salary: '₹4-16 LPA',
      demand: 'High',
      futureScope: 'Prosthetics Management, Orthotics Specialization'
    },
    {
      title: 'Dental Lab Assistant',
      icon: '🦷',
      skills: ['Dental Lab', 'Prosthodontics', 'Dental Materials'],
      roadmap: 'Diploma → Lab Assistant → Senior Assistant → Lab Coordinator',
      salary: '₹3-10 LPA',
      demand: 'High',
      futureScope: 'Dental Lab Coordination, Prosthodontics'
    },
    {
      title: 'Vision Care Specialist',
      icon: '👁️',
      skills: ['Vision Care', 'Eye Health', 'Optical Services'],
      roadmap: 'Diploma → Vision Care Specialist → Senior Specialist → Vision Care Manager',
      salary: '₹4-13 LPA',
      demand: 'High',
      futureScope: 'Vision Care Management, Optical Services'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('medical_paramedical_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">👁️</span>
            <h1 className="text-4xl font-bold text-white">Dental, Eye & Rehabilitation Care</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive dental, eye, and rehabilitation care diploma programs for rewarding healthcare careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Dental, Eye & Rehabilitation Care</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search dental/eye/rehabilitation courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="dental-technology">Dental Technology</option>
              <option value="optometry-technology">Optometry Technology</option>
              <option value="rehabilitation-therapy">Rehabilitation Therapy</option>
              <option value="prosthetics-orthotics">Prosthetics & Orthotics</option>
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
                    <div className="flex justify-between"><span className="text-white/50">Precision Level:</span><span className="text-white/80">{course.precisionLevel || course.empathyLevel}</span></div>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Dental Tech</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Optometry</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Rehabilitation</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Prosthetics</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.dental}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.optometry}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.rehabilitation}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.prosthetics}</td>
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
                title: 'Dental Technology Entrance',
                icon: '📝',
                eligibility: '10th with Science & Biology',
                process: 'Entrance Exam → Counseling → Admission',
                higherStudy: 'Direct 2nd Year B.Sc Dental Technology',
                successRate: '60%'
              },
              {
                title: 'Optometry Entrance',
                icon: '🎯',
                eligibility: '10th Pass with Science',
                process: 'State Exam → Merit List → Admission',
                higherStudy: 'Lateral Entry to Optometry Programs',
                successRate: '55%'
              },
              {
                title: 'Direct Admission',
                icon: '🎓',
                eligibility: '10th Pass with Science',
                process: 'Application → Interview → Admission',
                higherStudy: 'Regular B.Sc Dental/Optometry Admission',
                successRate: '70%'
              },
              {
                title: 'Rehabilitation Training',
                icon: '🔄',
                eligibility: '10th Pass with Science',
                process: 'Rehabilitation Center Selection → Training → Admission',
                higherStudy: 'Rehabilitation-based Programs',
                successRate: '65%'
              }
            ].map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
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
                title: 'Dental Lab Techniques',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🦷',
                relevance: 'Essential for all dental professionals',
                skills: ['Dental Lab', 'Prosthodontics', 'Dental Materials', 'Lab Safety']
              },
              {
                title: 'Vision Testing',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '👁️',
                relevance: 'Core optometry skill',
                skills: ['Vision Testing', 'Eye Care', 'Optical Services', 'Eye Health']
              },
              {
                title: 'Physical Therapy',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '♿',
                relevance: 'Essential for rehabilitation',
                skills: ['Physical Therapy', 'Rehabilitation', 'Patient Recovery', 'Therapeutic Care']
              },
              {
                title: 'Prosthetics Design',
                level: 'Advanced',
                duration: '4 Months',
                icon: '🦿',
                relevance: 'Essential for prosthetics',
                skills: ['Prosthetics Design', 'Orthotics', 'Mobility Aids', 'Patient Support']
              },
              {
                title: 'Dental Materials',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '🔬',
                relevance: 'Essential for dental technology',
                skills: ['Dental Materials', 'Lab Techniques', 'Material Science', 'Safety Procedures']
              },
              {
                title: 'Patient Rehabilitation',
                level: 'Intermediate',
                duration: '3 Months',
                icon: '💊',
                relevance: 'Essential for rehabilitation care',
                skills: ['Patient Rehabilitation', 'Therapeutic Care', 'Patient Support', 'Recovery Planning']
              }
            ].map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
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
                name: 'Dental Hospitals',
                icon: '🦷',
                demand: 'High',
                growth: '+16%',
                opportunities: 'Dental Hospitals, Dental Clinics, Dental Labs',
                types: ['Dental Technician', 'Dental Lab Assistant', 'Prosthodontics Specialist']
              },
              {
                name: 'Eye Hospitals',
                icon: '👁️',
                demand: 'High',
                growth: '+18%',
                opportunities: 'Eye Hospitals, Optical Centers, Vision Care Clinics',
                types: ['Optometry Technician', 'Vision Care Specialist', 'Optical Assistant']
              },
              {
                name: 'Rehabilitation Centers',
                icon: '♿',
                demand: 'Very High',
                growth: '+20%',
                opportunities: 'Rehabilitation Centers, Physical Therapy Clinics, Recovery Centers',
                types: ['Rehabilitation Therapist', 'Physical Therapy Assistant', 'Recovery Specialist']
              },
              {
                name: 'Prosthetics Centers',
                icon: '🦿',
                demand: 'High',
                growth: '+16%',
                opportunities: 'Prosthetics Centers, Orthotics Labs, Mobility Aid Centers',
                types: ['Prosthetics Technician', 'Orthotics Specialist', 'Mobility Aid Technician']
              },
              {
                name: 'Government Health',
                icon: '🏛️',
                demand: 'High',
                growth: '+14%',
                opportunities: 'Public Health Hospitals, Government Dental/Eye Centers',
                types: ['Government Dental Technician', 'Public Health Optometrist']
              },
              {
                name: 'Private Healthcare',
                icon: '🏢',
                demand: 'High',
                growth: '+16%',
                opportunities: 'Private Hospitals, Healthcare Chains, Medical Centers',
                types: ['Private Dental Technician', 'Healthcare Optometrist', 'Rehabilitation Specialist']
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
                title: 'Government Dental Technician',
                icon: '🏛️',
                eligibility: 'Dental Technology Diploma + Registration',
                skills: ['Dental Care', 'Government Dental Procedures', 'Lab Safety'],
                growth: 'Public dental healthcare expansion',
                salary: '₹4-14 LPA'
              },
              {
                title: 'Government Optometrist',
                icon: '👁️',
                eligibility: 'Optometry Diploma + Eye Care Training',
                skills: ['Eye Care', 'Government Optical Services', 'Vision Testing'],
                growth: 'Public eye care development',
                salary: '₹4-15 LPA'
              },
              {
                title: 'Public Health Rehabilitation',
                icon: '♿',
                eligibility: 'Rehabilitation Diploma + Public Health Training',
                skills: ['Public Rehabilitation', 'Health Programs', 'Patient Recovery'],
                growth: 'Public rehabilitation initiatives',
                salary: '₹3-12 LPA'
              },
              {
                title: 'Military Dental Technician',
                icon: '🎖️',
                eligibility: 'Dental Technology Diploma + Physical Fitness',
                skills: ['Military Dental Services', 'Field Dental Care', 'Dental Emergency'],
                growth: 'Defense dental services',
                salary: '₅-16 LPA'
              },
              {
                title: 'Railway Dental Technician',
                icon: '🚂',
                eligibility: 'Dental Technology Diploma + Railway Training',
                skills: ['Railway Dental Services', 'Dental Care', 'Health Services'],
                growth: 'Railway dental healthcare services',
                salary: '₹4-13 LPA'
              },
              {
                title: 'ESI Dental Technician',
                icon: '💼',
                eligibility: 'Dental Technology Diploma + ESI Training',
                skills: ['ESI Dental Services', 'Employee Dental Care', 'Industrial Health'],
                growth: 'Employee dental healthcare services',
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
                title: 'Advanced Dental Technology',
                icon: '🦷',
                growth: '18%',
                description: 'Advanced dental technologies and digital dentistry',
                salaryImpact: '+16%',
                demand: 'High'
              },
              {
                title: 'Vision Care Innovation',
                icon: '👁️',
                growth: '20%',
                description: 'Advanced vision care and optical technologies',
                salaryImpact: '+18%',
                demand: 'High'
              },
              {
                title: 'Rehabilitation Technology',
                icon: '♿',
                growth: '22%',
                description: 'Advanced rehabilitation technologies and therapeutic care',
                salaryImpact: '+20%',
                demand: 'Very High'
              },
              {
                title: 'Prosthetics Innovation',
                icon: '🦿',
                growth: '18%',
                description: 'Advanced prosthetics and mobility aid technologies',
                salaryImpact: '+16%',
                demand: 'High'
              },
              {
                title: 'Digital Eye Care',
                icon: '💻',
                growth: '20%',
                description: 'Digital eye care and tele-optometry services',
                salaryImpact: '+18%',
                demand: 'High'
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

export default DentalEyeRehabilitationScreen;
