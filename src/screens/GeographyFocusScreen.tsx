import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Map, TrendingUp, Building, GraduationCap, BarChart3, Shield, Globe, Compass, Mountain, Trees, Cloud, Navigation, AlertTriangle, Thermometer } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function GeographyFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const streamCombinations = [
    {
      id: 'hgp',
      title: 'HGP',
      subtitle: 'History, Geography, Political Science',
      color: 'from-blue-500 to-indigo-600',
      icon: '🟦',
      bestFor: [
        'Geography Careers',
        'Urban Planning',
        'Environmental Studies',
        'Civil Services',
        'GIS & Mapping'
      ],
      exams: ['CUET', 'UPSC', 'State PSC Exams'],
      difficulty: 'Medium',
      recommended: 'Students interested in geography, maps, environmental studies, governance, and public administration.',
      fullForm: 'History, Geography, Political Science',
      hasHistory: true,
      hasEconomics: false,
      environmentalStudiesFocus: 'Strong',
      urbanPlanningScope: 'Very Strong',
      gisMappingScope: 'Strong',
      mainExams: 'CUET, UPSC, State PSC Exams',
      careerFlexibility: 'High',
      commonCareers: ['Geographer', 'Urban Planner', 'Environmental Planner', 'Civil Services Officer', 'Geography Teacher']
    },
    {
      id: 'gep',
      title: 'GEP',
      subtitle: 'Geography, Economics, Political Science',
      color: 'from-green-500 to-emerald-600',
      icon: '🟩',
      bestFor: [
        'Environmental Economics',
        'GIS & Spatial Analysis',
        'Urban Development',
        'Policy & Planning',
        'Research Careers'
      ],
      exams: ['CUET', 'UPSC', 'Geography Entrance Exams'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in geography, economics, environmental planning, and analytical careers.',
      fullForm: 'Geography, Economics, Political Science',
      hasHistory: false,
      hasEconomics: true,
      environmentalStudiesFocus: 'Very Strong',
      urbanPlanningScope: 'Strong',
      gisMappingScope: 'Very Strong',
      mainExams: 'CUET, UPSC, Geography Entrance Exams',
      careerFlexibility: 'Medium',
      commonCareers: ['GIS Analyst', 'Environmental Researcher', 'Policy Planner', 'Urban Development Specialist', 'Spatial Analyst']
    }
  ];

  const careerOpportunities = [
    {
      id: 'geographer',
      title: 'Geographer',
      icon: Globe,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → HGP/GEP → Graduation → Geography Masters → Geographer',
      skills: ['Geographic Analysis', 'Research', 'Data Analysis', 'Field Work', 'Mapping'],
      scope: 'Research Institutes, Government Agencies, Educational Institutions',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UPSC', 'Geography Entrance Exams']
    },
    {
      id: 'urban-planner',
      title: 'Urban Planner',
      icon: Building,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → HGP → Graduation → Urban Planning Course → Urban Planner',
      skills: ['Urban Planning', 'GIS', 'Policy Analysis', 'Design Thinking', 'Communication'],
      scope: 'Municipal Corporations, Planning Departments, Private Consultancy',
      salary: '₹5-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UPSC', 'Planning Entrance Exams']
    },
    {
      id: 'gis-analyst',
      title: 'GIS Analyst',
      icon: Map,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → GEP → Graduation → GIS Course → GIS Analyst',
      skills: ['GIS Software', 'Spatial Analysis', 'Data Visualization', 'Programming', 'Database Management'],
      scope: 'Government Agencies, Private Companies, Research Organizations',
      salary: '₹4-22 LPA (Entry Level to Senior)',
      exams: ['CUET', 'GIS Certification', 'UPSC']
    },
    {
      id: 'environmental-planner',
      title: 'Environmental Planner',
      icon: Trees,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → HGP/GEP → Graduation → Environmental Studies → Environmental Planner',
      skills: ['Environmental Analysis', 'Policy Planning', 'Sustainability', 'Impact Assessment', 'Research'],
      scope: 'Environmental Agencies, NGOs, Government Departments',
      salary: '₹4-16 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UPSC', 'Environmental Studies Entrance']
    },
    {
      id: 'cartographer',
      title: 'Cartographer',
      icon: Navigation,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → HGP/GEP → Graduation → Cartography Course → Cartographer',
      skills: ['Map Making', 'GIS', 'Design', 'Technical Drawing', 'Spatial Analysis'],
      scope: 'Mapping Agencies, Government Departments, Private Companies',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UPSC', 'GIS Certification']
    },
    {
      id: 'disaster-management',
      title: 'Disaster Management Specialist',
      icon: AlertTriangle,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → HGP → Graduation → Disaster Management → Specialist',
      skills: ['Risk Assessment', 'Emergency Planning', 'Coordination', 'Communication', 'Geographic Analysis'],
      scope: 'Disaster Management Agencies, Government Departments, NGOs',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UPSC', 'Disaster Management Certification']
    },
    {
      id: 'environmental-researcher',
      title: 'Environmental Researcher',
      icon: Mountain,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → GEP → Graduation → Environmental Research → Researcher',
      skills: ['Research Methods', 'Environmental Science', 'Data Analysis', 'Field Work', 'Academic Writing'],
      scope: 'Research Institutes, Universities, Environmental Organizations',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UGC NET', 'Research Programs']
    },
    {
      id: 'policy-planner',
      title: 'Policy Planner',
      icon: Building,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → GEP → Graduation → Policy Studies → Policy Planner',
      skills: ['Policy Analysis', 'Research', 'Communication', 'Planning', 'Geographic Analysis'],
      scope: 'Government Agencies, Think Tanks, Policy Institutes',
      salary: '₹5-22 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UPSC', 'Policy Studies Programs']
    },
    {
      id: 'civil-services',
      title: 'Civil Services Officer',
      icon: Shield,
      color: 'from-teal-500 to-cyan-600',
      roadmap: '10th → HGP → Graduation → UPSC → Civil Services',
      skills: ['Administration', 'Geographic Knowledge', 'Policy Making', 'Leadership', 'Public Service'],
      scope: 'Central Government, State Government, Administrative Services',
      salary: '₹8-25 LPA (Entry Level to Senior)',
      exams: ['UPSC', 'State PSC', 'CUET']
    },
    {
      id: 'geography-teacher',
      title: 'Geography Teacher',
      icon: GraduationCap,
      color: 'from-rose-500 to-pink-600',
      roadmap: '10th → HGP/GEP → Graduation → B.Ed → Geography Teacher',
      skills: ['Teaching', 'Geography Knowledge', 'Communication', 'Patience', 'Curriculum Development'],
      scope: 'Schools, Colleges, Educational Institutions',
      salary: '₹3-12 LPA (Entry Level to Senior)',
      exams: ['CUET', 'B.Ed Entrance', 'UPSC']
    }
  ];

  const competitiveExams = [
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      attempts: 'Once a year',
      successRate: '15-20%',
      careers: 'University Geography Programs, Higher Studies',
      description: 'Common University Entrance Test for university admissions'
    },
    {
      id: 'upsc',
      title: 'UPSC',
      icon: Shield,
      color: 'from-purple-500 to-indigo-600',
      eligibility: 'Graduation (21-32 years)',
      subjects: 'General Studies, Geography, Optional Subject, Essay, Interview',
      difficulty: 'Very Hard',
      attempts: '6 attempts (General Category)',
      successRate: '0.1-0.3%',
      careers: 'Civil Services, IAS, IPS, IFS, Administrative Services',
      description: 'Union Public Service Commission Civil Services Examination'
    },
    {
      id: 'state-psc',
      title: 'State PSC Exams',
      icon: Building,
      color: 'from-green-500 to-emerald-600',
      eligibility: 'Graduation (21-35 years)',
      subjects: 'General Studies, State Specific, Geography, Optional, Interview',
      difficulty: 'Hard',
      attempts: 'Varies by state',
      successRate: '2-5%',
      careers: 'State Administrative Services, Police Services, Revenue Services',
      description: 'State Public Service Commission Examinations'
    },
    {
      id: 'geography-entrance',
      title: 'Geography Entrance Exams',
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 pass',
      subjects: 'Geography, General Knowledge, Environmental Studies, Mapping',
      difficulty: 'Medium to Hard',
      attempts: 'Varies by institute',
      successRate: '10-15%',
      careers: 'Geography Colleges, Environmental Studies Programs, GIS Courses',
      description: 'Various geography and environmental studies entrance examinations'
    }
  ];

  const skillCourses = [
    {
      id: 'gis-mapping',
      title: 'GIS & Mapping Basics',
      icon: Map,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for all geography and mapping careers',
      description: 'Learn fundamental GIS software and mapping techniques'
    },
    {
      id: 'environmental-studies',
      title: 'Environmental Studies',
      icon: Trees,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '4 months',
      relevance: 'Important for environmental planning and research careers',
      description: 'Master environmental science and sustainability concepts'
    },
    {
      id: 'urban-planning',
      title: 'Urban Planning Basics',
      icon: Building,
      color: 'from-purple-500 to-indigo-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for urban planning and development careers',
      description: 'Learn urban planning principles and practices'
    },
    {
      id: 'map-reading',
      title: 'Map Reading & Cartography',
      icon: Navigation,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Important for all geography and mapping careers',
      description: 'Master map reading and basic cartography skills'
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis for Geography',
      icon: BarChart3,
      color: 'from-cyan-500 to-teal-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for GIS analysis and research careers',
      description: 'Learn data analysis techniques for geographic data'
    },
    {
      id: 'disaster-management',
      title: 'Disaster Management',
      icon: AlertTriangle,
      color: 'from-indigo-500 to-purple-600',
      level: 'Intermediate',
      duration: '3 months',
      relevance: 'Important for disaster management and emergency planning',
      description: 'Master disaster management principles and practices'
    },
    {
      id: 'climate-studies',
      title: 'Climate Studies',
      icon: Cloud,
      color: 'from-yellow-500 to-orange-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for environmental and climate careers',
      description: 'Learn climate science and environmental change'
    },
    {
      id: 'field-survey',
      title: 'Research & Field Survey Skills',
      icon: Compass,
      color: 'from-teal-500 to-cyan-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Important for all geography and research careers',
      description: 'Master field survey and research methodology'
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
      case 'Medium–High': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
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
          <span className="text-white font-medium">Geography Focus</span>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🌍</span>
            <h1 className="text-4xl font-bold text-white">Geography Focus</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore humanities pathways focused on geography, environmental studies, mapping, earth sciences, urban planning, and geography-related careers after 10th grade.
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
                    <th className="px-6 py-4 text-center text-white font-semibold">HGP</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">GEP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Full Form', hgp: 'History, Geography, Political Science', gep: 'Geography, Economics, Political Science' },
                    { feature: 'Geography', hgp: '✅', gep: '✅' },
                    { feature: 'History', hgp: '✅', gep: '❌' },
                    { feature: 'Economics', hgp: '❌', gep: '✅' },
                    { feature: 'Political Science', hgp: '✅', gep: '✅' },
                    { feature: 'Environmental Studies Focus', hgp: 'Strong', gep: 'Very Strong' },
                    { feature: 'Urban Planning Scope', hgp: 'Very Strong', gep: 'Strong' },
                    { feature: 'GIS & Mapping Scope', hgp: 'Strong', gep: 'Very Strong' },
                    { feature: 'Main Entrance Exams', hgp: 'CUET, UPSC, State PSC Exams', gep: 'CUET, UPSC, Geography Entrance Exams' },
                    { feature: 'Career Flexibility', hgp: 'High', gep: 'Medium' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.hgp}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.gep}</td>
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
                <h3 className="text-xl font-bold text-white">Choose HGP If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy geography and history</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You are interested in environmental studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want civil services or planning careers</span>
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
                <h3 className="text-xl font-bold text-white">Choose GEP If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You enjoy geography and economics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You are interested in urban development & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You want environmental policy or GIS careers</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Geography & Environment Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Geography & Environment Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Environmental Careers Growth</h3>
                <p className="text-white/70 text-sm">Expanding opportunities in environmental science and sustainability</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Urban Planning Opportunities</h3>
                <p className="text-white/70 text-sm">Growing demand for urban planning and smart city development</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Map className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">GIS & Mapping Industry</h3>
                <p className="text-white/70 text-sm">Rising demand for GIS and spatial analysis professionals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Thermometer className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Climate & Sustainability</h3>
                <p className="text-white/70 text-sm">Growing focus on climate change and sustainability careers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
