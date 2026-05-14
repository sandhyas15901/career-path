import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Users, Train, Mail, Building, Gavel, Trees, HeartPulse, Wrench, Landmark, GraduationCap, Star, Clock, Award, Briefcase, ChevronRight, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useState } from 'react';

interface GovernmentExam {
  id: string;
  category: string;
  categoryIcon: any;
  categoryColor: string;
  examName: string;
  department?: string;
  eligibility: string;
  conducted: string;
  benefits: string[];
  roles: string[];
  fullForm?: string;
}

const governmentExamsData: GovernmentExam[] = [
  // POLICE & SECURITY EXAMS
  {
    id: 'ssc-gd',
    category: 'Police & Security',
    categoryIcon: Shield,
    categoryColor: 'from-blue-500 to-indigo-600',
    examName: 'SSC GD Constable',
    department: 'BSF, CISF, CRPF, ITBP, SSB, Assam Rifles',
    eligibility: '10th Pass',
    conducted: 'Usually between November – February',
    benefits: ['Central Government Job', 'Good salary with allowances', 'Pension benefits', 'Job security', 'Medical facilities', 'Promotion opportunities'],
    roles: ['Constable', 'Security Forces Personnel']
  },
  {
    id: 'state-police',
    category: 'Police & Security',
    categoryIcon: Shield,
    categoryColor: 'from-blue-500 to-indigo-600',
    examName: 'State Police Constable Exam',
    eligibility: '10th / 12th Pass (depends on state)',
    conducted: 'Different dates for each state',
    benefits: ['State government job', 'Uniform service', 'Promotion to SI/Inspector', 'Stable income'],
    roles: ['Police Constable', 'Armed Police', 'Traffic Police']
  },
  {
    id: 'rpf-constable',
    category: 'Police & Security',
    categoryIcon: Shield,
    categoryColor: 'from-blue-500 to-indigo-600',
    examName: 'RPF Constable',
    department: 'Railway Protection Force',
    eligibility: '10th Pass',
    conducted: 'Based on Railway Recruitment notifications',
    benefits: ['Railway department job', 'Travel benefits', 'Government quarters', 'Pension'],
    roles: ['Railway Security', 'Passenger Protection']
  },
  {
    id: 'forest-guard',
    category: 'Police & Security',
    categoryIcon: Shield,
    categoryColor: 'from-blue-500 to-indigo-600',
    examName: 'Forest Guard Exam',
    eligibility: '10th / 12th Pass',
    conducted: 'State-wise notifications',
    benefits: ['Outdoor government job', 'Wildlife protection career', 'Pension and allowances'],
    roles: ['Forest Guard', 'Wildlife Guard']
  },
  // DEFENCE EXAMS
  {
    id: 'army-agniveer-gd',
    category: 'Defence',
    categoryIcon: Users,
    categoryColor: 'from-orange-500 to-red-600',
    examName: 'Indian Army Agniveer GD',
    eligibility: '10th Pass',
    conducted: 'Usually yearly recruitment rallies',
    benefits: ['Defence career', 'Salary and allowances', 'Skill training', 'Discipline and fitness', 'Seva Nidhi package after service'],
    roles: ['Soldier GD', 'Army Personnel']
  },
  {
    id: 'army-agniveer-tradesman',
    category: 'Defence',
    categoryIcon: Users,
    categoryColor: 'from-orange-500 to-red-600',
    examName: 'Indian Army Agniveer Tradesman',
    eligibility: '8th / 10th Pass',
    conducted: 'Yearly recruitment',
    benefits: ['Technical army training', 'Government benefits', 'Skill development'],
    roles: ['Tradesman', 'Technical Support Staff']
  },
  {
    id: 'navy-agniveer-mr',
    category: 'Defence',
    categoryIcon: Users,
    categoryColor: 'from-orange-500 to-red-600',
    examName: 'Indian Navy Agniveer MR',
    eligibility: '10th Pass',
    conducted: 'Usually twice a year',
    benefits: ['Navy career', 'Free food and accommodation', 'Travel opportunities', 'Medical benefits'],
    roles: ['Chef', 'Steward', 'Hygienist']
  },
  {
    id: 'airforce-agniveer',
    category: 'Defence',
    categoryIcon: Users,
    categoryColor: 'from-orange-500 to-red-600',
    examName: 'Indian Air Force Agniveer Vayu',
    eligibility: '10th + Diploma / 12th',
    conducted: 'Based on Air Force notifications',
    benefits: ['High respect job', 'Technical training', 'Good salary', 'Air Force facilities'],
    roles: ['Airman', 'Technical Staff']
  },
  {
    id: 'coast-guard',
    category: 'Defence',
    categoryIcon: Users,
    categoryColor: 'from-orange-500 to-red-600',
    examName: 'Coast Guard Navik',
    eligibility: '10th / 12th Pass',
    conducted: 'Yearly',
    benefits: ['Sea service career', 'Central government benefits', 'Adventure and travel'],
    roles: ['Navik', 'Coast Guard Staff']
  },
  // RAILWAY EXAMS
  {
    id: 'rrb-group-d',
    category: 'Railways',
    categoryIcon: Train,
    categoryColor: 'from-green-500 to-emerald-600',
    examName: 'RRB Group D',
    eligibility: '10th Pass / ITI',
    conducted: 'Based on Railway Recruitment Board notifications',
    benefits: ['Railway government job', 'Travel concessions', 'Pension benefits', 'Medical facilities'],
    roles: ['Track Maintainer', 'Helper', 'Assistant', 'Pointsman']
  },
  {
    id: 'alp',
    category: 'Railways',
    categoryIcon: Train,
    categoryColor: 'from-green-500 to-emerald-600',
    examName: 'Assistant Loco Pilot (ALP)',
    eligibility: 'ITI / Diploma',
    conducted: 'Railway recruitment cycle',
    benefits: ['High salary', 'Railway allowances', 'Technical career growth'],
    roles: ['Assistant Train Driver']
  },
  {
    id: 'railway-apprentice',
    category: 'Railways',
    categoryIcon: Train,
    categoryColor: 'from-green-500 to-emerald-600',
    examName: 'Railway Apprentice',
    eligibility: '10th + ITI',
    conducted: 'Different railway zones release notifications yearly',
    benefits: ['Skill training', 'Experience certificate', 'Better government job opportunities'],
    roles: ['Apprentice Technician']
  },
  // POST OFFICE EXAMS
  {
    id: 'gds',
    category: 'Post Office',
    categoryIcon: Mail,
    categoryColor: 'from-amber-500 to-orange-600',
    examName: 'India Post GDS',
    eligibility: '10th Pass',
    conducted: 'Multiple times a year',
    benefits: ['Easy recruitment process', 'Government salary', 'Rural service opportunity', 'Flexible work environment'],
    roles: ['Branch Postmaster', 'Assistant Branch Postmaster', 'Dak Sevak']
  },
  // SSC EXAMS
  {
    id: 'ssc-mts',
    category: 'SSC',
    categoryIcon: Building,
    categoryColor: 'from-purple-500 to-violet-600',
    examName: 'SSC MTS',
    fullForm: 'Staff Selection Commission Multi Tasking Staff',
    eligibility: '10th Pass',
    conducted: 'Usually yearly',
    benefits: ['Central government office job', 'Fixed working hours', 'Promotion opportunities', 'Job security'],
    roles: ['Peon', 'Office Staff', 'Clerk Support']
  },
  {
    id: 'ssc-havaldar',
    category: 'SSC',
    categoryIcon: Building,
    categoryColor: 'from-purple-500 to-violet-600',
    examName: 'SSC Havaldar',
    eligibility: '10th Pass',
    conducted: 'Along with SSC MTS',
    benefits: ['Government uniform service', 'Salary and pension'],
    roles: ['Havildar']
  },
  // COURT & JUDICIARY EXAMS
  {
    id: 'court-attendant',
    category: 'Court & Judiciary',
    categoryIcon: Gavel,
    categoryColor: 'from-rose-500 to-pink-600',
    examName: 'Court Attendant',
    eligibility: '10th Pass',
    conducted: 'High Court / District Court notifications',
    benefits: ['Government office environment', 'Stable income', 'Pension benefits'],
    roles: ['Office Attendant', 'Court Support Staff']
  },
  {
    id: 'junior-assistant',
    category: 'Court & Judiciary',
    categoryIcon: Gavel,
    categoryColor: 'from-rose-500 to-pink-600',
    examName: 'Junior Assistant',
    eligibility: '10th / 12th / Degree',
    conducted: 'State government recruitment',
    benefits: ['Administrative office work', 'Career growth', 'Government benefits'],
    roles: ['Assistant', 'Clerk']
  },
  // FOREST & ENVIRONMENT EXAMS
  {
    id: 'wildlife-guard',
    category: 'Forest & Environment',
    categoryIcon: Trees,
    categoryColor: 'from-green-500 to-lime-600',
    examName: 'Wildlife Guard',
    eligibility: '10th Pass',
    conducted: 'State forest recruitment',
    benefits: ['Nature-based career', 'Government salary', 'Outdoor work'],
    roles: ['Wildlife Protection Staff']
  },
  // HEALTHCARE GOVERNMENT JOBS
  {
    id: 'nursing-assistant',
    category: 'Healthcare',
    categoryIcon: HeartPulse,
    categoryColor: 'from-red-500 to-rose-600',
    examName: 'Nursing Assistant',
    eligibility: '10th / 12th + Nursing Training',
    conducted: 'Hospital recruitment notifications',
    benefits: ['Healthcare career', 'Government hospital job', 'Stable employment'],
    roles: ['Nursing Assistant', 'Hospital Support Staff']
  },
  {
    id: 'lab-attendant',
    category: 'Healthcare',
    categoryIcon: HeartPulse,
    categoryColor: 'from-red-500 to-rose-600',
    examName: 'Lab Attendant',
    eligibility: '10th / 12th Pass',
    conducted: 'Medical department recruitment',
    benefits: ['Laboratory experience', 'Government benefits'],
    roles: ['Lab Support Staff']
  },
  // ITI & TECHNICAL GOVERNMENT JOBS
  {
    id: 'electrician-govt',
    category: 'ITI & Technical',
    categoryIcon: Wrench,
    categoryColor: 'from-cyan-500 to-blue-600',
    examName: 'Electrician Government Jobs',
    eligibility: 'ITI Electrician',
    conducted: 'PSU and department recruitment',
    benefits: ['Technical government career', 'High demand skill', 'Good salary'],
    roles: ['Electrician', 'Technician']
  },
  {
    id: 'fitter-govt',
    category: 'ITI & Technical',
    categoryIcon: Wrench,
    categoryColor: 'from-cyan-500 to-blue-600',
    examName: 'Fitter Government Jobs',
    eligibility: 'ITI Fitter',
    conducted: 'PSU recruitment cycles',
    benefits: ['Industrial government jobs', 'Promotion opportunities'],
    roles: ['Mechanical Technician']
  },
  {
    id: 'welder-govt',
    category: 'ITI & Technical',
    categoryIcon: Wrench,
    categoryColor: 'from-cyan-500 to-blue-600',
    examName: 'Welder Government Jobs',
    eligibility: 'ITI Welder',
    conducted: 'PSU / Railways recruitment',
    benefits: ['Technical trade career', 'Government allowances'],
    roles: ['Welder Technician']
  },
  // STATE GOVERNMENT EXAMS
  {
    id: 'vao',
    category: 'State Government',
    categoryIcon: Landmark,
    categoryColor: 'from-yellow-500 to-amber-600',
    examName: 'Village Administrative Officer (VAO)',
    eligibility: '10th / 12th Pass',
    conducted: 'State Public Service Commission notifications',
    benefits: ['Village administration career', 'Stable government salary'],
    roles: ['Village Officer']
  },
  {
    id: 'panchayat-assistant',
    category: 'State Government',
    categoryIcon: Landmark,
    categoryColor: 'from-yellow-500 to-amber-600',
    examName: 'Panchayat Assistant',
    eligibility: '10th Pass',
    conducted: 'Panchayat department recruitment',
    benefits: ['Local government job', 'Rural administration experience'],
    roles: ['Panchayat Staff']
  },
  // IMPORTANT ENTRANCE EXAMS AFTER 10TH
  {
    id: 'polytechnic',
    category: 'Entrance Exams',
    categoryIcon: GraduationCap,
    categoryColor: 'from-indigo-500 to-purple-600',
    examName: 'Polytechnic Entrance Exam (CET)',
    eligibility: '10th Pass',
    conducted: 'Every year by states',
    benefits: ['Diploma admission', 'Engineering pathways', 'Technical careers'],
    roles: ['Diploma Student', 'Engineering Pathway']
  },
  {
    id: 'iti-entrance',
    category: 'Entrance Exams',
    categoryIcon: GraduationCap,
    categoryColor: 'from-indigo-500 to-purple-600',
    examName: 'ITI Entrance Exam',
    eligibility: '10th Pass',
    conducted: 'State-wise',
    benefits: ['Skill-based technical training', 'Government trade careers'],
    roles: ['ITI Student', 'Technical Trade']
  },
  {
    id: 'neet',
    category: 'Entrance Exams',
    categoryIcon: GraduationCap,
    categoryColor: 'from-indigo-500 to-purple-600',
    examName: 'NEET',
    eligibility: '12th PCB',
    conducted: 'Every year',
    benefits: ['Medical admissions', 'Doctor career pathway'],
    roles: ['MBBS Student', 'Medical Professional']
  },
  {
    id: 'jee-main',
    category: 'Entrance Exams',
    categoryIcon: GraduationCap,
    categoryColor: 'from-indigo-500 to-purple-600',
    examName: 'JEE Main',
    eligibility: '12th PCM',
    conducted: 'Usually twice a year',
    benefits: ['Engineering admissions', 'IIT/NIT pathway'],
    roles: ['B.Tech Student', 'Engineering Professional']
  },
  {
    id: 'nda',
    category: 'Entrance Exams',
    categoryIcon: GraduationCap,
    categoryColor: 'from-indigo-500 to-purple-600',
    examName: 'NDA',
    fullForm: 'National Defence Academy',
    eligibility: '12th Pass',
    conducted: 'Twice every year',
    benefits: ['Officer-level defence career', 'High respect and salary', 'Leadership training'],
    roles: ['Army Officer', 'Navy Officer', 'Air Force Officer']
  }
];

