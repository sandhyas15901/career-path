import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Camera, Users, TrendingUp, BarChart3, GraduationCap, Newspaper, Mic, Video, Radio, Wifi, Share2, Edit3, Play, MessageSquare, Brain } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function MediaFocusScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const streamCombinations = [
    {
      id: 'hej',
      title: 'HEJ',
      subtitle: 'History, Economics, Journalism',
      color: 'from-blue-500 to-indigo-600',
      icon: '🟦',
      bestFor: [
        'Journalism',
        'News Reporting',
        'Mass Communication',
        'Media Studies',
        'Public Relations'
      ],
      exams: ['CUET', 'Media Entrance Exams', 'Journalism Entrance Tests'],
      difficulty: 'Medium',
      recommended: 'Students interested in news, communication, storytelling, media, and journalism careers.',
      fullForm: 'History, Economics, Journalism',
      hasEconomics: true,
      hasHistory: true,
      mediaCommunicationFocus: 'Strong',
      digitalMediaScope: 'Good',
      publicRelationsScope: 'Very Strong',
      mainExams: 'CUET, Media Entrance Exams, Journalism Entrance Tests',
      careerFlexibility: 'High',
      commonCareers: ['Journalist', 'News Reporter', 'Public Relations Officer', 'Media Analyst', 'News Anchor']
    },
    {
      id: 'jps',
      title: 'JPS',
      subtitle: 'Journalism, Political Science, Sociology',
      color: 'from-green-500 to-emerald-600',
      icon: '🟩',
      bestFor: [
        'Digital Media',
        'Content Creation',
        'Political Journalism',
        'Social Media Careers',
        'Media Research'
      ],
      exams: ['CUET', 'Media Entrance Exams', 'Journalism Entrance Tests'],
      difficulty: 'Medium',
      recommended: 'Students interested in communication, media production, digital platforms, and public affairs.',
      fullForm: 'Journalism, Political Science, Sociology',
      hasEconomics: false,
      hasHistory: false,
      mediaCommunicationFocus: 'Very Strong',
      digitalMediaScope: 'Very Strong',
      publicRelationsScope: 'Good',
      mainExams: 'CUET, Media Entrance Exams, Journalism Entrance Tests',
      careerFlexibility: 'Medium',
      commonCareers: ['Content Creator', 'Social Media Manager', 'Digital Content Strategist', 'Media Researcher', 'Political Journalist']
    }
  ];

  const careerOpportunities = [
    {
      id: 'journalist',
      title: 'Journalist',
      icon: Newspaper,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → HEJ/JPS → Graduation → Journalism Course → Journalist',
      skills: ['Writing', 'Investigation', 'Interviewing', 'Research', 'Storytelling'],
      scope: 'Newspapers, Magazines, News Channels, Digital Media',
      salary: '₹3-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Journalism Entrance Exams', 'Media Entrance Tests']
    },
    {
      id: 'news-reporter',
      title: 'News Reporter',
      icon: Camera,
      color: 'from-purple-500 to-indigo-600',
      roadmap: '10th → HEJ/JPS → Graduation → Reporting Course → News Reporter',
      skills: ['Reporting', 'Writing', 'Communication', 'Investigation', 'Time Management'],
      scope: 'News Channels, Newspapers, Online News Portals',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Journalism Entrance Exams', 'Media Entrance Tests']
    },
    {
      id: 'content-creator',
      title: 'Content Creator',
      icon: Video,
      color: 'from-pink-500 to-rose-600',
      roadmap: '10th → JPS → Graduation → Content Creation → Content Creator',
      skills: ['Content Creation', 'Video Production', 'Social Media', 'Creativity', 'Marketing'],
      scope: 'YouTube, Social Media, Digital Platforms, Brand Content',
      salary: '₹2-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Media Entrance Exams']
    },
    {
      id: 'pr-officer',
      title: 'Public Relations Officer',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → HEJ → Graduation → PR Course → PR Officer',
      skills: ['Communication', 'Media Relations', 'Writing', 'Event Management', 'Crisis Management'],
      scope: 'PR Agencies, Corporate Companies, Government, NGOs',
      salary: '₹4-22 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Media Entrance Exams', 'PR Certification']
    },
    {
      id: 'media-analyst',
      title: 'Media Analyst',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      roadmap: '10th → JPS → Graduation → Media Studies → Media Analyst',
      skills: ['Media Analysis', 'Research', 'Data Analysis', 'Critical Thinking', 'Reporting'],
      scope: 'Media Companies, Research Firms, Analytics Companies',
      salary: '₹5-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Media Entrance Exams', 'Analytics Certification']
    },
    {
      id: 'news-anchor',
      title: 'News Anchor',
      icon: Mic,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → HEJ → Graduation → Journalism → News Anchor',
      skills: ['Public Speaking', 'Communication', 'Presentation', 'News Sense', 'Time Management'],
      scope: 'News Channels, TV Stations, Digital News Platforms',
      salary: '₹6-30 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Journalism Entrance Exams', 'Media Entrance Tests']
    },
    {
      id: 'social-media-manager',
      title: 'Social Media Manager',
      icon: Wifi,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → JPS → Graduation → Digital Marketing → Social Media Manager',
      skills: ['Social Media Management', 'Content Creation', 'Analytics', 'Marketing', 'Communication'],
      scope: 'Digital Agencies, Companies, Brands, Startups',
      salary: '₹4-18 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Media Entrance Exams', 'Digital Marketing Certification']
    },
    {
      id: 'digital-content-strategist',
      title: 'Digital Content Strategist',
      icon: Share2,
      color: 'from-yellow-500 to-orange-600',
      roadmap: '10th → JPS → Graduation → Content Strategy → Digital Content Strategist',
      skills: ['Content Strategy', 'Digital Marketing', 'Analytics', 'Creative Thinking', 'Planning'],
      scope: 'Digital Agencies, Media Companies, Brands',
      salary: '₹6-25 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Media Entrance Exams', 'Digital Marketing Certification']
    },
    {
      id: 'radio-jockey',
      title: 'Radio Jockey',
      icon: Radio,
      color: 'from-teal-500 to-cyan-600',
      roadmap: '10th → HEJ/JPS → Graduation → Radio Course → Radio Jockey',
      skills: ['Voice Modulation', 'Communication', 'Music Knowledge', 'Entertainment', 'Quick Thinking'],
      scope: 'Radio Stations, FM Channels, Audio Platforms',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['CUET', 'Media Entrance Exams', 'Radio Certification']
    },
    {
      id: 'media-researcher',
      title: 'Media Researcher',
      icon: Brain,
      color: 'from-rose-500 to-pink-600',
      roadmap: '10th → JPS → Graduation → Media Research → Media Researcher',
      skills: ['Research Methods', 'Data Analysis', 'Media Studies', 'Academic Writing', 'Critical Analysis'],
      scope: 'Research Institutes, Universities, Media Companies',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['CUET', 'UGC NET', 'Research Programs']
    }
  ];

  const competitiveExams = [
    {
      id: 'cuet',
      title: 'CUET',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 pass',
      subjects: 'Domain Specific + Language + General Test',
      difficulty: 'Medium',
      attempts: 'Once a year',
      successRate: '15-20%',
      careers: 'University Media Programs, Journalism Courses',
      description: 'Common University Entrance Test for university admissions'
    },
    {
      id: 'journalism-entrance',
      title: 'Journalism Entrance Exams',
      icon: Newspaper,
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 pass',
      subjects: 'English, General Knowledge, Current Affairs, Writing Skills',
      difficulty: 'Medium to Hard',
      attempts: 'Varies by institute',
      successRate: '10-15%',
      careers: 'Journalism Colleges, Media Institutes, Communication Courses',
      description: 'Various journalism and mass communication entrance examinations'
    },
    {
      id: 'media-entrance',
      title: 'Media & Communication Entrance Tests',
      icon: Camera,
      color: 'from-purple-500 to-indigo-600',
      eligibility: '10+2 pass',
      subjects: 'Media Studies, Communication, General Knowledge, Creative Writing',
      difficulty: 'Medium',
      attempts: 'Varies by institute',
      successRate: '12-18%',
      careers: 'Media Colleges, Communication Institutes, Digital Media Programs',
      description: 'Media and communication program entrance examinations'
    }
  ];

  const skillCourses = [
    {
      id: 'journalism-basics',
      title: 'Journalism Basics',
      icon: Newspaper,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Essential for all journalism and media careers',
      description: 'Learn fundamental journalism principles and practices'
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking',
      icon: Mic,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Critical for news anchoring, reporting, and media presentations',
      description: 'Develop confidence and skills for public speaking'
    },
    {
      id: 'content-writing',
      title: 'Content Writing',
      icon: Edit3,
      color: 'from-purple-500 to-indigo-600',
      level: 'Beginner',
      duration: '3 months',
      relevance: 'Important for journalism, content creation, and media writing',
      description: 'Master writing skills for various media platforms'
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      icon: Video,
      color: 'from-orange-500 to-red-600',
      level: 'Intermediate',
      duration: '4 months',
      relevance: 'Essential for digital media and content creation',
      description: 'Learn video editing for media production'
    },
    {
      id: 'social-media-management',
      title: 'Social Media Management',
      icon: Wifi,
      color: 'from-cyan-500 to-teal-600',
      level: 'Intermediate',
      duration: '3 months',
      relevance: 'Critical for digital media and modern communication careers',
      description: 'Master social media platforms and management strategies'
    },
    {
      id: 'photography-videography',
      title: 'Photography & Videography',
      icon: Camera,
      color: 'from-indigo-500 to-purple-600',
      level: 'Beginner',
      duration: '4 months',
      relevance: 'Important for visual media and content creation',
      description: 'Learn photography and videography for media production'
    },
    {
      id: 'communication-skills',
      title: 'Communication Skills',
      icon: MessageSquare,
      color: 'from-yellow-500 to-orange-600',
      level: 'Beginner',
      duration: '2 months',
      relevance: 'Essential for all media and communication careers',
      description: 'Develop effective communication skills for media'
    },
    {
      id: 'digital-storytelling',
      title: 'Digital Storytelling',
      icon: Play,
      color: 'from-teal-500 to-cyan-600',
      level: 'Intermediate',
      duration: '3 months',
      relevance: 'Important for content creation and digital media',
      description: 'Master storytelling for digital platforms'
    }
  ];

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Hard': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Very Hard': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Medium to Hard': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Advanced': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
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
          onClick={() => setScreen('arts_humanities_focus')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('arts_humanities_focus')}>Arts / Humanities</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Media Focus</span>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">📹</span>
            <h1 className="text-4xl font-bold text-white">Media Focus</h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore humanities pathways focused on journalism, media, communication, content creation, public relations, and digital media careers after 10th grade.
          </p>
        </motion.div>

        {/* Stream Combination Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Stream Combination Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {streamCombinations.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all cursor-pointer"
                onClick={() => toggleCardExpansion(stream.id)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stream.color} flex items-center justify-center text-white text-2xl`}>
                    {stream.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{stream.title}</h3>
                    <p className="text-white/70">{stream.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Best For</h4>
                    <div className="space-y-1">
                      {stream.bestFor.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-white/80 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Entrance Exams</h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.exams.map((exam, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/50 text-xs">Difficulty</span>
                      <p className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(stream.difficulty)}`}>
                        {stream.difficulty}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Recommended For</h4>
                    <p className="text-white/70 text-sm">{stream.recommended}</p>
                  </div>
                </div>
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
                    <th className="px-6 py-4 text-center text-white font-semibold">HEJ</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">JPS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Full Form', hej: 'History, Economics, Journalism', jps: 'Journalism, Political Science, Sociology' },
                    { feature: 'Journalism', hej: '✅', jps: '✅' },
                    { feature: 'Economics', hej: '✅', jps: '❌' },
                    { feature: 'Political Science', hej: '❌', jps: '✅' },
                    { feature: 'Sociology', hej: '❌', jps: '✅' },
                    { feature: 'Media & Communication Focus', hej: 'Strong', jps: 'Very Strong' },
                    { feature: 'Digital Media Scope', hej: 'Good', jps: 'Very Strong' },
                    { feature: 'Public Relations Scope', hej: 'Very Strong', jps: 'Good' },
                    { feature: 'Main Entrance Exams', hej: 'CUET, Media Entrance Exams, Journalism Entrance Tests', jps: 'CUET, Media Entrance Exams, Journalism Entrance Tests' },
                    { feature: 'Career Flexibility', hej: 'High', jps: 'Medium' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white/80 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.hej}</td>
                      <td className="px-6 py-4 text-center text-white/70">{row.jps}</td>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🟦</span>
                <h3 className="text-xl font-bold text-white">Choose HEJ If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You enjoy storytelling and communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You are interested in journalism & media</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-white/80">You want careers in news, PR, or communication</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🟩</span>
                <h3 className="text-xl font-bold text-white">Choose JPS If:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You are interested in digital media and content creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You enjoy social issues and political discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-white/80">You want modern media and social media careers</span>
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
                transition={{ delay: 0.7 + index * 0.1 }}
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

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white/70 text-sm mb-1">Salary Range</h4>
                      <p className="text-white/90 text-sm">{career.salary}</p>
                    </div>
                    <div className="text-right">
                      <h4 className="text-white/70 text-sm mb-1">Main Exams</h4>
                      <p className="text-white/90 text-sm">{career.exams[0]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competitive Exams */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitiveExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                    <exam.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{exam.title}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Eligibility</span>
                    <span className="text-white/80 text-xs">{exam.eligibility}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Difficulty</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyBadge(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Success Rate</span>
                    <span className="text-white/80 text-xs">{exam.successRate}</span>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs">Career Opportunities</span>
                    <p className="text-white/80 text-sm mt-1">{exam.careers}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                    <course.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
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
                    <p className="text-white/80 text-sm mt-1">{course.relevance}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media & Communication Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Media & Communication Trends</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Digital Media Growth</h3>
                <p className="text-white/70 text-sm">Expanding digital media and content creation opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Content Creator Economy</h3>
                <p className="text-white/70 text-sm">Growing demand for content creators and influencers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Wifi className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Social Media Careers</h3>
                <p className="text-white/70 text-sm">Rising opportunities in social media management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">PR & Communication</h3>
                <p className="text-white/70 text-sm">Growing public relations and communication industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
