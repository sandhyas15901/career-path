import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface ComputerITEngineeringScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const ComputerITEngineeringScreen: React.FC<ComputerITEngineeringScreenProps> = ({ setScreen }) => {
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
      id: 'computer-it-diplomas',
      icon: '📚',
      color: 'from-indigo-600 to-purple-600',
      title: 'Computer & IT Diplomas',
      recommended: 'Explore specialized diploma pathways in computer science, networking, AI, gaming, and web technologies',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Software & App Development',
        'Networking, Cloud & Cybersecurity',
        'AI, Data Science & IoT',
        'Game Development & Multimedia',
        'UI/UX & Web Technologies'
      ],
      careers: [
        'Software Developer',
        'Network Administrator',
        'AI Engineer',
        'Game Developer',
        'UI/UX Designer'
      ],
      coreFocus: 'Computer science, networking, AI, gaming, web technologies',
      practicalWork: 'High - Multiple IT specializations and projects',
      codingLevel: 'Varies by specialization',
      networkingScope: 'Varies by specialization',
      aiDataFocus: 'Varies by specialization',
      securityFocus: 'Varies by specialization',
      industryDemand: 'Very High - Multiple IT sectors',
      governmentJobs: 'Medium - Various IT government roles',
      higherStudy: 'B.E/B.Tech in Computer Science/IT',
      commonCareers: ['Software Engineer', 'Network Engineer', 'AI Engineer', 'Game Developer', 'UI/UX Designer']
    },
    {
      id: 'computer-science',
      icon: '🟦',
      color: 'from-blue-600 to-cyan-600',
      title: 'Computer Science Engineering Diploma',
      recommended: 'Students interested in coding, software, applications, and computer systems',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Programming',
        'Software Development',
        'App Development',
        'Computer Systems'
      ],
      careers: [
        'Software Developer',
        'Junior Programmer',
        'Application Support Technician',
        'Web Developer'
      ],
      coreFocus: 'Programming, software development, computer systems',
      practicalWork: 'High - Coding labs, software projects, system design',
      codingLevel: 'Advanced programming and software engineering',
      networkingScope: 'Basic networking for software applications',
      aiDataFocus: 'Basic AI concepts in software development',
      securityFocus: 'Basic security principles in coding',
      industryDemand: 'Very High - Software industry demand',
      governmentJobs: 'Medium - IT departments, technical roles',
      higherStudy: 'B.E/B.Tech in Computer Science',
      commonCareers: ['Software Engineer', 'Web Developer', 'Application Developer']
    },
    {
      id: 'information-technology',
      icon: '🟩',
      color: 'from-green-600 to-emerald-600',
      title: 'Information Technology Diploma',
      recommended: 'Students interested in computer networks, IT systems, and technical support careers',
      duration: '3 Years',
      difficulty: 'Easy-Medium',
      bestFor: [
        'IT Infrastructure',
        'Networking',
        'System Administration',
        'Technical Support'
      ],
      careers: [
        'IT Support Technician',
        'Network Administrator',
        'System Support Engineer',
        'Helpdesk Technician'
      ],
      coreFocus: 'IT infrastructure, networking, system administration',
      practicalWork: 'High - Network setup, system maintenance, troubleshooting',
      codingLevel: 'Basic scripting and system configuration',
      networkingScope: 'Advanced networking and infrastructure',
      aiDataFocus: 'Basic AI tools in IT operations',
      securityFocus: 'Network and system security',
      industryDemand: 'High - IT support and infrastructure',
      governmentJobs: 'High - Government IT departments',
      higherStudy: 'B.E/B.Tech in Information Technology',
      commonCareers: ['IT Administrator', 'Network Engineer', 'System Administrator']
    },
    {
      id: 'ai-machine-learning',
      icon: '🟨',
      color: 'from-yellow-600 to-orange-600',
      title: 'AI & Machine Learning Diploma',
      recommended: 'Students interested in AI, data analysis, automation, and future technologies',
      duration: '2–3 Years',
      difficulty: 'Hard',
      bestFor: [
        'Artificial Intelligence',
        'Data Science',
        'Automation',
        'Smart Systems'
      ],
      careers: [
        'AI Assistant Developer',
        'Data Analyst Assistant',
        'Machine Learning Technician',
        'AI Support Specialist'
      ],
      coreFocus: 'Artificial intelligence, machine learning, data science',
      practicalWork: 'High - AI model training, data analysis, automation projects',
      codingLevel: 'Advanced programming for AI/ML',
      networkingScope: 'Basic networking for AI applications',
      aiDataFocus: 'Very High - Core AI and ML focus',
      securityFocus: 'AI security and ethics',
      industryDemand: 'Very High - Growing AI sector',
      governmentJobs: 'Low-Medium - Emerging government AI roles',
      higherStudy: 'B.E/B.Tech in AI/Computer Science',
      commonCareers: ['AI Engineer', 'Data Scientist', 'ML Engineer']
    },
    {
      id: 'cybersecurity',
      icon: '🟪',
      color: 'from-purple-600 to-pink-600',
      title: 'Cybersecurity Diploma',
      recommended: 'Students interested in cybersecurity, ethical hacking, and digital protection systems',
      duration: '2–3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Ethical Hacking',
        'Network Security',
        'Cyber Defense',
        'Digital Safety'
      ],
      careers: [
        'Cybersecurity Technician',
        'Security Analyst Assistant',
        'Network Security Support',
        'SOC Support Technician'
      ],
      coreFocus: 'Cybersecurity, ethical hacking, digital protection',
      practicalWork: 'High - Security testing, vulnerability assessment, incident response',
      codingLevel: 'Intermediate - Security scripting and tools',
      networkingScope: 'Advanced - Network security focus',
      aiDataFocus: 'Basic AI in cybersecurity',
      securityFocus: 'Very High - Core cybersecurity focus',
      industryDemand: 'Very High - Critical security needs',
      governmentJobs: 'High - Government cybersecurity agencies',
      higherStudy: 'B.E/B.Tech in Cybersecurity/Computer Science',
      commonCareers: ['Security Analyst', 'Penetration Tester', 'Security Engineer']
    }
  ];

  // Comparison Table Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      computerScience: 'Programming & software development',
      informationTechnology: 'IT infrastructure & networking',
      aiML: 'Artificial intelligence & machine learning',
      cybersecurity: 'Network security & cyber defense'
    },
    {
      feature: 'Coding Level',
      computerScience: 'Advanced',
      informationTechnology: 'Basic scripting',
      aiML: 'Advanced',
      cybersecurity: 'Intermediate'
    },
    {
      feature: 'Networking Scope',
      computerScience: 'Basic',
      informationTechnology: 'Advanced',
      aiML: 'Basic',
      cybersecurity: 'Advanced'
    },
    {
      feature: 'AI & Data Focus',
      computerScience: 'Basic',
      informationTechnology: 'Basic',
      aiML: 'Very High',
      cybersecurity: 'Basic'
    },
    {
      feature: 'Security Focus',
      computerScience: 'Basic',
      informationTechnology: 'High',
      aiML: 'Basic',
      cybersecurity: 'Very High'
    },
    {
      feature: 'Industry Demand',
      computerScience: 'Very High',
      informationTechnology: 'High',
      aiML: 'Very High',
      cybersecurity: 'Very High'
    },
    {
      feature: 'Government Job Scope',
      computerScience: 'Medium',
      informationTechnology: 'High',
      aiML: 'Low-Medium',
      cybersecurity: 'High'
    },
    {
      feature: 'Higher Study Opportunities',
      computerScience: 'B.E/B.Tech Computer Science',
      informationTechnology: 'B.E/B.Tech Information Technology',
      aiML: 'B.E/B.Tech AI/Computer Science',
      cybersecurity: 'B.E/B.Tech Cybersecurity/CS'
    },
    {
      feature: 'Common Careers',
      computerScience: 'Software Engineer, Web Developer',
      informationTechnology: 'IT Administrator, Network Engineer',
      aiML: 'AI Engineer, Data Scientist',
      cybersecurity: 'Security Analyst, Penetration Tester'
    },
    {
      feature: 'Difficulty Level',
      computerScience: 'Medium',
      informationTechnology: 'Easy-Medium',
      aiML: 'Hard',
      cybersecurity: 'Medium-Hard'
    }
  ];

  // Choose This If Data
  const chooseOptions = [
    {
      icon: '💻',
      title: 'Choose Computer Science If:',
      reasons: [
        'You enjoy coding and software development',
        'You are interested in app and web development',
        'You want software engineering careers'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '🌐',
      title: 'Choose Information Technology If:',
      reasons: [
        'You are interested in networking and IT systems',
        'You enjoy troubleshooting and system support',
        'You want infrastructure-related IT careers'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: '🤖',
      title: 'Choose AI & Machine Learning If:',
      reasons: [
        'You are interested in AI and smart technologies',
        'You enjoy data analysis and automation',
        'You want future-focused tech careers'
      ],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: '🔐',
      title: 'Choose Cybersecurity If:',
      reasons: [
        'You are interested in ethical hacking and security',
        'You enjoy protecting systems and networks',
        'You want cybersecurity careers'
      ],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Software Developer',
      icon: '💻',
      skills: ['Programming', 'Software Design', 'Problem Solving'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '18%',
      roadmap: 'Diploma → Junior Developer → Software Engineer → Senior Developer'
    },
    {
      title: 'Web Developer',
      icon: '🌐',
      skills: ['HTML/CSS/JS', 'Frontend Frameworks', 'UI/UX'],
      salary: '₹3-7 LPA',
      demand: 'Very High',
      growth: '15%',
      roadmap: 'Diploma → Frontend Developer → Full Stack Developer → Tech Lead'
    },
    {
      title: 'IT Support Technician',
      icon: '🔧',
      skills: ['Troubleshooting', 'System Support', 'Customer Service'],
      salary: '₹2-5 LPA',
      demand: 'High',
      growth: '12%',
      roadmap: 'Diploma → Support Tech → Senior Support → IT Manager'
    },
    {
      title: 'Network Administrator',
      icon: '🌍',
      skills: ['Networking', 'System Administration', 'Security'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '14%',
      roadmap: 'Diploma → Network Tech → Network Admin → Network Engineer'
    },
    {
      title: 'AI Support Specialist',
      icon: '🤖',
      skills: ['AI Tools', 'Data Analysis', 'Machine Learning'],
      salary: '₹4-9 LPA',
      demand: 'Very High',
      growth: '25%',
      roadmap: 'Diploma → AI Assistant → AI Specialist → AI Engineer'
    },
    {
      title: 'Data Analyst Assistant',
      icon: '📊',
      skills: ['Data Analysis', 'Statistics', 'Visualization'],
      salary: '₹3-7 LPA',
      demand: 'Very High',
      growth: '22%',
      roadmap: 'Diploma → Data Assistant → Data Analyst → Data Scientist'
    },
    {
      title: 'Cybersecurity Technician',
      icon: '🔐',
      skills: ['Security Tools', 'Network Security', 'Risk Assessment'],
      salary: '₹4-8 LPA',
      demand: 'Very High',
      growth: '20%',
      roadmap: 'Diploma → Security Tech → Security Analyst → Security Engineer'
    },
    {
      title: 'Ethical Hacking Assistant',
      icon: '🕵️',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Tools'],
      salary: '₹4-9 LPA',
      demand: 'Very High',
      growth: '24%',
      roadmap: 'Diploma → Security Tester → Penetration Tester → Security Consultant'
    },
    {
      title: 'System Support Engineer',
      icon: '⚙️',
      skills: ['System Administration', 'Infrastructure', 'Technical Support'],
      salary: '₹3-6 LPA',
      demand: 'High',
      growth: '13%',
      roadmap: 'Diploma → Support Engineer → System Admin → Infrastructure Manager'
    },
    {
      title: 'Application Support Technician',
      icon: '📱',
      skills: ['Application Support', 'Troubleshooting', 'User Training'],
      salary: '₹2-5 LPA',
      demand: 'Medium-High',
      growth: '11%',
      roadmap: 'Diploma → App Support → Senior Support → Application Manager'
    }
  ];

  // Admissions Data
  const admissions = [
    {
      title: 'DCET',
      icon: '📝',
      eligibility: '10th with Science & Math',
      process: 'Entrance Exam → Counseling → Admission',
      higherStudy: 'Direct 2nd Year B.E/B.Tech CSE/IT',
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
      eligibility: 'Diploma in Computer Science/IT',
      process: 'LEET Exam → Counseling → 2nd Year Admission',
      higherStudy: 'Complete Engineering Degree',
      successRate: '70%'
    }
  ];

  // Skill Courses Data
  const skillCourses = [
    {
      title: 'Python Programming',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🐍',
      relevance: 'Foundation for software development and AI',
      skills: ['Python Basics', 'Data Structures', 'Programming Logic']
    },
    {
      title: 'Web Development Basics',
      level: 'Beginner',
      duration: '4 Months',
      icon: '🌐',
      relevance: 'Essential for web development careers',
      skills: ['HTML/CSS', 'JavaScript', 'Responsive Design']
    },
    {
      title: 'Java Fundamentals',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '☕',
      relevance: 'Key for enterprise software development',
      skills: ['Java Programming', 'OOP Concepts', 'Framework Basics']
    },
    {
      title: 'Networking Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '🌍',
      relevance: 'Foundation for IT infrastructure careers',
      skills: ['Network Concepts', 'TCP/IP', 'Basic Administration']
    },
    {
      title: 'Cybersecurity Basics',
      level: 'Beginner',
      duration: '4 Months',
      icon: '🔐',
      relevance: 'Essential for security careers',
      skills: ['Security Concepts', 'Threat Analysis', 'Basic Tools']
    },
    {
      title: 'AI & ML Fundamentals',
      level: 'Intermediate',
      duration: '6 Months',
      icon: '🤖',
      relevance: 'Future-focused technology skills',
      skills: ['AI Concepts', 'Machine Learning', 'Data Processing']
    },
    {
      title: 'Database Management',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '🗄️',
      relevance: 'Critical for data-driven applications',
      skills: ['SQL', 'Database Design', 'Data Management']
    },
    {
      title: 'Cloud Computing Basics',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '☁️',
      relevance: 'Modern IT infrastructure skills',
      skills: ['Cloud Platforms', 'Virtualization', 'Cloud Services']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Software Companies',
      icon: '💻',
      demand: 'Very High',
      opportunities: 'Microsoft, Google, Adobe, Oracle',
      growth: '18% annually',
      salaryRange: '₹4-12 LPA'
    },
    {
      name: 'IT Service Companies',
      icon: '🔧',
      demand: 'High',
      opportunities: 'TCS, Infosys, Wipro, HCL',
      growth: '15% annually',
      salaryRange: '₹3-8 LPA'
    },
    {
      name: 'Startups',
      icon: '🚀',
      demand: 'Very High',
      opportunities: 'Tech Startups, Product Companies',
      growth: '25% annually',
      salaryRange: '₹3-10 LPA'
    },
    {
      name: 'Cybersecurity Firms',
      icon: '🔐',
      demand: 'Very High',
      opportunities: 'KPMG, EY, Deloitte, Security Firms',
      growth: '22% annually',
      salaryRange: '₹5-15 LPA'
    },
    {
      name: 'AI & Data Companies',
      icon: '🤖',
      demand: 'Very High',
      opportunities: 'OpenAI, DataRobot, Analytics Companies',
      growth: '30% annually',
      salaryRange: '₹6-18 LPA'
    },
    {
      name: 'Networking & Cloud Companies',
      icon: '☁️',
      demand: 'High',
      opportunities: 'AWS, Azure, Cisco, Network Providers',
      growth: '20% annually',
      salaryRange: '₹4-14 LPA'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'NIC Technical Jobs',
      icon: '🏛️',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Software Development', 'System Administration', 'Technical Support'],
      growth: 'Stable government career',
      salary: '₹4-8 LPA'
    },
    {
      title: 'Railways IT Jobs',
      icon: '🚂',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['IT Systems', 'Software Support', 'Network Management'],
      growth: 'Regular promotions',
      salary: '₹5-9 LPA'
    },
    {
      title: 'SSC Technical Jobs',
      icon: '📋',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Technical Knowledge', 'Computer Skills', 'General Aptitude'],
      growth: 'Clear promotion path',
      salary: '₹6-12 LPA'
    },
    {
      title: 'DRDO Technical Assistant',
      icon: '🛡️',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Defense Technology', 'System Integration', 'Security'],
      growth: 'Defense sector opportunities',
      salary: '₹7-15 LPA'
    },
    {
      title: 'ISRO Computer Technician',
      icon: '🚀',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Space Technology', 'Computer Systems', 'Technical Support'],
      growth: 'Prestigious career path',
      salary: '₹8-16 LPA'
    },
    {
      title: 'Government IT Support Jobs',
      icon: '🏢',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['IT Support', 'System Maintenance', 'Technical Assistance'],
      growth: 'Government benefits',
      salary: '₹4-9 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'AI Industry Growth',
      icon: '🤖',
      growth: '35%',
      description: 'Rapid expansion in artificial intelligence and machine learning applications',
      salaryImpact: '+25%',
      demand: 'Very High'
    },
    {
      title: 'Cybersecurity Demand',
      icon: '🔐',
      growth: '28%',
      description: 'Increasing need for cybersecurity professionals across all sectors',
      salaryImpact: '+20%',
      demand: 'Very High'
    },
    {
      title: 'Cloud Computing Expansion',
      icon: '☁️',
      growth: '22%',
      description: 'Growing adoption of cloud services and infrastructure',
      salaryImpact: '+18%',
      demand: 'Very High'
    },
    {
      title: 'Software Development Opportunities',
      icon: '💻',
      growth: '18%',
      description: 'Continuous demand for software developers across industries',
      salaryImpact: '+15%',
      demand: 'Very High'
    },
    {
      title: 'Data Science & Automation Trends',
      icon: '📊',
      growth: '25%',
      description: 'Growing importance of data analysis and automation technologies',
      salaryImpact: '+22%',
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
            <span className="text-4xl">💻</span>
            <h1 className="text-4xl font-bold text-white">Computer & IT Engineering</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on programming, software development, networking, AI, cybersecurity, and modern technology careers after 10th grade.
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
          <span className="text-white font-medium">Computer & IT Engineering</span>
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
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all ${course.id === 'computer-it-diplomas' ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (course.id === 'computer-it-diplomas') setScreen('computer_it_diplomas');
                  else toggleCardExpansion(course.id);
                }}
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
                        <div><span className="text-white/50">Coding Level:</span><span className="text-white/80">{course.codingLevel}</span></div>
                        <div><span className="text-white/50">Networking Scope:</span><span className="text-white/80">{course.networkingScope}</span></div>
                        <div><span className="text-white/50">AI & Data Focus:</span><span className="text-white/80">{course.aiDataFocus}</span></div>
                        <div><span className="text-white/50">Security Focus:</span><span className="text-white/80">{course.securityFocus}</span></div>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">Computer Science</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Information Technology</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">AI & ML</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Cybersecurity</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/90 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.computerScience}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.informationTechnology}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.aiML}</td>
                      <td className="px-6 py-4 text-white/80 text-sm">{row.cybersecurity}</td>
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
            {filteredSkillCourses.map((skillCourse, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-3xl mb-4 text-center">{skillCourse.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{skillCourse.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Level</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      skillCourse.level === 'Beginner' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {skillCourse.level}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Duration</span>
                    <span className="text-white/80 text-sm">{skillCourse.duration}</span>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Career Relevance</span>
                    <p className="text-white/80 text-sm mt-1">{skillCourse.relevance}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Skills Covered</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {skillCourse.skills.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                      {skillCourse.skills.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                          +{skillCourse.skills.length - 2}
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

export default ComputerITEngineeringScreen;
