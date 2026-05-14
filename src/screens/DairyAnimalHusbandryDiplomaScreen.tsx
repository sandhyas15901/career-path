import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Dog, Wheat, Heart, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function DairyAnimalHusbandryDiplomaScreen() {
  const { setScreen } = useApp();

  const specializations = [
    {
      id: 'dairy-technology',
      icon: Droplets,
      title: 'Dairy Technology',
      description: 'Master milk processing, dairy product manufacturing, and quality control',
      skills: ['Milk Processing', 'Dairy Product Manufacturing', 'Quality Control', 'Food Safety'],
      careers: ['Dairy Technologist', 'Quality Control Manager', 'Dairy Plant Supervisor'],
      duration: '6 months',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'livestock-management',
      icon: Dog,
      title: 'Livestock Management',
      description: 'Learn animal breeding, nutrition management, and herd health',
      skills: ['Animal Breeding', 'Nutrition Management', 'Herd Health', 'Animal Welfare'],
      careers: ['Livestock Manager', 'Animal Husbandry Officer', 'Herd Supervisor'],
      duration: '6 months',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'animal-nutrition',
      icon: Wheat,
      title: 'Animal Nutrition',
      description: 'Study feed formulation, nutritional planning, and feed management',
      skills: ['Feed Formulation', 'Nutritional Planning', 'Feed Management', 'Quality Analysis'],
      careers: ['Animal Nutritionist', 'Feed Manager', 'Nutrition Consultant'],
      duration: '6 months',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'veterinary-assistance',
      icon: Heart,
      title: 'Veterinary Assistance',
      description: 'Learn basic veterinary care, disease prevention, and first aid',
      skills: ['Veterinary Care', 'Disease Prevention', 'First Aid', 'Animal Health Monitoring'],
      careers: ['Veterinary Assistant', 'Animal Health Worker', 'Livestock Caretaker'],
      duration: '6 months',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const programHighlights = [
    {
      icon: CheckCircle,
      title: 'Hands-on Training',
      description: 'Practical experience in modern dairy farms and livestock facilities'
    },
    {
      icon: TrendingUp,
      title: 'Industry Exposure',
      description: 'Visits to leading dairy companies and livestock farms'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Training in food safety and quality management systems'
    },
    {
      icon: Heart,
      title: 'Animal Welfare',
      description: 'Focus on ethical animal handling and welfare practices'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
          <span className="text-white font-medium">Dairy & Animal Husbandry Diploma</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white">
              <Droplets className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-white">Dairy & Animal Husbandry Diploma</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive dairy and livestock management education covering milk processing, animal breeding, nutrition, and veterinary care
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
                  <span className="text-white font-medium">2-3 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Eligibility:</span>
                  <span className="text-white font-medium">10th Pass (Science preferred)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Practical Training:</span>
                  <span className="text-white font-medium">6 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Certification:</span>
                  <span className="text-white font-medium">Dairy & Animal Husbandry Diploma</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Career Scope</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Dairy Farm Manager - ₹4-12 LPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Animal Husbandry Officer - ₹5-15 LPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Livestock Supervisor - ₹3-8 LPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Veterinary Assistant - ₹3-7 LPA</span>
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white mx-auto mb-4">
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
              <h3 className="text-lg font-semibold text-white mb-4">Technical Skills</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Dairy processing and preservation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Animal breeding and genetics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Livestock health management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">Feed formulation and nutrition</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Business Skills</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Farm management and economics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Quality control and assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Supply chain management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">Regulatory compliance</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
