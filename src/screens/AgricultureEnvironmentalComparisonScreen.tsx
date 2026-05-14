import { motion } from 'framer-motion';
import { ArrowLeft, TreePine, Droplets, Fish, Leaf, Trees, DollarSign, CheckCircle, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AgricultureEnvironmentalComparisonScreen() {
  const { setScreen } = useApp();

  const diplomaData = [
    {
      name: 'Horticulture',
      icon: TreePine,
      color: 'from-green-500 to-emerald-600',
      duration: '2-3 Years',
      eligibility: '10th Pass (Science preferred)',
      practicalTraining: '6 Months',
      focusArea: 'Plant cultivation & garden management',
      technicalLevel: 'Medium',
      businessLevel: 'Medium',
      careerScope: 'High',
      averageSalary: '₹3-8 LPA',
      topCareers: ['Horticulturist', 'Garden Manager', 'Landscape Designer'],
      skills: ['Plant Propagation', 'Soil Management', 'Landscape Design', 'Nursery Management'],
      industryDemand: 'Growing',
      higherStudy: 'B.Sc Horticulture Lateral Entry',
      bestFor: 'Students interested in plants, gardening, and landscape design'
    },
    {
      name: 'Dairy & Animal Husbandry',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-600',
      duration: '2-3 Years',
      eligibility: '10th Pass (Science preferred)',
      practicalTraining: '6 Months',
      focusArea: 'Dairy farming & livestock management',
      technicalLevel: 'Medium',
      businessLevel: 'High',
      careerScope: 'High',
      averageSalary: '₹4-12 LPA',
      topCareers: ['Dairy Farm Manager', 'Animal Husbandry Officer', 'Livestock Supervisor'],
      skills: ['Dairy Processing', 'Animal Breeding', 'Livestock Management', 'Animal Health'],
      industryDemand: 'High',
      higherStudy: 'B.Sc Animal Husbandry Lateral Entry',
      bestFor: 'Students interested in animals, dairy farming, and livestock management'
    },
    {
      name: 'Fisheries & Aquaculture',
      icon: Fish,
      color: 'from-cyan-500 to-teal-600',
      duration: '2-3 Years',
      eligibility: '10th Pass (Science preferred)',
      practicalTraining: '6 Months',
      focusArea: 'Fish farming & marine resource management',
      technicalLevel: 'High',
      businessLevel: 'Medium',
      careerScope: 'High',
      averageSalary: '₹4-12 LPA',
      topCareers: ['Fish Farm Manager', 'Aquaculture Technician', 'Marine Biologist Assistant'],
      skills: ['Fish Breeding', 'Water Quality Management', 'Aquaculture Systems', 'Marine Conservation'],
      industryDemand: 'Very High',
      higherStudy: 'B.Sc Fisheries Lateral Entry',
      bestFor: 'Students interested in marine life, aquaculture, and environmental conservation'
    },
    {
      name: 'Environmental Science',
      icon: Leaf,
      color: 'from-emerald-500 to-green-600',
      duration: '2-3 Years',
      eligibility: '10th Pass (Science preferred)',
      practicalTraining: '6 Months',
      focusArea: 'Environmental protection & sustainability',
      technicalLevel: 'High',
      businessLevel: 'High',
      careerScope: 'Very High',
      averageSalary: '₹4-15 LPA',
      topCareers: ['Environmental Officer', 'Sustainability Consultant', 'Conservation Specialist'],
      skills: ['Environmental Assessment', 'Pollution Control', 'Sustainability Management', 'Waste Management'],
      industryDemand: 'Very High',
      higherStudy: 'B.Sc Environmental Science Lateral Entry',
      bestFor: 'Students passionate about environment, conservation, and sustainability'
    },
    {
      name: 'Forestry & Wildlife',
      icon: Trees,
      color: 'from-green-600 to-lime-600',
      duration: '2-3 Years',
      eligibility: '10th Pass (Science preferred)',
      practicalTraining: '6 Months',
      focusArea: 'Forest conservation & wildlife management',
      technicalLevel: 'High',
      businessLevel: 'Medium',
      careerScope: 'High',
      averageSalary: '₹4-12 LPA',
      topCareers: ['Forest Officer', 'Wildlife Manager', 'Conservation Officer'],
      skills: ['Forest Management', 'Wildlife Conservation', 'GIS Mapping', 'Habitat Restoration'],
      industryDemand: 'High',
      higherStudy: 'B.Sc Forestry Lateral Entry',
      bestFor: 'Students interested in forests, wildlife, and conservation'
    },
    {
      name: 'Agricultural Business',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-600',
      duration: '2-3 Years',
      eligibility: '10th Pass (Any stream)',
      practicalTraining: '6 Months',
      focusArea: 'Farm management & agribusiness',
      technicalLevel: 'Medium',
      businessLevel: 'Very High',
      careerScope: 'Very High',
      averageSalary: '₹5-18 LPA',
      topCareers: ['Farm Manager', 'Agribusiness Consultant', 'Agricultural Economist'],
      skills: ['Farm Management', 'Agricultural Marketing', 'Financial Management', 'Supply Chain'],
      industryDemand: 'Very High',
      higherStudy: 'B.Sc Agriculture Lateral Entry',
      bestFor: 'Students interested in business, management, and agriculture'
    }
  ];

  const comparisonFeatures = [
    'Duration',
    'Eligibility',
    'Practical Training',
    'Focus Area',
    'Technical Level',
    'Business Level',
    'Career Scope',
    'Average Salary',
    'Industry Demand',
    'Higher Study Options'
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Very High': return 'text-green-400 font-semibold';
      case 'High': return 'text-blue-400 font-semibold';
      case 'Medium': return 'text-yellow-400 font-semibold';
      case 'Low': return 'text-gray-400 font-semibold';
      default: return 'text-white';
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
      case 'Low': return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
      default: return 'bg-white/10 text-white';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('agriculture_environmental_diplomas')}
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
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('agriculture_environmental_diplomas')}>Agriculture & Environmental</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Compare All Programs</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3">Compare Agriculture & Environmental Diplomas</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Side-by-side comparison of all 6 diploma programs to help you choose the best fit
          </p>
        </motion.div>

        {/* Program Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomaData.map((diploma, index) => {
              const Icon = diploma.icon;
              return (
                <motion.div
                  key={diploma.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${diploma.color} flex items-center justify-center text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{diploma.name}</h3>
                      <p className="text-white/70 text-sm">{diploma.focusArea}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Duration:</span>
                      <span className="text-white">{diploma.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Salary:</span>
                      <span className="text-white">{diploma.averageSalary}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Demand:</span>
                      <span className={`px-2 py-1 rounded text-xs ${getDemandColor(diploma.industryDemand)}`}>
                        {diploma.industryDemand}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Detailed Comparison</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white font-semibold text-sm border-r border-white/10">Feature</th>
                    {diplomaData.map((diploma) => (
                      <th key={diploma.name} className="px-4 py-3 text-center text-white font-semibold text-sm border-r border-white/10">
                        {diploma.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white/90 font-medium text-sm border-r border-white/10">
                        {feature}
                      </td>
                      {diplomaData.map((diploma) => (
                        <td key={`${diploma.name}-${feature}`} className="px-4 py-3 text-white/80 text-sm text-center border-r border-white/10">
                          {feature === 'Technical Level' ? (
                            <span className={getLevelColor(diploma.technicalLevel)}>
                              {diploma.technicalLevel}
                            </span>
                          ) : feature === 'Business Level' ? (
                            <span className={getLevelColor(diploma.businessLevel)}>
                              {diploma.businessLevel}
                            </span>
                          ) : feature === 'Career Scope' ? (
                            <span className={getLevelColor(diploma.careerScope)}>
                              {diploma.careerScope}
                            </span>
                          ) : feature === 'Industry Demand' ? (
                            <span className={`px-2 py-1 rounded text-xs ${getDemandColor(diploma.industryDemand)}`}>
                              {diploma.industryDemand}
                            </span>
                          ) : feature === 'Duration' ? (
                            diploma.duration
                          ) : feature === 'Eligibility' ? (
                            diploma.eligibility
                          ) : feature === 'Practical Training' ? (
                            diploma.practicalTraining
                          ) : feature === 'Focus Area' ? (
                            diploma.focusArea
                          ) : feature === 'Average Salary' ? (
                            diploma.averageSalary
                          ) : feature === 'Higher Study Options' ? (
                            diploma.higherStudy
                          ) : (
                            'N/A'
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Skills Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Key Skills Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomaData.map((diploma) => (
              <motion.div
                key={diploma.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + diplomaData.indexOf(diploma) * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${diploma.color} flex items-center justify-center text-white`}>
                    <diploma.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{diploma.name}</h3>
                </div>
                <div className="space-y-2">
                  {diploma.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Opportunities Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomaData.map((diploma) => (
              <motion.div
                key={diploma.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + diplomaData.indexOf(diploma) * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${diploma.color} flex items-center justify-center text-white`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{diploma.name}</h3>
                </div>
                <div className="space-y-2">
                  {diploma.topCareers.map((career, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{career}</span>
                      <span className="text-white/60 text-xs">{diploma.averageSalary}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recommendation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomaData.map((diploma) => (
              <motion.div
                key={diploma.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + diplomaData.indexOf(diploma) * 0.1 }}
                className="bg-white/5 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${diploma.color} flex items-center justify-center text-white`}>
                    <diploma.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{diploma.name}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{diploma.bestFor}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
