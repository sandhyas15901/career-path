import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, TrendingUp, Target, Clock, Building, Briefcase, Zap, Brain, BarChart3, Search, Filter, GraduationCap, DollarSign, Users, Lightbulb, Rocket, BookOpen, FileText, Award as AwardIcon, Shield, Plane, Scale, Dumbbell, Stethoscope, Laptop, Wrench, Sprout, Palette } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CareerCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
  shortDescription: string;
  careerRoles: string[];
  growthAreas: string[];
}

interface IndustryDemand {
  sector: string;
  demand: string;
  growth: string;
  demandLevel: number;
}

interface CareerRoadmap {
  title: string;
  pathway: string[];
  icon: any;
  color: string;
}

const careerCategories: CareerCategory[] = [
  {
    id: 'medical',
    title: 'Medical & Healthcare Careers',
    icon: Stethoscope,
    color: 'from-red-500 to-rose-600',
    shortDescription: 'Explore careers in medicine, healthcare, diagnostics, nursing, pharmacy, and patient care services.',
    careerRoles: ['Doctor', 'Nurse', 'Pharmacist', 'Lab Technician', 'Healthcare Assistant'],
    growthAreas: ['Hospitals', 'Diagnostics', 'Telemedicine', 'Healthcare Technology']
  },
  {
    id: 'technology',
    title: 'Technology & Computer Science Careers',
    icon: Laptop,
    color: 'from-blue-500 to-cyan-600',
    shortDescription: 'Discover future-ready technology careers in software, AI, cybersecurity, cloud computing, and data science.',
    careerRoles: ['Software Engineer', 'AI Engineer', 'Cybersecurity Analyst', 'Data Scientist', 'Cloud Engineer'],
    growthAreas: ['AI Industry', 'Software Companies', 'Startups', 'Global Tech Careers']
  },
  {
    id: 'engineering',
    title: 'Engineering & Technical Careers',
    icon: Wrench,
    color: 'from-orange-500 to-amber-600',
    shortDescription: 'Build careers in core engineering, manufacturing, robotics, industrial systems, and technical innovation.',
    careerRoles: ['Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Robotics Engineer', 'Industrial Technician'],
    growthAreas: ['Manufacturing', 'Infrastructure', 'Automation', 'Smart Technologies']
  },
  {
    id: 'government',
    title: 'Government & Defence Careers',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    shortDescription: 'Explore stable and respected government careers through defence, police, railways, SSC, and public sector jobs.',
    careerRoles: ['Army Officer', 'Police Officer', 'Railway Officer', 'Government Staff', 'Defence Personnel'],
    growthAreas: ['Defence Services', 'Public Administration', 'Security Services', 'Government Departments']
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship Careers',
    icon: TrendingUp,
    color: 'from-purple-500 to-violet-600',
    shortDescription: 'Learn startup development, business management, digital business, finance, and entrepreneurship skills.',
    careerRoles: ['Entrepreneur', 'Business Analyst', 'Startup Founder', 'Marketing Executive', 'Finance Manager'],
    growthAreas: ['Startups', 'E-Commerce', 'Digital Business', 'Corporate Sector']
  },
  {
    id: 'creative',
    title: 'Creative & Design Careers',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    shortDescription: 'Build creative careers in graphic design, animation, UI/UX, multimedia, and digital arts.',
    careerRoles: ['Graphic Designer', 'Animator', 'UI/UX Designer', 'Video Editor', 'Creative Director'],
    growthAreas: ['Gaming', 'Advertising', 'Media Industry', 'Digital Branding']
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Environmental Careers',
    icon: Sprout,
    color: 'from-lime-500 to-green-600',
    shortDescription: 'Explore modern agriculture, agri-business, environmental science, food technology, and sustainability careers.',
    careerRoles: ['Agriculture Officer', 'Farm Manager', 'Dairy Technician', 'Environmental Scientist'],
    growthAreas: ['Agri-Tech', 'Organic Farming', 'Sustainability', 'Food Processing']
  },
  {
    id: 'aviation',
    title: 'Aviation, Travel & Hospitality Careers',
    icon: Plane,
    color: 'from-sky-500 to-blue-600',
    shortDescription: 'Discover careers in aviation, tourism, hotel management, customer experience, and travel services.',
    careerRoles: ['Pilot', 'Cabin Crew', 'Hotel Manager', 'Travel Consultant', 'Chef'],
    growthAreas: ['Airlines', 'Tourism Industry', 'Luxury Hospitality', 'Global Travel']
  },
  {
    id: 'law',
    title: 'Law & Public Service Careers',
    icon: Scale,
    color: 'from-indigo-500 to-purple-600',
    shortDescription: 'Build careers in law, judiciary, administration, public policy, and civil services.',
    careerRoles: ['Lawyer', 'Judge', 'Civil Servant', 'Legal Advisor', 'Public Administrator'],
    growthAreas: ['Judiciary', 'Government Services', 'Legal Firms', 'Public Administration']
  },
  {
    id: 'sports',
    title: 'Sports & Fitness Careers',
    icon: Dumbbell,
    color: 'from-orange-500 to-red-600',
    shortDescription: 'Explore careers in sports training, fitness coaching, sports science, wellness, and athletics.',
    careerRoles: ['Fitness Trainer', 'Sports Coach', 'Athlete', 'Nutritionist', 'Wellness Expert'],
    growthAreas: ['Sports Industry', 'Fitness Centers', 'Wellness Industry', 'Professional Sports']
  }
];

