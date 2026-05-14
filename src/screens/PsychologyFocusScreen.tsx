import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Heart, Users, TrendingUp, Building, Briefcase, GraduationCap, Activity, Smile, User, HelpCircle, Lightbulb, Brain, Eye, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PsychologyFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const streamCombinations = [
    {
      id: 'hepsy',
      title: 'HEPSY',
      subtitle: 'History, Economics, Psychology, Sociology',
      color: 'from-blue-500 to-indigo-600',
      icon: '🟦',
      bestFor: [
        'Psychology Careers',
        'Counseling',
        'Mental Health Studies',
        'Human Behavior Research',
        'Social Sciences'
      ],
      exams: ['CUET', 'Psychology Entrance Exams', 'TISS Entrance'],
      difficulty: 'Medium',
      recommended: 'Students interested in psychology, sociology, mental health, counseling, and social sciences.',
      fullForm: 'History, Economics, Psychology, Sociology',
      hasEconomics: true,
      hasHistory: true,
      mentalHealthFocus: 'Strong',
      counselingScope: 'Wide',
      socialScienceFocus: 'Very Strong',
      mainExams: 'CUET, Psychology Entrance Exams, TISS Entrance',
      careerFlexibility: 'High',
      commonCareers: ['Psychologist', 'Counselor', 'Clinical Psychologist', 'Sociology Researcher', 'Human Resource Specialist']
    },
    {
      id: 'psp',
      title: 'PSP',
      subtitle: 'Psychology, Sociology, Political Science',
      color: 'from-green-500 to-emerald-600',
      icon: '🟩',
      bestFor: [
        'Counseling',
        'Social Work',
        'Behavioral Studies',
        'Public Policy & Social Services'
      ],
      exams: ['CUET', 'TISS Entrance', 'Psychology Entrance Exams'],
      difficulty: 'Medium',
      recommended: 'Students interested in human behavior, counseling, social sciences, and community services.',
      fullForm: 'Psychology, Sociology, Political Science',
      hasEconomics: false,
      hasHistory: false,
      mentalHealthFocus: 'Strong',
      counselingScope: 'Very Strong',
      socialScienceFocus: 'Strong',
      mainExams: 'CUET, TISS Entrance, Psychology Entrance Exams',
      careerFlexibility: 'Medium',
      commonCareers: ['Counselor', 'Social Worker', 'Behavioral Analyst', 'Mental Health Counselor', 'Sociology Researcher']
    }
  ];

  const careerOpportunities = [
    {
      id: 'psychologist',
      title: 'Psychologist',
      icon: Brain,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → HEPSY/PSP → Graduation → Masters/PhD → Psychologist',
      skills: ['Psychological Assessment', 'Research Methods', 'Data Analysis', 'Counseling', 'Critical Thinking'],
      scope: 'Hospitals, Clinics, Schools, Research Institutes, Private Practice',
      salary: '₹4-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Psychology Entrance Exams', 'UGC NET']
    },
    {
      id: 'counselor',
      title: 'Counselor',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → PSP → Graduation → Counseling Course → Counselor',
      skills: ['Active Listening', 'Empathy', 'Communication', 'Problem Solving', 'Emotional Intelligence'],
      scope: 'Schools, Colleges, Mental Health Centers, Private Practice',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['CUET', 'TISS Entrance', 'Counseling Certification']
    },
    {
      id: 'clinical-psychologist',
      title: 'Clinical Psychologist',
      icon: Activity,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → HEPSY → Graduation → M.Sc Psychology → Clinical Psychology',
      skills: ['Clinical Assessment', 'Diagnosis', 'Treatment Planning', 'Research', 'Patient Care'],
      scope: 'Hospitals, Mental Health Clinics, Rehabilitation Centers',
      salary: '₹6-30 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Psychology Entrance Exams', 'Clinical Psychology Programs']
    },
    {
      id: 'social-worker',
      title: 'Social Worker',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → PSP → Graduation → MSW → Social Worker',
      skills: ['Social Assessment', 'Counseling', 'Community Development', 'Advocacy', 'Case Management'],
      scope: 'NGOs, Government Agencies, Hospitals, Community Centers',
      salary: '₹3-12 LPA (Entry Level to Senior)',
      exams: ['CUET', 'TISS Entrance', 'MSW Entrance']
    },
    {
      id: 'behavioral-analyst',
      title: 'Behavioral Analyst',
      icon: Eye,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → HEPSY → Graduation → Behavioral Studies → Behavioral Analyst',
      skills: ['Behavior Analysis', 'Data Collection', 'Pattern Recognition', 'Research', 'Intervention Planning'],
      scope: 'Schools, Therapy Centers, Research Institutes, Corporate',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Psychology Entrance Exams', 'Behavior Analysis Certification']
    },
    {
      id: 'mental-health-counselor',
      title: 'Mental Health Counselor',
      icon: Smile,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → PSP → Graduation → Mental Health Counseling → Counselor',
      skills: ['Mental Health Assessment', 'Crisis Intervention', 'Counseling', 'Empathy', 'Treatment Planning'],
      scope: 'Mental Health Centers, Hospitals, Schools, Private Practice',
      salary: '₹3-16 LPA (Entry Level to Senior)',
      exams: ['CUET', 'TISS Entrance', 'Mental Health Counseling Programs']
    },
    {
      id: 'hr-specialist',
      title: 'Human Resource Specialist',
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → HEPSY → Graduation → HR Specialization → HR Specialist',
      skills: ['Psychology', 'Recruitment', 'Training', 'Employee Relations', 'Organizational Behavior'],
      scope: 'Corporate Companies, HR Departments, Consulting Firms',
      salary: '₹5-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'MBA Entrance', 'HR Certification']
    },
    {
      id: 'child-psychologist',
      title: 'Child Psychologist',
      icon: User,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → HEPSY → Graduation → Child Psychology Specialization',
      skills: ['Child Development', 'Assessment', 'Counseling', 'Parent Guidance', 'Play Therapy'],
      scope: 'Schools, Pediatric Clinics, Child Development Centers',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Psychology Entrance Exams', 'Child Psychology Programs']
    },
    {
      id: 'rehabilitation-counselor',
      title: 'Rehabilitation Counselor',
      icon: HelpCircle,
      color: 'from-teal-500 to-cyan-600',
      roadmap: '10th → PSP → Graduation → Rehabilitation Counseling → Counselor',
      skills: ['Rehabilitation Assessment', 'Counseling', 'Treatment Planning', 'Advocacy', 'Case Management'],
      scope: 'Rehabilitation Centers, Hospitals, NGOs, Government Agencies',
      salary: '₹3-14 LPA (Entry Level to Senior)',
      exams: ['CUET', 'TISS Entrance', 'Rehabilitation Counseling Programs']
    },
    {
      id: 'sociology-researcher',
      title: 'Sociology Researcher',
      icon: Lightbulb,
      color: 'from-rose-500 to-pink-600',
      roadmap: '10th → HEPSY/PSP → Graduation → MA Sociology → Researcher',
      skills: ['Research Methods', 'Data Analysis', 'Social Analysis', 'Critical Thinking', 'Academic Writing'],
      scope: 'Research Institutes, Universities, Think Tanks, Government Agencies',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UGC NET', 'University Entrance']
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
      careers: 'University Psychology Programs, Higher Studies',
      description: 'Common University Entrance Test for university admissions'
    },
    {
      id: 'tiss',
      title: 'TISS Entrance',
      icon: Building,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 pass or appearing',
      subjects: 'General Knowledge, English, Analytical Ability, Social Issues',
      difficulty: 'Hard',
      attempts: 'Once a year',
      successRate: '5-8%',
      careers: 'TISS Programs, Social Sciences, Psychology Programs',
      description: 'Tata Institute of Social Sciences Entrance Exam'
    },
    {
      id: 'psychology-entrance',
      title: 'Psychology Entrance Exams',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      eligibility: '10+2 pass',
      subjects: 'Psychology, General Knowledge, Reasoning, English',
      difficulty: 'Medium to Hard',
      attempts: 'Varies by institute',
      successRate: '10-15%',
      careers: 'Psychology Colleges, Mental Health Programs',
      description: 'Various university psychology entrance examinations'
    }
  ];

  const skillCourses = [
    {
      id: 'counseling-basics',
      title: 'Counseling Basics',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for all counseling and psychology careers',
      description: 'Learn fundamental counseling techniques and approaches'
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence',
      icon: Smile,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Critical for counseling, therapy, and human interaction careers',
      description: 'Develop emotional awareness and management skills'
    },
    {
      id: 'communication-skills',
      title: 'Communication Skills',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Important for counseling, therapy, and client interaction',
      description: 'Master effective communication for helping professions'
    },
    {
      id: 'human-behavior',
      title: 'Human Behavior Studies',
      icon: Eye,
      color: 'from-purple-500 to-indigo-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for psychology and behavioral analysis careers',
      description: 'Understand patterns and drivers of human behavior'
    },
    {
      id: 'sociology-basics',
      title: 'Sociology Basics',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Important for social work and community service careers',
      description: 'Learn fundamental concepts of society and social structures'
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking',
      icon: MessageSquare,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Useful for workshops, seminars, and group therapy sessions',
      description: 'Develop confidence and skills for public presentations'
    },
    {
      id: 'critical-thinking',
      title: 'Critical Thinking',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      level: 'Intermediate',
      duration: '3 months',
      relevance: 'Essential for research, analysis, and problem-solving',
      description: 'Develop analytical and critical thinking skills'
    },
    {
      id: 'mental-health-awareness',
      title: 'Mental Health Awareness',
      icon: Activity,
      color: 'from-teal-500 to-cyan-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Critical for all mental health and counseling careers',
      description: 'Understand mental health issues and awareness'
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
          <span className="text-white font-medium">Psychology Focus</span>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🧠</span>
            <h1 className="text-4xl font-bold text-white">Psychology Focus</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore humanities pathways focused on psychology, human behavior, mental health, counseling, sociology, and social sciences careers after 10th grade.
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
                    <th className="px-6 py-4 text-center text-white font-semibold">HEPSY</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">PSP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Full Form', hepsy: 'History, Economics, Psychology, Sociology', psp: 'Psychology, Sociology, Political Science' },
                    { feature: 'Psychology', hepsy: '✅', psp: '✅' },
                    { feature: 'Sociology', hepsy: '✅', psp: '✅' },
                    { feature: 'Economics', hepsy: '✅', psp: '❌' },
                    { feature: 'Political Science', hepsy: '❌', psp: '✅' },
                    { feature: 'Mental Health Focus', hepsy: 'Strong', psp: 'Strong' },
                    { feature: 'Counseling Scope', hepsy: 'Wide', psp: 'Very Strong' },
                    { feature: 'Social Science Focus', hepsy: 'Very Strong', psp: 'Strong' },
                    { feature: 'Main Entrance Exams', hepsy: 'CUET, Psychology Entrance Exams, TISS Entrance', psp: 'CUET, TISS Entrance, Psychology Entrance Exams' },
                    { feature: 'Career Flexibility', hepsy: 'High', psp: 'Medium' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.hepsy}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.psp}</td>
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
                <h3 className="text-xl font-bold text-white">Choose HEPSY If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You are interested in psychology and sociology</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy understanding human behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want counseling or mental health careers</span>
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
                <h3 className="text-xl font-bold text-white">Choose PSP If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You are interested in social sciences and counseling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You enjoy studying society and behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You want careers in social services or psychology</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Mental Health & Psychology Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Mental Health & Psychology Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Growing Mental Health Careers</h3>
                <p className="text-white/70 text-sm">Increasing demand for mental health professionals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Demand for Counselors</h3>
                <p className="text-white/70 text-sm">Rising need for counseling and therapy services</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Social Science Research</h3>
                <p className="text-white/70 text-sm">Expanding research opportunities in psychology</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Workplace Psychology</h3>
                <p className="text-white/70 text-sm">Growing focus on organizational psychology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
