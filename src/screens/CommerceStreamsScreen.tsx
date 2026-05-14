import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, TrendingUp, Briefcase, CreditCard } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CommerceStreamsScreen() {
  const { setScreen } = useApp();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
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
          <span className="text-white font-medium">Commerce</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3">Commerce Streams</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore specialized commerce pathways for business, finance, accounting, and management careers
          </p>
        </motion.div>

        {/* Commerce Focus Cards */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Finance & Accounting Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('finance_accounting_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                <Calculator className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Finance & Accounting Focus</h2>
                <p className="text-white/80 mb-6">
                  Comprehensive finance and accounting programs with specialized financial management and accounting principles
                </p>
              </div>
            </div>
          </motion.div>

          {/* Finance + IT Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('finance_it_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Finance + IT Focus</h2>
                <p className="text-white/80 mb-6">
                  Integrated finance and information technology programs for fintech and digital financial services
                </p>
              </div>
            </div>
          </motion.div>

          {/* Business Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('business_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Business Focus</h2>
                <p className="text-white/80 mb-6">
                  General business management programs with focus on entrepreneurship and business administration
                </p>
              </div>
            </div>
          </motion.div>

          {/* Banking & Economics Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
            onClick={() => setScreen('banking_economics_focus')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                <CreditCard className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Banking & Economics Focus</h2>
                <p className="text-white/80 mb-6">
                  Specialized banking and financial services programs for banking sector careers
                </p>
              </div>
            </div>
          </motion.div>

                  </div>
      </div>
    </div>
  );
}
