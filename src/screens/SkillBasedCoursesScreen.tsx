import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, TrendingUp, Award, Briefcase, Zap, Target, ChevronRight, Star, GraduationCap, Code, Database, Shield, Cloud, Cpu, Smartphone, Gamepad2, Palette, Wrench, Car, CircuitBoard, Building2, Scissors, Utensils, Sprout, HeartPulse, PenTool, Camera, DollarSign, BarChart3, ArrowUpRight, Users, BookOpen, Lightbulb, Rocket } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SkillStream {
  id: string;
  icon: any;
  emoji: string;
  title: string;
  description: string;
  popularSkills: string[];
  careerAreas: string[];
  color: string;
}

const computerScienceStreams: SkillStream[] = [
  {
    id: 'software-dev',
    icon: Code,
    emoji: '💻',
    title: 'Software & App Development',
    description: 'Learn programming, software engineering, coding fundamentals, and modern application development.',
    popularSkills: ['C Programming', 'Python', 'Java', 'Flutter'],
    careerAreas: ['Software Developer', 'App Developer', 'Junior Programmer', 'Software Support'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'web-dev',
    icon: Code,
    emoji: '🌐',
    title: 'Web Development',
    description: 'Build websites and web applications using frontend and backend technologies.',
    popularSkills: ['HTML & CSS', 'JavaScript', 'React', 'Node.js'],
    careerAreas: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Designer'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'ai-ml',
    icon: Zap,
    emoji: '🤖',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Explore AI technologies, machine learning systems, automation, and intelligent applications.',
    popularSkills: ['Python for AI', 'Machine Learning', 'AI Tools', 'Data Modeling'],
    careerAreas: ['AI Assistant', 'ML Support Engineer', 'AI Developer'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'data-science',
    icon: Database,
    emoji: '📊',
    title: 'Data Science & Analytics',
    description: 'Learn data analysis, business intelligence, visualization, and analytics tools.',
    popularSkills: ['SQL', 'Excel Analytics', 'Power BI', 'Data Visualization'],
    careerAreas: ['Data Analyst', 'BI Analyst', 'Reporting Executive'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    emoji: '🔒',
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Develop expertise in ethical hacking, cybersecurity, penetration testing, and network security.',
    popularSkills: ['Ethical Hacking', 'Kali Linux', 'Security Testing', 'Network Security'],
    careerAreas: ['Cybersecurity Analyst', 'Ethical Hacker', 'Security Engineer'],
    color: 'from-red-500 to-rose-600'
  },
  {
    id: 'networking-cloud',
    icon: Cloud,
    emoji: '☁️',
    title: 'Networking & Cloud Computing',
    description: 'Learn cloud platforms, networking systems, server management, and IT infrastructure.',
    popularSkills: ['Networking Basics', 'Cisco', 'AWS Cloud', 'Server Administration'],
    careerAreas: ['Network Engineer', 'Cloud Support Engineer', 'System Administrator'],
    color: 'from-indigo-500 to-violet-600'
  },
  {
    id: 'hardware-it',
    icon: Cpu,
    emoji: '🖥️',
    title: 'Computer Hardware & IT Support',
    description: 'Learn computer repair, troubleshooting, hardware maintenance, and IT support systems.',
    popularSkills: ['Hardware Repair', 'Troubleshooting', 'OS Installation', 'LAN Setup'],
    careerAreas: ['Hardware Technician', 'IT Support Executive', 'Computer Operator'],
    color: 'from-gray-500 to-slate-600'
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    emoji: '📱',
    title: 'Mobile App Development',
    description: 'Develop Android and iOS applications using modern frameworks and mobile technologies.',
    popularSkills: ['Android Studio', 'Flutter', 'React Native', 'Firebase'],
    careerAreas: ['Android Developer', 'Mobile App Developer', 'App Tester'],
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: 'game-dev',
    icon: Gamepad2,
    emoji: '🎮',
    title: 'Game Development',
    description: 'Build interactive games using animation, game engines, and programming technologies.',
    popularSkills: ['Unity', 'Unreal Engine', 'C#', 'Game Animation'],
    careerAreas: ['Game Developer', 'Game Designer', '3D Artist'],
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'ui-ux',
    icon: Palette,
    emoji: '🎨',
    title: 'UI/UX Design',
    description: 'Create engaging digital experiences with interface design and user experience principles.',
    popularSkills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'],
    careerAreas: ['UI Designer', 'UX Designer', 'Product Designer'],
    color: 'from-violet-500 to-purple-600'
  }
];

const vocationalStreams: SkillStream[] = [
  {
    id: 'electrical',
    icon: Zap,
    emoji: '⚡',
    title: 'Electrical Skills',
    description: 'Learn electrical systems, industrial wiring, automation, and power technologies.',
    popularSkills: ['Electrical Wiring', 'Solar Systems', 'Automation Basics', 'Industrial Electrical'],
    careerAreas: ['Electrician', 'Electrical Technician', 'Solar Technician', 'Maintenance Support'],
    color: 'from-yellow-500 to-amber-600'
  },
  {
    id: 'mechanical',
    icon: Wrench,
    emoji: '🛠️',
    title: 'Mechanical & Manufacturing Skills',
    description: 'Build technical expertise in manufacturing systems, machine operations, and fabrication technologies.',
    popularSkills: ['Welding', 'CNC Operation', 'Machine Maintenance', 'Fabrication'],
    careerAreas: ['CNC Operator', 'Mechanical Technician', 'Machine Operator'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'automobile',
    icon: Car,
    emoji: '🚗',
    title: 'Automobile Skills',
    description: 'Explore vehicle maintenance, EV systems, diagnostics, and workshop technologies.',
    popularSkills: ['Engine Repair', 'Vehicle Diagnostics', 'EV Maintenance', 'Workshop Operations'],
    careerAreas: ['Automobile Technician', 'EV Technician', 'Service Advisor'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'electronics',
    icon: CircuitBoard,
    emoji: '📡',
    title: 'Electronics & Hardware Skills',
    description: 'Develop skills in embedded systems, mobile repair, communication systems, and PCB technologies.',
    popularSkills: ['PCB Design', 'Embedded Systems', 'Mobile Repair', 'Hardware Support'],
    careerAreas: ['Electronics Technician', 'Repair Technician', 'Embedded Support'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'civil',
    icon: Building2,
    emoji: '🏗️',
    title: 'Civil & Construction Skills',
    description: 'Learn construction planning, surveying, drafting, and infrastructure technologies.',
    popularSkills: ['AutoCAD', 'Surveying', 'Drafting', 'Site Planning'],
    careerAreas: ['Civil Technician', 'Site Supervisor', 'Draftsman'],
    color: 'from-stone-500 to-zinc-600'
  },
  {
    id: 'fashion',
    icon: Scissors,
    emoji: '👗',
    title: 'Fashion & Beauty Skills',
    description: 'Build creative careers in tailoring, beauty services, makeup, and fashion industries.',
    popularSkills: ['Tailoring', 'Makeup Artistry', 'Hair Styling', 'Fashion Design'],
    careerAreas: ['Beautician', 'Hair Stylist', 'Fashion Assistant'],
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'hospitality',
    icon: Utensils,
    emoji: '🍳',
    title: 'Hospitality & Tourism Skills',
    description: 'Explore food production, bakery, tourism, customer service, and hotel management skills.',
    popularSkills: ['Bakery', 'Food Production', 'Front Office', 'Tourism Services'],
    careerAreas: ['Chef Assistant', 'Hotel Staff', 'Tourism Executive'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'agriculture',
    icon: Sprout,
    emoji: '🌾',
    title: 'Agriculture & Farming Skills',
    description: 'Learn modern farming, irrigation systems, dairy technology, and sustainable agriculture.',
    popularSkills: ['Organic Farming', 'Dairy Management', 'Irrigation Systems', 'Agri Technology'],
    careerAreas: ['Agriculture Technician', 'Farm Supervisor', 'Dairy Technician'],
    color: 'from-green-500 to-lime-600'
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    emoji: '🏥',
    title: 'Healthcare & Paramedical Skills',
    description: 'Explore healthcare support, diagnostics, patient care, and medical laboratory technologies.',
    popularSkills: ['First Aid', 'Patient Care', 'Lab Assistance', 'Nursing Basics'],
    careerAreas: ['Healthcare Assistant', 'Lab Assistant', 'Patient Care Support'],
    color: 'from-red-500 to-rose-600'
  },
  {
    id: 'design',
    icon: PenTool,
    emoji: '🎨',
    title: 'Design & Creative Skills',
    description: 'Build careers in graphic design, animation, illustration, and digital creativity.',
    popularSkills: ['Graphic Design', 'Animation', 'Illustration', 'Motion Graphics'],
    careerAreas: ['Graphic Designer', 'Animator', 'Creative Assistant'],
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 'media',
    icon: Camera,
    emoji: '📷',
    title: 'Media & Digital Content Skills',
    description: 'Learn photography, video editing, social media marketing, and content creation.',
    popularSkills: ['Video Editing', 'Photography', 'Social Media Marketing', 'Content Creation'],
    careerAreas: ['Video Editor', 'Content Creator', 'Photographer'],
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'business',
    icon: Briefcase,
    emoji: '📈',
    title: 'Business & Entrepreneurship Skills',
    description: 'Develop startup, e-commerce, business management, and entrepreneurship skills.',
    popularSkills: ['Marketing', 'E-Commerce', 'Startup Planning', 'Business Management'],
    careerAreas: ['Entrepreneur', 'Business Executive', 'Store Manager'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'finance',
    icon: DollarSign,
    emoji: '💰',
    title: 'Finance & Accounting Skills',
    description: 'Learn accounting, taxation, banking operations, and financial technologies.',
    popularSkills: ['Tally', 'GST Basics', 'Accounting', 'Banking Operations'],
    careerAreas: ['Accounts Assistant', 'Finance Executive', 'Banking Support'],
    color: 'from-teal-500 to-cyan-600'
  }
];

const features = [
  { icon: Target, title: 'Practical Hands-On Training', description: 'Learn by doing with real-world projects' },
  { icon: Award, title: 'Industry Certifications', description: 'Get recognized certifications from top organizations' },
  { icon: GraduationCap, title: 'Government Skill Programs', description: 'Skill India, PMKVY, and other government initiatives' },
  { icon: Briefcase, title: 'Freelancing Opportunities', description: 'Start earning while learning with freelance projects' },
  { icon: Users, title: 'Internship Support', description: 'Get placed in top companies for internships' },
  { icon: Rocket, title: 'Startup & Entrepreneurship', description: 'Build your own business with startup support' },
  { icon: TrendingUp, title: 'High Salary Careers', description: 'Access high-paying job opportunities' },
  { icon: Lightbulb, title: 'Future Technology Skills', description: 'Stay ahead with cutting-edge technologies' },
  { icon: Zap, title: 'AI & Automation Careers', description: 'Prepare for the AI-driven future' },
  { icon: Cloud, title: 'Remote Work Opportunities', description: 'Work from anywhere with remote-ready skills' }
];

const popularCareers = [
  { title: 'Software Developer', salary: '₹3-20 LPA', demand: 'Very High', skills: ['Python', 'Java', 'React'], growth: 'Rapid' },
  { title: 'Web Developer', salary: '₹2-15 LPA', demand: 'Very High', skills: ['HTML/CSS', 'JavaScript', 'React'], growth: 'Rapid' },
  { title: 'Cybersecurity Analyst', salary: '₹4-25 LPA', demand: 'Very High', skills: ['Ethical Hacking', 'Network Security'], growth: 'Rapid' },
  { title: 'Cloud Engineer', salary: '₹5-30 LPA', demand: 'Very High', skills: ['AWS', 'Azure', 'DevOps'], growth: 'Expanding' },
  { title: 'Electrician', salary: '₹2-8 LPA', demand: 'High', skills: ['Wiring', 'Troubleshooting'], growth: 'Growing' },
  { title: 'CNC Operator', salary: '₹2-10 LPA', demand: 'High', skills: ['CNC', 'Machine Operation'], growth: 'Stable' },
  { title: 'Automobile Technician', salary: '₹2-12 LPA', demand: 'High', skills: ['Engine Repair', 'EV Systems'], growth: 'EV Growth' },
  { title: 'UI/UX Designer', salary: '₹3-18 LPA', demand: 'High', skills: ['Figma', 'Adobe XD'], growth: 'Rapid' },
  { title: 'Graphic Designer', salary: '₹2-12 LPA', demand: 'High', skills: ['Photoshop', 'Illustrator'], growth: 'Growing' },
  { title: 'Chef Assistant', salary: '₹2-8 LPA', demand: 'High', skills: ['Cooking', 'Food Safety'], growth: 'Growing' },
  { title: 'Agriculture Technician', salary: '₹2-10 LPA', demand: 'Stable', skills: ['Farming', 'Irrigation'], growth: 'Modernization' },
  { title: 'Healthcare Assistant', salary: '₹2-10 LPA', demand: 'Very High', skills: ['Patient Care', 'First Aid'], growth: 'Rapid' }
];

const industryDemand = [
  { industry: 'Software Development', demand: 'Very High', growth: 'Rapid' },
  { industry: 'AI & Machine Learning', demand: 'Explosive', growth: 'Future Growth' },
  { industry: 'Cybersecurity', demand: 'Very High', growth: 'Rapid' },
  { industry: 'Cloud Computing', demand: 'Very High', growth: 'Expanding' },
  { industry: 'Electrical', demand: 'High', growth: 'Growing' },
  { industry: 'Mechanical', demand: 'High', growth: 'Stable' },
  { industry: 'Automobile', demand: 'High', growth: 'EV Growth' },
  { industry: 'Healthcare', demand: 'Very High', growth: 'Rapid' },
  { industry: 'Construction', demand: 'High', growth: 'Growing' },
  { industry: 'Agriculture', demand: 'Stable', growth: 'Modernization' }
];

const certifications = [
  { name: 'Skill India', eligibility: '10th Pass', benefits: 'Government recognized skill training', opportunities: 'Government & Private Jobs' },
  { name: 'PMKVY', eligibility: '10th Pass', benefits: 'Free skill training with certification', opportunities: 'Industry Placements' },
  { name: 'NIELIT Certifications', eligibility: '10th/12th Pass', benefits: 'Government IT certifications', opportunities: 'Government IT Jobs' },
  { name: 'AICTE Skill Programs', eligibility: '10th/12th Pass', benefits: 'Technical skill development', opportunities: 'Technical Careers' },
  { name: 'Google Certifications', eligibility: 'No formal education', benefits: 'Industry-recognized digital skills', opportunities: 'Tech Companies' },
  { name: 'Microsoft Certifications', eligibility: 'No formal education', benefits: 'Microsoft technology expertise', opportunities: 'IT Companies' },
  { name: 'Cisco Networking Certifications', eligibility: '10th/12th Pass', benefits: 'Networking expertise', opportunities: 'Network Engineer' },
  { name: 'AWS Cloud Certifications', eligibility: 'No formal education', benefits: 'Cloud computing skills', opportunities: 'Cloud Engineer' }
];

const careerRoadmaps = [
  {
    title: 'Software Pathway',
    icon: Code,
    color: 'from-blue-500 to-cyan-600',
    steps: ['10th', 'Programming', 'Web/App Development', 'Software Engineer']
  },
  {
    title: 'Cybersecurity Pathway',
    icon: Shield,
    color: 'from-red-500 to-rose-600',
    steps: ['10th', 'Networking', 'Ethical Hacking', 'Security Analyst']
  },
  {
    title: 'Electrical Pathway',
    icon: Zap,
    color: 'from-yellow-500 to-amber-600',
    steps: ['10th', 'ITI Electrical', 'Technician', 'Supervisor']
  },
  {
    title: 'Healthcare Pathway',
    icon: HeartPulse,
    color: 'from-pink-500 to-rose-600',
    steps: ['10th', 'Healthcare Training', 'Lab Assistant', 'Medical Support']
  },
  {
    title: 'Design Pathway',
    icon: Palette,
    color: 'from-purple-500 to-violet-600',
    steps: ['10th', 'Graphic Design', 'UI/UX', 'Creative Designer']
  }
];

export default function SkillBasedCoursesScreen() {
  const { setScreen, setSelectedVocationalStream, setPreviousScreen } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const handleComputerScienceStreamClick = (streamId: string) => {
    const screenMapping: Record<string, string> = {
      'software-dev': 'software_app_development',
      'web-dev': 'ui_ux_web_technologies',
      'ai-ml': 'ai_data_science_iot',
      'data-science': 'ai_data_science_iot',
      'cybersecurity': 'networking_cloud_cybersecurity',
      'networking-cloud': 'networking_cloud_cybersecurity',
      'hardware-it': 'vocational_iti',
      'mobile-dev': 'software_app_development',
      'game-dev': 'game_development_multimedia',
      'ui-ux': 'ui_ux_web_design'
    };
    const targetScreen = screenMapping[streamId];
    if (targetScreen) {
      setPreviousScreen('skill_based_courses');
      setScreen(targetScreen as any);
    }
  };

  const handleVocationalStreamClick = (streamId: string) => {
    setSelectedVocationalStream(streamId);
    setPreviousScreen('skill_based_courses');
    setScreen('vocational_career_path');
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Explosive': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Stable': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case 'Rapid': return 'text-green-400';
      case 'Expanding': return 'text-blue-400';
      case 'Future Growth': return 'text-purple-400';
      case 'Growing': return 'text-cyan-400';
      case 'EV Growth': return 'text-emerald-400';
      case 'Stable': return 'text-yellow-400';
      case 'Modernization': return 'text-teal-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setScreen('career_dashboard')}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('home')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Skill-Based Courses</span>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-500/30">
              <Target className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skill-Based Courses
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Explore industry-focused skill development courses, vocational training, computer science programs, and future-ready technology careers designed for students after 10th grade.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Search skills, careers, or courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-500/50 transition-all text-lg"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-500/30">
              Explore Skills
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/30 transition-all">
              Compare Careers
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/30 transition-all">
              Find Your Path
            </button>
          </div>
        </motion.div>

        {/* Hero Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {[
            { icon: BookOpen, value: '100+', label: 'Skill Courses' },
            { icon: Target, value: '50+', label: 'Career Pathways' },
            { icon: Award, value: 'Govt', label: 'Certifications' },
            { icon: TrendingUp, value: 'High', label: 'Demand' },
            { icon: Briefcase, value: 'Freelance', label: 'Opportunities' },
            { icon: Users, value: 'Internship', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all"
            >
              <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Skill-Based Courses?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all"
              >
                <feature.icon className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-white/60 text-xs">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Computer Science & IT Streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💻</span>
            Computer Science & IT Streams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {computerScienceStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center text-2xl`}>
                    {stream.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{stream.title}</h3>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{stream.description}</p>
                
                <div className="mb-4">
                  <span className="text-white/50 text-xs mb-2 block">Popular Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {stream.popularSkills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-white/50 text-xs mb-2 block">Career Areas</span>
                  <div className="flex flex-wrap gap-2">
                    {stream.careerAreas.slice(0, 2).map((area, idx) => (
                      <span key={idx} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-lg border border-emerald-500/30">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleComputerScienceStreamClick(stream.id)}
                  className="w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all text-sm"
                >
                  Explore Career Path
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vocational & Skill-Based Streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚙️</span>
            Vocational & Skill-Based Streams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocationalStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.03 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center text-2xl`}>
                    {stream.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{stream.title}</h3>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{stream.description}</p>
                
                <div className="mb-4">
                  <span className="text-white/50 text-xs mb-2 block">Popular Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {stream.popularSkills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-lg border border-amber-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-white/50 text-xs mb-2 block">Career Areas</span>
                  <div className="flex flex-wrap gap-2">
                    {stream.careerAreas.slice(0, 2).map((area, idx) => (
                      <span key={idx} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-lg border border-emerald-500/30">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleVocationalStreamClick(stream.id)}
                  className="w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all text-sm"
                >
                  Explore Career Path
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-emerald-400" />
              Advanced Filters
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500/50">
                <option value="">Industry</option>
                <option value="it">IT & Software</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
              </select>
              <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500/50">
                <option value="">Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500/50">
                <option value="">Level</option>
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
              </select>
              <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500/50">
                <option value="">Duration</option>
                <option value="short">Short-term</option>
                <option value="long">Long-term</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Popular Career Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-emerald-400" />
            Popular Career Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularCareers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-emerald-500/30 transition-all"
              >
                <h3 className="text-white font-semibold mb-2">{career.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-white/80 text-sm">{career.salary}</span>
                </div>
                <div className={`px-2 py-1 rounded text-xs mb-2 inline-block ${getDemandColor(career.demand)}`}>
                  {career.demand} Demand
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <ArrowUpRight className={`w-3 h-3 ${getGrowthColor(career.growth)}`} />
                  <span className={`text-xs ${getGrowthColor(career.growth)}`}>{career.growth}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {career.skills.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white/10 text-white/70 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Demand Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-emerald-400" />
            Industry Demand Dashboard
          </h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white font-semibold py-3 px-4">Industry</th>
                  <th className="text-left text-white font-semibold py-3 px-4">Demand</th>
                  <th className="text-left text-white font-semibold py-3 px-4">Growth</th>
                  <th className="text-left text-white font-semibold py-3 px-4">Trend</th>
                </tr>
              </thead>
              <tbody>
                {industryDemand.map((item, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="text-white py-3 px-4">{item.industry}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-lg text-sm ${getDemandColor(item.demand)}`}>
                        {item.demand}
                      </span>
                    </td>
                    <td className={`py-3 px-4 ${getGrowthColor(item.growth)}`}>{item.growth}</td>
                    <td className="py-3 px-4">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: item.demand === 'Explosive' ? '100%' : item.demand === 'Very High' ? '90%' : item.demand === 'High' ? '70%' : '50%' }}
                          transition={{ delay: 2.9 + index * 0.05, duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Certification & Government Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-400" />
            Certification & Government Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.1 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-emerald-500/30 transition-all"
              >
                <h3 className="text-white font-semibold mb-3">{cert.name}</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility:</span>
                    <p className="text-white/80 text-sm">{cert.eligibility}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Benefits:</span>
                    <p className="text-white/80 text-sm">{cert.benefits}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Opportunities:</span>
                    <p className="text-white/80 text-sm">{cert.opportunities}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-emerald-400" />
            Career Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {careerRoadmaps.map((roadmap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4.0 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${roadmap.color} flex items-center justify-center`}>
                    <roadmap.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{roadmap.title}</h3>
                </div>
                <div className="space-y-3">
                  {roadmap.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${roadmap.color} flex items-center justify-center text-white text-xs font-bold`}>
                        {stepIndex + 1}
                      </div>
                      <span className="text-white/80 text-sm">{step}</span>
                      {stepIndex < roadmap.steps.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-white/30" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-600/20 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Skill Journey?</h2>
            <p className="text-white/70 text-lg mb-6">Choose from 100+ skill courses and build your dream career</p>
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-500/30">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
