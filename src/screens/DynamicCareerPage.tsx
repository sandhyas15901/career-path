import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, GraduationCap, Briefcase, DollarSign, Building2, Users, Zap, Award, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import NavBar from '../components/ui/NavBar';

interface CareerData {
  name: string;
  icon: string;
  gradient: string;
  overview: string;
  skills: string[];
  courses: string[];
  roadmap: { step: string; description: string }[];
  salary: { entry: string; mid: string; senior: string };
  colleges: string[];
  jobs: string[];
  futureScope: string;
  relatedCareers: string[];
}

const careerDatabase: Record<string, CareerData> = {
  'fitness-sports': {
    name: 'Fitness & Sports',
    icon: '🏃',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    overview: 'A career in Fitness & Sports combines passion for physical activity with professional opportunities in training, coaching, sports management, and wellness. This field offers diverse pathways from personal training to sports therapy.',
    skills: [
      'Physical fitness and exercise science',
      'Nutrition and diet planning',
      'Communication and motivation',
      'First aid and injury prevention',
      'Business management',
      'Sports psychology basics',
      'Customer service',
      'Time management'
    ],
    courses: [
      'Bachelor in Physical Education (B.P.Ed)',
      'Diploma in Fitness and Nutrition',
      'Certified Personal Trainer (CPT)',
      'Sports Management Certification',
      'Yoga Instructor Certification',
      'Sports Science Degree',
      'Physiotherapy Degree',
      'Sports Psychology Course'
    ],
    roadmap: [
      { step: 'Step 1: Foundation', description: 'Complete 10+2 with Physical Education or Science stream' },
      { step: 'Step 2: Specialization', description: 'Pursue B.P.Ed, Sports Science, or Fitness Certification' },
      { step: 'Step 3: Certification', description: 'Get certified as Personal Trainer, Yoga Instructor, or Sports Coach' },
      { step: 'Step 4: Experience', description: 'Gain practical experience through internships or assistant roles' },
      { step: 'Step 5: Advanced', description: 'Specialize in sports therapy, sports management, or elite coaching' }
    ],
    salary: {
      entry: '₹3-5 LPA',
      mid: '₹6-12 LPA',
      senior: '₹15-30+ LPA'
    },
    colleges: [
      'Lakshmibai National Institute of Physical Education (LNIPE)',
      'National Institute of Sports (NIS) Patiala',
      'Tata Institute of Social Sciences (TISS)',
      'Amity Institute of Physiotherapy',
      'Christian Medical College (CMC) Vellore'
    ],
    jobs: [
      'Personal Trainer',
      'Fitness Instructor',
      'Sports Coach',
      'Sports Manager',
      'Physiotherapist',
      'Yoga Instructor',
      'Sports Nutritionist',
      'Athletic Trainer'
    ],
    futureScope: 'The fitness industry is growing rapidly with increasing health awareness. Opportunities in corporate wellness, online coaching, sports analytics, and specialized training are expanding. Post-pandemic focus on health has created massive demand.',
    relatedCareers: [
      'Sports Medicine',
      'Physical Therapy',
      'Sports Journalism',
      'Sports Analytics',
      'Wellness Coaching'
    ]
  },
  'default': {
    name: 'Career Path',
    icon: '🎯',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    overview: 'Explore this exciting career path with comprehensive information about skills, courses, and opportunities.',
    skills: ['Communication', 'Problem-solving', 'Technical skills', 'Teamwork'],
    courses: ['Bachelor\'s Degree', 'Diploma Course', 'Certification Program'],
    roadmap: [
      { step: 'Step 1', description: 'Complete 10+2 education' },
      { step: 'Step 2', description: 'Pursue relevant degree' },
      { step: 'Step 3', description: 'Gain practical experience' },
      { step: 'Step 4', description: 'Build professional network' },
      { step: 'Step 5', description: 'Advance your career' }
    ],
    salary: { entry: '₹3-5 LPA', mid: '₹6-12 LPA', senior: '₹15-30+ LPA' },
    colleges: ['Top University 1', 'Top University 2', 'Top University 3'],
    jobs: ['Role 1', 'Role 2', 'Role 3'],
    futureScope: 'This field has excellent growth potential with increasing demand and evolving opportunities.',
    relatedCareers: ['Related Career 1', 'Related Career 2', 'Related Career 3']
  }
};

export default function DynamicCareerPage({ careerId }: { careerId: string }) {
  const { goBack } = useApp();
  const careerData = careerDatabase[careerId] || careerDatabase['default'];

  return (
    <div className="theme-shell">
      <NavBar />

      <div className="page-shell pt-6 sm:pt-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => goBack('home')}
          className="mb-6 flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Back to Dashboard</span>
        </motion.button>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cyber-card-strong overflow-hidden mb-6"
        >
          <div className="relative p-8 sm:p-12" style={{ background: careerData.gradient }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{careerData.icon}</span>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{careerData.name}</h1>
                  <p className="text-white/80 text-sm">Career Path Overview</p>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
                {careerData.overview}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Career Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Career Overview</h2>
          </div>
          <p className="text-white/70 leading-relaxed">
            {careerData.overview}
          </p>
        </motion.section>

        {/* Required Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Required Skills</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {careerData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-white/80">{skill}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Courses & Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Courses & Certifications</h2>
          </div>
          <div className="space-y-3">
            {careerData.courses.map((course, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-sm font-bold text-violet-400">
                  {index + 1}
                </div>
                <span className="text-white/80">{course}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Career Roadmap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Career Roadmap</h2>
          </div>
          <div className="space-y-4">
            {careerData.roadmap.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  {index < careerData.roadmap.length - 1 && (
                    <div className="w-0.5 h-full bg-emerald-500/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-white font-semibold mb-1">{item.step}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Salary Insights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Salary Insights</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 bg-white/5 rounded-xl text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Entry Level</p>
              <p className="text-2xl font-bold text-white">{careerData.salary.entry}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Mid Level</p>
              <p className="text-2xl font-bold text-white">{careerData.salary.mid}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Senior Level</p>
              <p className="text-2xl font-bold text-white">{careerData.salary.senior}</p>
            </div>
          </div>
        </motion.section>

        {/* Top Colleges/Institutes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-rose-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Top Colleges/Institutes</h2>
          </div>
          <div className="space-y-3">
            {careerData.colleges.map((college, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-400">
                  {index + 1}
                </div>
                <span className="text-white/80">{college}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Job Opportunities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Job Opportunities</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {careerData.jobs.map((job, index) => (
              <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
                {job}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Future Scope */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Future Scope</h2>
          </div>
          <p className="text-white/70 leading-relaxed">
            {careerData.futureScope}
          </p>
        </motion.section>

        {/* Related Careers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="cyber-card mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-pink-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Related Careers</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {careerData.relatedCareers.map((career, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white/80">{career}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Motivational Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="cyber-card-strong overflow-hidden mb-6"
        >
          <div className="relative p-8 text-center" style={{ background: careerData.gradient }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Start Your Journey Today
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Every expert was once a beginner. Take the first step towards your dream career in {careerData.name}.
              </p>
              <Button
                size="lg"
                icon={<Zap className="w-5 h-5" />}
                onClick={() => goBack('home')}
              >
                Begin Your Assessment
              </Button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
