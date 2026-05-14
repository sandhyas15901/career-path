import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, X, Search, Filter, ChevronDown, ChevronUp, Star, TrendingUp, Award, DollarSign, Target, Calculator, BarChart3, CreditCard, FileText, GraduationCap, Shield, Users, PiggyBank } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FinanceAccountingFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombinations = [
    {
      id: 'seba',
      title: 'SEBA',
      subtitle: 'Statistics, Economics, Business Studies, Accountancy',
      color: 'from-blue-500 to-indigo-600',
      bestFor: ['Chartered Accountancy', 'Financial Analysis', 'Banking', 'Investment Analysis', 'Auditing'],
      exams: ['CA Foundation', 'CMA', 'CS', 'CUET'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in finance, statistics, accounting, and analytical careers',
      features: {
        fullForm: 'Statistics, Economics, Business Studies, Accountancy',
        mathematics: false,
        statistics: true,
        economics: true,
        businessStudies: true,
        accountancy: true,
        difficultyLevel: 'Medium-High',
        financeCareers: true,
        bankingCareers: true,
        analyticsFocus: true,
        mainEntranceExams: ['CA Foundation', 'CMA', 'CS'],
        careerFlexibility: 'High',
        commonCareers: ['Chartered Accountant', 'Financial Analyst', 'Auditor']
      }
    },
    {
      id: 'meba',
      title: 'MEBA',
      subtitle: 'Mathematics, Economics, Business Studies, Accountancy',
      color: 'from-green-500 to-emerald-600',
      bestFor: ['Financial Management', 'Investment Banking', 'Accounting', 'Economics', 'Financial Planning'],
      exams: ['CA Foundation', 'CMA', 'CUET'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in mathematics, finance, economics, and accounting careers',
      features: {
        fullForm: 'Mathematics, Economics, Business Studies, Accountancy',
        mathematics: true,
        statistics: false,
        economics: true,
        businessStudies: true,
        accountancy: true,
        difficultyLevel: 'Medium-High',
        financeCareers: true,
        bankingCareers: false,
        analyticsFocus: false,
        mainEntranceExams: ['CA Foundation', 'CMA'],
        careerFlexibility: 'Very High',
        commonCareers: ['Financial Manager', 'Investment Banker', 'Financial Planner']
      }
    }
  ];

  const recommendations = [
    {
      id: 'seba',
      color: 'from-blue-500 to-indigo-600',
      title: 'Choose SEBA If:',
      reasons: [
        'You enjoy statistics and analytics',
        'You are interested in finance & banking',
        'You like accounting and financial analysis'
      ]
    },
    {
      id: 'meba',
      color: 'from-green-500 to-emerald-600',
      title: 'Choose MEBA If:',
      reasons: [
        'You enjoy mathematics and economics',
        'You are interested in investment & financial planning',
        'You want strong finance-related career options'
      ]
    }
  ];

  const careerPaths = [
    {
      id: 'ca',
      title: 'Chartered Accountant (CA)',
      icon: Calculator,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → SEBA/MEBA → CA Foundation → CA Intermediate → CA Final',
      skills: ['Accounting', 'Taxation', 'Audit', 'Financial Analysis', 'Law'],
      scope: 'Audit Firms, Corporate Finance, Consulting, Practice',
      salary: '₹6-30 LPA (Entry Level to Partner)',
      exams: ['CA Foundation', 'CA Intermediate', 'CA Final']
    },
    {
      id: 'auditor',
      title: 'Auditor',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → SEBA/MEBA → B.Com → CA/CMA → Auditor',
      skills: ['Auditing', 'Accounting', 'Risk Assessment', 'Compliance'],
      scope: 'Audit Firms, Government Audits, Internal Audit',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['CA Foundation', 'CMA', 'CS']
    },
    {
      id: 'financial-analyst',
      title: 'Financial Analyst',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → SEBA/MEBA → B.Com/M.Com → Financial Analyst',
      skills: ['Financial Analysis', 'Modeling', 'Excel', 'Research'],
      scope: 'Investment Firms, Banks, Corporate Finance',
      salary: '₹5-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'CFA', 'CA Foundation']
    },
    {
      id: 'investment-banker',
      title: 'Investment Banker',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → MEBA → B.Com/MBA → Investment Banking',
      skills: ['Finance', 'Valuation', 'Deal Making', 'Analytics'],
      scope: 'Investment Banks, Private Equity, M&A',
      salary: '₹8-50 LPA (Entry Level to Senior)',
      exams: ['CUET', 'MBA Entrance', 'CA Foundation']
    },
    {
      id: 'accountant',
      title: 'Accountant',
      icon: Calculator,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → SEBA/MEBA → B.Com → Accountant',
      skills: ['Bookkeeping', 'Financial Statements', 'Taxation', 'Software'],
      scope: 'Companies, Firms, Government, Freelance',
      salary: '₹3-12 LPA (Entry Level to Senior)',
      exams: ['CUET', 'B.Com']
    },
    {
      id: 'tax-consultant',
      title: 'Tax Consultant',
      icon: Shield,
      color: 'from-emerald-500 to-green-600',
      roadmap: '10th → SEBA/MEBA → B.Com + CA/CMA → Tax Consultant',
      skills: ['Taxation', 'Tax Planning', 'Compliance', 'Law'],
      scope: 'Tax Firms, Corporate Tax Departments, Practice',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CA Foundation', 'CMA', 'CS']
    },
    {
      id: 'banking-officer',
      title: 'Banking Officer',
      icon: CreditCard,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → SEBA → Banking Exam → Banking Officer',
      skills: ['Banking Operations', 'Customer Service', 'Compliance', 'Sales'],
      scope: 'Public Sector Banks, Private Banks, Financial Institutions',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['IBPS PO', 'SBI PO', 'Banking Exams']
    },
    {
      id: 'financial-planner',
      title: 'Financial Planner',
      icon: PiggyBank,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → MEBA → B.Com/MBA → CFP → Financial Planner',
      skills: ['Financial Planning', 'Investment Advisory', 'Risk Management', 'Client Relations'],
      scope: 'Financial Planning Firms, Banks, Wealth Management',
      salary: '₹5-22 LPA (Entry Level to Senior)',
      exams: ['CUET', 'CFP', 'CA Foundation']
    }
  ];

  const professionalExams = [
    {
      id: 'ca-foundation',
      title: 'CA Foundation',
      icon: Calculator,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 pass (Commerce preferred)',
      subjects: 'Principles of Accounting, Mercantile Law, General Economics, Quantitative Aptitude',
      difficulty: 'High',
      opportunities: 'Chartered Accountancy, Audit, Taxation, Finance',
      description: 'First level of CA course by ICAI'
    },
    {
      id: 'cma',
      title: 'CMA',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 pass',
      subjects: 'Financial Accounting, Cost Accounting, Business Management, Economics',
      difficulty: 'High',
      opportunities: 'Cost Accounting, Management Accounting, Finance',
      description: 'Cost and Management Accountancy course by ICWAI'
    },
    {
      id: 'cs',
      title: 'CS',
      icon: FileText,
      color: 'from-purple-500 to-pink-600',
      eligibility: '10+2 pass',
      subjects: 'Company Law, Economic Laws, Securities Laws, Accounting',
      difficulty: 'Medium-High',
      opportunities: 'Company Secretary, Corporate Law, Compliance',
      description: 'Company Secretary course by ICSI'
    },
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      opportunities: 'B.Com, BBA, Economics, Management',
      description: 'Common University Entrance Test for UG programs'
    }
  ];

  const skillCourses = [
    {
      id: 'tally',
      title: 'Tally',
      icon: Calculator,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'Very High - Essential for accounting jobs',
      description: 'Accounting software for financial management and bookkeeping'
    },
    {
      id: 'gst',
      title: 'GST & Taxation',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      level: 'Intermediate',
      duration: '3-4 months',
      relevance: 'High - Important for taxation careers',
      description: 'Goods and Services Tax and tax planning fundamentals'
    },
    {
      id: 'financial-modeling',
      title: 'Financial Modeling',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'High - Critical for finance careers',
      description: 'Financial analysis, valuation, and modeling techniques'
    },
    {
      id: 'excel-finance',
      title: 'Excel for Finance',
      icon: BarChart3,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'Very High - Essential for all finance roles',
      description: 'Advanced Excel skills for financial analysis and reporting'
    },
    {
      id: 'stock-market',
      title: 'Stock Market Basics',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'Medium - Useful for investment careers',
      description: 'Stock market operations, trading, and investment basics'
    },
    {
      id: 'accounting-software',
      title: 'Accounting Software',
      icon: Calculator,
      color: 'from-emerald-500 to-green-600',
      level: 'Intermediate',
      duration: '3-4 months',
      relevance: 'High - Required for modern accounting',
      description: 'QuickBooks, SAP, and other accounting platforms'
    },
    {
      id: 'business-communication',
      title: 'Business Communication',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'High - Essential for professional roles',
      description: 'Professional communication, presentation, and client interaction'
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
          onClick={() => setScreen('commerce_streams')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Progress Breadcrumb */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('commerce_streams')}>Commerce</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Finance & Accounting Focus</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            📊 Finance & Accounting Focus
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore finance, accounting, taxation, auditing, and financial management pathways after 10th grade.
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
                    Entrance / Professional Exams:
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
                  <th className="text-center py-3 px-4 font-medium">SEBA</th>
                  <th className="text-center py-3 px-4 font-medium">MEBA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Full Form</td>
                  <td className="text-center py-3 px-4 text-sm">Statistics, Economics, Business Studies, Accountancy</td>
                  <td className="text-center py-3 px-4 text-sm">Mathematics, Economics, Business Studies, Accountancy</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Statistics</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Economics</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Business Studies</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Accountancy</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Difficulty Level</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-sm">Medium-High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-sm">Medium-High</span>
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Finance Careers</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Banking Careers</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Analytics Focus</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Career Flexibility</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Very High</span>
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

        {/* Professional Exams Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Professional Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                    <exam.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{exam.title}</h3>
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
                    <h4 className="text-white font-medium mb-1">Career Opportunities:</h4>
                    <p className="text-white/70 text-sm">{exam.opportunities}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Description:</h4>
                    <p className="text-white/70 text-sm">{exam.description}</p>
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
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
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
      </div>
    </div>
  );
}
