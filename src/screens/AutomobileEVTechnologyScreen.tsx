import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface AutomobileEVTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const AutomobileEVTechnologyScreen: React.FC<AutomobileEVTechnologyScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Medium-High': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getGrowthBadge = (growth: string) => {
    const growthValue = parseInt(growth);
    if (growthValue >= 20) return 'bg-green-500/20 text-green-300 border-green-500/30';
    if (growthValue >= 15) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (growthValue >= 10) return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  // Diploma Courses Data
  const diplomaCourses = [
    {
      id: 'automobile-engineering',
      icon: '🟦',
      color: 'from-blue-600 to-cyan-600',
      title: 'Automobile Engineering Diploma',
      recommended: 'Students interested in cars, engines, automotive systems, and vehicle technology',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Vehicle Technology',
        'Automotive Systems',
        'Engine Design',
        'Automobile Servicing'
      ],
      careers: [
        'Automobile Technician',
        'Service Engineer',
        'Vehicle Maintenance Technician',
        'Automotive Workshop Supervisor'
      ],
      coreFocus: 'Vehicle technology, automotive systems, engine design',
      practicalWork: 'Very High - Workshop training, vehicle maintenance, engine work',
      vehicleSystems: 'Complete automotive systems knowledge',
      evTechnology: 'Basic EV concepts in traditional automotive',
      diagnosticsRepair: 'Advanced diagnostics and repair skills',
      automationSmartSystems: 'Basic automotive electronics',
      industryDemand: 'High - Growing automotive sector',
      governmentJobs: 'High - Transport departments, PSUs',
      higherStudy: 'B.E/B.Tech in Automobile Engineering',
      commonCareers: ['Automobile Engineer', 'Service Manager', 'Workshop Supervisor']
    },
    {
      id: 'ev-technology',
      icon: '🟩',
      color: 'from-green-600 to-emerald-600',
      title: 'EV Technology Diploma',
      recommended: 'Students interested in electric vehicles, battery systems, and future transportation technologies',
      duration: '2–3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Electric Vehicles',
        'EV Battery Systems',
        'Charging Infrastructure',
        'Sustainable Mobility'
      ],
      careers: [
        'EV Technician',
        'Battery Maintenance Technician',
        'EV Service Engineer',
        'Charging Station Technician'
      ],
      coreFocus: 'Electric vehicles, battery systems, charging infrastructure',
      practicalWork: 'High - EV systems, battery maintenance, charging setup',
      vehicleSystems: 'EV-specific vehicle systems',
      evTechnology: 'Very High - Core EV and battery focus',
      diagnosticsRepair: 'Advanced EV diagnostics',
      automationSmartSystems: 'Smart EV systems and connectivity',
      industryDemand: 'Very High - Rapid EV sector growth',
      governmentJobs: 'Medium-High - Emerging EV government initiatives',
      higherStudy: 'B.E/B.Tech in EV Technology/Automobile',
      commonCareers: ['EV Engineer', 'Battery Engineer', 'Charging Infrastructure Manager']
    },
    {
      id: 'automotive-service-technology',
      icon: '🟨',
      color: 'from-yellow-600 to-orange-600',
      title: 'Automotive Service Technology Diploma',
      recommended: 'Students interested in vehicle servicing, diagnostics, and repair technologies',
      duration: '2–3 Years',
      difficulty: 'Easy-Medium',
      bestFor: [
        'Vehicle Diagnostics',
        'Automotive Repair',
        'Maintenance Systems',
        'Garage & Workshop Operations'
      ],
      careers: [
        'Automotive Service Technician',
        'Vehicle Diagnostics Technician',
        'Workshop Technician',
        'Service Advisor'
      ],
      coreFocus: 'Vehicle diagnostics, automotive repair, maintenance systems',
      practicalWork: 'Very High - Hands-on repair, diagnostics, workshop work',
      vehicleSystems: 'Service-focused vehicle knowledge',
      evTechnology: 'Basic EV service knowledge',
      diagnosticsRepair: 'Very High - Core diagnostics and repair focus',
      automationSmartSystems: 'Basic diagnostic tools and systems',
      industryDemand: 'High - Constant need for service technicians',
      governmentJobs: 'Medium - Service departments, transport',
      higherStudy: 'B.E/B.Tech in Automobile Engineering',
      commonCareers: ['Service Manager', 'Diagnostics Specialist', 'Workshop Manager']
    },
    {
      id: 'hybrid-smart-mobility',
      icon: '🟪',
      color: 'from-purple-600 to-pink-600',
      title: 'Hybrid & Smart Mobility Systems Diploma',
      recommended: 'Students interested in future mobility, smart vehicles, and automotive electronics',
      duration: '2–3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Hybrid Vehicles',
        'Smart Mobility',
        'Connected Vehicle Systems',
        'Intelligent Transportation'
      ],
      careers: [
        'Hybrid Vehicle Technician',
        'Smart Mobility Technician',
        'Automotive Electronics Assistant',
        'Intelligent Transport Systems Technician'
      ],
      coreFocus: 'Hybrid vehicles, smart mobility, connected vehicle systems',
      practicalWork: 'High - Hybrid systems, smart vehicle tech, mobility solutions',
      vehicleSystems: 'Advanced hybrid and smart vehicle systems',
      evTechnology: 'High - Hybrid and electric integration',
      diagnosticsRepair: 'Advanced smart diagnostics',
      automationSmartSystems: 'Very High - Core smart mobility focus',
      industryDemand: 'Very High - Future mobility sector',
      governmentJobs: 'Medium-High - Smart city initiatives',
      higherStudy: 'B.E/B.Tech in Automobile/Electronics',
      commonCareers: ['Smart Mobility Engineer', 'Hybrid Systems Specialist', 'Connected Vehicle Engineer']
    }
  ];

  // Comparison Table Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      automobileEngineering: 'Vehicle technology & automotive systems',
      evTechnology: 'Electric vehicles & battery systems',
      automotiveService: 'Vehicle diagnostics & repair',
      hybridSmartMobility: 'Hybrid vehicles & smart mobility'
    },
    {
      feature: 'Vehicle Systems',
      automobileEngineering: 'Complete automotive systems',
      evTechnology: 'EV-specific vehicle systems',
      automotiveService: 'Service-focused vehicle knowledge',
      hybridSmartMobility: 'Advanced hybrid & smart systems'
    },
    {
      feature: 'EV Technology',
      automobileEngineering: 'Basic EV concepts',
      evTechnology: 'Very High - Core EV focus',
      automotiveService: 'Basic EV service knowledge',
      hybridSmartMobility: 'High - Hybrid & electric integration'
    },
    {
      feature: 'Diagnostics & Repair',
      automobileEngineering: 'Advanced diagnostics',
      evTechnology: 'Advanced EV diagnostics',
      automotiveService: 'Very High - Core diagnostics focus',
      hybridSmartMobility: 'Advanced smart diagnostics'
    },
    {
      feature: 'Automation & Smart Systems',
      automobileEngineering: 'Basic automotive electronics',
      evTechnology: 'Smart EV systems',
      automotiveService: 'Basic diagnostic tools',
      hybridSmartMobility: 'Very High - Smart mobility focus'
    },
    {
      feature: 'Industry Demand',
      automobileEngineering: 'High',
      evTechnology: 'Very High',
      automotiveService: 'High',
      hybridSmartMobility: 'Very High'
    },
    {
      feature: 'Government Job Scope',
      automobileEngineering: 'High',
      evTechnology: 'Medium-High',
      automotiveService: 'Medium',
      hybridSmartMobility: 'Medium-High'
    },
    {
      feature: 'Higher Study Opportunities',
      automobileEngineering: 'B.E/B.Tech Automobile Engineering',
      evTechnology: 'B.E/B.Tech EV Technology/Automobile',
      automotiveService: 'B.E/B.Tech Automobile Engineering',
      hybridSmartMobility: 'B.E/B.Tech Automobile/Electronics'
    },
    {
      feature: 'Common Careers',
      automobileEngineering: 'Automobile Engineer, Service Manager',
      evTechnology: 'EV Engineer, Battery Engineer',
      automotiveService: 'Service Manager, Diagnostics Specialist',
      hybridSmartMobility: 'Smart Mobility Engineer, Hybrid Systems Specialist'
    },
    {
      feature: 'Difficulty Level',
      automobileEngineering: 'Medium',
      evTechnology: 'Medium-Hard',
      automotiveService: 'Easy-Medium',
      hybridSmartMobility: 'Medium-Hard'
    }
  ];

  // Choose This If Data
  const chooseOptions = [
    {
      icon: '🚗',
      title: 'Choose Automobile Engineering If:',
      reasons: [
        'You enjoy vehicles and engine systems',
        'You are interested in automotive engineering',
        'You want broad automobile careers'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '⚡',
      title: 'Choose EV Technology If:',
      reasons: [
        'You are interested in electric vehicles',
        'You enjoy battery and charging technologies',
        'You want future-focused mobility careers'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: '🔧',
      title: 'Choose Automotive Service Technology If:',
      reasons: [
        'You enjoy vehicle repair and diagnostics',
        'You like practical workshop work',
        'You want automotive servicing careers'
      ],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: '🤖',
      title: 'Choose Hybrid & Smart Mobility Systems If:',
      reasons: [
        'You are interested in smart vehicles and automation',
        'You enjoy modern mobility technologies',
        'You want next-generation automobile careers'
      ],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Automobile Technician',
      icon: '🚗',
      skills: ['Vehicle Repair', 'Engine Maintenance', 'Diagnostics'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Junior Technician → Senior Technician → Service Manager'
    },
    {
      title: 'EV Technician',
      icon: '⚡',
      skills: ['EV Systems', 'Battery Maintenance', 'Charging Infrastructure'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '25%',
      roadmap: 'Diploma → EV Technician → Senior EV Tech → EV Engineer'
    },
    {
      title: 'Vehicle Diagnostics Technician',
      icon: '🔧',
      skills: ['Diagnostic Tools', 'Troubleshooting', 'System Analysis'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '15%',
      roadmap: 'Diploma → Diagnostics Tech → Senior Tech → Diagnostic Specialist'
    },
    {
      title: 'Service Engineer',
      icon: '🛠️',
      skills: ['Vehicle Servicing', 'Customer Service', 'Technical Support'],
      salary: '₹3-7 LPA',
      demand: 'High',
      growth: '10%',
      roadmap: 'Diploma → Service Engineer → Senior Service → Service Manager'
    },
    {
      title: 'Battery Maintenance Technician',
      icon: '🔋',
      skills: ['Battery Systems', 'EV Battery Care', 'Power Management'],
      salary: '₹4-7 LPA',
      demand: 'Very High',
      growth: '22%',
      roadmap: 'Diploma → Battery Tech → Senior Tech → Battery Engineer'
    },
    {
      title: 'Workshop Supervisor',
      icon: '🏭',
      skills: ['Workshop Management', 'Team Leadership', 'Quality Control'],
      salary: '₹4-8 LPA',
      demand: 'Medium-High',
      growth: '8%',
      roadmap: 'Diploma → Supervisor → Workshop Manager → Operations Manager'
    },
    {
      title: 'Charging Station Technician',
      icon: '🔌',
      skills: ['Charging Systems', 'Electrical Installation', 'Maintenance'],
      salary: '₹3-6 LPA',
      demand: 'Very High',
      growth: '30%',
      roadmap: 'Diploma → Charging Tech → Senior Tech → Infrastructure Manager'
    },
    {
      title: 'Hybrid Vehicle Technician',
      icon: '🔄',
      skills: ['Hybrid Systems', 'Dual Powertrain', 'Advanced Diagnostics'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '20%',
      roadmap: 'Diploma → Hybrid Tech → Senior Tech → Hybrid Systems Engineer'
    },
    {
      title: 'Automotive Electronics Assistant',
      icon: '📱',
      skills: ['Vehicle Electronics', 'Infotainment', 'Sensor Systems'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '18%',
      roadmap: 'Diploma → Electronics Assistant → Senior Tech → Electronics Engineer'
    },
    {
      title: 'Smart Mobility Technician',
      icon: '🌐',
      skills: ['Connected Vehicles', 'IoT Systems', 'Mobility Solutions'],
      salary: '₹4-9 LPA',
      demand: 'Very High',
      growth: '28%',
      roadmap: 'Diploma → Mobility Tech → Senior Tech → Smart Mobility Engineer'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech Automobile',
      successRate: '75%'
    },
    {
      title: 'Polytechnic CET',
      icon: '🎯',
      eligibility: '10th Pass',
      process: 'State Exam → Merit List → Admission',
      higherStudy: 'Lateral Entry to Engineering',
      successRate: '60%'
    },
    {
      title: 'Direct Admission',
      icon: '🎓',
      eligibility: '10th Pass',
      process: 'Application → Interview → Admission',
      higherStudy: 'Regular B.E/B.Tech Admission',
      successRate: '85%'
    },
    {
      title: 'Lateral Entry to B.E/B.Tech Automobile',
      icon: '🔄',
      eligibility: 'Diploma in Automobile/EV Technology',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'Automobile Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🚗',
      relevance: 'Foundation for all automotive careers',
      skills: ['Vehicle Components', 'Basic Mechanics', 'Safety Procedures']
    },
    {
      title: 'EV Battery Technology',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🔋',
      relevance: 'Essential for EV careers',
      skills: ['Battery Systems', 'Power Management', 'Charging Technology']
    },
    {
      title: 'Vehicle Diagnostics',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🔧',
      relevance: 'Critical for service careers',
      skills: ['Diagnostic Tools', 'Troubleshooting', 'System Analysis']
    },
    {
      title: 'Hybrid Vehicle Systems',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '🔄',
      relevance: 'Future of automotive technology',
      skills: ['Hybrid Powertrain', 'Energy Management', 'System Integration']
    },
    {
      title: 'Automotive Electronics',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '📱',
      relevance: 'Modern vehicle systems',
      skills: ['Vehicle Electronics', 'Sensors', 'Infotainment Systems']
    },
    {
      title: 'Engine Maintenance',
      level: 'Beginner',
      duration: '3 Months',
      icon: '⚙️',
      relevance: 'Core automotive skill',
      skills: ['Engine Systems', 'Maintenance Procedures', 'Repair Techniques']
    },
    {
      title: 'CAD for Automobile Design',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '📐',
      relevance: 'Design and engineering skills',
      skills: ['CAD Software', 'Vehicle Design', 'Technical Drawing']
    },
    {
      title: 'Charging Infrastructure Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🔌',
      relevance: 'Growing EV sector',
      skills: ['Charging Systems', 'Electrical Installation', 'Safety Standards']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Automobile Manufacturing Companies',
      icon: '🏭',
      demand: 'High',
      opportunities: 'Maruti Suzuki, Tata Motors, Mahindra, Hyundai',
      growth: '10% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'EV Startups',
      icon: '🚀',
      demand: 'Very High',
      opportunities: 'Ola Electric, Ather Energy, Tata Motors EV, EV Startups',
      growth: '35% annually',
      salaryRange: '₹4-12 LPA'
    },
    {
      name: 'Vehicle Service Centers',
      icon: '🔧',
      demand: 'High',
      opportunities: 'Authorized Service Centers, Multi-brand Workshops',
      growth: '12% annually',
      salaryRange: '₹2-6 LPA'
    },
    {
      name: 'Battery Manufacturing Industry',
      icon: '🔋',
      demand: 'Very High',
      opportunities: 'Exide Industries, Amara Raja, Battery Manufacturers',
      growth: '25% annually',
      salaryRange: '₹3-9 LPA'
    },
    {
      name: 'Smart Mobility Companies',
      icon: '🌐',
      demand: 'Very High',
      opportunities: 'Mobility Startups, Connected Vehicle Companies',
      growth: '30% annually',
      salaryRange: '₹4-11 LPA'
    },
    {
      name: 'Automotive Electronics Industry',
      icon: '📱',
      demand: 'High',
      opportunities: 'Bosch, Continental, Harman, Automotive Electronics',
      growth: '15% annually',
      salaryRange: '₹3-8 LPA'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'Railways Mechanical & Vehicle Jobs',
      icon: '🚂',
      eligibility: 'Diploma in Automobile/EV Technology',
      skills: ['Vehicle Maintenance', 'Mechanical Systems', 'Railway Vehicles'],
      growth: 'Stable government career',
      salary: '₹5-9 LPA'
    },
    {
      title: 'Government Transport Department Jobs',
      icon: '🚌',
      eligibility: 'Diploma in Automobile/EV Technology',
      skills: ['Transport Management', 'Vehicle Maintenance', 'Public Transport'],
      growth: 'Regular promotions',
      salary: '₹4-8 LPA'
    },
    {
      title: 'PSU Automobile Technician Jobs',
      icon: '🏢',
      eligibility: 'Diploma in Automobile/EV Technology',
      skills: ['Automotive Systems', 'Technical Knowledge', 'Maintenance'],
      growth: 'Excellent benefits',
      salary: '₹6-12 LPA'
    },
    {
      title: 'EV Infrastructure Government Projects',
      icon: '🔌',
      eligibility: 'Diploma in EV Technology/Electrical',
      skills: ['Charging Infrastructure', 'EV Systems', 'Project Management'],
      growth: 'Rapidly growing sector',
      salary: '₹5-10 LPA'
    },
    {
      title: 'Automotive Research Organizations',
      icon: '🔬',
      eligibility: 'Diploma in Automobile/EV Technology',
      skills: ['Research Skills', 'Technical Knowledge', 'Testing'],
      growth: 'Research career path',
      salary: '₹4-9 LPA'
    },
    {
      title: 'Public Transport Maintenance Jobs',
      icon: '🚍',
      eligibility: 'Diploma in Automobile/EV Technology',
      skills: ['Fleet Maintenance', 'Vehicle Systems', 'Transport Operations'],
      growth: 'Government transport sector',
      salary: '₹4-8 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'EV Industry Growth',
      icon: '⚡',
      growth: '35%',
      description: 'Rapid expansion of electric vehicle manufacturing and adoption',
      salaryImpact: '+25%',
      demand: 'Very High'
    },
    {
      title: 'Smart Mobility Expansion',
      icon: '🌐',
      growth: '30%',
      description: 'Growing connected vehicles and intelligent transportation systems',
      salaryImpact: '+20%',
      demand: 'Very High'
    },
    {
      title: 'Sustainable Transportation Demand',
      icon: '🌱',
      growth: '25%',
      description: 'Increasing focus on eco-friendly transportation solutions',
      salaryImpact: '+18%',
      demand: 'Very High'
    },
    {
      title: 'Hybrid Vehicle Market Trends',
      icon: '🔄',
      growth: '20%',
      description: 'Steady growth in hybrid vehicle technology and adoption',
      salaryImpact: '+15%',
      demand: 'High'
    },
    {
      title: 'Automotive Automation Opportunities',
      icon: '🤖',
      growth: '22%',
      description: 'Growing automation in manufacturing and vehicle systems',
      salaryImpact: '+17%',
      demand: 'Very High'
    }
  ];

  const filteredCareers = careers.filter(career => 
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredSkillCourses = skillCourses.filter(course =>
    selectedFilter === 'all' || course.level.toLowerCase() === selectedFilter.toLowerCase()
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('engineering_diplomas')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🚗</span>
            <h1 className="text-4xl font-bold text-white">Automobile & EV Technology</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on automobiles, electric vehicles, vehicle systems, automotive servicing, and future mobility careers after 10th grade.
          </p>
        </motion.div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('engineering_diplomas')}>Engineering Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Automobile & EV Technology</span>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search careers, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedFilter === 'all' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              All Levels
            </button>
            <button
              onClick={() => setSelectedFilter('beginner')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedFilter === 'beginner' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              Beginner
            </button>
            <button
              onClick={() => setSelectedFilter('intermediate')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedFilter === 'intermediate' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              Intermediate
            </button>
          </div>
        </div>

        {/* Diploma Course Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diplomaCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer"
                onClick={() => toggleCardExpansion(course.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl`}>
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                    <p className="text-white/70 text-sm">{course.recommended}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Best For</h4>
                    <div className="space-y-1">
                      {course.bestFor.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-white/80 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Duration</span>
                      <p className="text-white/90 text-sm font-medium">{course.duration}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Difficulty</span>
                      <p className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(course.difficulty)}`}>
                        {course.difficulty}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Career Opportunities</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.careers.map((career, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedCard === course.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-white/10"
                    >
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="text-white/50">Core Focus:</span><span className="text-white/80">{course.coreFocus}</span></div>
                        <div><span className="text-white/50">Practical Work:</span><span className="text-white/80">{course.practicalWork}</span></div>
                        <div><span className="text-white/50">Vehicle Systems:</span><span className="text-white/80">{course.vehicleSystems}</span></div>
                        <div><span className="text-white/50">EV Technology:</span><span className="text-white/80">{course.evTechnology}</span></div>
                        <div><span className="text-white/50">Diagnostics & Repair:</span><span className="text-white/80">{course.diagnosticsRepair}</span></div>
                        <div><span className="text-white/50">Automation & Smart Systems:</span><span className="text-white/80">{course.automationSmartSystems}</span></div>
                        <div><span className="text-white/50">Industry Demand:</span><span className="text-white/80">{course.industryDemand}</span></div>
                        <div><span className="text-white/50">Government Jobs:</span><span className="text-white/80">{course.governmentJobs}</span></div>
                        <div><span className="text-white/50">Higher Study:</span><span className="text-white/80">{course.higherStudy}</span></div>
                        <div><span className="text-white/50">Common Careers:</span><span className="text-white/80">{course.commonCareers.join(', ')}</span></div>
                        <div><span className="text-white/50">Difficulty:</span><span className="text-white/80">{course.difficulty}</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">Automobile Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">EV Technology</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Automotive Service</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Hybrid & Smart Mobility</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/90 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.automobileEngineering}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.evTechnology}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.automotiveService}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.hybridSmartMobility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Choose This If... */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 text-center">{option.title}</h3>
                <div className="space-y-2">
                  {option.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{career.icon}</div>
                  <h3 className="text-lg font-bold text-white">{career.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Skills Required</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {career.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Salary Range</span>
                      <p className="text-white/90 text-sm font-medium">{career.salary}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Industry Demand</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(career.demand)}`}>
                        {career.demand}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth Rate</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(career.growth)}`}>
                        {career.growth} annually
                      </div>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Career Roadmap</span>
                      <p className="text-white/70 text-xs mt-1">{career.roadmap.split('→')[0]} → ...</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Polytechnic Admissions & Higher Studies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Polytechnic Admissions & Higher Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissions.map((admission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-3xl mb-4 text-center">{admission.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4 text-center">{admission.title}</h3>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/80 text-sm">{admission.eligibility}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Admission Process</span>
                    <p className="text-white/80 text-sm">{admission.process}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Higher Study Opportunities</span>
                    <p className="text-white/80 text-sm">{admission.higherStudy}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Success Rate</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
                          style={{ width: admission.successRate }}
                        />
                      </div>
                      <span className="text-white/80 text-xs">{admission.successRate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSkillCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-3xl mb-4 text-center">{course.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{course.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Level</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Duration</span>
                    <span className="text-white/80 text-sm">{course.duration}</span>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Career Relevance</span>
                    <p className="text-white/80 text-sm mt-1">{course.relevance}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Skills Covered</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {course.skills.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                          +{course.skills.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries Hiring */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Industries Hiring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesHiring.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                    <div className={`px-2 py-1 rounded text-xs font-medium inline-block mt-1 ${getDemandBadge(industry.demand)}`}>
                      {industry.demand} Demand
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Top Companies</span>
                    <p className="text-white/80 text-sm">{industry.opportunities}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth Rate</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(industry.growth)}`}>
                        {industry.growth}
                      </div>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Salary Range</span>
                      <p className="text-white/80 text-sm">{industry.salaryRange}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Government Job Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Government Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{job.icon}</div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/80 text-sm">{job.eligibility}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Required Skills</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Career Growth</span>
                      <p className="text-white/80 text-sm">{job.growth}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Salary Range</span>
                      <p className="text-white/80 text-sm">{job.salary}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Industry Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{trend.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{trend.title}</h3>
                    <div className={`px-2 py-1 rounded text-xs font-medium inline-block mt-1 ${getGrowthBadge(trend.growth)}`}>
                      {trend.growth} Growth
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Description</span>
                    <p className="text-white/80 text-sm">{trend.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Salary Impact</span>
                      <p className="text-green-400 text-sm font-medium">{trend.salaryImpact}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Demand</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(trend.demand)}`}>
                        {trend.demand}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomobileEVTechnologyScreen;
