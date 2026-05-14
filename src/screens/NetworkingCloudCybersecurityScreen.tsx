import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Check,
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface NetworkingCloudCybersecurityScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const NetworkingCloudCybersecurityScreen: React.FC<NetworkingCloudCybersecurityScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Diploma Courses Data
  const diplomaCourses = [
    {
      id: 'network-administration',
      icon: '🌐',
      color: 'from-blue-500 to-blue-600',
      title: 'Network Administration Diploma',
      bestFor: ['Network Administration', 'System Administration', 'IT Infrastructure', 'Network Security'],
      duration: '3 Years',
      careers: ['Network Administrator', 'System Administrator', 'IT Support Specialist', 'Network Engineer'],
      recommended: 'Students interested in network systems, IT infrastructure, and network management.',
      coreFocus: 'Network systems, network administration, IT infrastructure',
      technicalLevel: 'Intermediate',
      securityFocus: 'Medium',
      practicalWork: 'High',
      industryDemand: 'High',
      certifications: 'CCNA, Network+, CompTIA',
      higherStudy: 'B.E/B.Tech Computer Science/IT Lateral Entry',
      commonCareers: 'Network Administrator, System Admin, IT Support',
      difficulty: 'Medium'
    },
    {
      id: 'cloud-computing',
      icon: '☁️',
      color: 'from-cyan-500 to-cyan-600',
      title: 'Cloud Computing Diploma',
      bestFor: ['Cloud Computing', 'Cloud Architecture', 'DevOps', 'Cloud Services'],
      duration: '3 Years',
      careers: ['Cloud Engineer', 'Cloud Architect', 'DevOps Engineer', 'Cloud Support Specialist'],
      recommended: 'Students interested in cloud technologies, virtualization, and modern IT infrastructure.',
      coreFocus: 'Cloud platforms, virtualization, cloud architecture',
      technicalLevel: 'Advanced',
      securityFocus: 'High',
      practicalWork: 'Very High',
      industryDemand: 'Very High',
      certifications: 'AWS, Azure, Google Cloud',
      higherStudy: 'B.E/B.Tech Computer Science/IT Lateral Entry',
      commonCareers: 'Cloud Engineer, DevOps, Cloud Architect',
      difficulty: 'Medium-Hard'
    },
    {
      id: 'cybersecurity',
      icon: '🔒',
      color: 'from-red-500 to-red-600',
      title: 'Cybersecurity Diploma',
      bestFor: ['Cybersecurity', 'Information Security', 'Ethical Hacking', 'Security Analysis'],
      duration: '3 Years',
      careers: ['Cybersecurity Analyst', 'Security Engineer', 'Penetration Tester', 'Security Consultant'],
      recommended: 'Students interested in cybersecurity, ethical hacking, and information security.',
      coreFocus: 'Security systems, ethical hacking, information security',
      technicalLevel: 'Advanced',
      securityFocus: 'Very High',
      practicalWork: 'Very High',
      industryDemand: 'Very High',
      certifications: 'CEH, CISSP, Security+',
      higherStudy: 'B.E/B.Tech Computer Science/IT Lateral Entry',
      commonCareers: 'Security Analyst, Penetration Tester, Security Engineer',
      difficulty: 'Hard'
    },
    {
      id: 'it-infrastructure',
      icon: '🏗️',
      color: 'from-green-500 to-green-600',
      title: 'IT Infrastructure Diploma',
      bestFor: ['IT Infrastructure', 'System Administration', 'Hardware Management', 'Technical Support'],
      duration: '3 Years',
      careers: ['IT Infrastructure Specialist', 'Hardware Engineer', 'Technical Support Lead', 'System Administrator'],
      recommended: 'Students interested in IT infrastructure, hardware, and technical support.',
      coreFocus: 'IT infrastructure, hardware systems, technical support',
      technicalLevel: 'Intermediate',
      securityFocus: 'Medium',
      practicalWork: 'High',
      industryDemand: 'Medium',
      certifications: 'A+, Network+, Server+',
      higherStudy: 'B.E/B.Tech Computer Science/IT Lateral Entry',
      commonCareers: 'Infrastructure Specialist, Hardware Engineer, Technical Support',
      difficulty: 'Medium'
    }
  ];

  // Comparison Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      networkAdmin: 'Network systems, network administration, IT infrastructure',
      cloudComputing: 'Cloud platforms, virtualization, cloud architecture',
      cybersecurity: 'Security systems, ethical hacking, information security',
      itInfra: 'IT infrastructure, hardware systems, technical support'
    },
    {
      feature: 'Technical Level',
      networkAdmin: 'Intermediate',
      cloudComputing: 'Advanced',
      cybersecurity: 'Advanced',
      itInfra: 'Intermediate'
    },
    {
      feature: 'Security Focus',
      networkAdmin: 'Medium',
      cloudComputing: 'High',
      cybersecurity: 'Very High',
      itInfra: 'Medium'
    },
    {
      feature: 'Practical Work',
      networkAdmin: 'High',
      cloudComputing: 'Very High',
      cybersecurity: 'Very High',
      itInfra: 'High'
    },
    {
      feature: 'Industry Demand',
      networkAdmin: 'High',
      cloudComputing: 'Very High',
      cybersecurity: 'Very High',
      itInfra: 'Medium'
    },
    {
      feature: 'Certifications',
      networkAdmin: 'CCNA, Network+, CompTIA',
      cloudComputing: 'AWS, Azure, Google Cloud',
      cybersecurity: 'CEH, CISSP, Security+',
      itInfra: 'A+, Network+, Server+'
    },
    {
      feature: 'Higher Study Opportunities',
      networkAdmin: 'B.E/B.Tech Computer Science/IT Lateral Entry',
      cloudComputing: 'B.E/B.Tech Computer Science/IT Lateral Entry',
      cybersecurity: 'B.E/B.Tech Computer Science/IT Lateral Entry',
      itInfra: 'B.E/B.Tech Computer Science/IT Lateral Entry'
    },
    {
      feature: 'Common Careers',
      networkAdmin: 'Network Administrator, System Admin, IT Support',
      cloudComputing: 'Cloud Engineer, DevOps, Cloud Architect',
      cybersecurity: 'Security Analyst, Penetration Tester, Security Engineer',
      itInfra: 'Infrastructure Specialist, Hardware Engineer, Technical Support'
    },
    {
      feature: 'Difficulty Level',
      networkAdmin: 'Medium',
      cloudComputing: 'Medium-Hard',
      cybersecurity: 'Hard',
      itInfra: 'Medium'
    }
  ];

  // Choose Options Data
  const chooseOptions = [
    {
      icon: '🌐',
      title: 'Choose Network Administration If:',
      reasons: [
        'You enjoy network systems and IT infrastructure',
        'You are interested in network management',
        'You want network administration careers'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '☁️',
      title: 'Choose Cloud Computing If:',
      reasons: [
        'You enjoy cloud technologies and virtualization',
        'You are interested in modern IT infrastructure',
        'You want cloud engineering careers'
      ],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: '🔒',
      title: 'Choose Cybersecurity If:',
      reasons: [
        'You enjoy security systems and ethical hacking',
        'You are interested in information security',
        'You want cybersecurity careers'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🏗️',
      title: 'Choose IT Infrastructure If:',
      reasons: [
        'You enjoy hardware systems and technical support',
        'You are interested in IT infrastructure management',
        'You want infrastructure specialist careers'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Network Administrator',
      icon: '🌐',
      skills: ['Network Management', 'System Administration', 'Troubleshooting'],
      roadmap: 'Diploma → Junior Network Admin → Network Administrator → Network Manager',
      salary: '₹4-12 LPA',
      demand: 'High',
      futureScope: 'Cloud networking, SDN, Network automation'
    },
    {
      title: 'Cloud Engineer',
      icon: '☁️',
      skills: ['Cloud Platforms', 'DevOps', 'Infrastructure as Code'],
      roadmap: 'Diploma → Cloud Engineer → Senior Cloud Engineer → Cloud Architect',
      salary: '₹6-18 LPA',
      demand: 'Very High',
      futureScope: 'Multi-cloud, Serverless, Cloud-native'
    },
    {
      title: 'Cybersecurity Analyst',
      icon: '🔒',
      skills: ['Security Analysis', 'Threat Detection', 'Incident Response'],
      roadmap: 'Diploma → Security Analyst → Senior Analyst → Security Manager',
      salary: '₹5-15 LPA',
      demand: 'Very High',
      futureScope: 'AI security, Cloud security, Zero Trust'
    },
    {
      title: 'System Administrator',
      icon: '⚙️',
      skills: ['System Management', 'Server Administration', 'Technical Support'],
      roadmap: 'Diploma → System Admin → Senior Admin → IT Manager',
      salary: '₹3-10 LPA',
      demand: 'Medium',
      futureScope: 'Cloud administration, DevOps, Automation'
    },
    {
      title: 'Security Engineer',
      icon: '🛡️',
      skills: ['Security Implementation', 'Network Security', 'Security Tools'],
      roadmap: 'Diploma → Security Engineer → Senior Engineer → Security Architect',
      salary: '₹6-16 LPA',
      demand: 'Very High',
      futureScope: 'Application security, Cloud security, DevSecOps'
    },
    {
      title: 'DevOps Engineer',
      icon: '🔄',
      skills: ['CI/CD', 'Automation', 'Cloud Services'],
      roadmap: 'Diploma → DevOps Engineer → Senior DevOps → DevOps Manager',
      salary: '₹7-20 LPA',
      demand: 'Very High',
      futureScope: 'GitOps, AIOps, Platform engineering'
    },
    {
      title: 'Penetration Tester',
      icon: '🔍',
      skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Security Testing'],
      roadmap: 'Diploma → Junior Pentester → Pentester → Security Consultant',
      salary: '₹5-14 LPA',
      demand: 'High',
      futureScope: 'Red teaming, Purple teaming, Bug bounty'
    },
    {
      title: 'IT Infrastructure Specialist',
      icon: '🏗️',
      skills: ['Infrastructure Management', 'Hardware Support', 'System Integration'],
      roadmap: 'Diploma → Infrastructure Specialist → Senior Specialist → IT Manager',
      salary: '₹3-9 LPA',
      demand: 'Medium',
      futureScope: 'Cloud infrastructure, Hybrid systems, Automation'
    },
    {
      title: 'Cloud Architect',
      icon: '🏛️',
      skills: ['Cloud Architecture', 'System Design', 'Cost Optimization'],
      roadmap: 'Diploma → Cloud Engineer → Cloud Architect → Principal Architect',
      salary: '₹8-25 LPA',
      demand: 'Very High',
      futureScope: 'Multi-cloud architecture, Edge computing, Serverless'
    },
    {
      title: 'Security Consultant',
      icon: '👨‍💼',
      skills: ['Security Consulting', 'Risk Assessment', 'Compliance'],
      roadmap: 'Diploma → Security Analyst → Consultant → Senior Consultant',
      salary: '₹6-18 LPA',
      demand: 'High',
      futureScope: 'GRC consulting, Privacy consulting, Security strategy'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech Computer Science/IT',
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
      title: 'Lateral Entry to B.E/B.Tech CSE/IT',
      icon: '🔄',
      eligibility: 'Diploma in Computer Science/IT/Network Engineering',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'Networking Fundamentals',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🌐',
      relevance: 'Essential for network administration',
      skills: ['Network Basics', 'TCP/IP', 'Network Protocols']
    },
    {
      title: 'CCNA Certification',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '📡',
      relevance: 'Industry standard for networking',
      skills: ['Cisco Networking', 'Routing & Switching', 'Network Security']
    },
    {
      title: 'Cloud Computing Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '☁️',
      relevance: 'Foundation for cloud careers',
      skills: ['Cloud Concepts', 'AWS/Azure Basics', 'Virtualization']
    },
    {
      title: 'AWS Certification',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🔷',
      relevance: 'Leading cloud platform',
      skills: ['AWS Services', 'Cloud Architecture', 'Security']
    },
    {
      title: 'Cybersecurity Fundamentals',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🔒',
      relevance: 'Essential for security careers',
      skills: ['Security Basics', 'Threat Analysis', 'Security Tools']
    },
    {
      title: 'Ethical Hacking',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🎯',
      relevance: 'Advanced security skills',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Tools']
    },
    {
      title: 'System Administration',
      level: 'Intermediate',
      duration: '3 Months',
      icon: '⚙️',
      relevance: 'Core IT infrastructure skills',
      skills: ['Server Management', 'System Administration', 'Troubleshooting']
    },
    {
      title: 'DevOps Fundamentals',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🔄',
      relevance: 'Modern IT operations',
      skills: ['CI/CD', 'Automation', 'Containerization']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'IT Service Companies',
      icon: '🏢',
      demand: 'High',
      growth: '+15%',
      opportunities: 'TCS, Infosys, Wipro, HCL, IBM',
      types: ['IT Services', 'Network Support', 'Infrastructure Management']
    },
    {
      name: 'Cloud Service Providers',
      icon: '☁️',
      demand: 'Very High',
      growth: '+25%',
      opportunities: 'AWS, Azure, Google Cloud, Oracle Cloud',
      types: ['Cloud Services', 'Cloud Support', 'Cloud Architecture']
    },
    {
      name: 'Cybersecurity Firms',
      icon: '🔒',
      demand: 'Very High',
      growth: '+22%',
      opportunities: 'FireEye, Palo Alto, McAfee, Kaspersky',
      types: ['Security Services', 'Threat Detection', 'Security Consulting']
    },
    {
      name: 'Network Equipment Companies',
      icon: '📡',
      demand: 'Medium',
      growth: '+12%',
      opportunities: 'Cisco, Juniper, Huawei, Arista',
      types: ['Network Equipment', 'Network Support', 'R&D']
    },
    {
      name: 'Startups',
      icon: '🚀',
      demand: 'High',
      growth: '+30%',
      opportunities: 'Tech Startups, Security Startups, Cloud Startups',
      types: ['Product Development', 'Innovation', 'Rapid Growth']
    },
    {
      name: 'Government IT Departments',
      icon: '🏛️',
      demand: 'Medium',
      growth: '+10%',
      opportunities: 'NIC, State IT Departments, Public Sector IT',
      types: ['Government IT', 'Network Administration', 'Security']
    }
  ];

  // Freelancing Opportunities Data
  const freelancingOpportunities = [
    {
      title: 'Network Security Consultant',
      icon: '🌐',
      skills: ['Network Security', 'Security Auditing', 'Compliance'],
      earning: '₹30,000-1,50,000/month',
      growth: 'High',
      opportunities: 'Security Audits, Network Setup, Compliance Consulting'
    },
    {
      title: 'Cloud Infrastructure Setup',
      icon: '☁️',
      skills: ['Cloud Architecture', 'Migration', 'Optimization'],
      earning: '₹35,000-2,00,000/month',
      growth: 'Very High',
      opportunities: 'Cloud Migration, Architecture Design, Cost Optimization'
    },
    {
      title: 'Cybersecurity Freelancer',
      icon: '🔒',
      skills: ['Security Testing', 'Penetration Testing', 'Security Consulting'],
      earning: '₹40,000-2,50,000/month',
      growth: 'Very High',
      opportunities: 'Security Audits, Pentesting, Security Consulting'
    },
    {
      title: 'Network Administration Services',
      icon: '📡',
      skills: ['Network Setup', 'Maintenance', 'Troubleshooting'],
      earning: '₹25,000-1,20,000/month',
      growth: 'Medium',
      opportunities: 'Network Setup, Support, Maintenance Contracts'
    },
    {
      title: 'IT Infrastructure Consulting',
      icon: '🏗️',
      skills: ['Infrastructure Design', 'System Integration', 'Technical Support'],
      earning: '₹30,000-1,50,000/month',
      growth: 'Medium',
      opportunities: 'Infrastructure Design, System Integration, Consulting'
    },
    {
      title: 'DevOps Freelancer',
      icon: '🔄',
      skills: ['CI/CD', 'Automation', 'Cloud Services'],
      earning: '₹45,000-3,00,000/month',
      growth: 'Very High',
      opportunities: 'DevOps Setup, Automation, Pipeline Design'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'NIC Network Administrator',
      icon: '🏛️',
      eligibility: 'Diploma in Computer Science/IT/Network Engineering',
      skills: ['Network Administration', 'Security Clearance', 'Government Systems'],
      growth: 'Prestigious government career',
      salary: '₹6-14 LPA'
    },
    {
      title: 'Railways Network Engineer',
      icon: '🚂',
      eligibility: 'Diploma in Computer Science/IT/Network Engineering',
      skills: ['Network Engineering', 'Railway Systems', 'Technical Support'],
      growth: 'Stable government sector',
      salary: '₹5-12 LPA'
    },
    {
      title: 'SSC Network Support',
      icon: '📋',
      eligibility: 'Diploma in Computer Science/IT/Network Engineering',
      skills: ['Network Support', 'Troubleshooting', 'Government IT'],
      growth: 'Regular government recruitment',
      salary: '₹4-10 LPA'
    },
    {
      title: 'DRDO Security Analyst',
      icon: '🛡️',
      eligibility: 'Diploma in Computer Science/IT/Cybersecurity',
      skills: ['Security Analysis', 'Defense Systems', 'Security Clearance'],
      growth: 'Defense sector opportunities',
      salary: '₹7-16 LPA'
    },
    {
      title: 'ISRO Network Engineer',
      icon: '🚀',
      eligibility: 'Diploma in Computer Science/IT/Network Engineering',
      skills: ['Network Engineering', 'Space Technology', 'Technical Support'],
      growth: 'Space sector growth',
      salary: '₹8-18 LPA'
    },
    {
      title: 'Government Cybersecurity Specialist',
      icon: '🔒',
      eligibility: 'Diploma in Computer Science/IT/Cybersecurity',
      skills: ['Cybersecurity', 'Security Analysis', 'Government Security'],
      growth: 'Essential government services',
      salary: '₹6-15 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'Cloud Computing Growth',
      icon: '☁️',
      growth: '25%',
      description: 'Massive adoption of cloud services across all sectors',
      salaryImpact: '+30%',
      demand: 'Very High'
    },
    {
      title: 'Cybersecurity Demand',
      icon: '🔒',
      growth: '22%',
      description: 'Increasing security threats and compliance requirements',
      salaryImpact: '+25%',
      demand: 'Very High'
    },
    {
      title: 'Network Automation',
      icon: '🤖',
      growth: '18%',
      description: 'AI-driven network management and automation',
      salaryImpact: '+20%',
      demand: 'High'
    },
    {
      title: 'DevOps Adoption',
      icon: '🔄',
      growth: '20%',
      description: 'Integration of development and operations',
      salaryImpact: '+22%',
      demand: 'Very High'
    },
    {
      title: 'Zero Trust Security',
      icon: '🛡️',
      growth: '15%',
      description: 'Modern security architecture and principles',
      salaryImpact: '+18%',
      demand: 'High'
    }
  ];

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getGrowthBadge = (growth: string) => {
    const growthValue = parseInt(growth.replace(/\D/g, ''));
    if (growthValue >= 20) return 'bg-green-500/20 text-green-300 border-green-500/30';
    if (growthValue >= 15) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (growthValue >= 10) return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('computer_it_diplomas')}
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
            <span className="text-4xl">🌐</span>
            <h1 className="text-4xl font-bold text-white">Networking, Cloud & Cybersecurity</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on network administration, cloud computing, cybersecurity, and IT infrastructure for modern IT careers after 10th grade.
          </p>
        </motion.div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('computer_it_diplomas')}>Computer & IT Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Networking, Cloud & Cybersecurity</span>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search courses, careers, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
            >
              <option value="all">All Courses</option>
              <option value="network">Network Administration</option>
              <option value="cloud">Cloud Computing</option>
              <option value="security">Cybersecurity</option>
              <option value="infrastructure">IT Infrastructure</option>
            </select>
          </div>
        </div>

        {/* Diploma Course Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group"
                onClick={() => toggleCardExpansion(course.id)}
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mx-auto mb-3`}>
                    {course.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Best For</h4>
                    <div className="space-y-1">
                      {course.bestFor.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-white/80 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Duration</span>
                    <p className="text-white/90 text-sm font-medium">{course.duration}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.careers.slice(0, 2).map((career, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                          {career}
                        </span>
                      ))}
                      {course.careers.length > 2 && (
                        <span className="px-2 py-1 bg-white/5 text-white/60 rounded-full text-xs">
                          +{course.careers.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/70 text-xs italic">{course.recommended}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedCard === course.id ? 1 : 0, height: expandedCard === course.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4 border-t border-white/10 mt-4"
                >
                  <div className="grid grid-cols-1 gap-3 text-xs">
                    <div className="flex justify-between"><span className="text-white/50">Core Focus:</span><span className="text-white/80">{course.coreFocus}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Technical Level:</span><span className="text-white/80">{course.technicalLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Security Focus:</span><span className="text-white/80">{course.securityFocus}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Practical Work:</span><span className="text-white/80">{course.practicalWork}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Industry Demand:</span><span className="text-white/80">{course.industryDemand}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Certifications:</span><span className="text-white/80">{course.certifications}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Higher Study:</span><span className="text-white/80">{course.higherStudy}</span></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Comparison Table</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white font-semibold text-sm">Feature</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Network Administration</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Cloud Computing</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Cybersecurity</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">IT Infrastructure</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.networkAdmin}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.cloudComputing}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.cybersecurity}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.itInfra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Choose This If... */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 text-center">{option.title}</h3>
                <div className="space-y-2">
                  {option.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{career.icon}</div>
                  <h3 className="text-lg font-bold text-white">{career.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Career Roadmap</span>
                    <p className="text-white/80 text-sm">{career.roadmap}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Skills Needed</span>
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
                      <span className="text-white/50 text-xs">Average Salary</span>
                      <p className="text-white/90 text-sm font-medium">{career.salary}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Industry Demand</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(career.demand)}`}>
                        {career.demand}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Future Scope</span>
                    <p className="text-white/80 text-sm">{career.futureScope}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Admissions & Higher Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Polytechnic Admissions & Higher Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissions.map((admission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">
                    {admission.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{admission.title}</h3>
                </div>
                
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
                    <p className="text-white/90 text-sm font-medium">{admission.successRate}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">
                    {course.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Level</span>
                      <p className="text-white/90 text-sm font-medium">{course.level}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Duration</span>
                      <p className="text-white/90 text-sm font-medium">{course.duration}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Career Relevance</span>
                    <p className="text-white/80 text-sm">{course.relevance}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Skills Covered</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {course.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries Hiring</h2>
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
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Demand</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(industry.demand)}`}>
                        {industry.demand}
                      </p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Growth</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(industry.growth)}`}>
                        {industry.growth}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Opportunities</span>
                    <p className="text-white/80 text-sm">{industry.opportunities}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Job Types</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {industry.types.map((type, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Freelancing & Startup Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Freelancing & Startup Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelancingOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{opportunity.icon}</div>
                  <h3 className="text-lg font-bold text-white">{opportunity.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Skills Required</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {opportunity.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Earning Potential</span>
                    <p className="text-white/90 text-sm font-medium">{opportunity.earning}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(opportunity.growth)}`}>
                        {opportunity.growth}
                      </p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Opportunities</span>
                      <p className="text-white/80 text-sm">{opportunity.opportunities}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Government Job Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Government Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
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
                    <span className="text-white/50 text-xs">Salary Range</span>
                    <p className="text-white/90 text-sm font-medium">{job.salary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Trends */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{trend.icon}</div>
                  <h3 className="text-lg font-bold text-white">{trend.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Description</span>
                    <p className="text-white/80 text-sm">{trend.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Growth Rate</span>
                      <p className={`px-2 py-1 rounded text-xs font-medium ${getGrowthBadge(trend.growth)}`}>
                        {trend.growth}
                      </p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Salary Impact</span>
                      <p className="text-white/90 text-sm font-medium">{trend.salaryImpact}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Industry Demand</span>
                    <p className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(trend.demand)}`}>
                      {trend.demand}
                    </p>
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

export default NetworkingCloudCybersecurityScreen;
