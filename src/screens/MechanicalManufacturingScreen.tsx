import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Wrench, Settings, Factory, Cpu, Target, TrendingUp, Briefcase, Award, FileText, BarChart3, Shield, AlertTriangle, Building, Car } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function MechanicalManufacturingScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const diplomaCourses = [
    {
      id: 'mechanical-engineering',
      title: 'Mechanical Engineering Diploma',
      icon: '🟦',
      color: 'from-blue-500 to-indigo-600',
      bestFor: [
        'Machine Design',
        'Manufacturing',
        'Industrial Engineering',
        'Maintenance Technology'
      ],
      duration: '3 Years',
      careers: [
        'Mechanical Technician',
        'Maintenance Engineer',
        'Production Technician',
        'Machine Operator'
      ],
      recommended: 'Students interested in machines, engines, industrial systems, and manufacturing technology.',
      coreFocus: 'Mechanical Systems & Design',
      practicalWork: 'Very High',
      machineDesign: 'Essential',
      automationScope: 'Moderate',
      manufacturingFocus: 'High',
      industryDemand: 'Very High',
      governmentJobs: 'High',
      higherStudy: 'Excellent',
      commonCareers: ['Manufacturing', 'Automobile', 'Production'],
      difficulty: 'Medium'
    },
    {
      id: 'tool-die-making',
      title: 'Tool & Die Making Diploma',
      icon: '🟩',
      color: 'from-gray-500 to-slate-600',
      bestFor: [
        'Precision Manufacturing',
        'Tool Design',
        'Mold & Die Technology',
        'CNC Operations'
      ],
      duration: '3 Years',
      careers: [
        'Tool Designer',
        'CNC Programmer',
        'Die Technician',
        'Manufacturing Specialist'
      ],
      recommended: 'Students interested in precision engineering, machining, and industrial manufacturing.',
      coreFocus: 'Precision Manufacturing & Tools',
      practicalWork: 'Very High',
      machineDesign: 'Essential',
      automationScope: 'Moderate',
      manufacturingFocus: 'Very High',
      industryDemand: 'High',
      governmentJobs: 'Moderate',
      higherStudy: 'Good',
      commonCareers: ['Tool Making', 'CNC', 'Precision'],
      difficulty: 'Medium'
    },
    {
      id: 'production-engineering',
      title: 'Production Engineering Diploma',
      icon: '🟨',
      color: 'from-purple-500 to-indigo-600',
      bestFor: [
        'Manufacturing Systems',
        'Industrial Production',
        'Quality Control',
        'Factory Operations'
      ],
      duration: '3 Years',
      careers: [
        'Production Supervisor',
        'Quality Control Technician',
        'Manufacturing Coordinator',
        'Plant Technician'
      ],
      recommended: 'Students interested in factory operations, industrial systems, and production management.',
      coreFocus: 'Production Systems & Management',
      practicalWork: 'Very High',
      machineDesign: 'Important',
      automationScope: 'High',
      manufacturingFocus: 'Very High',
      industryDemand: 'Very High',
      governmentJobs: 'High',
      higherStudy: 'Excellent',
      commonCareers: ['Production', 'Quality', 'Management'],
      difficulty: 'Medium'
    },
    {
      id: 'cnc-technology',
      title: 'CNC Technology Diploma',
      icon: '🟪',
      color: 'from-cyan-500 to-teal-600',
      bestFor: [
        'CNC Machines',
        'Automated Manufacturing',
        'Industrial Automation',
        'Smart Production Systems'
      ],
      duration: '2–3 Years',
      careers: [
        'CNC Operator',
        'CNC Programmer',
        'Machine Setup Technician',
        'Automation Technician'
      ],
      recommended: 'Students interested in machine programming, automation, and modern manufacturing systems.',
      coreFocus: 'CNC & Automation Systems',
      practicalWork: 'Very High',
      machineDesign: 'Important',
      automationScope: 'Very High',
      manufacturingFocus: 'High',
      industryDemand: 'High',
      governmentJobs: 'Moderate',
      higherStudy: 'Good',
      commonCareers: ['CNC', 'Automation', 'Smart Manufacturing'],
      difficulty: 'Medium-Hard'
    }
  ];

  const careerOpportunities = [
    {
      id: 'mechanical-technician',
      title: 'Mechanical Technician',
      icon: Wrench,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → Mechanical Diploma → Apprenticeship → Mechanical Technician',
      skills: ['Machine Operation', 'Maintenance', 'CAD/CAM', 'Quality Control', 'Safety Procedures'],
      scope: 'Manufacturing, Production, Automotive, Heavy Industries',
      salary: '₹3-12 LPA',
      demand: 'Very High'
    },
    {
      id: 'cnc-programmer',
      title: 'CNC Programmer',
      icon: Cpu,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → Mechanical/CNC Diploma → Training → CNC Programmer',
      skills: ['CNC Programming', 'Machine Operation', 'CAD/CAM', 'Quality Assurance', 'Precision Measurement'],
      scope: 'Manufacturing, Aerospace, Precision Engineering',
      salary: '₹4-14 LPA',
      demand: 'High'
    },
    {
      id: 'production-supervisor',
      title: 'Production Supervisor',
      icon: Factory,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → Production Diploma → Experience → Production Supervisor',
      skills: ['Production Planning', 'Quality Management', 'Team Leadership', 'Process Optimization', 'Safety Management'],
      scope: 'Manufacturing, Production Plants, Industrial Operations',
      salary: '₹5-15 LPA',
      demand: 'Very High'
    },
    {
      id: 'manufacturing-technician',
      title: 'Manufacturing Technician',
      icon: Settings,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → Any Mechanical Diploma → Training → Manufacturing Technician',
      skills: ['Manufacturing Processes', 'Machine Operation', 'Quality Control', 'Process Monitoring', 'Technical Documentation'],
      scope: 'All Manufacturing Industries, Production Plants',
      salary: '₹4-16 LPA',
      demand: 'Very High'
    },
    {
      id: 'maintenance-engineer',
      title: 'Maintenance Engineer',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → Mechanical Diploma → Experience → Maintenance Engineer',
      skills: ['Preventive Maintenance', 'Troubleshooting', 'Project Management', 'Safety Management', 'Technical Documentation'],
      scope: 'All Industries, Manufacturing Plants, Facilities Management',
      salary: '₹4-16 LPA',
      demand: 'High'
    },
    {
      id: 'tool-designer',
      title: 'Tool Designer',
      icon: Target,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → Tool & Die Diploma → CAD Training → Tool Designer',
      skills: ['Tool Design', 'CAD/CAM', 'Precision Engineering', 'Material Science', 'Manufacturing Processes'],
      scope: 'Tool Manufacturing, Precision Engineering, Automotive Industry',
      salary: '₹4-14 LPA',
      demand: 'High'
    },
    {
      id: 'machine-operator',
      title: 'Machine Operator',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → Mechanical Diploma → Machine Training → Machine Operator',
      skills: ['Machine Operation', 'Process Control', 'Quality Monitoring', 'Safety Procedures', 'Technical Reading'],
      scope: 'Manufacturing, Production, Processing Industries',
      salary: '₹3-10 LPA',
      demand: 'High'
    },
    {
      id: 'quality-control-technician',
      title: 'Quality Control Technician',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-600',
      roadmap: '10th → Production Diploma → QC Training → Quality Control',
      skills: ['Quality Inspection', 'Testing Procedures', 'Documentation', 'Statistical Analysis', 'Standards Compliance'],
      scope: 'Manufacturing, Production, All Industries',
      salary: '₹4-12 LPA',
      demand: 'High'
    },
    {
      id: 'plant-technician',
      title: 'Plant Technician',
      icon: Building,
      color: 'from-teal-500 to-cyan-600',
      roadmap: '10th → Production Diploma → Plant Experience → Plant Technician',
      skills: ['Plant Operations', 'Equipment Maintenance', 'Process Monitoring', 'Safety Management', 'Troubleshooting'],
      scope: 'Manufacturing Plants, Industrial Facilities, Production Units',
      salary: '₹4-14 LPA',
      demand: 'High'
    },
    {
      id: 'industrial-automation-technician',
      title: 'Industrial Automation Technician',
      icon: TrendingUp,
      color: 'from-violet-500 to-indigo-600',
      roadmap: '10th → Mechanical/CNC Diploma → Automation Training → Automation Technician',
      skills: ['PLC Programming', 'SCADA Systems', 'Industrial Networks', 'Control Systems', 'Safety Standards'],
      scope: 'Manufacturing, Process Industries, Automation Companies',
      salary: '₹5-18 LPA',
      demand: 'Very High'
    }
  ];

  const entranceExams = [
    {
      id: 'dcet',
      title: 'DCET',
      icon: FileText,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10th pass with Maths & Science (45% for General, 40% for Reserved)',
      process: 'Online application → Entrance exam → Counseling → Admission',
      opportunities: 'All engineering colleges in state',
      higherStudy: 'Direct admission to 2nd year B.E/B.Tech Mechanical',
      difficulty: 'Hard',
      successRate: '8-12%'
    },
    {
      id: 'polytechnic-cet',
      title: 'Polytechnic CET',
      icon: Award,
      color: 'from-purple-500 to-indigo-600',
      eligibility: '10th pass with minimum 50% marks',
      process: 'Application → State-level exam → Seat allocation → Admission',
      opportunities: 'Government and private polytechnic colleges',
      higherStudy: 'Lateral entry to B.E/B.Tech Mechanical',
      difficulty: 'Medium-Hard',
      successRate: '15-25%'
    },
    {
      id: 'direct-admission',
      title: 'Direct Admission',
      icon: Building,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10th pass with required percentage',
      process: 'Application → Merit list → Counseling → Direct admission',
      opportunities: 'Private engineering colleges and management quota seats',
      higherStudy: 'Based on college policies and performance',
      difficulty: 'Easy-Medium',
      successRate: '30-40%'
    },
    {
      id: 'lateral-entry',
      title: 'Lateral Entry to B.E/B.Tech Mechanical',
      icon: Briefcase,
      color: 'from-orange-500 to-amber-600',
      eligibility: 'Mechanical/Tool & Die/Production/CNC Diploma with minimum 60%',
      process: 'Application → Entrance exam → Direct admission to 2nd year',
      opportunities: 'Direct entry to 2nd year of mechanical engineering degree',
      higherStudy: 'Complete B.E/B.Tech in 3 years',
      difficulty: 'Medium',
      successRate: '20-30%'
    }
  ];

  const skillCourses = [
    {
      id: 'autocad',
      title: 'AutoCAD',
      icon: Target,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for mechanical design and drafting work'
    },
    {
      id: 'solidworks',
      title: 'SolidWorks',
      icon: Wrench,
      color: 'from-purple-500 to-indigo-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Critical for 3D modeling and mechanical design'
    },
    {
      id: 'cnc-programming',
      title: 'CNC Programming',
      icon: Cpu,
      color: 'from-cyan-500 to-teal-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for manufacturing and production careers'
    },
    {
      id: 'industrial-safety',
      title: 'Industrial Safety',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Mandatory for all industrial and manufacturing jobs'
    },
    {
      id: 'machine-design-basics',
      title: 'Machine Design Basics',
      icon: Settings,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Fundamental for mechanical design and manufacturing'
    },
    {
      id: 'plc-automation',
      title: 'PLC & Automation',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-600',
      level: 'Intermediate',
      duration: '6 months',
      relevance: 'High demand in automation and manufacturing industries'
    },
    {
      id: 'welding-technology',
      title: 'Welding Technology',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential skill for manufacturing and fabrication'
    },
    {
      id: 'manufacturing-process-basics',
      title: 'Manufacturing Process Basics',
      icon: Factory,
      color: 'from-teal-500 to-cyan-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Fundamental for production and manufacturing careers'
    }
  ];

  const industriesHiring = [
    {
      id: 'manufacturing-industry',
      title: 'Manufacturing Industry',
      icon: Factory,
      color: 'from-blue-500 to-indigo-600',
      demand: 'Very High',
      growth: 'Steady growth with automation integration',
      opportunities: 'Production, Quality Control, Maintenance, Design',
      salaryRange: '₹3-15 LPA'
    },
    {
      id: 'automobile-industry',
      title: 'Automobile Industry',
      icon: Car,
      color: 'from-purple-500 to-indigo-600',
      demand: 'High',
      growth: 'Strong growth with EV revolution',
      opportunities: 'Design, Production, Service, R&D',
      salaryRange: '₹4-18 LPA'
    },
    {
      id: 'aerospace-industry',
      title: 'Aerospace Industry',
      icon: Target,
      color: 'from-cyan-500 to-teal-600',
      demand: 'Medium-High',
      growth: 'Growing with defense and commercial aviation',
      opportunities: 'Precision Manufacturing, R&D, Testing',
      salaryRange: '₹6-20 LPA'
    },
    {
      id: 'steel-heavy-industries',
      title: 'Steel & Heavy Industries',
      icon: Building,
      color: 'from-orange-500 to-red-600',
      demand: 'High',
      growth: 'Stable with infrastructure development',
      opportunities: 'Production, Maintenance, Quality, Project Management',
      salaryRange: '₹4-16 LPA'
    },
    {
      id: 'smart-manufacturing',
      title: 'Smart Manufacturing',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      demand: 'Very High',
      growth: 'Rapid growth with Industry 4.0',
      opportunities: 'Automation, IoT, Smart Systems, Data Analytics',
      salaryRange: '₹5-20 LPA'
    },
    {
      id: 'industrial-automation-companies',
      title: 'Industrial Automation Companies',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      demand: 'Very High',
      growth: 'Explosive growth with digital transformation',
      opportunities: 'PLC Programming, SCADA, Robotics, Control Systems',
      salaryRange: '₹6-22 LPA'
    }
  ];

  const governmentJobs = [
    {
      id: 'railways-technician',
      title: 'Railways Technician Jobs',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      eligibility: 'Diploma in Mechanical/Tool & Die/Production',
      skills: ['Machine Maintenance', 'Technical Knowledge', 'Safety Procedures', 'Troubleshooting'],
      growth: 'Stable government career with good benefits',
      salary: '₹4-12 LPA'
    },
    {
      id: 'psu-technical',
      title: 'PSU Technical Jobs',
      icon: Factory,
      color: 'from-purple-500 to-indigo-600',
      eligibility: 'Mechanical/Production Diploma with good marks',
      skills: ['Technical Operations', 'Quality Control', 'Project Management', 'Industrial Knowledge'],
      growth: 'Excellent career growth and stability',
      salary: '₹6-18 LPA'
    },
    {
      id: 'drdo-technician',
      title: 'DRDO Technician',
      icon: Target,
      color: 'from-cyan-500 to-teal-600',
      eligibility: 'Diploma with 60% + entrance exam',
      skills: ['Defense Technology', 'Precision Engineering', 'Research Support', 'Technical Documentation'],
      growth: 'Prestigious career with national importance',
      salary: '₹8-20 LPA'
    },
    {
      id: 'isro-technical',
      title: 'ISRO Technical Assistant',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      eligibility: 'Diploma with entrance exam',
      skills: ['Space Technology', 'Mechanical Systems', 'Precision Engineering', 'Research Support'],
      growth: 'Cutting-edge technology career',
      salary: '₹10-25 LPA'
    },
    {
      id: 'ssc-je',
      title: 'SSC JE',
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      eligibility: 'Diploma + competitive exam',
      skills: ['Technical Knowledge', 'Government Procedures', 'Project Management', 'Quality Standards'],
      growth: 'Stable government career with promotions',
      salary: '₹5-15 LPA'
    },
    {
      id: 'factory-government',
      title: 'Factory & Industrial Government Jobs',
      icon: AlertTriangle,
      color: 'from-indigo-500 to-purple-600',
      eligibility: 'Diploma in relevant field',
      skills: ['Industrial Operations', 'Safety Management', 'Technical Supervision', 'Quality Control'],
      growth: 'Stable career with good work-life balance',
      salary: '₹4-14 LPA'
    }
  ];

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Easy-Medium': return 'bg-lime-500/20 text-lime-300 border-lime-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Medium-Hard': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
            <span className="text-4xl">⚙️</span>
            <h1 className="text-4xl font-bold text-white">Mechanical & Manufacturing</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on machines, manufacturing, industrial production, CNC technology, and mechanical engineering careers after 10th grade.
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
          <span className="text-white font-medium">Mechanical & Manufacturing</span>
        </div>

        {/* Diploma Course Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white text-2xl">
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
                </div>

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
                      <div><span className="text-white/50">Machine Design:</span><span className="text-white/80">{course.machineDesign}</span></div>
                      <div><span className="text-white/50">Automation Scope:</span><span className="text-white/80">{course.automationScope}</span></div>
                      <div><span className="text-white/50">Manufacturing Focus:</span><span className="text-white/80">{course.manufacturingFocus}</span></div>
                      <div><span className="text-white/50">Industry Demand:</span><span className="text-white/80">{course.industryDemand}</span></div>
                      <div><span className="text-white/50">Government Jobs:</span><span className="text-white/80">{course.governmentJobs}</span></div>
                      <div><span className="text-white/50">Higher Study:</span><span className="text-white/80">{course.higherStudy}</span></div>
                    </div>
                  </motion.div>
                )}
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
                    <th className="px-6 py-4 text-center text-white font-semibold">Mechanical</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Tool & Die</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Production</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">CNC Technology</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Core Focus', mechanical: 'Mechanical Systems & Design', toolDie: 'Precision Manufacturing & Tools', production: 'Production Systems & Management', cnc: 'CNC & Automation Systems' },
                    { feature: 'Practical Work Level', mechanical: 'Very High', toolDie: 'Very High', production: 'Very High', cnc: 'Very High' },
                    { feature: 'Machine Design', mechanical: 'Essential', toolDie: 'Essential', production: 'Important', cnc: 'Important' },
                    { feature: 'Automation Scope', mechanical: 'Moderate', toolDie: 'Moderate', production: 'High', cnc: 'Very High' },
                    { feature: 'Manufacturing Focus', mechanical: 'High', toolDie: 'Very High', production: 'Very High', cnc: 'High' },
                    { feature: 'Industry Demand', mechanical: 'Very High', toolDie: 'High', production: 'Very High', cnc: 'High' },
                    { feature: 'Government Job Scope', mechanical: 'High', toolDie: 'Moderate', production: 'High', cnc: 'Moderate' },
                    { feature: 'Higher Study Opportunities', mechanical: 'Excellent', toolDie: 'Good', production: 'Excellent', cnc: 'Good' },
                    { feature: 'Common Careers', mechanical: 'Manufacturing, Automobile, Production', toolDie: 'Tool Making, CNC, Precision', production: 'Production, Quality, Management', cnc: 'CNC, Automation, Smart Manufacturing' },
                    { feature: 'Difficulty Level', mechanical: 'Medium', toolDie: 'Medium', production: 'Medium', cnc: 'Medium-Hard' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.mechanical}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.toolDie}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.production}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.cnc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Choose This If Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-xl font-bold text-white">Choose Mechanical Engineering If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy machines and mechanics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You like industrial systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want broad engineering opportunities</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-500/20 to-slate-600/20 backdrop-blur-md border border-gray-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🛠️</span>
                <h3 className="text-xl font-bold text-white">Choose Tool & Die Making If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-white/80">You enjoy precision work and machining</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-white/80">You are interested in CNC & manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-white/80">You like technical industrial work</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏭</span>
                <h3 className="text-xl font-bold text-white">Choose Production Engineering If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span className="text-white/80">You enjoy factory systems and operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span className="text-white/80">You are interested in quality control</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span className="text-white/80">You want manufacturing careers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-teal-600/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <h3 className="text-xl font-bold text-white">Choose CNC Technology If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-white/80">You are interested in machine automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-white/80">You enjoy programming CNC machines</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-white/80">You want smart manufacturing careers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
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
                    <h4 className="text-white/70 text-sm mb-1">Career Roadmap</h4>
                    <p className="text-white/90 text-sm">{career.roadmap}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white/70 text-sm mb-1">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Future Scope</span>
                      <p className="text-white/90 text-sm">{career.scope}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Average Salary</span>
                      <p className="text-white/90 text-sm">{career.salary}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Industry Demand</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium border ${getDemandBadge(career.demand)}`}>
                      {career.demand}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Admissions & Higher Studies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Polytechnic Admissions & Higher Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entranceExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                    <exam.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{exam.title}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <span className="text-white/80 text-xs">{exam.eligibility}</span>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Admission Process</span>
                    <p className="text-white/80 text-sm">{exam.process}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Higher Study Opportunities</span>
                    <span className="text-white/80 text-sm">{exam.higherStudy}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Difficulty</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Success Rate</span>
                    <span className="text-white/80 text-sm">{exam.successRate}</span>
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
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                    <course.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{course.title}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Level</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelBadge(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Duration</span>
                    <span className="text-white/80 text-xs">{course.duration}</span>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Career Relevance</span>
                    <p className="text-white/80 text-xs">{course.relevance}</p>
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
                key={industry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white`}>
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{industry.title}</h3>
                </div>

                <div className="space-y-3">
                  <div className={`px-2 py-1 rounded text-xs font-medium border ${getDemandBadge(industry.demand)}`}>
                    {industry.demand}
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Growth Trend</span>
                    <p className="text-white/80 text-sm">{industry.growth}</p>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Opportunities</span>
                    <p className="text-white/80 text-sm">{industry.opportunities}</p>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Salary Range</span>
                    <p className="text-white/90 text-sm font-medium">{industry.salaryRange}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Government Jobs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Government Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white`}>
                    <job.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/80 text-sm">{job.eligibility}</p>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Required Skills</span>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Smart Manufacturing Growth</h3>
                <p className="text-white/70 text-sm">Industry 4.0 driving automation and smart factory adoption</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Automation Industry Demand</h3>
                <p className="text-white/70 text-sm">Rapid growth in industrial automation and robotics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">CNC Technology Expansion</h3>
                <p className="text-white/70 text-sm">Advanced CNC systems and precision manufacturing growth</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">EV Manufacturing Opportunities</h3>
                <p className="text-white/70 text-sm">Electric vehicle production creating new mechanical career paths</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
