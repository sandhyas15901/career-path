import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface MedicalLaboratoryTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const MedicalLaboratoryTechnologyScreen: React.FC<MedicalLaboratoryTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'clinical-laboratory',
      icon: '🔬',
      color: 'from-blue-500 to-blue-600',
      title: 'Clinical Laboratory',
      bestFor: ['Clinical Testing', 'Patient Diagnostics', 'Hospital Lab Work', 'Medical Analysis'],
      duration: '3 Years',
      careers: ['Clinical Lab Technician', 'Hospital Lab Analyst', 'Medical Laboratory Scientist'],
      recommended: 'Students interested in clinical testing, patient diagnostics, and hospital lab work.',
      coreFocus: 'Clinical testing, patient diagnostics, hospital lab work',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Clinical Lab Technician, Medical Laboratory License',
      higherStudy: 'B.Sc Medical Lab Technology Lateral Entry',
      commonCareers: 'Clinical Lab Technician, Hospital Lab Analyst, Medical Laboratory Scientist',
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
      higherStudy: 'B.Sc Medical Lab Research Lateral Entry',
      commonCareers: 'Research Lab Technician, Medical Researcher, Lab Research Scientist',
      difficulty: 'Very Hard'
    },
    {
      id: 'quality-control-laboratory',
      icon: '✅',
      color: 'from-green-500 to-green-600',
      title: 'Quality Control Laboratory',
      bestFor: ['Quality Testing', 'Lab Quality Assurance', 'Quality Control', 'Lab Standards'],
      duration: '3 Years',
      careers: ['Quality Control Lab Technician', 'Lab QA Analyst', 'Quality Assurance Manager'],
      recommended: 'Students interested in quality testing, lab quality assurance, and quality control.',
      coreFocus: 'Quality testing, lab quality assurance, quality control',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Quality Control Lab Technician, Lab QA License',
      higherStudy: 'B.Sc Lab Quality Control Lateral Entry',
      commonCareers: 'Quality Control Lab Technician, Lab QA Analyst, Quality Assurance Manager',
      difficulty: 'Hard'
    },
    {
      id: 'diagnostic-laboratory',
      icon: '🔍',
      color: 'from-orange-500 to-orange-600',
      title: 'Diagnostic Laboratory',
      bestFor: ['Diagnostic Testing', 'Medical Diagnostics', 'Lab Diagnostics', 'Patient Testing'],
      duration: '3 Years',
      careers: ['Diagnostic Lab Technician', 'Medical Diagnostic Specialist', 'Patient Testing Analyst'],
      recommended: 'Students interested in diagnostic testing, medical diagnostics, and patient Testing.',
      coreFocus: 'Diagnostic testing, medical diagnostics, patient testing',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Diagnostic Lab Technician, Medical Diagnostics License',
      higherStudy: 'B.Sc Diagnostic Laboratory Lateral Entry',
      commonCareers: 'Diagnostic Lab Technician, Medical Diagnostic Specialist, Patient Testing Analyst',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      clinical: 'Clinical testing, patient diagnostics, hospital lab work',
      research: 'Lab research, medical Research, experimental testing',
      quality: 'Quality testing, lab quality assurance, quality control',
      diagnostic: 'Diagnostic testing, medical diagnostics, patient testing'
    },
    {
      feature: 'Technical Level',
      clinical: 'High',
      research: 'Very High',
      quality: 'High',
      diagnostic: 'High'
    },
    {
      feature: 'Practical Level',
      clinical: 'Very High',
      research: 'High',
      quality: 'High',
      diagnostic: 'Very High'
    },
    {
      feature: 'Accuracy Level',
      clinical: 'Very High',
      research: 'Very High',
      quality: 'Very High',
      diagnostic: 'Very High'
    },
    {
      feature: 'Industry Demand',
      clinical: 'Very High',
      research: 'High',
      quality: 'High',
      diagnostic: 'Very High'
    },
    {
      feature: 'Certifications',
      clinical: 'Clinical Lab Technician, Medical Laboratory License',
      research: 'Research Lab Technician, Medical Research License',
      quality: 'Quality Control Lab Technician, Lab QA License',
      diagnostic: 'Diagnostic Lab Technician, Medical Diagnostics License'
    },
    {
      feature: 'Higher Study Opportunities',
      clinical: 'B.Sc Medical Lab Technology Lateral Entry',
      research: 'B.Sc Medical Lab Research Lateral Entry',
      quality: 'B.Sc Lab Quality Control Lateral Entry',
      diagnostic: 'B.Sc Diagnostic Laboratory Lateral Entry'
    },
    {
      feature: 'Common Careers',
      clinical: 'Clinical Lab Technician, Hospital Lab Analyst, Medical Laboratory Scientist',
      research: 'Research Lab Technician, Medical Researcher, Lab Research Scientist',
      quality: 'Quality Control Lab Technician, Lab QA Analyst, Quality Assurance Manager',
      diagnostic: 'Diagnostic Lab Technician, Medical Diagnostic Specialist, Patient Testing Analyst'
    },
    {
      feature: 'Difficulty Level',
      clinical: 'Hard',
      research: 'Very Hard',
      quality: 'Hard',
      diagnostic: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🔬',
      title: 'Choose Clinical Laboratory If:',
      reasons: [
        'You enjoy clinical testing and patient Diagnostics',
        'You are interested in hospital lab work and medical Analysis',
        'You want clinical-based laboratory careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🧪',
      title: 'Choose Research Laboratory If:',
      reasons: [
        'You enjoy lab research and Medical Research',
        'You are interested in experimental testing and Scientific Analysis',
        'You want research-based laboratory careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '✅',
      title: 'Choose Quality Control Laboratory If:',
      reasons: [
        'You enjoy quality testing and Lab Quality Assurance',
        'You are interested in Quality Control and Lab Standards',
        'You want quality control-based Laboratory careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔍',
      title: 'Choose Diagnostic Laboratory If:',
      reasons: [
        'You enjoy diagnostic testing and Medical Diagnostics',
        'You are interested in Patient Testing and Lab Diagnostics',
        'You want diagnostic-based Laboratory careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Clinical Lab Technician',
      icon: '🔬',
      skills: ['Clinical Testing', 'Patient Diagnostics', 'Hospital Lab Work'],
      roadmap: 'Diploma → Clinical Lab Technician → Senior Technician → Lab Manager',
      salary: '₹4-15 LPA',
      demand: 'Very High',
      futureScope: 'Clinical Lab Management, Hospital Laboratory Leadership'
    },
    {
      title: 'Medical Laboratory Scientist',
      icon: '🧪',
      skills: ['Medical Research', 'Lab Analysis', 'Scientific Testing'],
      roadmap: 'Diploma → Lab Scientist → Senior Scientist → Lab Director',
      salary: '₶6-20 LPA',
      demand: 'Very High',
      futureScope: 'Laboratory Research Management, Medical Lab Leadership'
    },
    {
      title: 'Quality Control Lab Technician',
      icon: '✅',
      skills: ['Quality Testing', 'Lab Quality Assurance', 'Quality Control'],
      roadmap: 'Diploma → QA Technician → Senior QA → QA Manager',
      salary: '₵4-16 LPA',
      demand: 'High',
      futureScope: 'Quality Control Management, Lab QA Leadership'
    },
    {
      title: 'Diagnostic Lab Technician',
      icon: '🔍',
      skills: ['Diagnostic Testing', 'Medical Diagnostics', 'Patient Testing'],
      roadmap: 'Diploma → Diagnostic Technician → Senior Technician → Diagnostic Manager',
      salary: '₵5-18 LPA',
      demand: 'Very High',
      futureScope: 'Diagnostic Laboratory Management, Medical Diagnostics Leadership'
    },
    {
      title: 'Research Lab Technician',
      icon: '🧪',
      skills: ['Lab Research', 'Medical Research', 'Experimental Testing'],
      roadmap: 'Diploma → Research Technician → Senior Researcher → Research Manager',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Laboratory Research Management, Medical Research Leadership'
    },
    {
      title: 'Hospital Lab Analyst',
      icon: '🏥',
      skills: ['Hospital Lab Work', 'Medical Analysis', 'Clinical Testing'],
      roadmap: 'Diploma → Lab Analyst → Senior Analyst → Lab Manager',
      salary: '₵4-15 LPA',
      demand: 'Very High',
      futureScope: 'Hospital Laboratory Management, Medical Analysis Leadership'
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
        <button onClick={() => setScreen('lab-diagnostic-technology')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🔬</span>
            <h1 className="text-4xl font-bold text-white">Medical Laboratory Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive medical laboratory technology diploma programs with various specializations for rewarding laboratory careers after 10th grade.
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
          <span className="text-white font-medium">Medical Laboratory Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search lab specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="clinical-laboratory">Clinical Laboratory</option>
              <option value="research-laboratory">Research Laboratory</option>
              <option value="quality-control-laboratory">Quality Control Laboratory</option>
              <option value="diagnostic-laboratory">Diagnostic Laboratory</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Laboratory Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Clinical</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Research</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Quality</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Diagnostic</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.clinical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.research}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.quality}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.diagnostic}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Medical Laboratory Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive medical laboratory technology education with lab training</p>
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
                    <p className="text-white/80 text-sm">Hands-on laboratory and clinical testing training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Medical Laboratory License</h4>
                    <p className="text-white/80 text-sm">Medical Laboratory Technology and Clinical Testing certification</p>
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
                    <p className="text-white/80 text-sm">Medical testing and patient diagnostic procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Laboratory Analysis</h4>
                    <p className="text-white/80 text-sm">Medical laboratory analysis and testing methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quality Control</h4>
                    <p className="text-white/80 text-sm">Laboratory quality assurance and control procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Research Methods</h4>
                    <p className="text-white/80 text-sm">Medical laboratory research and experimental testing methods</p>
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

export default MedicalLaboratoryTechnologyScreen;
