import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Search, Filter, ChevronDown, ChevronUp, Star, TrendingUp, Award, DollarSign, Target, Users, Building, GraduationCap, FileText, BarChart3, Globe, MessageSquare, Users2, Rocket, Activity, Lightbulb, Megaphone, ShoppingBag, Calculator, BookOpen, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BusinessFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombination = {
    id: 'commerce',
    title: 'Commerce',
    subtitle: 'Business Studies, Economics, Accountancy',
    color: 'from-blue-500 to-indigo-600',
    bestFor: ['Entrepreneurship', 'Business Management', 'Marketing', 'Startup Careers', 'Administration'],
    exams: ['CUET', 'IPMAT', 'BBA Entrance Exams'],
    difficulty: 'Medium',
    recommended: 'Students interested in business, leadership, startups, management, and entrepreneurship careers',
    features: {
      fullForm: 'Business Studies, Economics, Accountancy',
      businessStudies: true,
      economics: true,
      accountancy: true,
      difficultyLevel: 'Medium',
      entrepreneurshipFocus: true,
      managementFocus: true,
      marketingFocus: true,
      mainEntranceExams: ['CUET', 'IPMAT', 'BBA Entrance'],
      careerFlexibility: 'High',
      commonCareers: ['Entrepreneur', 'Business Manager', 'Marketing Manager']
    }
  };

  const recommendation = {
    id: 'commerce',
    color: 'from-blue-500 to-indigo-600',
    title: 'Choose Business Focus If:',
    reasons: [
      'You enjoy leadership and management',
      'You are interested in startups and entrepreneurship',
      'You want business-related careers',
      'You enjoy communication, marketing, and administration'
    ]
  };

  const careerOpportunities = [
    {
      id: 'entrepreneur',
      title: 'Entrepreneur',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → Commerce → B.Com/BBA → Startup/Entrepreneurship',
      skills: ['Business Planning', 'Leadership', 'Risk Taking', 'Innovation', 'Financial Management'],
      scope: 'Startups, Business Ventures, Consulting, Self-Employment',
      salary: 'Variable (₹2L to Unlimited)',
      exams: ['CUET', 'BBA Entrance']
    },
    {
      id: 'business-manager',
      title: 'Business Manager',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → Commerce → B.Com/MBA → Business Manager',
      skills: ['Management', 'Leadership', 'Planning', 'Communication', 'Problem Solving'],
      scope: 'Companies, Corporations, MNCs, Startups',
      salary: '₹5-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'MBA Entrance']
    },
    {
      id: 'marketing-manager',
      title: 'Marketing Manager',
      icon: Megaphone,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → Commerce → B.Com/BBA + Marketing → Marketing Manager',
      skills: ['Marketing', 'Communication', 'Strategy', 'Analytics', 'Creativity'],
      scope: 'Marketing Agencies, Companies, Digital Marketing, Brand Management',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Marketing Certifications']
    },
    {
      id: 'hr-manager',
      title: 'HR Manager',
      icon: Users2,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → Commerce → B.Com/MBA + HR → HR Manager',
      skills: ['Human Resources', 'Communication', 'Leadership', 'Conflict Resolution', 'Recruitment'],
      scope: 'HR Departments, Companies, Consulting, Recruitment Firms',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'HR Certifications']
    },
    {
      id: 'sales-manager',
      title: 'Sales Manager',
      icon: TrendingUp,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → Commerce → B.Com/BBA + Sales → Sales Manager',
      skills: ['Sales', 'Communication', 'Negotiation', 'Relationship Building', 'Target Achievement'],
      scope: 'Sales Departments, Companies, B2B, B2C',
      salary: '₹4-22 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Sales Training']
    },
    {
      id: 'startup-founder',
      title: 'Startup Founder',
      icon: Lightbulb,
      color: 'from-emerald-500 to-green-600',
      roadmap: '10th → Commerce → B.Com/BBA + Entrepreneurship → Startup',
      skills: ['Entrepreneurship', 'Business Planning', 'Innovation', 'Leadership', 'Fundraising'],
      scope: 'Startups, Tech Companies, Innovation Hubs, Incubators',
      salary: 'Variable (₹3L to Unlimited)',
      exams: ['CUET', 'BBA Entrance', 'Startup Programs']
    },
    {
      id: 'operations-manager',
      title: 'Operations Manager',
      icon: Activity,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → Commerce → B.Com/MBA + Operations → Operations Manager',
      skills: ['Operations Management', 'Process Optimization', 'Supply Chain', 'Quality Control'],
      scope: 'Manufacturing, Services, Logistics, Companies',
      salary: '₹5-24 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Operations Certifications']
    },
    {
      id: 'brand-manager',
      title: 'Brand Manager',
      icon: ShoppingBag,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → Commerce → B.Com/BBA + Marketing → Brand Manager',
      skills: ['Brand Management', 'Marketing', 'Communication', 'Strategy', 'Creative Thinking'],
      scope: 'Marketing Departments, Companies, Advertising Agencies',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Brand Management Courses']
    },
    {
      id: 'business-development',
      title: 'Business Development Executive',
      icon: BarChart3,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → Commerce → B.Com/BBA + Sales → Business Development',
      skills: ['Business Development', 'Sales', 'Communication', 'Relationship Building', 'Market Analysis'],
      scope: 'Companies, Startups, Consulting, B2B Services',
      salary: '₹5-26 LPA (Entry Level to Senior)',
      exams: ['CUET', 'BBA Entrance', 'Sales Training']
    }
  ];

  const professionalCourses = [
    {
      id: 'bba',
      title: 'BBA',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 any stream',
      duration: '3 years',
      opportunities: 'Business Management, Marketing, HR, Finance, Consulting',
      description: 'Bachelor of Business Administration'
    },
    {
      id: 'bbm',
      title: 'BBM',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 any stream',
      duration: '3 years',
      opportunities: 'Business Management, Administration, Marketing',
      description: 'Bachelor of Business Management'
    },
    {
      id: 'bcom',
      title: 'B.Com',
      icon: Calculator,
      color: 'from-purple-500 to-pink-600',
      eligibility: '10+2 with Commerce',
      duration: '3 years',
      opportunities: 'Accounting, Finance, Banking, Management',
      description: 'Bachelor of Commerce'
    },
    {
      id: 'mba-foundation',
      title: 'MBA Foundation',
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      eligibility: 'Graduation',
      duration: '1 year',
      opportunities: 'Management, Leadership, Business Strategy',
      description: 'Foundation program for MBA preparation'
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship Courses',
      icon: Rocket,
      color: 'from-cyan-500 to-teal-600',
      eligibility: '10+2 any stream',
      duration: '6 months - 2 years',
      opportunities: 'Startups, Business Ventures, Innovation',
      description: 'Entrepreneurship and startup development programs'
    },
    {
      id: 'business-admin',
      title: 'Business Administration Courses',
      icon: Building,
      color: 'from-emerald-500 to-green-600',
      eligibility: '10+2 any stream',
      duration: '6 months - 1 year',
      opportunities: 'Administration, Management, Operations',
      description: 'Business administration and management programs'
    },
    {
      id: 'marketing-management',
      title: 'Marketing Management Courses',
      icon: Megaphone,
      color: 'from-indigo-500 to-purple-600',
      eligibility: '10+2 any stream',
      duration: '6 months - 2 years',
      opportunities: 'Marketing, Brand Management, Advertising',
      description: 'Marketing management and brand strategy programs'
    }
  ];

  const entranceExams = [
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      opportunities: 'B.Com, BBA, BBM, Management',
      description: 'Common University Entrance Test for UG programs'
    },
    {
      id: 'ipmat',
      title: 'IPMAT',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 with 60% marks',
      subjects: 'Quantitative Aptitude, Verbal Ability, Logical Reasoning',
      difficulty: 'High',
      opportunities: 'IIM IPM, Integrated MBA, Management',
      description: 'Integrated Program in Management Aptitude Test'
    },
    {
      id: 'bba-entrance',
      title: 'BBA Entrance Exams',
      icon: FileText,
      color: 'from-purple-500 to-pink-600',
      eligibility: '10+2 pass',
      subjects: 'English, Quantitative Aptitude, Reasoning, General Awareness',
      difficulty: 'Medium-High',
      opportunities: 'BBA, BBM, Business Management',
      description: 'Various university BBA entrance examinations'
    }
  ];

  const skillCourses = [
    {
      id: 'entrepreneurship-basics',
      title: 'Entrepreneurship Basics',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '2-4 months',
      relevance: 'High - Essential for startup careers',
      description: 'Business planning, startup fundamentals, and entrepreneurship basics'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Globe,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3-6 months',
      relevance: 'High - Growing demand in business',
      description: 'Online marketing, SEO, social media, and digital strategies'
    },
    {
      id: 'business-communication',
      title: 'Business Communication',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'High - Essential for all business roles',
      description: 'Professional communication, presentation, and client interaction'
    },
    {
      id: 'leadership-skills',
      title: 'Leadership Skills',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      level: 'Intermediate',
      duration: '3-6 months',
      relevance: 'High - Critical for management roles',
      description: 'Leadership development, team management, and strategic thinking'
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking',
      icon: Megaphone,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '2-4 months',
      relevance: 'Medium - Useful for presentations',
      description: 'Public speaking, presentation skills, and confidence building'
    },
    {
      id: 'sales-marketing',
      title: 'Sales & Marketing',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'High - Important for business development',
      description: 'Sales techniques, marketing strategies, and customer acquisition'
    },
    {
      id: 'startup-management',
      title: 'Startup Management',
      icon: Lightbulb,
      color: 'from-indigo-500 to-purple-600',
      level: 'Intermediate',
      duration: '4-8 months',
      relevance: 'High - Essential for entrepreneurs',
      description: 'Startup planning, funding, and business scaling strategies'
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      icon: Globe,
      color: 'from-yellow-500 to-orange-600',
      level: 'Beginner',
      duration: '2-4 months',
      relevance: 'Medium - Growing field',
      description: 'Social media strategy, content creation, and online presence'
    },
    {
      id: 'financial-basics',
      title: 'Financial Basics for Business',
      icon: Calculator,
      color: 'from-pink-500 to-rose-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'High - Essential for business management',
      description: 'Business finance, budgeting, and financial planning basics'
    }
  ];

  const businessTrends = [
    {
      id: 'startup-ecosystem',
      title: 'Startup Ecosystem Growth',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      growth: '40% Annual Growth',
      demand: 'Very High',
      opportunity: 'Excellent',
      description: 'Thriving startup culture with increased funding opportunities, incubators, and innovation hubs'
    },
    {
      id: 'business-leadership',
      title: 'Business Leadership Demand',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      growth: '25% Annual Growth',
      demand: 'High',
      opportunity: 'Very Good',
      description: 'Growing need for business leaders, managers, and strategic thinkers across industries'
    },
    {
      id: 'digital-entrepreneurship',
      title: 'Digital Entrepreneurship Opportunities',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      growth: '35% Annual Growth',
      demand: 'High',
      opportunity: 'Good',
      description: 'Rise of online businesses, e-commerce, and digital-first startups with lower entry barriers'
    },
    {
      id: 'ecommerce-business',
      title: 'E-commerce Business Growth',
      icon: ShoppingBag,
      color: 'from-orange-500 to-red-600',
      growth: '30% Annual Growth',
      demand: 'High',
      opportunity: 'Excellent',
      description: 'Expanding online retail, digital payments, and direct-to-consumer business models'
    },
    {
      id: 'future-business',
      title: 'Future Business Careers',
      icon: TrendingUp,
      color: 'from-cyan-500 to-teal-600',
      growth: '28% Annual Growth',
      demand: 'Very High',
      opportunity: 'Outstanding',
      description: 'Emerging roles in sustainability, business analytics, and digital transformation'
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
          <span className="text-white font-medium">Business Focus</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            📈 Business Focus
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore business, management, entrepreneurship, marketing, and leadership-focused pathways after 10th grade.
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
          onClick={() => toggleExpanded('commerce')}
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
              {expandedCard === 'commerce' ? (
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

            {expandedCard === 'commerce' && (
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
                📈
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

        {/* Startup & Business Trends Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Startup & Business Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessTrends.map((trend, index) => (
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
                  
                  <div className="flex items-center justify-between">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
