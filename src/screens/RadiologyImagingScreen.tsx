import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface RadiologyImagingScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const RadiologyImagingScreen: React.FC<RadiologyImagingScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'diagnostic-radiology',
      icon: '🔬',
      color: 'from-blue-500 to-blue-600',
      title: 'Diagnostic Radiology',
      bestFor: ['Diagnostic Radiology', 'Medical Imaging', 'X-ray Diagnosis', 'Radiation Therapy'],
      duration: '3 Years',
      careers: ['Diagnostic Radiology Technician', 'Medical Imaging Specialist', 'X-ray Diagnostician'],
      recommended: 'Students interested in diagnostic radiology, medical imaging, and X-ray diagnosis.',
      coreFocus: 'Diagnostic radiology, medical imaging, X-ray diagnosis',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Diagnostic Radiology License, Medical Imaging Certificate',
      higherStudy: 'B.Sc Diagnostic Radiology Lateral Entry',
      commonCareers: 'Diagnostic Radiology Technician, Medical Imaging Specialist, X-ray Diagnostician',
      difficulty: 'Very Hard'
    },
    {
      id: 'interventional-radiology',
      icon: '🏥',
      color: 'from-purple-500 to-purple-600',
      title: 'Interventional Radiology',
      bestFor: ['Interventional Radiology', 'Vascular Imaging', 'Minimally Invasive Procedures', 'Therapeutic Radiology'],
      duration: '3 Years',
      careers: ['Interventional Radiology Technician', 'Vascular Imaging Specialist', 'Therapeutic Radiology Specialist'],
      recommended: 'Students interested in interventional radiology, vascular imaging, and minimally invasive procedures.',
      coreFocus: 'Interventional radiology, vascular imaging, minimally invasive procedures',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Interventional Radiology License, Vascular Imaging Certificate',
      higherStudy: 'B.Sc Interventional Radiology Lateral Entry',
      commonCareers: 'Interventional Radiology Technician, Vascular Imaging Specialist, Therapeutic Radiology Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'nuclear-medicine-imaging',
      icon: '☢',
      color: 'from-green-500 to-green-600',
      title: 'Nuclear Medicine Imaging',
      bestFor: ['Nuclear Medicine', 'Radioisotope Imaging', 'PET Imaging', 'Therapeutic Nuclear Medicine'],
      duration: '3 Years',
      careers: ['Nuclear Medicine Technician', 'Radioisotope Imaging Specialist', 'PET Imaging Specialist'],
      recommended: 'Students interested in nuclear medicine, radioisotope imaging, and PET imaging.',
      coreFocus: 'Nuclear medicine, radioisotope imaging, PET imaging',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Nuclear Medicine License, Radioisotope Imaging Certificate',
      higherStudy: 'B.Sc Nuclear Medicine Lateral Entry',
      commonCareers: 'Nuclear Medicine Technician, Radioisotope Imaging Specialist, PET Imaging Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'mammography',
      icon: '📷',
      color: 'from-pink-500 to-pink-600',
      title: 'Mammography',
      bestFor: ['Breast Imaging', 'Women Health', 'Diagnostic Mammography', 'Screening Radiology'],
      duration: '3 Years',
      careers: ['Mammography Technician', 'Breast Imaging Specialist', 'Women Health Radiology Technician'],
      recommended: 'Students interested in breast imaging, women health, and diagnostic mammography.',
      coreFocus: 'Breast imaging, women health, diagnostic mammography',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Mammography License, Breast Imaging Certificate',
      higherStudy: 'B.Sc Mammography Lateral Entry',
      commonCareers: 'Mammography Technician, Breast Imaging Specialist, Women Health Radiology Technician',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      diagnostic: 'Diagnostic radiology, medical imaging, X-ray diagnosis',
      interventional: 'Interventional radiology, vascular imaging, minimally invasive procedures',
      nuclear: 'Nuclear medicine, radioisotope imaging, PET imaging',
      mammography: 'Breast imaging, women health, diagnostic mammography'
    },
    {
      feature: 'Technical Level',
      diagnostic: 'Very High',
      interventional: 'Very High',
      nuclear: 'Very High',
      mammography: 'High'
    },
    {
      feature: 'Practical Level',
      diagnostic: 'High',
      interventional: 'High',
      nuclear: 'High',
      mammography: 'High'
    },
    {
      feature: 'Accuracy Level',
      diagnostic: 'Very High',
      interventional: 'Very High',
      nuclear: 'Very High',
      mammography: 'Very High'
    },
    {
      feature: 'Industry Demand',
      diagnostic: 'High',
      interventional: 'Medium',
      nuclear: 'Medium',
      mammography: 'High'
    },
    {
      feature: 'Certifications',
      diagnostic: 'Diagnostic Radiology License, Medical Imaging Certificate',
      interventional: 'Interventional Radiology License, Vascular Imaging Certificate',
      nuclear: 'Nuclear Medicine License, Radioisotope Imaging Certificate',
      mammography: 'Mammography License, Breast Imaging Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      diagnostic: 'B.Sc Diagnostic Radiology Lateral Entry',
      interventional: 'B.Sc Interventional Radiology Lateral Entry',
      nuclear: 'B.Sc Nuclear Medicine Lateral Entry',
      mammography: 'B.Sc Mammography Lateral Entry'
    },
    {
      feature: 'Common Careers',
      diagnostic: 'Diagnostic Radiology Technician, Medical Imaging Specialist, X-ray Diagnostician',
      interventional: 'Interventional Radiology Technician, Vascular Imaging Specialist, Therapeutic Radiology Specialist',
      nuclear: 'Nuclear Medicine Technician, Radioisotope Imaging Specialist, PET Imaging Specialist',
      mammography: 'Mammography Technician, Breast Imaging Specialist, Women Health Radiology Technician'
    },
    {
      feature: 'Difficulty Level',
      diagnostic: 'Very Hard',
      interventional: 'Very Hard',
      nuclear: 'Very Hard',
      mammography: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🔬',
      title: 'Choose Diagnostic Radiology If:',
      reasons: [
        'You enjoy diagnostic radiology and medical imaging',
        'You are interested in X-ray diagnosis and radiation therapy',
        'You want diagnostic-based radiology careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🏥',
      title: 'Choose Interventional Radiology If:',
      reasons: [
        'You enjoy interventional radiology and vascular imaging',
        'You are interested in minimally invasive procedures and therapeutic radiology',
        'You want interventional-based radiology careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '☢',
      title: 'Choose Nuclear Medicine Imaging If:',
      reasons: [
        'You enjoy nuclear medicine and radioisotope imaging',
        'You are interested in PET imaging and therapeutic nuclear medicine',
        'You want nuclear medicine-based imaging careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📷',
      title: 'Choose Mammography If:',
      reasons: [
        'You enjoy breast imaging and women health',
        'You are interested in diagnostic mammography and screening radiology',
        'You want mammography-based imaging careers'
      ],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const careers = [
    {
      title: 'Diagnostic Radiology Technician',
      icon: '🔬',
      skills: ['Diagnostic Radiology', 'Medical Imaging', 'X-ray Diagnosis', 'Radiation Therapy'],
      roadmap: 'Diploma → Diagnostic Technician → Senior Technician → Radiology Manager',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Diagnostic Radiology Management, Medical Imaging Leadership'
    },
    {
      title: 'Interventional Radiology Technician',
      icon: '🏥',
      skills: ['Interventional Radiology', 'Vascular Imaging', 'Minimally Invasive Procedures'],
      roadmap: 'Diploma → Interventional Technician → Senior Technician → Interventional Manager',
      salary: '₶7-26 LPA',
      demand: 'Medium',
      futureScope: 'Interventional Radiology Management, Vascular Imaging Leadership'
    },
    {
      title: 'Nuclear Medicine Technician',
      icon: '☢',
      skills: ['Nuclear Medicine', 'Radioisotope Imaging', 'PET Imaging', 'Therapeutic Nuclear Medicine'],
      roadmap: 'Diploma → Nuclear Technician → Senior Technician → Nuclear Medicine Manager',
      salary: '₶7-28 LPA',
      demand: 'Medium',
      futureScope: 'Nuclear Medicine Management, Radioisotope Imaging Leadership'
    },
    {
      title: 'Mammography Technician',
      icon: '📷',
      skills: ['Breast Imaging', 'Women Health', 'Diagnostic Mammography', 'Screening Radiology'],
      roadmap: 'Diploma → Mammography Technician → Senior Technician → Mammography Manager',
      salary: '₶6-22 LPA',
      demand: 'High',
      futureScope: 'Mammography Management, Women Health Imaging Leadership'
    },
    {
      title: 'Medical Imaging Specialist',
      icon: '🔬',
      skills: ['Medical Imaging', 'Diagnostic Imaging', 'Advanced Radiology', 'Radiation Safety'],
      roadmap: 'Diploma → Imaging Specialist → Senior Specialist → Imaging Manager',
      salary: '₶6-24 LPA',
      demand: 'High',
      futureScope: 'Medical Imaging Management, Advanced Radiology Leadership'
    },
    {
      title: 'Vascular Imaging Specialist',
      icon: '🏥',
      skills: ['Vascular Imaging', 'Interventional Radiology', 'Minimally Invasive Procedures', 'Therapeutic Radiology'],
      roadmap: 'Diploma → Vascular Specialist → Senior Specialist → Vascular Imaging Manager',
      salary: '₶7-30 LPA',
      demand: 'Medium',
      futureScope: 'Vascular Imaging Management, Interventional Radiology Leadership'
    },
    {
      title: 'PET Imaging Specialist',
      icon: '☢',
      skills: ['PET Imaging', 'Radioisotope Imaging', 'Nuclear Medicine', 'Advanced Imaging'],
      roadmap: 'Diploma → PET Specialist → Senior Specialist → PET Imaging Manager',
      salary: '₶8-32 LPA',
      demand: 'Medium',
      futureScope: 'PET Imaging Management, Nuclear Medicine Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('imaging-operation-theatre')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🔬</span>
            <h1 className="text-4xl font-bold text-white">Radiology Imaging Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive radiology imaging diploma programs with various specializations for rewarding radiology careers after 10th grade.
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
          <span className="text-white font-medium">Radiology Imaging Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search radiology specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="diagnostic-radiology">Diagnostic Radiology</option>
              <option value="interventional-radiology">Interventional Radiology</option>
              <option value="nuclear-medicine-imaging">Nuclear Medicine Imaging</option>
              <option value="mammography">Mammography</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Radiology Imaging Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Diagnostic</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Interventional</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Nuclear</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Mammography</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.diagnostic}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.interventional}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.nuclear}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.mammography}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Radiology Imaging Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive radiology imaging education with diagnostic training</p>
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
                    <p className="text-white/80 text-sm">Hands-on radiology imaging and diagnostic equipment training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Radiology Imaging License</h4>
                    <p className="text-white/80 text-sm">Radiology Imaging and Diagnostic Equipment certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Diagnostic Radiology</h4>
                    <p className="text-white/80 text-sm">Diagnostic radiology procedures and medical imaging techniques</p>
                  </div>
                </div>
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

export default RadiologyImagingScreen;
