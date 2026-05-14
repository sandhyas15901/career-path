import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface EnvironmentalEnergyEngineeringScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const EnvironmentalEnergyEngineeringScreen: React.FC<EnvironmentalEnergyEngineeringScreenProps> = ({ setScreen }) => {
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
      id: 'environmental-engineering',
      icon: '🟦',
      color: 'from-blue-600 to-cyan-600',
      title: 'Environmental Engineering Diploma',
      recommended: 'Students interested in environmental protection, sustainability, and ecological systems',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Environmental Protection',
        'Pollution Control',
        'Waste Management',
        'Sustainable Development'
      ],
      careers: [
        'Environmental Technician',
        'Pollution Control Assistant',
        'Waste Management Technician',
        'Sustainability Support Specialist'
      ],
      coreFocus: 'Environmental protection, pollution control, waste management',
      practicalWork: 'High - Field work, environmental monitoring, pollution control',
      sustainabilityScope: 'Very High - Core sustainability focus',
      renewableEnergyFocus: 'Medium - Basic renewable energy concepts',
      pollutionControl: 'Very High - Core pollution control focus',
      energyManagement: 'Medium - Basic energy management',
      environmentalProtection: 'Very High - Core environmental focus',
      governmentJobs: 'High - Environmental agencies, pollution boards',
      higherStudy: 'B.E/B.Tech in Environmental Engineering',
      commonCareers: ['Environmental Engineer', 'Pollution Control Specialist', 'Sustainability Consultant']
    },
    {
      id: 'renewable-energy-technology',
      icon: '🟩',
      color: 'from-green-600 to-emerald-600',
      title: 'Renewable Energy Technology Diploma',
      recommended: 'Students interested in renewable energy and future green technologies',
      duration: '2–3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Solar Energy',
        'Wind Energy',
        'Green Power Systems',
        'Sustainable Energy'
      ],
      careers: [
        'Solar Technician',
        'Wind Energy Technician',
        'Renewable Energy Assistant',
        'Energy Systems Technician'
      ],
      coreFocus: 'Renewable energy, solar power, wind energy, sustainable systems',
      practicalWork: 'High - Solar installation, wind turbine maintenance, energy systems',
      sustainabilityScope: 'Very High - Core renewable energy focus',
      renewableEnergyFocus: 'Very High - Core renewable energy focus',
      pollutionControl: 'Medium - Environmental focus in renewable energy',
      energyManagement: 'High - Energy systems and management',
      environmentalProtection: 'High - Environmental aspects of renewable energy',
      governmentJobs: 'Very High - Energy departments, renewable energy projects',
      higherStudy: 'B.E/B.Tech in Renewable Energy/Energy Engineering',
      commonCareers: ['Renewable Energy Engineer', 'Solar Engineer', 'Wind Energy Technician']
    },
    {
      id: 'energy-systems-engineering',
      icon: '🟨',
      color: 'from-yellow-600 to-orange-600',
      title: 'Energy Systems Engineering Diploma',
      recommended: 'Students interested in energy management, power systems, and smart grids',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Power Systems',
        'Energy Distribution',
        'Smart Energy Management',
        'Industrial Energy Systems'
      ],
      careers: [
        'Energy Systems Technician',
        'Power Distribution Assistant',
        'Energy Audit Technician',
        'Smart Grid Support Technician'
      ],
      coreFocus: 'Power systems, energy distribution, smart energy management',
      practicalWork: 'High - Energy systems, grid management, smart meters',
      sustainabilityScope: 'High - Sustainable energy integration',
      renewableEnergyFocus: 'High - Renewable energy integration',
      pollutionControl: 'Low - Energy systems focus',
      energyManagement: 'Very High - Core energy management focus',
      environmentalProtection: 'Medium - Environmental aspects of energy systems',
      governmentJobs: 'High - Energy departments, power sector',
      higherStudy: 'B.E/B.Tech in Energy Systems/Power Engineering',
      commonCareers: ['Energy Systems Engineer', 'Power Distribution Engineer', 'Smart Grid Engineer']
    },
    {
      id: 'water-waste-management',
      icon: '🟪',
      color: 'from-purple-600 to-pink-600',
      title: 'Water & Waste Management Diploma',
      recommended: 'Students interested in sustainability, waste recycling, and water resource management',
      duration: '2–3 Years',
      difficulty: 'Easy-Medium',
      bestFor: [
        'Water Treatment',
        'Waste Recycling',
        'Environmental Safety',
        'Urban Sustainability'
      ],
      careers: [
        'Water Treatment Technician',
        'Recycling Plant Technician',
        'Waste Management Assistant',
        'Environmental Safety Technician'
      ],
      coreFocus: 'Water treatment, waste management, environmental safety',
      practicalWork: 'Very High - Water treatment plants, recycling facilities, safety procedures',
      sustainabilityScope: 'Very High - Core sustainability focus',
      renewableEnergyFocus: 'Low - Water and waste focus',
      pollutionControl: 'High - Waste management and pollution control',
      energyManagement: 'Medium - Basic energy in water systems',
      environmentalProtection: 'Very High - Core environmental protection focus',
      governmentJobs: 'High - Water departments, municipal corporations',
      higherStudy: 'B.E/B.Tech in Environmental Engineering/Civil Engineering',
      commonCareers: ['Water Treatment Engineer', 'Waste Management Engineer', 'Environmental Safety Officer']
    }
  ];

  // Comparison Table Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      environmentalEngineering: 'Environmental protection & pollution control',
      renewableEnergy: 'Renewable energy & sustainable systems',
      energySystems: 'Power systems & energy distribution',
      waterWasteManagement: 'Water treatment & waste management'
    },
    {
      feature: 'Sustainability Scope',
      environmentalEngineering: 'Very High - Core sustainability focus',
      renewableEnergy: 'Very High - Core renewable energy focus',
      energySystems: 'High - Sustainable energy integration',
      waterWasteManagement: 'Very High - Core sustainability focus'
    },
    {
      feature: 'Renewable Energy Focus',
      environmentalEngineering: 'Medium - Basic renewable energy concepts',
      renewableEnergy: 'Very High - Core renewable energy focus',
      energySystems: 'High - Renewable energy integration',
      waterWasteManagement: 'Low - Water and waste focus'
    },
    {
      feature: 'Pollution Control',
      environmentalEngineering: 'Very High - Core pollution control focus',
      renewableEnergy: 'Medium - Environmental focus in renewable energy',
      energySystems: 'Low - Energy systems focus',
      waterWasteManagement: 'High - Waste management and pollution control'
    },
    {
      feature: 'Energy Management',
      environmentalEngineering: 'Medium - Basic energy management',
      renewableEnergy: 'High - Energy systems and management',
      energySystems: 'Very High - Core energy management focus',
      waterWasteManagement: 'Medium - Basic energy in water systems'
    },
    {
      feature: 'Environmental Protection',
      environmentalEngineering: 'Very High - Core environmental focus',
      renewableEnergy: 'High - Environmental aspects of renewable energy',
      energySystems: 'Medium - Environmental aspects of energy systems',
      waterWasteManagement: 'Very High - Core environmental protection focus'
    },
    {
      feature: 'Government Job Scope',
      environmentalEngineering: 'High - Environmental agencies, pollution boards',
      renewableEnergy: 'Very High - Energy departments, renewable energy projects',
      energySystems: 'High - Energy departments, power sector',
      waterWasteManagement: 'High - Water departments, municipal corporations'
    },
    {
      feature: 'Higher Study Opportunities',
      environmentalEngineering: 'B.E/B.Tech Environmental Engineering',
      renewableEnergy: 'B.E/B.Tech Renewable Energy/Energy Engineering',
      energySystems: 'B.E/B.Tech Energy Systems/Power Engineering',
      waterWasteManagement: 'B.E/B.Tech Environmental Engineering/Civil Engineering'
    },
    {
      feature: 'Common Careers',
      environmentalEngineering: 'Environmental Engineer, Pollution Control Specialist',
      renewableEnergy: 'Renewable Energy Engineer, Solar Engineer',
      energySystems: 'Energy Systems Engineer, Power Distribution Engineer',
      waterWasteManagement: 'Water Treatment Engineer, Waste Management Engineer'
    },
    {
      feature: 'Difficulty Level',
      environmentalEngineering: 'Medium',
      renewableEnergy: 'Medium-Hard',
      energySystems: 'Medium',
      waterWasteManagement: 'Easy-Medium'
    }
  ];

  // Choose This If Data
  const chooseOptions = [
    {
      icon: '🌍',
      title: 'Choose Environmental Engineering If:',
      reasons: [
        'You care about environmental protection',
        'You are interested in sustainability careers',
        'You want green technology opportunities'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '☀️',
      title: 'Choose Renewable Energy Technology If:',
      reasons: [
        'You are interested in solar and wind energy',
        'You enjoy sustainable technologies',
        'You want future-focused energy careers'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: '⚡',
      title: 'Choose Energy Systems Engineering If:',
      reasons: [
        'You enjoy power and energy systems',
        'You are interested in smart grids and energy management',
        'You want industrial energy careers'
      ],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: '💧',
      title: 'Choose Water & Waste Management If:',
      reasons: [
        'You care about clean water and recycling',
        'You are interested in urban sustainability',
        'You want environmental safety careers'
      ],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Environmental Technician',
      icon: '🌍',
      skills: ['Environmental Monitoring', 'Pollution Control', 'Waste Management'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '15%',
      roadmap: 'Diploma → Environmental Tech → Senior Tech → Environmental Engineer'
    },
    {
      title: 'Solar Technician',
      icon: '☀️',
      skills: ['Solar Installation', 'PV Systems', 'Energy Storage'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '25%',
      roadmap: 'Diploma → Solar Tech → Senior Tech → Solar Engineer'
    },
    {
      title: 'Wind Energy Technician',
      icon: '💨',
      skills: ['Wind Turbine Maintenance', 'Energy Assessment', 'Installation'],
      salary: '₹4-9 LPA',
      demand: 'Very High',
      growth: '22%',
      roadmap: 'Diploma → Wind Tech → Senior Tech → Wind Energy Engineer'
    },
    {
      title: 'Energy Systems Technician',
      icon: '⚡',
      skills: ['Energy Distribution', 'Power Systems', 'Smart Grid'],
      salary: '₹3-7 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Energy Tech → Senior Tech → Energy Systems Engineer'
    },
    {
      title: 'Pollution Control Assistant',
      icon: '🏭',
      skills: ['Pollution Monitoring', 'Control Systems', 'Environmental Testing'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '14%',
      roadmap: 'Diploma → Pollution Control Tech → Senior Tech → Pollution Control Specialist'
    },
    {
      title: 'Sustainability Specialist Assistant',
      icon: '🌱',
      skills: ['Sustainability Practices', 'Green Technology', 'Environmental Compliance'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '20%',
      roadmap: 'Diploma → Sustainability Assistant → Senior Assistant → Sustainability Consultant'
    },
    {
      title: 'Water Treatment Technician',
      icon: '💧',
      skills: ['Water Treatment', 'Quality Control', 'Environmental Safety'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Water Tech → Senior Tech → Water Treatment Engineer'
    },
    {
      title: 'Recycling Plant Technician',
      icon: '♻️',
      skills: ['Recycling Processes', 'Waste Sorting', 'Material Recovery'],
      salary: '₹2-5 LPA',
      demand: 'Medium-High',
      growth: '10%',
      roadmap: 'Diploma → Recycling Tech → Senior Tech → Recycling Plant Manager'
    },
    {
      title: 'Smart Grid Support Technician',
      icon: '📡',
      skills: ['Smart Grid Systems', 'Energy Management', 'IoT Integration'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '18%',
      roadmap: 'Diploma → Smart Grid Tech → Senior Tech → Smart Grid Engineer'
    },
    {
      title: 'Environmental Safety Technician',
      icon: '🛡️',
      skills: ['Safety Procedures', 'Risk Assessment', 'Environmental Compliance'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '13%',
      roadmap: 'Diploma → Safety Tech → Senior Tech → Environmental Safety Officer'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech Environmental/Energy Engineering',
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
      title: 'Lateral Entry to B.E/B.Tech Environmental/Energy Engineering',
      icon: '🔄',
      eligibility: 'Diploma in Environmental/Energy/Renewable Energy',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'Solar Panel Installation',
      level: 'Beginner',
      duration: '3 Months',
      icon: '☀️',
      relevance: 'Essential for renewable energy careers',
      skills: ['Solar Installation', 'PV Systems', 'Safety Procedures']
    },
    {
      title: 'Environmental Safety Basics',
      level: 'Beginner',
      duration: '2 Months',
      icon: '🛡️',
      relevance: 'Critical for all environmental careers',
      skills: ['Safety Standards', 'Risk Assessment', 'Emergency Procedures']
    },
    {
      title: 'Waste Management Techniques',
      level: 'Beginner',
      duration: '3 Months',
      icon: '♻️',
      relevance: 'Essential for sustainability careers',
      skills: ['Waste Sorting', 'Recycling Processes', 'Material Recovery']
    },
    {
      title: 'Water Treatment Basics',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '💧',
      relevance: 'Critical for water and environmental careers',
      skills: ['Water Treatment', 'Quality Control', 'Environmental Testing']
    },
    {
      title: 'Energy Audit Fundamentals',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '📊',
      relevance: 'Important for energy management careers',
      skills: ['Energy Auditing', 'Efficiency Analysis', 'Conservation Techniques']
    },
    {
      title: 'Smart Grid Basics',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '📡',
      relevance: 'Future-focused energy skills',
      skills: ['Smart Grid Systems', 'Energy Management', 'IoT Integration']
    },
    {
      title: 'Sustainability Practices',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🌱',
      relevance: 'Essential for green careers',
      skills: ['Sustainable Development', 'Green Technology', 'Environmental Compliance']
    },
    {
      title: 'Renewable Energy Systems',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '⚡',
      relevance: 'Core renewable energy skills',
      skills: ['Renewable Energy', 'Solar Systems', 'Wind Energy']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Renewable Energy Companies',
      icon: '☀️',
      demand: 'Very High',
      opportunities: 'Tata Power Solar, Adani Green Energy, Suzlon, ReNew Power',
      growth: '30% annually',
      salaryRange: '₹4-12 LPA'
    },
    {
      name: 'Environmental Consulting Firms',
      icon: '🌍',
      demand: 'High',
      opportunities: 'ERM, TERI, Wipro Environmental, Consulting Firms',
      growth: '18% annually',
      salaryRange: '₹3-9 LPA'
    },
    {
      name: 'Water Treatment Plants',
      icon: '💧',
      demand: 'High',
      opportunities: 'Municipal Corporations, Private Water Companies, Industrial Plants',
      growth: '12% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'Smart Grid & Energy Companies',
      icon: '📡',
      demand: 'Very High',
      opportunities: 'Power Grid Corp, Smart Grid Companies, Energy Management Firms',
      growth: '20% annually',
      salaryRange: '₹4-11 LPA'
    },
    {
      name: 'Sustainability Startups',
      icon: '🌱',
      demand: 'Very High',
      opportunities: 'Green Tech Startups, Sustainability Firms, Clean Energy Companies',
      growth: '25% annually',
      salaryRange: '₹3-10 LPA'
    },
    {
      name: 'Waste Recycling Industries',
      icon: '♻️',
      demand: 'Medium-High',
      opportunities: 'Recycling Plants, Waste Management Companies, Material Recovery Firms',
      growth: '10% annually',
      salaryRange: '₹2-7 LPA'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'Pollution Control Board Jobs',
      icon: '🏭',
      eligibility: 'Diploma in Environmental Engineering',
      skills: ['Pollution Control', 'Environmental Monitoring', 'Regulatory Compliance'],
      growth: 'Stable environmental career',
      salary: '₹5-10 LPA'
    },
    {
      title: 'Renewable Energy Government Projects',
      icon: '☀️',
      eligibility: 'Diploma in Renewable Energy/Energy Engineering',
      skills: ['Renewable Energy', 'Project Management', 'Environmental Assessment'],
      growth: 'Growing green energy sector',
      salary: '₹6-12 LPA'
    },
    {
      title: 'Smart City Sustainability Jobs',
      icon: '🏙️',
      eligibility: 'Diploma in Environmental/Energy Engineering',
      skills: ['Smart City Systems', 'Sustainability Planning', 'Urban Development'],
      growth: 'Modern urban development',
      salary: '₹5-11 LPA'
    },
    {
      title: 'Water Supply & Sanitation Department Jobs',
      icon: '💧',
      eligibility: 'Diploma in Environmental/Civil Engineering',
      skills: ['Water Systems', 'Sanitation Management', 'Public Health'],
      growth: 'Essential government services',
      salary: '₹4-9 LPA'
    },
    {
      title: 'PSU Energy Sector Jobs',
      icon: '⚡',
      eligibility: 'Diploma in Energy/Renewable Energy',
      skills: ['Energy Systems', 'Power Generation', 'Environmental Compliance'],
      growth: 'Excellent PSU benefits',
      salary: '₹6-14 LPA'
    },
    {
      title: 'Environmental Safety Inspector Jobs',
      icon: '🛡️',
      eligibility: 'Diploma in Environmental Engineering',
      skills: ['Safety Inspection', 'Risk Assessment', 'Environmental Compliance'],
      growth: 'Critical safety roles',
      salary: '₹5-11 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'Renewable Energy Industry Growth',
      icon: '☀️',
      growth: '30%',
      description: 'Rapid expansion of solar, wind, and renewable energy technologies globally',
      salaryImpact: '+25%',
      demand: 'Very High'
    },
    {
      title: 'Climate & Sustainability Careers',
      icon: '🌍',
      growth: '22%',
      description: 'Growing focus on climate change mitigation and sustainable development',
      salaryImpact: '+18%',
      demand: 'Very High'
    },
    {
      title: 'Smart Energy Systems Expansion',
      icon: '📡',
      growth: '20%',
      description: 'Increasing adoption of smart grids and energy management systems',
      salaryImpact: '+15%',
      demand: 'Very High'
    },
    {
      title: 'Green Technology Opportunities',
      icon: '🌱',
      growth: '25%',
      description: 'Rising demand for green technologies and sustainable solutions',
      salaryImpact: '+20%',
      demand: 'Very High'
    },
    {
      title: 'Environmental Protection Demand',
      icon: '🛡️',
      growth: '18%',
      description: 'Strengthening environmental regulations and protection measures',
      salaryImpact: '+12%',
      demand: 'High'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
            <span className="text-4xl">🌍</span>
            <h1 className="text-4xl font-bold text-white">Environmental & Energy Engineering</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on environmental protection, renewable energy, sustainability, green technology, and energy systems careers after 10th grade.
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
          <span className="text-white font-medium">Environmental & Energy Engineering</span>
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
                        <div><span className="text-white/50">Sustainability Scope:</span><span className="text-white/80">{course.sustainabilityScope}</span></div>
                        <div><span className="text-white/50">Renewable Energy Focus:</span><span className="text-white/80">{course.renewableEnergyFocus}</span></div>
                        <div><span className="text-white/50">Pollution Control:</span><span className="text-white/80">{course.pollutionControl}</span></div>
                        <div><span className="text-white/50">Energy Management:</span><span className="text-white/80">{course.energyManagement}</span></div>
                        <div><span className="text-white/50">Environmental Protection:</span><span className="text-white/80">{course.environmentalProtection}</span></div>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">Environmental Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Renewable Energy</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Energy Systems</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Water & Waste Management</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/90 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.environmentalEngineering}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.renewableEnergy}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.energySystems}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.waterWasteManagement}</td>
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

export default EnvironmentalEnergyEngineeringScreen;
