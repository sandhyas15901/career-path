import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface AnimationMultimediaScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const AnimationMultimediaScreen: React.FC<AnimationMultimediaScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specializations = [
    {
      id: '2d-animation',
      icon: '🎨',
      color: 'from-purple-500 to-purple-600',
      title: '2D Animation',
      bestFor: ['2D Animation', 'Character Design', 'Storyboarding', 'Digital Illustration'],
      duration: '3 Years',
      careers: ['2D Animator', 'Character Designer', 'Storyboard Artist', 'Digital Illustrator'],
      recommended: 'Students interested in 2D animation, character design, and storyboarding.',
      coreFocus: '2D animation, character design, storyboarding',
      technicalLevel: 'High',
      creativeLevel: 'Very High',
      industryDemand: 'High',
      certifications: '2D Animation Certificate, Character Design License',
      higherStudy: 'B.Sc Animation Lateral Entry',
      commonCareers: '2D Animator, Character Designer, Storyboard Artist, Digital Illustrator',
      difficulty: 'Hard'
    },
    {
      id: '3d-animation',
      icon: '🎬',
      color: 'from-blue-500 to-blue-600',
      title: '3D Animation',
      bestFor: ['3D Animation', '3D Modeling', 'Character Rigging', 'Visual Effects'],
      duration: '3 Years',
      careers: ['3D Animator', '3D Modeler', 'Character Rigger', 'VFX Artist'],
      recommended: 'Students interested in 3D animation, 3D modeling, and character rigging.',
      coreFocus: '3D animation, 3D modeling, character rigging',
      technicalLevel: 'Very High',
      creativeLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: '3D Animation Certificate, 3D Modeling License',
      higherStudy: 'B.Sc 3D Animation Lateral Entry',
      commonCareers: '3D Animator, 3D Modeler, Character Rigger, VFX Artist',
      difficulty: 'Very Hard'
    },
    {
      id: 'visual-effects',
      icon: '✨',
      color: 'from-green-500 to-green-600',
      title: 'Visual Effects',
      bestFor: ['VFX', 'Compositing', 'Motion Graphics', 'Digital Effects'],
      duration: '3 Years',
      careers: ['VFX Artist', 'Compositor', 'Motion Graphics Designer', 'Digital Effects Artist'],
      recommended: 'Students interested in VFX, compositing, and motion graphics.',
      coreFocus: 'VFX, compositing, motion graphics',
      technicalLevel: 'Very High',
      creativeLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'VFX Certificate, Compositing License',
      higherStudy: 'B.Sc VFX Lateral Entry',
      commonCareers: 'VFX Artist, Compositor, Motion Graphics Designer, Digital Effects Artist',
      difficulty: 'Very Hard'
    },
    {
      id: 'multimedia-production',
      icon: '🎥',
      color: 'from-orange-500 to-orange-600',
      title: 'Multimedia Production',
      bestFor: ['Multimedia Production', 'Video Editing', 'Audio Production', 'Interactive Media'],
      duration: '3 Years',
      careers: ['Multimedia Producer', 'Video Editor', 'Audio Producer', 'Interactive Media Designer'],
      recommended: 'Students interested in multimedia production, video editing, and audio production.',
      coreFocus: 'Multimedia production, video editing, audio production',
      technicalLevel: 'High',
      creativeLevel: 'High',
      industryDemand: 'High',
      certifications: 'Multimedia Production Certificate, Video Editing License',
      higherStudy: 'B.Sc Multimedia Production Lateral Entry',
      commonCareers: 'Multimedia Producer, Video Editor, Audio Producer, Interactive Media Designer',
      difficulty: 'Hard'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      '2d': '2D animation, character design, storyboarding',
      '3d': '3D animation, 3D modeling, character rigging',
      vfx: 'VFX, compositing, motion graphics',
      multimedia: 'Multimedia production, video editing, audio production'
    },
    {
      feature: 'Technical Level',
      '2d': 'High',
      '3d': 'Very High',
      vfx: 'Very High',
      multimedia: 'High'
    },
    {
      feature: 'Creative Level',
      '2d': 'Very High',
      '3d': 'Very High',
      vfx: 'Very High',
      multimedia: 'High'
    },
    {
      feature: 'Industry Demand',
      '2d': 'High',
      '3d': 'Very High',
      vfx: 'Very High',
      multimedia: 'High'
    },
    {
      feature: 'Certifications',
      '2d': '2D Animation Certificate, Character Design License',
      '3d': '3D Animation Certificate, 3D Modeling License',
      vfx: 'VFX Certificate, Compositing License',
      multimedia: 'Multimedia Production Certificate, Video Editing License'
    },
    {
      feature: 'Higher Study Opportunities',
      '2d': 'B.Sc Animation Lateral Entry',
      '3d': 'B.Sc 3D Animation Lateral Entry',
      vfx: 'B.Sc VFX Lateral Entry',
      multimedia: 'B.Sc Multimedia Production Lateral Entry'
    },
    {
      feature: 'Common Careers',
      '2d': '2D Animator, Character Designer, Storyboard Artist, Digital Illustrator',
      '3d': '3D Animator, 3D Modeler, Character Rigger, VFX Artist',
      vfx: 'VFX Artist, Compositor, Motion Graphics Designer, Digital Effects Artist',
      multimedia: 'Multimedia Producer, Video Editor, Audio Producer, Interactive Media Designer'
    },
    {
      feature: 'Difficulty Level',
      '2d': 'Hard',
      '3d': 'Very Hard',
      vfx: 'Very Hard',
      multimedia: 'Hard'
    }
  ];

  const chooseOptions = [
    {
      icon: '🎨',
      title: 'Choose 2D Animation If:',
      reasons: [
        'You enjoy 2D animation and character design',
        'You are interested in storyboarding and digital illustration',
        'You want 2D animation-based creative careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🎬',
      title: 'Choose 3D Animation If:',
      reasons: [
        'You enjoy 3D animation and 3D modeling',
        'You are interested in character rigging and visual effects',
        'You want 3D animation-based creative careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '✨',
      title: 'Choose Visual Effects If:',
      reasons: [
        'You enjoy VFX and compositing',
        'You are interested in motion graphics and digital effects',
        'You want VFX-based creative careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🎥',
      title: 'Choose Multimedia Production If:',
      reasons: [
        'You enjoy multimedia production and video editing',
        'You are interested in audio production and interactive media',
        'You want multimedia production-based creative careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const careers = [
    {
      title: '2D Animator',
      icon: '🎨',
      skills: ['2D Animation', 'Character Design', 'Storyboarding', 'Digital Illustration'],
      roadmap: 'Diploma → 2D Animator → Senior Animator → Animation Director',
      salary: '₶4-16 LPA',
      demand: 'High',
      futureScope: '2D Animation Management, Character Design Leadership'
    },
    {
      title: '3D Animator',
      icon: '🎬',
      skills: ['3D Animation', '3D Modeling', 'Character Rigging', 'Visual Effects'],
      roadmap: 'Diploma → 3D Animator → Senior Animator → 3D Animation Director',
      salary: '₶6-24 LPA',
      demand: 'Very High',
      futureScope: '3D Animation Management, VFX Leadership'
    },
    {
      title: 'VFX Artist',
      icon: '✨',
      skills: ['VFX', 'Compositing', 'Motion Graphics', 'Digital Effects'],
      roadmap: 'Diploma → VFX Artist → Senior VFX Artist → VFX Director',
      salary: '₶7-28 LPA',
      demand: 'Very High',
      futureScope: 'VFX Management, Compositing Leadership'
    },
    {
      title: 'Multimedia Producer',
      icon: '🎥',
      skills: ['Multimedia Production', 'Video Editing', 'Audio Production', 'Interactive Media'],
      roadmap: 'Diploma → Multimedia Producer → Senior Producer → Production Director',
      salary: '₶5-20 LPA',
      demand: 'High',
      futureScope: 'Multimedia Production Management, Video Production Leadership'
    },
    {
      title: 'Character Designer',
      icon: '🎨',
      skills: ['Character Design', '2D Animation', 'Digital Illustration', 'Concept Art'],
      roadmap: 'Diploma → Character Designer → Senior Designer → Character Art Director',
      salary: '₶5-18 LPA',
      demand: 'High',
      futureScope: 'Character Design Management, Concept Art Leadership'
    },
    {
      title: 'Motion Graphics Designer',
      icon: '✨',
      skills: ['Motion Graphics', 'VFX', 'Compositing', 'Digital Effects'],
      roadmap: 'Diploma → Motion Graphics Designer → Senior Designer → Creative Director',
      salary: '₶6-22 LPA',
      demand: 'Very High',
      futureScope: 'Motion Graphics Management, VFX Leadership'
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
        <button onClick={() => setScreen('design-creative-diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎬</span>
            <h1 className="text-4xl font-bold text-white">Animation & Multimedia Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive animation and multimedia diploma programs with various specializations for rewarding creative careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('design-creative-diplomas')}>Design & Creative Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Animation & Multimedia Diploma</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search animation specializations, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Specializations</option>
              <option value="2d-animation">2D Animation</option>
              <option value="3d-animation">3D Animation</option>
              <option value="visual-effects">Visual Effects</option>
              <option value="multimedia-production">Multimedia Production</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Animation & Multimedia Specializations</h2>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">2D Animation</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">3D Animation</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Visual Effects</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Multimedia</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row['2d']}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row['3d']}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.vfx}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.multimedia}</td>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Animation & Multimedia Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Duration: 3 Years</h4>
                    <p className="text-white/80 text-sm">Comprehensive animation and multimedia education with hands-on training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eligibility: 10th Pass</h4>
                    <p className="text-white/80 text-sm">Any background with Art and Computer Science preferred</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Practical Training: 6 Months</h4>
                    <p className="text-white/80 text-sm">Hands-on animation and multimedia production training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Certification: Animation & Multimedia License</h4>
                    <p className="text-white/80 text-sm">Animation and Multimedia Production certification</p>
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
                    <h4 className="text-white font-semibold mb-1">Animation Techniques</h4>
                    <p className="text-white/80 text-sm">2D/3D animation procedures and character design techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Visual Effects</h4>
                    <p className="text-white/80 text-sm">VFX procedures and compositing techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Multimedia Production</h4>
                    <p className="text-white/80 text-sm">Multimedia production procedures and video editing techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Creative Design</h4>
                    <p className="text-white/80 text-sm">Creative design procedures and digital art techniques</p>
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

export default AnimationMultimediaScreen;
