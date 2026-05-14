import { motion } from 'framer-motion';
import { ArrowLeft, Award, Gavel, Heart, Camera, Palette, Map } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ArtsHumanitiesFocusScreen() {
  const { setScreen } = useApp();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs - matching other pages */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('academic_courses')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Progress Breadcrumb */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Arts & Humanities</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3">Arts & Humanities Focus Areas</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore creative, analytical, and social science disciplines with diverse career opportunities
          </p>
        </motion.div>

        {/* Arts & Humanities Focus Cards */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Civil Services Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('civil_services_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Civil Services Focus</h2>
                <p className="text-white/80 mb-6">
                  Prepare for prestigious government services and administrative roles with comprehensive UPSC preparation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Law Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('law_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                <Gavel className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Law Focus</h2>
                <p className="text-white/80 mb-6">
                  Legal studies and practice in various fields of law with specialized legal education programs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Psychology Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('psychology_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Psychology Focus</h2>
                <p className="text-white/80 mb-6">
                  Study human behavior, mental processes, and psychological well-being with research opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Media Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('media_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                <Camera className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Media Focus</h2>
                <p className="text-white/80 mb-6">
                  Journalism, mass communication, and digital media careers with modern media training
                </p>
              </div>
            </div>
          </motion.div>

          {/* Arts Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('arts_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                <Palette className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Arts Focus</h2>
                <p className="text-white/80 mb-6">
                  Fine arts, performing arts, and creative expression with specialized artistic training
                </p>
              </div>
            </div>
          </motion.div>

          {/* Geography Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('geography_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white">
                <Map className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Geography Focus</h2>
                <p className="text-white/80 mb-6">
                  Physical geography, human geography, and environmental studies with research opportunities
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
