import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Palette, Users, TrendingUp, GraduationCap, Edit3, Brush, Video, Activity, Music, Theater, Lightbulb, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ArtsFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const streamCombinations = [
    {
      id: 'hpfa',
      title: 'HPFA',
      subtitle: 'History, Political Science, Fine Arts',
      color: 'from-blue-500 to-indigo-600',
      icon: '🟦',
      bestFor: [
        'Fine Arts',
        'Painting & Illustration',
        'Visual Arts',
        'Art Education',
        'Creative Design Careers'
      ],
      exams: ['NID Entrance', 'NIFT Entrance', 'CUET', 'Fine Arts Entrance Exams'],
      difficulty: 'Medium',
      recommended: 'Students interested in creativity, drawing, visual arts, painting, and artistic careers.',
      fullForm: 'History, Political Science, Fine Arts',
      hasFineArts: true,
      hasPerformingArts: false,
      creativeDesignFocus: 'Very Strong',
      entertainmentIndustryScope: 'Good',
      visualArtsScope: 'Very Strong',
      mainExams: 'NID Entrance, NIFT Entrance, CUET, Fine Arts Entrance Exams',
      careerFlexibility: 'High',
      commonCareers: ['Fine Artist', 'Graphic Designer', 'Illustrator', 'Animator', 'Fashion Designer']
    },
    {
      id: 'pahp',
      title: 'PAHP',
      subtitle: 'Performing Arts, History, Political Science',
      color: 'from-green-500 to-emerald-600',
      icon: '🟩',
      bestFor: [
        'Music',
        'Dance',
        'Theatre & Drama',
        'Performing Arts',
        'Entertainment Industry Careers'
      ],
      exams: ['Performing Arts Entrance Exams', 'CUET', 'Fine Arts & Theatre Entrance Tests'],
      difficulty: 'Medium',
      recommended: 'Students interested in performing arts, stage performance, music, dance, theatre, and creative expression.',
      fullForm: 'Performing Arts, History, Political Science',
      hasFineArts: false,
      hasPerformingArts: true,
      creativeDesignFocus: 'Good',
      entertainmentIndustryScope: 'Very Strong',
      visualArtsScope: 'Good',
      mainExams: 'Performing Arts Entrance Exams, CUET, Fine Arts & Theatre Entrance Tests',
      careerFlexibility: 'Medium',
      commonCareers: ['Musician', 'Dancer', 'Theatre Artist', 'Creative Director', 'Entertainment Professional']
    }
  ];

  const careerOpportunities = [
    {
      id: 'fine-artist',
      title: 'Fine Artist',
      icon: Palette,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → HPFA → Graduation → Fine Arts Course → Fine Artist',
      skills: ['Drawing', 'Painting', 'Creativity', 'Visual Arts', 'Art Techniques'],
      scope: 'Art Galleries, Museums, Freelance, Art Studios',
      salary: '₹3-20 LPA (Entry Level to Senior)',
      exams: ['NID Entrance', 'Fine Arts Entrance Exams', 'CUET']
    },
    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      icon: Edit3,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → HPFA → Graduation → Design Course → Graphic Designer',
      skills: ['Design Software', 'Creativity', 'Typography', 'Visual Communication', 'Brand Design'],
      scope: 'Design Agencies, Companies, Freelance, Advertising',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['NID Entrance', 'NIFT Entrance', 'CUET']
    },
    {
      id: 'illustrator',
      title: 'Illustrator',
      icon: Brush,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → HPFA → Graduation → Illustration Course → Illustrator',
      skills: ['Drawing', 'Digital Illustration', 'Creativity', 'Visual Storytelling', 'Art Direction'],
      scope: 'Publishing, Media, Advertising, Freelance',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['NID Entrance', 'Fine Arts Entrance Exams', 'CUET']
    },
    {
      id: 'animator',
      title: 'Animator',
      icon: Video,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → HPFA → Graduation → Animation Course → Animator',
      skills: ['Animation Software', 'Drawing', 'Storytelling', 'Character Design', 'Motion Graphics'],
      scope: 'Animation Studios, Media Companies, Gaming Industry',
      salary: '₹4-25 LPA (Entry Level to Senior)',
      exams: ['NID Entrance', 'Animation Entrance Exams', 'CUET']
    },
    {
      id: 'fashion-designer',
      title: 'Fashion Designer',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → HPFA → Graduation → Fashion Design → Fashion Designer',
      skills: ['Fashion Design', 'Sketching', 'Trend Analysis', 'Garment Construction', 'Brand Development'],
      scope: 'Fashion Industry, Brands, Freelance, Boutiques',
      salary: '₹4-22 LPA (Entry Level to Senior)',
      exams: ['NIFT Entrance', 'Design Entrance Exams', 'CUET']
    },
    {
      id: 'musician',
      title: 'Musician',
      icon: Music,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → PAHP → Graduation → Music Training → Musician',
      skills: ['Musical Instruments', 'Music Theory', 'Performance', 'Composition', 'Audio Production'],
      scope: 'Music Industry, Entertainment, Freelance, Teaching',
      salary: '₹3-20 LPA (Entry Level to Senior)',
      exams: ['Performing Arts Entrance Exams', 'Music School Entrance', 'CUET']
    },
    {
      id: 'dancer',
      title: 'Dancer',
      icon: Activity,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → PAHP → Graduation → Dance Training → Dancer',
      skills: ['Dance Techniques', 'Performance', 'Choreography', 'Physical Fitness', 'Artistic Expression'],
      scope: 'Dance Companies, Entertainment Industry, Freelance',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['Performing Arts Entrance Exams', 'Dance School Entrance', 'CUET']
    },
    {
      id: 'theatre-artist',
      title: 'Theatre Artist',
      icon: Theater,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → PAHP → Graduation → Theatre Training → Theatre Artist',
      skills: ['Acting', 'Stage Performance', 'Voice Modulation', 'Character Development', 'Script Analysis'],
      scope: 'Theatre Companies, Film Industry, TV, Entertainment',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['Performing Arts Entrance Exams', 'Theatre School Entrance', 'CUET']
    },
    {
      id: 'art-teacher',
      title: 'Art Teacher',
      icon: GraduationCap,
      color: 'from-teal-500 to-cyan-600',
      roadmap: '10th → HPFA → Graduation → B.Ed → Art Teacher',
      skills: ['Teaching', 'Art Knowledge', 'Communication', 'Patience', 'Curriculum Development'],
      scope: 'Schools, Colleges, Art Institutes, Private Teaching',
      salary: '₹3-12 LPA (Entry Level to Senior)',
      exams: ['NID Entrance', 'B.Ed Entrance', 'CUET']
    },
    {
      id: 'creative-director',
      title: 'Creative Director',
      icon: Lightbulb,
      color: 'from-rose-500 to-pink-600',
      roadmap: '10th → HPFA/PAHP → Graduation → Creative Course → Creative Director',
      skills: ['Creative Vision', 'Leadership', 'Art Direction', 'Brand Strategy', 'Team Management'],
      scope: 'Advertising Agencies, Design Studios, Media Companies',
      salary: '₹8-35 LPA (Entry Level to Senior)',
      exams: ['NID Entrance', 'Management Entrance', 'CUET']
    }
  ];

  const competitiveExams = [
    {
      id: 'nid-entrance',
      title: 'NID Entrance',
      icon: Palette,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 pass',
      subjects: 'Design Aptitude, Drawing, General Knowledge, Logical Reasoning',
      difficulty: 'Hard',
      attempts: 'Once a year',
      successRate: '2-4%',
      careers: 'National Institute of Design Programs, Design Careers',
      description: 'National Institute of Design Entrance Examination'
    },
    {
      id: 'nift-entrance',
      title: 'NIFT Entrance',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 pass',
      subjects: 'Creative Ability, General Ability, Situation Test',
      difficulty: 'Hard',
      attempts: 'Once a year',
      successRate: '3-5%',
      careers: 'National Institute of Fashion Technology, Fashion Design Careers',
      description: 'National Institute of Fashion Technology Entrance Examination'
    },
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      attempts: 'Once a year',
      successRate: '15-20%',
      careers: 'University Arts Programs, Fine Arts Courses',
      description: 'Common University Entrance Test for university admissions'
    },
    {
      id: 'fine-arts-entrance',
      title: 'Fine Arts Entrance Exams',
      icon: Brush,
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 pass',
      subjects: 'Drawing, Painting, Art Theory, Portfolio Assessment',
      difficulty: 'Medium to Hard',
      attempts: 'Varies by institute',
      successRate: '8-12%',
      careers: 'Fine Arts Colleges, Art Institutes, Visual Arts Programs',
      description: 'Various fine arts and visual arts entrance examinations'
    },
    {
      id: 'performing-arts-entrance',
      title: 'Performing Arts Entrance Tests',
      icon: Theater,
      color: 'from-cyan-500 to-teal-600',
      eligibility: '10+2 pass',
      subjects: 'Performance, Audition, Theory, Practical Assessment',
      difficulty: 'Medium to Hard',
      attempts: 'Varies by institute',
      successRate: '10-15%',
      careers: 'Performing Arts Schools, Theatre Institutes, Music Colleges',
      description: 'Performing arts and theatre entrance examinations'
    }
  ];

  const skillCourses = [
    {
      id: 'sketching-drawing',
      title: 'Sketching & Drawing',
      icon: Edit3,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for all visual arts and design careers',
      description: 'Master fundamental drawing and sketching techniques'
    },
    {
      id: 'painting-techniques',
      title: 'Painting Techniques',
      icon: Palette,
      color: 'from-purple-500 to-indigo-600',
      level: 'Beginner',
      duration: '4 months',
      relevance: 'Important for fine arts and illustration careers',
      description: 'Learn various painting styles and techniques'
    },
    {
      id: 'graphic-design-basics',
      title: 'Graphic Design Basics',
      icon: Edit3,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for graphic design and visual communication',
      description: 'Learn fundamental graphic design principles and software'
    },
    {
      id: 'animation-basics',
      title: 'Animation Basics',
      icon: Video,
      color: 'from-orange-500 to-red-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Important for animation and digital media careers',
      description: 'Master basic animation principles and techniques'
    },
    {
      id: 'music-training',
      title: 'Music Training',
      icon: Music,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '6 months',
      relevance: 'Essential for music and performing arts careers',
      description: 'Develop musical skills and performance techniques'
    },
    {
      id: 'dance-performance',
      title: 'Dance & Performance Skills',
      icon: Activity,
      color: 'from-indigo-500 to-purple-600',
      level: 'Beginner',
      duration: '4 months',
      relevance: 'Important for dance and theatre careers',
      description: 'Learn dance techniques and performance skills'
    },
    {
      id: 'theatre-acting',
      title: 'Theatre & Acting',
      icon: Theater,
      color: 'from-yellow-500 to-orange-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for theatre and performing arts careers',
      description: 'Master acting techniques and theatre performance'
    },
    {
      id: 'creative-communication',
      title: 'Creative Communication',
      icon: MessageSquare,
      color: 'from-teal-500 to-cyan-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Important for all creative and artistic careers',
      description: 'Develop creative communication and presentation skills'
    }
  ];

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Hard': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Very Hard': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Medium to Hard': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Advanced': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('arts_humanities_focus')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('arts_humanities_focus')}>Arts / Humanities</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Arts Focus</span>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎨</span>
            <h1 className="text-4xl font-bold text-white">Arts Focus</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore humanities pathways focused on fine arts, performing arts, creativity, design, visual arts, and artistic careers after 10th grade.
          </p>
        </motion.div>

        {/* Stream Combination Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Stream Combination Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {streamCombinations.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
                onClick={() => toggleCardExpansion(stream.id)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stream.color} flex items-center justify-center text-white text-2xl`}>
                    {stream.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{stream.title}</h3>
                    <p className="text-white/70">{stream.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Best For</h4>
                    <div className="space-y-1">
                      {stream.bestFor.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-white/80 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Entrance Exams</h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.exams.map((exam, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/50 text-xs">Difficulty</span>
                      <p className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(stream.difficulty)}`}>
                        {stream.difficulty}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Recommended For</h4>
                    <p className="text-white/70 text-sm">{stream.recommended}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Comparison Table</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">HPFA</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">PAHP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Full Form', hpfa: 'History, Political Science, Fine Arts', pahp: 'Performing Arts, History, Political Science' },
                    { feature: 'Fine Arts', hpfa: '✅', pahp: '❌' },
                    { feature: 'Performing Arts', hpfa: '❌', pahp: '✅' },
                    { feature: 'History', hpfa: '✅', pahp: '✅' },
                    { feature: 'Political Science', hpfa: '✅', pahp: '✅' },
                    { feature: 'Creative Design Focus', hpfa: 'Very Strong', pahp: 'Good' },
                    { feature: 'Entertainment Industry Scope', hpfa: 'Good', pahp: 'Very Strong' },
                    { feature: 'Visual Arts Scope', hpfa: 'Very Strong', pahp: 'Good' },
                    { feature: 'Main Entrance Exams', hpfa: 'NID Entrance, NIFT Entrance, CUET, Fine Arts Entrance Exams', pahp: 'Performing Arts Entrance Exams, CUET, Fine Arts & Theatre Entrance Tests' },
                    { feature: 'Career Flexibility', hpfa: 'High', pahp: 'Medium' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.hpfa}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.pahp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Choose This If Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🟦</span>
                <h3 className="text-xl font-bold text-white">Choose HPFA If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy drawing, painting, and visual creativity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You are interested in design & fine arts careers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want creative visual professions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🟩</span>
                <h3 className="text-xl font-bold text-white">Choose PAHP If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You enjoy music, dance, or theatre</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You are interested in performing arts careers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You love stage performance and entertainment</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${career.color} flex items-center justify-center text-white`}>
                    <career.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{career.title}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-white/70 text-sm mb-1">Career Roadmap</h4>
                    <p className="text-white/90 text-sm">{career.roadmap}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white/70 text-sm mb-1">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white/70 text-sm mb-1">Salary Range</h4>
                      <p className="text-white/90 text-sm">{career.salary}</p>
                    </div>
                    <div className="text-right">
                      <h4 className="text-white/70 text-sm mb-1">Main Exams</h4>
                      <p className="text-white/90 text-sm">{career.exams[0]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competitive Exams */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                    <exam.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{exam.title}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <span className="text-white/80 text-xs">{exam.eligibility}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Difficulty</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Success Rate</span>
                    <span className="text-white/80 text-xs">{exam.successRate}</span>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Career Opportunities</span>
                    <p className="text-white/80 text-sm mt-1">{exam.careers}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                    <course.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Level</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelBadge(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Duration</span>
                    <span className="text-white/80 text-xs">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Career Relevance</span>
                    <p className="text-white/80 text-sm mt-1">{course.relevance}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Creative Industry Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Creative Industry Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Creative Careers Growth</h3>
                <p className="text-white/70 text-sm">Expanding opportunities in creative industries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Theater className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Entertainment Industry</h3>
                <p className="text-white/70 text-sm">Growing demand in entertainment and media</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Palette className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Design & Visual Media</h3>
                <p className="text-white/70 text-sm">Rising demand for design and visual arts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Digital Art & Animation</h3>
                <p className="text-white/70 text-sm">Growing digital art and animation careers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
