import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface PharmaceuticalChemistryScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const PharmaceuticalChemistryScreen: React.FC<PharmaceuticalChemistryScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'drug-formulation',
      icon: '🧪',
      color: 'from-blue-500 to-blue-600',
      title: 'Drug Formulation',
      bestFor: ['Drug Development', 'Formulation Science', 'Medicine Creation', 'Pharmaceutical R&D'],
      duration: '3 Years',
      careers: ['Drug Formulation Scientist', 'Pharmaceutical R&D', 'Medicine Developer'],
      recommended: 'Students interested in drug development, formulation science, and pharmaceutical R&D.',
      coreFocus: 'Drug development, formulation science, pharmaceutical R&D',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Drug Formulation Certificate, Pharmaceutical R&D License',
      higherStudy: 'B.Pharm Formulation Lateral Entry',
      commonCareers: 'Drug Formulation Scientist, Pharmaceutical R&D, Medicine Developer',
      difficulty: 'Very Hard'
    },
    {
      id: 'chemical-analysis',
      icon: '🔬',
      color: 'from-purple-500 to-purple-600',
      title: 'Chemical Analysis',
      bestFor: ['Chemical Testing', 'Quality Analysis', 'Drug Testing', 'Pharmaceutical Analysis'],
      duration: '3 Years',
      careers: ['Chemical Analyst', 'Quality Control Analyst', 'Drug Testing Specialist'],
      recommended: 'Students interested in chemical testing, quality analysis, and drug testing.',
      coreFocus: 'Chemical testing, quality analysis, drug testing',
      technicalLevel: 'Very High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Chemical Analysis Certificate, Quality Control License',
      higherStudy: 'B.Pharm Analysis Lateral Entry',
      commonCareers: 'Chemical Analyst, Quality Control Analyst, Drug Testing Specialist',
      difficulty: 'Very Hard'
    },
    {
      id: 'quality-control',
      icon: '✅',
      color: 'from-green-500 to-green-600',
      title: 'Quality Control',
      bestFor: ['Quality Assurance', 'Drug Quality', 'Pharmaceutical Standards', 'Quality Management'],
      duration: '3 Years',
      careers: ['Quality Control Analyst', 'Quality Assurance Officer', 'Pharmaceutical Quality Manager'],
      recommended: 'Students interested in quality assurance, drug quality, and pharmaceutical standards.',
      coreFocus: 'Quality assurance, drug quality, pharmaceutical standards',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Quality Control Certificate, Quality Assurance License',
      higherStudy: 'B.Pharm Quality Lateral Entry',
      commonCareers: 'Quality Control Analyst, Quality Assurance Officer, Pharmaceutical Quality Manager',
      difficulty: 'Hard'
    },
    {
      id: 'pharmaceutical-research',
      icon: '🔬',
      color: 'from-orange-500 to-orange-600',
      title: 'Pharmaceutical Research',
      bestFor: ['Drug Research', 'Pharmaceutical Studies', 'Medicine Research', 'Clinical Research'],
      duration: '3 Years',
      careers: ['Pharmaceutical Researcher', 'Drug Research Scientist', 'Clinical Research Analyst'],
      recommended: 'Students interested in drug research, pharmaceutical studies, and medicine research.',
      coreFocus: 'Drug research, pharmaceutical studies, medicine research',
      technicalLevel: 'Very High',
      practicalLevel: 'Medium',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Pharmaceutical Research Certificate, Clinical Research License',
      higherStudy: 'B.Pharm Research Lateral Entry',
      commonCareers: 'Pharmaceutical Researcher, Drug Research Scientist, Clinical Research Analyst',
      difficulty: 'Very Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      formulation: 'Drug development, formulation science, pharmaceutical R&D',
      analysis: 'Chemical testing, quality analysis, drug testing',
      quality: 'Quality assurance, drug quality, pharmaceutical standards',
      research: 'Drug research, pharmaceutical studies, medicine research'
    },
    {
      feature: 'Technical Level',
      formulation: 'Very High',
      analysis: 'Very High',
      quality: 'High',
      research: 'Very High'
    },
    {
      feature: 'Practical Level',
      formulation: 'High',
      analysis: 'High',
      quality: 'High',
      research: 'Medium'
    },
    {
      feature: 'Accuracy Level',
      formulation: 'Very High',
      analysis: 'Very High',
      quality: 'Very High',
      research: 'Very High'
    },
    {
      feature: 'Industry Demand',
      formulation: 'Very High',
      analysis: 'Very High',
      quality: 'High',
      research: 'High'
    },
    {
      feature: 'Certifications',
      formulation: 'Drug Formulation Certificate, Pharmaceutical R&D License',
      analysis: 'Chemical Analysis Certificate, Quality Control License',
      quality: 'Quality Control Certificate, Quality Assurance License',
      research: 'Pharmaceutical Research Certificate, Clinical Research License'
    },
    {
      feature: 'Higher Study Opportunities',
      formulation: 'B.Pharm Formulation Lateral Entry',
      analysis: 'B.Pharm Analysis Lateral Entry',
      quality: 'B.Pharm Quality Lateral Entry',
      research: 'B.Pharm Research Lateral Entry'
    },
    {
      feature: 'Common Careers',
      formulation: 'Drug Formulation Scientist, Pharmaceutical R&D, Medicine Developer',
      analysis: 'Chemical Analyst, Quality Control Analyst, Drug Testing Specialist',
      quality: 'Quality Control Analyst, Quality Assurance Officer, Pharmaceutical Quality Manager',
      research: 'Pharmaceutical Researcher, Drug Research Scientist, Clinical Research Analyst'
    },
    {
      feature: 'Difficulty Level',
      formulation: 'Very Hard',
      analysis: 'Very Hard',
      quality: 'Hard',
      research: 'Very Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🧪',
      title: 'Choose Drug Formulation If:',
      reasons: [
        'You enjoy drug development and formulation science',
        'You are interested in pharmaceutical R&D and medicine creation',
        'You want drug formulation-based careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🔬',
      title: 'Choose Chemical Analysis If:',
      reasons: [
        'You enjoy chemical testing and quality analysis',
        'You are interested in drug testing and pharmaceutical analysis',
        'You want chemical analysis-based careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '✅',
      title: 'Choose Quality Control If:',
      reasons: [
        'You enjoy quality assurance and drug quality',
        'You are interested in pharmaceutical standards and quality management',
        'You want quality control-based careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔬',
      title: 'Choose Pharmaceutical Research If:',
      reasons: [
        'You enjoy drug research and pharmaceutical studies',
        'You are interested in medicine research and clinical research',
        'You want pharmaceutical research-based careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Drug Formulation Scientist',
      icon: '🧪',
      skills: ['Drug Development', 'Formulation Science', 'Pharmaceutical R&D'],
      roadmap: 'Diploma → Formulation Scientist → Senior Scientist → R&D Manager',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Pharmaceutical R&D Management, Drug Development Leadership'
    },
    {
      title: 'Chemical Analyst',
      icon: '🔬',
      skills: ['Chemical Analysis', 'Quality Testing', 'Drug Analysis'],
      roadmap: 'Diploma → Chemical Analyst → Senior Analyst → Analysis Manager',
      salary: '₵5-18 LPA',
      demand: 'Very High',
      futureScope: 'Chemical Analysis Management, Quality Testing Leadership'
    },
    {
      title: 'Quality Control Analyst',
      icon: '✅',
      skills: ['Quality Control', 'Quality Assurance', 'Pharmaceutical Standards'],
      roadmap: 'Diploma → Quality Analyst → Senior Analyst → Quality Manager',
      salary: '₵4-16 LPA',
      demand: 'High',
      futureScope: 'Quality Control Management, Quality Assurance Leadership'
    },
    {
      title: 'Pharmaceutical Researcher',
      icon: '🔬',
      skills: ['Drug Research', 'Pharmaceutical Studies', 'Clinical Research'],
      roadmap: 'Diploma → Researcher → Senior Researcher → Research Manager',
      salary: '₶6-20 LPA',
      demand: 'High',
      futureScope: 'Pharmaceutical Research Management, Drug Research Leadership'
    },
    {
      title: 'Quality Assurance Officer',
      icon: '🛡️',
      skills: ['Quality Assurance', 'Drug Quality', 'Pharmaceutical Standards'],
      roadmap: 'Diploma → QA Officer → Senior Officer → QA Manager',
      salary: '₵5-18 LPA',
      demand: 'High',
      futureScope: 'Quality Assurance Management, Pharmaceutical Quality Leadership'
    },
    {
      title: 'Drug Testing Specialist',
      icon: '🧪',
      skills: ['Drug Testing', 'Chemical Analysis', 'Quality Testing'],
      roadmap: 'Diploma → Testing Specialist → Senior Specialist → Testing Manager',
      salary: '₵4-15 LPA',
      demand: 'High',
      futureScope: 'Drug Testing Management, Chemical Analysis Leadership'
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
        <button onClick={() => setScreen('pharmacy')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🧪</span>
            <h1 className="text-4xl font-bold text-white">Pharmaceutical Chemistry Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive pharmaceutical chemistry diploma programs with various specializations for rewarding pharmaceutical careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('medical_paramedical_diplomas')}>Medical & Paramedical Diplomas</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('pharmacy')}>Pharmacy</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Pharmaceutical Chemistry Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search pharmaceutical specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="drug-formulation">Drug Formulation</option>
              <option value="chemical-analysis">Chemical Analysis</option>
              <option value="quality-control">Quality Control</option>
              <option value="pharmaceutical-research">Pharmaceutical Research</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pharmaceutical Chemistry Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Formulation</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Analysis</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Quality</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Research</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.formulation}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.analysis}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.quality}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.research}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pharmaceutical Chemistry Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive pharmaceutical chemistry education with formulation training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Chemistry preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on pharmaceutical lab and formulation training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Pharmaceutical Chemistry License</h4>
                    <p className="text-white/80 text-sm">Pharmaceutical Chemistry and Drug Formulation certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Drug Formulation</h4>
                    <p className="text-white/80 text-sm">Pharmaceutical formulation and drug development techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Chemical Analysis</h4>
                    <p className="text-white/80 text-sm">Chemical testing and pharmaceutical analysis methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quality Control</h4>
                    <p className="text-white/80 text-sm">Quality assurance and pharmaceutical standards compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Research Methods</h4>
                    <p className="text-white/80 text-sm">Pharmaceutical research and drug development methodologies</p>
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

export default PharmaceuticalChemistryScreen;
