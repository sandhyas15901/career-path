import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Building, Map, Target, TrendingUp, Users, Briefcase, Award, FileText, BarChart3, Shield, Factory } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CivilInfrastructureScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const diplomaCourses = [
    {
      id: 'civil-engineering',
      title: 'Civil Engineering Diploma',
      icon: '🟦',
      color: 'from-blue-500 to-indigo-600',
      bestFor: [
        'Construction Technology',
        'Structural Design',
        'Site Engineering',
        'Infrastructure Development'
      ],
      duration: '3 Years',
      careers: [
        'Site Engineer',
        'Civil Draftsman',
        'Construction Supervisor',
        'Structural Technician'
      ],
      recommended: 'Students interested in buildings, roads, bridges, and construction technology.',
      coreFocus: 'Construction & Infrastructure',
      practicalWork: 'Very High',
      constructionFocus: 'Very High',
      designDrawing: 'Essential',
      gisMapping: 'Low',
      infrastructureScope: 'Very High',
      governmentJobs: 'Very High',
      higherStudy: 'Excellent',
      commonCareers: ['Construction', 'Infrastructure', 'Surveying'],
      difficulty: 'Medium'
    },
    {
      id: 'construction-technology',
      title: 'Construction Technology Diploma',
      icon: '🟩',
      color: 'from-gray-500 to-slate-600',
      bestFor: [
        'Building Construction',
        'Infrastructure Projects',
        'Construction Planning',
        'Project Supervision'
      ],
      duration: '3 Years',
      careers: [
        'Construction Technician',
        'Site Supervisor',
        'Project Coordinator',
        'Infrastructure Technician'
      ],
      recommended: 'Students interested in construction projects, site operations, and infrastructure development.',
      coreFocus: 'Construction Projects & Planning',
      practicalWork: 'Very High',
      constructionFocus: 'Very High',
      designDrawing: 'Important',
      gisMapping: 'Low',
      infrastructureScope: 'High',
      governmentJobs: 'High',
      higherStudy: 'Excellent',
      commonCareers: ['Construction', 'Project Management', 'Infrastructure'],
      difficulty: 'Medium'
    },
    {
      id: 'survey-engineering',
      title: 'Survey Engineering Diploma',
      icon: '🟨',
      color: 'from-green-500 to-emerald-600',
      bestFor: [
        'Land Surveying',
        'Mapping',
        'GIS & Site Measurement',
        'Infrastructure Planning'
      ],
      duration: '2–3 Years',
      careers: [
        'Survey Technician',
        'GIS Assistant',
        'Land Surveyor',
        'Mapping Technician'
      ],
      recommended: 'Students interested in land measurement, mapping, GIS, and planning technologies.',
      coreFocus: 'Surveying & Mapping',
      practicalWork: 'Very High',
      constructionFocus: 'Moderate',
      designDrawing: 'Essential',
      gisMapping: 'Very High',
      infrastructureScope: 'High',
      governmentJobs: 'High',
      higherStudy: 'Excellent',
      commonCareers: ['Surveying', 'GIS', 'Mapping', 'Planning'],
      difficulty: 'Medium'
    },
    {
      id: 'structural-drafting',
      title: 'Structural Drafting & Design Diploma',
      icon: '🟪',
      color: 'from-purple-500 to-indigo-600',
      bestFor: [
        'Structural Drafting',
        'CAD Design',
        'Building Planning',
        'Technical Drawing'
      ],
      duration: '2–3 Years',
      careers: [
        'CAD Draftsman',
        'Structural Designer',
        'Building Planning Assistant',
        'Design Technician'
      ],
      recommended: 'Students interested in drafting, design software, and structural planning.',
      coreFocus: 'Structural Design & Drafting',
      practicalWork: 'High',
      constructionFocus: 'Moderate',
      designDrawing: 'Essential',
      gisMapping: 'Low',
      infrastructureScope: 'Moderate',
      governmentJobs: 'Moderate',
      higherStudy: 'Good',
      commonCareers: ['Drafting', 'Design', 'Planning', 'Architecture'],
      difficulty: 'Medium'
    }
  ];

  const careerOpportunities = [
    {
      id: 'site-engineer',
      title: 'Site Engineer',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → Civil Diploma → Site Experience → Site Engineer',
      skills: ['Site Management', 'Construction Planning', 'Quality Control', 'Team Leadership', 'Safety Management'],
      scope: 'Construction Companies, Infrastructure Projects, Real Estate Development',
      salary: '₹4-16 LPA',
      demand: 'Very High'
    },
    {
      id: 'civil-draftsman',
      title: 'Civil Draftsman',
      icon: Map,
      color: 'from-gray-500 to-slate-600',
      roadmap: '10th → Civil Diploma → Drafting Training → Civil Draftsman',
      skills: ['Technical Drawing', 'CAD Software', 'Construction Knowledge', 'Detailing', 'Standards Compliance'],
      scope: 'Construction Companies, Architecture Firms, Engineering Consultancies',
      salary: '₹3-12 LPA',
      demand: 'High'
    },
    {
      id: 'construction-supervisor',
      title: 'Construction Supervisor',
      icon: Target,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → Construction Diploma → Experience → Construction Supervisor',
      skills: ['Project Management', 'Quality Control', 'Team Leadership', 'Safety Management', 'Resource Planning'],
      scope: 'Construction Companies, Real Estate Development, Infrastructure Projects',
      salary: '₹5-18 LPA',
      demand: 'Very High'
    },
    {
      id: 'survey-technician',
      title: 'Survey Technician',
      icon: Map,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → Survey Diploma → Training → Survey Technician',
      skills: ['Land Surveying', 'GPS/GIS Operations', 'Mapping Software', 'Data Collection', 'Field Work'],
      scope: 'Survey Companies, GIS Firms, Government Survey Departments, Construction Companies',
      salary: '₹3-14 LPA',
      demand: 'High'
    },
    {
      id: 'gis-assistant',
      title: 'GIS Assistant',
      icon: Map,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → Survey/Civil Diploma → GIS Training → GIS Assistant',
      skills: ['GIS Software', 'Mapping', 'Data Analysis', 'Spatial Analysis', 'Remote Sensing'],
      scope: 'Urban Planning, Environmental Agencies, Research Institutes, Government Departments',
      salary: '₹4-16 LPA',
      demand: 'High'
    },
    {
      id: 'land-surveyor',
      title: 'Land Surveyor',
      icon: Map,
      color: 'from-teal-500 to-cyan-600',
      roadmap: '10th → Survey Diploma → Experience → Land Surveyor',
      skills: ['Land Surveying', 'Mapping', 'Legal Knowledge', 'Measurement Techniques', 'GPS Operations'],
      scope: 'Survey Companies, Real Estate Development, Government Land Departments, Infrastructure Projects',
      salary: '₹4-15 LPA',
      demand: 'High'
    },
    {
      id: 'mapping-technician',
      title: 'Mapping Technician',
      icon: Map,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → Survey Diploma → Mapping Training → Mapping Technician',
      skills: ['Digital Mapping', 'GIS Software', 'Cartography', 'Data Visualization', 'Spatial Analysis'],
      scope: 'GIS Companies, Mapping Agencies, Urban Planning Departments, Research Institutions',
      salary: '₹3-12 LPA',
      demand: 'High'
    },
    {
      id: 'structural-designer',
      title: 'Structural Designer',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → Structural Diploma → CAD Training → Structural Designer',
      skills: ['Structural Design', 'CAD Software', 'Engineering Analysis', 'Building Codes', 'Project Management'],
      scope: 'Architecture Firms, Construction Companies, Engineering Consultancies, Design Studios',
      salary: '₹5-18 LPA',
      demand: 'High'
    },
    {
      id: 'cad-technician',
      title: 'CAD Technician',
      icon: Target,
      color: 'from-red-500 to-pink-600',
      roadmap: '10th → Structural/Civil Diploma → CAD Training → CAD Technician',
      skills: ['CAD Software', 'Technical Drawing', '3D Modeling', 'Design Principles', 'Documentation'],
      scope: 'Architecture Firms, Engineering Companies, Construction Companies, Design Studios',
      salary: '₹3-14 LPA',
      demand: 'High'
    },
    {
      id: 'infrastructure-technician',
      title: 'Infrastructure Technician',
      icon: Factory,
      color: 'from-emerald-500 to-teal-600',
      roadmap: '10th → Construction Diploma → Infrastructure Experience → Infrastructure Technician',
      skills: ['Infrastructure Planning', 'Project Management', 'Technical Knowledge', 'Quality Control', 'Maintenance'],
      scope: 'Infrastructure Companies, Government Projects, Urban Development, Real Estate',
      salary: '₹4-16 LPA',
      demand: 'High'
    },
    {
      id: 'project-coordinator',
      title: 'Project Coordinator',
      icon: Briefcase,
      color: 'from-violet-500 to-indigo-600',
      roadmap: '10th → Construction Diploma → Project Management → Project Coordinator',
      skills: ['Project Planning', 'Coordination', 'Resource Management', 'Communication', 'Documentation'],
      scope: 'Construction Companies, Infrastructure Projects, Real Estate Development, Consulting Firms',
      salary: '₹5-15 LPA',
      demand: 'High'
    },
    {
      id: 'building-planning-assistant',
      title: 'Building Planning Assistant',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → Structural Diploma → Planning Training → Building Planning Assistant',
      skills: ['Urban Planning', 'Building Codes', 'Zoning Laws', 'Site Analysis', 'Design Review'],
      scope: 'Urban Planning Departments, Architecture Firms, Real Estate Development, Government Planning Agencies',
      salary: '₹4-14 LPA',
      demand: 'High'
    }
  ];

  const entranceExams = [
    {
      id: 'dcet',
      title: 'DCET',
      icon: FileText,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10th pass with Maths & Science (45% for General, 40% for Reserved)',
      process: 'Online application → Entrance exam → Counseling → Admission',
      opportunities: 'All engineering colleges in state',
      higherStudy: 'Direct admission to 2nd year B.E/B.Tech Civil',
      difficulty: 'Hard',
      successRate: '8-12%'
    },
    {
      id: 'polytechnic-cet',
      title: 'Polytechnic CET',
      icon: Award,
      color: 'from-purple-500 to-indigo-600',
      eligibility: '10th pass with minimum 50% marks',
      process: 'Application → State-level exam → Seat allocation → Admission',
      opportunities: 'Government and private polytechnic colleges',
      higherStudy: 'Lateral entry to B.E/B.Tech Civil',
      difficulty: 'Medium-Hard',
      successRate: '15-25%'
    },
    {
      id: 'direct-admission',
      title: 'Direct Admission',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10th pass with required percentage',
      process: 'Application → Merit list → Counseling → Direct admission',
      opportunities: 'Private engineering colleges and management quota seats',
      higherStudy: 'Based on college policies and performance',
      difficulty: 'Easy-Medium',
      successRate: '30-40%'
    },
    {
      id: 'lateral-entry',
      title: 'Lateral Entry to B.E/B.Tech Civil',
      icon: Briefcase,
      color: 'from-orange-500 to-amber-600',
      eligibility: 'Civil/Construction/Survey/Structural Diploma with minimum 60%',
      process: 'Application → Entrance exam → Direct admission to 2nd year',
      opportunities: 'Direct entry to 2nd year of civil engineering degree',
      higherStudy: 'Complete B.E/B.Tech in 3 years',
      difficulty: 'Medium',
      successRate: '20-30%'
    }
  ];

  const skillCourses = [
    {
      id: 'autocad-civil',
      title: 'AutoCAD Civil',
      icon: Target,
      color: 'from-blue-500 to-indigo-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for civil design and drafting work'
    },
    {
      id: 'surveying-basics',
      title: 'Surveying Basics',
      icon: Map,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Fundamental for surveying and mapping careers'
    },
    {
      id: 'gis-mapping',
      title: 'GIS Mapping',
      icon: Map,
      color: 'from-cyan-500 to-teal-600',
      level: 'Intermediate',
      duration: '6 months',
      relevance: 'Critical for modern civil and infrastructure careers'
    },
    {
      id: 'building-planning',
      title: 'Building Planning',
      icon: Building,
      color: 'from-purple-500 to-indigo-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Important for urban planning and infrastructure careers'
    },
    {
      id: 'structural-design-basics',
      title: 'Structural Design Basics',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Fundamental for structural design and drafting'
    },
    {
      id: 'quantity-estimation',
      title: 'Quantity Estimation',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for construction project management'
    },
    {
      id: 'site-safety-construction',
      title: 'Site Safety & Construction Rules',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Mandatory for all construction and infrastructure jobs'
    }
  ];

  const industriesHiring = [
    {
      id: 'construction-companies',
      title: 'Construction Companies',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      demand: 'Very High',
      growth: 'Steady growth with infrastructure development',
      opportunities: 'Construction, Real Estate, Infrastructure, Project Management',
      salaryRange: '₹4-18 LPA'
    },
    {
      id: 'real-estate-industry',
      title: 'Real Estate Industry',
      icon: Building,
      color: 'from-gray-500 to-slate-600',
      demand: 'High',
      growth: 'Growing with urbanization and development',
      opportunities: 'Property Development, Real Estate Management, Urban Planning',
      salaryRange: '₹5-20 LPA'
    },
    {
      id: 'infrastructure-projects',
      title: 'Infrastructure Projects',
      icon: Target,
      color: 'from-purple-500 to-indigo-600',
      demand: 'Very High',
      growth: 'Strong growth with government infrastructure initiatives',
      opportunities: 'Project Management, Engineering Consultancy, Urban Development',
      salaryRange: '₹6-22 LPA'
    },
    {
      id: 'smart-city-projects',
      title: 'Smart City Projects',
      icon: TrendingUp,
      color: 'from-cyan-500 to-teal-600',
      demand: 'Very High',
      growth: 'Rapid growth with smart city initiatives',
      opportunities: 'Urban Planning, IoT Integration, Smart Infrastructure',
      salaryRange: '₹7-25 LPA'
    },
    {
      id: 'government-public-works',
      title: 'Government Public Works',
      icon: Factory,
      color: 'from-green-500 to-emerald-600',
      demand: 'Very High',
      growth: 'Stable with consistent government spending',
      opportunities: 'PWD Departments, Municipal Corporations, Infrastructure Development',
      salaryRange: '₹5-18 LPA'
    },
    {
      id: 'urban-development-agencies',
      title: 'Urban Development Agencies',
      icon: Building,
      color: 'from-orange-500 to-amber-600',
      demand: 'High',
      growth: 'Growing with urbanization and smart city development',
      opportunities: 'Urban Planning, Smart City Development, Infrastructure Consulting',
      salaryRange: '₹6-20 LPA'
    }
  ];

  const governmentJobs = [
    {
      id: 'pwd-jobs',
      title: 'PWD Jobs',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      eligibility: 'Civil/Construction/Survey/Structural Diploma',
      skills: ['Technical Knowledge', 'Construction Management', 'Project Planning', 'Quality Control'],
      growth: 'Stable government career with good benefits',
      salary: '₹5-16 LPA'
    },
    {
      id: 'railways-civil',
      title: 'Railways Civil Technician',
      icon: Target,
      color: 'from-gray-500 to-slate-600',
      eligibility: 'Civil Diploma with Railway specialization',
      skills: ['Railway Engineering', 'Infrastructure Knowledge', 'Construction Management', 'Safety Standards'],
      growth: 'Excellent career growth with national importance',
      salary: '₹6-20 LPA'
    },
    {
      id: 'ssc-je-civil',
      title: 'SSC JE Civil',
      icon: Shield,
      color: 'from-purple-500 to-indigo-600',
      eligibility: 'Civil Diploma + competitive exam',
      skills: ['Technical Knowledge', 'Government Procedures', 'Project Management', 'Quality Standards'],
      growth: 'Stable government career with promotions',
      salary: '₹5-15 LPA'
    },
    {
      id: 'municipal-engineering',
      title: 'Municipal Engineering Jobs',
      icon: Factory,
      color: 'from-green-500 to-emerald-600',
      eligibility: 'Civil/Structural Diploma',
      skills: ['Urban Infrastructure', 'Public Works', 'Municipal Services', 'Project Management'],
      growth: 'Stable career with community impact',
      salary: '₹4-14 LPA'
    },
    {
      id: 'smart-city-jobs',
      title: 'Smart City Project Jobs',
      icon: TrendingUp,
      color: 'from-cyan-500 to-teal-600',
      eligibility: 'Civil/Structural Diploma with smart technology knowledge',
      skills: ['Smart Infrastructure', 'IoT Systems', 'Urban Planning', 'Project Management'],
      growth: 'Future-focused career with technology integration',
      salary: '₹6-22 LPA'
    },
    {
      id: 'infrastructure-consultant',
      title: 'Infrastructure Consultant',
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-600',
      eligibility: 'Civil/Structural Diploma + consulting experience',
      skills: ['Infrastructure Planning', 'Project Management', 'Technical Analysis', 'Client Management'],
      growth: 'Excellent growth with private and public sector opportunities',
      salary: '₹8-25 LPA'
    }
  ];

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Easy-Medium': return 'bg-lime-500/20 text-lime-300 border-lime-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Medium-Hard': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'High': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Medium-High': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
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
          onClick={() => setScreen('engineering_diplomas')}
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
            <span className="text-4xl">🏢</span>
            <h1 className="text-4xl font-bold text-white">Civil & Infrastructure</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore diploma pathways focused on construction, infrastructure, surveying, structural planning, and civil engineering careers after 10th grade.
          </p>
        </motion.div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic')}>diploma / Polytechnic</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('engineering_diplomas')}>Engineering Diplomas</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Civil & Infrastructure</span>
        </div>

        {/* Diploma Course Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">diploma Course Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diplomaCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer"
                onClick={() => toggleCardExpansion(course.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white text-2xl">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                    <p className="text-white/70 text-sm">{course.recommended}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Best For</h4>
                    <div className="space-y-1">
                      {course.bestFor.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-white/80 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Duration</span>
                      <p className="text-white/90 text-sm font-medium">{course.duration}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Difficulty</span>
                      <p className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(course.difficulty)}`}>
                        {course.difficulty}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Career Opportunities</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.careers.slice(0, 3).map((career, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                        {career}
                      </span>
                    ))}
                    {course.careers.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                        +{course.careers.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {expandedCard === course.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="text-white/50">Core Focus:</span><span className="text-white/80">{course.coreFocus}</span></div>
                      <div><span className="text-white/50">Practical Work:</span><span className="text-white/80">{course.practicalWork}</span></div>
                      <div><span className="text-white/50">Construction Focus:</span><span className="text-white/80">{course.constructionFocus}</span></div>
                      <div><span className="text-white/50">Design & Drawing:</span><span className="text-white/80">{course.designDrawing}</span></div>
                      <div><span className="text-white/50">GIS & Mapping:</span><span className="text-white/80">{course.gisMapping}</span></div>
                      <div><span className="text-white/50">Infrastructure Scope:</span><span className="text-white/80">{course.infrastructureScope}</span></div>
                      <div><span className="text-white/50">Government Jobs:</span><span className="text-white/80">{course.governmentJobs}</span></div>
                      <div><span className="text-white/50">Higher Study:</span><span className="text-white/80">{course.higherStudy}</span></div>
                      <div><span className="text-white/50">Common Careers:</span><span className="text-white/80">{course.commonCareers.join(', ')}</span></div>
                      <div><span className="text-white/50">Difficulty:</span><span className="text-white/80">{course.difficulty}</span></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Comparison Table</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Civil Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Construction Technology</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Survey Engineering</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Structural Drafting</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Core Focus', civil: 'Construction & Infrastructure', construction: 'Construction Projects & Planning', survey: 'Surveying & Mapping', structural: 'Structural Design & Drafting' },
                    { feature: 'Practical Work Level', civil: 'Very High', construction: 'Very High', survey: 'Very High', structural: 'High' },
                    { feature: 'Construction Focus', civil: 'Very High', construction: 'Very High', survey: 'Moderate', structural: 'Moderate' },
                    { feature: 'Design & Drawing', civil: 'Essential', construction: 'Important', survey: 'Essential', structural: 'Essential' },
                    { feature: 'GIS & Mapping', civil: 'Low', construction: 'Low', survey: 'Very High', structural: 'Low' },
                    { feature: 'Infrastructure Scope', civil: 'Very High', construction: 'High', survey: 'High', structural: 'Moderate' },
                    { feature: 'Government Job Scope', civil: 'Very High', construction: 'High', survey: 'High', structural: 'Moderate' },
                    { feature: 'Higher Study Opportunities', civil: 'Excellent', construction: 'Excellent', survey: 'Excellent', structural: 'Good' },
                    { feature: 'Common Careers', civil: 'Construction, Infrastructure, Surveying', construction: 'Construction, Project Management, Infrastructure', survey: 'Surveying, GIS, Mapping, Planning', structural: 'Drafting, Design, Planning, Architecture' },
                    { feature: 'Difficulty Level', civil: 'Medium', construction: 'Medium', survey: 'Medium', structural: 'Medium' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.civil}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.construction}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.survey}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.structural}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Choose This If Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏢</span>
                <h3 className="text-xl font-bold text-white">Choose Civil Engineering If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy infrastructure and construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You are interested in buildings and roads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want core civil engineering careers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-500/20 to-slate-600/20 backdrop-blur-md border border-gray-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏗</span>
                <h3 className="text-xl font-bold text-white">Choose Construction Technology If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-white/80">You enjoy construction projects and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-white/80">You like site supervision work</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-white/80">You want infrastructure-related careers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🗺</span>
                <h3 className="text-xl font-bold text-white">Choose Survey Engineering If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-white/80">You enjoy maps and land measurement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-white/80">You are interested in GIS & surveying</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-white/80">You want planning and mapping careers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📐</span>
                <h3 className="text-xl font-bold text-white">Choose Structural Drafting If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span className="text-white/80">You enjoy design and technical drawing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span className="text-white/80">You are interested in CAD software</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span className="text-white/80">You want drafting and planning careers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${career.color} flex items-center justify-center text-white`}>
                    <career.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{career.title}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-white/70 text-sm mb-1">Career Roadmap</h4>
                    <p className="text-white/90 text-sm">{career.roadmap}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white/70 text-sm mb-1">Skills Needed</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-white/50 text-xs">Future Scope</span>
                      <p className="text-white/90 text-sm">{career.scope}</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Average Salary</span>
                      <p className="text-white/90 text-sm">{career.salary}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Industry Demand</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium border ${getDemandBadge(career.demand)}`}>
                      {career.demand}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Admissions & Higher Studies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Polytechnic Admissions & Higher Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entranceExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                    <exam.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{exam.title}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <span className="text-white/80 text-xs">{exam.eligibility}</span>
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Admission Process</span>
                    <p className="text-white/80 text-sm">{exam.process}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Higher Study Opportunities</span>
                    <span className="text-white/80 text-sm">{exam.higherStudy}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Difficulty</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Success Rate</span>
                    <span className="text-white/80 text-sm">{exam.successRate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                    <course.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{course.title}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Level</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelBadge(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Duration</span>
                    <span className="text-white/80 text-xs">{course.duration}</span>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Career Relevance</span>
                    <p className="text-white/80 text-xs">{course.relevance}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries Hiring */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Industries Hiring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesHiring.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white`}>
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{industry.title}</h3>
                </div>

                <div className="space-y-3">
                  <div className={`px-2 py-1 rounded text-xs font-medium border ${getDemandBadge(industry.demand)}`}>
                    {industry.demand}
                  </div>
                  
                  <div>
                    <span className="text-white/50 text-xs">Growth Trend</span>
                    <p className="text-white/80 text-sm">{industry.growth}</p>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Opportunities</span>
                    <p className="text-white/80 text-sm">{industry.opportunities}</p>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Salary Range</span>
                    <p className="text-white/90 text-sm font-medium">{industry.salaryRange}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Government Jobs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Government Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white`}>
                    <job.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <p className="text-white/80 text-sm">{job.eligibility}</p>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Required Skills</span>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Career Growth</span>
                    <p className="text-white/80 text-sm">{job.growth}</p>
                  </div>

                  <div>
                    <span className="text-white/50 text-xs">Salary</span>
                    <p className="text-white/90 text-sm font-medium">{job.salary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Industry Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Smart City Development</h3>
                <p className="text-white/70 text-sm">Urban planning integrating IoT, smart infrastructure, and sustainable development</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Infrastructure Growth</h3>
                <p className="text-white/70 text-sm">Strong growth in construction and infrastructure sectors</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Map className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Sustainable Construction Trends</h3>
                <p className="text-white/70 text-sm">Green building practices and eco-friendly construction methods</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Urban Development Opportunities</h3>
                <p className="text-white/70 text-sm">Growing demand for urban planning and smart city development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
