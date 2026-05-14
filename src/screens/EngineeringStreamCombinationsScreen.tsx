import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, X, Search, Filter, ChevronDown, ChevronUp, Star, TrendingUp, Award, Briefcase, DollarSign, BookOpen, Target } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function EngineeringStreamCombinationsScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombinations = [
    {
      id: 'pcm',
      title: 'PCM',
      subtitle: 'Physics, Chemistry, Mathematics',
      color: 'from-blue-500 to-indigo-600',
      bestFor: ['Mechanical Engineering', 'Civil Engineering', 'Architecture', 'Core Engineering Careers'],
      exams: ['JEE Main', 'JEE Advanced', 'KCET', 'COMEDK', 'BITSAT'],
      difficulty: 'High',
      recommended: 'Students interested in Mathematics, Physics, problem-solving, and engineering',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics',
        mathematics: true,
        electronics: false,
        geology: false,
        difficultyLevel: 'High',
        engineeringCareers: true,
        researchCareers: true,
        mainEntranceExams: ['JEE Main', 'JEE Advanced', 'KCET'],
        careerFlexibility: 'Very High',
        commonCareers: ['Mechanical Engineer', 'Civil Engineer', 'Architect', 'Core Engineer']
      }
    },
    {
      id: 'pcme',
      title: 'PCME',
      subtitle: 'Physics, Chemistry, Mathematics, Electronics',
      color: 'from-green-500 to-emerald-600',
      bestFor: ['Electronics Engineering', 'Robotics', 'Embedded Systems', 'Hardware Technology'],
      exams: ['JEE Main', 'KCET', 'COMEDK'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in electronics, circuits, robotics, and practical technology systems',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics, Electronics',
        mathematics: true,
        electronics: true,
        geology: false,
        difficultyLevel: 'Medium-High',
        engineeringCareers: true,
        researchCareers: true,
        mainEntranceExams: ['JEE Main', 'KCET', 'COMEDK'],
        careerFlexibility: 'High',
        commonCareers: ['Electronics Engineer', 'Robotics Engineer', 'Hardware Engineer']
      }
    },
    {
      id: 'pcmg',
      title: 'PCMG',
      subtitle: 'Physics, Chemistry, Mathematics, Geology (Rare Combination)',
      color: 'from-yellow-500 to-orange-600',
      bestFor: ['Geology', 'Mining Engineering', 'Environmental Engineering', 'Earth Science Research'],
      exams: ['KCET', 'CUET'],
      difficulty: 'Medium',
      recommended: 'Students interested in earth science, mining, environmental studies, and research',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics, Geology',
        mathematics: true,
        electronics: false,
        geology: true,
        difficultyLevel: 'Medium',
        engineeringCareers: true,
        researchCareers: true,
        mainEntranceExams: ['KCET', 'CUET'],
        careerFlexibility: 'Medium',
        commonCareers: ['Mining Engineer', 'Environmental Engineer', 'Geologist']
      }
    }
  ];

  const recommendations = [
    {
      id: 'pcm',
      color: 'from-blue-500 to-indigo-600',
      title: 'Choose PCM If:',
      reasons: [
        'You want core engineering careers',
        'You enjoy Mathematics & Physics',
        'You want broad engineering opportunities'
      ]
    },
    {
      id: 'pcme',
      color: 'from-green-500 to-emerald-600',
      title: 'Choose PCME If:',
      reasons: [
        'You are interested in electronics & robotics',
        'You enjoy circuits and hardware systems',
        'You like practical engineering technology'
      ]
    },
    {
      id: 'pcmg',
      color: 'from-yellow-500 to-orange-600',
      title: 'Choose PCMG If:',
      reasons: [
        'You are interested in geology & earth science',
        'You enjoy environmental studies',
        'You want research-oriented careers'
      ]
    }
  ];

  const careerPaths = [
    {
      id: 'mechanical',
      title: 'Mechanical Engineer',
      icon: Briefcase,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → PCM → JEE → B.Tech Mechanical → Specialization',
      skills: ['Mathematics', 'Physics', 'Problem Solving', 'CAD Software'],
      scope: 'Automotive, Aerospace, Manufacturing, Energy',
      salary: '₹4-12 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'JEE Advanced', 'KCET']
    },
    {
      id: 'civil',
      title: 'Civil Engineer',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → PCM → JEE → B.Tech Civil → Specialization',
      skills: ['Physics', 'Mathematics', 'Design', 'Project Management'],
      scope: 'Construction, Infrastructure, Urban Planning',
      salary: '₹3-10 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'JEE Advanced', 'KCET']
    },
    {
      id: 'electronics',
      title: 'Electronics Engineer',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → PCME → JEE → B.Tech ECE → Specialization',
      skills: ['Electronics', 'Mathematics', 'Circuits', 'Programming'],
      scope: 'Semiconductor, Telecom, IoT, Hardware',
      salary: '₹4-15 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK']
    },
    {
      id: 'robotics',
      title: 'Robotics Engineer',
      icon: Briefcase,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → PCME → JEE → B.Tech → Robotics Specialization',
      skills: ['Electronics', 'Programming', 'AI/ML', 'Mechanical'],
      scope: 'Automation, Manufacturing, Healthcare, Defense',
      salary: '₹5-20 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK']
    },
    {
      id: 'mining',
      title: 'Mining Engineer',
      icon: Briefcase,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → PCMG → KCET → B.Tech Mining → Specialization',
      skills: ['Geology', 'Physics', 'Safety', 'Operations'],
      scope: 'Mining, Minerals, Energy, Environmental',
      salary: '₹4-12 LPA (Entry Level to Senior)',
      exams: ['KCET', 'CUET']
    },
    {
      id: 'environmental',
      title: 'Environmental Engineer',
      icon: Briefcase,
      color: 'from-emerald-500 to-green-600',
      roadmap: '10th → PCMG → KCET → B.Tech Environmental → Specialization',
      skills: ['Environmental Science', 'Chemistry', 'Regulations', 'Research'],
      scope: 'Environmental Protection, Sustainability, Consulting',
      salary: '₹3-10 LPA (Entry Level to Senior)',
      exams: ['KCET', 'CUET']
    }
  ];

  const entranceExams = [
    {
      id: 'jee-main',
      title: 'JEE Main',
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 with PCM/PCME with 75% marks',
      subjects: 'Physics, Chemistry, Mathematics',
      difficulty: 'High',
      courses: ['B.Tech', 'B.E.', 'B.Arch'],
      description: 'National level engineering entrance exam for NITs, IIITs, and other central institutions'
    },
    {
      id: 'jee-advanced',
      title: 'JEE Advanced',
      color: 'from-purple-500 to-pink-600',
      eligibility: 'Top 2.5 lakh in JEE Main',
      subjects: 'Physics, Chemistry, Mathematics',
      difficulty: 'Very High',
      courses: ['B.Tech IITs', 'Dual Degree', 'Integrated M.Tech'],
      description: 'Entrance exam for Indian Institutes of Technology (IITs)'
    },
    {
      id: 'kcet',
      title: 'KCET',
      color: 'from-green-500 to-emerald-600',
      eligibility: 'Karnataka domicile with 10+2 PCM/PCME',
      subjects: 'Physics, Chemistry, Mathematics, Biology',
      difficulty: 'Medium',
      courses: ['B.Tech', 'B.E.', 'Pharma', 'Agriculture'],
      description: 'Karnataka Common Entrance Test for state engineering colleges'
    },
    {
      id: 'comedk',
      title: 'COMEDK',
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 with PCM/PCME with 45% marks',
      subjects: 'Physics, Chemistry, Mathematics',
      difficulty: 'Medium',
      courses: ['B.Tech', 'B.E.'],
      description: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka'
    },
    {
      id: 'bitsat',
      title: 'BITSAT',
      color: 'from-cyan-500 to-teal-600',
      eligibility: '10+2 with PCM/PCME with 60% marks',
      subjects: 'Physics, Chemistry, Mathematics, English',
      difficulty: 'High',
      courses: ['B.Tech', 'B.E.', 'M.Sc'],
      description: 'BITS Admission Test for BITS Pilani, Goa, and Hyderabad campuses'
    },
    {
      id: 'cuet',
      title: 'CUET',
      color: 'from-yellow-500 to-orange-600',
      eligibility: '10+2 pass',
      subjects: 'Domain specific + Language',
      difficulty: 'Low-Medium',
      courses: ['B.Tech', 'B.Sc', 'B.A', 'B.Com'],
      description: 'Common University Entrance Test for central universities'
    }
  ];

  const filteredCombinations = streamCombinations.filter(combination =>
    combination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    combination.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors: { [key: string]: string } = {
      'High': 'bg-red-500/20 text-red-300 border-red-500/30',
      'Medium–High': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Medium': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Very High': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Low-Medium': 'bg-green-500/20 text-green-300 border-green-500/30'
    };
    return colors[difficulty] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
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
          onClick={() => setScreen('science_streams')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Progress Breadcrumb */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('science_streams')}>Science</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Engineering & Technology</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            🏗 Engineering & Technology
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore engineering-focused subject combinations after 10th grade, entrance exams, careers, and future technology opportunities.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search combinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
            />
          </div>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </motion.div>

        {/* Stream Combination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredCombinations.map((combination, index) => (
            <motion.div
              key={combination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer"
              onClick={() => toggleExpanded(combination.id)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${combination.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {combination.title}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{combination.title}</h3>
                  <p className="text-white/70 text-sm">{combination.subtitle}</p>
                </div>
                <div className="flex items-center gap-1">
                  {expandedCard === combination.id ? (
                    <ChevronUp className="w-5 h-5 text-white/50" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/50" />
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Best For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {combination.bestFor.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Entrance Exams:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {combination.exams.map((exam, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium mb-1">Difficulty:</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyBadge(combination.difficulty)}`}>
                      {combination.difficulty}
                    </span>
                  </div>
                </div>

                {expandedCard === combination.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <p className="text-white/70 text-sm leading-relaxed">
                      <strong>Recommended For:</strong> {combination.recommended}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 font-medium">PCM</th>
                  <th className="text-center py-3 px-4 font-medium">PCME</th>
                  <th className="text-center py-3 px-4 font-medium">PCMG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Full Form</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics, Electronics</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics, Geology</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Electronics</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Geology</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Difficulty Level</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-sm">Medium-High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Medium</span>
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Career Flexibility</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Very High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Medium</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* "Choose This If..." Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rec.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {rec.id.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{rec.title}</h3>
                <ul className="space-y-2">
                  {rec.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Paths Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${career.color} flex items-center justify-center text-white`}>
                    <career.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{career.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Roadmap:
                    </h4>
                    <p className="text-white/70 text-sm">{career.roadmap}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Scope:
                    </h4>
                    <p className="text-white/70 text-sm">{career.scope}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Salary:
                    </h4>
                    <p className="text-white/70 text-sm">{career.salary}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Exams:</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.exams.map((exam, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Entrance Exams Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entranceExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {exam.title}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Eligibility:</h4>
                    <p className="text-white/70 text-sm">{exam.eligibility}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Subjects:</h4>
                    <p className="text-white/70 text-sm">{exam.subjects}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Difficulty:</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyBadge(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exam.courses.map((course, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Description:
                    </h4>
                    <p className="text-white/70 text-sm">{exam.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
