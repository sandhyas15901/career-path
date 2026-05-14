import { motion } from 'framer-motion';
import { ArrowLeft, Wrench, Building, Zap, Radio, Car, Cpu, Trees, Factory, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function EngineeringDiplomasScreen() {
  const { setScreen } = useApp();

  const engineeringCategories = [
    {
      id: 'mechanical-manufacturing',
      title: 'Mechanical & Manufacturing',
      icon: Wrench,
      color: 'from-blue-500 to-indigo-600',
      description: 'Focus on mechanical systems, manufacturing processes, and industrial engineering',
      courses: [
        'Mechanical Engineering',
        'Manufacturing Engineering',
        'Industrial Engineering',
        'Production Engineering',
        'Automobile Engineering',
        'Tool & Die Making'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Manufacturing, Production, Automobile, Heavy Industries'
    },
    {
      id: 'civil-infrastructure',
      title: 'Civil & Infrastructure',
      icon: Building,
      color: 'from-gray-500 to-slate-600',
      description: 'Specialize in construction, infrastructure development, and structural engineering',
      courses: [
        'Civil Engineering',
        'Construction Technology',
        'Infrastructure Engineering',
        'Structural Engineering',
        'Surveying & Land Management',
        'Town Planning'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Construction, Infrastructure, Real Estate, Government PWD'
    },
    {
      id: 'electrical-power',
      title: 'Electrical & Power Systems',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      description: 'Study electrical systems, power generation, and energy distribution',
      courses: [
        'Electrical Engineering',
        'Power Engineering',
        'Renewable Energy Systems',
        'Power Electronics',
        'Control Systems',
        'Electrical Maintenance'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Power Plants, Electrical Companies, Renewable Energy, Automation'
    },
    {
      id: 'electronics-communication',
      title: 'Electronics & Communication',
      icon: Radio,
      color: 'from-purple-500 to-indigo-600',
      description: 'Learn electronics, communication systems, and digital technologies',
      courses: [
        'Electronics Engineering',
        'Communication Engineering',
        'Digital Electronics',
        'Embedded Systems',
        'Telecommunication',
        'Network Engineering'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Electronics, IT, Telecommunications, IoT Companies'
    },
    {
      id: 'computer-it',
      title: 'Computer & IT Engineering',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600',
      description: 'Master computer science, software development, and IT infrastructure',
      courses: [
        'Computer Engineering',
        'Information Technology',
        'Software Development',
        'Web Development',
        'Database Management',
        'Cloud Computing'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Maths',
      scope: 'IT Companies, Software Development, Web Development, Cloud Services'
    },
    {
      id: 'automobile-ev',
      title: 'Automobile & EV Technology',
      icon: Car,
      color: 'from-red-500 to-pink-600',
      description: 'Focus on automotive engineering and electric vehicle technology',
      courses: [
        'Automobile Engineering',
        'EV Technology',
        'Automotive Electronics',
        'Vehicle Design',
        'Automotive Service',
        'Transportation Engineering'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Automobile Industry, EV Manufacturing, Service Centers, R&D'
    },
    {
      id: 'robotics-automation',
      title: 'Robotics & Automation',
      icon: Settings,
      color: 'from-green-500 to-emerald-600',
      description: 'Study robotics, automation systems, and smart manufacturing',
      courses: [
        'Robotics Engineering',
        'Automation Engineering',
        'Mechatronics',
        'Industrial Automation',
        'AI Systems',
        'Smart Manufacturing'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Robotics, Automation, Manufacturing, Research Labs'
    },
    {
      id: 'environmental-energy',
      title: 'Environmental & Energy Engineering',
      icon: Trees,
      color: 'from-teal-500 to-cyan-600',
      description: 'Focus on environmental science and sustainable energy solutions',
      courses: [
        'Environmental Engineering',
        'Energy Engineering',
        'Renewable Energy',
        'Pollution Control',
        'Waste Management',
        'Sustainable Development'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science',
      scope: 'Environmental Agencies, Energy Companies, Waste Management, Research'
    },
    {
      id: 'industrial-production',
      title: 'Industrial & Production Technology',
      icon: Factory,
      color: 'from-orange-500 to-red-600',
      description: 'Learn industrial processes and production technology management',
      courses: [
        'Industrial Engineering',
        'Production Technology',
        'Manufacturing Technology',
        'Process Engineering',
        'Quality Control',
        'Industrial Management'
      ],
      duration: '3 Years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Manufacturing, Production, Quality Control, Industrial Management'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Back Arrow */}
        <button 
          onClick={() => setScreen('diploma_polytechnic')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-3">Engineering Diplomas</h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore specialized engineering diploma programs designed to provide practical skills and industry-ready education for diverse engineering careers.
          </p>
        </motion.div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Engineering Diplomas</span>
        </div>

        {/* Engineering Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineeringCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
              className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all ${category.id === 'mechanical-manufacturing' || category.id === 'civil-infrastructure' || category.id === 'electrical-power' || category.id === 'electronics-communication' || category.id === 'computer-it' || category.id === 'automobile-ev' || category.id === 'robotics-automation' || category.id === 'environmental-energy' || category.id === 'industrial-production' ? 'cursor-pointer' : ''}`}
              onClick={() => {
                if (category.id === 'mechanical-manufacturing') setScreen('mechanical_manufacturing');
                else if (category.id === 'civil-infrastructure') setScreen('civil_infrastructure');
                else if (category.id === 'electrical-power') setScreen('electrical_power_systems');
                else if (category.id === 'electronics-communication') setScreen('electronics_communication');
                else if (category.id === 'computer-it') setScreen('computer_it_engineering');
                else if (category.id === 'automobile-ev') setScreen('automobile_ev_technology');
                else if (category.id === 'robotics-automation') setScreen('robotics_automation');
                else if (category.id === 'environmental-energy') setScreen('environmental_energy_engineering');
                else if (category.id === 'industrial-production') setScreen('industrial_production_technology');
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-white/70 text-sm">{category.description}</p>
                </div>
              </div>

                          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
