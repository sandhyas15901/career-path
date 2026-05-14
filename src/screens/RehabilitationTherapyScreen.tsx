import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface RehabilitationTherapyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const RehabilitationTherapyScreen: React.FC<RehabilitationTherapyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'physical-therapy',
      icon: '♿',
      color: 'from-green-500 to-green-600',
      title: 'Physical Therapy',
      bestFor: ['Physical Rehabilitation', 'Movement Therapy', 'Pain Management', 'Exercise Therapy'],
      duration: '3 Years',
      careers: ['Physical Therapist', 'Rehabilitation Specialist', 'Exercise Therapist'],
      recommended: 'Students interested in physical rehabilitation, movement therapy, and pain management.',
      coreFocus: 'Physical rehabilitation, movement therapy, pain management',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Physical Therapy License, Rehabilitation Certificate',
      higherStudy: 'B.Sc Physical Therapy Lateral Entry',
      commonCareers: 'Physical Therapist, Rehabilitation Specialist, Exercise Therapist',
      difficulty: 'Medium'
    },
    {
      id: 'occupational-therapy',
      icon: '🏥',
      color: 'from-blue-500 to-blue-600',
      title: 'Occupational Therapy',
      bestFor: ['Occupational Rehabilitation', 'Daily Living Skills', 'Adaptive Equipment', 'Patient Independence'],
      duration: '3 Years',
      careers: ['Occupational Therapist', 'Rehabilitation Specialist', 'Adaptive Equipment Technician'],
      recommended: 'Students interested in occupational rehabilitation, daily living skills, and adaptive equipment.',
      coreFocus: 'Occupational rehabilitation, daily living skills, adaptive equipment',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      empathyLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Occupational Therapy License, Rehabilitation Certificate',
      higherStudy: 'B.Sc Occupational Therapy Lateral Entry',
      commonCareers: 'Occupational Therapist, Rehabilitation Specialist, Adaptive Equipment Technician',
      difficulty: 'Medium'
    },
    {
      id: 'speech-therapy',
      icon: '🗣️',
      color: 'from-purple-500 to-purple-600',
      title: 'Speech Therapy',
      bestFor: ['Speech Rehabilitation', 'Communication Therapy', 'Language Development', 'Voice Therapy'],
      duration: '3 Years',
      careers: ['Speech Therapist', 'Communication Specialist', 'Language Development Technician'],
      recommended: 'Students interested in speech rehabilitation, communication therapy, and language development.',
      coreFocus: 'Speech rehabilitation, communication Therapy, language development',
      technicalLevel: 'Medium',
      practicalLevel: 'High',
      empathyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Speech Therapy License, Communication Certificate',
      higherStudy: 'B.Sc Speech Therapy Lateral Entry',
      commonCareers: 'Speech Therapist, Communication Specialist, Language Development Technician',
      difficulty: 'Medium'
    },
    {
      id: 'respiratory-therapy',
      icon: '🫁',
      color: 'from-orange-500 to-orange-600',
      title: 'Respiratory Therapy',
      bestFor: ['Respiratory Rehabilitation', 'Breathing Therapy', 'Lung Health', 'Cardiopulmonary Care'],
      duration: '3 Years',
      careers: ['Respiratory Therapist', 'Breathing Therapy Specialist', 'Lung Health Technician'],
      recommended: 'Students interested in respiratory rehabilitation, breathing Therapy, and lung health.',
      coreFocus: 'Respiratory rehabilitation, breathing Therapy, lung health',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      empathyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Respiratory Therapy License, Breathing Therapy Certificate',
      higherStudy: 'B.Sc Respiratory Therapy Lateral Entry',
      commonCareers: 'Respiratory Therapist, Breathing Therapy Specialist, Lung Health Technician',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      physical: 'Physical rehabilitation, movement Therapy, pain management',
      occupational: 'Occupational rehabilitation, daily living skills, adaptive equipment',
      speech: 'Speech rehabilitation, communication Therapy, language development',
      respiratory: 'Respiratory rehabilitation, breathing Therapy, lung health'
    },
    {
      feature: 'Technical Level',
      physical: 'Medium',
      occupational: 'Medium',
      speech: 'Medium',
      respiratory: 'High'
    },
    {
      feature: 'Practical Level',
      physical: 'Very High',
      occupational: 'Very High',
      speech: 'High',
      respiratory: 'Very High'
    },
    {
      feature: 'Empathy Level',
      physical: 'Very High',
      occupational: 'Very High',
      speech: 'Very High',
      respiratory: 'High'
    },
    {
      feature: 'Industry Demand',
      physical: 'Very High',
      occupational: 'Very High',
      speech: 'High',
      respiratory: 'High'
    },
    {
      feature: 'Certifications',
      physical: 'Physical Therapy License, Rehabilitation Certificate',
      occupational: 'Occupational Therapy License, Rehabilitation Certificate',
      speech: 'Speech Therapy License, Communication Certificate',
      respiratory: 'Respiratory Therapy License, Breathing Therapy Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      physical: 'B.Sc Physical Therapy Lateral Entry',
      occupational: 'B.Sc Occupational Therapy Lateral Entry',
      speech: 'B.Sc Speech Therapy Lateral Entry',
      respiratory: 'B.Sc Respiratory Therapy Lateral Entry'
    },
    {
      feature: 'Common Careers',
      physical: 'Physical Therapist, Rehabilitation Specialist, Exercise Therapist',
      occupational: 'Occupational Therapist, Rehabilitation Specialist, Adaptive Equipment Technician',
      speech: 'Speech Therapist, Communication Specialist, Language Development Technician',
      respiratory: 'Respiratory Therapist, Breathing Therapy Specialist, Lung Health Technician'
    },
    {
      feature: 'Difficulty Level',
      physical: 'Medium',
      occupational: 'Medium',
      speech: 'Medium',
      respiratory: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '♿',
      title: 'Choose Physical Therapy If:',
      reasons: [
        'You enjoy physical rehabilitation and movement Therapy',
        'You are interested in pain management and exercise Therapy',
        'You want physical therapy-based rehabilitation careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏥',
      title: 'Choose Occupational Therapy If:',
      reasons: [
        'You enjoy occupational rehabilitation and daily living skills',
        'You are interested in adaptive equipment and patient independence',
        'You want occupational therapy-based rehabilitation careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🗣️',
      title: 'Choose Speech Therapy If:',
      reasons: [
        'You enjoy speech rehabilitation and communication Therapy',
        'You are interested in language development and voice Therapy',
        'You want speech therapy-based rehabilitation careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🫁',
      title: 'Choose Respiratory Therapy If:',
      reasons: [
        'You enjoy respiratory rehabilitation and breathing Therapy',
        'You are interested in lung health and cardiopulmonary care',
        'You want respiratory therapy-based rehabilitation careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Physical Therapist',
      icon: '♿',
      skills: ['Physical Rehabilitation', 'Movement Therapy', 'Pain Management', 'Exercise Therapy'],
      roadmap: 'Diploma → Physical Therapist → Senior Therapist → Rehabilitation Manager',
      salary: '₶4-16 LPA',
      demand: 'Very High',
      futureScope: 'Physical Therapy Management, Rehabilitation Leadership'
    },
    {
      title: 'Occupational Therapist',
      icon: '🏥',
      skills: ['Occupational Rehabilitation', 'Daily Living Skills', 'Adaptive Equipment', 'Patient Independence'],
      roadmap: 'Diploma → Occupational Therapist → Senior Therapist → Occupational Therapy Manager',
      salary: '₶4-16 LPA',
      demand: 'Very High',
      futureScope: 'Occupational Therapy Management, Rehabilitation Leadership'
    },
    {
      title: 'Speech Therapist',
      icon: '🗣️',
      skills: ['Speech Rehabilitation', 'Communication Therapy', 'Language Development', 'Voice Therapy'],
      roadmap: 'Diploma → Speech Therapist → Senior Therapist → Speech Therapy Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Speech Therapy Management, Communication Leadership'
    },
    {
      title: 'Respiratory Therapist',
      icon: '🫁',
      skills: ['Respiratory Rehabilitation', 'Breathing Therapy', 'Lung Health', 'Cardiopulmonary Care'],
      roadmap: 'Diploma → Respiratory Therapist → Senior Therapist → Respiratory Therapy Manager',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Respiratory Therapy Management, Lung Health Leadership'
    },
    {
      title: 'Rehabilitation Specialist',
      icon: '♿',
      skills: ['Physical Rehabilitation', 'Movement Therapy', 'Pain Management', 'Patient Recovery'],
      roadmap: 'Diploma → Rehabilitation Specialist → Senior Specialist → Rehabilitation Manager',
      salary: '₶5-18 LPA',
      demand: 'Very High',
      futureScope: 'Rehabilitation Management, Physical Therapy Leadership'
    },
    {
      title: 'Exercise Therapist',
      icon: '💪',
      skills: ['Exercise Therapy', 'Movement Rehabilitation', 'Pain Management', 'Physical Recovery'],
      roadmap: 'Diploma → Exercise Therapist → Senior Therapist → Exercise Therapy Manager',
      salary: '₶4-16 LPA',
      demand: 'Very High',
      futureScope: 'Exercise Therapy Management, Rehabilitation Leadership'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('dental-eye-rehabilitation')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">♿</span>
            <h1 className="text-4xl font-bold text-white">Rehabilitation Therapy Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive rehabilitation therapy diploma programs with various specializations for rewarding therapy careers after 10th grade.
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
          <span className="text-white font-medium">Rehabilitation Therapy Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search rehabilitation specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="physical-therapy">Physical Therapy</option>
              <option value="occupational-therapy">Occupational Therapy</option>
              <option value="speech-therapy">Speech Therapy</option>
              <option value="respiratory-therapy">Respiratory Therapy</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Rehabilitation Therapy Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Physical</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Occupational</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Speech</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Respiratory</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.physical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.occupational}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.speech}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.respiratory}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Rehabilitation Therapy Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive rehabilitation therapy education with hands-on training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Biology and Psychology preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on rehabilitation therapy and patient care training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Rehabilitation Therapy License</h4>
                    <p className="text-white/80 text-sm">Rehabilitation Therapy and Patient Care certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Physical Rehabilitation</h4>
                    <p className="text-white/80 text-sm">Physical rehabilitation procedures and movement therapy techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Movement Therapy</h4>
                    <p className="text-white/80 text-sm">Movement therapy procedures and pain management techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Patient Recovery</h4>
                    <p className="text-white/80 text-sm">Patient recovery procedures and rehabilitation techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Therapeutic Care</h4>
                    <p className="text-white/80 text-sm">Therapeutic care procedures and patient support techniques</p>
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

export default RehabilitationTherapyScreen;
