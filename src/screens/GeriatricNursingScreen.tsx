import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface GeriatricNursingScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const GeriatricNursingScreen: React.FC<GeriatricNursingScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'elderly-care',
      icon: '👴',
      color: 'from-blue-500 to-blue-600',
      title: 'Elderly Care Nursing',
      bestFor: ['Senior Care', 'Elderly Health', 'Geriatric Support', 'Senior Nursing'],
      duration: '3 Years',
      careers: ['Elderly Care Nurse', 'Geriatric Nurse', 'Senior Care Specialist'],
      recommended: 'Students interested in senior care, elderly health, and geriatric support.',
      coreFocus: 'Senior care, elderly health, geriatric support',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Geriatric Nursing, Elderly Care, Senior Health',
      higherStudy: 'B.Sc Geriatric Nursing Lateral Entry',
      commonCareers: 'Elderly Care Nurse, Geriatric Nurse, Senior Care Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'home-care',
      icon: '🏠',
      color: 'from-green-500 to-green-600',
      title: 'Home Care Nursing',
      bestFor: ['Home Nursing', 'Senior Home Care', 'In-home Health', 'Elderly Home Support'],
      duration: '3 Years',
      careers: ['Home Care Nurse', 'Senior Home Nurse', 'In-home Health Specialist'],
      recommended: 'Students interested in home nursing, senior home care, and in-home health.',
      coreFocus: 'Home nursing, senior home care, in-home health',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Home Care Nursing, In-home Health, Senior Home Care',
      higherStudy: 'B.Sc Home Care Nursing Lateral Entry',
      commonCareers: 'Home Care Nurse, Senior Home Nurse, In-home Health Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'palliative-care',
      icon: '💜',
      color: 'from-purple-500 to-purple-600',
      title: 'Palliative Care Nursing',
      bestFor: ['Palliative Care', 'End-of-Life Care', 'Comfort Care', 'Hospice Nursing'],
      duration: '3 Years',
      careers: ['Palliative Care Nurse', 'Hospice Nurse', 'Comfort Care Specialist'],
      recommended: 'Students interested in palliative care, end-of-life care, and comfort care.',
      coreFocus: 'Palliative care, end-of-life care, comfort care',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      empathyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Palliative Care Nursing, Hospice Care, End-of-Life Support',
      higherStudy: 'B.Sc Palliative Care Nursing Lateral Entry',
      commonCareers: 'Palliative Care Nurse, Hospice Nurse, Comfort Care Specialist',
      difficulty: 'Medium'
    },
    {
      id: 'rehabilitation-nursing',
      icon: '♿',
      color: 'from-orange-500 to-orange-600',
      title: 'Rehabilitation Nursing',
      bestFor: ['Rehabilitation Care', 'Senior Recovery', 'Physical Therapy Support', 'Mobility Care'],
      duration: '3 Years',
      careers: ['Rehabilitation Nurse', 'Senior Recovery Nurse', 'Mobility Care Specialist'],
      recommended: 'Students interested in rehabilitation care, senior recovery, and mobility care.',
      coreFocus: 'Rehabilitation care, senior recovery, mobility care',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      empathyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Rehabilitation Nursing, Physical Therapy Support, Mobility Care',
      higherStudy: 'B.Sc Rehabilitation Nursing Lateral Entry',
      commonCareers: 'Rehabilitation Nurse, Senior Recovery Nurse, Mobility Care Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      elderly: 'Senior care, elderly health, geriatric support',
      home: 'Home nursing, senior home care, in-home health',
      palliative: 'Palliative care, end-of-life care, comfort care',
      rehabilitation: 'Rehabilitation care, senior recovery, mobility care'
    },
    {
      feature: 'Technical Level',
      elderly: 'Medium',
      home: 'Medium',
      palliative: 'Medium',
      rehabilitation: 'High'
    },
    {
      feature: 'Practical Level',
      elderly: 'High',
      home: 'High',
      palliative: 'High',
      rehabilitation: 'Very High'
    },
    {
      feature: 'Empathy Level',
      elderly: 'Very High',
      home: 'Very High',
      palliative: 'Very High',
      rehabilitation: 'High'
    },
    {
      feature: 'Industry Demand',
      elderly: 'High',
      home: 'High',
      palliative: 'Medium',
      rehabilitation: 'High'
    },
    {
      feature: 'Certifications',
      elderly: 'Geriatric Nursing, Elderly Care, Senior Health',
      home: 'Home Care Nursing, In-home Health, Senior Home Care',
      palliative: 'Palliative Care Nursing, Hospice Care, End-of-Life Support',
      rehabilitation: 'Rehabilitation Nursing, Physical Therapy Support, Mobility Care'
    },
    {
      feature: 'Higher Study Opportunities',
      elderly: 'B.Sc Geriatric Nursing Lateral Entry',
      home: 'B.Sc Home Care Nursing Lateral Entry',
      palliative: 'B.Sc Palliative Care Nursing Lateral Entry',
      rehabilitation: 'B.Sc Rehabilitation Nursing Lateral Entry'
    },
    {
      feature: 'Common Careers',
      elderly: 'Elderly Care Nurse, Geriatric Nurse, Senior Care Specialist',
      home: 'Home Care Nurse, Senior Home Nurse, In-home Health Specialist',
      palliative: 'Palliative Care Nurse, Hospice Nurse, Comfort Care Specialist',
      rehabilitation: 'Rehabilitation Nurse, Senior Recovery Nurse, Mobility Care Specialist'
    },
    {
      feature: 'Difficulty Level',
      elderly: 'Medium',
      home: 'Medium',
      palliative: 'Medium',
      rehabilitation: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '👴',
      title: 'Choose Elderly Care Nursing If:',
      reasons: [
        'You enjoy senior care and elderly health',
        'You are interested in geriatric support and senior nursing',
        'You want elderly care-based nursing careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🏠',
      title: 'Choose Home Care Nursing If:',
      reasons: [
        'You enjoy home nursing and senior home care',
        'You are interested in in-home health and elderly home support',
        'You want home care-based nursing careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '💜',
      title: 'Choose Palliative Care Nursing If:',
      reasons: [
        'You enjoy palliative care and end-of-life care',
        'You are interested in comfort care and hospice nursing',
        'You want palliative care-based nursing careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '♿',
      title: 'Choose Rehabilitation Nursing If:',
      reasons: [
        'You enjoy rehabilitation care and senior recovery',
        'You are interested in mobility care and physical therapy support',
        'You want rehabilitation-based nursing careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Elderly Care Nurse',
      icon: '👴',
      skills: ['Senior Care', 'Elderly Health', 'Geriatric Support'],
      roadmap: 'Diploma → Elderly Care Nurse → Senior Nurse → Care Manager',
      salary: '₹4-14 LPA',
      demand: 'High',
      futureScope: 'Elderly Care Management, Geriatric Nursing Leadership'
    },
    {
      title: 'Home Care Nurse',
      icon: '🏠',
      skills: ['Home Nursing', 'Senior Home Care', 'In-home Health'],
      roadmap: 'Diploma → Home Care Nurse → Senior Home Nurse → Home Care Manager',
      salary: '₹4-15 LPA',
      demand: 'High',
      futureScope: 'Home Care Management, In-home Health Leadership'
    },
    {
      title: 'Palliative Care Nurse',
      icon: '💜',
      skills: ['Palliative Care', 'End-of-Life Care', 'Comfort Care'],
      roadmap: 'Diploma → Palliative Care Nurse → Senior Nurse → Palliative Care Manager',
      salary: '₵5-16 LPA',
      demand: 'Medium',
      futureScope: 'Palliative Care Management, Hospice Leadership'
    },
    {
      title: 'Rehabilitation Nurse',
      icon: '♿',
      skills: ['Rehabilitation Care', 'Senior Recovery', 'Mobility Care'],
      roadmap: 'Diploma → Rehabilitation Nurse → Senior Nurse → Rehabilitation Manager',
      salary: '₵5-18 LPA',
      demand: 'High',
      futureScope: 'Rehabilitation Management, Senior Recovery Leadership'
    },
    {
      title: 'Geriatric Nurse',
      icon: '🏥',
      skills: ['Geriatric Nursing', 'Senior Health', 'Elderly Assessment'],
      roadmap: 'Diploma → Geriatric Nurse → Senior Geriatric Nurse → Geriatric Manager',
      salary: '₵4-15 LPA',
      demand: 'High',
      futureScope: 'Geriatric Management, Elderly Health Leadership'
    },
    {
      title: 'Senior Care Specialist',
      icon: '👵',
      skills: ['Senior Care', 'Elderly Support', 'Geriatric Assessment'],
      roadmap: 'Diploma → Senior Care Specialist → Senior Specialist → Care Coordinator',
      salary: '₵3-12 LPA',
      demand: 'Medium',
      futureScope: 'Senior Care Management, Elderly Support Leadership'
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
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('nursing-patient-care')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">👴</span>
            <h1 className="text-4xl font-bold text-white">Geriatric Nursing Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive geriatric nursing diploma programs with various specializations for rewarding nursing careers in elderly and senior care after 10th grade.
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
          <span className="text-white font-medium">Geriatric Nursing Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search geriatric specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="elderly-care">Elderly Care</option>
              <option value="home-care">Home Care</option>
              <option value="palliative-care">Palliative Care</option>
              <option value="rehabilitation-nursing">Rehabilitation</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Geriatric Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Elderly Care</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Home Care</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Palliative</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Rehabilitation</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.elderly}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.home}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.palliative}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.rehabilitation}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Geriatric Nursing Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive geriatric nursing education with elderly care training</p>
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
                    <p className="text-white/80 text-sm">Hands-on elderly care and geriatric ward training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Geriatric Nursing License</h4>
                    <p className="text-white/80 text-sm">Geriatric Nursing and Elderly Care certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Elderly Assessment</h4>
                    <p className="text-white/80 text-sm">Geriatric assessment and elderly health monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Senior Care</h4>
                    <p className="text-white/80 text-sm">Comprehensive senior care and elderly support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Mobility Support</h4>
                    <p className="text-white/80 text-sm">Elderly mobility assistance and rehabilitation support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Geriatric Communication</h4>
                    <p className="text-white/80 text-sm">Elderly-friendly communication and family support</p>
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

export default GeriatricNursingScreen;
