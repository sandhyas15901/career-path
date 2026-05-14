import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface PathologyLaboratoryScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const PathologyLaboratoryScreen: React.FC<PathologyLaboratoryScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'histopathology',
      icon: '🧪',
      color: 'from-purple-500 to-purple-600',
      title: 'Histopathology',
      bestFor: ['Tissue Analysis', 'Disease Diagnosis', 'Microscopic Analysis', 'Pathology Testing'],
      duration: '3 Years',
      careers: ['Histopathology Technician', 'Pathology Lab Analyst', 'Tissue Analysis Specialist'],
      recommended: 'Students interested in tissue analysis, disease diagnosis, and pathology testing.',
      coreFocus: 'Tissue analysis, disease diagnosis, pathology testing',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Histopathology License, Tissue Analysis Certificate',
      higherStudy: 'B.Sc Pathology Lateral Entry',
      commonCareers: 'Histopathology Technician, Pathology Lab Analyst, Tissue Analysis Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'clinical-pathology',
      icon: '🧬',
      color: 'from-blue-500 to-blue-600',
      title: 'Clinical Pathology',
      bestFor: ['Clinical Testing', 'Disease Testing', 'Patient Diagnosis', 'Lab Analysis'],
      duration: '3 Years',
      careers: ['Clinical Pathology Technician', 'Disease Testing Specialist', 'Clinical Lab Analyst'],
      recommended: 'Students interested in clinical testing, disease testing, and patient Diagnosis.',
      coreFocus: 'Clinical testing, disease testing, patient diagnosis',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Clinical Pathology License, Disease Testing Certificate',
      higherStudy: 'B.Sc Clinical Pathology Lateral Entry',
      commonCareers: 'Clinical Pathology Technician, Disease Testing Specialist, Clinical Lab Analyst',
      difficulty: 'Very Hard'
    },
    {
      id: 'molecular-pathology',
      icon: '🧬',
      color: 'from-green-500 to-green-600',
      title: 'Molecular Pathology',
      bestFor: ['Molecular Testing', 'Genetic Analysis', 'DNA Testing', 'Molecular Diagnosis'],
      duration: '3 Years',
      careers: ['Molecular Pathology Technician', 'Genetic Analysis Specialist', 'Molecular Lab Analyst'],
      recommended: 'Students interested in molecular testing, genetic analysis, and DNA Testing.',
      coreFocus: 'Molecular testing, genetic analysis, DNA testing',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Molecular Pathology License, Genetic Analysis Certificate',
      higherStudy: 'B.Sc Molecular Pathology Lateral Entry',
      commonCareers: 'Molecular Pathology Technician, Genetic Analysis Specialist, Molecular Lab Analyst',
      difficulty: 'Very Hard'
    },
    {
      id: 'forensic-pathology',
      icon: '🔍',
      color: 'from-orange-500 to-orange-600',
      title: 'Forensic Pathology',
      bestFor: ['Forensic Testing', 'Legal Analysis', 'Crime Lab Work', 'Forensic Investigation'],
      duration: '3 Years',
      careers: ['Forensic Pathology Technician', 'Crime Lab Analyst', 'Forensic Investigation Specialist'],
      recommended: 'Students interested in forensic testing, legal analysis, and crime lab work.',
      coreFocus: 'Forensic testing, legal analysis, crime lab work',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Forensic Pathology License, Crime Lab Certificate',
      higherStudy: 'B.Sc Forensic Pathology Lateral Entry',
      commonCareers: 'Forensic Pathology Technician, Crime Lab Analyst, Forensic Investigation Specialist',
      difficulty: 'Very Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      histopathology: 'Tissue analysis, disease diagnosis, pathology testing',
      clinical: 'Clinical testing, disease testing, patient diagnosis',
      molecular: 'Molecular testing, genetic analysis, DNA testing',
      forensic: 'Forensic testing, legal analysis, crime lab work'
    },
    {
      feature: 'Technical Level',
      histopathology: 'Very High',
      clinical: 'Very High',
      molecular: 'Very High',
      forensic: 'Very High'
    },
    {
      feature: 'Practical Level',
      histopathology: 'High',
      clinical: 'High',
      molecular: 'High',
      forensic: 'High'
    },
    {
      feature: 'Accuracy Level',
      histopathology: 'Very High',
      clinical: 'Very High',
      molecular: 'Very High',
      forensic: 'Very High'
    },
    {
      feature: 'Industry Demand',
      histopathology: 'High',
      clinical: 'Very High',
      molecular: 'High',
      forensic: 'Medium'
    },
    {
      feature: 'Certifications',
      histopathology: 'Histopathology License, Tissue Analysis Certificate',
      clinical: 'Clinical Pathology License, Disease Testing Certificate',
      molecular: 'Molecular Pathology License, Genetic Analysis Certificate',
      forensic: 'Forensic Pathology License, Crime Lab Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      histopathology: 'B.Sc Pathology Lateral Entry',
      clinical: 'B.Sc Clinical Pathology Lateral Entry',
      molecular: 'B.Sc Molecular Pathology Lateral Entry',
      forensic: 'B.Sc Forensic Pathology Lateral Entry'
    },
    {
      feature: 'Common Careers',
      histopathology: 'Histopathology Technician, Pathology Lab Analyst, Tissue Analysis Specialist',
      clinical: 'Clinical Pathology Technician, Disease Testing Specialist, Clinical Lab Analyst',
      molecular: 'Molecular Pathology Technician, Genetic Analysis Specialist, Molecular Lab Analyst',
      forensic: 'Forensic Pathology Technician, Crime Lab Analyst, Forensic Investigation Specialist'
    },
    {
      feature: 'Difficulty Level',
      histopathology: 'Very Hard',
      clinical: 'Very Hard',
      molecular: 'Very Hard',
      forensic: 'Very Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🧪',
      title: 'Choose Histopathology If:',
      reasons: [
        'You enjoy tissue analysis and disease diagnosis',
        'You are interested in microscopic analysis and pathology testing',
        'You want tissue-based pathology careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🧬',
      title: 'Choose Clinical Pathology If:',
      reasons: [
        'You enjoy clinical testing and disease testing',
        'You are interested in patient diagnosis and lab analysis',
        'You want clinical-based pathology careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🧬',
      title: 'Choose Molecular Pathology If:',
      reasons: [
        'You enjoy molecular testing and genetic analysis',
        'You are interested in DNA testing and molecular diagnosis',
        'You want molecular-based pathology careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔍',
      title: 'Choose Forensic Pathology If:',
      reasons: [
        'You enjoy forensic testing and legal analysis',
        'You are interested in crime lab work and forensic investigation',
        'You want forensic-based pathology careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Histopathology Technician',
      icon: '🧪',
      skills: ['Tissue Analysis', 'Microscopic Analysis', 'Pathology Testing'],
      roadmap: 'Diploma → Histopathology Technician → Senior Technician → Pathology Manager',
      salary: '₹4-16 LPA',
      demand: 'High',
      futureScope: 'Pathology Management, Tissue Analysis Leadership'
    },
    {
      title: 'Clinical Pathology Technician',
      icon: '🧬',
      skills: ['Clinical Testing', 'Disease Testing', 'Patient Diagnosis'],
      roadmap: 'Diploma → Clinical Pathology Technician → Senior Technician → Clinical Pathology Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Clinical Pathology Management, Disease Testing Leadership'
    },
    {
      title: 'Molecular Pathology Technician',
      icon: '🧬',
      skills: ['Molecular Testing', 'Genetic Analysis', 'DNA Testing'],
      roadmap: 'Diploma → Molecular Pathology Technician → Senior Technician → Molecular Pathology Manager',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Molecular Pathology Management, Genetic Analysis Leadership'
    },
    {
      title: 'Forensic Pathology Technician',
      icon: '🔍',
      skills: ['Forensic Testing', 'Legal Analysis', 'Crime Lab Work'],
      roadmap: 'Diploma → Forensic Pathology Technician → Senior Technician → Forensic Pathology Manager',
      salary: '₵4-15 LPA',
      demand: 'Medium',
      futureScope: 'Forensic Pathology Management, Crime Lab Leadership'
    },
    {
      title: 'Pathology Lab Analyst',
      icon: '🧪',
      skills: ['Pathology Analysis', 'Disease Diagnosis', 'Lab Testing'],
      roadmap: 'Diploma → Pathology Analyst → Senior Analyst → Pathology Manager',
      salary: '₵4-16 LPA',
      demand: 'High',
      futureScope: 'Pathology Management, Lab Analysis Leadership'
    },
    {
      title: 'Tissue Analysis Specialist',
      icon: '🧪',
      skills: ['Tissue Analysis', 'Microscopic Analysis', 'Disease Detection'],
      roadmap: 'Diploma → Tissue Specialist → Senior Specialist → Pathology Director',
      salary: '₶6-22 LPA',
      demand: 'High',
      futureScope: 'Tissue Analysis Management, Pathology Leadership'
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
        <button onClick={() => setScreen('lab-diagnostic-technology')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🧪</span>
            <h1 className="text-4xl font-bold text-white">Pathology Laboratory Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive pathology laboratory diploma programs with various specializations for rewarding pathology careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('lab-diagnostic-technology')}>Lab & Diagnostic Technology</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Pathology Laboratory Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search pathology specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="histopathology">Histopathology</option>
              <option value="clinical-pathology">Clinical Pathology</option>
              <option value="molecular-pathology">Molecular Pathology</option>
              <option value="forensic-pathology">Forensic Pathology</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pathology Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Histopathology</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Clinical</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Molecular</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Forensic</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.histopathology}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.clinical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.molecular}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.forensic}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pathology Laboratory Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive pathology laboratory education with tissue analysis training</p>
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
                    <p className="text-white/80 text-sm">Hands-on pathology laboratory and tissue analysis training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Pathology Laboratory License</h4>
                    <p className="text-white/80 text-sm">Pathology Laboratory and Tissue Analysis certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Tissue Analysis</h4>
                    <p className="text-white/80 text-sm">Tissue processing and microscopic analysis techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Disease Diagnosis</h4>
                    <p className="text-white/80 text-sm">Pathological testing and disease identification methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Microscopic Analysis</h4>
                    <p className="text-white/80 text-sm">Microscopic examination and cellular analysis techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pathology Testing</h4>
                    <p className="text-white/80 text-sm">Laboratory testing and pathology analysis procedures</p>
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

export default PathologyLaboratoryScreen;