const industryDemands: IndustryDemand[] = [
  { sector: 'Artificial Intelligence', demand: 'Explosive', growth: 'Future Ready', demandLevel: 95 },
  { sector: 'Healthcare', demand: 'Very High', growth: 'Rapid', demandLevel: 90 },
  { sector: 'Cybersecurity', demand: 'Very High', growth: 'Expanding', demandLevel: 92 },
  { sector: 'Cloud Computing', demand: 'Very High', growth: 'Growing', demandLevel: 88 },
  { sector: 'Government Jobs', demand: 'Stable', growth: 'Competitive', demandLevel: 70 },
  { sector: 'Agriculture Technology', demand: 'Growing', growth: 'Modernization', demandLevel: 75 },
  { sector: 'Creative Design', demand: 'High', growth: 'Expanding', demandLevel: 82 },
  { sector: 'Renewable Energy', demand: 'High', growth: 'Future Growth', demandLevel: 85 },
  { sector: 'Robotics & Automation', demand: 'Explosive', growth: 'Advanced', demandLevel: 93 }
];

const careerRoadmaps: CareerRoadmap[] = [
  {
    title: 'Doctor Pathway',
    pathway: ['10th', 'PCB', 'NEET', 'MBBS', 'Doctor'],
    icon: Stethoscope,
    color: 'from-red-500 to-rose-600'
  },
  {
    title: 'Software Engineer Pathway',
    pathway: ['10th', 'PCM / Diploma', 'Programming', 'Degree', 'Software Engineer'],
    icon: Laptop,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Government Officer Pathway',
    pathway: ['10th', '12th / Degree', 'SSC / UPSC', 'Government Officer'],
    icon: Shield,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Entrepreneur Pathway',
    pathway: ['10th', 'Skill Development', 'Startup', 'Business Growth'],
    icon: Rocket,
    color: 'from-purple-500 to-violet-600'
  },
  {
    title: 'Designer Pathway',
    pathway: ['10th', 'Design Skills', 'Portfolio', 'Creative Industry'],
    icon: Palette,
    color: 'from-pink-500 to-rose-600'
  }
];

