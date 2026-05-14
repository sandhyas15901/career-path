import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, X, Search, Filter, ChevronDown, ChevronUp, Star, TrendingUp, Award, DollarSign, BookOpen, Target, Microscope, FlaskConical, Brain, Telescope, Dna, Calculator, Database, GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PureScienceResearchScreen() {
  const { setScreen } = useApp();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streamCombinations = [
    {
      id: 'pcm',
      title: 'PCM',
      subtitle: 'Physics, Chemistry, Mathematics',
      color: 'from-blue-500 to-indigo-600',
      bestFor: ['Physics Research', 'Mathematics', 'Astronomy', 'Data & Computational Science'],
      exams: ['IISER Aptitude Test (IAT)', 'NEST', 'JEE Main', 'CUET'],
      difficulty: 'High',
      recommended: 'Students interested in theoretical science, mathematics, research, and problem-solving',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics',
        mathematics: true,
        biology: false,
        statistics: false,
        researchFocus: true,
        laboratoryScience: true,
        computationalScience: true,
        difficultyLevel: 'High',
        mainEntranceExams: ['IISER Aptitude Test', 'NEST', 'JEE Main'],
        careerFlexibility: 'Very High',
        commonCareers: ['Scientist', 'Physicist', 'Mathematician', 'Astronomer']
      }
    },
    {
      id: 'pcb',
      title: 'PCB',
      subtitle: 'Physics, Chemistry, Biology',
      color: 'from-green-500 to-emerald-600',
      bestFor: ['Biotechnology', 'Microbiology', 'Genetics', 'Biomedical Research'],
      exams: ['NEET', 'IISER Aptitude Test', 'CUET'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in biology, scientific research, healthcare innovation, and laboratory sciences',
      features: {
        fullForm: 'Physics, Chemistry, Biology',
        mathematics: false,
        biology: true,
        statistics: false,
        researchFocus: true,
        laboratoryScience: true,
        computationalScience: false,
        difficultyLevel: 'Medium-High',
        mainEntranceExams: ['NEET', 'IISER Aptitude Test', 'CUET'],
        careerFlexibility: 'High',
        commonCareers: ['Biotechnologist', 'Microbiologist', 'Geneticist', 'Laboratory Scientist']
      }
    },
    {
      id: 'pcmb',
      title: 'PCMB',
      subtitle: 'Physics, Chemistry, Mathematics, Biology',
      color: 'from-purple-500 to-pink-600',
      bestFor: ['Interdisciplinary Research', 'Bioinformatics', 'Biotechnology', 'Scientific Innovation'],
      exams: ['NEET', 'JEE Main', 'IISER Aptitude Test', 'NEST'],
      difficulty: 'High',
      recommended: 'Students interested in both mathematics and biology with strong research interest',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics, Biology',
        mathematics: true,
        biology: true,
        statistics: false,
        researchFocus: true,
        laboratoryScience: true,
        computationalScience: true,
        difficultyLevel: 'High',
        mainEntranceExams: ['NEET', 'JEE Main', 'IISER Aptitude Test'],
        careerFlexibility: 'Very High',
        commonCareers: ['Bioinformatics Scientist', 'Biotechnologist', 'Research Scientist']
      }
    },
    {
      id: 'pcms',
      title: 'PCMS',
      subtitle: 'Physics, Chemistry, Mathematics, Statistics',
      color: 'from-yellow-500 to-orange-600',
      bestFor: ['Data Science Research', 'Statistical Research', 'AI Research', 'Computational Science'],
      exams: ['IISER Aptitude Test', 'CUET', 'NEST'],
      difficulty: 'Medium–High',
      recommended: 'Students interested in statistics, analytics, research, and computational sciences',
      features: {
        fullForm: 'Physics, Chemistry, Mathematics, Statistics',
        mathematics: true,
        biology: false,
        statistics: true,
        researchFocus: true,
        laboratoryScience: false,
        computationalScience: true,
        difficultyLevel: 'Medium-High',
        mainEntranceExams: ['IISER Aptitude Test', 'CUET', 'NEST'],
        careerFlexibility: 'High',
        commonCareers: ['Data Science Researcher', 'AI Researcher', 'Statistical Analyst']
      }
    }
  ];

  const recommendations = [
    {
      id: 'pcm',
      color: 'from-blue-500 to-indigo-600',
      title: 'Choose PCM If:',
      reasons: [
        'You enjoy Physics & Mathematics',
        'You are interested in theoretical science',
        'You want research-oriented careers'
      ]
    },
    {
      id: 'pcb',
      color: 'from-green-500 to-emerald-600',
      title: 'Choose PCB If:',
      reasons: [
        'You enjoy Biology & laboratory science',
        'You are interested in healthcare research',
        'You want biotechnology-related careers'
      ]
    },
    {
      id: 'pcmb',
      color: 'from-purple-500 to-pink-600',
      title: 'Choose PCMB If:',
      reasons: [
        'You enjoy both Mathematics & Biology',
        'You want interdisciplinary science careers',
        'You are interested in innovation & research'
      ]
    },
    {
      id: 'pcms',
      color: 'from-yellow-500 to-orange-600',
      title: 'Choose PCMS If:',
      reasons: [
        'You enjoy statistics & analytics',
        'You are interested in AI & computational science',
        'You like logical and research-oriented work'
      ]
    }
  ];

  const careerPaths = [
    {
      id: 'scientist',
      title: 'Scientist',
      icon: Microscope,
      color: 'from-blue-500 to-indigo-600',
      roadmap: '10th → PCM/PCMB → IAT/NEST → B.Sc/M.Sc → PhD → Research',
      skills: ['Research', 'Critical Thinking', 'Problem Solving', 'Data Analysis'],
      scope: 'Research Institutes, Universities, Government Labs, Private R&D',
      salary: '₹6-30 LPA (Entry Level to Senior)',
      exams: ['IISER Aptitude Test', 'NEST', 'CUET']
    },
    {
      id: 'research',
      title: 'Research Analyst',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → PCM/PCMS → IAT/NEST → B.Sc → Research Analyst',
      skills: ['Analysis', 'Statistics', 'Report Writing', 'Critical Thinking'],
      scope: 'Research Organizations, Consulting, Government Agencies',
      salary: '₹4-15 LPA (Entry Level to Senior)',
      exams: ['IISER Aptitude Test', 'NEST', 'CUET']
    },
    {
      id: 'physicist',
      title: 'Physicist',
      icon: Telescope,
      color: 'from-cyan-500 to-teal-600',
      roadmap: '10th → PCM → JEE/IAT → B.Sc/M.Sc → Physics Research',
      skills: ['Mathematics', 'Physics', 'Problem Solving', 'Research'],
      scope: 'Research Institutes, Astronomy, Quantum Computing, Academia',
      salary: '₹5-25 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'IISER Aptitude Test', 'NEST']
    },
    {
      id: 'biotechnologist',
      title: 'Biotechnologist',
      icon: Dna,
      color: 'from-green-500 to-emerald-600',
      roadmap: '10th → PCB/PCMB → NEET/IAT → B.Sc/M.Sc → Biotechnology',
      skills: ['Biology', 'Chemistry', 'Research', 'Laboratory Skills'],
      scope: 'Biotech Companies, Research Labs, Healthcare, Agriculture',
      salary: '₹4-20 LPA (Entry Level to Senior)',
      exams: ['NEET', 'IISER Aptitude Test', 'CUET']
    },
    {
      id: 'microbiologist',
      title: 'Microbiologist',
      icon: FlaskConical,
      color: 'from-emerald-500 to-green-600',
      roadmap: '10th → PCB → NEET/IAT → B.Sc/M.Sc → Microbiology',
      skills: ['Biology', 'Laboratory Skills', 'Research', 'Analysis'],
      scope: 'Healthcare, Food Industry, Research Labs, Pharma',
      salary: '₹3-15 LPA (Entry Level to Senior)',
      exams: ['NEET', 'IISER Aptitude Test', 'CUET']
    },
    {
      id: 'geneticist',
      title: 'Geneticist',
      icon: Dna,
      color: 'from-red-500 to-orange-600',
      roadmap: '10th → PCB/PCMB → NEET/IAT → B.Sc/M.Sc → Genetics',
      skills: ['Biology', 'Genetics', 'Research', 'Data Analysis'],
      scope: 'Healthcare, Research Labs, Gene Therapy, Agriculture',
      salary: '₹5-22 LPA (Entry Level to Senior)',
      exams: ['NEET', 'IISER Aptitude Test', 'CUET']
    },
    {
      id: 'astronomer',
      title: 'Astronomer',
      icon: Telescope,
      color: 'from-indigo-500 to-purple-600',
      roadmap: '10th → PCM → JEE/IAT → B.Sc/M.Sc → Astronomy',
      skills: ['Physics', 'Mathematics', 'Computing', 'Research'],
      scope: 'Space Research, Observatories, Academia, Government',
      salary: '₹6-28 LPA (Entry Level to Senior)',
      exams: ['JEE Main', 'IISER Aptitude Test', 'NEST']
    },
    {
      id: 'datascience',
      title: 'Data Science Researcher',
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      roadmap: '10th → PCMS → IAT/NEST → B.Sc/M.Sc → Data Science',
      skills: ['Statistics', 'Programming', 'Machine Learning', 'Research'],
      scope: 'Research Labs, Tech Companies, Academia, Government',
      salary: '₹5-25 LPA (Entry Level to Senior)',
      exams: ['IISER Aptitude Test', 'NEST', 'CUET']
    },
    {
      id: 'airesearch',
      title: 'AI Researcher',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      roadmap: '10th → PCMS/PCMB → IAT/NEST → B.Sc/M.Sc → AI Research',
      skills: ['Mathematics', 'Programming', 'AI/ML', 'Research'],
      scope: 'AI Labs, Tech Companies, Research Institutes, Academia',
      salary: '₹6-30 LPA (Entry Level to Senior)',
      exams: ['IISER Aptitude Test', 'NEST', 'CUET']
    },
    {
      id: 'laboratory',
      title: 'Laboratory Scientist',
      icon: FlaskConical,
      color: 'from-green-500 to-teal-600',
      roadmap: '10th → PCB/PCMB → NEET/IAT → B.Sc/M.Sc → Lab Science',
      skills: ['Laboratory Skills', 'Analysis', 'Research', 'Safety'],
      scope: 'Research Labs, Healthcare, Quality Control, Pharma',
      salary: '₹3-12 LPA (Entry Level to Senior)',
      exams: ['NEET', 'IISER Aptitude Test', 'CUET']
    }
  ];

  const researchInstitutes = [
    {
      id: 'iisc',
      title: 'IISc Bangalore',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      specialization: 'Pure Sciences & Engineering Research',
      courses: ['B.Sc Research', 'M.Sc', 'PhD', 'Integrated M.Sc-PhD'],
      researchFields: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Engineering'],
      description: 'Indian Institute of Science - Premier research institution'
    },
    {
      id: 'iiser',
      title: 'IISER',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-600',
      specialization: 'Science Education & Research',
      courses: ['BS-MS Dual Degree', 'PhD', 'Post Doc'],
      researchFields: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Earth Sciences'],
      description: 'Indian Institutes of Science Education and Research - Multiple campuses'
    },
    {
      id: 'tifr',
      title: 'TIFR',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-600',
      specialization: 'Fundamental Research',
      courses: ['M.Sc', 'PhD', 'Integrated PhD'],
      researchFields: ['Physics', 'Mathematics', 'Chemistry', 'Biology', 'Computer Science'],
      description: 'Tata Institute of Fundamental Research - Leading research institute'
    },
    {
      id: 'aiims',
      title: 'AIIMS Research',
      icon: GraduationCap,
      color: 'from-red-500 to-orange-600',
      specialization: 'Medical Research',
      courses: ['MBBS', 'MD', 'PhD', 'Post Doc'],
      researchFields: ['Medical Sciences', 'Biotechnology', 'Genetics', 'Pharmacology'],
      description: 'All India Institute of Medical Sciences - Medical research excellence'
    },
    {
      id: 'ncbs',
      title: 'NCBS',
      icon: GraduationCap,
      color: 'from-cyan-500 to-teal-600',
      specialization: 'Biological Sciences',
      courses: ['M.Sc', 'PhD', 'Post Doc'],
      researchFields: ['Biology', 'Neuroscience', 'Biophysics', 'Bioinformatics'],
      description: 'National Centre for Biological Sciences - Biology research'
    },
    {
      id: 'isro',
      title: 'ISRO Research Centers',
      icon: Telescope,
      color: 'from-yellow-500 to-orange-600',
      specialization: 'Space Science & Technology',
      courses: ['M.Sc', 'PhD', 'Research Fellowships'],
      researchFields: ['Space Science', 'Astronomy', 'Satellite Technology', 'Remote Sensing'],
      description: 'Indian Space Research Organization - Space research'
    }
  ];

  const skillCourses = [
    {
      id: 'research-basics',
      title: 'Scientific Research Basics',
      icon: Microscope,
      color: 'from-blue-500 to-indigo-600',
      level: 'Beginner',
      duration: '3-6 months',
      relevance: 'Very High - Foundation for all research careers',
      description: 'Research methodology, experimental design, scientific writing'
    },
    {
      id: 'python-research',
      title: 'Python for Research',
      icon: Calculator,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      duration: '2-4 months',
      relevance: 'Very High - Essential for computational research',
      description: 'Python programming for data analysis, simulation, and research'
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      level: 'Intermediate',
      duration: '4-6 months',
      relevance: 'High - Critical for research data interpretation',
      description: 'Statistical analysis, data visualization, research analytics'
    },
    {
      id: 'lab-skills',
      title: 'Laboratory Skills',
      icon: FlaskConical,
      color: 'from-cyan-500 to-teal-600',
      level: 'Beginner',
      duration: '3-6 months',
      relevance: 'High - Essential for experimental research',
      description: 'Lab techniques, safety protocols, equipment handling'
    },
    {
      id: 'bioinformatics',
      title: 'Bioinformatics Basics',
      icon: Dna,
      color: 'from-emerald-500 to-green-600',
      level: 'Intermediate',
      duration: '6-12 months',
      relevance: 'High - Important for biological research',
      description: 'Computational biology, sequence analysis, bioinformatics tools'
    },
    {
      id: 'ai-computational',
      title: 'AI & Computational Science',
      icon: Brain,
      color: 'from-red-500 to-orange-600',
      level: 'Intermediate',
      duration: '6-12 months',
      relevance: 'Very High - Future of research methodology',
      description: 'Machine learning for research, computational modeling, AI applications'
    },
    {
      id: 'scientific-writing',
      title: 'Scientific Writing',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-600',
      level: 'Beginner',
      duration: '2-3 months',
      relevance: 'High - Essential for research communication',
      description: 'Research papers, thesis writing, scientific documentation'
    },
    {
      id: 'statistics-research',
      title: 'Statistics for Research',
      icon: Calculator,
      color: 'from-indigo-500 to-purple-600',
      level: 'Intermediate',
      duration: '4-8 months',
      relevance: 'Very High - Foundation for data-driven research',
      description: 'Statistical methods, hypothesis testing, research statistics'
    }
  ];

  const entranceExams = [
    {
      id: 'iiser-at',
      title: 'IISER Aptitude Test (IAT)',
      color: 'from-blue-500 to-indigo-600',
      eligibility: '10+2 with PCM/PCMB/PCMS with 60% marks',
      subjects: 'Physics, Chemistry, Mathematics, Biology',
      difficulty: 'High',
      courses: ['BS-MS Dual Degree', 'PhD', 'Integrated Programs'],
      description: 'Entrance exam for IISERs - Premier science research institutions'
    },
    {
      id: 'nest',
      title: 'NEST',
      color: 'from-green-500 to-emerald-600',
      eligibility: '10+2 with PCM/PCMB/PCMS with 60% marks',
      subjects: 'Physics, Chemistry, Mathematics, Biology',
      difficulty: 'High',
      courses: ['Integrated M.Sc', 'PhD', 'Research Programs'],
      description: 'National Entrance Screening Test for NISER and CEBS'
    },
    {
      id: 'cuet',
      title: 'CUET',
      color: 'from-purple-500 to-pink-600',
      eligibility: '10+2 pass',
      subjects: 'Domain specific + Language',
      difficulty: 'Low-Medium',
      courses: ['B.Sc', 'M.Sc', 'PhD', 'Research Programs'],
      description: 'Common University Entrance Test for central university science programs'
    },
    {
      id: 'jee-main',
      title: 'JEE Main',
      color: 'from-cyan-500 to-teal-600',
      eligibility: '10+2 with PCM/PCMB/PCMS with 75% marks',
      subjects: 'Physics, Chemistry, Mathematics',
      difficulty: 'High',
      courses: ['B.Sc Physics', 'B.Sc Mathematics', 'Research Programs'],
      description: 'Joint Entrance Examination for science and engineering programs'
    },
    {
      id: 'neet',
      title: 'NEET',
      color: 'from-red-500 to-orange-600',
      eligibility: '10+2 with PCB/PCMB with 50% marks',
      subjects: 'Physics, Chemistry, Biology',
      difficulty: 'High',
      courses: ['MBBS', 'B.Sc Biotechnology', 'Research Programs'],
      description: 'National Eligibility Cum Entrance Test for medical and biological sciences'
    }
  ];

  const filteredCombinations = streamCombinations.filter(combination =>
    combination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    combination.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors: { [key: string]: string } = {
      'High': 'bg-red-500/20 text-red-300 border-red-500/30',
      'Medium–High': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Medium': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Very High': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Low-Medium': 'bg-green-500/20 text-green-300 border-green-500/30'
    };
    return colors[difficulty] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const getLevelBadge = (level: string) => {
    const colors: { [key: string]: string } = {
      'Beginner': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Intermediate': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Advanced': 'bg-red-500/20 text-red-300 border-red-500/30'
    };
    return colors[level] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
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
          onClick={() => setScreen('science_streams')}
          className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Progress Breadcrumb */}
        <div className="flex items-center justify-center mb-8 text-white/70 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses')}>Academic Courses</span>
          <span className="mx-2">→</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('science_streams')}>Science</span>
          <span className="mx-2">→</span>
          <span className="text-white font-medium">Pure Science & Research</span>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            🔬 Pure Science & Research
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore science-focused subject combinations after 10th grade for research, scientific discovery, innovation, and advanced academic careers.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search combinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
            />
          </div>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </motion.div>

        {/* Stream Combination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCombinations.map((combination, index) => (
            <motion.div
              key={combination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all cursor-pointer"
              onClick={() => toggleExpanded(combination.id)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${combination.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {combination.title}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{combination.title}</h3>
                  <p className="text-white/70 text-sm">{combination.subtitle}</p>
                </div>
                <div className="flex items-center gap-1">
                  {expandedCard === combination.id ? (
                    <ChevronUp className="w-5 h-5 text-white/50" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/50" />
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Best For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {combination.bestFor.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Entrance Exams:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {combination.exams.map((exam, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium mb-1">Difficulty:</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyBadge(combination.difficulty)}`}>
                      {combination.difficulty}
                    </span>
                  </div>
                </div>

                {expandedCard === combination.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <p className="text-white/70 text-sm leading-relaxed">
                      <strong>Recommended For:</strong> {combination.recommended}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 font-medium">PCM</th>
                  <th className="text-center py-3 px-4 font-medium">PCB</th>
                  <th className="text-center py-3 px-4 font-medium">PCMB</th>
                  <th className="text-center py-3 px-4 font-medium">PCMS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Full Form</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Biology</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics, Biology</td>
                  <td className="text-center py-3 px-4 text-sm">Physics, Chemistry, Mathematics, Statistics</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Biology</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Statistics</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Research Focus</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Laboratory Science</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Computational Science</td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Difficulty Level</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-sm">Medium-High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-sm">Medium-High</span>
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Career Flexibility</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Very High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Very High</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">High</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* "Choose This If..." Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose This If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rec.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {rec.id.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{rec.title}</h3>
                <ul className="space-y-2">
                  {rec.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Paths Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {careerPaths.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
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
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Roadmap:
                    </h4>
                    <p className="text-white/70 text-xs">{career.roadmap}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Scope:
                    </h4>
                    <p className="text-white/70 text-xs">{career.scope}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Salary:
                    </h4>
                    <p className="text-white/70 text-xs">{career.salary}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Exams:</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.exams.map((exam, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Institutes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Research Institutes & Colleges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInstitutes.map((institute, index) => (
              <motion.div
                key={institute.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${institute.color} flex items-center justify-center text-white`}>
                    <institute.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{institute.title}</h3>
                    <p className="text-white/70 text-sm">{institute.specialization}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {institute.courses.map((course, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Research Fields:</h4>
                    <div className="flex flex-wrap gap-1">
                      {institute.researchFields.map((field, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Description:</h4>
                    <p className="text-white/70 text-sm">{institute.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Skill Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.05, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                    <course.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{course.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelBadge(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Duration:</h4>
                    <p className="text-white/70 text-sm">{course.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Career Relevance:</h4>
                    <p className="text-white/70 text-sm">{course.relevance}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Description:</h4>
                    <p className="text-white/70 text-sm">{course.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Entrance Exams Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entranceExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {exam.title}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Eligibility:</h4>
                    <p className="text-white/70 text-sm">{exam.eligibility}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Subjects:</h4>
                    <p className="text-white/70 text-sm">{exam.subjects}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Difficulty:</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyBadge(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exam.courses.map((course, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Description:
                    </h4>
                    <p className="text-white/70 text-sm">{exam.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
