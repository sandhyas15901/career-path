import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Droplets, TreePine, Sparkles, CheckCircle, TrendingUp, Award, Sun } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SpaWellnessDiplomaScreen() {
  const { setScreen } = useApp();

  const specializations = [
    {
      id: 'spa-therapy',
      icon: Heart,
      title: 'Spa Therapy',
      description: 'Master massage techniques, body treatments, and relaxation therapies',
      skills: ['Massage Therapy', 'Body Treatments', 'Relaxation Techniques', 'Client Consultation'],
      careers: ['Spa Therapist', 'Massage Therapist', 'Wellness Consultant', 'Body Treatment Specialist'],
      duration: '6 months',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'wellness-management',
      icon: Sparkles,
      title: 'Wellness Management',
      description: 'Learn spa operations, wellness program design, and health resort management',
      skills: ['Spa Operations', 'Wellness Program Design', 'Health Resort Management', 'Business Development'],
      careers: ['Wellness Manager', 'Spa Director', 'Health Resort Manager', 'Wellness Program Coordinator'],
      duration: '6 months',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'aromatherapy',
      icon: Droplets,
      title: 'Aromatherapy',
      description: 'Study essential oils, therapeutic scents, and holistic healing practices',
      skills: ['Essential Oils', 'Therapeutic Scents', 'Holistic Healing', 'Treatment Formulation'],
      careers: ['Aromatherapist', 'Essential Oil Specialist', 'Holistic Therapist', 'Wellness Consultant'],
      duration: '6 months',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'yoga-meditation',
      icon: TreePine,
      title: 'Yoga & Meditation',
      description: 'Master yoga instruction, meditation techniques, and mind-body wellness',
      skills: ['Yoga Instruction', 'Meditation Techniques', 'Mind-Body Wellness', 'Stress Management'],
      careers: ['Yoga Instructor', 'Meditation Teacher', 'Wellness Coach', 'Stress Management Specialist'],
      duration: '6 months',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const programHighlights = [
    {
      icon: CheckCircle,
      title: 'Hands-on Training',
      description: 'Practical experience in spa centers and wellness facilities'
    },
    {
      icon: TrendingUp,
      title: 'Growing Industry',
      description: 'Rising demand for wellness and spa professionals'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Industry-recognized wellness and spa certifications'
    },
    {
      icon: Sun,
      title: 'Holistic Approach',
      description: 'Focus on complete mind, body, and spirit wellness'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('hospitality_tourism_diplomas')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Progress Breadcrumb */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('hospitality_tourism_diplomas')}>Hospitality & Tourism</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Spa & Wellness Management Diploma</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center text-white">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-white">Spa & Wellness Management Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive spa and wellness education covering spa therapy, wellness management, aromatherapy, and yoga instruction
          </p>
        </motion.div>

        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Program Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Duration:</span>
                  <span className="text-white font-medium">1-2 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Eligibility:</span>
                  <span className="text-white font-medium">10th Pass (Any stream)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Practical Training:</span>
                  <span className="text-white font-medium">6 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Certification:</span>
                  <span className="text-white font-medium">Spa & Wellness Management Diploma</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Career Scope</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Spa Manager - ₹4-12 LPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Wellness Director - ₹6-18 LPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Aromatherapist - ₹3-8 LPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Yoga Instructor - ₹3-10 LPA</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
                >
                  <div className="text-center mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center text-white mx-auto mb-3`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{spec.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{spec.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Skills</h4>
                      <div className="space-y-1">
                        {spec.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-white/80 text-xs">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Career Options</h4>
                      <div className="flex flex-wrap gap-1">
                        {spec.careers.map((career, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center pt-3 border-t border-white/10">
                      <span className="text-white/60 text-xs">Duration: {spec.duration}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Program Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center text-white mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-white/70 text-sm">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Skills You'll Develop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Therapeutic Skills</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Massage and body therapy techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Aromatherapy and essential oil knowledge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Yoga and meditation instruction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Holistic healing practices</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Business Skills</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Spa operations and management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Client relationship management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Wellness program development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Business planning and marketing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
