import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface PediatricNursingScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const PediatricNursingScreen: React.FC<PediatricNursingScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'pediatric-icu',
      icon: '👶',
      color: 'from-purple-500 to-purple-600',
      title: 'Pediatric ICU Nursing',
      bestFor: ['Infant ICU', 'Child Critical Care', 'Neonatal Care', 'Pediatric Emergency'],
      duration: '3 Years',
      careers: ['PICU Nurse', 'Pediatric Critical Care Nurse', 'Child ICU Specialist'],
      recommended: 'Students interested in infant ICU, child critical care, and neonatal care.',
      coreFocus: 'Infant ICU, child critical care, neonatal care',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Pediatric ICU Nursing, Neonatal Care, PALS',
      higherStudy: 'B.Sc Pediatric Nursing Lateral Entry',
      commonCareers: 'PICU Nurse, Pediatric Critical Care Nurse, Child ICU Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'neonatal-nursing',
      icon: '🍼',
      color: 'from-pink-500 to-pink-600',
      title: 'Neonatal Nursing',
      bestFor: ['Newborn Care', 'NICU', 'Infant Health', 'Baby Care'],
      duration: '3 Years',
      careers: ['Neonatal Nurse', 'NICU Specialist', 'Newborn Care Nurse'],
      recommended: 'Students interested in newborn care, NICU, and infant health.',
      coreFocus: 'Newborn care, NICU, infant health',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Neonatal Nursing, Infant Care, NICU Certification',
      higherStudy: 'B.Sc Neonatal Nursing Lateral Entry',
      commonCareers: 'Neonatal Nurse, NICU Specialist, Newborn Care Nurse',
      difficulty: 'Hard'
    },
    {
      id: 'child-development',
      icon: '🧒',
      color: 'from-blue-500 to-blue-600',
      title: 'Child Development Nursing',
      bestFor: ['Child Growth', 'Developmental Care', 'Pediatric Health', 'Child Psychology'],
      duration: '3 Years',
      careers: ['Child Development Nurse', 'Pediatric Health Nurse', 'Child Care Specialist'],
      recommended: 'Students interested in child growth, developmental care, and pediatric health.',
      coreFocus: 'Child growth, developmental care, pediatric health',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      empathyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Child Development Nursing, Pediatric Health, Child Psychology',
      higherStudy: 'B.Sc Child Development Nursing Lateral Entry',
      commonCareers: 'Child Development Nurse, Pediatric Health Nurse, Child Care Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'pediatric-emergency',
      icon: '🚑',
      color: 'from-orange-500 to-orange-600',
      title: 'Pediatric Emergency Nursing',
      bestFor: ['Child Emergency', 'Pediatric Trauma', 'Child ER', 'Emergency Pediatrics'],
      duration: '3 Years',
      careers: ['Pediatric ER Nurse', 'Child Emergency Nurse', 'Pediatric Trauma Specialist'],
      recommended: 'Students interested in child emergency, pediatric trauma, and child ER.',
      coreFocus: 'Child emergency, pediatric trauma, child ER',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      stressLevel: 'High',
      industryDemand: 'High',
      certifications: 'Pediatric Emergency Nursing, PALS, Trauma Care',
      higherStudy: 'B.Sc Pediatric Emergency Nursing Lateral Entry',
      commonCareers: 'Pediatric ER Nurse, Child Emergency Nurse, Pediatric Trauma Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      picu: 'Infant ICU, child critical care, neonatal care',
      neonatal: 'Newborn care, NICU, infant health',
      development: 'Child growth, developmental care, pediatric health',
      emergency: 'Child emergency, pediatric trauma, child ER'
    },
    {
      feature: 'Technical Level',
      picu: 'High',
      neonatal: 'High',
      development: 'Medium',
      emergency: 'High'
    },
    {
      feature: 'Practical Level',
      picu: 'Very High',
      neonatal: 'Very High',
      development: 'High',
      emergency: 'Very High'
    },
    {
      feature: 'Empathy Level',
      picu: 'Very High',
      neonatal: 'Very High',
      development: 'Very High',
      emergency: 'High'
    },
    {
      feature: 'Industry Demand',
      picu: 'High',
      neonatal: 'High',
      development: 'Medium',
      emergency: 'High'
    },
    {
      feature: 'Certifications',
      picu: 'Pediatric ICU Nursing, Neonatal Care, PALS',
      neonatal: 'Neonatal Nursing, Infant Care, NICU Certification',
      development: 'Child Development Nursing, Pediatric Health, Child Psychology',
      emergency: 'Pediatric Emergency Nursing, PALS, Trauma Care'
    },
    {
      feature: 'Higher Study Opportunities',
      picu: 'B.Sc Pediatric Nursing Lateral Entry',
      neonatal: 'B.Sc Neonatal Nursing Lateral Entry',
      development: 'B.Sc Child Development Nursing Lateral Entry',
      emergency: 'B.Sc Pediatric Emergency Nursing Lateral Entry'
    },
    {
      feature: 'Common Careers',
      picu: 'PICU Nurse, Pediatric Critical Care Nurse, Child ICU Specialist',
      neonatal: 'Neonatal Nurse, NICU Specialist, Newborn Care Nurse',
      development: 'Child Development Nurse, Pediatric Health Nurse, Child Care Specialist',
      emergency: 'Pediatric ER Nurse, Child Emergency Nurse, Pediatric Trauma Specialist'
    },
    {
      feature: 'Difficulty Level',
      picu: 'Hard',
      neonatal: 'Hard',
      development: 'Medium',
      emergency: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '👶',
      title: 'Choose Pediatric ICU Nursing If:',
      reasons: [
        'You enjoy infant ICU and child critical care',
        'You are interested in neonatal care and pediatric emergency',
        'You want ICU-based pediatric nursing careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🍼',
      title: 'Choose Neonatal Nursing If:',
      reasons: [
        'You enjoy newborn care and NICU',
        'You are interested in infant health and baby care',
        'You want neonatal-based nursing careers'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '🧒',
      title: 'Choose Child Development Nursing If:',
      reasons: [
        'You enjoy child growth and developmental care',
        'You are interested in pediatric health and child psychology',
        'You want development-based pediatric nursing careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🚑',
      title: 'Choose Pediatric Emergency Nursing If:',
      reasons: [
        'You enjoy child emergency and pediatric trauma',
        'You are interested in child ER and emergency pediatrics',
        'You want emergency-based pediatric nursing careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'PICU Nurse',
      icon: '👶',
      skills: ['Pediatric ICU', 'Child Critical Care', 'Infant Monitoring'],
      roadmap: 'Diploma → PICU Nurse → Senior PICU Nurse → PICU Manager',
      salary: '₹5-18 LPA',
      demand: 'High',
      futureScope: 'PICU Management, Pediatric Critical Care Leadership'
    },
    {
      title: 'Neonatal Nurse',
      icon: '🍼',
      skills: ['Newborn Care', 'NICU', 'Infant Health'],
      roadmap: 'Diploma → Neonatal Nurse → Senior NICU Nurse → NICU Manager',
      salary: '₹5-18 LPA',
      demand: 'High',
      futureScope: 'NICU Management, Neonatal Care Leadership'
    },
    {
      title: 'Child Development Nurse',
      icon: '🧒',
      skills: ['Child Growth', 'Developmental Care', 'Pediatric Health'],
      roadmap: 'Diploma → Child Development Nurse → Senior Nurse → Development Manager',
      salary: '₹4-14 LPA',
      demand: 'Medium',
      futureScope: 'Child Development Management, Pediatric Health Leadership'
    },
    {
      title: 'Pediatric ER Nurse',
      icon: '🚑',
      skills: ['Child Emergency', 'Pediatric Trauma', 'Emergency Pediatrics'],
      roadmap: 'Diploma → Pediatric ER Nurse → Senior ER Nurse → ER Manager',
      salary: '₶6-20 LPA',
      demand: 'High',
      futureScope: 'Pediatric Emergency Management, Trauma Leadership'
    },
    {
      title: 'Pediatric Health Nurse',
      icon: '🏥',
      skills: ['Pediatric Health', 'Child Care', 'Child Psychology'],
      roadmap: 'Diploma → Pediatric Health Nurse → Senior Nurse → Health Manager',
      salary: '₹4-15 LPA',
      demand: 'Medium',
      futureScope: 'Pediatric Health Management, Child Care Leadership'
    },
    {
      title: 'Child Care Specialist',
      icon: '🧸',
      skills: ['Child Care', 'Developmental Support', 'Child Psychology'],
      roadmap: 'Diploma → Child Care Specialist → Senior Specialist → Care Manager',
      salary: '₹3-12 LPA',
      demand: 'Medium',
      futureScope: 'Child Care Management, Developmental Support Leadership'
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
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('nursing-patient-care')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">👶</span>
            <h1 className="text-4xl font-bold text-white">Pediatric Nursing Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive pediatric nursing diploma programs with various specializations for rewarding nursing careers in child and infant care after 10th grade.
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
          <span className="text-white font-medium">Pediatric Nursing Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search pediatric specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="pediatric-icu">Pediatric ICU</option>
              <option value="neonatal-nursing">Neonatal Nursing</option>
              <option value="child-development">Child Development</option>
              <option value="pediatric-emergency">Pediatric Emergency</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pediatric Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">PICU</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Neonatal</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Emergency</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.picu}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.neonatal}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.development}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.emergency}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pediatric Nursing Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive pediatric nursing education with child care training</p>
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
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on pediatric ward and NICU training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Pediatric Nursing License</h4>
                    <p className="text-white/80 text-sm">Pediatric Nursing and PALS certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Child Assessment</h4>
                    <p className="text-white/80 text-sm">Pediatric assessment and child health monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Infant Care</h4>
                    <p className="text-white/80 text-sm">Newborn care and infant health management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Child Development</h4>
                    <p className="text-white/80 text-sm">Child growth monitoring and developmental support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pediatric Communication</h4>
                    <p className="text-white/80 text-sm">Child-friendly communication and family support</p>
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

export default PediatricNursingScreen;
