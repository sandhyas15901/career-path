import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, TrendingUp, Globe, CheckCircle, BookOpen, Target, BarChart3, ChevronRight, GraduationCap, Building2, Shield, HelpCircle } from 'lucide-react';
import { AppScreen } from '../context/AppContext';

interface DigitalMarketingEcommerceDiplomaScreenProps {
  setScreen: (screen: AppScreen) => void;
}

const DigitalMarketingEcommerceDiplomaScreen: React.FC<DigitalMarketingEcommerceDiplomaScreenProps> = ({ setScreen }) => {

  const courseData = {
    icon: '🟪',
    color: 'from-orange-500 to-orange-600',
    title: 'Digital Marketing & E-Commerce Diploma',
    subtitle: 'Master social media marketing, online business, SEO & advertising, and e-commerce platforms',
    duration: '1–2 Years',
    difficulty: 'Easy',
    industryDemand: 'Very High',
    salary: '₹3-16 LPA',
    eligibility: '10th pass with minimum 50% marks',
    description: 'Develop comprehensive digital marketing and e-commerce skills including social media management, SEO techniques, content creation, and e-commerce platform management for modern digital business environments.',
    coreFocus: 'Digital marketing, e-commerce platforms, social Media Management',
    technicalLevel: 'Medium',
    creativeLevel: 'High',
    skills: ['Digital Marketing', 'SEO', 'Social Media', 'Content Creation', 'E-Commerce', 'Analytics'],
    careerPaths: [
      {
        title: 'Digital Marketing Executive',
        description: 'Create and manage digital marketing campaigns across various platforms',
        salary: '₹3-16 LPA',
        growth: 'Marketing Manager → Digital Marketing Head'
      },
      {
        title: 'SEO Assistant',
        description: 'Optimize websites and improve search engine rankings',
        salary: '₹3-14 LPA',
        growth: 'SEO Manager → Digital Marketing Manager'
      },
      {
        title: 'Social Media Executive',
        description: 'Manage social media presence and engagement strategies',
        salary: '₹3-12 LPA',
        growth: 'Social Media Manager → Digital Marketing Head'
      }
    ],
    higherStudies: [
      {
        title: 'BBA Digital Marketing Lateral Entry',
        description: 'Direct admission to 2nd year of BBA with digital marketing specialization',
        eligibility: 'Diploma with 60% marks'
      },
      {
        title: 'B.Com E-Commerce Specialization',
        description: 'Direct admission to 2nd year of B.Com with e-commerce focus',
        eligibility: 'Diploma + entrance exam'
      },
      {
        title: 'Digital Marketing Certification Programs',
        description: 'Professional digital Marketing certifications',
        eligibility: 'Diploma + work experience'
      }
    ],
    certifications: [
      {
        title: 'Google Digital Marketing Certificate',
        issuer: 'Google',
        duration: '3 months'
      },
      {
        title: 'Facebook Blueprint Certification',
        issuer: 'Meta',
        duration: '2 months'
      },
      {
        title: 'SEO Professional Certification',
        issuer: 'Various SEO Institutes',
        duration: '4 months'
      }
    ],
    curriculum: [
      {
        semester: 'Year 1',
        subjects: ['Digital Marketing Fundamentals', 'Social Media Marketing', 'Content Creation', 'SEO Basics', 'Web Analytics', 'E-Commerce Introduction']
      },
      {
        semester: 'Year 2',
        subjects: ['Advanced SEO', 'Social Media Strategy', 'Email Marketing', 'Paid Advertising', 'E-Commerce Management', 'Digital Analytics']
      }
    ],
    industryPartners: [
      {
        name: 'Digital Marketing Agencies',
        type: 'Internship & Placement'
      },
      {
        name: 'E-Commerce Companies',
        type: 'Guest Lectures & Projects'
      },
      {
        name: 'Social Media Platforms',
        type: 'Case Studies & Workshops'
      }
    ],
    governmentJobs: [
      {
        title: 'Digital Marketing Executive',
        department: 'Digital India Corporation',
        salary: '₹4-12 LPA',
        eligibility: '10th/12th pass + digital marketing knowledge'
      },
      {
        title: 'Social Media Manager',
        department: 'Various Government Departments',
        salary: '₹3-10 LPA',
        eligibility: 'Graduate + social Media expertise'
      },
      {
        title: 'E-Commerce Executive',
        department: 'Government E-Commerce Initiatives',
        salary: '₹3-8 LPA',
        eligibility: '10th/12th pass + e-commerce Knowledge'
      }
    ],
    faq: [
      {
        question: 'What is the scope of Digital Marketing & E-Commerce diploma?',
        answer: 'Excellent scope in digital Marketing agencies, e-commerce companies, social Media management, and content creation roles.'
      },
      {
        question: 'Can I pursue specialized digital Marketing courses after this diploma?',
        answer: 'Yes, you can specialize in SEO, social Media marketing, content Marketing, or e-commerce management with advanced certifications.'
      },
      {
        question: 'What skills are most important for success?',
        answer: 'Digital Marketing knowledge, social Media expertise, SEO skills, content creation ability, and analytics understanding are crucial.'
      }
    ]
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      
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
            <span className="text-white font-medium">Digital Marketing & E-Commerce Diploma</span>
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
                <p className="text-white/80 text-sm">Excellent opportunities in digital marketing and e-commerce</p>
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
                  <Target className="w-5 h-5 text-orange-400" />
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courseData.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: 0.5 + index * 0.1 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-orange-400" />
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
                      <ChevronRight className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">Growth Path</span>
                    </div>
                    <p className="text-orange-400 text-sm font-medium">{path.growth}</p>
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
                    <GraduationCap className="w-6 h-6 text-orange-400" />
                    <h3 className="text-lg font-bold text-white">{study.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-3">{study.description}</p>
                  <p className="text-white/70 text-xs bg-orange-500/20 rounded px-3 py-2 inline-block">
                    {study.eligibility}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industry Partners Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Industry Partners & Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.industryPartners.map((partner, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Government Job Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.governmentJobs.map((job, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.9 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-orange-400" />
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
                    <p className="text-white/70 text-xs bg-orange-500/20 rounded px-3 py-2 inline-block">
                      {job.eligibility}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Curriculum Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Course Curriculum</h2>
            <div className="space-y-6">
              {courseData.curriculum.map((semester, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 1.0 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-orange-400" />
                    {semester.semester}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {semester.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {courseData.faq.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 1.1 + index * 0.1, type: 'spring', stiffness: 200, damping: 25 }} 
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Start Your Digital Marketing Journey?</h2>
            <p className="text-white/80 text-lg mb-8">Gain the skills and knowledge needed to excel in digital marketing and e-commerce roles across industries.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-colors">
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

export default DigitalMarketingEcommerceDiplomaScreen;
