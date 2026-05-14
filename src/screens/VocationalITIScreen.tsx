import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowLeft, Zap, Wrench, Car, Cpu, Building2, Microchip, Scissors, 
  Utensils, Sprout, HeartPulse, Search, Filter, TrendingUp, 
  Building, Briefcase, GraduationCap, Target, ChevronRight, Star, 
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function VocationalITIScreen() {
  const { setScreen, previousScreen, setSelectedVocationalStream } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const handleBack = () => {
    if (previousScreen === 'skill_based_courses') {
      setScreen('skill_based_courses');
    } else {
      setScreen('career_dashboard');
    }
  };

  const vocationalStreams = [
    {
      id: 'electrical',
      title: 'Electrical',
      icon: Zap,
      color: 'from-yellow-500 to-amber-600',
      shortDescription: 'Explore careers in electrical wiring, power systems, industrial maintenance, automation, and electrical technologies.',
      careerAreas: [
        'Electrical Technician',
        'Industrial Electrician',
        'Power Systems',
        'Automation Support'
      ],
      duration: '1-2 years',
      eligibility: '8th/10th pass',
      industry: 'Technical',
      demand: 'High',
      growth: 'Growing'
    },
    {
      id: 'mechanical',
      title: 'Mechanical',
      icon: Wrench,
      color: 'from-blue-500 to-indigo-600',
      shortDescription: 'Learn machine operations, manufacturing systems, mechanical maintenance, fabrication, and industrial technologies.',
      careerAreas: [
        'Mechanical Technician',
        'CNC Operator',
        'Machine Maintenance',
        'Production Support'
      ],
      duration: '1-2 years',
      eligibility: '8th/10th pass',
      industry: 'Manufacturing',
      demand: 'High',
      growth: 'Stable'
    },
    {
      id: 'automobile',
      title: 'Automobile',
      icon: Car,
      color: 'from-red-500 to-rose-600',
      shortDescription: 'Build careers in vehicle servicing, automobile mechanics, EV technology, diagnostics, and automotive maintenance.',
      careerAreas: [
        'Automobile Technician',
        'Vehicle Service Technician',
        'EV Maintenance',
        'Workshop Assistant'
      ],
      duration: '1-2 years',
      eligibility: '8th/10th pass',
      industry: 'Automotive',
      demand: 'High',
      growth: 'EV Growth'
    },
    {
      id: 'computer-it',
      title: 'Computer & IT',
      icon: Cpu,
      color: 'from-purple-500 to-violet-600',
      shortDescription: 'Explore computer hardware, networking, software support, cybersecurity, cloud basics, and IT infrastructure careers.',
      careerAreas: [
        'IT Support Technician',
        'Hardware Technician',
        'Network Support',
        'Computer Operator'
      ],
      duration: '1-2 years',
      eligibility: '10th pass with Maths',
      industry: 'IT',
      demand: 'Very High',
      growth: 'Rapid'
    },
    {
      id: 'civil-construction',
      title: 'Civil & Construction',
      icon: Building2,
      color: 'from-orange-500 to-amber-600',
      shortDescription: 'Learn construction technology, surveying, drafting, building maintenance, and infrastructure development.',
      careerAreas: [
        'Civil Technician',
        'Site Supervisor Assistant',
        'Drafting Technician',
        'Construction Support'
      ],
      duration: '1-2 years',
      eligibility: '8th/10th pass',
      industry: 'Construction',
      demand: 'High',
      growth: 'Growing'
    },
    {
      id: 'electronics',
      title: 'Electronics',
      icon: Microchip,
      color: 'from-cyan-500 to-blue-600',
      shortDescription: 'Discover careers in electronics systems, communication devices, embedded systems, and repair technologies.',
      careerAreas: [
        'Electronics Technician',
        'PCB Support Technician',
        'Embedded Systems Assistant',
        'Communication Technician'
      ],
      duration: '1-2 years',
      eligibility: '10th pass with Science',
      industry: 'Electronics',
      demand: 'High',
      growth: 'Expanding'
    },
    {
      id: 'fashion-beauty',
      title: 'Fashion & Beauty',
      icon: Scissors,
      color: 'from-pink-500 to-rose-600',
      shortDescription: 'Build creative careers in fashion design, tailoring, cosmetology, beauty services, and styling industries.',
      careerAreas: [
        'Fashion Designer Assistant',
        'Beautician',
        'Hair Stylist',
        'Makeup Artist'
      ],
      duration: '1-2 years',
      eligibility: '8th/10th pass',
      industry: 'Creative',
      demand: 'Medium',
      growth: 'Growing'
    },
    {
      id: 'hospitality',
      title: 'Hospitality',
      icon: Utensils,
      color: 'from-emerald-500 to-teal-600',
      shortDescription: 'Explore hotel management, food production, bakery, tourism, restaurant services, and customer hospitality careers.',
      careerAreas: [
        'Hotel Assistant',
        'Chef Assistant',
        'Bakery Technician',
        'Front Office Support'
      ],
      duration: '1-2 years',
      eligibility: '10th pass',
      industry: 'Hospitality',
      demand: 'High',
      growth: 'Tourism Growth'
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      icon: Sprout,
      color: 'from-green-500 to-lime-600',
      shortDescription: 'Learn modern farming, agri-technology, dairy management, irrigation systems, and agricultural production.',
      careerAreas: [
        'Agriculture Technician',
        'Farm Supervisor',
        'Irrigation Assistant',
        'Dairy Technician'
      ],
      duration: '1-2 years',
      eligibility: '8th/10th pass',
      industry: 'Agriculture',
      demand: 'Stable',
      growth: 'Modernization'
    },
    {
      id: 'healthcare',
      title: 'Health Care',
      icon: HeartPulse,
      color: 'from-red-500 to-pink-600',
      shortDescription: 'Explore healthcare support careers in medical assistance, lab technology, patient care, and hospital support services.',
      careerAreas: [
        'Lab Assistant',
        'Healthcare Technician',
        'Patient Care Assistant',
        'Medical Support Staff'
      ],
      duration: '1-2 years',
      eligibility: '10th pass with Science',
      industry: 'Healthcare',
      demand: 'Very High',
      growth: 'Rapid'
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Skill-Based Learning',
      description: 'Hands-on practical training for real industries.'
    },
    {
      icon: Briefcase,
      title: 'Job-Oriented Courses',
      description: 'Career-focused programs with faster employment opportunities.'
    },
    {
      icon: Building,
      title: 'Industry Exposure',
      description: 'Internships, workshops, and industrial training support.'
    },
    {
      icon: TrendingUp,
      title: 'High Demand Careers',
      description: 'Growing opportunities in technical and skilled industries.'
    },
    {
      icon: GraduationCap,
      title: 'Entrepreneurship Opportunities',
      description: 'Start freelance services, workshops, repair centers, and technical businesses.'
    }
  ];

  const popularCareers = [
    {
      title: 'Electrician',
      salary: '₹2-6 LPA',
      demand: 85,
      skills: ['Wiring', 'Safety', 'Troubleshooting'],
      growth: 'High'
    },
    {
      title: 'CNC Operator',
      salary: '₹2.5-7 LPA',
      demand: 78,
      skills: ['CNC Programming', 'Precision', 'Quality Control'],
      growth: 'High'
    },
    {
      title: 'Automobile Technician',
      salary: '₹2.5-8 LPA',
      demand: 82,
      skills: ['Engine Repair', 'Diagnostics', 'EV Systems'],
      growth: 'EV Growth'
    },
    {
      title: 'IT Support Technician',
      salary: '₹3-10 LPA',
      demand: 92,
      skills: ['Hardware', 'Networking', 'Troubleshooting'],
      growth: 'Rapid'
    },
    {
      title: 'Civil Draftsman',
      salary: '₹2.5-7 LPA',
      demand: 75,
      skills: ['AutoCAD', 'Blueprints', 'Surveying'],
      growth: 'Growing'
    },
    {
      title: 'Electronics Technician',
      salary: '₹2.5-8 LPA',
      demand: 80,
      skills: ['Circuit Repair', 'Soldering', 'Testing'],
      growth: 'Expanding'
    },
    {
      title: 'Beautician',
      salary: '₹2-12 LPA',
      demand: 70,
      skills: ['Makeup', 'Hair Styling', 'Customer Service'],
      growth: 'Growing'
    },
    {
      title: 'Chef Assistant',
      salary: '₹2-8 LPA',
      demand: 72,
      skills: ['Food Prep', 'Hygiene', 'Menu Planning'],
      growth: 'Tourism Growth'
    },
    {
      title: 'Agriculture Technician',
      salary: '₹2-6 LPA',
      demand: 65,
      skills: ['Farm Machinery', 'Crop Management', 'Irrigation'],
      growth: 'Modernization'
    },
    {
      title: 'Healthcare Assistant',
      salary: '₹2.5-9 LPA',
      demand: 90,
      skills: ['Patient Care', 'Medical Support', 'Hygiene'],
      growth: 'Rapid'
    }
  ];

  const industryDemand = [
    { industry: 'Electrical', demand: 85, growth: 'Growing', trend: 'up' },
    { industry: 'Mechanical', demand: 82, growth: 'Stable', trend: 'stable' },
    { industry: 'Automobile', demand: 88, growth: 'EV Growth', trend: 'up' },
    { industry: 'IT & Networking', demand: 95, growth: 'Rapid', trend: 'up' },
    { industry: 'Construction', demand: 86, growth: 'Growing', trend: 'up' },
    { industry: 'Electronics', demand: 84, growth: 'Expanding', trend: 'up' },
    { industry: 'Fashion & Beauty', demand: 72, growth: 'Growing', trend: 'up' },
    { industry: 'Hospitality', demand: 78, growth: 'Tourism Growth', trend: 'up' },
    { industry: 'Agriculture', demand: 68, growth: 'Modernization', trend: 'stable' },
    { industry: 'Healthcare', demand: 94, growth: 'Rapid', trend: 'up' }
  ];

  const filteredStreams = vocationalStreams.filter(stream => {
    const matchesSearch = stream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stream.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'government' && ['electrical', 'mechanical', 'civil-construction', 'electronics'].includes(stream.id)) ||
                         (selectedFilter === 'high-demand' && ['High', 'Very High'].includes(stream.demand)) ||
                         (selectedFilter === 'rapid-growth' && ['Rapid', 'EV Growth', 'Expanding'].includes(stream.growth));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('career_dashboard')}>Vocational / ITI</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Career Streams</span>
          </div>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-amber-500/30">
              <Zap className="w-10 h-10" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vocational / ITI Career Streams After 10th
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore skill-based vocational and ITI career pathways designed for students after 10th grade. 
            Discover industry-focused streams, hands-on careers, government opportunities, and job-ready technical skills.
          </p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search streams, careers, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-all text-white"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
            
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'all' ? 'bg-amber-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
                    >
                      All Streams
                    </button>
                    <button
                      onClick={() => setSelectedFilter('government')}
                      className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'government' ? 'bg-amber-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
                    >
                      Government Jobs
                    </button>
                    <button
                      onClick={() => setSelectedFilter('high-demand')}
                      className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'high-demand' ? 'bg-amber-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
                    >
                      High Demand
                    </button>
                    <button
                      onClick={() => setSelectedFilter('rapid-growth')}
                      className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'rapid-growth' ? 'bg-amber-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
                    >
                      Rapid Growth
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Vocational / ITI?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                onClick={feature.title === 'Government Job Opportunities' ? () => setScreen('government_exams') : undefined}
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all group ${feature.title === 'Government Job Opportunities' ? 'cursor-pointer hover:border-amber-500/50' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Stream Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group hover:border-amber-500/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <stream.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{stream.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">{stream.demand} Demand</span>
                      <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">{stream.growth}</span>
                    </div>
                  </div>
                </div>

                <p className="text-white/70 text-sm mb-4 leading-relaxed">{stream.shortDescription}</p>

                <div className="mb-4">
                  <h4 className="text-white/90 text-sm font-semibold mb-2">Career Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.careerAreas.map((area, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-lg">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-white/50 text-xs">Duration</span>
                    <p className="text-white/90 text-sm font-medium">{stream.duration}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/90 text-sm font-medium">{stream.eligibility}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedVocationalStream(stream.id);
                    setScreen('vocational_career_path');
                  }}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-amber-500/30"
                >
                  Explore Career Path
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Careers Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Career Paths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {popularCareers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <h3 className="text-lg font-semibold text-white">{career.title}</h3>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-white/60">Industry Demand</span>
                    <span className="text-amber-400 font-medium">{career.demand}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${career.demand}%` }}
                      transition={{ delay: 1.5 + index * 0.05, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-white/50 text-xs">Salary Range</span>
                  <p className="text-white/90 text-sm font-medium">{career.salary}</p>
                </div>

                <div className="mb-3">
                  <span className="text-white/50 text-xs">Growth</span>
                  <p className="text-green-400 text-sm font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {career.growth}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {career.skills.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white/10 text-white/70 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Demand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Demand Dashboard</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/70 font-medium">Industry</th>
                  <th className="text-left py-4 px-4 text-white/70 font-medium">Demand Level</th>
                  <th className="text-left py-4 px-4 text-white/70 font-medium">Growth</th>
                  <th className="text-left py-4 px-4 text-white/70 font-medium">Trend</th>
                </tr>
              </thead>
              <tbody>
                {industryDemand.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9 + index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-white font-medium">{item.industry}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.demand}%` }}
                            transition={{ delay: 2 + index * 0.05, duration: 0.8 }}
                            className={`h-full rounded-full ${
                              item.demand >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                              item.demand >= 80 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                              item.demand >= 70 ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                              'bg-gradient-to-r from-gray-500 to-gray-600'
                            }`}
                          />
                        </div>
                        <span className={`text-sm font-medium ${
                          item.demand >= 90 ? 'text-green-400' :
                          item.demand >= 80 ? 'text-blue-400' :
                          item.demand >= 70 ? 'text-amber-400' :
                          'text-gray-400'
                        }`}>
                          {item.demand}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.growth === 'Rapid' ? 'bg-green-500/20 text-green-400' :
                        item.growth === 'EV Growth' ? 'bg-blue-500/20 text-blue-400' :
                        item.growth === 'Growing' || item.growth === 'Expanding' || item.growth === 'Tourism Growth' ? 'bg-amber-500/20 text-amber-400' :
                        item.growth === 'Modernization' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.growth}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {item.trend === 'up' ? (
                        <div className="flex items-center gap-1 text-green-400">
                          <ArrowUpRight className="w-4 h-4" />
                          <span className="text-sm">Rising</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-blue-400">
                          <div className="w-4 h-4 border-2 border-blue-400 rounded-full" />
                          <span className="text-sm">Stable</span>
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Vocational Journey?</h3>
            <p className="text-white/70 mb-6">
              Explore these career paths and discover the perfect ITI stream that matches your interests and goals.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg shadow-amber-500/30">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
