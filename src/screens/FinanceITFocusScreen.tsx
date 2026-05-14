import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Search, Filter, ChevronDown, ChevronUp, Star, TrendingUp, Award, DollarSign, Target, Calculator, BarChart3, Monitor, CreditCard, FileText, GraduationCap, Database, Globe, ShoppingCart, Brain, Cpu, Smartphone, Lightbulb, Rocket, Activity, Code } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FinanceITFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombination = {
    id: 'ceba',
    title: 'CEBA',
    subtitle: 'Computer Science, Economics, Business Studies, Accountancy',
    color: 'from-blue-500 to-indigo-600',
    bestFor: ['FinTech', 'Business Analytics', 'E-Commerce', 'Digital Business', 'Financial Technology Careers'],
    exams: ['CA Foundation', 'CS', 'CUET', 'IPMAT'],
    difficulty: 'Medium–High',
    recommended: 'Students interested in commerce, technology, analytics, digital business, and Finance-related IT careers',
    features: {
      fullForm: 'Computer Science, Economics, Business Studies, Accountancy',
      computerScience: true,
      economics: true,
      businessStudies: true,
      accountancy: true,
      difficultyLevel: 'Medium-High',
      fintechFocus: true,
      analyticsFocus: true,
      digitalBusiness: true,
      mainEntranceExams: ['CA Foundation', 'CS', 'CUET', 'IPMAT'],
      careerFlexibility: 'Very High',
      commonCareers: ['FinTech Specialist', 'Business Analyst', 'Data Analyst']
    }
  };

  const recommendation = {
    id: 'ceba',
    color: 'from-blue-500 to-indigo-600',
    title: 'Choose Finance + IT If:',
    reasons: [
      'You enjoy commerce with technology',
      'You are interested in FinTech & analytics',
      'You want digital business careers',
      'You enjoy business, data, and computer applications'
    ]
  };

  const careerOpportunities = [
    {
      id: 'business-analyst',
      title: 'Business Analyst',
      icon: BarChart3,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → CEBA → B.Com/BBA → Business Analyst',
      skills: ['Business Analysis', 'Data Analysis', 'Communication', 'Problem Solving'],
      scope: 'IT Companies, Consulting, Corporate, Startups',
      salary: '₹5-22 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'IPMAT']
    },
    {
      id: 'fintech-specialist',
      title: 'FinTech Specialist',
      icon: Monitor,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → CEBA → B.Com/BBA + FinTech → FinTech Specialist',
      skills: ['FinTech', 'Blockchain', 'Digital Payments', 'API Integration'],
      scope: 'FinTech Companies, Banks, Startups, Consulting',
      salary: '₹6-28 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'FinTech Certifications']
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → CEBA → B.Com/BBA + Data Analytics → Data Analyst',
      skills: ['Data Analysis', 'SQL', 'Python', 'Visualization', 'Statistics'],
      scope: 'IT Companies, Consulting, Finance, E-commerce',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Data Analytics Certifications']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Manager',
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → CEBA → B.Com/BBA + Digital Marketing → Digital Marketing Manager',
      skills: ['Digital Marketing', 'SEO/SEM', 'Social Media', 'Analytics'],
      scope: 'Digital Agencies, E-commerce, Companies, Freelance',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Digital Marketing Certifications']
    },
    {
      id: 'ecommerce-manager',
      title: 'E-Commerce Manager',
      icon: ShoppingCart,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → CEBA → B.Com/BBA + E-Commerce → E-Commerce Manager',
      skills: ['E-Commerce', 'Supply Chain', 'Digital Marketing', 'Analytics'],
      scope: 'E-commerce Companies, Retail, Startups',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'E-Commerce Certifications']
    },
    {
      id: 'fintech-consultant',
      title: 'Financial Technology Consultant',
      icon: Brain,
      color: 'from-emerald-500 to-green-600',
      roadmap: '10th → CEBA → B.Com/MBA + FinTech → FinTech Consultant',
      skills: ['FinTech Consulting', 'Digital Transformation', 'Banking Tech', 'Strategy'],
      scope: 'Consulting Firms, Banks, FinTech Companies',
      salary: '₹7-30 LPA (Entry Level to Senior)',
      exams: ['CUET', 'MBA Entrance', 'FinTech Certifications']
    },
    {
      id: 'product-analyst',
      title: 'Product Analyst',
      icon: Lightbulb,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → CEBA → B.Com/BBA + Product Management → Product Analyst',
      skills: ['Product Analysis', 'Data Analysis', 'Market Research', 'Communication'],
      scope: 'Tech Companies, Startups, Product Companies',
      salary: '₹5-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Product Management Courses']
    },
    {
      id: 'startup-founder',
      title: 'Startup Founder',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → CEBA → B.Com/BBA + Tech Skills → Startup',
      skills: ['Entrepreneurship', 'Business Planning', 'Tech Skills', 'Leadership'],
      scope: 'Startups, Tech Companies, Innovation',
      salary: 'Variable (₹2L to Unlimited)',
      exams: ['CUET', 'BBA Entrance', 'Startup Programs']
    },
    {
      id: 'bi-analyst',
      title: 'Business Intelligence Analyst',
      icon: Activity,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → CEBA → B.Com/BBA + BI → BI Analyst',
      skills: ['BI Tools', 'Data Warehousing', 'Analytics', 'Reporting'],
      scope: 'IT Companies, Consulting, Finance',
      salary: '₹6-24 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'BI Certifications']
    }
  ];

  const professionalCourses = [
    {
      id: 'bcom-ca',
      title: 'B.Com with Computer Applications',
      icon: Calculator,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 with Commerce and Mathematics',
      duration: '3 years',
      opportunities: 'Finance, Accounting, IT, Banking, Consulting',
      description: 'Bachelor of Commerce with computer applications specialization'
    },
    {
      id: 'bba-analytics',
      title: 'BBA in Business Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 any stream with Mathematics',
      duration: '3 years',
      opportunities: 'Business Analytics, Data Analysis, Consulting',
      description: 'Bachelor of Business Administration with analytics focus'
    },
    {
      id: 'bca',
      title: 'BCA',
      icon: Monitor,
      color: 'from-purple-500 to-pink-600',
      eligibility: '10+2 with Mathematics',
      duration: '3 years',
      opportunities: 'Software Development, IT, FinTech',
      description: 'Bachelor of Computer Applications'
    },
    {
      id: 'fintech-cert',
      title: 'FinTech Certification',
      icon: CreditCard,
      color: 'from-orange-500 to-red-600',
      eligibility: 'Graduation in Commerce/IT',
      duration: '6-12 months',
      opportunities: 'FinTech, Digital Banking, Payment Systems',
      description: 'Professional FinTech certification programs'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Globe,
      color: 'from-cyan-500 to-teal-600',
      eligibility: '10+2 any stream',
      duration: '6 months - 2 years',
      opportunities: 'Digital Marketing, Social Media, E-commerce',
      description: 'Digital marketing and social media certification'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: Database,
      color: 'from-emerald-500 to-green-600',
      eligibility: '10+2 with Mathematics',
      duration: '6 months - 1 year',
      opportunities: 'Data Analysis, Business Intelligence',
      description: 'Data analytics and business intelligence certification'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Management',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-purple-600',
      eligibility: '10+2 any stream',
      duration: '6 months - 1 year',
      opportunities: 'E-commerce, Digital Retail, Supply Chain',
      description: 'E-commerce management and digital retail certification'
    },
    {
      id: 'fintech-courses',
      title: 'Financial Technology Courses',
      icon: Brain,
      color: 'from-yellow-500 to-orange-600',
      eligibility: '10+2 Commerce/IT background',
      duration: '6-12 months',
      opportunities: 'FinTech, Digital Banking, Blockchain',
      description: 'Financial technology and digital finance courses'
    }
  ];

  const entranceExams = [
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
      id: 'cs',
      title: 'CS',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
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
      color: 'from-purple-500 to-pink-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      opportunities: 'B.Com, BBA, BCA, Management',
      description: 'Common University Entrance Test for UG programs'
    },
    {
      id: 'ipmat',
      title: 'IPMAT',
      icon: Brain,
      color: 'from-orange-500 to-red-600',
      eligibility: '10+2 with 60% marks',
      subjects: 'Quantitative Aptitude, Verbal Ability, Logical Reasoning',
      difficulty: 'High',
      opportunities: 'IIM IPM, Integrated MBA, Management',
      description: 'Integrated Program in Management Aptitude Test'
    }
  ];

  const skillCourses = [
    {
      id: 'excel-analytics',
      title: 'Excel & Data Analytics',
      icon: BarChart3,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'Very High - Essential for business analysis',
      description: 'Advanced Excel skills for data analysis and business intelligence'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '3-6 months',
      relevance: 'High - Growing demand in digital business',
      description: 'Online marketing, SEO, social media, and digital strategies'
    },
    {
      id: 'financial-modeling',
      title: 'Financial Modeling',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'High - Critical for FinTech careers',
      description: 'Financial analysis, valuation, and modeling techniques'
    },
    {
      id: 'tally-gst',
      title: 'Tally & GST',
      icon: Calculator,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'High - Essential for accounting in FinTech',
      description: 'Accounting software and GST compliance for digital business'
    },
    {
      id: 'business-analytics',
      title: 'Business Analytics Basics',
      icon: BarChart3,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '3-4 months',
      relevance: 'Very High - Core skill for digital business',
      description: 'Business analysis, data interpretation, and insights'
    },
    {
      id: 'python-business',
      title: 'Python for Business',
      icon: Code,
      color: 'from-emerald-500 to-green-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'Very High - Essential for FinTech and data',
      description: 'Python programming for business applications and data analysis'
    },
    {
      id: 'ecommerce-basics',
      title: 'E-Commerce Basics',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-purple-600',
      level: 'Beginner',
      duration: '2-4 months',
      relevance: 'High - Important for digital retail',
      description: 'E-commerce platforms, digital payments, online business'
    },
    {
      id: 'ui-ux-business',
      title: 'UI/UX for Business Platforms',
      icon: Smartphone,
      color: 'from-yellow-500 to-orange-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'Medium - Useful for FinTech product development',
      description: 'User interface design for business and financial applications'
    },
    {
      id: 'ai-business',
      title: 'AI Tools for Business',
      icon: Cpu,
      color: 'from-pink-500 to-rose-600',
      level: 'Intermediate',
      duration: '6-8 months',
      relevance: 'Very High - Future of business technology',
      description: 'AI applications for business automation and analytics'
    }
  ];

  const industryTrends = [
    {
      id: 'fintech-growth',
      title: 'FinTech Revolution',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      growth: '35% Annual Growth',
      demand: 'Very High',
      salary: '₹8-40 LPA',
      description: 'Digital payments, blockchain, neobanking, and financial technology innovation'
    },
    {
      id: 'digital-business',
      title: 'Digital Business Transformation',
      icon: Globe,
      color: 'from-blue-500 to-indigo-600',
      growth: '28% Annual Growth',
      demand: 'High',
      salary: '₹6-25 LPA',
      description: 'E-commerce, digital marketing, online business models'
    },
    {
      id: 'ai-finance',
      title: 'AI in Finance',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      growth: '42% Annual Growth',
      demand: 'Very High',
      salary: '₹10-50 LPA',
      description: 'Machine learning, predictive analytics, automated financial services'
    },
    {
      id: 'future-tech',
      title: 'Future Technology Careers',
      icon: Rocket,
      color: 'from-orange-500 to-red-600',
      growth: '30% Annual Growth',
      demand: 'High',
      salary: '₹7-35 LPA',
      description: 'Blockchain, Web3, metaverse, quantum computing in finance'
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
          <span className="text-white font-medium">Finance + IT Focus</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            💻 Finance + IT Focus
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore commerce and technology-focused pathways after 10th grade including FinTech, business analytics, digital business, e-commerce, and technology-driven finance careers.
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
          onClick={() => toggleExpanded('ceba')}
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
              {expandedCard === 'ceba' ? (
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
                Entrance / Professional Exams:
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

            {expandedCard === 'ceba' && (
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
                CEBA
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Industry Trends Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Industry Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryTrends.map((trend, index) => (
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
                    <h4 className="text-white font-medium mb-1">Average Salary:</h4>
                    <p className="text-white/70 text-sm">{trend.salary}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Description:</h4>
                    <p className="text-white/70 text-sm">{trend.description}</p>
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
