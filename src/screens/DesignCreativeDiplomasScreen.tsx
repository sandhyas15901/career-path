import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Clock } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface DesignCreativeDiplomasScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const DesignCreativeDiplomasScreen: React.FC<DesignCreativeDiplomasScreenProps> = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const diplomaCourses = [
    {
      id: 'animation-multimedia',
      icon: '🎬',
      color: 'from-purple-500 to-purple-600',
      title: 'Animation & Multimedia Diploma',
      description: 'Master 2D/3D animation, visual effects, and multimedia production techniques for creative industries',
      duration: '3 Years',
      careers: ['Animator', 'Multimedia Designer', 'VFX Artist', 'Motion Graphics Designer'],
      bestFor: ['Creative students', 'Art enthusiasts', 'Digital media lovers', 'Visual storytellers'],
      recommended: 'Students passionate about animation, visual effects, and digital media production',
      coreFocus: 'Animation techniques, multimedia production, visual effects',
      technicalLevel: 'High',
      creativeLevel: 'Very High',
      industryDemand: 'Very High',
      certifications: 'Animation Certificate, Multimedia Production License',
      higherStudy: 'B.Sc Animation Lateral Entry',
      commonCareers: 'Animator, Multimedia Designer, VFX Artist, Motion Graphics Designer',
      difficulty: 'Hard'
    },
    {
      id: 'ui-ux-web-design',
      icon: '🎨',
      color: 'from-blue-500 to-blue-600',
      title: 'UI/UX & Web Design Diploma',
      description: 'Design user interfaces, user experiences, and modern websites with cutting-edge design tools and methodologies',
      duration: '3 Years',
      careers: ['UI Designer', 'UX Designer', 'Web Designer', 'Product Designer'],
      bestFor: ['Design enthusiasts', 'Tech-savvy students', 'Problem solvers', 'Creative thinkers'],
      recommended: 'Students interested in user experience design and web development',
      coreFocus: 'UI/UX design, web development, user research',
      technicalLevel: 'High',
      creativeLevel: 'High',
      industryDemand: 'Very High',
      certifications: 'UI/UX Design Certificate, Web Development License',
      higherStudy: 'B.Sc Web Design Lateral Entry',
      commonCareers: 'UI Designer, UX Designer, Web Designer, Product Designer',
      difficulty: 'Medium'
    },
    {
      id: 'fashion-design',
      icon: '👗',
      color: 'from-pink-500 to-pink-600',
      title: 'Fashion Design Diploma',
      description: 'Create innovative fashion designs, learn garment construction, and understand fashion industry trends',
      duration: '3 Years',
      careers: ['Fashion Designer', 'Fashion Illustrator', 'Garment Technologist', 'Fashion Stylist'],
      bestFor: ['Fashion enthusiasts', 'Creative designers', 'Trend followers', 'Style innovators'],
      recommended: 'Students passionate about fashion design and garment creation',
      coreFocus: 'Fashion design, garment construction, fashion trends',
      technicalLevel: 'Medium',
      creativeLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Fashion Design Certificate, Garment Construction License',
      higherStudy: 'B.Sc Fashion Design Lateral Entry',
      commonCareers: 'Fashion Designer, Fashion Illustrator, Garment Technologist, Fashion Stylist',
      difficulty: 'Medium'
    },
    {
      id: 'interior-design',
      icon: '🏠',
      color: 'from-green-500 to-green-600',
      title: 'Interior Design Diploma',
      description: 'Design beautiful and functional interior spaces, learn space planning, and master design principles',
      duration: '3 Years',
      careers: ['Interior Designer', 'Space Planner', 'Design Consultant', 'Visual Merchandiser'],
      bestFor: ['Design enthusiasts', 'Space planners', 'Creative thinkers', 'Detail-oriented students'],
      recommended: 'Students interested in interior design and space planning',
      coreFocus: 'Interior design, space planning, design principles',
      technicalLevel: 'Medium',
      creativeLevel: 'High',
      industryDemand: 'High',
      certifications: 'Interior Design Certificate, Space Planning License',
      higherStudy: 'B.Sc Interior Design Lateral Entry',
      commonCareers: 'Interior Designer, Space Planner, Design Consultant, Visual Merchandiser',
      difficulty: 'Medium'
    },
    {
      id: 'photography-video-production',
      icon: '📸',
      color: 'from-orange-500 to-orange-600',
      title: 'Photography & Video Production Diploma',
      description: 'Master photography techniques, video production, and post-production for media and entertainment industries',
      duration: '3 Years',
      careers: ['Photographer', 'Video Producer', 'Cinematographer', 'Video Editor'],
      bestFor: ['Photography enthusiasts', 'Video creators', 'Visual storytellers', 'Media professionals'],
      recommended: 'Students passionate about photography and video production',
      coreFocus: 'Photography techniques, video production, post-production',
      technicalLevel: 'High',
      creativeLevel: 'Very High',
      industryDemand: 'High',
      certifications: 'Photography Certificate, Video Production License',
      higherStudy: 'B.Sc Media Production Lateral Entry',
      commonCareers: 'Photographer, Video Producer, Cinematographer, Video Editor',
      difficulty: 'Medium'
    },
    {
      id: 'fine-arts-illustration',
      icon: '🖼️',
      color: 'from-red-500 to-red-600',
      title: 'Fine Arts & Illustration Diploma',
      description: 'Develop artistic skills in drawing, painting, digital illustration, and explore various art mediums',
      duration: '3 Years',
      careers: ['Fine Artist', 'Illustrator', 'Art Director', 'Gallery Curator'],
      bestFor: ['Art enthusiasts', 'Creative students', 'Visual artists', 'Illustrators'],
      recommended: 'Students passionate about fine arts and illustration',
      coreFocus: 'Fine arts, illustration techniques, art mediums',
      technicalLevel: 'Medium',
      creativeLevel: 'Very High',
      industryDemand: 'Medium',
      certifications: 'Fine Arts Certificate, Illustration License',
      higherStudy: 'BFA Lateral Entry',
      commonCareers: 'Fine Artist, Illustrator, Art Director, Gallery Curator',
      difficulty: 'Easy'
    }
  ];

  const filteredCourses = diplomaCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.careers.some(career => career.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === 'all' || course.id === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Very Hard': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('diploma_polytechnic')} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎨</span>
            <h1 className="text-4xl font-bold text-white">Design & Creative Diplomas</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore creative diploma programs in design, multimedia, fashion, and arts for rewarding careers in the creative industry after 10th grade.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8 text-white/70 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>Diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Design & Creative Diplomas</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input type="text" placeholder="Search design courses, careers, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all" />
          </div>
          <div className="flex gap-2">
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="all">All Design Courses</option>
              <option value="animation-multimedia">Animation & Multimedia</option>
              <option value="ui-ux-web-design">UI/UX & Web Design</option>
              <option value="fashion-design">Fashion Design</option>
              <option value="interior-design">Interior Design</option>
              <option value="photography-video-production">Photography & Video Production</option>
              <option value="fine-arts-illustration">Fine Arts & Illustration</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course, index) => (
            <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer" onClick={() => setScreen(course.id as AppScreen)}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl`}>{course.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white/50" />
                    <span className="text-white/70 text-sm">{course.duration}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyBadge(course.difficulty)}`}>{course.difficulty}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white/80 text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">Best For</h4>
                  <div className="flex flex-wrap gap-1">{course.bestFor.map((item, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs">{item}</span>))}</div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">Career Opportunities</h4>
                  <div className="flex flex-wrap gap-1">{course.careers.map((career, idx) => (<span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">{career}</span>))}</div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-white/70 text-xs italic mb-2">{course.recommended}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDemandBadge(course.industryDemand)}`}>{course.industryDemand} Demand</span>
                    <span className="text-white/50 text-xs">Click to explore →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Design & Creative Diplomas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">🎨</div>
              <h3 className="text-lg font-bold text-white mb-2">Creative Expression</h3>
              <p className="text-white/70 text-sm">Express your creativity and develop unique artistic skills in various design disciplines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Industry Ready</h3>
              <p className="text-white/70 text-sm">Gain practical skills and industry knowledge for immediate career opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Growth Potential</h3>
              <p className="text-white/70 text-sm">Build a foundation for higher education and career advancement in creative industries</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default DesignCreativeDiplomasScreen;
