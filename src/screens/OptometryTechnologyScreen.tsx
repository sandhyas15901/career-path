import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface OptometryTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const OptometryTechnologyScreen: React.FC<OptometryTechnologyScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'vision-testing',
      icon: '👁️',
      color: 'from-blue-500 to-blue-600',
      title: 'Vision Testing',
      bestFor: ['Eye Testing', 'Vision Analysis', 'Refractive Testing', 'Visual Acuity'],
      duration: '3 Years',
      careers: ['Vision Testing Technician', 'Optometry Assistant', 'Visual Acuity Specialist'],
      recommended: 'Students interested in eye testing, vision analysis, and refractive testing.',
      coreFocus: 'Eye testing, vision analysis, refractive testing',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Vision Testing License, Optometry Assistant Certificate',
      higherStudy: 'B.Sc Optometry Lateral Entry',
      commonCareers: 'Vision Testing Technician, Optometry Assistant, Visual Acuity Specialist',
      difficulty: 'Hard'
    },
    {
      id: 'optical-services',
      icon: '👓',
      color: 'from-purple-500 to-purple-600',
      title: 'Optical Services',
      bestFor: ['Optical Dispensing', 'Eyewear Fitting', 'Lens Selection', 'Frame Styling'],
      duration: '3 Years',
      careers: ['Optical Dispenser', 'Eyewear Specialist', 'Frame Stylist'],
      recommended: 'Students interested in optical dispensing, eyewear fitting, and lens selection.',
      coreFocus: 'Optical dispensing, eyewear fitting, lens selection',
      technicalLevel: 'Medium',
      practicalLevel: 'Very High',
      accuracyLevel: 'High',
      industryDemand: 'High',
      certifications: 'Optical Dispensing License, Eyewear Fitting Certificate',
      higherStudy: 'B.Sc Optical Services Lateral Entry',
      commonCareers: 'Optical Dispenser, Eyewear Specialist, Frame Stylist',
      difficulty: 'Medium'
    },
    {
      id: 'contact-lens-fitting',
      icon: '👁',
      color: 'from-green-500 to-green-600',
      title: 'Contact Lens Fitting',
      bestFor: ['Contact Lens Fitting', 'Eye Health', 'Lens Care', 'Patient Education'],
      duration: '3 Years',
      careers: ['Contact Lens Fitter', 'Eye Health Specialist', 'Lens Care Technician'],
      recommended: 'Students interested in contact lens fitting, eye health, and lens care.',
      coreFocus: 'Contact lens fitting, eye health, lens care',
      technicalLevel: 'High',
      practicalLevel: 'Very High',
      accuracyLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Contact Lens Fitting License, Eye Health Certificate',
      higherStudy: 'B.Sc Contact Lens Fitting Lateral Entry',
      commonCareers: 'Contact Lens Fitter, Eye Health Specialist, Lens Care Technician',
      difficulty: 'Hard'
    },
    {
      id: 'low-vision-rehabilitation',
      icon: '👀',
      color: 'from-orange-500 to-orange-600',
      title: 'Low Vision Rehabilitation',
      bestFor: ['Low Vision Care', 'Visual Rehabilitation', 'Assistive Technology', 'Patient Support'],
      duration: '3 Years',
      careers: ['Low Vision Specialist', 'Visual Rehabilitation Technician', 'Assistive Technology Specialist'],
      recommended: 'Students interested in low vision care, visual rehabilitation, and assistive technology.',
      coreFocus: 'Low vision care, visual rehabilitation, assistive technology',
      technicalLevel: 'High',
      practicalLevel: 'High',
      accuracyLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Low Vision Rehabilitation License, Visual Rehabilitation Certificate',
      higherStudy: 'B.Sc Low Vision Rehabilitation Lateral Entry',
      commonCareers: 'Low Vision Specialist, Visual Rehabilitation Technician, Assistive Technology Specialist',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      vision: 'Eye testing, vision analysis, refractive testing',
      optical: 'Optical dispensing, eyewear fitting, lens selection',
      contact: 'Contact lens fitting, eye health, lens care',
      lowVision: 'Low vision care, visual rehabilitation, assistive technology'
    },
    {
      feature: 'Technical Level',
      vision: 'High',
      optical: 'Medium',
      contact: 'High',
      lowVision: 'High'
    },
    {
      feature: 'Practical Level',
      vision: 'Very High',
      optical: 'Very High',
      contact: 'Very High',
      lowVision: 'High'
    },
    {
      feature: 'Accuracy Level',
      vision: 'Very High',
      optical: 'High',
      contact: 'Very High',
      lowVision: 'Very High'
    },
    {
      feature: 'Industry Demand',
      vision: 'High',
      optical: 'High',
      contact: 'High',
      lowVision: 'Medium'
    },
    {
      feature: 'Certifications',
      vision: 'Vision Testing License, Optometry Assistant Certificate',
      optical: 'Optical Dispensing License, Eyewear Fitting Certificate',
      contact: 'Contact Lens Fitting License, Eye Health Certificate',
      lowVision: 'Low Vision Rehabilitation License, Visual Rehabilitation Certificate'
    },
    {
      feature: 'Higher Study Opportunities',
      vision: 'B.Sc Optometry Lateral Entry',
      optical: 'B.Sc Optical Services Lateral Entry',
      contact: 'B.Sc Contact Lens Fitting Lateral Entry',
      lowVision: 'B.Sc Low Vision Rehabilitation Lateral Entry'
    },
    {
      feature: 'Common Careers',
      vision: 'Vision Testing Technician, Optometry Assistant, Visual Acuity Specialist',
      optical: 'Optical Dispenser, Eyewear Specialist, Frame Stylist',
      contact: 'Contact Lens Fitter, Eye Health Specialist, Lens Care Technician',
      lowVision: 'Low Vision Specialist, Visual Rehabilitation Technician, Assistive Technology Specialist'
    },
    {
      feature: 'Difficulty Level',
      vision: 'Hard',
      optical: 'Medium',
      contact: 'Hard',
      lowVision: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '👁️',
      title: 'Choose Vision Testing If:',
      reasons: [
        'You enjoy eye testing and vision analysis',
        'You are interested in refractive testing and visual acuity',
        'You want vision testing-based optometry careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👓',
      title: 'Choose Optical Services If:',
      reasons: [
        'You enjoy optical dispensing and eyewear fitting',
        'You are interested in lens selection and frame styling',
        'You want optical services-based optometry careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '👁',
      title: 'Choose Contact Lens Fitting If:',
      reasons: [
        'You enjoy contact lens fitting and eye health',
        'You are interested in lens care and patient education',
        'You want contact lens-based optometry careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '👀',
      title: 'Choose Low Vision Rehabilitation If:',
      reasons: [
        'You enjoy low vision care and visual rehabilitation',
        'You are interested in assistive technology and patient support',
        'You want low vision-based optometry careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: 'Vision Testing Technician',
      icon: '👁️',
      skills: ['Eye Testing', 'Vision Analysis', 'Refractive Testing', 'Visual Acuity'],
      roadmap: 'Diploma → Vision Technician → Senior Technician → Vision Testing Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Vision Testing Management, Optometry Leadership'
    },
    {
      title: 'Optical Dispenser',
      icon: '👓',
      skills: ['Optical Dispensing', 'Eyewear Fitting', 'Lens Selection', 'Frame Styling'],
      roadmap: 'Diploma → Optical Dispenser → Senior Dispenser → Optical Manager',
      salary: '₶3-12 LPA',
      demand: 'High',
      futureScope: 'Optical Services Management, Eyewear Leadership'
    },
    {
      title: 'Contact Lens Fitter',
      icon: '👁',
      skills: ['Contact Lens Fitting', 'Eye Health', 'Lens Care', 'Patient Education'],
      roadmap: 'Diploma → Contact Lens Fitter → Senior Fitter → Contact Lens Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Contact Lens Management, Eye Health Leadership'
    },
    {
      title: 'Low Vision Specialist',
      icon: '👀',
      skills: ['Low Vision Care', 'Visual Rehabilitation', 'Assistive Technology', 'Patient Support'],
      roadmap: 'Diploma → Low Vision Specialist → Senior Specialist → Low Vision Manager',
      salary: '₶5-18 LPA',
      demand: 'Medium',
      futureScope: 'Low Vision Management, Visual Rehabilitation Leadership'
    },
    {
      title: 'Optometry Assistant',
      icon: '👁️',
      skills: ['Vision Testing', 'Eye Care', 'Patient Support', 'Optical Services'],
      roadmap: 'Diploma → Optometry Assistant → Senior Assistant → Optometry Manager',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Optometry Management, Vision Testing Leadership'
    },
    {
      title: 'Eyewear Specialist',
      icon: '👓',
      skills: ['Eyewear Fitting', 'Frame Styling', 'Lens Selection', 'Customer Service'],
      roadmap: 'Diploma → Eyewear Specialist → Senior Specialist → Eyewear Manager',
      salary: '₶3-12 LPA',
      demand: 'High',
      futureScope: 'Eyewear Management, Optical Services Leadership'
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
        <button onClick={() => setScreen('dental-eye-rehabilitation')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">👁️</span>
            <h1 className="text-4xl font-bold text-white">Optometry Technology Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive optometry technology diploma programs with various specializations for rewarding eye care careers after 10th grade.
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
          <span className="text-white font-medium">Optometry Technology Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search optometry specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="vision-testing">Vision Testing</option>
              <option value="optical-services">Optical Services</option>
              <option value="contact-lens-fitting">Contact Lens Fitting</option>
              <option value="low-vision-rehabilitation">Low Vision Rehabilitation</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Optometry Technology Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Vision Testing</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Optical Services</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Contact Lens</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Low Vision</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.vision}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.optical}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.contact}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.lowVision}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Optometry Technology Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive optometry technology education with vision testing training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Science background with Physics and Biology preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on optometry technology and vision testing training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Optometry Technology License</h4>
                    <p className="text-white/80 text-sm">Optometry Technology and Vision Testing certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Vision Testing</h4>
                    <p className="text-white/80 text-sm">Vision testing procedures and eye examination techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Optical Services</h4>
                    <p className="text-white/80 text-sm">Optical dispensing procedures and eyewear fitting techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eye Health</h4>
                    <p className="text-white/80 text-sm">Eye health procedures and vision care techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Refractive Testing</h4>
                    <p className="text-white/80 text-sm">Refractive testing procedures and visual acuity measurement</p>
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

export default OptometryTechnologyScreen;
