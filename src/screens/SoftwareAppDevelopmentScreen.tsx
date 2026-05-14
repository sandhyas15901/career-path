import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Check,
  Search
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface SoftwareAppDevelopmentScreenProps {
  setScreen: (screen: AppScreen) => void;
  previousScreen?: AppScreen | null;
}

const SoftwareAppDevelopmentScreen: React.FC<SoftwareAppDevelopmentScreenProps> = ({ setScreen, previousScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleBack = () => {
    if (previousScreen === 'skill_based_courses') {
      setScreen('skill_based_courses' as any);
    } else {
      setScreen('computer_it_diplomas' as any);
    }
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Diploma Courses Data
  const diplomaCourses = [
    {
      id: 'software-development',
      icon: '🟦',
      color: 'from-blue-500 to-blue-600',
      title: 'Software Development Diploma',
      bestFor: ['Programming', 'Software Engineering', 'Application Development', 'Coding Careers'],
      duration: '3 Years',
      careers: ['Software Developer', 'Junior Programmer', 'Application Support Engineer', 'Backend Developer'],
      recommended: 'Students interested in coding, software systems, and application development.',
      coreFocus: 'Software development, programming languages, application design',
      codingLevel: 'Advanced',
      uiuxExposure: 'Medium',
      appDevScope: 'Full Stack',
      backendDev: 'Extensive',
      industryDemand: 'Very High',
      freelancing: 'High',
      higherStudy: 'Direct B.E/B.Tech 2nd Year',
      commonCareers: 'Software Engineer, Developer, Programmer',
      difficulty: 'Medium-Hard'
    },
    {
      id: 'web-development',
      icon: '🟩',
      color: 'from-green-500 to-green-600',
      title: 'Web Development Diploma',
      bestFor: ['Website Development', 'Frontend & Backend Development', 'UI Integration', 'Web Applications'],
      duration: '2–3 Years',
      careers: ['Frontend Developer', 'Web Designer', 'Full Stack Developer Assistant', 'Website Support Technician'],
      recommended: 'Students interested in websites, web applications, and internet technologies.',
      coreFocus: 'Web technologies, frontend/backend, UI/UX',
      codingLevel: 'Intermediate',
      uiuxExposure: 'High',
      appDevScope: 'Web Focus',
      backendDev: 'Moderate',
      industryDemand: 'High',
      freelancing: 'Very High',
      higherStudy: 'B.E/B.Tech CSE/IT Lateral Entry',
      commonCareers: 'Web Developer, Frontend Engineer, UI Developer',
      difficulty: 'Medium'
    },
    {
      id: 'mobile-app-development',
      icon: '🟨',
      color: 'from-purple-500 to-purple-600',
      title: 'Mobile App Development Diploma',
      bestFor: ['Android Development', 'iOS Apps', 'Cross-platform Apps', 'Mobile UI Design'],
      duration: '2–3 Years',
      careers: ['Android Developer', 'App Developer', 'Mobile UI Assistant', 'App Testing Technician'],
      recommended: 'Students interested in smartphone apps and mobile technologies.',
      coreFocus: 'Mobile development, app design, mobile UI/UX',
      codingLevel: 'Intermediate',
      uiuxExposure: 'High',
      appDevScope: 'Mobile Focus',
      backendDev: 'Moderate',
      industryDemand: 'High',
      freelancing: 'High',
      higherStudy: 'B.E/B.Tech CSE/IT Lateral Entry',
      commonCareers: 'Mobile Developer, App Developer, UI Engineer',
      difficulty: 'Medium'
    },
    {
      id: 'programming-application-engineering',
      icon: '🟪',
      color: 'from-orange-500 to-orange-600',
      title: 'Programming & Application Engineering Diploma',
      bestFor: ['Problem Solving', 'Software Logic', 'Programming Languages', 'Enterprise Applications'],
      duration: '3 Years',
      careers: ['Programming Technician', 'Software Tester', 'Java/Python Developer Assistant', 'Application Engineer Assistant'],
      recommended: 'Students interested in coding logic, programming languages, and enterprise software systems.',
      coreFocus: 'Programming fundamentals, software logic, enterprise systems',
      codingLevel: 'Advanced',
      uiuxExposure: 'Low',
      appDevScope: 'Enterprise Focus',
      backendDev: 'Extensive',
      industryDemand: 'High',
      freelancing: 'Medium',
      higherStudy: 'B.E/B.Tech CSE/IT Lateral Entry',
      commonCareers: 'Programmer, Software Tester, Application Engineer',
      difficulty: 'Hard'
    }
  ];

  // Comparison Data
  const comparisonData = [
    { 
      feature: 'Core Focus',
      softwareDev: 'Software development, programming languages, application design',
      webDev: 'Web technologies, frontend/backend, UI/UX',
      mobileDev: 'Mobile development, app design, mobile UI/UX',
      progEng: 'Programming fundamentals, software logic, enterprise systems'
    },
    {
      feature: 'Coding Level',
      softwareDev: 'Advanced',
      webDev: 'Intermediate',
      mobileDev: 'Intermediate',
      progEng: 'Advanced'
    },
    {
      feature: 'UI/UX Exposure',
      softwareDev: 'Medium',
      webDev: 'High',
      mobileDev: 'High',
      progEng: 'Low'
    },
    {
      feature: 'App Development Scope',
      softwareDev: 'Full Stack',
      webDev: 'Web Focus',
      mobileDev: 'Mobile Focus',
      progEng: 'Enterprise Focus'
    },
    {
      feature: 'Backend Development',
      softwareDev: 'Extensive',
      webDev: 'Moderate',
      mobileDev: 'Moderate',
      progEng: 'Extensive'
    },
    {
      feature: 'Industry Demand',
      softwareDev: 'Very High',
      webDev: 'High',
      mobileDev: 'High',
      progEng: 'High'
    },
    {
      feature: 'Freelancing Opportunities',
      softwareDev: 'High',
      webDev: 'Very High',
      mobileDev: 'High',
      progEng: 'Medium'
    },
    {
      feature: 'Higher Study Opportunities',
      softwareDev: 'Direct B.E/B.Tech 2nd Year',
      webDev: 'B.E/B.Tech CSE/IT Lateral Entry',
      mobileDev: 'B.E/B.Tech CSE/IT Lateral Entry',
      progEng: 'B.E/B.Tech CSE/IT Lateral Entry'
    },
    {
      feature: 'Common Careers',
      softwareDev: 'Software Engineer, Developer, Programmer',
      webDev: 'Web Developer, Frontend Engineer, UI Developer',
      mobileDev: 'Mobile Developer, App Developer, UI Engineer',
      progEng: 'Programmer, Software Tester, Application Engineer'
    },
    {
      feature: 'Difficulty Level',
      softwareDev: 'Medium-Hard',
      webDev: 'Medium',
      mobileDev: 'Medium',
      progEng: 'Hard'
    }
  ];

  // Choose Options Data
  const chooseOptions = [
    {
      icon: '💻',
      title: 'Choose Software Development If:',
      reasons: [
        'You enjoy coding and software systems',
        'You are interested in software engineering',
        'You want broad software career opportunities'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🌐',
      title: 'Choose Web Development If:',
      reasons: [
        'You enjoy websites and UI design',
        'You are interested in frontend/backend development',
        'You want web technology careers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📱',
      title: 'Choose Mobile App Development If:',
      reasons: [
        'You enjoy smartphone apps and mobile UI',
        'You are interested in Android/iOS development',
        'You want app development careers'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🧠',
      title: 'Choose Programming & Application Engineering If:',
      reasons: [
        'You enjoy logic and problem solving',
        'You are interested in programming languages',
        'You want enterprise software careers'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  // Career Opportunities Data
  const careers = [
    {
      title: 'Software Developer',
      icon: '💻',
      skills: ['Programming', 'Problem Solving', 'Software Design'],
      roadmap: 'Diploma → Junior Developer → Senior Developer → Tech Lead',
      salary: '₹4-12 LPA',
      demand: 'Very High',
      futureScope: 'AI integration, Cloud computing, Full stack development'
    },
    {
      title: 'Frontend Developer',
      icon: '🎨',
      skills: ['HTML/CSS/JS', 'React/Vue', 'UI/UX Design'],
      roadmap: 'Diploma → Frontend Developer → Senior Frontend → UI Architect',
      salary: '₹3-10 LPA',
      demand: 'High',
      futureScope: 'React/Next.js, Modern frameworks, Web3'
    },
    {
      title: 'Web Developer',
      icon: '🌐',
      skills: ['Full Stack', 'Database', 'Web Technologies'],
      roadmap: 'Diploma → Web Developer → Full Stack Developer → Tech Lead',
      salary: '₹3-9 LPA',
      demand: 'High',
      futureScope: 'Progressive Web Apps, Serverless, JAMstack'
    },
    {
      title: 'Android Developer',
      icon: '📱',
      skills: ['Java/Kotlin', 'Android Studio', 'Mobile UI'],
      roadmap: 'Diploma → Android Developer → Senior Android → Mobile Architect',
      salary: '₹3-10 LPA',
      demand: 'High',
      futureScope: 'Flutter, React Native, 5G apps'
    },
    {
      title: 'App Developer',
      icon: '📲',
      skills: ['Cross-platform', 'Mobile Design', 'App Testing'],
      roadmap: 'Diploma → App Developer → Senior Developer → Product Manager',
      salary: '₹3-11 LPA',
      demand: 'High',
      futureScope: 'IoT apps, Wearable tech, AR/VR apps'
    },
    {
      title: 'Backend Developer Assistant',
      icon: '⚙️',
      skills: ['Database', 'APIs', 'Server Management'],
      roadmap: 'Diploma → Backend Assistant → Backend Developer → System Architect',
      salary: '₹3-8 LPA',
      demand: 'High',
      futureScope: 'Microservices, Cloud architecture, DevOps'
    },
    {
      title: 'Software Tester',
      icon: '🔍',
      skills: ['Testing', 'Quality Assurance', 'Bug Tracking'],
      roadmap: 'Diploma → Tester → Senior Tester → QA Manager',
      salary: '₹2-7 LPA',
      demand: 'Medium',
      futureScope: 'Automation testing, Performance testing, Security testing'
    },
    {
      title: 'Full Stack Developer Assistant',
      icon: '🔧',
      skills: ['Frontend', 'Backend', 'Database'],
      roadmap: 'Diploma → Assistant → Full Stack Developer → Tech Lead',
      salary: '₹3-9 LPA',
      demand: 'High',
      futureScope: 'MERN stack, Serverless, Cloud-native'
    },
    {
      title: 'UI Integration Technician',
      icon: '🎯',
      skills: ['UI Design', 'Integration', 'User Testing'],
      roadmap: 'Diploma → UI Technician → UI Developer → UX Architect',
      salary: '₹2-6 LPA',
      demand: 'Medium',
      futureScope: 'Design systems, Component libraries, Accessibility'
    },
    {
      title: 'Application Support Engineer',
      icon: '🛠️',
      skills: ['Support', 'Troubleshooting', 'Documentation'],
      roadmap: 'Diploma → Support Engineer → Senior Support → Support Manager',
      salary: '₹2-7 LPA',
      demand: 'Medium',
      futureScope: 'DevSupport, Technical writing, Training'
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
      eligibility: 'Diploma in Computer Science/IT/Software Engineering',
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
      relevance: 'Essential for software development',
      skills: ['Python Basics', 'Data Structures', 'OOP Concepts']
    },
    {
      title: 'Java Fundamentals',
      level: 'Beginner',
      duration: '4 Months',
      icon: '☕',
      relevance: 'Core for enterprise development',
      skills: ['Java Syntax', 'OOP', 'Basic Algorithms']
    },
    {
      title: 'HTML & CSS',
      level: 'Beginner',
      duration: '2 Months',
      icon: '🌐',
      relevance: 'Foundation for web development',
      skills: ['HTML5', 'CSS3', 'Responsive Design']
    },
    {
      title: 'JavaScript Basics',
      level: 'Beginner',
      duration: '3 Months',
      icon: '⚡',
      relevance: 'Essential for interactive web',
      skills: ['JS Fundamentals', 'DOM Manipulation', 'ES6+']
    },
    {
      title: 'React Basics',
      level: 'Intermediate',
      duration: '4 Months',
      icon: '⚛️',
      relevance: 'Modern frontend framework',
      skills: ['Components', 'State Management', 'Hooks']
    },
    {
      title: 'Android App Development',
      level: 'Intermediate',
      duration: '5 Months',
      icon: '📱',
      relevance: 'Mobile app development',
      skills: ['Java/Kotlin', 'Android Studio', 'App Publishing']
    },
    {
      title: 'Database Fundamentals',
      level: 'Intermediate',
      duration: '3 Months',
      icon: '🗄️',
      relevance: 'Data management essential',
      skills: ['SQL', 'Database Design', 'Normalization']
    },
    {
      title: 'Git & GitHub Basics',
      level: 'Beginner',
      duration: '1 Month',
      icon: '📦',
      relevance: 'Version control for collaboration',
      skills: ['Git Commands', 'GitHub', 'Collaboration']
    }
  ];

  // Industries Hiring Data
  const industriesHiring = [
    {
      name: 'Software Companies',
      icon: '💻',
      demand: 'Very High',
      growth: '+18%',
      opportunities: 'Microsoft, Google, Adobe, Oracle, SAP',
      types: ['Product Development', 'Enterprise Software', 'SaaS']
    },
    {
      name: 'Startups',
      icon: '🚀',
      demand: 'High',
      growth: '+25%',
      opportunities: 'Tech Startups, Product Companies, Innovation Labs',
      types: ['Product Development', 'MVP Development', 'Rapid Prototyping']
    },
    {
      name: 'Web Development Agencies',
      icon: '🌐',
      demand: 'High',
      growth: '+15%',
      opportunities: 'Digital Agencies, Web Studios, Design Firms',
      types: ['Website Development', 'Web Applications', 'E-commerce']
    },
    {
      name: 'Mobile App Companies',
      icon: '📱',
      demand: 'High',
      growth: '+20%',
      opportunities: 'App Studios, Mobile First Companies, Gaming',
      types: ['Mobile Apps', 'App Development', 'App Maintenance']
    },
    {
      name: 'IT Service Companies',
      icon: '🔧',
      demand: 'Medium',
      growth: '+12%',
      opportunities: 'TCS, Infosys, Wipro, HCL, IBM',
      types: ['IT Services', 'Support', 'Consulting']
    },
    {
      name: 'SaaS Product Companies',
      icon: '☁️',
      demand: 'Very High',
      growth: '+22%',
      opportunities: 'SaaS Companies, Cloud Services, Product Companies',
      types: ['Cloud Products', 'SaaS Development', 'Product Management']
    }
  ];

  // Freelancing Opportunities Data
  const freelancingOpportunities = [
    {
      title: 'Freelance Web Developer',
      icon: '💻',
      skills: ['Web Development', 'Frontend', 'Backend'],
      earning: '₹20,000-1,00,000/month',
      growth: 'High',
      opportunities: 'Upwork, Fiverr, Freelancer, Local Projects'
    },
    {
      title: 'Mobile App Freelancer',
      icon: '📱',
      skills: ['App Development', 'Mobile UI', 'App Testing'],
      earning: '₹25,000-1,50,000/month',
      growth: 'High',
      opportunities: 'App Projects, Startup Collaboration, Contract Work'
    },
    {
      title: 'Website Design Services',
      icon: '🎨',
      skills: ['UI Design', 'Website Creation', 'Maintenance'],
      earning: '₹15,000-80,000/month',
      growth: 'Medium',
      opportunities: 'Small Businesses, Startups, Personal Projects'
    },
    {
      title: 'Startup App Development',
      icon: '🚀',
      skills: ['App Development', 'Product Development', 'Innovation'],
      earning: 'Equity + ₹30,000-1,20,000/month',
      growth: 'Very High',
      opportunities: 'Startup Ecosystem, Incubators, Accelerators'
    },
    {
      title: 'Small Business Software Services',
      icon: '🏢',
      skills: ['Custom Software', 'Support', 'Consulting'],
      earning: '₹20,000-90,000/month',
      growth: 'Medium',
      opportunities: 'Local Businesses, SMEs, Custom Projects'
    },
    {
      title: 'Digital Product Creation',
      icon: '💡',
      skills: ['Product Development', 'SaaS', 'Digital Tools'],
      earning: '₹25,000-2,00,000/month',
      growth: 'Very High',
      opportunities: 'Own Products, SaaS, Digital Tools'
    }
  ];

  // Government Jobs Data
  const governmentJobs = [
    {
      title: 'NIC Technical Jobs',
      icon: '🏛️',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Technical Knowledge', 'Programming', 'System Administration'],
      growth: 'Prestigious government career',
      salary: '₹6-14 LPA'
    },
    {
      title: 'Railways IT Jobs',
      icon: '🚂',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['IT Infrastructure', 'Network Administration', 'Technical Support'],
      growth: 'Stable government sector',
      salary: '₹5-12 LPA'
    },
    {
      title: 'SSC Technical Support Jobs',
      icon: '📋',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Technical Support', 'Troubleshooting', 'Customer Service'],
      growth: 'Regular government recruitment',
      salary: '₹4-10 LPA'
    },
    {
      title: 'DRDO Technical Assistant',
      icon: '🛡️',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Technical Knowledge', 'Security Clearance', 'Defense Systems'],
      growth: 'Defense sector opportunities',
      salary: '₹7-16 LPA'
    },
    {
      title: 'ISRO Computer Technician',
      icon: '🚀',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Space Technology', 'Computer Systems', 'Technical Support'],
      growth: 'Space sector growth',
      salary: '₹8-18 LPA'
    },
    {
      title: 'Government Software Support Jobs',
      icon: '💻',
      eligibility: 'Diploma in Computer Science/IT',
      skills: ['Software Support', 'System Administration', 'Government IT'],
      growth: 'Essential government services',
      salary: '₹5-11 LPA'
    }
  ];

  // Industry Trends Data
  const industryTrends = [
    {
      title: 'Software Industry Growth',
      icon: '📈',
      growth: '18%',
      description: 'Rapid expansion of software development across all sectors',
      salaryImpact: '+20%',
      demand: 'Very High'
    },
    {
      title: 'Mobile App Market Expansion',
      icon: '📱',
      growth: '22%',
      description: 'Growing smartphone adoption and app ecosystem',
      salaryImpact: '+18%',
      demand: 'Very High'
    },
    {
      title: 'Startup Ecosystem Demand',
      icon: '🚀',
      growth: '25%',
      description: 'Thriving startup culture and innovation hubs',
      salaryImpact: '+25%',
      demand: 'Very High'
    },
    {
      title: 'Web Technology Trends',
      icon: '🌐',
      growth: '15%',
      description: 'Modern web frameworks and progressive web apps',
      salaryImpact: '+12%',
      demand: 'High'
    },
    {
      title: 'Full Stack Development Opportunities',
      icon: '🔧',
      growth: '20%',
      description: 'Demand for developers with both frontend and backend skills',
      salaryImpact: '+15%',
      demand: 'Very High'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={handleBack}
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
            <h1 className="text-4xl font-bold text-white">Software & App Development</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on programming, software engineering, app development, web technologies, and modern software careers after 10th grade.
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
          <span className="text-white font-medium">Software & App Development</span>
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
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            >
              <option value="all">All Courses</option>
              <option value="software">Software Development</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="programming">Programming</option>
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
                    <div className="flex justify-between"><span className="text-white/50">Coding Level:</span><span className="text-white/80">{course.codingLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">UI/UX Exposure:</span><span className="text-white/80">{course.uiuxExposure}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">App Dev Scope:</span><span className="text-white/80">{course.appDevScope}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Backend Dev:</span><span className="text-white/80">{course.backendDev}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Industry Demand:</span><span className="text-white/80">{course.industryDemand}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Freelancing:</span><span className="text-white/80">{course.freelancing}</span></div>
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
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Software Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Web Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Mobile App Development</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-sm">Programming & Application Engineering</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white/90 font-medium text-sm">{row.feature}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.softwareDev}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.webDev}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.mobileDev}</td>
                      <td className="px-4 py-3 text-white/80 text-sm text-center">{row.progEng}</td>
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">
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

export default SoftwareAppDevelopmentScreen;
