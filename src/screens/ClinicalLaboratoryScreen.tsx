import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface ClinicalLaboratoryScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const ClinicalLaboratoryScreen: React.FC<ClinicalLaboratoryScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'hospital-laboratory',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600',
      title: 'Hospital Laboratory',
      bestFor: ['Hospital Lab Work', 'Clinical Testing', 'Patient Diagnostics', 'Medical Analysis'],
      duration: '3 Years',
      careers: ['Hospital Lab Technician', 'Clinical Lab Analyst', 'Patient Diagnostic Specialist'],
      recommended: 'Students interested in hospital lab work, clinical testing, and patient diagnostics.',
      coreFocus: 'Hospital lab work, clinical testing, patient diagnostics',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Hospital Lab Technician, Clinical Testing Certificate',
      higherStudy: 'B.Sc Clinical Laboratory Lateral Entry',
      commonCareers: 'Hospital Lab Technician, Clinical Lab Analyst, Patient Diagnostic Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'research-laboratory',
      icon: '🧪',
      color: 'from-purple-500 to-purple-600',
      title: 'Research Laboratory',
      bestFor: ['Lab Research', 'Medical Research', 'Experimental Testing', 'Scientific Analysis'],
      duration: '3 Years',
      careers: ['Research Lab Technician', 'Medical Researcher', 'Lab Research Scientist'],
      recommended: 'Students interested in lab research, medical research, and experimental testing.',
      coreFocus: 'Lab research, medical research, experimental testing',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Research Lab Technician, Medical Research License',
      higherStudy: 'B.Sc Research Laboratory Lateral Entry',
      commonCareers: 'Research Lab Technician, Medical Researcher, Lab Research Scientist',
      difficulty: 'Very Hard'
    },
    {
      id: 'diagnostic-laboratory',
      icon: '🔬',
      color: 'from-green-500 to-green-600',
      title: 'Diagnostic Laboratory',
      bestFor: ['Diagnostic Testing', 'Patient Testing', 'Medical Diagnostics', 'Lab Diagnostics'],
      duration: '3 Years',
      careers: ['Diagnostic Lab Technician', 'Patient Testing Analyst', 'Medical Diagnostic Specialist'],
      recommended: 'Students interested in diagnostic testing, patient testing, and medical diagnostics.',
      coreFocus: 'Diagnostic testing, patient testing, medical diagnostics',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Diagnostic Lab Technician, Medical Testing Certificate',
      higherStudy: 'B.Sc Diagnostic Laboratory Lateral Entry',
      commonCareers: 'Diagnostic Lab Technician, Patient Testing Analyst, Medical Diagnostic Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'reference-laboratory',
      icon: '📚',
      color: 'from-blue-500 to-blue-600',
      title: 'Reference Laboratory',
      bestFor: ['Reference Testing', 'Quality Control', 'Standard Testing', 'Lab Standards'],
      duration: '3 Years',
      careers: ['Reference Lab Technician', 'Quality Control Analyst', 'Lab Standards Specialist'],
      recommended: 'Students interested in reference testing, quality control, and lab standards.',
      coreFocus: 'Reference testing, quality control, lab standards',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Reference Lab Technician, Quality Control Certificate',
      higherStudy: 'B.Sc Reference Laboratory Lateral Entry',
      commonCareers: 'Reference Lab Technician, Quality Control Analyst, Lab Standards Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      hospital: 'Hospital lab work, clinical testing, patient diagnostics',
      research: 'Lab research, medical research, experimental testing',
      diagnostic: 'Diagnostic testing, patient testing, medical diagnostics',
      reference: 'Reference testing, quality control, lab standards'
    },
    {
      feature: 'Technical Level',
      hospital: 'High',
      research: 'Very High',
      diagnostic: 'High',
      reference: 'High'
    },
    {
      feature: 'Practical Level',
      hospital: 'Very High',
      research: 'High',
      diagnostic: 'Very High',
      reference: 'High'
    },
    {
      feature: 'Accuracy Level',
      hospital: 'Very High',
      research: 'Very High',
      diagnostic: 'Very High',
      reference: 'Very High'
    },
    {
      feature: 'Industry Demand',
      hospital: 'Very High',
      research: 'High',
      diagnostic: 'Very High',
      reference: 'High'
    },
    {
      feature: 'Certifications',
      hospital: 'Hospital Lab Technician, Clinical Testing Certificate',
      research: 'Research Lab Technician, Medical Research License',
      diagnostic: 'Diagnostic Lab Technician, Medical Testing Certificate',
      reference: 'Reference Lab Technician, Quality Control Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      hospital: 'B.Sc Clinical Laboratory Lateral Entry',
      research: 'B.Sc Research Laboratory Lateral Entry',
      diagnostic: 'B.Sc Diagnostic Laboratory Lateral Entry',
      reference: 'B.Sc Reference Laboratory Lateral Entry'
    },
    {
      feature: 'Common Careers',
      hospital: 'Hospital Lab Technician, Clinical Lab Analyst, Patient Diagnostic Specialist',
      research: 'Research Lab Technician, Medical Researcher, Lab Research Scientist',
      diagnostic: 'Diagnostic Lab Technician, Patient Testing Analyst, Medical Diagnostic Specialist',
      reference: 'Reference Lab Technician, Quality Control Analyst, Lab Standards Specialist'
    },
    {
      feature: 'Difficulty Level',
      hospital: 'Hard',
      research: 'Very Hard',
      diagnostic: 'Hard',
      reference: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🏥',
      title: 'Choose Hospital Laboratory If:',
      reasons: [
        'You enjoy hospital lab work and clinical testing',
        'You are interested in patient diagnostics and medical analysis',
        'You want hospital-based laboratory careers'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🧪',
      title: 'Choose Research Laboratory If:',
      reasons: [
        'You enjoy lab research and medical Research',
        'You are interested in experimental testing and scientific analysis',
        'You want research-based laboratory careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🔬',
      title: 'Choose Diagnostic Laboratory If:',
      reasons: [
        'You enjoy diagnostic testing and patient testing',
        'You are interested in medical diagnostics and patient testing',
        'You want diagnostic-based laboratory careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📚',
      title: 'Choose Reference Laboratory If:',
      reasons: [
        'You enjoy reference testing and quality control',
        'You are interested in lab standards and quality assurance',
        'You want quality control-based laboratory careers'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const careers = [
    {
      title: 'Hospital Lab Technician',
      icon: '🏥',
      skills: ['Hospital Lab Work', 'Clinical Testing', 'Patient Diagnostics'],
      roadmap: 'Diploma → Hospital Lab Technician → Senior Technician → Lab Manager',
      salary: '₹4-15 LPA',
      demand: 'Very High',
      futureScope: 'Hospital Laboratory Management, Clinical Testing Leadership'
    },
    {
      title: 'Research Lab Technician',
      icon: '🧪',
      skills: ['Lab Research', 'Medical Research', 'Experimental Testing'],
      roadmap: 'Diploma → Research Technician → Senior Technician → Research Manager',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Research Laboratory Management, Medical Research Leadership'
    },
    {
      title: 'Diagnostic Lab Technician',
      icon: '🔬',
      skills: ['Diagnostic Testing', 'Patient Testing', 'Medical Diagnostics'],
      roadmap: 'Diploma → Diagnostic Technician → Senior Technician → Diagnostic Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Diagnostic Laboratory Management, Medical Diagnostics Leadership'
    },
    {
      title: 'Clinical Lab Analyst',
      icon: '🏥',
      skills: ['Clinical Testing', 'Patient Diagnostics', 'Medical Analysis'],
      roadmap: 'Diploma → Clinical Lab Analyst → Senior Analyst → Clinical Lab Manager',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Clinical Laboratory Management, Medical Analysis Leadership'
    },
    {
      title: 'Medical Researcher',
      icon: '🧪',
      skills: ['Medical Research', 'Lab Analysis', 'Scientific Testing'],
      roadmap: 'Diploma → Medical Researcher → Senior Researcher → Research Director',
      salary: '₶6-24 LPA',
      demand: 'High',
      futureScope: 'Research Laboratory Management, Medical Research Leadership'
    },
    {
      title: 'Quality Control Analyst',
      icon: '📚',
      skills: ['Quality Control', 'Lab Standards', 'Reference Testing'],
      roadmap: 'Diploma → Quality Control Analyst → Senior Analyst → Quality Control Manager',
      salary: '₵4-16 LPA',
      demand: 'High',
      futureScope: 'Quality Control Management, Lab Standards Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('lab-diagnostic-technology')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🔬</span>
            <h1 className="text-4xl font-bold text-white">Clinical Laboratory Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive clinical laboratory diploma programs with various specializations for rewarding laboratory careers after 10th grade.
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
          <span className="text-white font-medium">Clinical Laboratory Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search clinical laboratory specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="hospital-laboratory">Hospital Laboratory</option>
              <option value="research-laboratory">Research Laboratory</option>
              <option value="diagnostic-laboratory">Diagnostic Laboratory</option>
              <option value="reference-laboratory">Reference Laboratory</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Clinical Laboratory Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Hospital</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Research</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Diagnostic</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Reference</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.hospital}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.research}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.diagnostic}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.reference}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Clinical Laboratory Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive clinical laboratory education with hospital lab training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Chemistry and Biology preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on clinical laboratory and hospital lab training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Clinical Laboratory License</h4>
                    <p className="text-white/80 text-sm">Clinical Laboratory and Medical Testing certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Clinical Testing</h4>
                    <p className="text-white/80 text-sm">Clinical testing procedures and patient diagnostic methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Patient Diagnostics</h4>
                    <p className="text-white/80 text-sm">Patient testing and medical diagnostic procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Medical Analysis</h4>
                    <p className="text-white/80 text-sm">Medical laboratory analysis and clinical testing methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Hospital Lab Work</h4>
                    <p className="text-white/80 text-sm">Hospital laboratory operations and clinical testing support</p>
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

export default ClinicalLaboratoryScreen;
