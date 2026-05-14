import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft
} from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface ComputerITDiplomasScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const ComputerITDiplomasScreen: React.FC<ComputerITDiplomasScreenProps> = ({ setScreen }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  
  // Diploma Courses Data
  const diplomaCourses = [
    {
      id: 'software-app-development',
      icon: '💻',
      color: 'from-blue-600 to-cyan-600',
      title: 'Software & App Development',
      subtitle: 'Programming, software engineering, mobile apps, web development',
      duration: '3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Programming & Coding',
        'Software Development',
        'Mobile App Development',
        'Web Development'
      ],
      careers: [
        'Software Developer',
        'App Developer',
        'Web Developer',
        'Software Engineer'
      ],
      coreFocus: 'Software development, programming, application engineering',
      practicalWork: 'Very High - Coding labs, software projects, app development',
      technicalSkills: 'Very High - Programming languages, development tools',
      industryDemand: 'Very High - Software industry demand',
      governmentJobs: 'Medium - IT departments, software roles',
      higherStudy: 'B.E/B.Tech in Computer Science/Software Engineering',
      commonCareers: ['Software Engineer', 'Full Stack Developer', 'App Developer']
    },
    {
      id: 'networking-cloud-cybersecurity',
      icon: '🌐',
      color: 'from-green-600 to-emerald-600',
      title: 'Networking, Cloud & Cybersecurity',
      subtitle: 'Network administration, cloud computing, cybersecurity, IT infrastructure',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'Network Administration',
        'Cloud Computing',
        'Cybersecurity',
        'IT Infrastructure'
      ],
      careers: [
        'Network Administrator',
        'Cloud Engineer',
        'Cybersecurity Analyst',
        'IT Support Specialist'
      ],
      coreFocus: 'Network systems, cloud infrastructure, cybersecurity',
      practicalWork: 'High - Network setup, cloud platforms, security testing',
      technicalSkills: 'High - Network protocols, cloud services, security tools',
      industryDemand: 'Very High - Growing IT security demand',
      governmentJobs: 'High - Government IT, cybersecurity roles',
      higherStudy: 'B.E/B.Tech in Computer Science/Information Technology',
      commonCareers: ['Network Engineer', 'Cloud Architect', 'Cybersecurity Analyst']
    },
    {
      id: 'ai-data-science-iot',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      title: 'AI, Data Science & IoT',
      subtitle: 'Artificial intelligence, machine learning, data analytics, IoT systems',
      duration: '3 Years',
      difficulty: 'Hard',
      bestFor: [
        'Artificial Intelligence',
        'Machine Learning',
        'Data Science',
        'IoT Development'
      ],
      careers: [
        'AI Engineer',
        'Data Scientist',
        'IoT Developer',
        'ML Engineer'
      ],
      coreFocus: 'AI systems, data analytics, machine learning, IoT',
      practicalWork: 'High - AI model training, data analysis, IoT projects',
      technicalSkills: 'Very High - AI frameworks, data tools, IoT platforms',
      industryDemand: 'Very High - Rapid AI sector growth',
      governmentJobs: 'Medium-High - Emerging AI government roles',
      higherStudy: 'B.E/B.Tech in Computer Science/AI/Data Science',
      commonCareers: ['AI Engineer', 'Data Scientist', 'IoT Developer']
    },
    {
      id: 'game-development-multimedia',
      icon: '🎮',
      color: 'from-yellow-600 to-orange-600',
      title: 'Game Development & Multimedia',
      subtitle: 'Game design, multimedia development, animation, graphics design',
      duration: '3 Years',
      difficulty: 'Medium-Hard',
      bestFor: [
        'Game Development',
        'Multimedia Design',
        'Animation',
        'Graphics Design'
      ],
      careers: [
        'Game Developer',
        'Multimedia Designer',
        '3D Artist',
        'Animation Specialist'
      ],
      coreFocus: 'Game development, multimedia, animation, graphics',
      practicalWork: 'High - Game development, multimedia projects, animation work',
      technicalSkills: 'High - Game engines, multimedia tools, animation software',
      industryDemand: 'High - Entertainment and media industry',
      governmentJobs: 'Low-Medium - Limited government roles',
      higherStudy: 'B.E/B.Tech in Computer Science/Game Development',
      commonCareers: ['Game Developer', 'Multimedia Designer', '3D Artist']
    },
    {
      id: 'ui-ux-web-technologies',
      icon: '🎨',
      color: 'from-red-600 to-pink-600',
      title: 'UI/UX & Web Technologies',
      subtitle: 'User interface design, user experience, web technologies, frontend development',
      duration: '3 Years',
      difficulty: 'Medium',
      bestFor: [
        'UI/UX Design',
        'User Experience',
        'Web Technologies',
        'Frontend Development'
      ],
      careers: [
        'UI/UX Designer',
        'Frontend Developer',
        'Web Designer',
        'UX Researcher'
      ],
      coreFocus: 'UI/UX design, web technologies, frontend development',
      practicalWork: 'High - Design projects, web development, user testing',
      technicalSkills: 'High - Design tools, web frameworks, frontend technologies',
      industryDemand: 'Very High - Growing demand for digital experiences',
      governmentJobs: 'Medium - Digital government services',
      higherStudy: 'B.E/B.Tech in Computer Science/Design',
      commonCareers: ['UI/UX Designer', 'Frontend Developer', 'Web Designer']
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">💻</span>
            <h1 className="text-4xl font-bold text-white">Computer & IT Diplomas</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore specialized diploma pathways in computer science, networking, AI, gaming, and web technologies for your IT career after 10th grade.
          </p>
        </motion.div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Computer & IT Diplomas</span>
        </div>

        {/* Diploma Course Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diplomaCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all ${course.id === 'software-app-development' || course.id === 'networking-cloud-cybersecurity' || course.id === 'ai-data-science-iot' || course.id === 'game-development-multimedia' || course.id === 'ui-ux-web-technologies' ? 'cursor-pointer' : 'cursor-pointer'}`}
                onClick={() => course.id === 'software-app-development' ? setScreen('software_app_development') : course.id === 'networking-cloud-cybersecurity' ? setScreen('networking_cloud_cybersecurity') : course.id === 'ai-data-science-iot' ? setScreen('ai_data_science_iot') : course.id === 'game-development-multimedia' ? setScreen('game_development_multimedia') : course.id === 'ui-ux-web-technologies' ? setScreen('ui_ux_web_technologies') : toggleCardExpansion(course.id)}
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

                <div>
                  <span className="text-white/50 text-xs">Duration</span>
                  <p className="text-white/90 text-sm font-medium">{course.duration}</p>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedCard === course.id ? 1 : 0, height: expandedCard === course.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4 border-t border-white/10"
                >
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-white/50">Core Focus:</span><span className="text-white/80">{course.coreFocus}</span></div>
                    <div><span className="text-white/50">Technical Skills:</span><span className="text-white/80">{course.technicalSkills}</span></div>
                    <div><span className="text-white/50">Practical Work:</span><span className="text-white/80">{course.practicalWork}</span></div>
                    <div><span className="text-white/50">Industry Demand:</span><span className="text-white/80">{course.industryDemand}</span></div>
                    <div><span className="text-white/50">Government Jobs:</span><span className="text-white/80">{course.governmentJobs}</span></div>
                    <div><span className="text-white/50">Higher Study:</span><span className="text-white/80">{course.higherStudy}</span></div>
                    <div><span className="text-white/50">Common Careers:</span><span className="text-white/80">{course.commonCareers.join(', ')}</span></div>
                    <div><span className="text-white/50">Difficulty:</span><span className="text-white/80">{course.difficulty}</span></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerITDiplomasScreen;
