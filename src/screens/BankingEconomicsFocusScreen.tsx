import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Search, Filter, ChevronDown, ChevronUp, Star, TrendingUp, Award, Briefcase, DollarSign, Target, Users, GraduationCap, FileText, BarChart3, CreditCard, Shield, PiggyBank, Calculator, TrendingDown, PieChart, Building2, Lock, IndianRupee, FileCheck, AlertCircle, Globe, Brain } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BankingEconomicsFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombination = {
    id: 'economics-business-accountancy',
    title: 'Economics + Business Studies + Accountancy',
    subtitle: 'Economics, Business Studies, Accountancy',
    color: 'from-blue-500 to-indigo-600',
    bestFor: ['Banking Careers', 'Economics', 'Investment Banking', 'Financial Planning', 'Government Financial Jobs'],
    exams: ['Banking Exams (IBPS, SBI)', 'CUET', 'SSC CGL', 'RBI Exams'],
    difficulty: 'Medium',
    recommended: 'Students interested in banking, economics, finance, investments, and government financial careers',
    features: {
      fullForm: 'Economics, Business Studies, Accountancy',
      economics: true,
      businessStudies: true,
      accountancy: true,
      difficultyLevel: 'Medium',
      bankingFocus: true,
      investmentFocus: true,
      governmentJobs: true,
      mainEntranceExams: ['IBPS', 'SBI', 'CUET', 'SSC CGL', 'RBI'],
      careerFlexibility: 'High',
      commonCareers: ['Banking Officer', 'Economist', 'Financial Planner']
    }
  };

  const recommendation = {
    id: 'economics-business-accountancy',
    color: 'from-blue-500 to-indigo-600',
    title: 'Choose Banking & Economics Focus If:',
    reasons: [
      'You are interested in banking jobs',
      'You enjoy economics and finance',
      'You want government financial careers',
      'You are interested in investments and financial planning'
    ]
  };

  const careerOpportunities = [
    {
      id: 'banking-officer',
      title: 'Banking Officer',
      icon: Building2,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → Economics + Business + Accountancy → Banking Preparation → Banking Officer',
      skills: ['Banking Operations', 'Customer Service', 'Financial Analysis', 'Risk Management'],
      scope: 'Public Sector Banks, Private Banks, Financial Institutions',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['IBPS PO', 'SBI PO', 'Banking Exams']
    },
    {
      id: 'investment-banker',
      title: 'Investment Banker',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → Economics + Business + Accountancy → B.Com/MBA → Investment Banking',
      skills: ['Finance', 'Valuation', 'Deal Making', 'Market Analysis'],
      scope: 'Investment Banks, Private Equity, M&A, Corporate Finance',
      salary: '₹8-50 LPA (Entry Level to Senior)',
      exams: ['CUET', 'MBA Entrance', 'CFA']
    },
    {
      id: 'economist',
      title: 'Economist',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → Economics + Business + Accountancy → B.A/M.A Economics → Economist',
      skills: ['Economic Analysis', 'Research', 'Statistics', 'Policy Analysis'],
      scope: 'Government, Research Institutes, Consulting, Banks',
      salary: '₹5-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Economics Entrance', 'UGC NET']
    },
    {
      id: 'financial-planner',
      title: 'Financial Planner',
      icon: PiggyBank,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → Economics + Business + Accountancy → B.Com + CFP → Financial Planner',
      skills: ['Financial Planning', 'Investment Advisory', 'Risk Management', 'Client Relations'],
      scope: 'Financial Planning Firms, Banks, Wealth Management',
      salary: '₹5-22 LPA (Entry Level to Senior)',
      exams: ['CUET', 'CFP', 'Financial Planning Certifications']
    },
    {
      id: 'rbi-officer',
      title: 'RBI Officer',
      icon: Shield,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → Economics + Business + Accountancy → RBI Exam → RBI Officer',
      skills: ['Monetary Policy', 'Banking Regulation', 'Economic Analysis', 'Financial Management'],
      scope: 'Reserve Bank of India, Central Banking',
      salary: '₹8-35 LPA (Entry Level to Senior)',
      exams: ['RBI Grade B', 'RBI Assistant', 'Specialist Officer']
    },
    {
      id: 'insurance-officer',
      title: 'Insurance Officer',
      icon: FileCheck,
      color: 'from-emerald-500 to-green-600',
      roadmap: '10th → Economics + Business + Accountancy → Insurance Exam → Insurance Officer',
      skills: ['Insurance Products', 'Risk Assessment', 'Underwriting', 'Claims Management'],
      scope: 'Insurance Companies, Government Insurance, Broking Firms',
      salary: '₹4-16 LPA (Entry Level to Senior)',
      exams: ['LIC AAO', 'NICL AO', 'Insurance Exams']
    },
    {
      id: 'credit-analyst',
      title: 'Credit Analyst',
      icon: CreditCard,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → Economics + Business + Accountancy → B.Com/MBA → Credit Analyst',
      skills: ['Credit Analysis', 'Risk Assessment', 'Financial Modeling', 'Database Management'],
      scope: 'Banks, NBFCs, Credit Rating Agencies',
      salary: '₹5-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Banking Exams', 'Financial Analysis Courses']
    },
    {
      id: 'loan-officer',
      title: 'Loan Officer',
      icon: IndianRupee,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → Economics + Business + Accountancy → Banking Preparation → Loan Officer',
      skills: ['Loan Processing', 'Credit Assessment', 'Risk Analysis', 'Customer Service'],
      scope: 'Banks, NBFCs, Financial Institutions',
      salary: '₹4-15 LPA (Entry Level to Senior)',
      exams: ['Banking Exams', 'Loan Officer Training', 'Financial Analysis']
    },
    {
      id: 'financial-advisor',
      title: 'Financial Advisor',
      icon: Briefcase,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → Economics + Business + Accountancy → B.Com/MBA + Certifications → Financial Advisor',
      skills: ['Financial Advisory', 'Investment Planning', 'Client Management', 'Product Knowledge'],
      scope: 'Banks, Wealth Management Firms, Consulting',
      salary: '₹4-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'NISM', 'AMFI Certification']
    },
    {
      id: 'stock-market-analyst',
      title: 'Stock Market Analyst',
      icon: TrendingDown,
      color: 'from-cyan-500 to-blue-600',
      roadmap: '10th → Economics + Business + Accountancy → B.Com + Market Analysis → Stock Market Analyst',
      skills: ['Market Analysis', 'Technical Analysis', 'Research', 'Financial Modeling'],
      scope: 'Stock Broking Firms, Investment Banks, Research Houses',
      salary: '₹4-30 LPA (Entry Level to Senior)',
      exams: ['CUET', 'NISM', 'CFA', 'Stock Market Courses']
    }
  ];

  const professionalCourses = [
    {
      id: 'bcom',
      title: 'B.Com',
      icon: Calculator,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 with Commerce',
      duration: '3 years',
      opportunities: 'Banking, Finance, Accounting, Management',
      description: 'Bachelor of Commerce'
    },
    {
      id: 'economics-degree',
      title: 'Economics Degree',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 with Mathematics',
      duration: '3 years',
      opportunities: 'Economics, Research, Banking, Government',
      description: 'Bachelor/Master of Economics'
    },
    {
      id: 'banking-preparation',
      title: 'Banking Preparation',
      icon: Shield,
      color: 'from-purple-500 to-pink-600',
      eligibility: 'Graduation',
      duration: '6-12 months',
      opportunities: 'Banking, Financial Services, Government',
      description: 'Banking exam preparation and coaching programs'
    },
    {
      id: 'financial-services',
      title: 'Financial Services Courses',
      icon: CreditCard,
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 with Commerce',
      duration: '6 months - 2 years',
      opportunities: 'Banking, Insurance, Financial Services',
      description: 'Financial services and banking operations courses'
    },
    {
      id: 'investment-banking',
      title: 'Investment Banking Courses',
      icon: TrendingUp,
      color: 'from-cyan-500 to-teal-600',
      eligibility: 'Graduation in Commerce/Economics',
      duration: '6-12 months',
      opportunities: 'Investment Banking, Private Equity, Corporate Finance',
      description: 'Investment banking and financial services specialization'
    },
    {
      id: 'insurance-finance',
      title: 'Insurance & Finance Courses',
      icon: FileCheck,
      color: 'from-emerald-500 to-green-600',
      eligibility: '10+2 with Commerce',
      duration: '6 months - 1 year',
      opportunities: 'Insurance, Banking, Financial Planning',
      description: 'Insurance and financial planning programs'
    }
  ];

  const entranceExams = [
    {
      id: 'ibps',
      title: 'IBPS',
      icon: Building2,
      color: 'from-blue-500 to-indigo-600',
      eligibility: 'Graduation (20-30 years)',
      subjects: 'Reasoning, Quantitative Aptitude, English, General Awareness, Computer Knowledge',
      difficulty: 'High',
      opportunities: 'PO, Clerk, Specialist Officer in Public Sector Banks',
      description: 'Institute of Banking Personnel Selection exam for public sector banks'
    },
    {
      id: 'sbi',
      title: 'SBI Clerk / PO',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      eligibility: 'Graduation (20-30 years)',
      subjects: 'Reasoning, Quantitative Aptitude, English, General Awareness, Computer Knowledge',
      difficulty: 'Very High',
      opportunities: 'Clerk, Probationary Officer in State Bank of India',
      description: 'State Bank of India recruitment for banking positions'
    },
    {
      id: 'ssc-cgl',
      title: 'SSC CGL',
      icon: FileText,
      color: 'from-purple-500 to-pink-600',
      eligibility: 'Graduation',
      subjects: 'General Intelligence, Quantitative Aptitude, English, General Awareness, Reasoning',
      difficulty: 'High',
      opportunities: 'Income Tax, Customs, Excise, other Government Departments',
      description: 'Staff Selection Commission Combined Graduate Level exam'
    },
    {
      id: 'rbi',
      title: 'RBI Exams',
      icon: Lock,
      color: 'from-orange-500 to-red-600',
      eligibility: 'Graduation (55-60% marks)',
      subjects: 'Reasoning, English, Quantitative Aptitude, General Awareness, Economics',
      difficulty: 'Very High',
      opportunities: 'Grade B Officer, Assistant, Manager in Reserve Bank of India',
      description: 'Reserve Bank of India recruitment exams'
    },
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-cyan-500 to-teal-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      opportunities: 'B.Com, Economics, Management, Banking',
      description: 'Common University Entrance Test for UG programs'
    }
  ];

  const skillCourses = [
    {
      id: 'banking-basics',
      title: 'Banking Basics',
      icon: Building2,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'Very High - Essential for banking careers',
      description: 'Banking operations, customer service, and financial services fundamentals'
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning',
      icon: PiggyBank,
      color: 'from-green-500 to-emerald-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'High - Critical for advisory roles',
      description: 'Financial planning, investment advisory, and wealth management'
    },
    {
      id: 'stock-market',
      title: 'Stock Market Basics',
      icon: TrendingDown,
      color: 'from-purple-500 to-pink-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'Medium - Useful for investment careers',
      description: 'Stock market operations, trading, and investment basics'
    },
    {
      id: 'excel-finance',
      title: 'Excel for Finance',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'Very High - Essential for finance roles',
      description: 'Advanced Excel skills for financial analysis and reporting'
    },
    {
      id: 'investment-analysis',
      title: 'Investment Analysis',
      icon: TrendingUp,
      color: 'from-cyan-500 to-teal-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'High - Important for investment roles',
      description: 'Investment analysis, portfolio management, and financial modeling'
    },
    {
      id: 'business-communication',
      title: 'Business Communication',
      icon: Users,
      color: 'from-emerald-500 to-green-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'High - Essential for all business roles',
      description: 'Professional communication, presentation, and client interaction'
    },
    {
      id: 'insurance-basics',
      title: 'Insurance Basics',
      icon: FileCheck,
      color: 'from-indigo-500 to-purple-600',
      level: 'Beginner',
      duration: '2-4 months',
      relevance: 'High - Important for insurance careers',
      description: 'Insurance products, underwriting, and claims processing'
    },
    {
      id: 'financial-literacy',
      title: 'Financial Literacy',
      icon: AlertCircle,
      color: 'from-yellow-500 to-orange-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'High - Foundation for all finance careers',
      description: 'Personal finance, budgeting, and financial management basics'
    },
    {
      id: 'economic-analysis',
      title: 'Economic Analysis',
      icon: PieChart,
      color: 'from-pink-500 to-rose-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'Very High - Core for economics careers',
      description: 'Economic theory, data analysis, and policy evaluation'
    }
  ];

  const bankingTrends = [
    {
      id: 'digital-banking',
      title: 'Growth of Digital Banking',
      icon: Globe,
      color: 'from-blue-500 to-indigo-600',
      growth: '25% Annual Growth',
      demand: 'Very High',
      opportunity: 'Excellent',
      description: 'Rapid expansion of online banking, mobile banking, and digital payment systems'
    },
    {
      id: 'financial-analysts',
      title: 'Demand for Financial Analysts',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      growth: '30% Annual Growth',
      demand: 'Very High',
      opportunity: 'Outstanding',
      description: 'Increasing need for financial analysis, risk management, and investment advisory'
    },
    {
      id: 'government-banking',
      title: 'Government Banking Opportunities',
      icon: Building2,
      color: 'from-purple-500 to-pink-600',
      growth: '15% Annual Growth',
      demand: 'High',
      opportunity: 'Very Good',
      description: 'Stable career opportunities in public sector banks and financial institutions'
    },
    {
      id: 'investment-stock',
      title: 'Investment & Stock Market Careers',
      icon: TrendingDown,
      color: 'from-orange-500 to-red-600',
      growth: '35% Annual Growth',
      demand: 'High',
      opportunity: 'Excellent',
      description: 'Growing demand for investment banking, stock analysis, and portfolio management'
    },
    {
      id: 'future-finance',
      title: 'Future Finance Industry Growth',
      icon: Brain,
      color: 'from-cyan-500 to-teal-600',
      growth: '28% Annual Growth',
      demand: 'Very High',
      opportunity: 'Outstanding',
      description: 'Emerging roles in fintech, blockchain, sustainable finance, and digital banking'
    }
  ];

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

  const getDemandBadge = (demand: string) => {
    const colors: { [key: string]: string } = {
      'Very High': 'bg-red-500/20 text-red-300 border-red-500/30',
      'High': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Medium': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Low': 'bg-green-500/20 text-green-300 border-green-500/30'
    };
    return colors[demand] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const getOpportunityBadge = (opportunity: string) => {
    const colors: { [key: string]: string } = {
      'Excellent': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Very Good': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Good': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Average': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
    };
    return colors[opportunity] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
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
          <span className="text-white font-medium">Banking & Economics Focus</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            🏦 Banking & Economics Focus
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore banking, economics, finance, investment, and government financial career pathways after 10th grade.
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
              placeholder="Search careers and courses..."
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

        {/* Stream Combination Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-12 hover:bg-white/15 transition-all cursor-pointer"
          onClick={() => toggleExpanded('economics-business-accountancy')}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${streamCombination.color} flex items-center justify-center text-white font-bold text-xl`}>
              {streamCombination.title}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{streamCombination.title}</h3>
              <p className="text-white/70 text-sm">{streamCombination.subtitle}</p>
            </div>
            <div className="flex items-center gap-1">
              {expandedCard === 'economics-business-accountancy' ? (
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
                {streamCombination.bestFor.map((item, idx) => (
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
                {streamCombination.exams.map((exam, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                    {exam}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium mb-1">Difficulty:</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyBadge(streamCombination.difficulty)}`}>
                  {streamCombination.difficulty}
                </span>
              </div>
            </div>

            {expandedCard === 'economics-business-accountancy' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 border-t border-white/10"
              >
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong>Recommended For:</strong> {streamCombination.recommended}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* "Choose This If..." Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
              className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${recommendation.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                🏦
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{recommendation.title}</h3>
              <ul className="space-y-2">
                {recommendation.reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/80">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Career Opportunities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
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

        {/* Professional Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Professional Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                    <course.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Eligibility:</h4>
                    <p className="text-white/70 text-sm">{course.eligibility}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Duration:</h4>
                    <p className="text-white/70 text-sm">{course.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Career Opportunities:</h4>
                    <p className="text-white/70 text-sm">{course.opportunities}</p>
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
          transition={{ delay: 1.0 }}
          className="mb-12"
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
          className="mb-12"
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

        {/* Banking & Finance Trends Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Banking & Finance Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bankingTrends.map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${trend.color} flex items-center justify-center text-white`}>
                    <trend.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{trend.title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium mb-1">Growth Rate:</h4>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        {trend.growth}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium mb-1">Demand:</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDemandBadge(trend.demand)}`}>
                        {trend.demand}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Opportunity:</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getOpportunityBadge(trend.opportunity)}`}>
                      {trend.opportunity}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Description:</h4>
                  <p className="text-white/70 text-sm">{trend.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
