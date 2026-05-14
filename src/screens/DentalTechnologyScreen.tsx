import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface DentalTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const DentalTechnologyScreen: React.FC<DentalTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'dental-hygiene',
      icon: '🦷',
      color: 'from-indigo-500 to-indigo-600',
      title: 'Dental Hygiene',
      bestFor: ['Oral Health', 'Dental Cleaning', 'Patient Education', 'Preventive Care'],
      duration: '3 Years',
      careers: ['Dental Hygienist', 'Oral Health Educator', 'Preventive Care Specialist'],
      recommended: 'Students interested in oral health, dental cleaning, and preventive care.',
      coreFocus: 'Oral health, dental cleaning, preventive care',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Dental Hygiene License, Oral Health Certificate',
      higherStudy: 'B.Sc Dental Hygiene Lateral Entry',
      commonCareers: 'Dental Hygienist, Oral Health Educator, Preventive Care Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'dental-laboratory',
      icon: '🧪',
      color: 'from-purple-500 to-purple-600',
      title: 'Dental Laboratory',
      bestFor: ['Dental Lab Work', 'Dental Materials', 'Dental Testing', 'Lab Analysis'],
      duration: '3 Years',
      careers: ['Dental Lab Technician', 'Dental Materials Specialist', 'Lab Analyst'],
      recommended: 'Students interested in dental lab work, dental materials, and dental testing.',
      coreFocus: 'Dental lab work, dental materials, dental testing',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Dental Laboratory License, Dental Materials Certificate',
      higherStudy: 'B.Sc Dental Laboratory Lateral Entry',
      commonCareers: 'Dental Lab Technician, Dental Materials Specialist, Lab Analyst',
      difficulty: 'Hard'
    },
    {
      id: 'dental-radiography',
      icon: '📷',
      color: 'from-blue-500 to-blue-600',
      title: 'Dental Radiography',
      bestFor: ['Dental X-ray', 'Oral Radiology', 'Dental Imaging', 'Radiation Safety'],
      duration: '3 Years',
      careers: ['Dental Radiographer', 'Oral Radiology Technician', 'Dental Imaging Specialist'],
      recommended: 'Students interested in dental X-ray, oral radiology, and dental imaging.',
      coreFocus: 'Dental X-ray, oral radiology, dental imaging',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Dental Radiography License, Oral Radiology Certificate',
      higherStudy: 'B.Sc Dental Radiography Lateral Entry',
      commonCareers: 'Dental Radiographer, Oral Radiology Technician, Dental Imaging Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'dental-assisting',
      icon: '👨',
      color: 'from-pink-500 to-pink-600',
      title: 'Dental Assisting',
      bestFor: ['Dental Assistance', 'Chairside Assisting', 'Patient Care', 'Office Management'],
      duration: '3 Years',
      careers: ['Dental Assistant', 'Chairside Assistant', 'Dental Office Manager'],
      recommended: 'Students interested in dental assistance, chairside assisting, and office management.',
      coreFocus: 'Dental assistance, chairside assisting, office management',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Dental Assisting License, Chairside Assisting Certificate',
      higherStudy: 'B.Sc Dental Assisting Lateral Entry',
      commonCareers: 'Dental Assistant, Chairside Assistant, Dental Office Manager',
      difficulty: 'Medium'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      hygiene: 'Oral health, dental cleaning, preventive care',
      laboratory: 'Dental lab work, dental materials, dental testing',
      radiography: 'Dental X-ray, oral radiology, dental imaging',
      assisting: 'Dental assistance, chairside assisting, office management'
    },
    {
      feature: 'Technical Level',
      hygiene: 'Medium',
      laboratory: 'High',
      radiography: 'High',
      assisting: 'Medium'
    },
    {
      feature: 'Practical Level',
      hygiene: 'Very High',
      laboratory: 'High',
      radiography: 'High',
      assisting: 'Very High'
    },
    {
      feature: 'Accuracy Level',
      hygiene: 'High',
      laboratory: 'Very High',
      radiography: 'Very High',
      assisting: 'High'
    },
    {
      feature: 'Industry Demand',
      hygiene: 'High',
      laboratory: 'High',
      radiography: 'High',
      assisting: 'Very High'
    },
    {
      feature: 'Certifications',
      hygiene: 'Dental Hygiene License, Oral Health Certificate',
      laboratory: 'Dental Laboratory License, Dental Materials Certificate',
      radiography: 'Dental Radiography License, Oral Radiology Certificate',
      assisting: 'Dental Assisting License, Chairside Assisting Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      hygiene: 'B.Sc Dental Hygiene Lateral Entry',
      laboratory: 'B.Sc Dental Laboratory Lateral Entry',
      radiography: 'B.Sc Dental Radiography Lateral Entry',
      assisting: 'B.Sc Dental Assisting Lateral Entry'
    },
    {
      feature: 'Common Careers',
      hygiene: 'Dental Hygienist, Oral Health Educator, Preventive Care Specialist',
      laboratory: 'Dental Lab Technician, Dental Materials Specialist, Lab Analyst',
      radiography: 'Dental Radiographer, Oral Radiology Technician, Dental Imaging Specialist',
      assisting: 'Dental Assistant, Chairside Assistant, Dental Office Manager'
    },
    {
      feature: 'Difficulty Level',
      hygiene: 'Medium',
      laboratory: 'Hard',
      radiography: 'Hard',
      assisting: 'Medium'
    }
  ];

  const chooseOptions = [
    {
      icon: '🦷',
      title: 'Choose Dental Hygiene If:',
      reasons: [
        'You enjoy oral health and dental cleaning',
        'You are interested in patient education and preventive care',
        'You want dental hygiene-based careers'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: '🧪',
      title: 'Choose Dental Laboratory If:',
      reasons: [
        'You enjoy dental lab work and dental materials',
        'You are interested in dental testing and lab analysis',
        'You want dental laboratory-based careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📷',
      title: 'Choose Dental Radiography If:',
      reasons: [
        'You enjoy dental X-ray and oral radiology',
        'You are interested in dental imaging and radiation safety',
        'You want dental radiography-based careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👨',
      title: 'Choose Dental Assisting If:',
      reasons: [
        'You enjoy dental assistance and chairside assisting',
        'You are interested in patient care and office management',
        'You want dental assisting-based careers'
      ],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const careers = [
    {
      title: 'Dental Hygienist',
      icon: '🦷',
      skills: ['Oral Health', 'Dental Cleaning', 'Patient Education', 'Preventive Care'],
      roadmap: 'Diploma → Dental Hygienist → Senior Hygienist → Dental Hygiene Manager',
      salary: '₶3-12 LPA',
      demand: 'High',
      futureScope: 'Dental Hygiene Management, Oral Health Leadership'
    },
    {
      title: 'Dental Lab Technician',
      icon: '🧪',
      skills: ['Dental Lab Work', 'Dental Materials', 'Dental Testing', 'Lab Analysis'],
      roadmap: 'Diploma → Dental Lab Technician → Senior Technician → Lab Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Dental Laboratory Management, Dental Materials Leadership'
    },
    {
      title: 'Dental Radiographer',
      icon: '📷',
      skills: ['Dental X-ray', 'Oral Radiology', 'Dental Imaging', 'Radiation Safety'],
      roadmap: 'Diploma → Dental Radiographer → Senior Radiographer → Radiology Manager',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Dental Radiography Management, Oral Radiology Leadership'
    },
    {
      title: 'Dental Assistant',
      icon: '👨',
      skills: ['Dental Assistance', 'Chairside Assisting', 'Patient Care', 'Office Management'],
      roadmap: 'Diploma → Dental Assistant → Senior Assistant → Dental Office Manager',
      salary: '₶3-12 LPA',
      demand: 'Very High',
      futureScope: 'Dental Assisting Management, Chairside Assisting Leadership'
    },
    {
      title: 'Oral Health Educator',
      icon: '🦷',
      skills: ['Oral Health', 'Patient Education', 'Preventive Care', 'Community Outreach'],
      roadmap: 'Diploma → Oral Health Educator → Senior Educator → Health Education Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Oral Health Management, Patient Education Leadership'
    },
    {
      title: 'Dental Materials Specialist',
      icon: '🧪',
      skills: ['Dental Materials', 'Dental Lab Work', 'Materials Testing', 'Quality Control'],
      roadmap: 'Diploma → Materials Specialist → Senior Specialist → Materials Manager',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Dental Materials Management, Quality Control Leadership'
    },
    {
      title: 'Preventive Care Specialist',
      icon: '🦷',
      skills: ['Preventive Care', 'Oral Health', 'Patient Education', 'Community Health'],
      roadmap: 'Diploma → Preventive Specialist → Senior Specialist → Preventive Care Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Preventive Care Management, Oral Health Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('dental-eye-rehabilitation')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🦷</span>
            <h1 className="text-4xl font-bold text-white">Dental Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive dental technology diploma programs with various specializations for rewarding dental careers after 10th grade.
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
          <span className="text-white font-medium">Dental Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search dental specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="dental-hygiene">Dental Hygiene</option>
              <option value="dental-laboratory">Dental Laboratory</option>
              <option value="dental-radiography">Dental Radiography</option>
              <option value="dental-assisting">Dental Assisting</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Dental Technology Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Dental Hygiene</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Dental Laboratory</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Dental Radiography</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Dental Assisting</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.hygiene}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.laboratory}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.radiography}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.assisting}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Dental Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive dental technology education with hands-on training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Biology and Chemistry preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on dental laboratory and clinical training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Dental Technology License</h4>
                    <p className="text-white/80 text-sm">Dental Technology and Laboratory certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Dental Procedures</h4>
                    <p className="text-white/80 text-sm">Dental procedures and oral health care techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dental Laboratory Work</h4>
                    <p className="text-white/80 text-sm">Dental laboratory procedures and materials testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Patient Care</h4>
                    <p className="text-white/80 text-sm">Patient care procedures and oral health education</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dental Materials</h4>
                    <p className="text-white/80 text-sm">Dental materials knowledge and quality control procedures</p>
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

export default DentalTechnologyScreen;
