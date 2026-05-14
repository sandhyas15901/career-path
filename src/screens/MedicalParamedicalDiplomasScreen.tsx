import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface MedicalParamedicalDiplomasScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const MedicalParamedicalDiplomasScreen: React.FC<MedicalParamedicalDiplomasScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const diplomaCourses = [
    {
      id: 'nursing-patient-care',
      icon: '🏥',
      color: 'from-pink-500 to-pink-600',
      title: 'Nursing & Patient Care',
      subtitle: 'Healthcare and patient support',
      description: 'Focus on nursing practices, patient care, and healthcare support services.',
      duration: '3 Years',
      careers: ['Nurse', 'Patient Care Technician', 'Healthcare Assistant'],
      difficulty: 'Medium-Hard'
    },
    {
      id: 'pharmacy',
      icon: '💊',
      color: 'from-green-500 to-green-600',
      title: 'Pharmacy',
      subtitle: 'Medicine and pharmaceutical sciences',
      description: 'Study pharmaceutical sciences, drug dispensing, and medication management.',
      duration: '3 Years',
      careers: ['Pharmacist', 'Pharmacy Technician', 'Drug Inspector'],
      difficulty: 'Hard'
    },
    {
      id: 'lab-diagnostic-technology',
      icon: '🔬',
      color: 'from-blue-500 to-blue-600',
      title: 'Lab & Diagnostic Technology',
      subtitle: 'Medical laboratory and diagnostics',
      description: 'Learn laboratory techniques, diagnostic procedures, and medical testing.',
      duration: '3 Years',
      careers: ['Lab Technician', 'Diagnostic Technician', 'Medical Technologist'],
      difficulty: 'Medium'
    },
    {
      id: 'imaging-operation-theatre',
      icon: '📷',
      color: 'from-purple-500 to-purple-600',
      title: 'Imaging & Operation Theatre Technology',
      subtitle: 'Medical imaging and surgical support',
      description: 'Master medical imaging, operation theatre management, and surgical assistance.',
      duration: '3 Years',
      careers: ['Radiology Technician', 'OT Technician', 'Imaging Specialist'],
      difficulty: 'Medium-Hard'
    },
    {
      id: 'emergency-cardiac-dialysis',
      icon: '🚑',
      color: 'from-red-500 to-red-600',
      title: 'Emergency, Cardiac & Dialysis Care',
      subtitle: 'Critical care and emergency services',
      description: 'Specialize in emergency care, cardiac support, and dialysis technology.',
      duration: '3 Years',
      careers: ['Emergency Technician', 'Cardiac Care Technician', 'Dialysis Technician'],
      difficulty: 'Hard'
    },
    {
      id: 'dental-eye-rehabilitation',
      icon: '👁️',
      color: 'from-indigo-500 to-indigo-600',
      title: 'Dental, Eye & Rehabilitation Care',
      subtitle: 'Dental, optical, and rehabilitation services',
      description: 'Focus on dental care, eye care, and rehabilitation therapies.',
      duration: '3 Years',
      careers: ['Dental Technician', 'Optometry Technician', 'Rehabilitation Therapist'],
      difficulty: 'Medium'
    },
    {
      id: 'hospital-administration-public-health',
      icon: '🏢',
      color: 'from-teal-500 to-teal-600',
      title: 'Hospital Administration & Public Health',
      subtitle: 'Healthcare management and public health',
      description: 'Learn hospital management, public health policies, and healthcare administration.',
      duration: '3 Years',
      careers: ['Hospital Administrator', 'Public Health Officer', 'Healthcare Manager'],
      difficulty: 'Medium'
    }
  ];

  const filteredCourses = diplomaCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || course.id === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('diploma_polytechnic')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🏥</span>
            <h1 className="text-4xl font-bold text-white">Medical & Paramedical Diplomas</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore comprehensive diploma programs in healthcare and paramedical sciences for rewarding medical careers after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Medical & Paramedical Diplomas</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search medical courses..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all" 
            />
          </div>
          <div className="flex gap-2">
            <select 
              value={selectedFilter} 
              onChange={(e) => setSelectedFilter(e.target.value)} 
              className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all"
            >
              <option value="all">All Courses</option>
              <option value="nursing-patient-care">Nursing & Patient Care</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="lab-diagnostic-technology">Lab & Diagnostic Technology</option>
              <option value="imaging-operation-theatre">Imaging & Operation Theatre</option>
              <option value="emergency-cardiac-dialysis">Emergency, Cardiac & Dialysis</option>
              <option value="dental-eye-rehabilitation">Dental, Eye & Rehabilitation</option>
              <option value="hospital-administration-public-health">Hospital Administration</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer group"
              onClick={() => setScreen(course.id as AppScreen)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl`}>
                  {course.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                  <p className="text-white/70 text-sm">{course.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-white/80 text-sm">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-white/50 text-xs">Duration</span>
                    <p className="text-white/90 text-sm font-medium">{course.duration}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Difficulty</span>
                    <p className="text-white/90 text-sm font-medium">{course.difficulty}</p>
                  </div>
                </div>
                
                <div>
                  <span className="text-white/50 text-xs">Career Opportunities</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {course.careers.map((career, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-xs text-center group-hover:text-white/80 transition-colors">
                  Click to explore detailed information →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalParamedicalDiplomasScreen;
