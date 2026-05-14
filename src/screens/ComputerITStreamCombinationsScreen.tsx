import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, X, Search, Filter, ChevronDown, ChevronUp, Star, TrendingUp, Award, DollarSign, BookOpen, Target, Monitor, Code, Database, Shield, Globe, Cloud, BarChart3 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ComputerITStreamCombinationsScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombinations = [
    {
      id: 'pcmc',
      title: 'PCMC',
      subtitle: 'Physics, Chemistry, Mathematics, Computer Science',
      color: 'from-blue-500 to-indigo-600',
      bestFor: ['Software Engineering', 'AI & Machine Learning', 'Computer Science', 'App Development', 'Cybersecurity'],
      exams: ['JEE Main', 'KCET', 'COMEDK', 'BITSAT'],
      difficulty: 'High',
      recommended: 'Students interested in coding, software development, AI, and computer technology',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics, Computer Science',
        mathematics: true,
        computerScience: true,
        statistics: false,
        codingFocus: true,
        dataAnalyticsFocus: false,
        difficultyLevel: 'High',
        itCareers: true,
        researchCareers: true,
        mainEntranceExams: ['JEE Main', 'KCET', 'COMEDK'],
        careerFlexibility: 'Very High',
        commonCareers: ['Software Engineer', 'AI Engineer', 'Cybersecurity Analyst', 'Web Developer']
      }
    },
    {
      id: 'pcms',
      title: 'PCMS',
      subtitle: 'Physics, Chemistry, Mathematics, Statistics',
      color: 'from-green-500 to-emerald-600',
      bestFor: ['Data Science', 'Analytics', 'Actuarial Science', 'AI & Data Analytics', 'Research'],
      exams: ['JEE Main', 'KCET', 'CUET'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in statistics, analytics, logical thinking, and data-driven careers',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics, Statistics',
        mathematics: true,
        computerScience: false,
        statistics: true,
        codingFocus: false,
        dataAnalyticsFocus: true,
        difficultyLevel: 'Medium-High',
        itCareers: true,
        researchCareers: true,
        mainEntranceExams: ['JEE Main', 'KCET', 'CUET'],
        careerFlexibility: 'High',
        commonCareers: ['Data Scientist', 'Data Analyst', 'Actuarial Analyst', 'Research Scientist']
      }
    }
  ];

  const recommendations = [
    {
      id: 'pcmc',
      color: 'from-blue-500 to-indigo-600',
      title: 'Choose PCMC If:',
      reasons: [
        'You enjoy coding and software development',
        'You want careers in AI, cybersecurity, or app development',
        'You are interested in computer technology'
      ]
    },
    {
      id: 'pcms',
      color: 'from-green-500 to-emerald-600',
      title: 'Choose PCMS If:',
      reasons: [
        'You enjoy statistics and analytics',
        'You are interested in data science and AI analytics',
        'You like logical and mathematical thinking'
      ]
    }
  ];

  const careerPaths = [
    {
      id: 'software',
      title: 'Software Engineer',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → PCMC → JEE → B.Tech CSE → Software Development',
      skills: ['Programming', 'Algorithms', 'Problem Solving', 'System Design'],
      scope: 'Software Development, Tech Companies, Startups, Freelancing',
      salary: '₹4-25 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK', 'BITSAT']
    },
    {
      id: 'ai',
      title: 'AI Engineer',
      icon: Monitor,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → PCMC → JEE → B.Tech AI/ML → Specialization',
      skills: ['Machine Learning', 'Python', 'Deep Learning', 'Mathematics'],
      scope: 'AI Research, Tech Companies, Healthcare, Finance',
      salary: '₹6-30 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK']
    },
    {
      id: 'data',
      title: 'Data Scientist',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → PCMS → JEE → B.Tech/BCA → Data Science',
      skills: ['Statistics', 'Python', 'Machine Learning', 'Data Visualization'],
      scope: 'Data Analytics, Business Intelligence, Research',
      salary: '₹5-20 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'CUET']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Analyst',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      roadmap: '10th → PCMC → JEE → B.Tech CSE → Cybersecurity',
      skills: ['Security', 'Networking', 'Risk Analysis', 'Compliance'],
      scope: 'IT Security, Consulting, Government, Finance',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK']
    },
    {
      id: 'web',
      title: 'Web Developer',
      icon: Globe,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → PCMC → JEE → B.Tech/BCA → Web Development',
      skills: ['HTML/CSS/JS', 'Frameworks', 'UI/UX', 'Backend'],
      scope: 'Web Development, E-commerce, Startups, Freelancing',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK']
    },
    {
      id: 'app',
      title: 'App Developer',
      icon: Monitor,
      color: 'from-emerald-500 to-green-600',
      roadmap: '10th → PCMC → JEE → B.Tech → Mobile Development',
      skills: ['Mobile Dev', 'UI/UX', 'APIs', 'Testing'],
      scope: 'Mobile Apps, Startups, Tech Companies',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK']
    },
    {
      id: 'cloud',
      title: 'Cloud Engineer',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      roadmap: '10th → PCMC → JEE → B.Tech → Cloud Computing',
      skills: ['Cloud Platforms', 'DevOps', 'Networking', 'Security'],
      scope: 'Cloud Services, DevOps, Infrastructure',
      salary: '₹5-22 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'COMEDK']
    },
    {
      id: 'dataanalyst',
      title: 'Data Analyst',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → PCMS → JEE → B.Tech/BCA → Data Analytics',
      skills: ['SQL', 'Statistics', 'Excel', 'Visualization'],
      scope: 'Business Analytics, Finance, Consulting',
      salary: '₹3-12 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'KCET', 'CUET']
    }
  ];

  const skillCourses = [
    {
      id: 'python',
      title: 'Python Programming',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3-6 months',
      relevance: 'High - Essential for AI, Data Science, Web Development',
      description: 'Learn Python fundamentals, data structures, and programming concepts'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: Globe,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '4-8 months',
      relevance: 'High - In-demand for frontend and backend development',
      description: 'HTML, CSS, JavaScript, React, Node.js, and modern web technologies'
    },
    {
      id: 'app',
      title: 'App Development',
      icon: Monitor,
      color: 'from-emerald-500 to-green-600',
      level: 'Intermediate',
      duration: '6-12 months',
      relevance: 'High - Growing mobile app market',
      description: 'iOS (Swift) and Android (Kotlin/Java) development'
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning Basics',
      icon: Monitor,
      color: 'from-purple-500 to-pink-600',
      level: 'Intermediate',
      duration: '6-12 months',
      relevance: 'Very High - Future of technology',
      description: 'Machine learning algorithms, neural networks, and AI applications'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Basics',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      level: 'Intermediate',
      duration: '4-8 months',
      relevance: 'High - Increasing security concerns',
      description: 'Network security, ethical hacking, and security best practices'
    },
    {
      id: 'analytics',
      title: 'Data Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '3-6 months',
      relevance: 'High - Data-driven decision making',
      description: 'Data analysis, visualization, and business intelligence'
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: Monitor,
      color: 'from-yellow-500 to-orange-600',
      level: 'Beginner',
      duration: '3-6 months',
      relevance: 'Medium - Important for product development',
      description: 'User interface design, user experience, and design thinking'
    },
    {
      id: 'cloud',
      title: 'Cloud Computing',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      level: 'Intermediate',
      duration: '6-12 months',
      relevance: 'Very High - Cloud adoption everywhere',
      description: 'AWS, Azure, Google Cloud, and cloud architecture'
    }
  ];

  const entranceExams = [
    {
      id: 'jee-main',
      title: 'JEE Main',
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 with PCM/PCMC/PCMS with 75% marks',
      subjects: 'Physics, Chemistry, Mathematics',
      difficulty: 'High',
      courses: ['B.Tech CSE', 'B.Tech IT', 'B.Tech AI', 'B.Tech Data Science'],
      description: 'National level engineering entrance exam for computer science programs'
    },
    {
      id: 'kcet',
      title: 'KCET',
      color: 'from-green-500 to-emerald-600',
      eligibility: 'Karnataka domicile with 10+2 PCM/PCMC/PCMS',
      subjects: 'Physics, Chemistry, Mathematics, Biology',
      difficulty: 'Medium',
      courses: ['B.Tech CSE', 'B.Tech IT', 'BCA', 'B.Sc Computer Science'],
      description: 'Karnataka Common Entrance Test for state computer science programs'
    },
    {
      id: 'comedk',
      title: 'COMEDK',
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 with PCM/PCMC/PCMS with 45% marks',
      subjects: 'Physics, Chemistry, Mathematics',
      difficulty: 'Medium',
      courses: ['B.Tech CSE', 'B.Tech IT', 'BCA'],
      description: 'Consortium exam for private engineering colleges in Karnataka'
    },
    {
      id: 'bitsat',
      title: 'BITSAT',
      color: 'from-cyan-500 to-teal-600',
      eligibility: '10+2 with PCM/PCMC/PCMS with 60% marks',
      subjects: 'Physics, Chemistry, Mathematics, English',
      difficulty: 'High',
      courses: ['B.E CSE', 'B.E IT', 'M.Sc Tech'],
      description: 'BITS Admission Test for computer science programs at BITS campuses'
    },
    {
      id: 'cuet',
      title: 'CUET',
      color: 'from-yellow-500 to-orange-600',
      eligibility: '10+2 pass',
      subjects: 'Domain specific + Language',
      difficulty: 'Low-Medium',
      courses: ['B.Sc CS', 'BCA', 'B.Tech', 'B.Sc Data Science'],
      description: 'Common University Entrance Test for central university CS programs'
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

  const getLevelBadge = (level: string) => {
    const colors: { [key: string]: string } = {
      'Beginner': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Intermediate': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Advanced': 'bg-red-500/20 text-red-300 border-red-500/30'
    };
    return colors[level] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
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
          <span className="text-white font-medium">Computer & IT</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            💻 Computer & IT
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore computer science and technology-focused subject combinations after 10th grade, including software, AI, cybersecurity, and data science career paths.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                  <th className="text-center py-3 px-4 font-medium">PCMC</th>
                  <th className="text-center py-3 px-4 font-medium">PCMS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Full Form</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics, Computer Science</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics, Statistics</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Computer Science</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Statistics</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Coding Focus</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Data Analytics Focus</td>
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
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Career Flexibility</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Very High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">High</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {careerPaths.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
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
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Roadmap:
                    </h4>
                    <p className="text-white/70 text-xs">{career.roadmap}</p>
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
                    <p className="text-white/70 text-xs">{career.scope}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Salary:
                    </h4>
                    <p className="text-white/70 text-xs">{career.salary}</p>
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

        {/* Skill Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                    <course.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{course.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelBadge(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Duration:</h4>
                    <p className="text-white/70 text-sm">{course.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Career Relevance:</h4>
                    <p className="text-white/70 text-sm">{course.relevance}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Description:</h4>
                    <p className="text-white/70 text-sm">{course.description}</p>
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
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entranceExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
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
