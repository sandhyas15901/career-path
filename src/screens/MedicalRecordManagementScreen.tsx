import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface MedicalRecordManagementScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const MedicalRecordManagementScreen: React.FC<MedicalRecordManagementScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'health-information-management',
      icon: '💻',
      color: 'from-purple-500 to-purple-600',
      title: 'Health Information Management',
      bestFor: ['Health Information', 'Data Management', 'Health Records', 'Healthcare IT'],
      duration: '3 Years',
      careers: ['Health Information Manager', 'Data Management Specialist', 'Health Records Technician'],
      recommended: 'Students interested in health information, data management, and health records.',
      coreFocus: 'Health information, data Management, health records',
      technicalLevel: 'High',
      practicalLevel: 'Medium',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Health Information Management Certificate, Data Management License',
      higherStudy: 'B.Sc Health Information Management Lateral Entry',
      commonCareers: 'Health Information Manager, Data Management Specialist, Health Records Technician',
      difficulty: 'Hard'
    },
    {
      id: 'medical-coding',
      icon: '🔢',
      color: 'from-blue-500 to-blue-600',
      title: 'Medical Coding',
      bestFor: ['Medical Coding', 'Health Coding', 'Billing Coding', 'Medical Documentation'],
      duration: '3 Years',
      careers: ['Medical Coder', 'Health Coding Specialist', 'Billing Coding Technician'],
      recommended: 'Students interested in medical coding, health coding, and billing coding.',
      coreFocus: 'Medical coding, health coding, billing coding',
      technicalLevel: 'High',
      practicalLevel: 'Medium',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Medical Coding Certificate, Health Coding License',
      higherStudy: 'B.Sc Medical Coding Lateral Entry',
      commonCareers: 'Medical Coder, Health Coding Specialist, Billing Coding Technician',
      difficulty: 'Hard'
    },
    {
      id: 'health-data-analysis',
      icon: '📊',
      color: 'from-green-500 to-green-600',
      title: 'Health Data Analysis',
      bestFor: ['Health Data Analysis', 'Medical Statistics', 'Health Analytics', 'Data Science'],
      duration: '3 Years',
      careers: ['Health Data Analyst', 'Medical Statistics Specialist', 'Health Analytics Manager'],
      recommended: 'Students interested in health data analysis, medical statistics, and health analytics.',
      coreFocus: 'Health data analysis, medical statistics, health analytics',
      technicalLevel: 'Very High',
      practicalLevel: 'Medium',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Health Data Analysis Certificate, Medical Statistics License',
      higherStudy: 'B.Sc Health Data Analysis Lateral Entry',
      commonCareers: 'Health Data Analyst, Medical Statistics Specialist, Health Analytics Manager',
      difficulty: 'Very Hard'
    },
    {
      id: 'health-informatics',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600',
      title: 'Health Informatics',
      bestFor: ['Health Informatics', 'Medical IT', 'Health Systems', 'Healthcare Technology'],
      duration: '3 Years',
      careers: ['Health Informatics Specialist', 'Medical IT Manager', 'Health Systems Analyst'],
      recommended: 'Students interested in health informatics, medical IT, and health systems.',
      coreFocus: 'Health informatics, medical IT, health systems',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Health Informatics Certificate, Medical IT License',
      higherStudy: 'B.Sc Health Informatics Lateral Entry',
      commonCareers: 'Health Informatics Specialist, Medical IT Manager, Health Systems Analyst',
      difficulty: 'Very Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      him: 'Health information, data Management, health records',
      coding: 'Medical coding, health coding, billing coding',
      analysis: 'Health data analysis, medical statistics, health analytics',
      informatics: 'Health informatics, medical IT, health systems'
    },
    {
      feature: 'Technical Level',
      him: 'High',
      coding: 'High',
      analysis: 'Very High',
      informatics: 'Very High'
    },
    {
      feature: 'Practical Level',
      him: 'Medium',
      coding: 'Medium',
      analysis: 'Medium',
      informatics: 'High'
    },
    {
      feature: 'Accuracy Level',
      him: 'Very High',
      coding: 'Very High',
      analysis: 'Very High',
      informatics: 'High'
    },
    {
      feature: 'Industry Demand',
      him: 'High',
      coding: 'Very High',
      analysis: 'High',
      informatics: 'Very High'
    },
    {
      feature: 'Certifications',
      him: 'Health Information Management Certificate, Data Management License',
      coding: 'Medical Coding Certificate, Health Coding License',
      analysis: 'Health Data Analysis Certificate, Medical Statistics License',
      informatics: 'Health Informatics Certificate, Medical IT License'
    },
    {
      feature: 'Higher Study Opportunities',
      him: 'B.Sc Health Information Management Lateral Entry',
      coding: 'B.Sc Medical Coding Lateral Entry',
      analysis: 'B.Sc Health Data Analysis Lateral Entry',
      informatics: 'B.Sc Health Informatics Lateral Entry'
    },
    {
      feature: 'Common Careers',
      him: 'Health Information Manager, Data Management Specialist, Health Records Technician',
      coding: 'Medical Coder, Health Coding Specialist, Billing Coding Technician',
      analysis: 'Health Data Analyst, Medical Statistics Specialist, Health Analytics Manager',
      informatics: 'Health Informatics Specialist, Medical IT Manager, Health Systems Analyst'
    },
    {
      feature: 'Difficulty Level',
      him: 'Hard',
      coding: 'Hard',
      analysis: 'Very Hard',
      informatics: 'Very Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '💻',
      title: 'Choose Health Information Management If:',
      reasons: [
        'You enjoy health information and data Management',
        'You are interested in health records and healthcare IT',
        'You want health information-based medical careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🔢',
      title: 'Choose Medical Coding If:',
      reasons: [
        'You enjoy medical coding and health coding',
        'You are interested in billing coding and medical documentation',
        'You want medical coding-based careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📊',
      title: 'Choose Health Data Analysis If:',
      reasons: [
        'You enjoy health data analysis and medical statistics',
        'You are interested in health analytics and data Science',
        'You want health data analysis-based careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏥',
      title: 'Choose Health Informatics If:',
      reasons: [
        'You enjoy health informatics and medical IT',
        'You are interested in health systems and healthcare Technology',
        'You want health informatics-based careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Health Information Manager',
      icon: '💻',
      skills: ['Health Information', 'Data Management', 'Health Records', 'Healthcare IT'],
      roadmap: 'Diploma → Health Information Manager → Senior Manager → Health Information Director',
      salary: '₶6-22 LPA',
      demand: 'High',
      futureScope: 'Health Information Management Leadership, Data Management Director'
    },
    {
      title: 'Medical Coder',
      icon: '🔢',
      skills: ['Medical Coding', 'Health Coding', 'Billing Coding', 'Medical Documentation'],
      roadmap: 'Diploma → Medical Coder → Senior Coder → Medical Coding Manager',
      salary: '₶5-20 LPA',
      demand: 'Very High',
      futureScope: 'Medical Coding Management, Health Coding Leadership'
    },
    {
      title: 'Health Data Analyst',
      icon: '📊',
      skills: ['Health Data Analysis', 'Medical Statistics', 'Health Analytics', 'Data Science'],
      roadmap: 'Diploma → Health Data Analyst → Senior Analyst → Health Data Director',
      salary: '₶7-26 LPA',
      demand: 'High',
      futureScope: 'Health Data Analysis Management, Medical Statistics Leadership'
    },
    {
      title: 'Health Informatics Specialist',
      icon: '🏥',
      skills: ['Health Informatics', 'Medical IT', 'Health Systems', 'Healthcare Technology'],
      roadmap: 'Diploma → Health Informatics Specialist → Senior Specialist → Health Informatics Manager',
      salary: '₶8-28 LPA',
      demand: 'Very High',
      futureScope: 'Health Informatics Management, Medical IT Leadership'
    },
    {
      title: 'Data Management Specialist',
      icon: '💻',
      skills: ['Data Management', 'Health Information', 'Health Records', 'Healthcare IT'],
      roadmap: 'Diploma → Data Management Specialist → Senior Specialist → Data Management Manager',
      salary: '₶6-24 LPA',
      demand: 'High',
      futureScope: 'Data Management Leadership, Health Information Director'
    },
    {
      title: 'Health Analytics Manager',
      icon: '📊',
      skills: ['Health Analytics', 'Health Data Analysis', 'Medical Statistics', 'Data Science'],
      roadmap: 'Diploma → Health Analytics Manager → Senior Manager → Health Analytics Director',
      salary: '₶8-30 LPA',
      demand: 'High',
      futureScope: 'Health Analytics Management, Data Science Leadership'
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
        <button onClick={() => setScreen('hospital-administration-public-health')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">📋</span>
            <h1 className="text-4xl font-bold text-white">Medical Record Management Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive medical record management diploma programs with various specializations for rewarding health information careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('hospital-administration-public-health')}>Hospital Administration & Public Health</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Medical Record Management Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search medical record specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="health-information-management">Health Information Management</option>
              <option value="medical-coding">Medical Coding</option>
              <option value="health-data-analysis">Health Data Analysis</option>
              <option value="health-informatics">Health Informatics</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Medical Record Management Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Health Info Mgmt</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Medical Coding</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Data Analysis</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Health Informatics</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.him}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.coding}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.analysis}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.informatics}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Medical Record Management Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive medical record management education with health information training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Any background with Computer Science and English preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on medical record management and health information training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Medical Record Management License</h4>
                    <p className="text-white/80 text-sm">Medical Record Management and Health Information certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Health Information Management</h4>
                    <p className="text-white/80 text-sm">Health information management procedures and data management techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Medical Coding</h4>
                    <p className="text-white/80 text-sm">Medical coding procedures and health coding techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Health Data Analysis</h4>
                    <p className="text-white/80 text-sm">Health data analysis procedures and medical statistics techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Health Informatics</h4>
                    <p className="text-white/80 text-sm">Health informatics procedures and medical IT techniques</p>
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

export default MedicalRecordManagementScreen;
