import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, BookOpen, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CareerPathDashboard() {
  const { setScreen } = useApp();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blobs - matching home page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Buttons */}
        <div className="absolute top-8 left-6 flex items-center gap-3">
          <button 
            onClick={() => setScreen('home')}
            className="p-2 hover:bg-white/10 transition-all"
          >
            <Home className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => setScreen('final_result')}
            className="p-2 hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        </div>
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white mb-3">Your Career Journey</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore personalized career pathways designed to match your unique strengths, interests, and aspirations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Academic Courses Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            onClick={() => setScreen('academic_courses')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Academic Courses</h2>
                <p className="text-white/80 mb-6">
                  Bachelor's and Master's degree programs in various disciplines
                </p>
              </div>
            </div>
          </motion.div>

          {/* Diploma / Polytechnic Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('diploma_polytechnic')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Diploma / Polytechnic</h2>
                <p className="text-white/80 mb-6">
                  Technical diploma programs for engineering and technology fields
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vocational / ITI Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('vocational_iti')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Vocational / ITI</h2>
                <p className="text-white/80 mb-6">
                  Industrial training and skill development programs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Government Exams Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('government_exams')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Government Exams</h2>
                <p className="text-white/80 mb-6">
                  Competitive exams for government jobs and services
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skill-Based Courses Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('skill_based_courses')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Skill-Based Courses</h2>
                <p className="text-white/80 mb-6">
                  Short-term certification and skill enhancement programs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Career Roles Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('career_role')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Career Roles</h2>
                <p className="text-white/80 mb-6">
                  Professional opportunities and career advancement paths
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
