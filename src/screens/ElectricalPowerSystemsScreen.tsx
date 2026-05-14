import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  TrendingUp, 
  Zap,
  Factory,
  Battery
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface ElectricalPowerSystemsScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const ElectricalPowerSystemsScreen: React.FC<ElectricalPowerSystemsScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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

  // Diploma Courses Data
  const diplomaCourses = [
    {
      id: 'electrical-engineering',
      icon: '⚡',
      title: 'Electrical Engineering Diploma',
      recommended: 'Students interested in electricity, circuits, power systems, and industrial automation',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Electrical Systems',
        'Industrial Power',
        'Electrical Maintenance',
        'Automation Technology'
      ],
      careers: [
        'Electrical Technician',
        'Maintenance Engineer',
        'Power Plant Technician',
        'Industrial Electrician'
      ],
      coreFocus: 'Electrical circuits, power systems, industrial automation',
      practicalWork: 'Very High - Lab work, wiring, circuit testing',
      automationScope: 'PLC systems, industrial automation',
      powerGeneration: 'Basic power generation principles',
      industrialSystems: 'Industrial electrical systems',
      renewableEnergy: 'Basic renewable energy concepts',
      governmentJobs: 'High - Electricity boards, PSUs',
      higherStudy: 'B.E/B.Tech in Electrical Engineering',
      commonCareers: ['Electrical Technician', 'Maintenance Engineer', 'Automation Engineer']
    },
    {
      id: 'power-systems',
      icon: '🔌',
      title: 'Power Systems Diploma',
      recommended: 'Students interested in electrical grids, power plants, and energy systems',
      duration: '3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Power Generation',
        'Transmission & Distribution',
        'Energy Management',
        'Electrical Grid Systems'
      ],
      careers: [
        'Power Systems Technician',
        'Substation Technician',
        'Grid Maintenance Technician',
        'Energy Systems Assistant'
      ],
      coreFocus: 'Power generation, transmission, distribution systems',
      practicalWork: 'High - Substation work, grid maintenance',
      automationScope: 'Grid automation systems',
      powerGeneration: 'Advanced power generation technologies',
      industrialSystems: 'Power system applications',
      renewableEnergy: 'Grid integration of renewables',
      governmentJobs: 'Very High - Power sector, electricity boards',
      higherStudy: 'B.E/B.Tech in Power Systems',
      commonCareers: ['Power Systems Engineer', 'Grid Technician', 'Energy Manager']
    },
    {
      id: 'industrial-electricals',
      icon: '🏭',
      title: 'Industrial Electricals Diploma',
      recommended: 'Students interested in factory automation, industrial systems, and electrical control technologies',
      duration: '2-3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Industrial Automation',
        'PLC Systems',
        'Motor Control',
        'Factory Electrical Systems'
      ],
      careers: [
        'Industrial Electrician',
        'PLC Technician',
        'Automation Technician',
        'Control Panel Technician'
      ],
      coreFocus: 'Industrial automation, PLC systems, motor control',
      practicalWork: 'Very High - Factory automation, PLC programming',
      automationScope: 'Advanced PLC, SCADA systems',
      powerGeneration: 'Industrial power systems',
      industrialSystems: 'Complete industrial electrical systems',
      renewableEnergy: 'Industrial renewable energy systems',
      governmentJobs: 'Medium - Industrial sector roles',
      higherStudy: 'B.E/B.Tech in Industrial Engineering',
      commonCareers: ['Automation Engineer', 'PLC Programmer', 'Industrial Electrician']
    },
    {
      id: 'renewable-energy',
      icon: '🌱',
      title: 'Renewable Energy Technology Diploma',
      recommended: 'Students interested in renewable energy, sustainability, and future power technologies',
      duration: '2-3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Solar Energy',
        'Wind Energy',
        'Sustainable Power Systems',
        'Green Energy Careers'
      ],
      careers: [
        'Solar Technician',
        'Renewable Energy Technician',
        'Energy Audit Assistant',
        'Wind Energy Technician'
      ],
      coreFocus: 'Solar, wind, and renewable energy systems',
      practicalWork: 'High - Solar installation, wind turbine maintenance',
      automationScope: 'Renewable energy automation',
      powerGeneration: 'Renewable power generation',
      industrialSystems: 'Industrial renewable systems',
      renewableEnergy: 'Advanced renewable technologies',
      governmentJobs: 'High - Renewable energy projects',
      higherStudy: 'B.E/B.Tech in Renewable Energy',
      commonCareers: ['Solar Engineer', 'Wind Technician', 'Energy Auditor']
    }
  ];

  // Comparison Table Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      electrical: 'Electrical circuits & systems',
      powerSystems: 'Power generation & distribution',
      industrial: 'Industrial automation & PLC',
      renewable: 'Solar, wind & green energy'
    },
    {
      feature: 'Practical Work Level',
      electrical: 'Very High',
      powerSystems: 'High',
      industrial: 'Very High',
      renewable: 'High'
    },
    {
      feature: 'Automation Scope',
      electrical: 'Basic automation',
      powerSystems: 'Grid automation',
      industrial: 'Advanced PLC & SCADA',
      renewable: 'Smart energy systems'
    },
    {
      feature: 'Power Generation',
      electrical: 'Basic principles',
      powerSystems: 'Advanced technologies',
      industrial: 'Industrial power systems',
      renewable: 'Renewable technologies'
    },
    {
      feature: 'Industrial Systems',
      electrical: 'Industrial electrical',
      powerSystems: 'Power applications',
      industrial: 'Complete systems',
      renewable: 'Industrial renewables'
    },
    {
      feature: 'Renewable Energy Focus',
      electrical: 'Basic concepts',
      powerSystems: 'Grid integration',
      industrial: 'Industrial applications',
      renewable: 'Advanced technologies'
    },
    {
      feature: 'Government Job Scope',
      electrical: 'High',
      powerSystems: 'Very High',
      industrial: 'Medium',
      renewable: 'High'
    },
    {
      feature: 'Higher Study Opportunities',
      electrical: 'B.E/B.Tech Electrical',
      powerSystems: 'B.E/B.Tech Power Systems',
      industrial: 'B.E/B.Tech Industrial',
      renewable: 'B.E/B.Tech Renewable'
    },
    {
      feature: 'Common Careers',
      electrical: 'Electrical Technician, Maintenance Engineer',
      powerSystems: 'Power Systems Engineer, Grid Technician',
      industrial: 'Automation Engineer, PLC Programmer',
      renewable: 'Solar Engineer, Wind Technician'
    },
    {
      feature: 'Difficulty Level',
      electrical: 'Medium',
      powerSystems: 'Medium-Hard',
      industrial: 'Medium',
      renewable: 'Medium'
    }
  ];

  // Choose This If Data
  const chooseOptions = [
    {
      icon: '⚡',
      title: 'Choose Electrical Engineering If:',
      reasons: [
        'You enjoy electrical circuits and systems',
        'You are interested in industrial electrical work',
        'You want broad electrical career opportunities'
      ]
    },
    {
      icon: '🔌',
      title: 'Choose Power Systems If:',
      reasons: [
        'You are interested in power plants and grids',
        'You enjoy energy systems and distribution',
        'You want power-sector careers'
      ]
    },
    {
      icon: '🏭',
      title: 'Choose Industrial Electricals If:',
      reasons: [
        'You enjoy automation and factory systems',
        'You are interested in PLC and motor control',
        'You want industrial automation careers'
      ]
    },
    {
      icon: '🌱',
      title: 'Choose Renewable Energy Technology If:',
      reasons: [
        'You are interested in solar and green energy',
        'You enjoy sustainability and modern power systems',
        'You want future-focused energy careers'
      ]
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Electrical Technician',
      icon: '⚡',
      skills: ['Circuit Design', 'Electrical Safety', 'Troubleshooting'],
      salary: '₹3-6 LPA',
      demand: 'Very High',
      growth: '15% annually',
      roadmap: 'Diploma → Junior Technician → Senior Technician → Maintenance Engineer'
    },
    {
      title: 'Industrial Electrician',
      icon: '🏭',
      skills: ['Industrial Wiring', 'Motor Control', 'Safety Protocols'],
      salary: '₹4-7 LPA',
      demand: 'High',
      growth: '12% annually',
      roadmap: 'Diploma → Apprentice → Industrial Electrician → Maintenance Lead'
    },
    {
      title: 'PLC Technician',
      icon: '🤖',
      skills: ['PLC Programming', 'SCADA Systems', 'Automation'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '18% annually',
      roadmap: 'Diploma → PLC Programmer → Automation Engineer → Control Systems Engineer'
    },
    {
      title: 'Power Plant Technician',
      icon: '⚡',
      skills: ['Power Generation', 'Grid Systems', 'Maintenance'],
      salary: '₹5-9 LPA',
      demand: 'High',
      growth: '10% annually',
      roadmap: 'Diploma → Technician → Senior Technician → Plant Engineer'
    },
    {
      title: 'Solar Technician',
      icon: '☀️',
      skills: ['Solar Installation', 'PV Systems', 'Energy Storage'],
      salary: '₹3-6 LPA',
      demand: 'Very High',
      growth: '25% annually',
      roadmap: 'Diploma → Solar Installer → Senior Technician → Solar Engineer'
    },
    {
      title: 'Automation Technician',
      icon: '🔧',
      skills: ['Automation Systems', 'Control Panels', 'Robotics'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '20% annually',
      roadmap: 'Diploma → Automation Tech → Senior Tech → Automation Engineer'
    },
    {
      title: 'Grid Maintenance Technician',
      icon: '🔌',
      skills: ['Grid Systems', 'Distribution', 'Safety Protocols'],
      salary: '₹4-7 LPA',
      demand: 'High',
      growth: '8% annually',
      roadmap: 'Diploma → Grid Tech → Senior Tech → Grid Engineer'
    },
    {
      title: 'Renewable Energy Technician',
      icon: '🌱',
      skills: ['Renewable Systems', 'Wind/Solar', 'Energy Storage'],
      salary: '₹4-7 LPA',
      demand: 'Very High',
      growth: '22% annually',
      roadmap: 'Diploma → Renewable Tech → Senior Tech → Energy Engineer'
    },
    {
      title: 'Control Panel Technician',
      icon: '🎛️',
      skills: ['Panel Design', 'Wiring', 'Control Systems'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '14% annually',
      roadmap: 'Diploma → Panel Tech → Senior Tech → Control Engineer'
    },
    {
      title: 'Energy Systems Assistant',
      icon: '⚡',
      skills: ['Energy Management', 'Auditing', 'Efficiency'],
      salary: '₹3-5 LPA',
      demand: 'Medium-High',
      growth: '16% annually',
      roadmap: 'Diploma → Energy Assistant → Energy Manager → Energy Consultant'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech',
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
      title: 'Lateral Entry to B.E/B.Tech',
      icon: '🔄',
      eligibility: 'Diploma in Electrical',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'Electrical Wiring',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🔌',
      relevance: 'Foundation for all electrical careers',
      skills: ['Basic Wiring', 'Safety Protocols', 'Circuit Design']
    },
    {
      title: 'PLC Programming',
      level: 'Intermediate',
      duration: '6 Months',
      icon: '🤖',
      relevance: 'Essential for industrial automation',
      skills: ['PLC Basics', 'Ladder Logic', 'SCADA Integration']
    },
    {
      title: 'Industrial Automation Basics',
      level: 'Beginner',
      duration: '4 Months',
      icon: '🏭',
      relevance: 'Key for factory automation careers',
      skills: ['Automation Concepts', 'Control Systems', 'Motor Control']
    },
    {
      title: 'Solar Installation Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '☀️',
      relevance: 'Growing renewable energy sector',
      skills: ['PV Systems', 'Installation', 'Maintenance']
    },
    {
      title: 'Motor Control Systems',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '⚙️',
      relevance: 'Critical for industrial applications',
      skills: ['Motor Types', 'Control Circuits', 'VFD Systems']
    },
    {
      title: 'Power Systems Basics',
      level: 'Intermediate',
      duration: '6 Months',
      icon: '⚡',
      relevance: 'Foundation for power sector careers',
      skills: ['Generation', 'Transmission', 'Distribution']
    },
    {
      title: 'Electrical Safety',
      level: 'Beginner',
      duration: '2 Months',
      icon: '🛡️',
      relevance: 'Mandatory for all electrical work',
      skills: ['Safety Standards', 'Emergency Procedures', 'Risk Assessment']
    },
    {
      title: 'Renewable Energy Fundamentals',
      level: 'Beginner',
      duration: '4 Months',
      icon: '🌱',
      relevance: 'Future of energy sector',
      skills: ['Solar Energy', 'Wind Energy', 'Energy Storage']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Power Generation Companies',
      icon: '⚡',
      demand: 'Very High',
      opportunities: 'NTPC, Tata Power, Adani Power',
      growth: '12% annually',
      salaryRange: '₹4-10 LPA'
    },
    {
      name: 'Electrical Maintenance Companies',
      icon: '🔧',
      demand: 'High',
      opportunities: 'L&T, BHEL, Siemens',
      growth: '10% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'Renewable Energy Industry',
      icon: '🌱',
      demand: 'Very High',
      opportunities: 'ReNew Power, Azure Power, Suzlon',
      growth: '25% annually',
      salaryRange: '₹4-9 LPA'
    },
    {
      name: 'Smart Grid Projects',
      icon: '🔌',
      demand: 'High',
      opportunities: 'Power Grid Corp, State Electricity Boards',
      growth: '18% annually',
      salaryRange: '₹5-11 LPA'
    },
    {
      name: 'Industrial Automation Companies',
      icon: '🏭',
      demand: 'Very High',
      opportunities: 'ABB, Rockwell, Schneider Electric',
      growth: '20% annually',
      salaryRange: '₹4-12 LPA'
    },
    {
      name: 'Manufacturing Plants',
      icon: '🏗️',
      demand: 'High',
      opportunities: 'Automobile, Steel, Chemical Industries',
      growth: '8% annually',
      salaryRange: '₹3-7 LPA'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'BESCOM / Electricity Board Jobs',
      icon: '⚡',
      eligibility: 'Diploma in Electrical',
      skills: ['Distribution Systems', 'Maintenance', 'Safety'],
      growth: 'Stable government career',
      salary: '₹4-8 LPA'
    },
    {
      title: 'Railways Electrical Technician',
      icon: '🚂',
      eligibility: 'Diploma in Electrical',
      skills: ['Traction Systems', 'Signaling', 'Maintenance'],
      growth: 'Regular promotions',
      salary: '₹5-9 LPA'
    },
    {
      title: 'SSC JE Electrical',
      icon: '🏛️',
      eligibility: 'Diploma in Electrical',
      skills: ['General Electrical', 'Design', 'Supervision'],
      growth: 'Clear promotion path',
      salary: '₹6-12 LPA'
    },
    {
      title: 'PSU Electrical Jobs',
      icon: '🏢',
      eligibility: 'Diploma in Electrical',
      skills: ['Power Systems', 'Operations', 'Maintenance'],
      growth: 'Excellent benefits',
      salary: '₹7-15 LPA'
    },
    {
      title: 'Renewable Energy Government Projects',
      icon: '🌱',
      eligibility: 'Diploma in Electrical/Renewable',
      skills: ['Solar/Wind Systems', 'Installation', 'Maintenance'],
      growth: 'Rapidly growing sector',
      salary: '₹5-10 LPA'
    },
    {
      title: 'Power Grid Corporation Jobs',
      icon: '🔌',
      eligibility: 'Diploma in Electrical',
      skills: ['Grid Operations', 'Transmission', 'Maintenance'],
      growth: 'National level opportunities',
      salary: '₹6-12 LPA'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl pointer-events-none" />
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
            <span className="text-4xl">⚡</span>
            <h1 className="text-4xl font-bold text-white">Electrical & Power Systems</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on electricity, power generation, automation, industrial electrical systems, and energy technology careers after 10th grade.
          </p>
        </motion.div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('engineering_diplomas')}>Engineering Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Electrical & Power Systems</span>
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center text-white text-2xl">
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
                    {course.careers.slice(0, 3).map((career, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                        {career}
                      </span>
                    ))}
                    {course.careers.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                        +{course.careers.length - 3} more
                      </span>
                    )}
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
                        <div><span className="text-white/50">Automation Scope:</span><span className="text-white/80">{course.automationScope}</span></div>
                        <div><span className="text-white/50">Power Generation:</span><span className="text-white/80">{course.powerGeneration}</span></div>
                        <div><span className="text-white/50">Industrial Systems:</span><span className="text-white/80">{course.industrialSystems}</span></div>
                        <div><span className="text-white/50">Renewable Energy:</span><span className="text-white/80">{course.renewableEnergy}</span></div>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">Electrical Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Power Systems</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Industrial Electricals</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Renewable Energy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/90 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.electrical}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.powerSystems}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.industrial}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.renewable}</td>
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
                <div className="text-3xl mb-4 text-center">{option.icon}</div>
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
            {careers.map((career, index) => (
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
                  
                  <div>
                    <span className="text-white/50 text-xs">Career Growth</span>
                    <p className="text-white/80 text-sm">{career.growth}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Career Roadmap</span>
                    <p className="text-white/70 text-xs mt-1">{career.roadmap}</p>
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
                <div className="text-2xl mb-3 text-center">{admission.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{admission.title}</h3>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/80 text-sm">{admission.eligibility}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Admission Process</span>
                    <p className="text-white/70 text-xs">{admission.process}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Higher Study Opportunities</span>
                    <p className="text-white/80 text-sm">{admission.higherStudy}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Success Rate</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge('High')}`}>
                      {admission.successRate}
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
            {skillCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-2xl mb-3 text-center">{course.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{course.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Level</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
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
                    <p className="text-white/70 text-xs mt-1">{course.relevance}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Skills Covered</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {course.skills.map((skill, idx) => (
                        <span key={idx} className="px-1 py-0.5 bg-white/10 text-white/60 rounded text-xs">
                          {skill}
                        </span>
                      ))}
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
                  <div className="text-2xl">{industry.icon}</div>
                  <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Hiring Demand</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(industry.demand)}`}>
                      {industry.demand}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Key Companies</span>
                    <p className="text-white/80 text-sm">{industry.opportunities}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Growth Rate</span>
                    <span className="text-green-400 text-sm font-medium">{industry.growth}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Salary Range</span>
                    <span className="text-white/80 text-sm">{industry.salaryRange}</span>
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
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
                  
                  <div>
                    <span className="text-white/50 text-xs">Career Growth</span>
                    <p className="text-white/80 text-sm">{job.growth}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Salary</span>
                    <p className="text-white/90 text-sm font-medium">{job.salary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Industry Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Renewable Energy Growth</h3>
                <p className="text-white/70 text-sm">25% annual growth in solar and wind energy sectors</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Smart Grid Technology</h3>
                <p className="text-white/70 text-sm">18% growth in smart grid and automation projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Factory className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Industrial Automation</h3>
                <p className="text-white/70 text-sm">20% growth in factory automation and PLC systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Battery className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">EV Charging Infrastructure</h3>
                <p className="text-white/70 text-sm">30% growth in electric vehicle charging stations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalPowerSystemsScreen;
