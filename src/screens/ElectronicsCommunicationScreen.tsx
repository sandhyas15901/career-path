import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface ElectronicsCommunicationScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const ElectronicsCommunicationScreen: React.FC<ElectronicsCommunicationScreenProps> = ({ setScreen }) => {
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
      id: 'electronics-communication',
      icon: '🟦',
      color: 'from-blue-600 to-cyan-600',
      title: 'Electronics & Communication Engineering Diploma',
      recommended: 'Students interested in electronics, communication devices, networking, and smart systems',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Electronics Systems',
        'Communication Technology',
        'Circuit Design',
        'Embedded Systems'
      ],
      careers: [
        'Electronics Technician',
        'Communication Technician',
        'Embedded Systems Assistant',
        'Network Support Technician'
      ],
      coreFocus: 'Electronics circuits, communication systems, embedded technology',
      practicalWork: 'High - Lab work, circuit testing, communication systems',
      electronicsDesign: 'Advanced circuit design and PCB layout',
      networkingScope: 'Basic networking and communication protocols',
      automationIoT: 'IoT fundamentals and smart device integration',
      hardwareFocus: 'Strong emphasis on hardware components',
      governmentJobs: 'Medium - Telecom departments, defense',
      higherStudy: 'B.E/B.Tech in ECE',
      commonCareers: ['Electronics Engineer', 'Communication Engineer', 'Embedded Systems Developer']
    },
    {
      id: 'embedded-systems',
      icon: '🟩',
      color: 'from-green-600 to-emerald-600',
      title: 'Embedded Systems Diploma',
      recommended: 'Students interested in smart devices, electronics programming, and automation technologies',
      duration: '2–3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Microcontrollers',
        'IoT Devices',
        'Smart Electronics',
        'Automation Systems'
      ],
      careers: [
        'Embedded Systems Technician',
        'IoT Technician',
        'Microcontroller Programmer',
        'Hardware Support Technician'
      ],
      coreFocus: 'Microcontrollers, IoT devices, embedded programming',
      practicalWork: 'Very High - Microcontroller programming, device testing',
      electronicsDesign: 'Advanced embedded system design',
      networkingScope: 'IoT networking and wireless communication',
      automationIoT: 'Advanced IoT and automation systems',
      hardwareFocus: 'Very strong hardware and software integration',
      governmentJobs: 'Low-Medium - Limited government roles',
      higherStudy: 'B.E/B.Tech in Embedded Systems/ECE',
      commonCareers: ['Embedded Systems Engineer', 'IoT Developer', 'Firmware Engineer']
    },
    {
      id: 'networking-communication',
      icon: '🟨',
      color: 'from-yellow-600 to-orange-600',
      title: 'Networking & Communication Diploma',
      recommended: 'Students interested in communication networks, internet systems, and telecom technologies',
      duration: '2–3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Computer Networking',
        'Communication Systems',
        'Wireless Technology',
        'Network Security'
      ],
      careers: [
        'Network Technician',
        'Communication Support Engineer',
        'Wireless Network Assistant',
        'Telecom Technician'
      ],
      coreFocus: 'Computer networks, communication systems, wireless technology',
      practicalWork: 'High - Network setup, configuration, troubleshooting',
      electronicsDesign: 'Basic electronics for networking equipment',
      networkingScope: 'Advanced networking protocols and systems',
      automationIoT: 'Network automation and management',
      hardwareFocus: 'Networking hardware and infrastructure',
      governmentJobs: 'High - Telecom departments, IT services',
      higherStudy: 'B.E/B.Tech in Computer Science/Network Engineering',
      commonCareers: ['Network Engineer', 'Telecom Engineer', 'Network Administrator']
    },
    {
      id: 'consumer-electronics',
      icon: '🟪',
      color: 'from-purple-600 to-pink-600',
      title: 'Consumer Electronics Diploma',
      recommended: 'Students interested in electronic gadgets, appliances, and device maintenance',
      duration: '2–3 Years',
      difficulty: 'Easy-Medium',
      bestFor: [
        'Electronic Devices',
        'Appliance Technology',
        'Mobile & Smart Devices',
        'Repair & Maintenance'
      ],
      careers: [
        'Consumer Electronics Technician',
        'Mobile Device Technician',
        'Electronics Repair Specialist',
        'Service Technician'
      ],
      coreFocus: 'Consumer devices, repair technology, maintenance systems',
      practicalWork: 'Very High - Device repair, troubleshooting, servicing',
      electronicsDesign: 'Basic consumer electronics design',
      networkingScope: 'Basic connectivity in consumer devices',
      automationIoT: 'Smart home device setup and maintenance',
      hardwareFocus: 'Strong focus on consumer hardware',
      governmentJobs: 'Low - Limited government opportunities',
      higherStudy: 'B.E/B.Tech in Electronics Engineering',
      commonCareers: ['Service Engineer', 'Repair Technician', 'Technical Support']
    }
  ];

  // Comparison Table Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      electronicsCommunication: 'Electronics circuits & communication',
      embedded: 'Microcontrollers & IoT devices',
      networking: 'Computer networks & protocols',
      consumer: 'Device repair & maintenance'
    },
    {
      feature: 'Practical Work Level',
      electronicsCommunication: 'High',
      embedded: 'Very High',
      networking: 'High',
      consumer: 'Very High'
    },
    {
      feature: 'Electronics Design',
      electronicsCommunication: 'Advanced',
      embedded: 'Advanced',
      networking: 'Basic',
      consumer: 'Basic'
    },
    {
      feature: 'Networking Scope',
      electronicsCommunication: 'Basic',
      embedded: 'IoT focused',
      networking: 'Advanced',
      consumer: 'Basic'
    },
    {
      feature: 'Automation & IoT',
      electronicsCommunication: 'Medium',
      embedded: 'Very High',
      networking: 'Medium',
      consumer: 'Low-Medium'
    },
    {
      feature: 'Hardware Focus',
      electronicsCommunication: 'High',
      embedded: 'Very High',
      networking: 'Medium',
      consumer: 'Very High'
    },
    {
      feature: 'Government Job Scope',
      electronicsCommunication: 'Medium',
      embedded: 'Low-Medium',
      networking: 'High',
      consumer: 'Low'
    },
    {
      feature: 'Higher Study Opportunities',
      electronicsCommunication: 'B.E/B.Tech ECE',
      embedded: 'B.E/B.Tech ECE/CS',
      networking: 'B.E/B.Tech CS/IT',
      consumer: 'B.E/B.Tech Electronics'
    },
    {
      feature: 'Common Careers',
      electronicsCommunication: 'Electronics Engineer, Communication Engineer',
      embedded: 'Embedded Engineer, IoT Developer',
      networking: 'Network Engineer, Telecom Engineer',
      consumer: 'Service Engineer, Repair Technician'
    },
    {
      feature: 'Difficulty Level',
      electronicsCommunication: 'Medium',
      embedded: 'Medium-Hard',
      networking: 'Medium',
      consumer: 'Easy-Medium'
    }
  ];

  // Choose This If Data
  const chooseOptions = [
    {
      icon: '📡',
      title: 'Choose Electronics & Communication If:',
      reasons: [
        'You enjoy electronics and communication systems',
        'You are interested in smart devices and circuits',
        'You want broad electronics careers'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '🤖',
      title: 'Choose Embedded Systems If:',
      reasons: [
        'You enjoy IoT and smart technologies',
        'You are interested in microcontrollers and automation',
        'You want future-focused electronics careers'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: '🌐',
      title: 'Choose Networking & Communication If:',
      reasons: [
        'You are interested in networking and telecom systems',
        'You enjoy communication technologies',
        'You want internet and network careers'
      ],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: '📱',
      title: 'Choose Consumer Electronics If:',
      reasons: [
        'You enjoy working with gadgets and devices',
        'You are interested in repair and maintenance',
        'You want practical electronics careers'
      ],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Electronics Technician',
      icon: '🔧',
      skills: ['Circuit Design', 'Electrical Safety', 'Troubleshooting'],
      salary: '₹3-6 LPA',
      demand: 'Very High',
      growth: '15%',
      roadmap: 'Diploma → Junior Technician → Senior Technician → Electronics Engineer'
    },
    {
      title: 'Embedded Systems Technician',
      icon: '💻',
      skills: ['Microcontrollers', 'Embedded C', 'IoT Protocols'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '22%',
      roadmap: 'Diploma → Embedded Tech → Senior Developer → Embedded Engineer'
    },
    {
      title: 'IoT Technician',
      icon: '🌐',
      skills: ['IoT Devices', 'Wireless Communication', 'Sensor Integration'],
      salary: '₹4-7 LPA',
      demand: 'Very High',
      growth: '25%',
      roadmap: 'Diploma → IoT Tech → Senior Developer → IoT Architect'
    },
    {
      title: 'Telecom Technician',
      icon: '📞',
      skills: ['Telecom Systems', 'Network Equipment', 'Signal Processing'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Telecom Tech → Senior Tech → Network Engineer'
    },
    {
      title: 'Network Support Technician',
      icon: '🌍',
      skills: ['Network Setup', 'Troubleshooting', 'Security'],
      salary: '₹3-5 LPA',
      demand: 'High',
      growth: '18%',
      roadmap: 'Diploma → Support Tech → Network Admin → Network Engineer'
    },
    {
      title: 'Hardware Support Technician',
      icon: '🖥️',
      skills: ['Hardware Repair', 'System Maintenance', 'Diagnostics'],
      salary: '₹2-5 LPA',
      demand: 'Medium-High',
      growth: '10%',
      roadmap: 'Diploma → Hardware Tech → Senior Tech → System Engineer'
    },
    {
      title: 'Electronics Repair Specialist',
      icon: '🔨',
      skills: ['Device Repair', 'Component Replacement', 'Testing'],
      salary: '₹2-4 LPA',
      demand: 'Medium',
      growth: '8%',
      roadmap: 'Diploma → Repair Tech → Specialist → Service Manager'
    },
    {
      title: 'Communication Technician',
      icon: '📡',
      skills: ['Communication Systems', 'Radio Equipment', 'Installation'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '14%',
      roadmap: 'Diploma → Comm Tech → Senior Tech → Communication Engineer'
    },
    {
      title: 'Wireless Network Assistant',
      icon: '📶',
      skills: ['Wireless Setup', 'WiFi Configuration', 'Troubleshooting'],
      salary: '₹2-4 LPA',
      demand: 'High',
      growth: '20%',
      roadmap: 'Diploma → Wireless Tech → Senior Tech → Network Engineer'
    },
    {
      title: 'Device Service Engineer',
      icon: '📱',
      skills: ['Mobile Repair', 'Device Maintenance', 'Customer Service'],
      salary: '₹2-5 LPA',
      demand: 'Medium-High',
      growth: '12%',
      roadmap: 'Diploma → Service Tech → Engineer → Service Manager'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech ECE',
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
      title: 'Lateral Entry to B.E/B.Tech ECE',
      icon: '🔄',
      eligibility: 'Diploma in Electronics/ECE',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'Arduino Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🔌',
      relevance: 'Foundation for embedded systems and IoT',
      skills: ['Arduino Programming', 'Sensors', 'Basic Electronics']
    },
    {
      title: 'Embedded C Programming',
      level: 'Intermediate',
      duration: '6 Months',
      icon: '💻',
      relevance: 'Essential for embedded systems development',
      skills: ['C Programming', 'Microcontrollers', 'Real-time Systems']
    },
    {
      title: 'IoT Fundamentals',
      level: 'Beginner',
      duration: '4 Months',
      icon: '🌐',
      relevance: 'Key for IoT device development',
      skills: ['IoT Concepts', 'Wireless Communication', 'Cloud Integration']
    },
    {
      title: 'Networking Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🌍',
      relevance: 'Foundation for network careers',
      skills: ['Network Concepts', 'TCP/IP', 'Network Setup']
    },
    {
      title: 'PCB Design',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '🔧',
      relevance: 'Critical for electronics design',
      skills: ['Circuit Design', 'PCB Layout', 'Manufacturing']
    },
    {
      title: 'Mobile Repairing',
      level: 'Beginner',
      duration: '3 Months',
      icon: '📱',
      relevance: 'Practical skill for consumer electronics',
      skills: ['Mobile Hardware', 'Troubleshooting', 'Repair Techniques']
    },
    {
      title: 'Circuit Design Basics',
      level: 'Beginner',
      duration: '4 Months',
      icon: '⚡',
      relevance: 'Foundation for all electronics careers',
      skills: ['Circuit Theory', 'Component Selection', 'Simulation']
    },
    {
      title: 'Electronics Troubleshooting',
      level: 'Beginner',
      duration: '2 Months',
      icon: '🔍',
      relevance: 'Essential practical skill',
      skills: ['Testing Methods', 'Fault Finding', 'Repair Techniques']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Telecom Industry',
      icon: '📞',
      demand: 'Very High',
      opportunities: 'Jio, Airtel, Vodafone, BSNL',
      growth: '15% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'Consumer Electronics Companies',
      icon: '📺',
      demand: 'High',
      opportunities: 'Samsung, LG, Sony, Philips',
      growth: '12% annually',
      salaryRange: '₹2-6 LPA'
    },
    {
      name: 'IoT & Smart Device Companies',
      icon: '🏠',
      demand: 'Very High',
      opportunities: 'Google, Amazon, Apple, Startups',
      growth: '25% annually',
      salaryRange: '₹4-10 LPA'
    },
    {
      name: 'Networking & Internet Service Providers',
      icon: '🌐',
      demand: 'High',
      opportunities: 'Cisco, Juniper, ISP Companies',
      growth: '18% annually',
      salaryRange: '₹3-9 LPA'
    },
    {
      name: 'Automation Industries',
      icon: '🤖',
      demand: 'Very High',
      opportunities: 'ABB, Siemens, Bosch, Honeywell',
      growth: '20% annually',
      salaryRange: '₹4-12 LPA'
    },
    {
      name: 'Electronics Manufacturing Companies',
      icon: '🏭',
      demand: 'High',
      opportunities: 'Intel, AMD, Texas Instruments',
      growth: '10% annually',
      salaryRange: '₹3-7 LPA'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'BSNL Technician Jobs',
      icon: '📞',
      eligibility: 'Diploma in Electronics/ECE',
      skills: ['Telecom Systems', 'Network Maintenance', 'Installation'],
      growth: 'Stable government career',
      salary: '₹4-8 LPA'
    },
    {
      title: 'Railways Signal & Telecom Jobs',
      icon: '🚂',
      eligibility: 'Diploma in Electronics/ECE',
      skills: ['Signaling Systems', 'Communication Equipment', 'Maintenance'],
      growth: 'Regular promotions',
      salary: '₹5-9 LPA'
    },
    {
      title: 'SSC JE Electronics',
      icon: '🏛️',
      eligibility: 'Diploma in Electronics/ECE',
      skills: ['Electronics Engineering', 'Project Supervision', 'Technical Knowledge'],
      growth: 'Clear promotion path',
      salary: '₹6-12 LPA'
    },
    {
      title: 'ISRO Technical Assistant',
      icon: '🚀',
      eligibility: 'Diploma in Electronics/ECE',
      skills: ['Space Electronics', 'Communication Systems', 'Testing'],
      growth: 'Prestigious career path',
      salary: '₹7-15 LPA'
    },
    {
      title: 'DRDO Electronics Technician',
      icon: '🛡️',
      eligibility: 'Diploma in Electronics/ECE',
      skills: ['Defense Electronics', 'Communication Systems', 'Security'],
      growth: 'Defense sector opportunities',
      salary: '₹6-13 LPA'
    },
    {
      title: 'Electronics Corporation Jobs',
      icon: '🏢',
      eligibility: 'Diploma in Electronics/ECE',
      skills: ['Electronics Manufacturing', 'Quality Control', 'Testing'],
      growth: 'PSU benefits',
      salary: '₹5-10 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'IoT Industry Growth',
      icon: '🌐',
      growth: '35%',
      description: 'Rapid expansion in connected devices and smart home technology',
      salaryImpact: '+20%',
      demand: 'Very High'
    },
    {
      title: 'Smart Device Demand',
      icon: '📱',
      growth: '28%',
      description: 'Increasing demand for smartphones, wearables, and consumer electronics',
      salaryImpact: '+15%',
      demand: 'Very High'
    },
    {
      title: 'Telecom & Networking Expansion',
      icon: '📡',
      growth: '18%',
      description: '5G rollout and network infrastructure development',
      salaryImpact: '+12%',
      demand: 'High'
    },
    {
      title: 'Embedded Systems Opportunities',
      icon: '💻',
      growth: '25%',
      description: 'Growing need for embedded systems in automotive and industrial applications',
      salaryImpact: '+18%',
      demand: 'Very High'
    },
    {
      title: 'Automation & Electronics Trends',
      icon: '🤖',
      growth: '22%',
      description: 'Industry 4.0 and automation driving electronics demand',
      salaryImpact: '+16%',
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
            <span className="text-4xl">📡</span>
            <h1 className="text-4xl font-bold text-white">Electronics & Communication</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on electronics, communication systems, embedded technology, networking, and smart device careers after 10th grade.
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
          <span className="text-white font-medium">Electronics & Communication</span>
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
                        <div><span className="text-white/50">Electronics Design:</span><span className="text-white/80">{course.electronicsDesign}</span></div>
                        <div><span className="text-white/50">Networking Scope:</span><span className="text-white/80">{course.networkingScope}</span></div>
                        <div><span className="text-white/50">Automation & IoT:</span><span className="text-white/80">{course.automationIoT}</span></div>
                        <div><span className="text-white/50">Hardware Focus:</span><span className="text-white/80">{course.hardwareFocus}</span></div>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">E&C Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Embedded Systems</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Networking & Communication</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Consumer Electronics</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/90 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.electronicsCommunication}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.embedded}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.networking}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.consumer}</td>
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

export default ElectronicsCommunicationScreen;
