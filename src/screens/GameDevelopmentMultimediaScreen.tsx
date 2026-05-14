import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface GameDevelopmentMultimediaScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const GameDevelopmentMultimediaScreen: React.FC<GameDevelopmentMultimediaScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const diplomaCourses = [
    {
      id: 'game-development',
      icon: '🎮',
      color: 'from-red-500 to-red-600',
      title: 'Game Development Diploma',
      bestFor: ['Game Programming', 'Game Design', 'Game Art', 'Game Testing'],
      duration: '3 Years',
      careers: ['Game Developer', 'Game Designer', 'Game Artist', 'Game Tester'],
      recommended: 'Students interested in game development, programming, and interactive entertainment.',
      coreFocus: 'Game programming, game design, game engines',
      technicalLevel: 'Intermediate',
      creativeLevel: 'Very High',
      practicalWork: 'Very High',
      industryDemand: 'High',
      certifications: 'Unity, Unreal Engine, Game Development',
      higherStudy: 'B.E/B.Tech Computer Science/Game Development Lateral Entry',
      commonCareers: 'Game Developer, Game Designer, Game Artist',
      difficulty: 'Medium-Hard'
    },
    {
      id: 'animation-vfx',
      icon: '🎬',
      color: 'from-purple-500 to-purple-600',
      title: 'Animation & VFX Diploma',
      bestFor: ['Animation', 'Visual Effects', '3D Modeling', 'Motion Graphics'],
      duration: '3 Years',
      careers: ['Animator', 'VFX Artist', '3D Modeler', 'Motion Graphics Designer'],
      recommended: 'Students interested in animation, visual effects, and 3D graphics.',
      coreFocus: 'Animation techniques, VFX creation, 3D modeling',
      technicalLevel: 'Intermediate',
      creativeLevel: 'Very High',
      practicalWork: 'Very High',
      industryDemand: 'High',
      certifications: 'Maya, Blender, After Effects, VFX',
      higherStudy: 'B.E/B.Tech Animation/VFX/Multimedia Lateral Entry',
      commonCareers: 'Animator, VFX Artist, 3D Modeler',
      difficulty: 'Medium-Hard'
    },
    {
      id: 'ui-ux-design',
      icon: '🎨',
      color: 'from-blue-500 to-blue-600',
      title: 'UI/UX Design Diploma',
      bestFor: ['UI Design', 'UX Design', 'Web Design', 'App Design'],
      duration: '3 Years',
      careers: ['UI Designer', 'UX Designer', 'Product Designer', 'Web Designer'],
      recommended: 'Students interested in user interface design, user experience, and digital product design.',
      coreFocus: 'UI/UX design, user research, prototyping',
      technicalLevel: 'Intermediate',
      creativeLevel: 'Very High',
      practicalWork: 'High',
      industryDemand: 'Very High',
      certifications: 'Figma, Adobe XD, Sketch, UI/UX',
      higherStudy: 'B.E/B.Tech Design/Multimedia Lateral Entry',
      commonCareers: 'UI Designer, UX Designer, Product Designer',
      difficulty: 'Medium'
    },
    {
      id: 'multimedia-design',
      icon: '🖼️',
      color: 'from-green-500 to-green-600',
      title: 'Multimedia Design Diploma',
      bestFor: ['Graphic Design', 'Web Design', 'Video Editing', 'Digital Media'],
      duration: '3 Years',
      careers: ['Graphic Designer', 'Web Designer', 'Video Editor', 'Digital Media Specialist'],
      recommended: 'Students interested in graphic design, web design, and digital media production.',
      coreFocus: 'Graphic design, web design, digital media',
      technicalLevel: 'Beginner',
      creativeLevel: 'High',
      practicalWork: 'High',
      industryDemand: 'Medium',
      certifications: 'Adobe Creative Suite, Graphic Design, Web Design',
      higherStudy: 'B.E/B.Tech Design/Multimedia Lateral Entry',
      commonCareers: 'Graphic Designer, Web Designer, Video Editor',
      difficulty: 'Easy-Medium'
    }
  ];

  const comparisonData = [
    { 
      feature: 'Core Focus',
      gameDev: 'Game programming, game design, game engines',
      animationVFX: 'Animation techniques, VFX creation, 3D modeling',
      uiUx: 'UI/UX design, user research, prototyping',
      multimedia: 'Graphic design, web design, digital media'
    },
    {
      feature: 'Technical Level',
      gameDev: 'Intermediate',
      animationVFX: 'Intermediate',
      uiUx: 'Intermediate',
      multimedia: 'Beginner'
    },
    {
      feature: 'Creative Level',
      gameDev: 'Very High',
      animationVFX: 'Very High',
      uiUx: 'Very High',
      multimedia: 'High'
    },
    {
      feature: 'Practical Work',
      gameDev: 'Very High',
      animationVFX: 'Very High',
      uiUx: 'High',
      multimedia: 'High'
    },
    {
      feature: 'Industry Demand',
      gameDev: 'High',
      animationVFX: 'High',
      uiUx: 'Very High',
      multimedia: 'Medium'
    },
    {
      feature: 'Certifications',
      gameDev: 'Unity, Unreal Engine, Game Development',
      animationVFX: 'Maya, Blender, After Effects, VFX',
      uiUx: 'Figma, Adobe XD, Sketch, UI/UX',
      multimedia: 'Adobe Creative Suite, Graphic Design, Web Design'
    },
    {
      feature: 'Higher Study Opportunities',
      gameDev: 'B.E/B.Tech Computer Science/Game Development Lateral Entry',
      animationVFX: 'B.E/B.Tech Animation/VFX/Multimedia Lateral Entry',
      uiUx: 'B.E/B.Tech Design/Multimedia Lateral Entry',
      multimedia: 'B.E/B.Tech Design/Multimedia Lateral Entry'
    },
    {
      feature: 'Common Careers',
      gameDev: 'Game Developer, Game Designer, Game Artist',
      animationVFX: 'Animator, VFX Artist, 3D Modeler',
      uiUx: 'UI Designer, UX Designer, Product Designer',
      multimedia: 'Graphic Designer, Web Designer, Video Editor'
    },
    {
      feature: 'Difficulty Level',
      gameDev: 'Medium-Hard',
      animationVFX: 'Medium-Hard',
      uiUx: 'Medium',
      multimedia: 'Easy-Medium'
    }
  ];

  const chooseOptions = [
    {
      icon: '🎮',
      title: 'Choose Game Development If:',
      reasons: [
        'You enjoy game programming and design',
        'You are interested in interactive entertainment',
        'You want game development careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🎬',
      title: 'Choose Animation & VFX If:',
      reasons: [
        'You enjoy animation and visual effects',
        'You are interested in 3D graphics',
        'You want animation/VFX careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🎨',
      title: 'Choose UI/UX Design If:',
      reasons: [
        'You enjoy user interface and experience design',
        'You are interested in digital product design',
        'You want UI/UX design careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🖼️',
      title: 'Choose Multimedia Design If:',
      reasons: [
        'You enjoy graphic design and digital media',
        'You are interested in web design and video editing',
        'You want multimedia design careers'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const careers = [
    {
      title: 'Game Developer',
      icon: '🎮',
      skills: ['Game Programming', 'Game Engines', 'Game Design'],
      roadmap: 'Diploma → Junior Game Developer → Game Developer → Senior Game Developer',
      salary: '₹4-15 LPA',
      demand: 'High',
      futureScope: 'Mobile Gaming, VR/AR Games, Indie Game Development'
    },
    {
      title: 'UI/UX Designer',
      icon: '🎨',
      skills: ['UI Design', 'UX Research', 'Prototyping'],
      roadmap: 'Diploma → Junior UI/UX Designer → UI/UX Designer → Senior Designer',
      salary: '₹5-18 LPA',
      demand: 'Very High',
      futureScope: 'Product Design, Design Systems, UX Strategy'
    },
    {
      title: 'Animator',
      icon: '🎬',
      skills: ['Animation', '3D Modeling', 'Character Design'],
      roadmap: 'Diploma → Junior Animator → Animator → Senior Animator',
      salary: '₹3-12 LPA',
      demand: 'High',
      futureScope: '3D Animation, Motion Graphics, Character Animation'
    },
    {
      title: 'VFX Artist',
      icon: '✨',
      skills: ['Visual Effects', 'Compositing', '3D Effects'],
      roadmap: 'Diploma → Junior VFX Artist → VFX Artist → Senior VFX Artist',
      salary: '₹4-14 LPA',
      demand: 'High',
      futureScope: 'Film VFX, Game VFX, AR/VR Effects'
    },
    {
      title: 'Game Designer',
      icon: '🎯',
      skills: ['Game Design', 'Level Design', 'Game Mechanics'],
      roadmap: 'Diploma → Junior Game Designer → Game Designer → Lead Designer',
      salary: '₹5-16 LPA',
      demand: 'High',
      futureScope: 'Game Systems Design, Narrative Design, Game Balance'
    },
    {
      title: 'Graphic Designer',
      icon: '🖼️',
      skills: ['Graphic Design', 'Digital Art', 'Brand Design'],
      roadmap: 'Diploma → Junior Graphic Designer → Graphic Designer → Senior Designer',
      salary: '₹3-10 LPA',
      demand: 'Medium',
      futureScope: 'Digital Design, Brand Identity, Motion Graphics'
    }
  ];

  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech Computer Science/Game Development',
      successRate: '75%'
    },
    {
      title: 'Polytechnic CET',
      icon: '🎯',
      eligibility: '10th Pass',
      process: 'State Exam → Merit List → Admission',
      higherStudy: 'Lateral Entry to Engineering',
      successRate: '60%'
    },
    {
      title: 'Direct Admission',
      icon: '🎓',
      eligibility: '10th Pass',
      process: 'Application → Interview → Admission',
      higherStudy: 'Regular B.E/B.Tech Admission',
      successRate: '85%'
    },
    {
      title: 'Lateral Entry to B.E/B.Tech CSE/Game Dev',
      icon: '🔄',
      eligibility: 'Diploma in Computer Science/Game Development',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  const skillCourses = [
    {
      title: 'Unity Game Development',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🎮',
      relevance: 'Essential for game development',
      skills: ['Unity Engine', 'C# Programming', 'Game Design']
    },
    {
      title: 'Unreal Engine',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🎯',
      relevance: 'Advanced game development',
      skills: ['Unreal Engine', 'Blueprints', 'C++ Programming']
    },
    {
      title: 'Adobe Creative Suite',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🎨',
      relevance: 'Essential for design',
      skills: ['Photoshop', 'Illustrator', 'InDesign']
    },
    {
      title: 'Figma UI/UX Design',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🖌️',
      relevance: 'Modern UI/UX design',
      skills: ['Figma', 'UI Design', 'UX Research']
    },
    {
      title: 'Maya Animation',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🎬',
      relevance: 'Professional animation',
      skills: ['3D Animation', 'Character Rigging', 'Maya Tools']
    },
    {
      title: 'Blender 3D',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🎭',
      relevance: 'Free 3D software',
      skills: ['3D Modeling', 'Animation', 'Rendering']
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

  const getGrowthBadge = (growth: string) => {
    const growthValue = parseInt(growth.replace(/\D/g, ''));
    if (growthValue >= 20) return 'bg-green-500/20 text-green-300 border-green-500/30';
    if (growthValue >= 15) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (growthValue >= 10) return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('computer_it_diplomas')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎮</span>
            <h1 className="text-4xl font-bold text-white">Game Development & Multimedia</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on game development, animation, VFX, UI/UX design, and multimedia for creative technology careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('computer_it_diplomas')}>Computer & IT Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Game Development & Multimedia</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all">
              <option value="all">All Courses</option>
              <option value="game">Game Development</option>
              <option value="animation">Animation & VFX</option>
              <option value="uiux">UI/UX Design</option>
              <option value="multimedia">Multimedia Design</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaCourses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group" onClick={() => toggleCardExpansion(course.id)}>
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mx-auto mb-3`}>{course.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Best For</h4>
                    <div className="space-y-1">{course.bestFor.map((item, idx) => (<div key={idx} className="flex items-center gap-2"><Check className="w-3 h-3 text-green-400 flex-shrink-0" /><span className="text-white/80 text-xs">{item}</span></div>))}</div>
                  </div>
                  <div><span className="text-white/50 text-xs">Duration</span><p className="text-white/90 text-sm font-medium">{course.duration}</p></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-1">{course.careers.slice(0, 2).map((career, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">{career}</span>))}{course.careers.length > 2 && (<span className="px-2 py-1 bg-white/5 text-white/60 rounded-full text-xs">+{course.careers.length - 2} more</span>)}</div>
                  </div>
                  <div className="pt-3 border-t border-white/10"><p className="text-white/70 text-xs italic">{course.recommended}</p></div>
                </div>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: expandedCard === course.id ? 1 : 0, height: expandedCard === course.id ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="pt-4 border-t border-white/10 mt-4">
                  <div className="grid grid-cols-1 gap-3 text-xs">
                    <div className="flex justify-between"><span className="text-white/50">Core Focus:</span><span className="text-white/80">{course.coreFocus}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Technical Level:</span><span className="text-white/80">{course.technicalLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Creative Level:</span><span className="text-white/80">{course.creativeLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Practical Work:</span><span className="text-white/80">{course.practicalWork}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Industry Demand:</span><span className="text-white/80">{course.industryDemand}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Certifications:</span><span className="text-white/80">{course.certifications}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Higher Study:</span><span className="text-white/80">{course.higherStudy}</span></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Comparison Table</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white font-semibold text-sm">Feature</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Game Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Animation & VFX</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">UI/UX Design</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Multimedia Design</th>
                  </tr>
                </thead>
                <tbody>{comparisonData.map((row, index) => (<tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.gameDev}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.animationVFX}</td>
                  <td className="px-4 py-3 text-white/80 text-sm text-center">{row.uiUx}</td>
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
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
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
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + index * 0.05 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Polytechnic Admissions & Higher Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissions.map((admission, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-purple-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{admission.icon}</div>
                  <h3 className="text-lg font-bold text-white">{admission.title}</h3>
                </div>
                <div className="space-y-3">
                  <div><span className="text-white/50 text-xs">Eligibility</span><p className="text-white/80 text-sm">{admission.eligibility}</p></div>
                  <div><span className="text-white/50 text-xs">Admission Process</span><p className="text-white/80 text-sm">{admission.process}</p></div>
                  <div><span className="text-white/50 text-xs">Higher Study Opportunities</span><p className="text-white/80 text-sm">{admission.higherStudy}</p></div>
                  <div><span className="text-white/50 text-xs">Success Rate</span><p className="text-white/90 text-sm font-medium">{admission.successRate}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-purple-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">{course.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div><span className="text-white/50 text-xs">Level</span><p className="text-white/90 text-sm font-medium">{course.level}</p></div>
                    <div><span className="text-white/50 text-xs">Duration</span><p className="text-white/90 text-sm font-medium">{course.duration}</p></div>
                  </div>
                  <div><span className="text-white/50 text-xs">Career Relevance</span><p className="text-white/80 text-sm">{course.relevance}</p></div>
                  <div>
                    <span className="text-white/50 text-xs">Skills Covered</span>
                    <div className="flex flex-wrap gap-1 mt-1">{course.skills.map((skill, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{skill}</span>))}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries Hiring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Gaming Industry',
                icon: '🎮',
                demand: 'High',
                growth: '+18%',
                opportunities: 'Game Studios, Mobile Game Companies, Indie Developers',
                types: ['Game Development', 'Game Design', 'Game Art']
              },
              {
                name: 'Animation Studios',
                icon: '🎬',
                demand: 'High',
                growth: '+15%',
                opportunities: 'Animation Companies, Film Studios, VFX Studios',
                types: ['Animation', 'VFX', '3D Modeling']
              },
              {
                name: 'Tech Companies',
                icon: '💻',
                demand: 'Very High',
                growth: '+20%',
                opportunities: 'Software Companies, Startups, Product Companies',
                types: ['UI/UX Design', 'Product Design', 'Digital Design']
              },
              {
                name: 'Media & Entertainment',
                icon: '📺',
                demand: 'Medium',
                growth: '+12%',
                opportunities: 'TV Channels, Media Houses, Entertainment Companies',
                types: ['Graphic Design', 'Video Editing', 'Motion Graphics']
              },
              {
                name: 'Advertising Agencies',
                icon: '📢',
                demand: 'Medium',
                growth: '+10%',
                opportunities: 'Ad Agencies, Marketing Companies, Brand Agencies',
                types: ['Creative Design', 'Brand Design', 'Digital Marketing']
              },
              {
                name: 'E-learning Companies',
                icon: '📚',
                demand: 'High',
                growth: '+22%',
                opportunities: 'EdTech Companies, Online Learning Platforms, Training Companies',
                types: ['Educational Design', 'Interactive Content', 'Learning Design']
              }
            ].map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{industry.icon}</div>
                  <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Demand</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(industry.demand)}`}>{industry.demand}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Growth</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(industry.growth)}`}>{industry.growth}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Opportunities</span>
                    <p className="text-white/80 text-sm">{industry.opportunities}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Job Types</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {industry.types.map((type, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{type}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Freelancing & Startup Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Game Development Freelancer',
                icon: '🎮',
                skills: ['Game Development', 'Unity/Unreal', 'Game Design'],
                earning: '₹30,000-2,00,000/month',
                growth: 'High',
                opportunities: 'Game Projects, Indie Games, Game Consulting'
              },
              {
                title: 'UI/UX Design Freelancer',
                icon: '🎨',
                skills: ['UI Design', 'UX Research', 'Prototyping'],
                earning: '₹25,000-1,50,000/month',
                growth: 'Very High',
                opportunities: 'App Design, Web Design, Product Design'
              },
              {
                title: 'Animation Freelancer',
                icon: '🎬',
                skills: ['Animation', '3D Modeling', 'Character Design'],
                earning: '₹20,000-1,20,000/month',
                growth: 'High',
                opportunities: 'Animation Projects, Character Design, Motion Graphics'
              },
              {
                title: 'Game Studio Founder',
                icon: '🚀',
                skills: ['Game Development', 'Business Management', 'Team Leadership'],
                earning: '₹50,000-5,00,000/month',
                growth: 'Very High',
                opportunities: 'Game Studio, Indie Development, Game Publishing'
              },
              {
                title: 'Design Agency Owner',
                icon: '🏢',
                skills: ['Design Management', 'Client Relations', 'Creative Direction'],
                earning: '₹40,000-3,00,000/month',
                growth: 'High',
                opportunities: 'Design Agency, Creative Studio, Brand Consultancy'
              },
              {
                title: 'Content Creator',
                icon: '📺',
                skills: ['Content Creation', 'Video Production', 'Social Media'],
                earning: '₹15,000-2,00,000/month',
                growth: 'Very High',
                opportunities: 'YouTube, Twitch, Content Platforms, Brand Partnerships'
              }
            ].map((opportunity, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{opportunity.icon}</div>
                  <h3 className="text-lg font-bold text-white">{opportunity.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Skills Required</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {opportunity.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Earning Potential</span>
                    <p className="text-white/90 text-sm font-medium">{opportunity.earning}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(opportunity.growth)}`}>{opportunity.growth}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Opportunities</span>
                      <p className="text-white/80 text-sm">{opportunity.opportunities}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Government Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Doordarshan Designer',
                icon: '📺',
                eligibility: 'Diploma in Multimedia/Design',
                skills: ['Graphic Design', 'Video Production', 'Broadcast Design'],
                growth: 'Stable government media',
                salary: '₹4-10 LPA'
              },
              {
                title: 'NIC UI/UX Designer',
                icon: '🏛️',
                eligibility: 'Diploma in UI/UX Design/Multimedia',
                skills: ['UI/UX Design', 'Government Systems', 'Digital Services'],
                growth: 'Digital governance initiatives',
                salary: '₹5-12 LPA'
              },
              {
                title: 'Education Department Designer',
                icon: '📚',
                eligibility: 'Diploma in Multimedia/Design',
                skills: ['Educational Design', 'Content Creation', 'E-learning'],
                growth: 'Education sector expansion',
                salary: '₹3-8 LPA'
              },
              {
                title: 'Public Sector Game Developer',
                icon: '🎮',
                eligibility: 'Diploma in Game Development',
                skills: ['Game Development', 'Educational Games', 'Serious Games'],
                growth: 'EdTech government initiatives',
                salary: '₹4-11 LPA'
              },
              {
                title: 'Government Animation Studio',
                icon: '🎬',
                eligibility: 'Diploma in Animation/VFX',
                skills: ['Animation', 'Government Media', 'Public Content'],
                growth: 'Public broadcasting sector',
                salary: '₹4-9 LPA'
              },
              {
                title: 'Digital Media Officer',
                icon: '📱',
                eligibility: 'Diploma in Multimedia/Digital Media',
                skills: ['Digital Media', 'Content Management', 'Social Media'],
                growth: 'Digital government services',
                salary: '₹3-8 LPA'
              }
            ].map((job, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{job.icon}</div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/80 text-sm">{job.eligibility}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Required Skills</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Career Growth</span>
                    <p className="text-white/80 text-sm">{job.growth}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Salary Range</span>
                    <p className="text-white/90 text-sm font-medium">{job.salary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Gaming Industry Boom',
                icon: '🎮',
                growth: '18%',
                description: 'Massive growth in mobile gaming, indie games, and game development',
                salaryImpact: '+20%',
                demand: 'High'
              },
              {
                title: 'UI/UX Design Revolution',
                icon: '🎨',
                growth: '20%',
                description: 'Growing importance of user experience in digital products',
                salaryImpact: '+25%',
                demand: 'Very High'
              },
              {
                title: 'Animation & VFX Growth',
                icon: '🎬',
                growth: '15%',
                description: 'Increasing demand for animation in films, games, and media',
                salaryImpact: '+18%',
                demand: 'High'
              },
              {
                title: 'Metaverse Development',
                icon: '🌐',
                growth: '25%',
                description: 'Emerging opportunities in virtual reality and metaverse platforms',
                salaryImpact: '+30%',
                demand: 'Very High'
              },
              {
                title: 'Content Creator Economy',
                icon: '📺',
                growth: '22%',
                description: 'Rise of content creation and digital media production',
                salaryImpact: '+22%',
                demand: 'High'
              }
            ].map((trend, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 + index * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{trend.icon}</div>
                  <h3 className="text-lg font-bold text-white">{trend.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Description</span>
                    <p className="text-white/80 text-sm">{trend.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth Rate</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(trend.growth)}`}>{trend.growth}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Salary Impact</span>
                      <p className="text-white/90 text-sm font-medium">{trend.salaryImpact}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Industry Demand</span>
                    <p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(trend.demand)}`}>{trend.demand}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GameDevelopmentMultimediaScreen;
