import { motion } from 'framer-motion';
import { ArrowLeft, TreePine, Droplets, Fish, Leaf, Trees, DollarSign } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AgricultureEnvironmentalDiplomaScreen() {
  const { setScreen } = useApp();

  const diplomaCards = [
    {
      id: 'horticulture',
      icon: TreePine,
      title: 'Horticulture',
      description: 'Study fruits, vegetables, flowers, and ornamental plants cultivation and management',
      color: 'from-green-500 to-emerald-600',
      careers: ['Horticulturist', 'Garden Manager', 'Landscape Designer', 'Plant Nursery Manager'],
      duration: '2-3 Years',
      screen: 'horticulture_diploma'
    },
    {
      id: 'dairy-animal-husbandry',
      icon: Droplets,
      title: 'Dairy & Animal Husbandry',
      description: 'Learn dairy farming, livestock management, and animal breeding techniques',
      color: 'from-blue-500 to-cyan-600',
      careers: ['Dairy Farm Manager', 'Animal Husbandry Officer', 'Livestock Supervisor', 'Veterinary Assistant'],
      duration: '2-3 Years',
      screen: 'dairy_animal_husbandry_diploma'
    },
    {
      id: 'fisheries-aquaculture',
      icon: Fish,
      title: 'Fisheries & Aquaculture',
      description: 'Master fish farming, aquaculture systems, and marine resource management',
      color: 'from-cyan-500 to-teal-600',
      careers: ['Fish Farm Manager', 'Aquaculture Technician', 'Marine Biologist Assistant', 'Fisheries Officer'],
      duration: '2-3 Years',
      screen: 'fisheries_aquaculture_diploma'
    },
    {
      id: 'environmental-science',
      icon: Leaf,
      title: 'Environmental Science & Sustainability',
      description: 'Study environmental protection, sustainability practices, and conservation methods',
      color: 'from-emerald-500 to-green-600',
      careers: ['Environmental Officer', 'Sustainability Consultant', 'Conservation Specialist', 'Waste Management Expert'],
      duration: '2-3 Years',
      screen: 'environmental_science_diploma'
    },
    {
      id: 'forestry-wildlife',
      icon: Trees,
      title: 'Forestry & Wildlife Management',
      description: 'Learn forest conservation, wildlife protection, and natural resource management',
      color: 'from-green-600 to-lime-600',
      careers: ['Forest Officer', 'Wildlife Manager', 'Conservation Officer', 'Natural Resource Specialist'],
      duration: '2-3 Years',
      screen: 'forestry_wildlife_diploma'
    },
    {
      id: 'agricultural-business',
      icon: DollarSign,
      title: 'Agricultural Business & Farm Management',
      description: 'Master agricultural economics, farm business management, and agribusiness operations',
      color: 'from-yellow-500 to-orange-600',
      careers: ['Farm Manager', 'Agribusiness Consultant', 'Agricultural Economist', 'Rural Development Officer'],
      duration: '2-3 Years',
      screen: 'agricultural_business_diploma'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs - matching other pages */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('diploma_polytechnic')}
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
          <span className="text-white font-medium">Agriculture & Environmental Diplomas</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🌱</span>
            <h1 className="text-4xl font-bold text-white">Agriculture & Environmental Diplomas</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Explore sustainable agriculture, environmental conservation, and natural resource management programs
          </p>
          <button
            onClick={() => setScreen('agriculture_environmental_comparison')}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Compare All Programs
          </button>
        </motion.div>

        {/* Diploma Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {diplomaCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer group"
                onClick={() => setScreen(card.screen as any)}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">{card.description}</p>

                  {/* Duration */}
                  <div className="mb-6">
                    <span className="text-white/60 text-xs">Duration</span>
                    <p className="text-white/90 font-medium">{card.duration}</p>
                  </div>

                  {/* Career Opportunities */}
                  <div className="w-full">
                    <h4 className="text-white font-semibold mb-3 text-sm">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {card.careers.map((career, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs hover:bg-white/20 transition-colors"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Agriculture & Environmental Diplomas?</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Growing demand for sustainable agriculture professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Hands-on training with modern farming techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Multiple career paths in government and private sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Contribution to food security and environmental conservation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Common Program Features</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Eligibility: 10th Pass (Agriculture stream preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Duration: 2-3 Years (varies by specialization)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Practical training: 6 months to 1 year</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Certification: Specialized diploma certificates</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
