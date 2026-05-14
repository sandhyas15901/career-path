import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AcademicStreamsScreen() {
  const { setScreen } = useApp();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blobs - matching home page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('academic_courses')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white mb-3">Academic Streams</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose your academic pathway based on interests and career goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Science Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Science</h2>
                <p className="text-white/80 mb-6">
                  Physics, Chemistry, Biology, Mathematics, Computer Science
                </p>
              </div>
            </div>
          </motion.div>

          {/* Commerce Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Commerce</h2>
                <p className="text-white/80 mb-6">
                  Accountancy, Business Studies, Economics, Finance
                </p>
              </div>
            </div>
          </motion.div>

          {/* Arts / Humanities Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Arts / Humanities</h2>
                <p className="text-white/80 mb-6">
                  History, Political Science, Psychology, Literature
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
