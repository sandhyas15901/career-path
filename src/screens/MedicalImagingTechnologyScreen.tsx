import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface MedicalImagingTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const MedicalImagingTechnologyScreen: React.FC<MedicalImagingTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'x-ray-imaging',
      icon: '📷',
      color: 'from-purple-500 to-purple-600',
      title: 'X-ray Imaging',
      bestFor: ['X-ray Technology', 'Medical Imaging', 'Diagnostic X-ray', 'Radiation Safety'],
      duration: '3 Years',
      careers: ['X-ray Technician', 'Medical Imaging Specialist', 'Diagnostic X-ray Technician'],
      recommended: 'Students interested in X-ray technology, medical imaging, and diagnostic X-ray.',
      coreFocus: 'X-ray technology, medical imaging, diagnostic X-ray',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'X-ray Technician License, Medical Imaging Certificate',
      higherStudy: 'B.Sc Medical Imaging Lateral Entry',
      commonCareers: 'X-ray Technician, Medical Imaging Specialist, Diagnostic X-ray Technician',
      difficulty: 'Hard'
    },
    {
      id: 'ultrasound-imaging',
      icon: '🔊',
      color: 'from-blue-500 to-blue-600',
      title: 'Ultrasound Imaging',
      bestFor: ['Ultrasound Technology', 'Sonography', 'Diagnostic Ultrasound', 'Medical Sonography'],
      duration: '3 Years',
      careers: ['Ultrasound Technician', 'Sonography Specialist', 'Diagnostic Ultrasound Technician'],
      recommended: 'Students interested in ultrasound technology, sonography, and diagnostic ultrasound.',
      coreFocus: 'Ultrasound technology, sonography, diagnostic ultrasound',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Ultrasound Technician License, Sonography Certificate',
      higherStudy: 'B.Sc Ultrasound Lateral Entry',
      commonCareers: 'Ultrasound Technician, Sonography Specialist, Diagnostic Ultrasound Technician',
      difficulty: 'Hard'
    },
    {
      id: 'mri-imaging',
      icon: '🧲',
      color: 'from-green-500 to-green-600',
      title: 'MRI Imaging',
      bestFor: ['MRI Technology', 'Magnetic Resonance', 'Advanced Imaging', 'Diagnostic MRI'],
      duration: '3 Years',
      careers: ['MRI Technician', 'Magnetic Resonance Specialist', 'Advanced Imaging Technician'],
      recommended: 'Students interested in MRI technology, magnetic resonance, and advanced imaging.',
      coreFocus: 'MRI technology, magnetic resonance, advanced imaging',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'MRI Technician License, Magnetic Resonance Certificate',
      higherStudy: 'B.Sc MRI Lateral Entry',
      commonCareers: 'MRI Technician, Magnetic Resonance Specialist, Advanced Imaging Technician',
      difficulty: 'Very Hard'
    },
    {
      id: 'ct-imaging',
      icon: '🔬',
      color: 'from-orange-500 to-orange-600',
      title: 'CT Imaging',
      bestFor: ['CT Technology', 'Computed Tomography', 'Advanced Imaging', 'Diagnostic CT'],
      duration: '3 Years',
      careers: ['CT Technician', 'Computed Tomography Specialist', 'Advanced Imaging Technician'],
      recommended: 'Students interested in CT technology, computed tomography, and advanced imaging.',
      coreFocus: 'CT technology, computed tomography, advanced imaging',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'CT Technician License, Computed Tomography Certificate',
      higherStudy: 'B.Sc CT Lateral Entry',
      commonCareers: 'CT Technician, Computed Tomography Specialist, Advanced Imaging Technician',
      difficulty: 'Very Hard'
    },
    {
      id: 'interventional-radiology',
      icon: '🏥',
      color: 'from-red-500 to-red-600',
      title: 'Interventional Radiology',
      bestFor: ['Interventional Radiology', 'Minimally Invasive Procedures', 'Diagnostic Intervention', 'Vascular Imaging'],
      duration: '3 Years',
      careers: ['Interventional Radiology Technician', 'Vascular Imaging Specialist', 'Diagnostic Intervention Technician'],
      recommended: 'Students interested in interventional radiology, minimally invasive procedures, and vascular imaging.',
      coreFocus: 'Interventional radiology, minimally invasive procedures, vascular imaging',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Interventional Radiology License, Vascular Imaging Certificate',
      higherStudy: 'B.Sc Interventional Radiology Lateral Entry',
      commonCareers: 'Interventional Radiology Technician, Vascular Imaging Specialist, Diagnostic Intervention Technician',
      difficulty: 'Very Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      xray: 'X-ray technology, medical imaging, diagnostic X-ray',
      ultrasound: 'Ultrasound technology, sonography, diagnostic ultrasound',
      mri: 'MRI technology, magnetic resonance, advanced imaging',
      ct: 'CT technology, computed tomography, advanced imaging',
      interventional: 'Interventional radiology, minimally invasive procedures, vascular imaging'
    },
    {
      feature: 'Technical Level',
      xray: 'High',
      ultrasound: 'High',
      mri: 'Very High',
      ct: 'Very High',
      interventional: 'Very High'
    },
    {
      feature: 'Practical Level',
      xray: 'Very High',
      ultrasound: 'Very High',
      mri: 'High',
      ct: 'High',
      interventional: 'High'
    },
    {
      feature: 'Accuracy Level',
      xray: 'Very High',
      ultrasound: 'Very High',
      mri: 'Very High',
      ct: 'Very High',
      interventional: 'Very High'
    },
    {
      feature: 'Industry Demand',
      xray: 'Very High',
      ultrasound: 'Very High',
      mri: 'High',
      ct: 'High',
      interventional: 'Medium'
    },
    {
      feature: 'Certifications',
      xray: 'X-ray Technician License, Medical Imaging Certificate',
      ultrasound: 'Ultrasound Technician License, Sonography Certificate',
      mri: 'MRI Technician License, Magnetic Resonance Certificate',
      ct: 'CT Technician License, Computed Tomography Certificate',
      interventional: 'Interventional Radiology License, Vascular Imaging Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      xray: 'B.Sc Medical Imaging Lateral Entry',
      ultrasound: 'B.Sc Ultrasound Lateral Entry',
      mri: 'B.Sc MRI Lateral Entry',
      ct: 'B.Sc CT Lateral Entry',
      interventional: 'B.Sc Interventional Radiology Lateral Entry'
    },
    {
      feature: 'Common Careers',
      xray: 'X-ray Technician, Medical Imaging Specialist, Diagnostic X-ray Technician',
      ultrasound: 'Ultrasound Technician, Sonography Specialist, Diagnostic Ultrasound Technician',
      mri: 'MRI Technician, Magnetic Resonance Specialist, Advanced Imaging Technician',
      ct: 'CT Technician, Computed Tomography Specialist, Advanced Imaging Technician',
      interventional: 'Interventional Radiology Technician, Vascular Imaging Specialist, Diagnostic Intervention Technician'
    },
    {
      feature: 'Difficulty Level',
      xray: 'Hard',
      ultrasound: 'Hard',
      mri: 'Very Hard',
      ct: 'Very Hard',
      interventional: 'Very Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '📷',
      title: 'Choose X-ray Imaging If:',
      reasons: [
        'You enjoy X-ray technology and medical Imaging',
        'You are interested in diagnostic X-ray and radiation safety',
        'You want X-ray-based imaging careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🔊',
      title: 'Choose Ultrasound Imaging If:',
      reasons: [
        'You enjoy ultrasound technology and sonography',
        'You are interested in diagnostic ultrasound and medical Sonography',
        'You want ultrasound-based imaging careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🧲',
      title: 'Choose MRI Imaging If:',
      reasons: [
        'You enjoy MRI technology and magnetic resonance',
        'You are interested in advanced imaging and diagnostic MRI',
        'You want MRI-based imaging careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔬',
      title: 'Choose CT Imaging If:',
      reasons: [
        'You enjoy CT technology and computed tomography',
        'You are interested in advanced imaging and diagnostic CT',
        'You want CT-based imaging careers'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🏥',
      title: 'Choose Interventional Radiology If:',
      reasons: [
        'You enjoy interventional radiology and minimally invasive procedures',
        'You are interested in vascular imaging and diagnostic intervention',
        'You want interventional-based radiology careers'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const careers = [
    {
      title: 'X-ray Technician',
      icon: '📷',
      skills: ['X-ray Technology', 'Medical Imaging', 'Diagnostic X-ray'],
      roadmap: 'Diploma → X-ray Technician → Senior Technician → Imaging Manager',
      salary: '₹4-16 LPA',
      demand: 'Very High',
      futureScope: 'Medical Imaging Management, X-ray Technology Leadership'
    },
    {
      title: 'Ultrasound Technician',
      icon: '🔊',
      skills: ['Ultrasound Technology', 'Sonography', 'Diagnostic Ultrasound'],
      roadmap: 'Diploma → Ultrasound Technician → Senior Technician → Sonography Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Ultrasound Management, Sonography Leadership'
    },
    {
      title: 'MRI Technician',
      icon: '🧲',
      skills: ['MRI Technology', 'Magnetic Resonance', 'Advanced Imaging'],
      roadmap: 'Diploma → MRI Technician → Senior Technician → MRI Manager',
      salary: '₶6-22 LPA',
      demand: 'High',
      futureScope: 'MRI Management, Advanced Imaging Leadership'
    },
    {
      title: 'CT Technician',
      icon: '🔬',
      skills: ['CT Technology', 'Computed Tomography', 'Advanced Imaging'],
      roadmap: 'Diploma → CT Technician → Senior Technician → CT Manager',
      salary: '₶6-24 LPA',
      demand: 'High',
      futureScope: 'CT Management, Advanced Imaging Leadership'
    },
    {
      title: 'Medical Imaging Specialist',
      icon: '📷',
      skills: ['Medical Imaging', 'Diagnostic Imaging', 'Advanced Technology'],
      roadmap: 'Diploma → Imaging Specialist → Senior Specialist → Imaging Manager',
      salary: '₶6-20 LPA',
      demand: 'Very High',
      futureScope: 'Medical Imaging Management, Advanced Technology Leadership'
    },
    {
      title: 'Interventional Radiology Technician',
      icon: '🏥',
      skills: ['Interventional Radiology', 'Vascular Imaging', 'Diagnostic Intervention'],
      roadmap: 'Diploma → Interventional Technician → Senior Technician → Interventional Manager',
      salary: '₶7-26 LPA',
      demand: 'Medium',
      futureScope: 'Interventional Radiology Management, Vascular Imaging Leadership'
    },
    {
      title: 'Magnetic Resonance Specialist',
      icon: '🧲',
      skills: ['Magnetic Resonance', 'Advanced Imaging', 'MRI Technology'],
      roadmap: 'Diploma → MR Specialist → Senior Specialist → MRI Director',
      salary: '₶7-28 LPA',
      demand: 'High',
      futureScope: 'MRI Management, Advanced Imaging Leadership'
    },
    {
      title: 'Computed Tomography Specialist',
      icon: '🔬',
      skills: ['Computed Tomography', 'Advanced Imaging', 'CT Technology'],
      roadmap: 'Diploma → CT Specialist → Senior Specialist → CT Director',
      salary: '₶7-30 LPA',
      demand: 'High',
      futureScope: 'CT Management, Advanced Imaging Leadership'
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
        <button onClick={() => setScreen('imaging-operation-theatre')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">📷</span>
            <h1 className="text-4xl font-bold text-white">Medical Imaging Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive medical imaging technology diploma programs with various specializations for rewarding imaging careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('imaging-operation-theatre')}>Imaging & Operation Theatre</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Medical Imaging Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search imaging specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="x-ray-imaging">X-ray Imaging</option>
              <option value="ultrasound-imaging">Ultrasound Imaging</option>
              <option value="mri-imaging">MRI Imaging</option>
              <option value="ct-imaging">CT Imaging</option>
              <option value="interventional-radiology">Interventional Radiology</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Medical Imaging Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">X-ray</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Ultrasound</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">MRI</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">CT</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Interventional</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.xray}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.ultrasound}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.mri}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.ct}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.interventional}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Medical Imaging Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive medical imaging technology education with equipment training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Physics and Chemistry preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on medical imaging and equipment operation training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Medical Imaging License</h4>
                    <p className="text-white/80 text-sm">Medical Imaging Technology and Diagnostic Equipment certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Medical Imaging</h4>
                    <p className="text-white/80 text-sm">Medical imaging procedures and diagnostic equipment operation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Diagnostic Equipment</h4>
                    <p className="text-white/80 text-sm">Diagnostic equipment operation and medical imaging technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Radiation Safety</h4>
                    <p className="text-white/80 text-sm">Radiation protection and safety procedures in medical imaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Advanced Imaging</h4>
                    <p className="text-white/80 text-sm">Advanced imaging technologies and diagnostic procedures</p>
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

export default MedicalImagingTechnologyScreen;
