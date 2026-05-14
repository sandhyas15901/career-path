import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface PublicHealthManagementScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const PublicHealthManagementScreen: React.FC<PublicHealthManagementScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'epidemiology',
      icon: '🦠',
      color: 'from-blue-500 to-blue-600',
      title: 'Epidemiology',
      bestFor: ['Disease Tracking', 'Public Health Research', 'Health Surveillance', 'Data Analysis'],
      duration: '3 Years',
      careers: ['Epidemiologist', 'Public Health Researcher', 'Health Surveillance Specialist'],
      recommended: 'Students interested in disease tracking, public health research, and health surveillance.',
      coreFocus: 'Disease tracking, public health research, health surveillance',
      technicalLevel: 'High',
      practicalLevel: 'Medium',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Epidemiology Certificate, Public Health Research License',
      higherStudy: 'B.Sc Public Health Lateral Entry',
      commonCareers: 'Epidemiologist, Public Health Researcher, Health Surveillance Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'health-policy',
      icon: '📋',
      color: 'from-purple-500 to-purple-600',
      title: 'Health Policy',
      bestFor: ['Health Policy', 'Public Health Legislation', 'Healthcare Regulation', 'Policy Analysis'],
      duration: '3 Years',
      careers: ['Health Policy Analyst', 'Public Health Advisor', 'Healthcare Regulation Specialist'],
      recommended: 'Students interested in health policy, public health legislation, and healthcare regulation.',
      coreFocus: 'Health policy, public Health legislation, healthcare regulation',
      technicalLevel: 'Medium',
      practicalLevel: 'Medium',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Health Policy Certificate, Public Health Legislation License',
      higherStudy: 'B.Sc Health Policy Lateral Entry',
      commonCareers: 'Health Policy Analyst, Public Health Advisor, Healthcare Regulation Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'community-health',
      icon: '🏘️',
      color: 'from-green-500 to-green-600',
      title: 'Community Health',
      bestFor: ['Community Health Programs', 'Health Education', 'Outreach Services', 'Health Promotion'],
      duration: '3 Years',
      careers: ['Community Health Worker', 'Health Education Specialist', 'Outreach Coordinator'],
      recommended: 'Students interested in community health programs, health education, and outreach services.',
      coreFocus: 'Community health programs, health education, outreach services',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Community Health Certificate, Health Education License',
      higherStudy: 'B.Sc Community Health Lateral Entry',
      commonCareers: 'Community Health Worker, Health Education Specialist, Outreach Coordinator',
      difficulty: 'Medium'
    },
    {
      id: 'environmental-health',
      icon: '🌍',
      color: 'from-orange-500 to-orange-600',
      title: 'Environmental Health',
      bestFor: ['Environmental Health', 'Health Safety', 'Pollution Control', 'Health Inspection'],
      duration: '3 Years',
      careers: ['Environmental Health Officer', 'Health Safety Inspector', 'Pollution Control Specialist'],
      recommended: 'Students interested in environmental health, health safety, and pollution control.',
      coreFocus: 'Environmental health, health safety, pollution control',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Environmental Health Certificate, Health Safety License',
      higherStudy: 'B.Sc Environmental Health Lateral Entry',
      commonCareers: 'Environmental Health Officer, Health Safety Inspector, Pollution Control Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      epidemiology: 'Disease tracking, public health research, health surveillance',
      policy: 'Health policy, public Health legislation, healthcare regulation',
      community: 'Community health programs, health education, outreach services',
      environmental: 'Environmental health, health safety, pollution control'
    },
    {
      feature: 'Technical Level',
      epidemiology: 'High',
      policy: 'Medium',
      community: 'Medium',
      environmental: 'High'
    },
    {
      feature: 'Practical Level',
      epidemiology: 'Medium',
      policy: 'Medium',
      community: 'High',
      environmental: 'High'
    },
    {
      feature: 'Accuracy Level',
      epidemiology: 'Very High',
      policy: 'High',
      community: 'High',
      environmental: 'High'
    },
    {
      feature: 'Industry Demand',
      epidemiology: 'High',
      policy: 'High',
      community: 'Very High',
      environmental: 'High'
    },
    {
      feature: 'Certifications',
      epidemiology: 'Epidemiology Certificate, Public Health Research License',
      policy: 'Health Policy Certificate, Public Health Legislation License',
      community: 'Community Health Certificate, Health Education License',
      environmental: 'Environmental Health Certificate, Health Safety License'
    },
    {
      feature: 'Higher Study Opportunities',
      epidemiology: 'B.Sc Public Health Lateral Entry',
      policy: 'B.Sc Health Policy Lateral Entry',
      community: 'B.Sc Community Health Lateral Entry',
      environmental: 'B.Sc Environmental Health Lateral Entry'
    },
    {
      feature: 'Common Careers',
      epidemiology: 'Epidemiologist, Public Health Researcher, Health Surveillance Specialist',
      policy: 'Health Policy Analyst, Public Health Advisor, Healthcare Regulation Specialist',
      community: 'Community Health Worker, Health Education Specialist, Outreach Coordinator',
      environmental: 'Environmental Health Officer, Health Safety Inspector, Pollution Control Specialist'
    },
    {
      feature: 'Difficulty Level',
      epidemiology: 'Hard',
      policy: 'Medium',
      community: 'Medium',
      environmental: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🦠',
      title: 'Choose Epidemiology If:',
      reasons: [
        'You enjoy disease tracking and public health research',
        'You are interested in health surveillance and data analysis',
        'You want epidemiology-based public health careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📋',
      title: 'Choose Health Policy If:',
      reasons: [
        'You enjoy health policy and public Health legislation',
        'You are interested in healthcare regulation and policy analysis',
        'You want health policy-based public health careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🏘️',
      title: 'Choose Community Health If:',
      reasons: [
        'You enjoy community health programs and health education',
        'You are interested in outreach services and health promotion',
        'You want community health-based public health careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🌍',
      title: 'Choose Environmental Health If:',
      reasons: [
        'You enjoy environmental health and health safety',
        'You are interested in pollution control and health inspection',
        'You want environmental health-based public health careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Epidemiologist',
      icon: '🦠',
      skills: ['Disease Tracking', 'Public Health Research', 'Health Surveillance', 'Data Analysis'],
      roadmap: 'Diploma → Epidemiologist → Senior Epidemiologist → Public Health Director',
      salary: '₶6-24 LPA',
      demand: 'High',
      futureScope: 'Public Health Management, Epidemiology Leadership'
    },
    {
      title: 'Health Policy Analyst',
      icon: '📋',
      skills: ['Health Policy', 'Public Health Legislation', 'Healthcare Regulation', 'Policy Analysis'],
      roadmap: 'Diploma → Policy Analyst → Senior Analyst → Policy Director',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Health Policy Management, Public Health Leadership'
    },
    {
      title: 'Community Health Worker',
      icon: '🏘️',
      skills: ['Community Health Programs', 'Health Education', 'Outreach Services', 'Health Promotion'],
      roadmap: 'Diploma → Community Health Worker → Senior Worker → Community Health Manager',
      salary: '₶4-16 LPA',
      demand: 'Very High',
      futureScope: 'Community Health Management, Health Education Leadership'
    },
    {
      title: 'Environmental Health Officer',
      icon: '🌍',
      skills: ['Environmental Health', 'Health Safety', 'Pollution Control', 'Health Inspection'],
      roadmap: 'Diploma → Environmental Health Officer → Senior Officer → Environmental Health Manager',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Environmental Health Management, Health Safety Leadership'
    },
    {
      title: 'Public Health Researcher',
      icon: '🦠',
      skills: ['Public Health Research', 'Disease Tracking', 'Health Surveillance', 'Data Analysis'],
      roadmap: 'Diploma → Public Health Researcher → Senior Researcher → Research Director',
      salary: '₶6-22 LPA',
      demand: 'High',
      futureScope: 'Public Health Research Management, Epidemiology Leadership'
    },
    {
      title: 'Health Education Specialist',
      icon: '🏘️',
      skills: ['Health Education', 'Community Health Programs', 'Outreach Services', 'Health Promotion'],
      roadmap: 'Diploma → Health Education Specialist → Senior Specialist → Health Education Manager',
      salary: '₶4-16 LPA',
      demand: 'Very High',
      futureScope: 'Health Education Management, Community Health Leadership'
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
        <button onClick={() => setScreen('hospital-administration-public-health')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏛️</span>
            <h1 className="text-4xl font-bold text-white">Public Health Management Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive public health management diploma programs with various specializations for rewarding public health careers after 10th grade.
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
          <span className="text-white font-medium">Public Health Management Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search public health specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="epidemiology">Epidemiology</option>
              <option value="health-policy">Health Policy</option>
              <option value="community-health">Community Health</option>
              <option value="environmental-health">Environmental Health</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Public Health Management Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Epidemiology</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Health Policy</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Community Health</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Environmental Health</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.epidemiology}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.policy}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.community}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.environmental}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Public Health Management Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive public health management education with community health training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Any background with Biology and English preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on public health management and community health training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Public Health Management License</h4>
                    <p className="text-white/80 text-sm">Public Health Management and Community Health certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Public Health Research</h4>
                    <p className="text-white/80 text-sm">Public health research procedures and disease tracking techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Health Policy Analysis</h4>
                    <p className="text-white/80 text-sm">Health policy analysis procedures and public health legislation techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Community Health Programs</h4>
                    <p className="text-white/80 text-sm">Community health program procedures and health education techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Environmental Health</h4>
                    <p className="text-white/80 text-sm">Environmental health procedures and health safety techniques</p>
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

export default PublicHealthManagementScreen;