const categories = [
  { name: 'All', icon: Star, color: 'from-gray-500 to-gray-600' },
  { name: 'Police & Security', icon: Shield, color: 'from-blue-500 to-indigo-600' },
  { name: 'Defence', icon: Users, color: 'from-orange-500 to-red-600' },
  { name: 'Railways', icon: Train, color: 'from-green-500 to-emerald-600' },
  { name: 'Post Office', icon: Mail, color: 'from-amber-500 to-orange-600' },
  { name: 'SSC', icon: Building, color: 'from-purple-500 to-violet-600' },
  { name: 'Court & Judiciary', icon: Gavel, color: 'from-rose-500 to-pink-600' },
  { name: 'Forest & Environment', icon: Trees, color: 'from-green-500 to-lime-600' },
  { name: 'Healthcare', icon: HeartPulse, color: 'from-red-500 to-rose-600' },
  { name: 'ITI & Technical', icon: Wrench, color: 'from-cyan-500 to-blue-600' },
  { name: 'State Government', icon: Landmark, color: 'from-yellow-500 to-amber-600' },
  { name: 'Entrance Exams', icon: GraduationCap, color: 'from-indigo-500 to-purple-600' }
];

export default function GovernmentExamsScreen() {
  const { setScreen } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryGroups = categories.filter(cat => cat.name !== 'All').map(cat => ({
    ...cat,
    exams: governmentExamsData.filter(exam => exam.category === cat.name)
  }));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setScreen('vocational_iti')}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('career_dashboard')}>Career Dashboard</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('vocational_iti')}>Vocational / ITI</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Government Exams</span>
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-orange-500/30">
              <Landmark className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🇮🇳 Complete Government Exams List in India
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive guide to government exams for 10th grade students including eligibility, benefits, career opportunities, and conducting periods.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search exams, eligibility, or roles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === cat.name
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/15'
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                    <span className="text-sm">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Best Exams After 10th */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-amber-400" />
            Best Government Exams After 10th
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {['SSC GD Constable', 'RRB Group D', 'India Post GDS', 'Police Constable', 'Army Agniveer GD'].map((examName, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-md border border-amber-500/30 rounded-xl p-4 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                <p className="text-white/90 text-sm font-medium">{examName}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exam Cards by Category */}
        <div className="space-y-12">
          {categoryGroups.map((group, groupIndex) => {
            const filteredGroupExams = group.exams.filter(exam => {
              const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
              const matchesSearch = exam.examName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                   exam.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
              return matchesCategory && matchesSearch;
            });

            if (filteredGroupExams.length === 0) return null;

            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + groupIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                    <GroupIcon className="w-5 h-5 text-white" />
                  </div>
                  {group.name} Exams
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {filteredGroupExams.map((exam, examIndex) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + groupIndex * 0.1 + examIndex * 0.05 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-amber-500/30 transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exam.categoryColor} flex items-center justify-center text-white flex-shrink-0`}>
                          <exam.categoryIcon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{exam.examName}</h3>
                          {exam.fullForm && (
                            <p className="text-white/60 text-sm mb-2">{exam.fullForm}</p>
                          )}
                          {exam.department && (
                            <p className="text-white/70 text-sm">{exam.department}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                          <Users className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white/50 text-xs">Eligibility</span>
                            <p className="text-white/90 text-sm">{exam.eligibility}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                          <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white/50 text-xs">Conducted</span>
                            <p className="text-white/90 text-sm">{exam.conducted}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-white/50 text-xs flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4" />
                          Benefits
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exam.benefits.map((benefit, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-lg border border-green-500/30">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-white/50 text-xs flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4" />
                          Career Roles
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exam.roles.map((role, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Important Note
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Government exam dates and eligibility may change every year according to official notifications released by SSC, UPSC, Railway Recruitment Board, State PSCs, Defence Recruitment Boards, India Post, and State Police Recruitment Boards. Always verify details from official government websites before applying.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
