import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Gavel, Users, TrendingUp, Building, FileText, Briefcase, Shield, GraduationCap, Scale, MessageSquare, Brain, Award, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function LawFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const streamCombinations = [
    {
      id: 'hepl',
      title: 'HEPL',
      subtitle: 'History, Economics, Political Science, Legal Studies',
      color: 'from-blue-500 to-indigo-600',
      icon: '🟦',
      bestFor: [
        'Law Careers',
        'Judiciary',
        'Legal Research',
        'Public Policy',
        'Civil Services'
      ],
      exams: ['CLAT', 'AILET', 'LSAT India', 'CUET'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in law, legal systems, governance, public policy, and judiciary careers.',
      fullForm: 'History, Economics, Political Science, Legal Studies',
      hasEconomics: true,
      judiciaryFocus: 'Strong',
      civilServicesScope: 'Wide',
      publicPolicyFocus: 'Very Strong',
      mainExams: 'CLAT, AILET, LSAT India, CUET',
      careerFlexibility: 'High',
      commonCareers: ['Lawyer', 'Judge', 'Legal Advisor', 'Policy Analyst', 'Civil Services Officer']
    },
    {
      id: 'hpl',
      title: 'HPL',
      subtitle: 'History, Political Science, Legal Studies',
      color: 'from-green-500 to-emerald-600',
      icon: '🟩',
      bestFor: [
        'Advocacy',
        'Legal Practice',
        'Judiciary Careers',
        'Criminal Law',
        'Constitutional Law'
      ],
      exams: ['CLAT', 'AILET', 'LSAT India'],
      difficulty: 'Medium',
      recommended: 'Students interested in legal studies, courtroom practice, constitutional law, and legal services.',
      fullForm: 'History, Political Science, Legal Studies',
      hasEconomics: false,
      judiciaryFocus: 'Very Strong',
      civilServicesScope: 'Good',
      publicPolicyFocus: 'Strong',
      mainExams: 'CLAT, AILET, LSAT India',
      careerFlexibility: 'Medium',
      commonCareers: ['Lawyer', 'Judge', 'Advocate', 'Public Prosecutor', 'Legal Researcher']
    }
  ];

  const careerOpportunities = [
    {
      id: 'lawyer',
      title: 'Lawyer',
      icon: Gavel,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → HEPL/HPL → Graduation → LLB → Legal Practice',
      skills: ['Legal Knowledge', 'Argumentation', 'Legal Research', 'Client Counseling', 'Drafting'],
      scope: 'Law Firms, Corporate Legal Departments, Government Agencies, Judiciary',
      salary: '₹4-30 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'LSAT India']
    },
    {
      id: 'judge',
      title: 'Judge',
      icon: Scale,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → HEPL/HPL → Graduation → LLB → Judicial Services → Judge',
      skills: ['Legal Expertise', 'Impartiality', 'Decision Making', 'Legal Analysis', 'Integrity'],
      scope: 'Judiciary, District Courts, High Courts, Supreme Court',
      salary: '₹8-35 LPA (Entry Level to Senior)',
      exams: ['Judicial Services Exams', 'CLAT', 'State Judicial Services']
    },
    {
      id: 'legal-advisor',
      title: 'Legal Advisor',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → HEPL/HPL → Graduation → LLB → Corporate Law → Legal Advisor',
      skills: ['Corporate Law', 'Legal Compliance', 'Risk Assessment', 'Contract Law', 'Business Law'],
      scope: 'Corporate Legal Departments, Law Firms, MNCs, Startups',
      salary: '₹6-25 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'LSAT India']
    },
    {
      id: 'advocate',
      title: 'Advocate',
      icon: MessageSquare,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → HPL → Graduation → LLB → Bar Council → Advocate',
      skills: ['Courtroom Practice', 'Argumentation', 'Legal Drafting', 'Client Representation', 'Public Speaking'],
      scope: 'Court Practice, Law Firms, Legal Aid, Specialized Practice',
      salary: '₹5-20 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'LSAT India', 'Bar Council Exam']
    },
    {
      id: 'public-prosecutor',
      title: 'Public Prosecutor',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      roadmap: '10th → HPL → Graduation → LLB → Government Service → Public Prosecutor',
      skills: ['Criminal Law', 'Prosecution Strategy', 'Evidence Analysis', 'Court Presentation', 'Legal Ethics'],
      scope: 'Government Prosecution Departments, Legal Services',
      salary: '₹7-18 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'State Public Prosecutor Exams']
    },
    {
      id: 'corporate-lawyer',
      title: 'Corporate Lawyer',
      icon: Building,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → HEPL → Graduation → LLB → Corporate Law Specialization',
      skills: ['Corporate Law', 'M&A', 'Compliance', 'Contract Negotiation', 'Business Strategy'],
      scope: 'Corporate Law Firms, MNCs, Investment Banks, Startups',
      salary: '₹8-40 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'LSAT India']
    },
    {
      id: 'legal-researcher',
      title: 'Legal Researcher',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → HEPL/HPL → Graduation → LLB → LLM → Legal Research',
      skills: ['Legal Research', 'Academic Writing', 'Policy Analysis', 'Critical Thinking', 'Data Analysis'],
      scope: 'Research Institutes, Think Tanks, Universities, Law Schools',
      salary: '₹5-15 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'UGC NET', 'University Entrance']
    },
    {
      id: 'human-rights-lawyer',
      title: 'Human Rights Lawyer',
      icon: Users,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → HPL → Graduation → LLB → Human Rights Specialization',
      skills: ['Human Rights Law', 'Advocacy', 'Social Justice', 'International Law', 'Legal Aid'],
      scope: 'NGOs, International Organizations, Human Rights Commissions, Legal Aid',
      salary: '₹4-12 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'LSAT India']
    },
    {
      id: 'policy-analyst',
      title: 'Policy Analyst',
      icon: TrendingUp,
      color: 'from-teal-500 to-cyan-600',
      roadmap: '10th → HEPL → Graduation → LLB → Policy Studies → Policy Analyst',
      skills: ['Policy Analysis', 'Research', 'Legal Framework', 'Government Systems', 'Communication'],
      scope: 'Think Tanks, Government Agencies, Policy Institutes, NGOs',
      salary: '₹6-18 LPA (Entry Level to Senior)',
      exams: ['CLAT', 'AILET', 'UPSC', 'State PSC']
    },
    {
      id: 'civil-services',
      title: 'Civil Services Officer',
      icon: Award,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → HEPL → Graduation → LLB → UPSC → Civil Services',
      skills: ['Administration', 'Legal Knowledge', 'Policy Making', 'Leadership', 'Public Service'],
      scope: 'Central Government, State Government, Administrative Services',
      salary: '₹8-25 LPA (Entry Level to Senior)',
      exams: ['UPSC Civil Services', 'State PSC', 'CLAT']
    }
  ];

  const competitiveExams = [
    {
      id: 'clat',
      title: 'CLAT',
      icon: Gavel,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 pass (no age limit)',
      subjects: 'English, General Knowledge, Mathematics, Legal Aptitude, Logical Reasoning',
      difficulty: 'Hard',
      attempts: 'Multiple attempts allowed',
      successRate: '2-3%',
      careers: 'NLUs, Private Law Colleges, Legal Careers',
      description: 'Common Law Admission Test for premier law schools'
    },
    {
      id: 'ailet',
      title: 'AILET',
      icon: Scale,
      color: 'from-purple-500 to-indigo-600',
      eligibility: '10+2 pass (no age limit)',
      subjects: 'English, General Knowledge, Logical Reasoning, Legal Aptitude',
      difficulty: 'Very Hard',
      attempts: 'Once a year',
      successRate: '1-2%',
      careers: 'National Law University Delhi, Legal Practice',
      description: 'All India Law Entrance Test for NLU Delhi'
    },
    {
      id: 'lsat-india',
      title: 'LSAT India',
      icon: Brain,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 pass or appearing',
      subjects: 'Logical Reasoning, Reading Comprehension, Analytical Reasoning',
      difficulty: 'Hard',
      attempts: 'Multiple attempts allowed',
      successRate: '3-5%',
      careers: 'Private Law Schools, International Law Programs',
      description: 'Law School Admission Test for Indian law schools'
    },
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      attempts: 'Once a year',
      successRate: '15-20%',
      careers: 'University Law Programs, Higher Studies',
      description: 'Common University Entrance Test for university admissions'
    }
  ];

  const skillCourses = [
    {
      id: 'legal-reasoning',
      title: 'Legal Reasoning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for CLAT, AILET, and all law entrance exams',
      description: 'Develop logical reasoning and legal analysis skills'
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Critical for courtroom practice and legal advocacy',
      description: 'Master communication and presentation skills for legal practice'
    },
    {
      id: 'debate-argumentation',
      title: 'Debate & Argumentation',
      icon: Users,
      color: 'from-purple-500 to-indigo-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for courtroom advocacy and legal arguments',
      description: 'Develop skills for effective legal debate and argumentation'
    },
    {
      id: 'constitutional-law',
      title: 'Constitutional Law Basics',
      icon: Scale,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Foundation for all legal studies and judiciary careers',
      description: 'Understand constitutional principles and legal framework'
    },
    {
      id: 'legal-writing',
      title: 'Legal Writing',
      icon: FileText,
      color: 'from-cyan-500 to-teal-600',
      level: 'Intermediate',
      duration: '3 months',
      relevance: 'Essential for legal drafting, contracts, and documentation',
      description: 'Master legal documentation and drafting skills'
    },
    {
      id: 'communication-skills',
      title: 'Communication Skills',
      icon: MessageSquare,
      color: 'from-pink-500 to-rose-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Important for client interaction and courtroom presentation',
      description: 'Develop effective communication for legal professionals'
    },
    {
      id: 'critical-thinking',
      title: 'Critical Thinking',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for legal analysis and case evaluation',
      description: 'Develop analytical and critical thinking skills for law'
    },
    {
      id: 'current-affairs-law',
      title: 'Current Affairs for Law',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',
      level: 'Beginner to Advanced',
      duration: 'Ongoing',
      relevance: 'Critical for competitive exams and legal awareness',
      description: 'Stay updated with legal developments and current affairs'
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
          <span className="text-white font-medium">Law Focus</span>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">⚖️</span>
            <h1 className="text-4xl font-bold text-white">Law Focus</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore humanities pathways focused on law, legal studies, judiciary, public policy, advocacy, and legal careers after 10th grade.
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
                    <th className="px-6 py-4 text-center text-white font-semibold">HEPL</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">HPL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Full Form', hepl: 'History, Economics, Political Science, Legal Studies', hpl: 'History, Political Science, Legal Studies' },
                    { feature: 'History', hepl: '✅', hpl: '✅' },
                    { feature: 'Economics', hepl: '✅', hpl: '❌' },
                    { feature: 'Political Science', hepl: '✅', hpl: '✅' },
                    { feature: 'Legal Studies', hepl: '✅', hpl: '✅' },
                    { feature: 'Judiciary Focus', hepl: 'Strong', hpl: 'Very Strong' },
                    { feature: 'Civil Services Scope', hepl: 'Wide', hpl: 'Good' },
                    { feature: 'Public Policy Focus', hepl: 'Very Strong', hpl: 'Strong' },
                    { feature: 'Main Entrance Exams', hepl: 'CLAT, AILET, LSAT India, CUET', hpl: 'CLAT, AILET, LSAT India' },
                    { feature: 'Career Flexibility', hepl: 'High', hpl: 'Medium' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.hepl}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.hpl}</td>
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
                <h3 className="text-xl font-bold text-white">Choose HEPL If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You are interested in law & public policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy economics and governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want judiciary or civil services careers</span>
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
                <h3 className="text-xl font-bold text-white">Choose HPL If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You are interested in courtroom practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You enjoy constitutional and criminal law</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You want legal advocacy careers</span>
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

        {/* Law & Judiciary Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Law & Judiciary Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Growing Legal Careers</h3>
                <p className="text-white/70 text-sm">Increasing demand for legal professionals across sectors</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Scale className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Judiciary Opportunities</h3>
                <p className="text-white/70 text-sm">Expanding judicial services and court modernization</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Corporate Law Demand</h3>
                <p className="text-white/70 text-sm">Rising need for corporate legal expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Human Rights Focus</h3>
                <p className="text-white/70 text-sm">Growing emphasis on human rights and social justice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
