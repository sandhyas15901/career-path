import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Award, TrendingUp, Building, FileText, Shield, Globe, Users, GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CivilServicesFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const streamCombinations = [
    {
      id: 'heps',
      title: 'HEPS',
      subtitle: 'History, Economics, Political Science, Sociology',
      color: 'from-blue-500 to-indigo-600',
      icon: '🟦',
      bestFor: [
        'UPSC Civil Services',
        'IAS / IPS / IFS',
        'Public Administration',
        'Social Sciences',
        'Government Careers'
      ],
      exams: ['UPSC', 'KPSC / State PSC', 'SSC CGL', 'CUET'],
      difficulty: 'Medium',
      recommended: 'Students interested in government services, administration, politics, economics, and social sciences.',
      fullForm: 'History, Economics, Political Science, Sociology',
      hasSociology: true,
      civilServicesPrep: 'Comprehensive',
      governmentJobScope: 'Wide',
      publicAdminFocus: 'Strong',
      mainExams: 'UPSC, State PSC, SSC',
      careerFlexibility: 'High',
      commonCareers: ['IAS Officer', 'IPS Officer', 'IFS Officer', 'KAS Officer', 'Social Researcher']
    },
    {
      id: 'hep',
      title: 'HEP',
      subtitle: 'History, Economics, Political Science',
      color: 'from-green-500 to-emerald-600',
      icon: '🟩',
      bestFor: [
        'Civil Services',
        'Public Administration',
        'Political Analysis',
        'Government Jobs',
        'Policy Studies'
      ],
      exams: ['UPSC', 'State PSC', 'SSC CGL', 'CUET'],
      difficulty: 'Medium',
      recommended: 'Students interested in politics, economics, governance, and public administration careers.',
      fullForm: 'History, Economics, Political Science',
      hasSociology: false,
      civilServicesPrep: 'Focused',
      governmentJobScope: 'Good',
      publicAdminFocus: 'Very Strong',
      mainExams: 'UPSC, State PSC, SSC',
      careerFlexibility: 'Medium',
      commonCareers: ['IAS Officer', 'IPS Officer', 'Political Analyst', 'Policy Analyst', 'Public Administrator']
    }
  ];

  const careerOpportunities = [
    {
      id: 'ias',
      title: 'IAS Officer',
      icon: Award,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → HEPS/HEP → Graduation → UPSC Preparation → IAS',
      skills: ['Leadership', 'Administration', 'Policy Making', 'Public Management', 'Decision Making'],
      scope: 'Central Government, State Administration, Public Sector',
      salary: '₹15-25 LPA (Entry Level to Senior)',
      exams: ['UPSC Civil Services']
    },
    {
      id: 'ips',
      title: 'IPS Officer',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      roadmap: '10th → HEPS/HEP → Graduation → UPSC Preparation → IPS',
      skills: ['Law Enforcement', 'Leadership', 'Crisis Management', 'Public Safety', 'Investigation'],
      scope: 'Police Department, Central Police Organizations, Security Agencies',
      salary: '₹12-20 LPA (Entry Level to Senior)',
      exams: ['UPSC Civil Services']
    },
    {
      id: 'ifs',
      title: 'IFS Officer',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → HEPS/HEP → Graduation → UPSC Preparation → IFS',
      skills: ['Diplomacy', 'International Relations', 'Languages', 'Policy Analysis', 'Cultural Understanding'],
      scope: 'Foreign Service, International Organizations, Diplomatic Missions',
      salary: '₹18-30 LPA (Entry Level to Senior)',
      exams: ['UPSC Civil Services']
    },
    {
      id: 'kas',
      title: 'KAS/KPSC Officer',
      icon: Building,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → HEPS/HEP → Graduation → KPSC Preparation → KAS',
      skills: ['State Administration', 'Local Governance', 'Policy Implementation', 'Public Service'],
      scope: 'State Government, District Administration, Local Bodies',
      salary: '₹8-15 LPA (Entry Level to Senior)',
      exams: ['KPSC / State PSC']
    },
    {
      id: 'political-analyst',
      title: 'Political Analyst',
      icon: TrendingUp,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → HEP → Graduation → Specialization → Political Analyst',
      skills: ['Political Analysis', 'Research', 'Policy Analysis', 'Communication', 'Critical Thinking'],
      scope: 'Think Tanks, Media Organizations, Political Parties, Research Institutes',
      salary: '₹6-12 LPA (Entry Level to Senior)',
      exams: ['UGC NET', 'University Entrance']
    },
    {
      id: 'public-administrator',
      title: 'Public Administrator',
      icon: Users,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → HEP → Graduation → Public Admin Course → Government Service',
      skills: ['Public Administration', 'Policy Implementation', 'Management', 'Communication', 'Leadership'],
      scope: 'Government Agencies, Public Sector Undertakings, Municipal Corporations',
      salary: '₹7-14 LPA (Entry Level to Senior)',
      exams: ['State PSC', 'SSC', 'UPSC']
    }
  ];

  const competitiveExams = [
    {
      id: 'upsc',
      title: 'UPSC Civil Services',
      icon: Award,
      color: 'from-blue-500 to-indigo-600',
      eligibility: 'Graduation (21-32 years)',
      subjects: 'General Studies, Optional Subject, Essay, Interview',
      difficulty: 'Very Hard',
      attempts: '6 attempts (General Category)',
      successRate: '0.1-0.3%',
      careers: 'IAS, IPS, IFS, IRS, IAS Allied Services',
      description: 'Prestigious civil services examination for top government positions'
    },
    {
      id: 'kpsc',
      title: 'KPSC / State PSC',
      icon: Building,
      color: 'from-green-500 to-emerald-600',
      eligibility: 'Graduation (21-35 years)',
      subjects: 'General Studies, State Specific, Optional, Interview',
      difficulty: 'Hard',
      attempts: 'Varies by state',
      successRate: '2-5%',
      careers: 'State Administrative Services, Police Services, Revenue Services',
      description: 'State-level civil services examination for state government positions'
    },
    {
      id: 'ssc',
      title: 'SSC CGL',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      eligibility: 'Graduation (18-32 years)',
      subjects: 'General Intelligence, English, Quantitative Aptitude, General Awareness',
      difficulty: 'Medium',
      attempts: 'Multiple attempts allowed',
      successRate: '8-12%',
      careers: 'Central Government Ministries, Departments, Organizations',
      description: 'Staff Selection Commission exam for central government jobs'
    },
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      attempts: 'Once a year',
      successRate: '15-20%',
      careers: 'University Admission for Higher Studies',
      description: 'Common University Entrance Test for university admissions'
    }
  ];

  const skillCourses = [
    {
      id: 'public-speaking',
      title: 'Public Speaking',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for UPSC interview and group discussions',
      description: 'Develop confidence and articulation skills for public service'
    },
    {
      id: 'current-affairs',
      title: 'Current Affairs & GK',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner to Advanced',
      duration: 'Ongoing',
      relevance: 'Critical for all competitive exams and interviews',
      description: 'Stay updated with national and international current events'
    },
    {
      id: 'political-analysis',
      title: 'Political Analysis',
      icon: TrendingUp,
      color: 'from-purple-500 to-indigo-600',
      level: 'Intermediate',
      duration: '6 months',
      relevance: 'Important for policy analysis and governance roles',
      description: 'Understand political systems and policy making processes'
    },
    {
      id: 'essay-writing',
      title: 'Essay Writing',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner to Advanced',
      duration: '4 months',
      relevance: 'Essential for UPSC Mains and other competitive exams',
      description: 'Master structured and analytical essay writing'
    },
    {
      id: 'communication-skills',
      title: 'Communication Skills',
      icon: Users,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Important for interviews and administrative roles',
      description: 'Develop effective communication for public service'
    },
    {
      id: 'leadership-skills',
      title: 'Leadership Skills',
      icon: Award,
      color: 'from-pink-500 to-rose-600',
      level: 'Intermediate',
      duration: '6 months',
      relevance: 'Critical for administrative and leadership positions',
      description: 'Build leadership qualities for public service roles'
    },
    {
      id: 'public-admin',
      title: 'Public Administration Basics',
      icon: Building,
      color: 'from-indigo-500 to-purple-600',
      level: 'Beginner',
      duration: '4 months',
      relevance: 'Fundamental for government service careers',
      description: 'Learn basics of public administration and governance'
    },
    {
      id: 'sociology-studies',
      title: 'Sociology & Society Studies',
      icon: Users,
      color: 'from-teal-500 to-cyan-600',
      level: 'Intermediate',
      duration: '5 months',
      relevance: 'Important for understanding social issues and policies',
      description: 'Study society, social structures, and social change'
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
          <span className="text-white font-medium">Civil Services Focus</span>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏛</span>
            <h1 className="text-4xl font-bold text-white">Civil Services Focus</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore humanities pathways focused on UPSC, government services, administration, political science, sociology, economics, and public service careers after 10th grade.
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
                    <h4 className="text-white font-semibold mb-2">Entrance / Competitive Exams</h4>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">HEPS</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">HEP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Full Form', heps: 'History, Economics, Political Science, Sociology', hep: 'History, Economics, Political Science' },
                    { feature: 'History', heps: '✅', hep: '✅' },
                    { feature: 'Economics', heps: '✅', hep: '✅' },
                    { feature: 'Political Science', heps: '✅', hep: '✅' },
                    { feature: 'Sociology', heps: '✅', hep: '❌' },
                    { feature: 'Civil Services Preparation', heps: 'Comprehensive', hep: 'Focused' },
                    { feature: 'Government Job Scope', heps: 'Wide', hep: 'Good' },
                    { feature: 'Public Administration Focus', heps: 'Strong', hep: 'Very Strong' },
                    { feature: 'Main Competitive Exams', heps: 'UPSC, State PSC, SSC', hep: 'UPSC, State PSC, SSC' },
                    { feature: 'Career Flexibility', heps: 'High', hep: 'Medium' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.heps}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.hep}</td>
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
                <h3 className="text-xl font-bold text-white">Choose HEPS If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You are interested in UPSC & civil services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy sociology and social sciences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want administration & public service careers</span>
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
                <h3 className="text-xl font-bold text-white">Choose HEP If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You are interested in governance & politics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You enjoy economics and political science</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You want government-related careers</span>
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
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Competitive Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Government & Public Service Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Government & Public Service Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">High Demand</h3>
                <p className="text-white/70 text-sm">Growing need for civil servants and public administrators</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Government Growth</h3>
                <p className="text-white/70 text-sm">Expanding public sector opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Job Security</h3>
                <p className="text-white/70 text-sm">Stable career paths in government services</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Social Impact</h3>
                <p className="text-white/70 text-sm">Opportunity to serve society and make difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