export default function CareerRoleScreen() {
  const { setScreen } = useApp();

  const handleBack = () => {
    setScreen('career_dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('career_dashboard')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('career_dashboard')}>Career Roles</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Future Planning</span>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-purple-500/30">
              <Target className="w-12 h-12" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Discover Your Dream Career Path
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/70 text-lg max-w-3xl mx-auto mb-8"
          >
            Through personalized career roles, future opportunities, skill development pathways, industry insights, and long-term professional planning after 10th grade.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Explore Career Roles
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-semibold hover:bg-white/15 transition-all flex items-center gap-2">
              <Target className="w-5 h-5" />
              Find My Career Path
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-semibold hover:bg-white/15 transition-all flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Compare Careers
            </button>
          </motion.div>

          {/* Hero Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          >
            {[
              { icon: Briefcase, label: '200+ Career Paths', color: 'text-purple-400' },
              { icon: BookOpen, label: '100+ Skill Programs', color: 'text-blue-400' },
              { icon: Building, label: 'Govt & Private', color: 'text-green-400' },
              { icon: Lightbulb, label: 'Industry Insights', color: 'text-yellow-400' },
              { icon: Brain, label: 'AI Suggestions', color: 'text-pink-400' },
              { icon: DollarSign, label: 'High Salary', color: 'text-emerald-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-white text-sm font-medium text-center">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search careers..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-all flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Salary
                </button>
                <button className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-all flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Govt/Private
                </button>
                <button className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition-all flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Future Demand
                </button>
                <button className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg border border-orange-500/30 hover:bg-orange-500/30 transition-all flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Duration
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Career Roles Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Roles Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <CategoryIcon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-white/60 text-sm">{category.shortDescription}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white/80 text-sm font-semibold mb-2">Career Roles</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.careerRoles.map((role, roleIdx) => (
                        <span key={roleIdx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white/80 text-sm font-semibold mb-2">Growth Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.growthAreas.map((area, areaIdx) => (
                        <span key={areaIdx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Career Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Compare Careers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { comparison: 'Engineering vs Medicine', icon: BarChart3 },
              { comparison: 'Government vs Private Jobs', icon: Building },
              { comparison: 'IT vs Core Engineering', icon: Laptop },
              { comparison: 'Design vs Business', icon: Palette },
              { comparison: 'Diploma vs Degree', icon: GraduationCap }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group"
              >
                <item.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{item.comparison}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>Salary Comparison</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Study Duration</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Future Demand</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Industry Demand Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Future Industry Demand</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white font-semibold py-3 px-4">Career Sector</th>
                  <th className="text-left text-white font-semibold py-3 px-4">Demand</th>
                  <th className="text-left text-white font-semibold py-3 px-4">Growth</th>
                  <th className="text-left text-white font-semibold py-3 px-4">Demand Level</th>
                </tr>
              </thead>
              <tbody>
                {industryDemands.map((industry, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="text-white py-3 px-4">{industry.sector}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        industry.demand === 'Explosive' ? 'bg-red-500/20 text-red-300' :
                        industry.demand === 'Very High' ? 'bg-orange-500/20 text-orange-300' :
                        industry.demand === 'High' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {industry.demand}
                      </span>
                    </td>
                    <td className="text-white/70 py-3 px-4">{industry.growth}</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${industry.demandLevel}%` }}
                          transition={{ delay: 2 + index * 0.1, duration: 0.8 }}
                          className={`h-2 rounded-full ${
                            industry.demandLevel >= 90 ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                            industry.demandLevel >= 80 ? 'bg-gradient-to-r from-orange-500 to-yellow-500' :
                            'bg-gradient-to-r from-green-500 to-blue-500'
                          }`}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Career Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerRoadmaps.map((roadmap, index) => {
              const RoadmapIcon = roadmap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9 + index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${roadmap.color} flex items-center justify-center text-white`}>
                      <RoadmapIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{roadmap.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {roadmap.pathway.map((step, stepIdx) => (
                      <React.Fragment key={stepIdx}>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg">{step}</span>
                        {stepIdx < roadmap.pathway.length - 1 && (
                          <ChevronRight className="w-4 h-4 text-white/50" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Career Preparation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Preparation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Competitive Exams', icon: FileText, level: 'High', duration: '6-12 months' },
              { title: 'Skill Development', icon: Zap, level: 'Medium', duration: '3-6 months' },
              { title: 'Certifications', icon: AwardIcon, level: 'Medium', duration: '1-3 months' },
              { title: 'Portfolio Building', icon: Briefcase, level: 'Medium', duration: '2-4 months' },
              { title: 'Communication Skills', icon: Users, level: 'Low', duration: '1-2 months' },
              { title: 'Internship Prep', icon: Building, level: 'Medium', duration: '2-3 months' },
              { title: 'Resume Building', icon: FileText, level: 'Low', duration: '1-2 weeks' },
              { title: 'Interview Skills', icon: Users, level: 'Medium', duration: '2-4 weeks' }
            ].map((prep, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1 + index * 0.05, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all"
              >
                <prep.icon className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">{prep.title}</h3>
                <div className="space-y-1">
                  <p className="text-white/60 text-xs">Level: <span className="text-white">{prep.level}</span></p>
                  <p className="text-white/60 text-xs">Duration: <span className="text-white">{prep.duration}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scholarship & Financial Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Scholarship & Financial Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Government Scholarships', icon: Building, benefit: 'Full/Partial Fee' },
              { title: 'Skill India Programs', icon: Zap, benefit: 'Free Training' },
              { title: 'PMKVY', icon: AwardIcon, benefit: 'Skill Certification' },
              { title: 'NSP Scholarships', icon: GraduationCap, benefit: 'Financial Aid' },
              { title: 'Minority Scholarships', icon: Users, benefit: 'Special Support' },
              { title: 'Student Loans', icon: DollarSign, benefit: 'Low Interest' },
              { title: 'Free Certifications', icon: BookOpen, benefit: 'No Cost' }
            ].map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <scholarship.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{scholarship.title}</h3>
                <p className="text-white/60 text-sm">Benefit: <span className="text-green-300">{scholarship.benefit}</span></p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Rahul Sharma', career: 'Software Engineer', salary: '₹25 LPA', story: 'From diploma to tech giant' },
              { name: 'Priya Patel', career: 'Doctor', salary: '₹18 LPA', story: 'MBBS through government scholarship' },
              { name: 'Amit Kumar', career: 'IAS Officer', salary: 'Government', story: 'UPSC success story' },
              { name: 'Sneha Reddy', career: 'Startup Founder', salary: '₹50 LPA+', story: 'Built unicorn startup' },
              { name: 'Vikram Singh', career: 'Data Scientist', salary: '₹30 LPA', story: 'IT to AI transition' },
              { name: 'Anjali Gupta', career: 'Fashion Designer', salary: '₹15 LPA', story: 'Creative career success' }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.3 + index * 0.1, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{story.name}</h3>
                    <p className="text-white/60 text-sm">{story.career}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{story.salary}</span>
                </div>
                <p className="text-white/70 text-sm">{story.story}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
