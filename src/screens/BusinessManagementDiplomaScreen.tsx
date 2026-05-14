import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Users, TrendingUp, CheckCircle, BookOpen, Award, Target, BarChart3, ChevronRight, GraduationCap, Building2, Calendar, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface BusinessManagementDiplomaScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const BusinessManagementDiplomaScreen: React.FC<BusinessManagementDiplomaScreenProps> = ({ setScreen }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const courseData = {
    icon: '🟦',
    color: 'from-blue-500 to-blue-600',
    title: 'Business Management Diploma',
    subtitle: 'Master business operations, team management, organizational skills, and corporate administration',
    duration: '2–3 Years',
    difficulty: 'Medium',
    industryDemand: 'High',
    salary: '₹3-12 LPA',
    eligibility: '10th pass with minimum 50% marks',
    description: 'Develop comprehensive business management skills including operations, team leadership, strategic planning, and organizational development for modern business environments.',
    coreFocus: 'Business operations, management principles, corporate administration',
    technicalLevel: 'Medium',
    creativeLevel: 'High',
    skills: ['Leadership', 'Communication', 'Planning', 'Problem Solving'],
    careerPaths: [
      {
        title: 'Business Operations Executive',
        description: 'Oversee daily business operations and improve processes',
        salary: '₹4-12 LPA',
        growth: 'Operations Manager → Business Head'
      },
      {
        title: 'Office Administrator',
        description: 'Manage administrative tasks and office operations',
        salary: '₹3-8 LPA',
        growth: 'Senior Administrator → Office Manager'
      },
      {
        title: 'Management Support Executive',
        description: 'Support senior management with strategic tasks',
        salary: '₹3-10 LPA',
        growth: 'Support Executive → Management Assistant'
      }
    ],
    higherStudies: [
      {
        title: 'BBA Lateral Entry',
        description: 'Direct admission to 2nd year of Bachelor of Business Administration',
        eligibility: 'Diploma with 60% marks'
      },
      {
        title: 'B.Com Specialization',
        description: 'Direct admission to 2nd year of Bachelor of Commerce',
        eligibility: 'Diploma with 60% marks'
      },
      {
        title: 'MBA Programs',
        description: 'Master of Business Administration with various specializations',
        eligibility: 'Diploma + work experience + entrance exam'
      }
    ],
    certifications: [
      {
        title: 'Project Management Professional',
        issuer: 'PMI Institute',
        duration: '3-6 months preparation'
      },
      {
        title: 'Six Sigma Certification',
        issuer: 'Various Quality Institutes',
        duration: '2-3 months'
      },
      {
        title: 'Business Analytics Certification',
        issuer: 'Various Analytics Institutes',
        duration: '4-6 months'
      }
    ],
    curriculum: [
      {
        semester: 'Year 1',
        subjects: ['Business Communication', 'Management Principles', 'Business Mathematics', 'Organizational Behavior', 'Business Economics', 'Accounting Basics']
      },
      {
        semester: 'Year 2',
        subjects: ['Marketing Management', 'Financial Management', 'Human Resource Management', 'Business Law', 'Operations Management', 'Strategic Management']
      },
      {
        semester: 'Year 3',
        subjects: ['Entrepreneurship Development', 'Business Analytics', 'International Business', 'Supply Chain Management', 'Quality Management', 'Project Management']
      }
    ],
    industryPartners: [
      {
        name: 'Corporate Partners',
        type: 'Internship & Placement'
      },
      {
        name: 'Business Schools',
        type: 'Guest Lectures & Projects'
      },
      {
        name: 'Management Consulting Firms',
        type: 'Case Studies & Workshops'
      }
    ],
    governmentJobs: [
      {
        title: 'Management Trainee',
        department: 'Various Government Departments',
        salary: '₹3-6 LPA',
        eligibility: '10th/12th pass + entrance exam'
      },
      {
        title: 'Office Assistant',
        department: 'Government Offices',
        salary: '₹2-5 LPA',
        eligibility: '10th/12th pass + computer knowledge'
      },
      {
        title: 'Junior Manager',
        department: 'Public Sector Undertakings',
        salary: '₹4-8 LPA',
        eligibility: 'Graduate + diploma'
      }
    ],
    faq: [
      {
        question: 'What is the scope of Business Management diploma?',
        answer: 'Excellent scope in corporate sector, startups, consulting, and various management roles across industries.'
      },
      {
        question: 'Can I pursue MBA after this diploma?',
        answer: 'Yes, you can get lateral entry to BBA 2nd year or pursue MBA after graduation with work experience.'
      },
      {
        question: 'What skills are most important for success?',
        answer: 'Leadership, communication, analytical thinking, problem-solving, and adaptability are crucial for success.'
      }
    ]
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => setScreen('commerce-business' as any)} className="absolute top-8 left-6 p-2 hover:bg-white/10 transition-all rounded-lg">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Breadcrumb Navigation */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-8">
          <div className="flex items-center justify-center text-white/70 text-sm flex-wrap">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('academic_courses' as any)}>Academic Courses</span>
            <span className="mx-2">→</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('diploma_polytechnic' as any)}>Diploma / Polytechnic</span>
            <span className="mx-2">→</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('commerce-business' as any)}>Commerce & Business Diplomas</span>
            <span className="mx-2">→</span>
            <span className="text-white font-medium">Business Management Diploma</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${courseData.color} flex items-center justify-center text-white text-4xl`}>{courseData.icon}</div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{courseData.title}</h1>
                <p className="text-white/80 text-lg mb-4">{courseData.subtitle}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white/70" />
                    <span className="text-white/70 text-sm">{courseData.duration}</span>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${getDifficultyBadge(courseData.difficulty)}`}>{courseData.difficulty}</span>
                  </div>
                  <div className={`px-3 py-1 rounded text-sm font-medium ${getDemandBadge(courseData.industryDemand)}`}>{courseData.industryDemand} Demand</div>
                  <div className="text-white font-medium text-sm">Avg Salary: {courseData.salary}</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Eligibility</h3>
                <p className="text-white/80 text-sm">{courseData.eligibility}</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Industry Demand</h3>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className={`px-3 py-1 rounded text-sm font-medium ${getDemandBadge(courseData.industryDemand)}`}>{courseData.industryDemand}</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Career Growth</h3>
                <p className="text-white/80 text-sm">Excellent opportunities in corporate sector and management roles</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Description */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">About This Program</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">{courseData.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Core Focus Areas
                </h3>
                <p className="text-white/80 text-sm">{courseData.coreFocus}</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Technical & Creative Balance
                </h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Technical: {courseData.technicalLevel}</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">Creative: {courseData.creativeLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Skills You'll Develop</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {courseData.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: 0.5 + index * 0.1 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-medium text-sm">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Paths Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Progression Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.careerPaths.map((path, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{path.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{path.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">Starting Salary</span>
                      <span className="text-white font-medium text-sm">{path.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">Growth Path</span>
                    </div>
                    <p className="text-green-400 text-sm font-medium">{path.growth}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Higher Studies Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Higher Studies & Progression</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.higherStudies.map((study, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">{study.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-3">{study.description}</p>
                  <p className="text-white/70 text-xs bg-blue-500/20 rounded px-3 py-2 inline-block">
                    {study.eligibility}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Professional Certifications</h2>
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={() => toggleSection('certifications')}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all"
              >
                <span className="text-sm">{expandedSection === 'certifications' ? 'View Less' : 'View More'}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${expandedSection === 'certifications' ? 'rotate-90' : ''}`} />
              </button>
            </div>
            
            <AnimatePresence>
              {expandedSection === 'certifications' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }} 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                >
                  {courseData.certifications.map((cert, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      transition={{ delay: index * 0.05 }} 
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-3">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-white/70" />
                        <span className="text-white/70 text-sm">{cert.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Industry Partners Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Industry Partners & Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.industryPartners.map((partner, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.9 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{partner.name}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">{partner.type}</span>
                  <p className="text-white/80 text-sm mt-2">Collaboration opportunities for real-world experience and networking</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Government Jobs Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Government Job Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.governmentJobs.map((job, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 1.0 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-3">{job.department}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">Salary Range</span>
                      <span className="text-white font-medium text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-white/70 text-sm">Eligibility</span>
                    </div>
                    <p className="text-white/70 text-xs bg-green-500/20 rounded px-3 py-2 inline-block">
                      {job.eligibility}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Curriculum Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Course Curriculum</h2>
            <div className="space-y-6">
              {courseData.curriculum.map((semester, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 1.1 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    {semester.semester}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {semester.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {courseData.faq.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-400" />
                    {item.question}
                  </h3>
                  <p className="text-white/80 text-sm">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Start Your Business Management Journey?</h2>
            <p className="text-white/80 text-lg mb-8">Gain the skills and knowledge needed to excel in business management and leadership roles across industries.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors">
                Explore Similar Programs
              </button>
              <button className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-xl border border-white/30 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default BusinessManagementDiplomaScreen;
