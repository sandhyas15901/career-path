import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, X, Search, Filter, ChevronDown, ChevronUp, Star, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function MedicalStreamCombinationsScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombinations = [
    {
      id: 'pcmb',
      title: 'PCMB',
      subtitle: 'Physics, Chemistry, Mathematics, Biology',
      color: 'from-blue-500 to-indigo-600',
      bestFor: ['Medical + Engineering', 'Biotechnology', 'Research'],
      exams: ['NEET', 'JEE Main', 'KCET', 'COMEDK'],
      difficulty: 'High',
      recommended: 'Students interested in both Mathematics and Biology',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics, Biology',
        mathematics: true,
        biology: true,
        extraSubject: 'Mathematics',
        difficultyLevel: 'High',
        medicalCareers: true,
        engineeringCareers: true,
        researchCareers: true,
        mainEntranceExams: ['NEET', 'JEE Main', 'KCET'],
        careerFlexibility: 'Very High',
        commonCareers: ['Doctor', 'Engineer', 'Biotechnologist', 'Researcher']
      }
    },
    {
      id: 'pcb',
      title: 'PCB',
      subtitle: 'Physics, Chemistry, Biology',
      color: 'from-green-500 to-emerald-600',
      bestFor: ['MBBS', 'BDS', 'Pharmacy', 'Nursing', 'Physiotherapy'],
      exams: ['NEET', 'KCET', 'CUET'],
      difficulty: 'Medium–High',
      recommended: 'Students focused mainly on medical careers and Biology',
      features: {
        fullForm: 'Physics, Chemistry, Biology',
        mathematics: false,
        biology: true,
        extraSubject: 'None',
        difficultyLevel: 'Medium-High',
        medicalCareers: true,
        engineeringCareers: false,
        researchCareers: true,
        mainEntranceExams: ['NEET', 'KCET', 'CUET'],
        careerFlexibility: 'High',
        commonCareers: ['Doctor', 'Pharmacist', 'Nurse', 'Physiotherapist']
      }
    },
    {
      id: 'pcbg',
      title: 'PCBG',
      subtitle: 'Physics, Chemistry, Biology, Geology (Rare)',
      color: 'from-yellow-500 to-orange-600',
      bestFor: ['Geology', 'Environmental Science', 'Research'],
      exams: ['KCET', 'CUET'],
      difficulty: 'Medium',
      recommended: 'Students interested in Earth Science and research fields',
      features: {
        fullForm: 'Physics, Chemistry, Biology, Geology',
        mathematics: false,
        biology: true,
        extraSubject: 'Geology',
        difficultyLevel: 'Medium',
        medicalCareers: false,
        engineeringCareers: false,
        researchCareers: true,
        mainEntranceExams: ['KCET', 'CUET'],
        careerFlexibility: 'Medium',
        commonCareers: ['Geologist', 'Environmental Scientist', 'Researcher']
      }
    },
    {
      id: 'pcbh',
      title: 'PCBH',
      subtitle: 'Physics, Chemistry, Biology, Home Science (Rare)',
      color: 'from-purple-500 to-pink-600',
      bestFor: ['Nutrition & Dietetics', 'Food Science', 'Healthcare'],
      exams: ['NEET', 'CUET'],
      difficulty: 'Medium',
      recommended: 'Students interested in nutrition, wellness, and healthcare',
      features: {
        fullForm: 'Physics, Chemistry, Biology, Home Science',
        mathematics: false,
        biology: true,
        extraSubject: 'Home Science',
        difficultyLevel: 'Medium',
        medicalCareers: false,
        engineeringCareers: false,
        researchCareers: true,
        mainEntranceExams: ['NEET', 'CUET'],
        careerFlexibility: 'Medium',
        commonCareers: ['Nutritionist', 'Dietitian', 'Food Scientist']
      }
    }
  ];

  const recommendations = [
    {
      id: 'pcmb',
      color: 'from-blue-500 to-indigo-600',
      title: 'Choose PCMB If:',
      reasons: [
        'You want both Engineering & Medical options',
        'You are good at Mathematics',
        'You want maximum career flexibility'
      ]
    },
    {
      id: 'pcb',
      color: 'from-green-500 to-emerald-600',
      title: 'Choose PCB If:',
      reasons: [
        'You want pure medical careers',
        'You do not like advanced Mathematics',
        'You enjoy Biology'
      ]
    },
    {
      id: 'pcbg',
      color: 'from-yellow-500 to-orange-600',
      title: 'Choose PCBG If:',
      reasons: [
        'You are interested in Earth Science',
        'You enjoy Geography & Nature',
        'You want research careers'
      ]
    },
    {
      id: 'pcbh',
      color: 'from-purple-500 to-pink-600',
      title: 'Choose PCBH If:',
      reasons: [
        'You are interested in Nutrition & Wellness',
        'You like healthcare-related subjects',
        'You want dietetics or wellness careers'
      ]
    }
  ];

  const filteredCombinations = streamCombinations.filter(combination =>
    combination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    combination.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors: { [key: string]: string } = {
      'High': 'bg-red-500/20 text-red-300 border-red-500/30',
      'Medium–High': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Medium': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
    };
    return colors[difficulty] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('science_streams')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Progress Breadcrumb */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('science_streams')}>Science</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('science_streams')}>Medical</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Stream Combinations</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            🧬 Medical Stream Combinations
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Compare different medical-related subject combinations after 10th grade and explore career opportunities, entrance exams, and future paths.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search combinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
            />
          </div>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </motion.div>

        {/* Stream Combination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCombinations.map((combination, index) => (
            <motion.div
              key={combination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer"
              onClick={() => toggleExpanded(combination.id)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${combination.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {combination.title}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{combination.title}</h3>
                  <p className="text-white/70 text-sm">{combination.subtitle}</p>
                </div>
                <div className="flex items-center gap-1">
                  {expandedCard === combination.id ? (
                    <ChevronUp className="w-5 h-5 text-white/50" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/50" />
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Best For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {combination.bestFor.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Entrance Exams:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {combination.exams.map((exam, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium mb-1">Difficulty:</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyBadge(combination.difficulty)}`}>
                      {combination.difficulty}
                    </span>
                  </div>
                </div>

                {expandedCard === combination.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <p className="text-white/70 text-sm leading-relaxed">
                      <strong>Recommended For:</strong> {combination.recommended}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 font-medium">PCMB</th>
                  <th className="text-center py-3 px-4 font-medium">PCB</th>
                  <th className="text-center py-3 px-4 font-medium">PCBG</th>
                  <th className="text-center py-3 px-4 font-medium">PCBH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Full Form</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics, Biology</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Biology</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Biology, Geology</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Biology, Home Science</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Biology</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Difficulty Level</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-sm">Medium-High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Medium</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Medium</span>
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Career Flexibility</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Very High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Medium</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Medium</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* "Choose This If..." Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rec.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {rec.id.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{rec.title}</h3>
                <ul className="space-y-2">
                  {rec.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
