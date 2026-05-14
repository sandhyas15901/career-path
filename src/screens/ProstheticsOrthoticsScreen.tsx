import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface ProstheticsOrthoticsScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const ProstheticsOrthoticsScreen: React.FC<ProstheticsOrthoticsScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'prosthetics-technology',
      icon: '🦿',
      color: 'from-purple-500 to-purple-600',
      title: 'Prosthetics Technology',
      bestFor: ['Prosthetics Design', 'Artificial Limbs', 'Mobility Aids', 'Patient Support'],
      duration: '3 Years',
      careers: ['Prosthetics Technician', 'Artificial Limb Specialist', 'Mobility Aid Designer'],
      recommended: 'Students interested in prosthetics design, artificial limbs, and mobility aids.',
      coreFocus: 'Prosthetics design, artificial limbs, mobility aids',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Prosthetics Technician License, Artificial Limb Certificate',
      higherStudy: 'B.Sc Prosthetics Technology Lateral Entry',
      commonCareers: 'Prosthetics Technician, Artificial Limb Specialist, Mobility Aid Designer',
      difficulty: 'Hard'
    },
    {
      id: 'orthotics-technology',
      icon: '🦾',
      color: 'from-blue-500 to-blue-600',
      title: 'Orthotics Technology',
      bestFor: ['Orthotics Design', 'Support Devices', 'Mobility Aids', 'Patient Care'],
      duration: '3 Years',
      careers: ['Orthotics Technician', 'Support Device Specialist', 'Mobility Aid Technician'],
      recommended: 'Students interested in orthotics design, support devices, and mobility aids.',
      coreFocus: 'Orthotics design, support devices, mobility aids',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Orthotics Technician License, Support Device Certificate',
      higherStudy: 'B.Sc Orthotics Technology Lateral Entry',
      commonCareers: 'Orthotics Technician, Support Device Specialist, Mobility Aid Technician',
      difficulty: 'Hard'
    },
    {
      id: 'assistive-technology',
      icon: '♿',
      color: 'from-green-500 to-green-600',
      title: 'Assistive Technology',
      bestFor: ['Assistive Devices', 'Adaptive Equipment', 'Accessibility Solutions', 'Patient Support'],
      duration: '3 Years',
      careers: ['Assistive Technology Specialist', 'Adaptive Equipment Technician', 'Accessibility Consultant'],
      recommended: 'Students interested in assistive devices, adaptive equipment, and accessibility solutions.',
      coreFocus: 'Assistive devices, adaptive equipment, accessibility solutions',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      industryDemand: 'Medium',
      certifications: 'Assistive Technology License, Adaptive Equipment Certificate',
      higherStudy: 'B.Sc Assistive Technology Lateral Entry',
      commonCareers: 'Assistive Technology Specialist, Adaptive Equipment Technician, Accessibility Consultant',
      difficulty: 'Medium'
    },
    {
      id: 'mobility-aid-design',
      icon: '🦽',
      color: 'from-orange-500 to-orange-600',
      title: 'Mobility Aid Design',
      bestFor: ['Mobility Aids', 'Assistive Technology', 'Patient Support', 'Design Innovation'],
      duration: '3 Years',
      careers: ['Mobility Aid Designer', 'Assistive Technology Specialist', 'Support Device Consultant'],
      recommended: 'Students interested in mobility aids, assistive technology, and design innovation.',
      coreFocus: 'Mobility aids, assistive technology, design innovation',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      industryDemand: 'Medium',
      certifications: 'Mobility Aid Design License, Assistive Technology Certificate',
      higherStudy: 'B.Sc Mobility Aid Design Lateral Entry',
      commonCareers: 'Mobility Aid Designer, Assistive Technology Specialist, Support Device Consultant',
      difficulty: 'Medium'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      prosthetics: 'Prosthetics design, artificial limbs, mobility aids',
      orthotics: 'Orthotics design, support devices, mobility aids',
      assistive: 'Assistive devices, adaptive equipment, accessibility solutions',
      mobility: 'Mobility aids, assistive technology, design innovation'
    },
    {
      feature: 'Technical Level',
      prosthetics: 'High',
      orthotics: 'High',
      assistive: 'Medium',
      mobility: 'Medium'
    },
    {
      feature: 'Practical Level',
      prosthetics: 'Very High',
      orthotics: 'Very High',
      assistive: 'High',
      mobility: 'High'
    },
    {
      feature: 'Accuracy Level',
      prosthetics: 'Very High',
      orthotics: 'High',
      assistive: 'High',
      mobility: 'High'
    },
    {
      feature: 'Industry Demand',
      prosthetics: 'High',
      orthotics: 'High',
      assistive: 'Medium',
      mobility: 'Medium'
    },
    {
      feature: 'Certifications',
      prosthetics: 'Prosthetics Technician License, Artificial Limb Certificate',
      orthotics: 'Orthotics Technician License, Support Device Certificate',
      assistive: 'Assistive Technology License, Adaptive Equipment Certificate',
      mobility: 'Mobility Aid Design License, Assistive Technology Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      prosthetics: 'B.Sc Prosthetics Technology Lateral Entry',
      orthotics: 'B.Sc Orthotics Technology Lateral Entry',
      assistive: 'B.Sc Assistive Technology Lateral Entry',
      mobility: 'B.Sc Mobility Aid Design Lateral Entry'
    },
    {
      feature: 'Common Careers',
      prosthetics: 'Prosthetics Technician, Artificial Limb Specialist, Mobility Aid Designer',
      orthotics: 'Orthotics Technician, Support Device Specialist, Mobility Aid Technician',
      assistive: 'Assistive Technology Specialist, Adaptive Equipment Technician, Accessibility Consultant',
      mobility: 'Mobility Aid Designer, Assistive Technology Specialist, Support Device Consultant'
    },
    {
      feature: 'Difficulty Level',
      prosthetics: 'Hard',
      orthotics: 'Hard',
      assistive: 'Medium',
      mobility: 'Medium'
    }
  ];

  const chooseOptions = [
    {
      icon: '🦿',
      title: 'Choose Prosthetics Technology If:',
      reasons: [
        'You enjoy prosthetics design and artificial limbs',
        'You are interested in mobility aids and patient support',
        'You want prosthetics-based assistive technology careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🦾',
      title: 'Choose Orthotics Technology If:',
      reasons: [
        'You enjoy orthotics design and support devices',
        'You are interested in mobility aids and patient care',
        'You want orthotics-based assistive technology careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '♿',
      title: 'Choose Assistive Technology If:',
      reasons: [
        'You enjoy assistive devices and adaptive equipment',
        'You are interested in accessibility solutions and patient support',
        'You want assistive technology-based careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🦽',
      title: 'Choose Mobility Aid Design If:',
      reasons: [
        'You enjoy mobility aids and assistive technology',
        'You are interested in design innovation and patient support',
        'You want mobility aid design-based careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Prosthetics Technician',
      icon: '🦿',
      skills: ['Prosthetics Design', 'Artificial Limbs', 'Mobility Aids', 'Patient Support'],
      roadmap: 'Diploma → Prosthetics Technician → Senior Technician → Prosthetics Manager',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Prosthetics Management, Artificial Limb Leadership'
    },
    {
      title: 'Orthotics Technician',
      icon: '🦾',
      skills: ['Orthotics Design', 'Support Devices', 'Mobility Aids', 'Patient Care'],
      roadmap: 'Diploma → Orthotics Technician → Senior Technician → Orthotics Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Orthotics Management, Support Device Leadership'
    },
    {
      title: 'Assistive Technology Specialist',
      icon: '♿',
      skills: ['Assistive Devices', 'Adaptive Equipment', 'Accessibility Solutions', 'Patient Support'],
      roadmap: 'Diploma → Assistive Specialist → Senior Specialist → Assistive Technology Manager',
      salary: '₶4-16 LPA',
      demand: 'Medium',
      futureScope: 'Assistive Technology Management, Accessibility Leadership'
    },
    {
      title: 'Mobility Aid Designer',
      icon: '🦽',
      skills: ['Mobility Aids', 'Assistive Technology', 'Design Innovation', 'Patient Support'],
      roadmap: 'Diploma → Mobility Designer → Senior Designer → Mobility Aid Manager',
      salary: '₶4-18 LPA',
      demand: 'Medium',
      futureScope: 'Mobility Aid Management, Design Innovation Leadership'
    },
    {
      title: 'Artificial Limb Specialist',
      icon: '🦿',
      skills: ['Artificial Limbs', 'Prosthetics Design', 'Mobility Aids', 'Patient Support'],
      roadmap: 'Diploma → Limb Specialist → Senior Specialist → Prosthetics Director',
      salary: '₶6-24 LPA',
      demand: 'High',
      futureScope: 'Artificial Limb Management, Prosthetics Design Leadership'
    },
    {
      title: 'Support Device Specialist',
      icon: '🦾',
      skills: ['Support Devices', 'Orthotics Design', 'Mobility Aids', 'Patient Care'],
      roadmap: 'Diploma → Support Specialist → Senior Specialist → Support Device Manager',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Support Device Management, Orthotics Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('dental-eye-rehabilitation')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🦿</span>
            <h1 className="text-4xl font-bold text-white">Prosthetics & Orthotics Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive prosthetics and orthotics diploma programs with various specializations for rewarding assistive technology careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('dental-eye-rehabilitation')}>Dental, Eye & Rehabilitation</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Prosthetics & Orthotics Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search prosthetics specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="prosthetics-technology">Prosthetics Technology</option>
              <option value="orthotics-technology">Orthotics Technology</option>
              <option value="assistive-technology">Assistive Technology</option>
              <option value="mobility-aid-design">Mobility Aid Design</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Prosthetics & Orthotics Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Prosthetics</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Orthotics</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Assistive</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Mobility</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.prosthetics}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.orthotics}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.assistive}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.mobility}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Prosthetics & Orthotics Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive prosthetics and orthotics education with hands-on training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Physics and Biology preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on prosthetics and orthotics design training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Prosthetics & Orthotics License</h4>
                    <p className="text-white/80 text-sm">Prosthetics & Orthotics and Assistive Technology certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Prosthetics Design</h4>
                    <p className="text-white/80 text-sm">Prosthetics design procedures and artificial limb creation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Orthotics Design</h4>
                    <p className="text-white/80 text-sm">Orthotics design procedures and support device creation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Assistive Technology</h4>
                    <p className="text-white/80 text-sm">Assistive technology procedures and adaptive equipment design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Mobility Aids</h4>
                    <p className="text-white/80 text-sm">Mobility aids design and assistive technology creation</p>
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

export default ProstheticsOrthoticsScreen;
