import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Heart, Palette, Briefcase, Trees, Hotel, Wrench } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function DiplomaPolytechnicScreen() {
  const { setScreen } = useApp();

  const diplomaCategories = [
    {
      id: 'engineering',
      title: 'Engineering Diplomas',
      icon: Wrench,
      color: 'from-blue-500 to-indigo-600',
      description: 'Technical engineering diploma programs in various disciplines',
      courses: [
        'Mechanical Engineering',
        'Civil Engineering',
        'Electrical Engineering',
        'Electronics Engineering',
        'Automobile Engineering',
        'Chemical Engineering',
        'Aeronautical Engineering',
        'Marine Engineering'
      ],
      duration: '3 years',
      eligibility: '10th pass with Science & Maths',
      scope: 'Manufacturing, Construction, Automotive, Aerospace',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      highlights: ['Hands-on training', 'Industry exposure', 'Job-ready skills', 'Higher education options']
    },
    {
      id: 'computer-it',
      title: 'Computer & IT Diplomas',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      description: 'Diploma programs in computer science and information technology',
      courses: [
        'Computer Engineering',
        'Information Technology',
        'Software Development',
        'Web Development',
        'Mobile App Development',
        'Cybersecurity',
        'Data Science',
        'Cloud Computing'
      ],
      duration: '3 years',
      eligibility: '10th pass with Maths',
      scope: 'IT Companies, Software Development, Tech Startups',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      highlights: ['Programming skills', 'Industry certifications', 'Project-based learning', 'Tech industry ready']
    },
    {
      id: 'medical-paramedical',
      title: 'Medical & Paramedical Diplomas',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      description: 'Healthcare and paramedical diploma programs for medical careers',
      courses: [
        'Nursing',
        'Medical Laboratory Technology',
        'Pharmacy',
        'Physiotherapy',
        'Radiology',
        'Dental Hygiene',
        'Optometry',
        'Emergency Medical Services'
      ],
      duration: '2-3 years',
      eligibility: '10th pass with Science',
      scope: 'Hospitals, Clinics, Healthcare Centers, Pharma',
      salary: '₹3-18 LPA (Entry Level to Senior)',
      highlights: ['Clinical training', 'Healthcare certification', 'Patient care skills', 'Medical industry ready']
    },
    {
      id: 'design-creative',
      title: 'Design & Creative Diplomas',
      icon: Palette,
      color: 'from-green-500 to-emerald-600',
      description: 'Creative and design diploma programs for artistic careers',
      courses: [
        'Graphic Design',
        'Fashion Design',
        'Interior Design',
        'Web Design',
        'Animation',
        'Photography',
        'Fine Arts',
        'Product Design'
      ],
      duration: '2-3 years',
      eligibility: '10th pass (any stream)',
      scope: 'Design Studios, Media Companies, Fashion Industry',
      salary: '₹3-16 LPA (Entry Level to Senior)',
      highlights: ['Portfolio development', 'Creative workshops', 'Industry projects', 'Artistic skills training']
    },
    {
      id: 'commerce-business',
      title: 'Commerce & Business Diplomas',
      icon: Briefcase,
      color: 'from-orange-500 to-amber-600',
      description: 'Business and commerce diploma programs for management careers',
      courses: [
        'Business Management',
        'Accounting & Finance',
        'Marketing',
        'Human Resources',
        'Banking & Finance',
        'International Business',
        'Retail Management',
        'Supply Chain Management'
      ],
      duration: '2-3 years',
      eligibility: '10th pass (any stream)',
      scope: 'Corporate Sector, Banking, Retail, Startups',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      highlights: ['Business skills', 'Management training', 'Internship opportunities', 'Entrepreneurship focus']
    },
    {
      id: 'agriculture-environmental',
      title: 'Agriculture & Environmental Diplomas',
      icon: Trees,
      color: 'from-teal-500 to-cyan-600',
      description: 'Agriculture and environmental science diploma programs',
      courses: [
        'Agricultural Engineering',
        'Horticulture',
        'Environmental Science',
        'Food Technology',
        'Dairy Technology',
        'Fisheries Science',
        'Forestry',
        'Renewable Energy'
      ],
      duration: '2-3 years',
      eligibility: '10th pass with Science',
      scope: 'Agriculture Industry, Environmental Agencies, Food Processing',
      salary: '₹3-12 LPA (Entry Level to Senior)',
      highlights: ['Field training', 'Sustainable practices', 'Research opportunities', 'Rural development']
    },
    {
      id: 'hospitality-tourism',
      title: 'Hospitality & Tourism Diplomas',
      icon: Hotel,
      color: 'from-pink-500 to-rose-600',
      description: 'Hospitality and tourism diploma programs for service industry careers',
      courses: [
        'Hotel Management',
        'Tourism Management',
        'Culinary Arts',
        'Event Management',
        'Travel & Tourism',
        'Airline Management',
        'Cruise Line Management',
        'Spa & Wellness Management'
      ],
      duration: '1-3 years',
      eligibility: '10th pass (any stream)',
      scope: 'Hotels, Tourism Industry, Airlines, Event Companies',
      salary: '₹3-18 LPA (Entry Level to Senior)',
      highlights: ['Practical training', 'Industry placements', 'Customer service skills', 'Global opportunities']
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
          onClick={() => setScreen('career_dashboard')}
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎓</span>
            <h1 className="text-4xl font-bold text-white">Diploma / Polytechnic</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Technical diploma programs offering practical skills and industry-ready education for diverse career paths
          </p>
        </motion.div>

        {/* Diploma Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diplomaCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
              className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all ${(category.id === 'engineering' || category.id === 'computer-it' || category.id === 'medical-paramedical' || category.id === 'design-creative' || category.id === 'agriculture-environmental' || category.id === 'hospitality-tourism') ? 'cursor-pointer' : ''}`}
              onClick={() => {
                if (category.id === 'engineering') setScreen('engineering_diplomas');
                if (category.id === 'computer-it') setScreen('computer_it_diplomas');
                if (category.id === 'medical-paramedical') setScreen('medical_paramedical_diplomas');
                if (category.id === 'design-creative') setScreen('design-creative-diplomas');
                if (category.id === 'commerce-business') setScreen('commerce-business');
                if (category.id === 'agriculture-environmental') setScreen('agriculture_environmental_diplomas');
                if (category.id === 'hospitality-tourism') setScreen('hospitality_tourism_diplomas');
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

              <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-white/50 text-xs">Duration</span>
                    <p className="text-white/90 text-sm font-medium">{category.duration}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/90 text-sm font-medium">{category.eligibility}</p>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
