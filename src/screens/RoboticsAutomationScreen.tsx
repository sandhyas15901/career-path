import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface RoboticsAutomationScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const RoboticsAutomationScreen: React.FC<RoboticsAutomationScreenProps> = ({ setScreen }) => {
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
      id: 'robotics-engineering',
      icon: '🟦',
      color: 'from-blue-600 to-cyan-600',
      title: 'Robotics Engineering Diploma',
      recommended: 'Students interested in robotics, intelligent systems, and smart technologies',
      duration: '3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Robotics Systems',
        'Smart Machines',
        'Industrial Robotics',
        'AI-driven Automation'
      ],
      careers: [
        'Robotics Technician',
        'Automation Support Engineer',
        'Industrial Robotics Assistant',
        'Robot Maintenance Technician'
      ],
      coreFocus: 'Robotics systems, smart machines, industrial automation',
      practicalWork: 'Very High - Robot programming, automation systems, smart manufacturing',
      mechanicalSystems: 'Advanced mechanical and robotic systems',
      electronicsIntegration: 'Very High - Core robotics focus',
      automationScope: 'Very High - Advanced automation systems',
      aiSmartTechnology: 'High - AI-driven robotics',
      industrialApplications: 'Very High - Industrial robotics focus',
      governmentJobs: 'Medium-High - Defense, research organizations',
      higherStudy: 'B.E/B.Tech in Robotics/Automation',
      commonCareers: ['Robotics Engineer', 'Automation Engineer', 'Industrial Robotics Specialist']
    },
    {
      id: 'mechatronics',
      icon: '🟩',
      color: 'from-green-600 to-emerald-600',
      title: 'Mechatronics Diploma',
      recommended: 'Students interested in mechanical systems, electronics, and automation technologies',
      duration: '3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Mechanical + Electronics Integration',
        'Smart Manufacturing',
        'Automated Machines',
        'Control Systems'
      ],
      careers: [
        'Mechatronics Technician',
        'Automation Technician',
        'Machine Control Technician',
        'Smart Systems Assistant'
      ],
      coreFocus: 'Mechanical + electronics integration, smart manufacturing',
      practicalWork: 'Very High - Mechatronic systems, automated machines, control systems',
      mechanicalSystems: 'Very High - Core mechanical focus',
      electronicsIntegration: 'Very High - Core electronics focus',
      automationScope: 'High - Industrial automation systems',
      aiSmartTechnology: 'Medium - Basic AI in mechatronics',
      industrialApplications: 'High - Industrial mechatronics',
      governmentJobs: 'Medium - Manufacturing, automation roles',
      higherStudy: 'B.E/B.Tech in Mechatronics/Automation',
      commonCareers: ['Mechatronics Engineer', 'Automation Engineer', 'Control Systems Engineer']
    },
    {
      id: 'industrial-automation',
      icon: '🟨',
      color: 'from-yellow-600 to-orange-600',
      title: 'Industrial Automation Diploma',
      recommended: 'Students interested in industrial systems, automation, and smart manufacturing',
      duration: '2–3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Factory Automation',
        'PLC Systems',
        'Industrial Control',
        'Automated Production'
      ],
      careers: [
        'PLC Technician',
        'Industrial Automation Technician',
        'Control Panel Technician',
        'Production Automation Assistant'
      ],
      coreFocus: 'Factory automation, PLC systems, industrial control',
      practicalWork: 'Very High - PLC programming, factory automation, control systems',
      mechanicalSystems: 'High - Industrial mechanical systems',
      electronicsIntegration: 'High - Industrial electronics and control',
      automationScope: 'Very High - Core industrial automation focus',
      aiSmartTechnology: 'Medium - Smart automation systems',
      industrialApplications: 'Very High - Core industrial focus',
      governmentJobs: 'High - Manufacturing, industrial sectors',
      higherStudy: 'B.E/B.Tech in Industrial Engineering/Automation',
      commonCareers: ['Automation Engineer', 'PLC Programmer', 'Industrial Control Engineer']
    },
    {
      id: 'ai-smart-systems',
      icon: '🟪',
      color: 'from-purple-600 to-pink-600',
      title: 'AI & Smart Systems Diploma',
      recommended: 'Students interested in AI, IoT, and future smart technologies',
      duration: '2–3 Years',
      difficulty: 'Hard',
      bestFor: [
        'AI-based Automation',
        'Smart Devices',
        'IoT Systems',
        'Intelligent Machines'
      ],
      careers: [
        'AI Automation Assistant',
        'Smart Systems Technician',
        'IoT Technician',
        'Intelligent Device Support Technician'
      ],
      coreFocus: 'AI-based automation, smart devices, IoT systems',
      practicalWork: 'High - AI systems, IoT devices, smart technology implementation',
      mechanicalSystems: 'Basic - Smart device mechanics',
      electronicsIntegration: 'High - Smart electronics and IoT',
      automationScope: 'Very High - AI-driven automation',
      aiSmartTechnology: 'Very High - Core AI and smart systems focus',
      industrialApplications: 'Medium - Various industry applications',
      governmentJobs: 'Low-Medium - Emerging AI government roles',
      higherStudy: 'B.E/B.Tech in AI/Computer Science',
      commonCareers: ['AI Systems Engineer', 'IoT Engineer', 'Smart Systems Developer']
    }
  ];

  // Comparison Table Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      roboticsEngineering: 'Robotics systems & smart machines',
      mechatronics: 'Mechanical + electronics integration',
      industrialAutomation: 'Factory automation & PLC systems',
      aiSmartSystems: 'AI-based automation & smart devices'
    },
    {
      feature: 'Mechanical Systems',
      roboticsEngineering: 'Advanced mechanical and robotic systems',
      mechatronics: 'Very High - Core mechanical focus',
      industrialAutomation: 'High - Industrial mechanical systems',
      aiSmartSystems: 'Basic - Smart device mechanics'
    },
    {
      feature: 'Electronics Integration',
      roboticsEngineering: 'Very High - Core robotics focus',
      mechatronics: 'Very High - Core electronics focus',
      industrialAutomation: 'High - Industrial electronics and control',
      aiSmartSystems: 'High - Smart electronics and IoT'
    },
    {
      feature: 'Automation Scope',
      roboticsEngineering: 'Very High - Advanced automation systems',
      mechatronics: 'High - Industrial automation systems',
      industrialAutomation: 'Very High - Core industrial automation focus',
      aiSmartSystems: 'Very High - AI-driven automation'
    },
    {
      feature: 'AI & Smart Technology',
      roboticsEngineering: 'High - AI-driven robotics',
      mechatronics: 'Medium - Basic AI in mechatronics',
      industrialAutomation: 'Medium - Smart automation systems',
      aiSmartSystems: 'Very High - Core AI and smart systems focus'
    },
    {
      feature: 'Industrial Applications',
      roboticsEngineering: 'Very High - Industrial robotics focus',
      mechatronics: 'High - Industrial mechatronics',
      industrialAutomation: 'Very High - Core industrial focus',
      aiSmartSystems: 'Medium - Various industry applications'
    },
    {
      feature: 'Government Job Scope',
      roboticsEngineering: 'Medium-High - Defense, research organizations',
      mechatronics: 'Medium - Manufacturing, automation roles',
      industrialAutomation: 'High - Manufacturing, industrial sectors',
      aiSmartSystems: 'Low-Medium - Emerging AI government roles'
    },
    {
      feature: 'Higher Study Opportunities',
      roboticsEngineering: 'B.E/B.Tech in Robotics/Automation',
      mechatronics: 'B.E/B.Tech in Mechatronics/Automation',
      industrialAutomation: 'B.E/B.Tech in Industrial Engineering/Automation',
      aiSmartSystems: 'B.E/B.Tech in AI/Computer Science'
    },
    {
      feature: 'Common Careers',
      roboticsEngineering: 'Robotics Engineer, Automation Engineer',
      mechatronics: 'Mechatronics Engineer, Control Systems Engineer',
      industrialAutomation: 'Automation Engineer, PLC Programmer',
      aiSmartSystems: 'AI Systems Engineer, IoT Engineer'
    },
    {
      feature: 'Difficulty Level',
      roboticsEngineering: 'Medium-Hard',
      mechatronics: 'Medium-Hard',
      industrialAutomation: 'Medium',
      aiSmartSystems: 'Hard'
    }
  ];

  // Choose This If Data
  const chooseOptions = [
    {
      icon: '🤖',
      title: 'Choose Robotics Engineering If:',
      reasons: [
        'You enjoy robots and intelligent machines',
        'You are interested in automation systems',
        'You want future-focused robotics careers'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '⚙️',
      title: 'Choose Mechatronics If:',
      reasons: [
        'You enjoy mechanical and electronic systems',
        'You are interested in smart machines',
        'You want automation engineering careers'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: '🏭',
      title: 'Choose Industrial Automation If:',
      reasons: [
        'You enjoy factory systems and automation',
        'You are interested in PLC and industrial control',
        'You want manufacturing automation careers'
      ],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: '🧠',
      title: 'Choose AI & Smart Systems If:',
      reasons: [
        'You are interested in AI and IoT technologies',
        'You enjoy smart devices and intelligent systems',
        'You want advanced technology careers'
      ],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Robotics Technician',
      icon: '🤖',
      skills: ['Robot Programming', 'Automation Systems', 'Mechanical Assembly'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '22%',
      roadmap: 'Diploma → Robotics Tech → Senior Tech → Robotics Engineer'
    },
    {
      title: 'Automation Technician',
      icon: '⚙️',
      skills: ['Automation Systems', 'PLC Programming', 'Control Systems'],
      salary: '₹3-7 LPA',
      demand: 'Very High',
      growth: '18%',
      roadmap: 'Diploma → Automation Tech → Senior Tech → Automation Engineer'
    },
    {
      title: 'PLC Technician',
      icon: '🎛️',
      skills: ['PLC Programming', 'Industrial Control', 'Ladder Logic'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '15%',
      roadmap: 'Diploma → PLC Tech → Senior Tech → Control Engineer'
    },
    {
      title: 'Mechatronics Technician',
      icon: '🔧',
      skills: ['Mechanical Systems', 'Electronics', 'Control Systems'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '20%',
      roadmap: 'Diploma → Mechatronics Tech → Senior Tech → Mechatronics Engineer'
    },
    {
      title: 'IoT Technician',
      icon: '🌐',
      skills: ['IoT Devices', 'Sensor Systems', 'Wireless Communication'],
      salary: '₹4-9 LPA',
      demand: 'Very High',
      growth: '25%',
      roadmap: 'Diploma → IoT Tech → Senior Tech → IoT Engineer'
    },
    {
      title: 'Smart Systems Assistant',
      icon: '🧠',
      skills: ['Smart Devices', 'AI Systems', 'IoT Integration'],
      salary: '₹3-7 LPA',
      demand: 'Very High',
      growth: '28%',
      roadmap: 'Diploma → Smart Systems Assistant → Senior Assistant → Smart Systems Engineer'
    },
    {
      title: 'Robot Maintenance Technician',
      icon: '🔨',
      skills: ['Robot Maintenance', 'Troubleshooting', 'Repair Systems'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Maintenance Tech → Senior Tech → Maintenance Engineer'
    },
    {
      title: 'Industrial Control Technician',
      icon: '🎛️',
      skills: ['Control Systems', 'Industrial Automation', 'Panel Design'],
      salary: '₹3-7 LPA',
      demand: 'High',
      growth: '14%',
      roadmap: 'Diploma → Control Tech → Senior Tech → Control Engineer'
    },
    {
      title: 'AI Automation Assistant',
      icon: '🤖',
      skills: ['AI Programming', 'Machine Learning', 'Smart Automation'],
      salary: '₹5-10 LPA',
      demand: 'Very High',
      growth: '30%',
      roadmap: 'Diploma → AI Assistant → Senior Assistant → AI Automation Engineer'
    },
    {
      title: 'Production Automation Technician',
      icon: '🏭',
      skills: ['Production Systems', 'Automation', 'Quality Control'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '16%',
      roadmap: 'Diploma → Production Tech → Senior Tech → Production Manager'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech Robotics/Automation',
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
      title: 'Lateral Entry to B.E/B.Tech Robotics/Automation',
      icon: '🔄',
      eligibility: 'Diploma in Robotics/Automation/Mechatronics',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'PLC Programming',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🎛️',
      relevance: 'Essential for industrial automation',
      skills: ['PLC Basics', 'Ladder Logic', 'Industrial Control']
    },
    {
      title: 'Arduino & Raspberry Pi',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🔌',
      relevance: 'Foundation for IoT and robotics',
      skills: ['Microcontrollers', 'Sensor Integration', 'Programming']
    },
    {
      title: 'Robotics Basics',
      level: 'Beginner',
      duration: '4 Months',
      icon: '🤖',
      relevance: 'Introduction to robotics systems',
      skills: ['Robot Fundamentals', 'Basic Programming', 'Assembly']
    },
    {
      title: 'IoT Fundamentals',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '🌐',
      relevance: 'Connected systems and smart devices',
      skills: ['IoT Concepts', 'Wireless Communication', 'Cloud Integration']
    },
    {
      title: 'Embedded Systems',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '💻',
      relevance: 'Core for smart device development',
      skills: ['Embedded C', 'Microcontrollers', 'Real-time Systems']
    },
    {
      title: 'Industrial Automation Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🏭',
      relevance: 'Foundation for factory automation',
      skills: ['Automation Concepts', 'Control Systems', 'Safety Standards']
    },
    {
      title: 'AI Fundamentals',
      level: 'Intermediate',
      duration: '6 Months',
      icon: '🧠',
      relevance: 'Future-focused technology skills',
      skills: ['Machine Learning', 'Neural Networks', 'AI Programming']
    },
    {
      title: 'Sensor & Control Systems',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '📡',
      relevance: 'Critical for automation and robotics',
      skills: ['Sensor Technology', 'Control Systems', 'Feedback Loops']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Robotics Companies',
      icon: '🤖',
      demand: 'Very High',
      opportunities: 'ABB, KUKA, Fanuc, Universal Robots',
      growth: '25% annually',
      salaryRange: '₹4-12 LPA'
    },
    {
      name: 'Automation Industries',
      icon: '⚙️',
      demand: 'Very High',
      opportunities: 'Siemens, Rockwell, Schneider Electric, Bosch',
      growth: '20% annually',
      salaryRange: '₹3-10 LPA'
    },
    {
      name: 'Smart Manufacturing Plants',
      icon: '🏭',
      demand: 'High',
      opportunities: 'Tata Steel, Jindal Steel, Manufacturing Plants',
      growth: '15% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'AI & IoT Startups',
      icon: '🚀',
      demand: 'Very High',
      opportunities: 'AI Startups, IoT Companies, Smart Device Firms',
      growth: '35% annually',
      salaryRange: '₹5-15 LPA'
    },
    {
      name: 'Automobile Automation Industry',
      icon: '🚗',
      demand: 'High',
      opportunities: 'Automobile Companies, EV Manufacturers, Auto Parts',
      growth: '18% annually',
      salaryRange: '₹3-9 LPA'
    },
    {
      name: 'Industrial Robotics Companies',
      icon: '🦾',
      demand: 'Very High',
      opportunities: 'Industrial Robotics, Automation Solutions, System Integrators',
      growth: '22% annually',
      salaryRange: '₹4-11 LPA'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'DRDO Robotics Projects',
      icon: '🛡️',
      eligibility: 'Diploma in Robotics/Automation/Mechatronics',
      skills: ['Robotics Systems', 'Defense Technology', 'Project Management'],
      growth: 'Prestigious defense career',
      salary: '₹6-14 LPA'
    },
    {
      title: 'ISRO Technical Assistant',
      icon: '🚀',
      eligibility: 'Diploma in Robotics/Automation/Electronics',
      skills: ['Space Robotics', 'Technical Systems', 'Automation'],
      growth: 'Space technology career path',
      salary: '₹7-15 LPA'
    },
    {
      title: 'Railways Automation Jobs',
      icon: '🚂',
      eligibility: 'Diploma in Automation/Electronics',
      skills: ['Railway Automation', 'Signaling Systems', 'Control Technology'],
      growth: 'Stable government career',
      salary: '₹5-10 LPA'
    },
    {
      title: 'Smart Manufacturing Government Projects',
      icon: '🏭',
      eligibility: 'Diploma in Automation/Industrial Engineering',
      skills: ['Manufacturing Technology', 'Project Implementation', 'Quality Control'],
      growth: 'Government manufacturing initiatives',
      salary: '₹4-9 LPA'
    },
    {
      title: 'PSU Automation Technician Jobs',
      icon: '🏢',
      eligibility: 'Diploma in Automation/Mechatronics',
      skills: ['Industrial Automation', 'Technical Support', 'Maintenance'],
      growth: 'Excellent PSU benefits',
      salary: '₹6-12 LPA'
    },
    {
      title: 'Industrial Research Organizations',
      icon: '🔬',
      eligibility: 'Diploma in Robotics/Automation',
      skills: ['Research Skills', 'Technical Knowledge', 'Innovation'],
      growth: 'Research career path',
      salary: '₹5-11 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'Robotics Industry Growth',
      icon: '🤖',
      growth: '25%',
      description: 'Rapid expansion of industrial and service robotics across sectors',
      salaryImpact: '+20%',
      demand: 'Very High'
    },
    {
      title: 'Smart Manufacturing Expansion',
      icon: '🏭',
      growth: '20%',
      description: 'Growing adoption of Industry 4.0 and smart factory technologies',
      salaryImpact: '+18%',
      demand: 'Very High'
    },
    {
      title: 'AI Automation Demand',
      icon: '🧠',
      growth: '30%',
      description: 'Increasing integration of AI in automation and decision-making systems',
      salaryImpact: '+25%',
      demand: 'Very High'
    },
    {
      title: 'IoT and Connected Systems Growth',
      icon: '🌐',
      growth: '28%',
      description: 'Expanding IoT ecosystems and connected device infrastructure',
      salaryImpact: '+22%',
      demand: 'Very High'
    },
    {
      title: 'Industry 4.0 Opportunities',
      icon: '🏭',
      growth: '22%',
      description: 'Digital transformation of manufacturing and industrial processes',
      salaryImpact: '+19%',
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
            <span className="text-4xl">🤖</span>
            <h1 className="text-4xl font-bold text-white">Robotics & Automation</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on robotics, industrial automation, AI-driven systems, smart manufacturing, and future technology careers after 10th grade.
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
          <span className="text-white font-medium">Robotics & Automation</span>
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
                        <div><span className="text-white/50">Mechanical Systems:</span><span className="text-white/80">{course.mechanicalSystems}</span></div>
                        <div><span className="text-white/50">Electronics Integration:</span><span className="text-white/80">{course.electronicsIntegration}</span></div>
                        <div><span className="text-white/50">Automation Scope:</span><span className="text-white/80">{course.automationScope}</span></div>
                        <div><span className="text-white/50">AI & Smart Technology:</span><span className="text-white/80">{course.aiSmartTechnology}</span></div>
                        <div><span className="text-white/50">Industrial Applications:</span><span className="text-white/80">{course.industrialApplications}</span></div>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">Robotics Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Mechatronics</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Industrial Automation</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">AI & Smart Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/90 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.roboticsEngineering}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.mechatronics}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.industrialAutomation}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.aiSmartSystems}</td>
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

export default RoboticsAutomationScreen;
