import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Wrench, Car, Cpu, Building2, Microchip, Scissors, Utensils, Sprout, HeartPulse, ChevronRight, TrendingUp, Briefcase, Target, Award, Clock, Building, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface VocationalCareerPathScreenProps {
  streamId: string;
}

interface CareerPathStep {
  title: string;
  description: string;
  duration: string;
  salary?: string;
  skills: string[];
  certifications?: string[];
}

interface SubStream {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
  careerPath: CareerPathStep[];
  jobRoles: string[];
  industries: string[];
  governmentJobs?: string[];
}

const vocationalCareerPaths: Record<string, SubStream[]> = {
  electrical: [
    {
      id: 'electrician',
      title: 'Electrician',
      icon: Zap,
      color: 'from-yellow-500 to-amber-600',
      description: 'Specialize in electrical wiring, installation, maintenance, and repair of electrical systems in residential, commercial, and industrial settings.',
      careerPath: [
        {
          title: 'ITI Electrician Certificate',
          description: 'Foundation course in electrical wiring, circuits, safety protocols, and basic electrical systems.',
          duration: '2 years',
          salary: '₹8,000-15,000/month',
          skills: ['Electrical Wiring', 'Circuit Design', 'Safety Protocols', 'Basic Electronics', 'Reading Blueprints'],
          certifications: ['ITI Electrician Certificate', 'NSQF Level 4']
        },
        {
          title: 'Apprentice / Helper',
          description: 'On-the-job training under senior electricians, gaining practical experience in installation and maintenance.',
          duration: '1-2 years',
          salary: '₹12,000-20,000/month',
          skills: ['Hands-on Installation', 'Troubleshooting', 'Team Coordination', 'Site Safety'],
          certifications: ['Apprenticeship Certificate (NATS/NAPS)']
        },
        {
          title: 'Junior Electrician',
          description: 'Independent work on residential and small commercial projects, handling installation and basic repairs.',
          duration: '2-3 years',
          salary: '₹18,000-30,000/month',
          skills: ['Project Management', 'Advanced Troubleshooting', 'Client Communication', 'Quality Control'],
          certifications: ['Wireman License', 'Electrical Supervisor Certificate']
        },
        {
          title: 'Senior Electrician / Supervisor',
          description: 'Lead teams, manage large projects, handle industrial electrical systems, and ensure compliance with regulations.',
          duration: '3+ years',
          salary: '₹30,000-50,000/month',
          skills: ['Team Leadership', 'Industrial Systems', 'Regulatory Compliance', 'Cost Estimation', 'Training'],
          certifications: ['Electrical Contractor License', 'Safety Auditor Certificate']
        },
        {
          title: 'Electrical Contractor / Consultant',
          description: 'Start own electrical contracting business or work as consultant for large projects and industrial setups.',
          duration: '5+ years',
          salary: '₹50,000-1,50,000/month',
          skills: ['Business Management', 'Project Bidding', 'Client Relations', 'Financial Planning', 'Team Building'],
          certifications: ['Class A Electrical Contractor License', 'ISO Certification']
        }
      ],
      jobRoles: ['Electrician', 'Wireman', 'Electrical Supervisor', 'Maintenance Electrician', 'Industrial Electrician', 'Electrical Contractor'],
      industries: ['Construction', 'Manufacturing', 'Real Estate', 'Power Sector', 'Automotive', 'Infrastructure'],
      governmentJobs: ['Railways (JE/Technician)', 'State Electricity Board', 'PWD', 'BESCOM', 'DRDO', 'ISRO']
    },
    {
      id: 'power-systems',
      title: 'Power Systems Technician',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      description: 'Work with power generation, transmission, and distribution systems including transformers, switchgear, and substations.',
      careerPath: [
        {
          title: 'ITI Electrical (Power Systems)',
          description: 'Specialized training in power systems, transformers, switchgear, and high-voltage equipment.',
          duration: '2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Power Systems', 'Transformer Maintenance', 'Switchgear Operations', 'High Voltage Safety'],
          certifications: ['ITI Electrical Certificate', 'HV Switching Authorization']
        },
        {
          title: 'Power Plant Trainee',
          description: 'Training in power plant operations, maintenance of generators, and distribution systems.',
          duration: '1-2 years',
          salary: '₹15,000-25,000/month',
          skills: ['Plant Operations', 'Generator Maintenance', 'Distribution Systems', 'Emergency Procedures'],
          certifications: ['Power Plant Operations Certificate']
        },
        {
          title: 'Power Systems Technician',
          description: 'Maintain and repair power distribution systems, transformers, and substation equipment.',
          duration: '2-4 years',
          salary: '₹25,000-40,000/month',
          skills: ['Substation Maintenance', 'Transformer Testing', 'Load Management', 'Fault Analysis'],
          certifications: ['Substation Operation Certificate', 'Power Distribution License']
        },
        {
          title: 'Senior Power Engineer',
          description: 'Design and manage power distribution networks, handle complex systems, and lead technical teams.',
          duration: '4+ years',
          salary: '₹40,000-70,000/month',
          skills: ['Network Design', 'System Integration', 'Team Leadership', 'Project Management', 'Regulatory Compliance'],
          certifications: ['Electrical Engineer License', 'Power Systems Professional Certification']
        }
      ],
      jobRoles: ['Power Systems Technician', 'Substation Operator', 'Transformer Technician', 'Distribution Engineer', 'Power Plant Operator'],
      industries: ['Power Generation', 'Transmission & Distribution', 'Renewable Energy', 'Manufacturing', 'Infrastructure'],
      governmentJobs: ['NTPC', 'Power Grid Corporation', 'State Electricity Boards', 'NHPC', 'DRDO']
    }
  ],
  mechanical: [
    {
      id: 'fitter',
      title: 'Fitter',
      icon: Wrench,
      color: 'from-blue-500 to-indigo-600',
      description: 'Specialize in fitting, assembling, and maintaining mechanical parts, machines, and equipment in various industries.',
      careerPath: [
        {
          title: 'ITI Fitter',
          description: 'Learn to fit and assemble mechanical parts, use precision tools, and understand machine drawings.',
          duration: '2 years',
          salary: '₹8,000-15,000/month',
          skills: ['Precision Fitting', 'Machine Assembly', 'Blueprint Reading', 'Measurement Tools', 'Quality Control'],
          certifications: ['ITI Fitter Certificate', 'NSQF Level 4']
        },
        {
          title: 'Apprentice Fitter',
          description: 'Hands-on training in industrial settings, learning assembly and maintenance of machinery.',
          duration: '1-2 years',
          salary: '₹12,000-20,000/month',
          skills: ['Industrial Assembly', 'Machine Maintenance', 'Safety Protocols', 'Team Work'],
          certifications: ['Apprenticeship Certificate']
        },
        {
          title: 'Junior Fitter / Mechanic',
          description: 'Independent work on machine assembly, maintenance, and repair in manufacturing units.',
          duration: '2-3 years',
          salary: '₹18,000-32,000/month',
          skills: ['Machine Repair', 'Preventive Maintenance', 'Troubleshooting', 'Documentation'],
          certifications: ['Mechanical Fitter License']
        },
        {
          title: 'Senior Fitter / Supervisor',
          description: 'Lead maintenance teams, handle complex machinery, and ensure production efficiency.',
          duration: '3+ years',
          salary: '₹32,000-55,000/month',
          skills: ['Team Leadership', 'Production Planning', 'Advanced Machining', 'Quality Assurance', 'Training'],
          certifications: ['Supervisory Certificate', 'Quality Management']
        },
        {
          title: 'Workshop Manager / Production Head',
          description: 'Manage entire workshop operations, optimize production, and handle business development.',
          duration: '5+ years',
          salary: '₹55,000-1,20,000/month',
          skills: ['Workshop Management', 'Business Development', 'Resource Planning', 'Client Relations', 'Strategic Planning'],
          certifications: ['Production Management Certificate', 'Lean Manufacturing']
        }
      ],
      jobRoles: ['Fitter', 'Mechanical Fitter', 'Maintenance Mechanic', 'Assembly Supervisor', 'Workshop Manager'],
      industries: ['Manufacturing', 'Automotive', 'Engineering', 'Textile', 'Construction', 'Defense'],
      governmentJobs: ['Railways (JE/Technician)', 'Ordinance Factories', 'DRDO', 'HAL', 'BHEL', 'PSUs']
    },
    {
      id: 'cnc-operator',
      title: 'CNC Operator',
      icon: Wrench,
      color: 'from-cyan-500 to-blue-600',
      description: 'Operate and program Computer Numerical Control (CNC) machines for precision manufacturing.',
      careerPath: [
        {
          title: 'ITI Machinist / Fitter',
          description: 'Foundation in machining, precision tools, and mechanical operations.',
          duration: '2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Basic Machining', 'Precision Tools', 'Mechanical Operations', 'Safety'],
          certifications: ['ITI Certificate']
        },
        {
          title: 'CNC Training',
          description: 'Specialized training in CNC programming, machine operation, and G-code programming.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['CNC Programming', 'G-Code', 'Machine Setup', 'Precision Measurement'],
          certifications: ['CNC Operator Certificate', 'CAD/CAM Training']
        },
        {
          title: 'CNC Operator',
          description: 'Operate CNC machines, set up jobs, and ensure quality output.',
          duration: '1-2 years',
          salary: '₹20,000-35,000/month',
          skills: ['Machine Operation', 'Quality Inspection', 'Tool Selection', 'Problem Solving'],
          certifications: ['CNC Advanced Certificate']
        },
        {
          title: 'CNC Programmer',
          description: 'Write and optimize CNC programs, design tool paths, and improve efficiency.',
          duration: '2-3 years',
          salary: '₹35,000-55,000/month',
          skills: ['Advanced Programming', 'CAD/CAM Software', 'Process Optimization', 'Tool Design'],
          certifications: ['Mastercam Certification', 'SolidWorks CAM']
        },
        {
          title: 'CNC Supervisor / Production Manager',
          description: 'Manage CNC operations, lead teams, and optimize production processes.',
          duration: '4+ years',
          salary: '₹55,000-90,000/month',
          skills: ['Production Management', 'Team Leadership', 'Process Engineering', 'Quality Systems'],
          certifications: ['Production Management', 'Six Sigma']
        }
      ],
      jobRoles: ['CNC Operator', 'CNC Programmer', 'CNC Machinist', 'Production Supervisor', 'CAM Engineer'],
      industries: ['Automotive', 'Aerospace', 'Defense', 'General Engineering', 'Medical Devices', 'Tooling'],
      governmentJobs: ['HAL', 'DRDO', 'ISRO', 'BHEL', 'Railways', 'Defense PSUs']
    }
  ],
  automobile: [
    {
      id: 'automobile-technician',
      title: 'Automobile Technician',
      icon: Car,
      color: 'from-red-500 to-rose-600',
      description: 'Diagnose, repair, and maintain vehicles including cars, bikes, and commercial vehicles.',
      careerPath: [
        {
          title: 'ITI Automobile Mechanic',
          description: 'Learn vehicle systems, engine mechanics, electrical systems, and diagnostic tools.',
          duration: '2 years',
          salary: '₹8,000-15,000/month',
          skills: ['Engine Mechanics', 'Vehicle Electrical', 'Brake Systems', 'Suspension', 'Diagnostics'],
          certifications: ['ITI Automobile Certificate', 'NSQF Level 4']
        },
        {
          title: 'Service Center Trainee',
          description: 'Hands-on training at authorized service centers, learning brand-specific systems.',
          duration: '1-2 years',
          salary: '₹12,000-22,000/month',
          skills: ['Brand-Specific Systems', 'Advanced Diagnostics', 'Customer Service', 'Service Documentation'],
          certifications: ['OEM Training Certificate']
        },
        {
          title: 'Junior Technician',
          description: 'Handle routine maintenance, repairs, and diagnostics independently.',
          duration: '2-3 years',
          salary: '₹18,000-35,000/month',
          skills: ['Independent Repair', 'Advanced Diagnostics', 'Parts Management', 'Client Communication'],
          certifications: ['Automotive Technician Certificate', 'Diagnostic Tool Certification']
        },
        {
          title: 'Senior Technician / Specialist',
          description: 'Specialize in specific systems (engine, transmission, electrical) or become master technician.',
          duration: '3+ years',
          salary: '₹35,000-55,000/month',
          skills: ['System Specialization', 'Complex Repairs', 'Training Juniors', 'Quality Control'],
          certifications: ['Master Technician Certificate', 'ASE Certification']
        },
        {
          title: 'Service Manager / Workshop Head',
          description: 'Manage service center operations, lead teams, and handle business development.',
          duration: '5+ years',
          salary: '₹55,000-1,20,000/month',
          skills: ['Service Management', 'Business Development', 'Team Leadership', 'Customer Relations', 'Financial Management'],
          certifications: ['Service Management Certificate', 'Business Administration']
        }
      ],
      jobRoles: ['Automobile Technician', 'Service Advisor', 'Diagnostic Specialist', 'Workshop Manager', 'Service Center Head'],
      industries: ['Automotive', 'Dealerships', 'Fleet Management', 'Transportation', 'Aftermarket Service'],
      governmentJobs: ['State Transport Department', 'Road Transport Corporations', 'DRDO', 'Defense Vehicles']
    },
    {
      id: 'ev-technician',
      title: 'EV Technician',
      icon: Car,
      color: 'from-green-500 to-emerald-600',
      description: 'Specialize in electric vehicle technology, battery systems, and EV maintenance.',
      careerPath: [
        {
          title: 'ITI Automobile + EV Training',
          description: 'Foundation in automobile mechanics with specialized EV technology training.',
          duration: '2 years + 6 months',
          salary: '₹12,000-20,000/month',
          skills: ['EV Fundamentals', 'Battery Systems', 'Electric Motors', 'High Voltage Safety'],
          certifications: ['ITI Certificate', 'EV Technician Certificate']
        },
        {
          title: 'EV Service Trainee',
          description: 'Training at EV service centers, learning battery diagnostics and EV-specific systems.',
          duration: '1 year',
          salary: '₹18,000-28,000/month',
          skills: ['Battery Diagnostics', 'Charging Systems', 'EV Software', 'Safety Protocols'],
          certifications: ['OEM EV Training', 'High Voltage Safety']
        },
        {
          title: 'EV Technician',
          description: 'Independent work on EV maintenance, battery servicing, and electrical system repairs.',
          duration: '2-3 years',
          salary: '₹25,000-45,000/month',
          skills: ['Battery Management', 'Power Electronics', 'EV Diagnostics', 'Software Updates'],
          certifications: ['Advanced EV Certificate', 'Battery Handling Certification']
        },
        {
          title: 'EV Specialist / Consultant',
          description: 'Expert in EV systems, battery technology, and can consult or train others.',
          duration: '4+ years',
          salary: '₹45,000-80,000/month',
          skills: ['Advanced Battery Tech', 'System Integration', 'Training & Consulting', 'R&D Support'],
          certifications: ['EV Expert Certification', 'Battery Management Systems']
        }
      ],
      jobRoles: ['EV Technician', 'Battery Specialist', 'Charging Station Technician', 'EV Service Manager'],
      industries: ['Electric Vehicles', 'Battery Manufacturing', 'Charging Infrastructure', 'Automotive'],
      governmentJobs: ['FAME Scheme', 'Electric Mobility Mission', 'State EV Programs']
    }
  ],
  'computer-it': [
    {
      id: 'it-support',
      title: 'IT Support Technician',
      icon: Cpu,
      color: 'from-purple-500 to-violet-600',
      description: 'Provide technical support for computer hardware, software, networks, and IT infrastructure.',
      careerPath: [
        {
          title: 'ITI COPA (Computer Operator)',
          description: 'Learn computer operations, basic programming, office software, and hardware fundamentals.',
          duration: '1 year',
          salary: '₹10,000-18,000/month',
          skills: ['Computer Operations', 'MS Office', 'Basic Hardware', 'Internet Usage', 'Typing'],
          certifications: ['ITI COPA Certificate', 'NSQF Level 3']
        },
        {
          title: 'Hardware & Networking Course',
          description: 'Specialized training in computer hardware, networking, and troubleshooting.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['Hardware Assembly', 'Networking Basics', 'OS Installation', 'Troubleshooting'],
          certifications: ['CompTIA A+', 'CCNA', 'Hardware & Networking Diploma']
        },
        {
          title: 'Junior IT Support',
          description: 'Handle desktop support, basic network issues, and user assistance.',
          duration: '1-2 years',
          salary: '₹20,000-35,000/month',
          skills: ['Desktop Support', 'User Training', 'Basic Networking', 'Ticket Management'],
          certifications: ['ITIL Foundation', 'Microsoft Certified']
        },
        {
          title: 'IT Support Engineer',
          description: 'Advanced troubleshooting, network administration, and system maintenance.',
          duration: '2-3 years',
          salary: '₹35,000-55,000/month',
          skills: ['Network Administration', 'Server Management', 'Advanced Troubleshooting', 'Security Basics'],
          certifications: ['MCSE', 'CCNP', 'AWS Cloud Practitioner']
        },
        {
          title: 'System Administrator / IT Manager',
          description: 'Manage IT infrastructure, lead support teams, and handle strategic IT planning.',
          duration: '4+ years',
          salary: '₹55,000-1,00,000/month',
          skills: ['Infrastructure Management', 'Team Leadership', 'Strategic Planning', 'Budget Management', 'Vendor Management'],
          certifications: ['PMP', 'CISSP', 'ITIL Expert']
        }
      ],
      jobRoles: ['IT Support Technician', 'Desktop Support Engineer', 'Network Administrator', 'System Administrator', 'IT Manager'],
      industries: ['IT Services', 'Corporate', 'Banking', 'Healthcare', 'Education', 'Government'],
      governmentJobs: ['NIC', 'CDAC', 'State IT Departments', 'Bank IT', 'Railways IT']
    },
    {
      id: 'hardware-technician',
      title: 'Hardware Technician',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-600',
      description: 'Specialize in computer hardware repair, assembly, and maintenance of IT equipment.',
      careerPath: [
        {
          title: 'ITI COPA / Electronics',
          description: 'Foundation in computer operations and electronics.',
          duration: '1-2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Computer Basics', 'Electronics', 'Soldering', 'Component Identification'],
          certifications: ['ITI Certificate']
        },
        {
          title: 'Hardware Repair Training',
          description: 'Specialized training in motherboard repair, component-level troubleshooting, and laptop repair.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['Motherboard Repair', 'Component Replacement', 'Laptop Repair', 'Diagnostic Tools'],
          certifications: ['Hardware Repair Certificate', 'Chip-level Repair']
        },
        {
          title: 'Hardware Technician',
          description: 'Repair and maintain computers, laptops, and IT equipment independently.',
          duration: '2-3 years',
          salary: '₹22,000-40,000/month',
          skills: ['Advanced Repair', 'Quality Control', 'Customer Service', 'Inventory Management'],
          certifications: ['Advanced Hardware Certificate']
        },
        {
          title: 'Service Center Manager',
          description: 'Manage hardware repair operations, lead teams, and handle business development.',
          duration: '4+ years',
          salary: '₹40,000-70,000/month',
          skills: ['Service Management', 'Team Leadership', 'Business Development', 'Quality Assurance'],
          certifications: ['Service Management', 'Quality Systems']
        }
      ],
      jobRoles: ['Hardware Technician', 'Laptop Repair Specialist', 'Service Center Manager', 'Quality Controller'],
      industries: ['IT Hardware', 'Service Centers', 'Corporate IT', 'Education', 'Retail'],
      governmentJobs: ['IT Hardware Maintenance', 'Government Computer Centers', 'Educational Institutions']
    }
  ],
  'civil-construction': [
    {
      id: 'civil-technician',
      title: 'Civil Technician',
      icon: Building2,
      color: 'from-orange-500 to-amber-600',
      description: 'Work on construction sites, assist in building projects, and handle civil engineering tasks.',
      careerPath: [
        {
          title: 'ITI Civil / Draftsman',
          description: 'Learn construction basics, drawing, surveying, and building materials.',
          duration: '2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Construction Basics', 'Drawing', 'Surveying', 'Building Materials', 'Safety'],
          certifications: ['ITI Civil Certificate', 'NSQF Level 4']
        },
        {
          title: 'Site Trainee',
          description: 'On-site training in construction activities, supervision, and quality control.',
          duration: '1-2 years',
          salary: '₹15,000-25,000/month',
          skills: ['Site Supervision', 'Quality Control', 'Material Management', 'Team Coordination'],
          certifications: ['Site Safety Certificate']
        },
        {
          title: 'Junior Civil Technician',
          description: 'Assist in construction projects, handle site supervision, and manage materials.',
          duration: '2-3 years',
          salary: '₹20,000-35,000/month',
          skills: ['Site Management', 'Surveying', 'Documentation', 'Vendor Coordination'],
          certifications: ['Surveyor Certificate', 'Construction Supervisor']
        },
        {
          title: 'Senior Supervisor / Site Engineer',
          description: 'Manage construction sites, lead teams, and ensure project quality and timelines.',
          duration: '3+ years',
          salary: '₹35,000-60,000/month',
          skills: ['Project Management', 'Team Leadership', 'Quality Assurance', 'Cost Control', 'Client Coordination'],
          certifications: ['Construction Management', 'PMP']
        },
        {
          title: 'Project Manager / Contractor',
          description: 'Manage complete construction projects, handle business development, and lead large teams.',
          duration: '5+ years',
          salary: '₹60,000-1,50,000/month',
          skills: ['Project Management', 'Business Development', 'Financial Planning', 'Legal Compliance', 'Strategic Planning'],
          certifications: ['PMP', 'Construction License', 'MBA Construction Management']
        }
      ],
      jobRoles: ['Civil Technician', 'Site Supervisor', 'Construction Supervisor', 'Project Manager', 'Contractor'],
      industries: ['Construction', 'Real Estate', 'Infrastructure', 'Government Projects', 'Architecture'],
      governmentJobs: ['PWD', 'CPWD', 'NHAI', 'Urban Development', 'Municipal Corporations', 'Railways']
    },
    {
      id: 'draftsman',
      title: 'Draftsman',
      icon: Building2,
      color: 'from-yellow-500 to-orange-600',
      description: 'Create technical drawings, blueprints, and plans for construction and engineering projects.',
      careerPath: [
        {
          title: 'ITI Draftsman (Civil)',
          description: 'Learn drafting techniques, CAD software, and technical drawing standards.',
          duration: '2 years',
          salary: '₹12,000-20,000/month',
          skills: ['Technical Drawing', 'CAD Basics', 'Blueprint Reading', 'Construction Standards'],
          certifications: ['ITI Draftsman Certificate', 'AutoCAD Basic']
        },
        {
          title: 'CAD Training',
          description: 'Advanced training in AutoCAD, Revit, and other drafting software.',
          duration: '6 months - 1 year',
          salary: '₹18,000-28,000/month',
          skills: ['AutoCAD Advanced', 'Revit', '3D Modeling', 'BIM Basics'],
          certifications: ['AutoCAD Professional', 'Revit Certification']
        },
        {
          title: 'Junior Draftsman',
          description: 'Create technical drawings and plans under supervision.',
          duration: '1-2 years',
          salary: '₹25,000-40,000/month',
          skills: ['Independent Drafting', 'Project Coordination', 'Quality Check', 'Documentation'],
          certifications: ['Advanced CAD Certification']
        },
        {
          title: 'Senior Draftsman / CAD Manager',
          description: 'Lead drafting teams, manage drawing standards, and handle complex projects.',
          duration: '3+ years',
          salary: '₹40,000-70,000/month',
          skills: ['Team Leadership', 'Drawing Standards', 'Project Management', 'Client Coordination'],
          certifications: ['CAD Management', 'BIM Professional']
        }
      ],
      jobRoles: ['Draftsman', 'CAD Designer', 'BIM Modeler', 'Drawing Coordinator', 'CAD Manager'],
      industries: ['Architecture', 'Construction', 'Engineering', 'Manufacturing', 'Infrastructure'],
      governmentJobs: ['PWD', 'CPWD', 'Town Planning', 'Urban Development', 'Railways']
    }
  ],
  electronics: [
    {
      id: 'electronics-technician',
      title: 'Electronics Technician',
      icon: Microchip,
      color: 'from-cyan-500 to-blue-600',
      description: 'Repair and maintain electronic devices, circuits, and communication equipment.',
      careerPath: [
        {
          title: 'ITI Electronics Mechanic',
          description: 'Learn electronic components, circuits, soldering, and device repair.',
          duration: '2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Electronics Components', 'Circuit Design', 'Soldering', 'Testing', 'Safety'],
          certifications: ['ITI Electronics Certificate', 'NSQF Level 4']
        },
        {
          title: 'Device Repair Training',
          description: 'Specialized training in mobile, TV, and consumer electronics repair.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['Mobile Repair', 'TV Repair', 'Diagnostic Tools', 'Component Replacement'],
          certifications: ['Device Repair Certificate', 'Soldering Certification']
        },
        {
          title: 'Electronics Technician',
          description: 'Independent repair of electronic devices and equipment.',
          duration: '2-3 years',
          salary: '₹22,000-40,000/month',
          skills: ['Advanced Repair', 'Quality Control', 'Customer Service', 'Business Basics'],
          certifications: ['Advanced Electronics Certificate']
        },
        {
          title: 'Service Center Manager',
          description: 'Manage electronics repair operations and business development.',
          duration: '4+ years',
          salary: '₹40,000-70,000/month',
          skills: ['Service Management', 'Team Leadership', 'Business Development', 'Inventory Management'],
          certifications: ['Service Management', 'Business Administration']
        }
      ],
      jobRoles: ['Electronics Technician', 'Mobile Repair Specialist', 'TV Technician', 'Service Center Manager'],
      industries: ['Consumer Electronics', 'Mobile Repair', 'Telecommunications', 'Manufacturing', 'Service Centers'],
      governmentJobs: ['BSNL', 'MTNL', 'Railways (Signal)', 'DRDO', 'Defense Electronics']
    },
    {
      id: 'embedded-systems',
      title: 'Embedded Systems Assistant',
      icon: Microchip,
      color: 'from-violet-500 to-purple-600',
      description: 'Work with embedded systems, microcontrollers, and IoT devices.',
      careerPath: [
        {
          title: 'ITI Electronics',
          description: 'Foundation in electronics and circuits.',
          duration: '2 years',
          salary: '₹12,000-20,000/month',
          skills: ['Electronics Basics', 'Circuits', 'Testing', 'Soldering'],
          certifications: ['ITI Certificate']
        },
        {
          title: 'Embedded Systems Training',
          description: 'Training in microcontrollers, Arduino, Raspberry Pi, and IoT basics.',
          duration: '6 months - 1 year',
          salary: '₹18,000-30,000/month',
          skills: ['Microcontrollers', 'Arduino', 'Raspberry Pi', 'IoT Basics', 'C Programming'],
          certifications: ['Embedded Systems Certificate', 'IoT Certification']
        },
        {
          title: 'Embedded Technician',
          description: 'Assembly and testing of embedded systems and IoT devices.',
          duration: '2-3 years',
          salary: '₹25,000-45,000/month',
          skills: ['Device Assembly', 'Testing', 'Firmware Updates', 'Troubleshooting'],
          certifications: ['Advanced Embedded Systems']
        },
        {
          title: 'Embedded Systems Engineer',
          description: 'Design and develop embedded systems and IoT solutions.',
          duration: '4+ years',
          salary: '₹45,000-80,000/month',
          skills: ['System Design', 'Programming', 'Protocol Integration', 'R&D'],
          certifications: ['Embedded Engineering', 'IoT Expert']
        }
      ],
      jobRoles: ['Embedded Technician', 'IoT Technician', 'Testing Engineer', 'Embedded Engineer'],
      industries: ['IoT', 'Automotive', 'Consumer Electronics', 'Industrial Automation', 'Smart Devices'],
      governmentJobs: ['DRDO', 'ISRO', 'Defense Electronics', 'Smart City Projects']
    }
  ],
  'fashion-beauty': [
    {
      id: 'beautician',
      title: 'Beautician',
      icon: Scissors,
      color: 'from-pink-500 to-rose-600',
      description: 'Provide beauty services including makeup, hair styling, skincare, and beauty treatments.',
      careerPath: [
        {
          title: 'ITI Cosmetology / Beauty Course',
          description: 'Learn skincare, makeup, hair care, and beauty treatments.',
          duration: '1-2 years',
          salary: '₹8,000-15,000/month',
          skills: ['Makeup', 'Hair Styling', 'Skincare', 'Beauty Treatments', 'Customer Service'],
          certifications: ['ITI Cosmetology', 'Beauty Therapy Certificate']
        },
        {
          title: 'Salon Trainee',
          description: 'Hands-on training in salon environment under senior beauticians.',
          duration: '6 months - 1 year',
          salary: '₹12,000-20,000/month',
          skills: ['Client Handling', 'Advanced Techniques', 'Product Knowledge', 'Salon Operations'],
          certifications: ['Brand Training Certificates']
        },
        {
          title: 'Junior Beautician',
          description: 'Independent beauty services and treatments.',
          duration: '1-2 years',
          salary: '₹18,000-35,000/month',
          skills: ['Advanced Makeup', 'Hair Styling', 'Bridal Services', 'Client Consultation'],
          certifications: ['Advanced Beauty Certificate', 'Bridal Specialist']
        },
        {
          title: 'Senior Beautician / Stylist',
          description: 'Expert in specialized services, training juniors, and handling VIP clients.',
          duration: '3+ years',
          salary: '₹35,000-60,000/month',
          skills: ['Specialized Services', 'Training', 'Client Relations', 'Brand Collaboration'],
          certifications: ['Master Beautician', 'International Certifications']
        },
        {
          title: 'Salon Owner / Beauty Entrepreneur',
          description: 'Own and manage beauty salon or start beauty business.',
          duration: '5+ years',
          salary: '₹60,000-2,00,000/month',
          skills: ['Business Management', 'Team Building', 'Marketing', 'Financial Planning', 'Brand Building'],
          certifications: ['Salon Management', 'Business Administration']
        }
      ],
      jobRoles: ['Beautician', 'Makeup Artist', 'Hair Stylist', 'Salon Manager', 'Salon Owner'],
      industries: ['Beauty & Wellness', 'Fashion', 'Film & TV', 'Bridal Services', 'Freelance'],
      governmentJobs: ['Tourism Department', 'Hospitality Industry', 'Government Training Centers']
    },
    {
      id: 'fashion-design',
      title: 'Fashion Design Assistant',
      icon: Scissors,
      color: 'from-purple-500 to-pink-600',
      description: 'Assist in fashion design, garment construction, and textile work.',
      careerPath: [
        {
          title: 'ITI Tailoring / Fashion Technology',
          description: 'Learn garment construction, pattern making, and fashion basics.',
          duration: '1-2 years',
          salary: '₹8,000-15,000/month',
          skills: ['Sewing', 'Pattern Making', 'Garment Construction', 'Fabric Knowledge'],
          certifications: ['ITI Tailoring', 'Fashion Technology Certificate']
        },
        {
          title: 'Fashion Design Diploma',
          description: 'Advanced training in fashion design, illustration, and garment technology.',
          duration: '1-2 years',
          salary: '₹15,000-25,000/month',
          skills: ['Fashion Illustration', 'Advanced Pattern Making', 'Textile Design', 'Trend Analysis'],
          certifications: ['Fashion Design Diploma']
        },
        {
          title: 'Fashion Assistant',
          description: 'Assist designers in garment creation and fashion projects.',
          duration: '2-3 years',
          salary: '₹20,000-40,000/month',
          skills: ['Garment Creation', 'Design Support', 'Production Coordination', 'Quality Control'],
          certifications: ['Advanced Fashion Certificate']
        },
        {
          title: 'Fashion Designer',
          description: 'Create original designs and collections.',
          duration: '4+ years',
          salary: '₹40,000-1,00,000/month',
          skills: ['Design Creation', 'Collection Development', 'Brand Building', 'Marketing'],
          certifications: ['Professional Designer Certification']
        }
      ],
      jobRoles: ['Fashion Assistant', 'Pattern Maker', 'Fashion Designer', 'Boutique Owner'],
      industries: ['Fashion', 'Textile', 'Boutique', 'Export Houses', 'Film & TV'],
      governmentJobs: ['Textile Ministry', 'Handloom', 'Fashion Development Organizations']
    }
  ],
  hospitality: [
    {
      id: 'hotel-assistant',
      title: 'Hotel Assistant',
      icon: Utensils,
      color: 'from-emerald-500 to-teal-600',
      description: 'Work in hotel operations including front office, housekeeping, and guest services.',
      careerPath: [
        {
          title: 'ITI Hospitality / Hotel Management Certificate',
          description: 'Learn hotel operations, guest services, and hospitality basics.',
          duration: '1-2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Guest Services', 'Front Office', 'Housekeeping Basics', 'Communication'],
          certifications: ['Hospitality Certificate', 'NSQF Level 4']
        },
        {
          title: 'Hotel Trainee',
          description: 'On-the-job training in hotel departments.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['Department Operations', 'Guest Relations', 'Hotel Systems', 'Team Work'],
          certifications: ['Hotel Training Certificate']
        },
        {
          title: 'Junior Hotel Staff',
          description: 'Work in specific departments (front office, housekeeping, F&B service).',
          duration: '1-2 years',
          salary: '₹18,000-35,000/month',
          skills: ['Department Specialization', 'Guest Handling', 'Problem Solving', 'Service Excellence'],
          certifications: ['Department Certification']
        },
        {
          title: 'Supervisor / Team Leader',
          description: 'Lead a team in a hotel department.',
          duration: '3+ years',
          salary: '₹35,000-55,000/month',
          skills: ['Team Leadership', 'Department Management', 'Training', 'Quality Control'],
          certifications: ['Supervisory Certificate', 'Management Training']
        },
        {
          title: 'Department Manager / Hotel Manager',
          description: 'Manage entire department or hotel operations.',
          duration: '5+ years',
          salary: '₹55,000-1,50,000/month',
          skills: ['Operations Management', 'Strategic Planning', 'Financial Management', 'Team Building', 'Guest Experience'],
          certifications: ['Hotel Management Degree', 'MBA Hospitality']
        }
      ],
      jobRoles: ['Front Office Executive', 'Housekeeping Supervisor', 'F&B Service', 'Guest Relations', 'Hotel Manager'],
      industries: ['Hotels', 'Resorts', 'Hospitality', 'Tourism', 'Corporate Hospitality'],
      governmentJobs: ['ITDC Hotels', 'State Tourism', 'Guest Houses', 'Government Hospitality']
    },
    {
      id: 'chef-assistant',
      title: 'Chef Assistant',
      icon: Utensils,
      color: 'from-orange-500 to-red-600',
      description: 'Work in kitchen operations, food preparation, and culinary arts.',
      careerPath: [
        {
          title: 'ITI Food Production / Culinary Arts',
          description: 'Learn cooking techniques, food safety, and kitchen operations.',
          duration: '1-2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Cooking Basics', 'Food Safety', 'Kitchen Operations', 'Menu Planning'],
          certifications: ['Food Production Certificate', 'Food Safety License']
        },
        {
          title: 'Kitchen Trainee / Commis',
          description: 'Hands-on training in professional kitchen environment.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['Professional Cooking', 'Station Management', 'Time Management', 'Team Work'],
          certifications: ['Kitchen Training Certificate']
        },
        {
          title: 'Line Cook',
          description: 'Independent cooking at specific kitchen stations.',
          duration: '2-3 years',
          salary: '₹20,000-40,000/month',
          skills: ['Station Specialization', 'Menu Execution', 'Quality Control', 'Speed & Efficiency'],
          certifications: ['Culinary Certificate']
        },
        {
          title: 'Sous Chef',
          description: 'Assist Head Chef, manage kitchen operations, and train staff.',
          duration: '4+ years',
          salary: '₹40,000-70,000/month',
          skills: ['Kitchen Management', 'Menu Development', 'Team Leadership', 'Cost Control'],
          certifications: ['Advanced Culinary Arts', 'Kitchen Management']
        },
        {
          title: 'Head Chef / Executive Chef',
          description: 'Lead entire kitchen, create menus, and manage culinary operations.',
          duration: '6+ years',
          salary: '₹70,000-2,00,000/month',
          skills: ['Culinary Leadership', 'Menu Innovation', 'Business Management', 'Brand Building', 'Training'],
          certifications: ['Executive Chef Certification', 'International Culinary Degrees']
        }
      ],
      jobRoles: ['Commis Chef', 'Line Cook', 'Sous Chef', 'Executive Chef', 'Kitchen Manager'],
      industries: ['Hotels', 'Restaurants', 'Catering', 'Cruise Lines', 'Corporate Dining'],
      governmentJobs: ['ITDC', 'Railways Catering', 'Government Canteens', 'Institutional Kitchens']
    }
  ],
  agriculture: [
    {
      id: 'agriculture-technician',
      title: 'Agriculture Technician',
      icon: Sprout,
      color: 'from-green-500 to-lime-600',
      description: 'Work in modern farming, agricultural technology, and farm management.',
      careerPath: [
        {
          title: 'ITI Agriculture',
          description: 'Learn modern farming techniques, agricultural machinery, and crop management.',
          duration: '2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Farming Techniques', 'Crop Management', 'Agricultural Machinery', 'Soil Testing'],
          certifications: ['ITI Agriculture Certificate', 'NSQF Level 4']
        },
        {
          title: 'Farm Trainee',
          description: 'Practical training on farms and agricultural projects.',
          duration: '6 months - 1 year',
          salary: '₹12,000-20,000/month',
          skills: ['Practical Farming', 'Modern Techniques', 'Equipment Operation', 'Crop Care'],
          certifications: ['Farm Training Certificate']
        },
        {
          title: 'Agriculture Technician',
          description: 'Implement modern farming techniques and manage agricultural operations.',
          duration: '2-3 years',
          salary: '₹18,000-35,000/month',
          skills: ['Farm Management', 'Modern Technology', 'Crop Planning', 'Team Supervision'],
          certifications: ['Agricultural Technology Certificate']
        },
        {
          title: 'Farm Supervisor / Manager',
          description: 'Manage farm operations, supervise teams, and optimize production.',
          duration: '4+ years',
          salary: '₹35,000-60,000/month',
          skills: ['Farm Management', 'Team Leadership', 'Financial Planning', 'Technology Integration'],
          certifications: ['Farm Management Certificate', 'Agricultural Business']
        },
        {
          title: 'Agricultural Entrepreneur',
          description: 'Start own farming business or agricultural consultancy.',
          duration: '5+ years',
          salary: '₹60,000-2,00,000/month',
          skills: ['Business Management', 'Strategic Planning', 'Technology Adoption', 'Market Analysis', 'Team Building'],
          certifications: ['Agri-Business Management', 'Entrepreneurship Development']
        }
      ],
      jobRoles: ['Agriculture Technician', 'Farm Supervisor', 'Crop Consultant', 'Farm Manager', 'Agri-Entrepreneur'],
      industries: ['Agriculture', 'Agri-Tech', 'Food Processing', 'Seed Companies', 'Government Agriculture'],
      governmentJobs: ['Agriculture Department', 'Krishi Vigyan Kendras', 'Cooperative Societies', 'Food Corporation']
    },
    {
      id: 'dairy-technician',
      title: 'Dairy Technician',
      icon: Sprout,
      color: 'from-teal-500 to-emerald-600',
      description: 'Work in dairy farming, milk processing, and dairy management.',
      careerPath: [
        {
          title: 'ITI Dairy / Animal Husbandry',
          description: 'Learn dairy farming, milk processing, and animal care.',
          duration: '2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Dairy Farming', 'Milk Processing', 'Animal Care', 'Hygiene'],
          certifications: ['ITI Dairy Certificate']
        },
        {
          title: 'Dairy Trainee',
          description: 'Practical training in dairy farms and processing units.',
          duration: '6 months - 1 year',
          salary: '₹12,000-22,000/month',
          skills: ['Dairy Operations', 'Processing', 'Quality Control', 'Animal Management'],
          certifications: ['Dairy Training Certificate']
        },
        {
          title: 'Dairy Technician',
          description: 'Manage dairy operations and milk processing.',
          duration: '2-3 years',
          salary: '₹20,000-40,000/month',
          skills: ['Dairy Management', 'Processing Technology', 'Quality Assurance', 'Team Supervision'],
          certifications: ['Dairy Technology Certificate']
        },
        {
          title: 'Dairy Manager',
          description: 'Manage entire dairy operations and business.',
          duration: '4+ years',
          salary: '₹40,000-70,000/month',
          skills: ['Business Management', 'Quality Systems', 'Team Leadership', 'Financial Planning'],
          certifications: ['Dairy Management', 'Food Safety']
        }
      ],
      jobRoles: ['Dairy Technician', 'Milk Processing Supervisor', 'Dairy Manager', 'Quality Controller'],
      industries: ['Dairy', 'Food Processing', 'Animal Husbandry', 'Cooperatives'],
      governmentJobs: ['Dairy Development Department', 'Milk Federations', 'Cooperative Societies']
    }
  ],
  healthcare: [
    {
      id: 'lab-assistant',
      title: 'Lab Assistant',
      icon: HeartPulse,
      color: 'from-red-500 to-pink-600',
      description: 'Work in medical laboratories, assist in diagnostic tests, and sample processing.',
      careerPath: [
        {
          title: 'ITI Lab Assistant / MLT',
          description: 'Learn laboratory techniques, sample handling, and diagnostic basics.',
          duration: '2 years',
          salary: '₹12,000-20,000/month',
          skills: ['Lab Techniques', 'Sample Handling', 'Diagnostic Tests', 'Safety Protocols'],
          certifications: ['ITI Lab Assistant Certificate', 'NSQF Level 4']
        },
        {
          title: 'Lab Trainee',
          description: 'On-the-job training in medical laboratories.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['Practical Lab Work', 'Equipment Operation', 'Quality Control', 'Documentation'],
          certifications: ['Laboratory Training Certificate']
        },
        {
          title: 'Lab Assistant / Technician',
          description: 'Perform diagnostic tests and manage lab operations.',
          duration: '2-3 years',
          salary: '₹20,000-40,000/month',
          skills: ['Diagnostic Testing', 'Equipment Maintenance', 'Quality Assurance', 'Sample Management'],
          certifications: ['MLT Certificate', 'Lab Technician Certification']
        },
        {
          title: 'Senior Lab Technician',
          description: 'Handle complex tests, train juniors, and manage lab sections.',
          duration: '4+ years',
          salary: '₹40,000-65,000/month',
          skills: ['Advanced Diagnostics', 'Team Leadership', 'Quality Management', 'Lab Administration'],
          certifications: ['Advanced MLT', 'Quality Management']
        },
        {
          title: 'Lab Manager / Lab In-charge',
          description: 'Manage entire laboratory operations and quality systems.',
          duration: '5+ years',
          salary: '₹65,000-1,20,000/month',
          skills: ['Lab Management', 'Quality Systems', 'Team Building', 'Budget Management', 'Compliance'],
          certifications: ['Lab Management', 'NABL Standards', 'Quality Auditor']
        }
      ],
      jobRoles: ['Lab Assistant', 'Lab Technician', 'Pathology Technician', 'Lab Manager'],
      industries: ['Healthcare', 'Diagnostics', 'Hospitals', 'Research Labs', 'Pharma'],
      governmentJobs: ['Government Hospitals', 'Public Health Labs', 'Research Institutes', 'AIIMS', 'PGIMER']
    },
    {
      id: 'healthcare-assistant',
      title: 'Healthcare Assistant',
      icon: HeartPulse,
      color: 'from-rose-500 to-red-600',
      description: 'Provide patient care support, assist medical staff, and manage healthcare facilities.',
      careerPath: [
        {
          title: 'ITI Health Sanitary Inspector / Healthcare',
          description: 'Learn healthcare basics, patient care, and hygiene protocols.',
          duration: '1-2 years',
          salary: '₹10,000-18,000/month',
          skills: ['Patient Care', 'Hygiene Protocols', 'Basic Medical Knowledge', 'Communication'],
          certifications: ['Healthcare Certificate', 'First Aid']
        },
        {
          title: 'Hospital Trainee',
          description: 'Training in hospital environment and patient care.',
          duration: '6 months - 1 year',
          salary: '₹15,000-25,000/month',
          skills: ['Patient Handling', 'Hospital Operations', 'Medical Support', 'Team Work'],
          certifications: ['Hospital Training Certificate']
        },
        {
          title: 'Healthcare Assistant',
          description: 'Assist medical staff and provide patient care.',
          duration: '2-3 years',
          salary: '₹18,000-35,000/month',
          skills: ['Patient Care', 'Medical Assistance', 'Vital Monitoring', 'Documentation'],
          certifications: ['Healthcare Assistant Certificate', 'BLS']
        },
        {
          title: 'Senior Healthcare Assistant',
          description: 'Lead healthcare support teams and handle complex cases.',
          duration: '4+ years',
          salary: '₹35,000-55,000/month',
          skills: ['Team Leadership', 'Advanced Patient Care', 'Training', 'Quality Control'],
          certifications: ['Advanced Healthcare', 'Training Certificate']
        },
        {
          title: 'Healthcare Supervisor',
          description: 'Manage healthcare support operations and teams.',
          duration: '5+ years',
          salary: '₹55,000-90,000/month',
          skills: ['Operations Management', 'Team Leadership', 'Quality Assurance', 'Resource Planning'],
          certifications: ['Healthcare Management', 'Hospital Administration']
        }
      ],
      jobRoles: ['Healthcare Assistant', 'Patient Care Assistant', 'Ward Assistant', 'Healthcare Supervisor'],
      industries: ['Hospitals', 'Clinics', 'Nursing Homes', 'Home Healthcare', 'Rehabilitation'],
      governmentJobs: ['Government Hospitals', 'Public Health Centers', 'Community Health', 'Railway Hospitals']
    }
  ]
};

