import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface IndustrialProductionTechnologyScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const IndustrialProductionTechnologyScreen: React.FC<IndustrialProductionTechnologyScreenProps> = ({ setScreen }) => {
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
      id: 'industrial-engineering',
      icon: '🟦',
      color: 'from-blue-600 to-cyan-600',
      title: 'Industrial Engineering Diploma',
      recommended: 'Students interested in industrial systems, factory operations, and productivity improvement',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Industrial Operations',
        'Process Optimization',
        'Factory Systems',
        'Productivity Management'
      ],
      careers: [
        'Industrial Technician',
        'Operations Assistant',
        'Production Coordinator',
        'Manufacturing Support Technician'
      ],
      coreFocus: 'Industrial operations, process optimization, factory systems',
      practicalWork: 'Very High - Factory operations, process improvement, productivity management',
      factoryOperations: 'Very High - Core industrial operations focus',
      manufacturingSystems: 'High - Manufacturing and production systems',
      qualityAssurance: 'Medium - Basic quality control',
      logisticsInventory: 'Medium - Basic logistics coordination',
      automationScope: 'High - Industrial automation and optimization',
      governmentJobs: 'High - Industrial departments, manufacturing sectors',
      higherStudy: 'B.E/B.Tech in Industrial Engineering',
      commonCareers: ['Industrial Engineer', 'Operations Manager', 'Production Manager']
    },
    {
      id: 'production-technology',
      icon: '🟩',
      color: 'from-green-600 to-emerald-600',
      title: 'Production Technology Diploma',
      recommended: 'Students interested in production systems, manufacturing, and industrial technology',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Manufacturing Processes',
        'Production Planning',
        'Factory Automation',
        'Industrial Production'
      ],
      careers: [
        'Production Technician',
        'Manufacturing Technician',
        'Production Supervisor',
        'Plant Operations Assistant'
      ],
      coreFocus: 'Manufacturing processes, production planning, factory automation',
      practicalWork: 'Very High - Production processes, factory automation, manufacturing systems',
      factoryOperations: 'Very High - Core production operations focus',
      manufacturingSystems: 'Very High - Core manufacturing systems focus',
      qualityAssurance: 'High - Production quality control',
      logisticsInventory: 'Medium - Production logistics',
      automationScope: 'Very High - Factory automation focus',
      governmentJobs: 'High - Manufacturing departments, production sectors',
      higherStudy: 'B.E/B.Tech in Production Engineering',
      commonCareers: ['Production Engineer', 'Manufacturing Engineer', 'Plant Manager']
    },
    {
      id: 'quality-control-manufacturing',
      icon: '🟨',
      color: 'from-yellow-600 to-orange-600',
      title: 'Quality Control & Manufacturing Diploma',
      recommended: 'Students interested in quality management and industrial production standards',
      duration: '2–3 Years',
      difficulty: 'Easy-Medium',
      bestFor: [
        'Quality Assurance',
        'Industrial Testing',
        'Manufacturing Standards',
        'Production Inspection'
      ],
      careers: [
        'Quality Control Technician',
        'Manufacturing Inspector',
        'Production Quality Assistant',
        'Industrial Testing Technician'
      ],
      coreFocus: 'Quality assurance, industrial testing, manufacturing standards',
      practicalWork: 'High - Quality inspection, testing procedures, standards compliance',
      factoryOperations: 'Medium - Quality-focused operations',
      manufacturingSystems: 'High - Quality control in manufacturing',
      qualityAssurance: 'Very High - Core quality assurance focus',
      logisticsInventory: 'Low - Quality control focus',
      automationScope: 'Medium - Quality automation systems',
      governmentJobs: 'High - Quality departments, standards organizations',
      higherStudy: 'B.E/B.Tech in Quality Engineering/Manufacturing',
      commonCareers: ['Quality Engineer', 'Manufacturing Inspector', 'Quality Manager']
    },
    {
      id: 'supply-chain-industrial-logistics',
      icon: '🟪',
      color: 'from-purple-600 to-pink-600',
      title: 'Supply Chain & Industrial Logistics Diploma',
      recommended: 'Students interested in industrial logistics, warehouse systems, and production coordination',
      duration: '2–3 Years',
      difficulty: 'Easy-Medium',
      bestFor: [
        'Supply Chain Operations',
        'Warehouse Management',
        'Industrial Logistics',
        'Inventory Systems'
      ],
      careers: [
        'Logistics Coordinator',
        'Warehouse Operations Assistant',
        'Supply Chain Technician',
        'Inventory Control Assistant'
      ],
      coreFocus: 'Supply chain operations, warehouse management, industrial logistics',
      practicalWork: 'High - Logistics operations, warehouse management, supply chain coordination',
      factoryOperations: 'Medium - Logistics support for operations',
      manufacturingSystems: 'Low - Logistics focus',
      qualityAssurance: 'Low - Logistics quality control',
      logisticsInventory: 'Very High - Core logistics and inventory focus',
      automationScope: 'Medium - Logistics automation',
      governmentJobs: 'Medium - Supply chain departments, logistics sectors',
      higherStudy: 'B.E/B.Tech in Supply Chain Management/Logistics',
      commonCareers: ['Supply Chain Manager', 'Logistics Manager', 'Warehouse Manager']
    }
  ];

  // Comparison Table Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      industrialEngineering: 'Industrial operations & process optimization',
      productionTechnology: 'Manufacturing processes & production planning',
      qualityControl: 'Quality assurance & industrial testing',
      supplyChainLogistics: 'Supply chain operations & warehouse management'
    },
    {
      feature: 'Factory Operations',
      industrialEngineering: 'Very High - Core industrial operations focus',
      productionTechnology: 'Very High - Core production operations focus',
      qualityControl: 'Medium - Quality-focused operations',
      supplyChainLogistics: 'Medium - Logistics support for operations'
    },
    {
      feature: 'Manufacturing Systems',
      industrialEngineering: 'High - Manufacturing and production Systems',
      productionTechnology: 'Very High - Core manufacturing Systems focus',
      qualityControl: 'High - Quality control in manufacturing',
      supplyChainLogistics: 'Low - Logistics focus'
    },
    {
      feature: 'Quality Assurance',
      industrialEngineering: 'Medium - Basic quality control',
      productionTechnology: 'High - Production quality control',
      qualityControl: 'Very High - Core quality assurance focus',
      supplyChainLogistics: 'Low - Logistics quality control'
    },
    {
      feature: 'Logistics & Inventory',
      industrialEngineering: 'Medium - Basic logistics coordination',
      productionTechnology: 'Medium - Production logistics',
      qualityControl: 'Low - Quality control focus',
      supplyChainLogistics: 'Very High - Core logistics and inventory focus'
    },
    {
      feature: 'Automation Scope',
      industrialEngineering: 'High - Industrial automation and optimization',
      productionTechnology: 'Very High - Factory automation focus',
      qualityControl: 'Medium - Quality automation systems',
      supplyChainLogistics: 'Medium - Logistics automation'
    },
    {
      feature: 'Government Job Scope',
      industrialEngineering: 'High - Industrial departments, manufacturing sectors',
      productionTechnology: 'High - Manufacturing departments, production sectors',
      qualityControl: 'High - Quality departments, standards organizations',
      supplyChainLogistics: 'Medium - Supply chain departments, logistics sectors'
    },
    {
      feature: 'Higher Study Opportunities',
      industrialEngineering: 'B.E/B.Tech Industrial Engineering',
      productionTechnology: 'B.E/B.Tech Production Engineering',
      qualityControl: 'B.E/B.Tech Quality Engineering/Manufacturing',
      supplyChainLogistics: 'B.E/B.Tech Supply Chain Management/Logistics'
    },
    {
      feature: 'Common Careers',
      industrialEngineering: 'Industrial Engineer, Operations Manager',
      productionTechnology: 'Production Engineer, Manufacturing Engineer',
      qualityControl: 'Quality Engineer, Manufacturing Inspector',
      supplyChainLogistics: 'Supply Chain Manager, Logistics Manager'
    },
    {
      feature: 'Difficulty Level',
      industrialEngineering: 'Medium',
      productionTechnology: 'Medium',
      qualityControl: 'Easy-Medium',
      supplyChainLogistics: 'Easy-Medium'
    }
  ];

  // Choose This If Data
  const chooseOptions = [
    {
      icon: '🏭',
      title: 'Choose Industrial Engineering If:',
      reasons: [
        'You enjoy factory systems and operations',
        'You are interested in productivity and optimization',
        'You want industrial management careers'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '⚙️',
      title: 'Choose Production Technology If:',
      reasons: [
        'You enjoy manufacturing and production systems',
        'You are interested in factory automation',
        'You want production-related careers'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: '✅',
      title: 'Choose Quality Control & Manufacturing If:',
      reasons: [
        'You enjoy inspection and testing',
        'You are interested in industrial quality standards',
        'You want quality assurance careers'
      ],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: '📦',
      title: 'Choose Supply Chain & Industrial Logistics If:',
      reasons: [
        'You enjoy logistics and warehouse systems',
        'You are interested in industrial coordination',
        'You want operations and supply chain careers'
      ],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Industrial Technician',
      icon: '🏭',
      skills: ['Industrial Systems', 'Process Optimization', 'Factory Operations'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Industrial Tech → Senior Tech → Industrial Engineer'
    },
    {
      title: 'Production Supervisor',
      icon: '⚙️',
      skills: ['Production Management', 'Team Leadership', 'Quality Control'],
      salary: '₹4-8 LPA',
      demand: 'High',
      growth: '10%',
      roadmap: 'Diploma → Production Supervisor → Senior Supervisor → Production Manager'
    },
    {
      title: 'Manufacturing Technician',
      icon: '🏭',
      skills: ['Manufacturing Processes', 'Machine Operation', 'Production Systems'],
      salary: '₹3-7 LPA',
      demand: 'High',
      growth: '11%',
      roadmap: 'Diploma → Manufacturing Tech → Senior Tech → Manufacturing Engineer'
    },
    {
      title: 'Quality Control Technician',
      icon: '✅',
      skills: ['Quality Testing', 'Inspection Procedures', 'Standards Compliance'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '13%',
      roadmap: 'Diploma → Quality Tech → Senior Tech → Quality Engineer'
    },
    {
      title: 'Logistics Coordinator',
      icon: '📦',
      skills: ['Supply Chain Management', 'Logistics Operations', 'Inventory Control'],
      salary: '₹3-7 LPA',
      demand: 'High',
      growth: '14%',
      roadmap: 'Diploma → Logistics Coordinator → Senior Coordinator → Logistics Manager'
    },
    {
      title: 'Warehouse Operations Assistant',
      icon: '🏪',
      skills: ['Warehouse Management', 'Inventory Systems', 'Operations Support'],
      salary: '₹2-5 LPA',
      demand: 'Medium-High',
      growth: '8%',
      roadmap: 'Diploma → Warehouse Assistant → Senior Assistant → Warehouse Manager'
    },
    {
      title: 'Inventory Control Assistant',
      icon: '📊',
      skills: ['Inventory Management', 'Stock Control', 'Supply Chain Support'],
      salary: '₹2-5 LPA',
      demand: 'Medium-High',
      growth: '9%',
      roadmap: 'Diploma → Inventory Assistant → Senior Assistant → Inventory Manager'
    },
    {
      title: 'Plant Operations Technician',
      icon: '🏭',
      skills: ['Plant Operations', 'Production Support', 'Maintenance'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '10%',
      roadmap: 'Diploma → Plant Tech → Senior Tech → Plant Manager'
    },
    {
      title: 'Production Planner Assistant',
      icon: '📋',
      skills: ['Production Planning', 'Scheduling', 'Resource Management'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '11%',
      roadmap: 'Diploma → Planning Assistant → Senior Assistant → Production Planner'
    },
    {
      title: 'Industrial Testing Technician',
      icon: '🔬',
      skills: ['Industrial Testing', 'Quality Assurance', 'Testing Procedures'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Testing Tech → Senior Tech → Quality Engineer'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech Industrial/Production Engineering',
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
      title: 'Lateral Entry to B.E/B.Tech Industrial/Production Engineering',
      icon: '🔄',
      eligibility: 'Diploma in Industrial/Production/Manufacturing Engineering',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'Production Planning Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '📋',
      relevance: 'Essential for production careers',
      skills: ['Production Planning', 'Scheduling', 'Resource Management']
    },
    {
      title: 'Industrial Safety',
      level: 'Beginner',
      duration: '2 Months',
      icon: '🛡️',
      relevance: 'Critical for all industrial careers',
      skills: ['Safety Procedures', 'Risk Assessment', 'Industrial Safety Standards']
    },
    {
      title: 'Lean Manufacturing',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '⚙️',
      relevance: 'Modern manufacturing techniques',
      skills: ['Lean Principles', 'Waste Reduction', 'Process Optimization']
    },
    {
      title: 'Quality Testing Techniques',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '✅',
      relevance: 'Essential for quality control careers',
      skills: ['Testing Methods', 'Quality Standards', 'Inspection Procedures']
    },
    {
      title: 'Inventory Management',
      level: 'Beginner',
      duration: '3 Months',
      icon: '📊',
      relevance: 'Important for logistics careers',
      skills: ['Inventory Control', 'Stock Management', 'Warehouse Systems']
    },
    {
      title: 'Supply Chain Basics',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '📦',
      relevance: 'Core for logistics careers',
      skills: ['Supply Chain Management', 'Logistics Operations', 'Procurement']
    },
    {
      title: 'Manufacturing Process Fundamentals',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🏭',
      relevance: 'Foundation for manufacturing careers',
      skills: ['Manufacturing Processes', 'Machine Operation', 'Production Systems']
    },
    {
      title: 'Industrial Automation Basics',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '🤖',
      relevance: 'Future-focused industrial skills',
      skills: ['Automation Systems', 'Industrial Robotics', 'Process Automation']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Manufacturing Industries',
      icon: '🏭',
      demand: 'High',
      opportunities: 'Tata Steel, Jindal Steel, Manufacturing Companies',
      growth: '10% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'Production Plants',
      icon: '⚙️',
      demand: 'High',
      opportunities: 'Automobile Plants, Consumer Goods, Electronics Manufacturing',
      growth: '12% annually',
      salaryRange: '₹3-9 LPA'
    },
    {
      name: 'Warehouse & Logistics Companies',
      icon: '📦',
      demand: 'High',
      opportunities: 'DHL, FedEx, Blue Dart, Logistics Companies',
      growth: '15% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'Supply Chain Companies',
      icon: '🚚',
      demand: 'High',
      opportunities: 'Supply Chain Firms, Procurement Companies, Distribution Networks',
      growth: '14% annually',
      salaryRange: '₹4-10 LPA'
    },
    {
      name: 'Quality Assurance Firms',
      icon: '✅',
      demand: 'High',
      opportunities: 'TQMS, Quality Control Companies, Testing Laboratories',
      growth: '11% annually',
      salaryRange: '₹3-7 LPA'
    },
    {
      name: 'Industrial Automation Industries',
      icon: '🤖',
      demand: 'Very High',
      opportunities: 'Automation Companies, Robotics Firms, Industrial Tech Providers',
      growth: '20% annually',
      salaryRange: '₹4-12 LPA'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'Railways Production Jobs',
      icon: '🚂',
      eligibility: 'Diploma in Industrial/Production Engineering',
      skills: ['Production Systems', 'Manufacturing Processes', 'Industrial Operations'],
      growth: 'Stable government career',
      salary: '₹5-10 LPA'
    },
    {
      title: 'PSU Manufacturing Jobs',
      icon: '🏢',
      eligibility: 'Diploma in Industrial/Manufacturing Engineering',
      skills: ['Manufacturing Technology', 'Production Management', 'Industrial Systems'],
      growth: 'Excellent PSU benefits',
      salary: '₹6-14 LPA'
    },
    {
      title: 'Government Warehouse & Logistics Jobs',
      icon: '📦',
      eligibility: 'Diploma in Supply Chain/Logistics',
      skills: ['Warehouse Management', 'Logistics Operations', 'Supply Chain Systems'],
      growth: 'Government logistics sector',
      salary: '₹4-9 LPA'
    },
    {
      title: 'SSC Technical Jobs',
      icon: '📋',
      eligibility: 'Diploma in Industrial/Production Engineering',
      skills: ['Technical Knowledge', 'Industrial Systems', 'Quality Control'],
      growth: 'Clear promotion path',
      salary: '₹5-11 LPA'
    },
    {
      title: 'Factory & Industrial Government Jobs',
      icon: '🏭',
      eligibility: 'Diploma in Industrial/Manufacturing Engineering',
      skills: ['Factory Operations', 'Production Management', 'Industrial Safety'],
      growth: 'Government manufacturing sector',
      salary: '₹4-9 LPA'
    },
    {
      title: 'Industrial Safety Inspector Jobs',
      icon: '🛡️',
      eligibility: 'Diploma in Industrial/Quality Engineering',
      skills: ['Safety Inspection', 'Risk Assessment', 'Industrial Safety Standards'],
      growth: 'Critical safety roles',
      salary: '₹5-10 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'Smart Manufacturing Growth',
      icon: '🏭',
      growth: '20%',
      description: 'Increasing adoption of smart manufacturing technologies and Industry 4.0',
      salaryImpact: '+18%',
      demand: 'Very High'
    },
    {
      title: 'Supply Chain Technology Expansion',
      icon: '🚚',
      growth: '18%',
      description: 'Growing integration of technology in supply chain and logistics operations',
      salaryImpact: '+15%',
      demand: 'Very High'
    },
    {
      title: 'Factory Automation Demand',
      icon: '🤖',
      growth: '22%',
      description: 'Rapid expansion of automation and robotics in manufacturing facilities',
      salaryImpact: '+20%',
      demand: 'Very High'
    },
    {
      title: 'Industrial Productivity Trends',
      icon: '📈',
      growth: '15%',
      description: 'Focus on productivity improvement and lean manufacturing practices',
      salaryImpact: '+12%',
      demand: 'High'
    },
    {
      title: 'Logistics & Warehouse Modernization',
      icon: '📦',
      growth: '16%',
      description: 'Modernization of logistics operations and warehouse management systems',
      salaryImpact: '+14%',
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
            <span className="text-4xl">🏭</span>
            <h1 className="text-4xl font-bold text-white">Industrial & Production Technology</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on industrial operations, production systems, manufacturing technology, quality control, and factory management careers after 10th grade.
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
          <span className="text-white font-medium">Industrial & Production Technology</span>
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
                        <div><span className="text-white/50">Factory Operations:</span><span className="text-white/80">{course.factoryOperations}</span></div>
                        <div><span className="text-white/50">Manufacturing Systems:</span><span className="text-white/80">{course.manufacturingSystems}</span></div>
                        <div><span className="text-white/50">Quality Assurance:</span><span className="text-white/80">{course.qualityAssurance}</span></div>
                        <div><span className="text-white/50">Logistics & Inventory:</span><span className="text-white/80">{course.logisticsInventory}</span></div>
                        <div><span className="text-white/50">Automation Scope:</span><span className="text-white/80">{course.automationScope}</span></div>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">Industrial Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Production Technology</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Quality Control</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Supply Chain & Logistics</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/90 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.industrialEngineering}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.productionTechnology}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.qualityControl}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.supplyChainLogistics}</td>
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

export default IndustrialProductionTechnologyScreen;
