import { motion } from 'framer-motion';
import { ArrowLeft, Hotel, Utensils, Plane, Calendar, Users, CheckCircle, TrendingUp, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function HospitalityTourismDiplomaScreen() {
  const { setScreen } = useApp();

  const diplomaCards = [
    {
      id: 'hotel-management',
      icon: Hotel,
      title: 'Hotel Management',
      description: 'Comprehensive training in hotel operations, guest services, and hospitality management',
      color: 'from-blue-500 to-cyan-600',
      careers: ['Hotel Manager', 'Front Office Manager', 'Housekeeping Manager', 'Food & Beverage Manager'],
      duration: '1-3 Years',
      screen: 'hotel_management_diploma'
    },
    {
      id: 'tourism-management',
      icon: Plane,
      title: 'Tourism Management',
      description: 'Study travel operations, tour planning, and tourism business management',
      color: 'from-green-500 to-emerald-600',
      careers: ['Tourism Manager', 'Travel Agent', 'Tour Operator', 'Destination Manager'],
      duration: '1-3 Years',
      screen: 'tourism_management_diploma'
    },
    {
      id: 'culinary-arts',
      icon: Utensils,
      title: 'Culinary Arts',
      description: 'Master cooking techniques, kitchen management, and food service operations',
      color: 'from-orange-500 to-red-600',
      careers: ['Executive Chef', 'Sous Chef', 'Pastry Chef', 'Kitchen Manager'],
      duration: '1-2 Years',
      screen: 'culinary_arts_diploma'
    },
    {
      id: 'event-management',
      icon: Calendar,
      title: 'Event Management',
      description: 'Learn event planning, coordination, and management for various occasions',
      color: 'from-purple-500 to-pink-600',
      careers: ['Event Manager', 'Wedding Planner', 'Conference Coordinator', 'Exhibition Manager'],
      duration: '1-2 Years',
      screen: 'event_management_diploma'
    },
    {
      id: 'airline-management',
      icon: Plane,
      title: 'Airline Management',
      description: 'Study airline operations, cabin crew training, and aviation hospitality',
      color: 'from-sky-500 to-blue-600',
      careers: ['Airline Manager', 'Cabin Crew', 'Ground Staff', 'Airport Operations'],
      duration: '1-2 Years',
      screen: 'airline_management_diploma'
    },
    {
      id: 'spa-wellness',
      icon: Users,
      title: 'Spa & Wellness Management',
      description: 'Master spa operations, wellness therapies, and health resort management',
      color: 'from-teal-500 to-green-600',
      careers: ['Spa Manager', 'Wellness Director', 'Therapist', 'Health Resort Manager'],
      duration: '1-2 Years',
      screen: 'spa_wellness_diploma'
    }
  ];

  const programHighlights = [
    {
      icon: CheckCircle,
      title: 'Industry Exposure',
      description: 'Internships and training in leading hotels and tourism companies'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Excellent career progression and global opportunities'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Industry-recognized certifications and skill development'
    },
    {
      icon: Users,
      title: 'Soft Skills',
      description: 'Focus on communication, customer service, and leadership skills'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
          <span className="text-white font-medium">Hospitality & Tourism Diplomas</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏨</span>
            <h1 className="text-4xl font-bold text-white">Hospitality & Tourism Diplomas</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore exciting career opportunities in hotels, tourism, airlines, and the service industry
          </p>
        </motion.div>

        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Why Choose Hospitality & Tourism?</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Fast-growing global industry with diverse opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Hands-on training with industry internships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Global career opportunities and travel benefits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Dynamic work environment with people interaction</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Industry Insights</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Industry growth: 8-10% annually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Eligibility: 10th pass (any stream)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Duration: 1-3 years (varies by specialization)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Average starting salary: ₹2.5-6 LPA</span>
              </li>
            </ul>
          </div>
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
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer"
                onClick={() => card.screen && setScreen(card.screen as any)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="text-white/70 text-sm">{card.duration}</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4">{card.description}</p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Career Options:</h4>
                  <div className="flex flex-wrap gap-1">
                    {card.careers.map((career, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-white/60 text-xs">Click to explore</span>
                  <span className="text-white/80 text-sm">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Program Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-white/70 text-sm">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