export default function VocationalCareerPathScreen({ streamId }: VocationalCareerPathScreenProps) {
  const { setScreen, previousScreen } = useApp();
  const subStreams = vocationalCareerPaths[streamId] || [];

  const handleBack = () => {
    if (previousScreen === 'skill_based_courses') {
      setScreen('skill_based_courses');
    } else {
      setScreen('vocational_iti');
    }
  };

  const streamInfo: Record<string, { title: string; icon: any; color: string }> = {
    electrical: { title: 'Electrical', icon: Zap, color: 'from-yellow-500 to-amber-600' },
    mechanical: { title: 'Mechanical', icon: Wrench, color: 'from-blue-500 to-indigo-600' },
    automobile: { title: 'Automobile', icon: Car, color: 'from-red-500 to-rose-600' },
    'computer-it': { title: 'Computer & IT', icon: Cpu, color: 'from-purple-500 to-violet-600' },
    'civil-construction': { title: 'Civil & Construction', icon: Building2, color: 'from-orange-500 to-amber-600' },
    electronics: { title: 'Electronics', icon: Microchip, color: 'from-cyan-500 to-blue-600' },
    'fashion-beauty': { title: 'Fashion & Beauty', icon: Scissors, color: 'from-pink-500 to-rose-600' },
    hospitality: { title: 'Hospitality', icon: Utensils, color: 'from-emerald-500 to-teal-600' },
    agriculture: { title: 'Agriculture', icon: Sprout, color: 'from-green-500 to-lime-600' },
    healthcare: { title: 'Health Care', icon: HeartPulse, color: 'from-red-500 to-pink-600' }
  };

  const currentStream = streamInfo[streamId] || { title: 'Career Path', icon: Target, color: 'from-gray-500 to-gray-600' };
  const StreamIcon = currentStream.icon;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('career_dashboard')}>Career Dashboard</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setScreen('vocational_iti')}>Vocational / ITI</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{currentStream.title} Career Paths</span>
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentStream.color} flex items-center justify-center text-white mx-auto shadow-lg`}>
              <StreamIcon className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentStream.title} Career Paths
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Explore detailed career progression paths, job roles, and opportunities in {currentStream.title.toLowerCase()} streams.
          </p>
        </motion.div>

        {/* Sub-streams */}
        <div className="space-y-12">
          {subStreams.map((subStream, index) => {
            const SubStreamIcon = subStream.icon;
            return (
              <motion.div
                key={subStream.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
              >
                {/* Sub-stream Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${subStream.color} flex items-center justify-center text-white flex-shrink-0`}>
                    <SubStreamIcon className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-3">{subStream.title}</h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-4">{subStream.description}</p>
                    
                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                        <Briefcase className="w-4 h-4 text-amber-400" />
                        <span className="text-white/90 text-sm">{subStream.jobRoles.length} Job Roles</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                        <Building className="w-4 h-4 text-blue-400" />
                        <span className="text-white/90 text-sm">{subStream.industries.length} Industries</span>
                      </div>
                      {subStream.governmentJobs && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                          <Building className="w-4 h-4 text-green-400" />
                          <span className="text-white/90 text-sm">{subStream.governmentJobs.length} Govt Jobs</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Career Path */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                    Career Progression Path
                  </h3>
                  <div className="space-y-4">
                    {subStream.careerPath.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 + stepIndex * 0.05 }}
                        className="relative"
                      >
                        {/* Timeline Line */}
                        {stepIndex < subStream.careerPath.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-amber-500/50 to-transparent" />
                        )}
                        
                        <div className="flex gap-4">
                          {/* Step Number */}
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${subStream.color} flex items-center justify-center text-white font-bold flex-shrink-0 z-10`}>
                            {stepIndex + 1}
                          </div>
                          
                          {/* Step Content */}
                          <div className="flex-1 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-500/30 transition-all">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                              <div>
                                <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                                <p className="text-white/60 text-sm">{step.description}</p>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4 text-amber-400" />
                                <span className="text-white/90">{step.duration}</span>
                              </div>
                            </div>
                            
                            {step.salary && (
                              <div className="flex items-center gap-2 mb-3">
                                <Award className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 font-medium">{step.salary}</span>
                              </div>
                            )}
                            
                            <div className="mb-3">
                              <span className="text-white/50 text-xs">Key Skills</span>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {step.skills.map((skill, skillIdx) => (
                                  <span key={skillIdx} className="px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-lg">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {step.certifications && step.certifications.length > 0 && (
                              <div>
                                <span className="text-white/50 text-xs">Certifications</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {step.certifications.map((cert, certIdx) => (
                                    <span key={certIdx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg flex items-center gap-1">
                                      <CheckCircle className="w-3 h-3" />
                                      {cert}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Job Roles */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    Job Roles
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {subStream.jobRoles.map((role, roleIdx) => (
                      <span key={roleIdx} className="px-3 py-2 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-purple-400" />
                    Industries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {subStream.industries.map((industry, industryIdx) => (
                      <span key={industryIdx} className="px-3 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
