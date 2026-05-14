import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface PhotographyVideoProductionScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const PhotographyVideoProductionScreen: React.FC<PhotographyVideoProductionScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: 'photography',
      icon: '📸',
      color: 'from-orange-500 to-orange-600',
      title: 'Photography',
      bestFor: ['Photography', 'Camera Operation', 'Photo Editing', 'Visual Storytelling'],
      duration: '3 Years',
      careers: ['Photographer', 'Photo Editor', 'Camera Operator', 'Visual Storyteller'],
      recommended: 'Students interested in photography, camera operation, and photo editing.',
      coreFocus: 'Photography, camera operation, photo editing',
      technicalLevel: 'Medium',
      creativeLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Photography Certificate, Camera Operation License',
      higherStudy: 'B.Sc Photography Lateral Entry',
      commonCareers: 'Photographer, Photo Editor, Camera Operator, Visual Storyteller',
      difficulty: 'Medium'
    },
    {
      id: 'video-production',
      icon: '🎥',
      color: 'from-red-500 to-red-600',
      title: 'Video Production',
      bestFor: ['Video Production', 'Camera Operation', 'Video Editing', 'Film Making'],
      duration: '3 Years',
      careers: ['Video Producer', 'Camera Operator', 'Video Editor', 'Film Maker'],
      recommended: 'Students interested in video production, camera operation, and video editing.',
      coreFocus: 'Video production, camera operation, video editing',
      technicalLevel: 'High',
      creativeLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Video Production Certificate, Camera Operation License',
      higherStudy: 'B.Sc Video Production Lateral Entry',
      commonCareers: 'Video Producer, Camera Operator, Video Editor, Film Maker',
      difficulty: 'Hard'
    },
    {
      id: 'cinematography',
      icon: '🎬',
      color: 'from-purple-500 to-purple-600',
      title: 'Cinematography',
      bestFor: ['Cinematography', 'Camera Work', 'Lighting', 'Visual Composition'],
      duration: '3 Years',
      careers: ['Cinematographer', 'Camera Operator', 'Lighting Technician', 'Visual Composer'],
      recommended: 'Students interested in cinematography, camera work, and lighting.',
      coreFocus: 'Cinematography, camera work, lighting',
      technicalLevel: 'Very High',
      creativeLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Cinematography Certificate, Camera Work License',
      higherStudy: 'B.Sc Cinematography Lateral Entry',
      commonCareers: 'Cinematographer, Camera Operator, Lighting Technician, Visual Composer',
      difficulty: 'Very Hard'
    },
    {
      id: 'post-production',
      icon: '✂️',
      color: 'from-blue-500 to-blue-600',
      title: 'Post Production',
      bestFor: ['Post Production', 'Video Editing', 'Color Grading', 'Sound Design'],
      duration: '3 Years',
      careers: ['Post Production Specialist', 'Video Editor', 'Color Grader', 'Sound Designer'],
      recommended: 'Students interested in post production, video editing, and color grading.',
      coreFocus: 'Post production, video editing, color grading',
      technicalLevel: 'High',
      creativeLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'Post Production Certificate, Video Editing License',
      higherStudy: 'B.Sc Post Production Lateral Entry',
      commonCareers: 'Post Production Specialist, Video Editor, Color Grader, Sound Designer',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      photography: 'Photography, camera operation, photo editing',
      video: 'Video production, camera operation, video editing',
      cinematography: 'Cinematography, camera work, lighting',
      post: 'Post production, video editing, color grading'
    },
    {
      feature: 'Technical Level',
      photography: 'Medium',
      video: 'High',
      cinematography: 'Very High',
      post: 'High'
    },
    {
      feature: 'Creative Level',
      photography: 'Very High',
      video: 'Very High',
      cinematography: 'Very High',
      post: 'High'
    },
    {
      feature: 'Industry Demand',
      photography: 'High',
      video: 'Very High',
      cinematography: 'Very High',
      post: 'Very High'
    },
    {
      feature: 'Certifications',
      photography: 'Photography Certificate, Camera Operation License',
      video: 'Video Production Certificate, Camera Operation License',
      cinematography: 'Cinematography Certificate, Camera Work License',
      post: 'Post Production Certificate, Video Editing License'
    },
    {
      feature: 'Higher Study Opportunities',
      photography: 'B.Sc Photography Lateral Entry',
      video: 'B.Sc Video Production Lateral Entry',
      cinematography: 'B.Sc Cinematography Lateral Entry',
      post: 'B.Sc Post Production Lateral Entry'
    },
    {
      feature: 'Common Careers',
      photography: 'Photographer, Photo Editor, Camera Operator, Visual Storyteller',
      video: 'Video Producer, Camera Operator, Video Editor, Film Maker',
      cinematography: 'Cinematographer, Camera Operator, Lighting Technician, Visual Composer',
      post: 'Post Production Specialist, Video Editor, Color Grader, Sound Designer'
    },
    {
      feature: 'Difficulty Level',
      photography: 'Medium',
      video: 'Hard',
      cinematography: 'Very Hard',
      post: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '📸',
      title: 'Choose Photography If:',
      reasons: [
        'You enjoy photography and camera operation',
        'You are interested in photo editing and visual storytelling',
        'You want photography-based creative careers'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🎥',
      title: 'Choose Video Production If:',
      reasons: [
        'You enjoy video production and camera operation',
        'You are interested in video editing and film making',
        'You want video production-based creative careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🎬',
      title: 'Choose Cinematography If:',
      reasons: [
        'You enjoy cinematography and camera work',
        'You are interested in lighting and visual composition',
        'You want cinematography-based creative careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '✂️',
      title: 'Choose Post Production If:',
      reasons: [
        'You enjoy post production and video editing',
        'You are interested in color grading and sound design',
        'You want post production-based creative careers'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const careers = [
    {
      title: 'Photographer',
      icon: '📸',
      skills: ['Photography', 'Camera Operation', 'Photo Editing', 'Visual Storytelling'],
      roadmap: 'Diploma → Photographer → Senior Photographer → Photography Director',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: 'Photography Management, Visual Storytelling Leadership'
    },
    {
      title: 'Video Producer',
      icon: '🎥',
      skills: ['Video Production', 'Camera Operation', 'Video Editing', 'Film Making'],
      roadmap: 'Diploma → Video Producer → Senior Producer → Production Director',
      salary: '₶6-24 LPA',
      demand: 'Very High',
      futureScope: 'Video Production Management, Film Making Leadership'
    },
    {
      title: 'Cinematographer',
      icon: '🎬',
      skills: ['Cinematography', 'Camera Work', 'Lighting', 'Visual Composition'],
      roadmap: 'Diploma → Cinematographer → Senior Cinematographer → Cinematography Director',
      salary: '₶8-30 LPA',
      demand: 'Very High',
      futureScope: 'Cinematography Management, Camera Work Leadership'
    },
    {
      title: 'Post Production Specialist',
      icon: '✂️',
      skills: ['Post Production', 'Video Editing', 'Color Grading', 'Sound Design'],
      roadmap: 'Diploma → Post Production Specialist → Senior Specialist → Post Production Director',
      salary: '₶7-28 LPA',
      demand: 'Very High',
      futureScope: 'Post Production Management, Video Editing Leadership'
    },
    {
      title: 'Camera Operator',
      icon: '📸',
      skills: ['Camera Operation', 'Photography', 'Video Production', 'Visual Storytelling'],
      roadmap: 'Diploma → Camera Operator → Senior Operator → Camera Director',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Camera Operation Management, Photography Leadership'
    },
    {
      title: 'Video Editor',
      icon: '✂️',
      skills: ['Video Editing', 'Post Production', 'Color Grading', 'Sound Design'],
      roadmap: 'Diploma → Video Editor → Senior Editor → Editing Director',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Video Editing Management, Post Production Leadership'
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
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('design-creative-diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">📸</span>
            <h1 className="text-4xl font-bold text-white">Photography & Video Production Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive photography and video production diploma programs with various specializations for rewarding creative careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('design-creative-diplomas')}>Design & Creative Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Photography & Video Production Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search photography/video specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="photography">Photography</option>
              <option value="video-production">Video Production</option>
              <option value="cinematography">Cinematography</option>
              <option value="post-production">Post Production</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Photography & Video Production Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Photography</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Video Production</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Cinematography</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Post Production</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.photography}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.video}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.cinematography}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.post}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Photography & Video Production Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive photography and video production education with hands-on training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Any background with Art and Media Studies preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on photography and video Production training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Photography & Video Production License</h4>
                    <p className="text-white/80 text-sm">Photography and Video Production certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Photography</h4>
                    <p className="text-white/80 text-sm">Photography procedures and camera operation techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Video Production</h4>
                    <p className="text-white/80 text-sm">Video production procedures and camera operation techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Cinematography</h4>
                    <p className="text-white/80 text-sm">Cinematography procedures and camera work techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Post Production</h4>
                    <p className="text-white/80 text-sm">Post production procedures and video editing techniques</p>
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

export default PhotographyVideoProductionScreen;
