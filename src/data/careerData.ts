// ═══════════════════════════════════════════════════════════════════
//  PathBloom — Complete 15 Master Streams Taxonomy (Phase 4)
// ═══════════════════════════════════════════════════════════════════

export type StreamId =
  | 'science' | 'commerce' | 'arts' | 'computer_it' | 'design_creative'
  | 'medical' | 'engineering' | 'finance' | 'government' | 'hospitality'
  | 'law' | 'media' | 'sports' | 'vocational' | 'diploma';

export interface CourseItem {
  name: string;
  duration?: string;
  note?: string;
}

export interface CareerRole {
  title: string;
  salary?: string;
  growth?: 'high' | 'medium' | 'stable';
}

export interface SubField {
  id: string;
  label: string;
  icon: string;
  color: string; // Tailwind gradient snippet
  description: string;
  subjects?: string[];
  exams?: string[];
  children?: SubField[];
  courses?: CourseItem[];
  careers?: CareerRole[];
}

export interface Stream {
  id: StreamId;
  label: string;
  icon: string;
  gradient: string;
  glowClass: string;
  tagline: string;
  description: string;
  academic: SubField[];
  diploma: CourseItem[];
  vocational: CourseItem[];
  govtExams: CourseItem[];
  skillCourses: CourseItem[];
  careers: CareerRole[];
}

// ── 1. SCIENCE STREAM ───────────────────────────────────────────────
const scienceStream: Stream = {
  id: 'science',
  label: 'Science Stream',
  icon: '🔬',
  gradient: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
  glowClass: 'glow-indigo',
  tagline: 'Unlock Scientific Innovation & Technical Mastery',
  description: 'Pathways focusing on research, technology, clinical medicine, and analytical fields.',
  academic: [
    {
      id: 'science_medical',
      label: 'Medical (Biology Focus)',
      icon: '🩺',
      color: 'from-rose-500 to-pink-600',
      description: 'Pre-medical biological sciences, healthcare, and research tracks.',
      subjects: ['PCMB', 'PCB', 'PCBG', 'PCBH'],
      exams: ['NEET', 'KCET'],
      courses: [
        { name: 'MBBS (Medicine)', duration: '5.5 yrs' },
        { name: 'BDS (Dentistry)', duration: '5 yrs' },
        { name: 'B.Sc Biotechnology', duration: '3 yrs' },
        { name: 'B.Pharma', duration: '4 yrs' },
      ],
      careers: [
        { title: 'Medical Practitioner', salary: '₹12–40 LPA', growth: 'high' },
        { title: 'Biotechnologist', salary: '₹6–18 LPA', growth: 'high' },
      ]
    },
    {
      id: 'science_engineering',
      label: 'Engineering & Technology (Maths Focus)',
      icon: '⚙️',
      color: 'from-indigo-500 to-blue-600',
      description: 'JEE-focused engineering, mathematical, and computer science tracks.',
      exams: ['JEE Main', 'JEE Advanced', 'KCET'],
      children: [
        {
          id: 'pcmc', label: 'PCMC (Computer Focus)', icon: '💻', color: 'from-indigo-400 to-violet-500',
          description: 'Physics, Chemistry, Maths, Computer Science',
          subjects: ['PCMC'],
          courses: [{ name: 'B.Tech Computer Science', duration: '4 yrs' }, { name: 'BCA', duration: '3 yrs' }]
        },
        {
          id: 'pcme', label: 'PCME (Electronics Focus)', icon: '⚡', color: 'from-amber-400 to-orange-500',
          description: 'Physics, Chemistry, Maths, Electronics',
          subjects: ['PCME'],
          courses: [{ name: 'B.Tech Electronics & Comm.', duration: '4 yrs' }]
        },
        {
          id: 'pcms', label: 'PCMS (Statistics Focus)', icon: '📊', color: 'from-teal-400 to-emerald-500',
          description: 'Physics, Chemistry, Maths, Statistics',
          subjects: ['PCMS'],
          courses: [{ name: 'B.Sc Statistics / Data Science', duration: '3 yrs' }]
        },
        {
          id: 'pcm', label: 'PCM (Core Engineering)', icon: '📐', color: 'from-blue-400 to-cyan-500',
          description: 'Physics, Chemistry, Maths',
          subjects: ['PCM'],
          courses: [{ name: 'B.Tech Mechanical Eng.', duration: '4 yrs' }, { name: 'B.Tech Civil Eng.', duration: '4 yrs' }]
        },
        {
          id: 'pcmg', label: 'PCMG (Earth Sciences Focus)', icon: '🌍', color: 'from-emerald-400 to-green-500',
          description: 'Physics, Chemistry, Maths, Geography',
          subjects: ['PCMG'],
          courses: [{ name: 'B.Tech Environmental Eng.', duration: '4 yrs' }]
        }
      ]
    },
    {
      id: 'science_flexible',
      label: 'Flexible Option (PCMB)',
      icon: '🔭',
      color: 'from-purple-500 to-fuchsia-600',
      description: 'Keep paths open for both engineering and medical avenues simultaneously.',
      subjects: ['PCMB'],
      courses: [
        { name: 'Integrated B.Sc-M.Sc', duration: '5 yrs' },
        { name: 'B.Sc Agriculture', duration: '4 yrs' }
      ],
      careers: [
        { title: 'Research Scientist', salary: '₹8–24 LPA', growth: 'high' }
      ]
    }
  ],
  diploma: [
    { name: 'Diploma in Engineering (CSE/Mech/Civil)', duration: '3 yrs' },
    { name: 'Diploma in Pharmacy (D.Pharma)', duration: '2 yrs' }
  ],
  vocational: [
    { name: 'ITI Electrician', duration: '2 yrs' },
    { name: 'ITI Electronic Mechanic', duration: '2 yrs' }
  ],
  govtExams: [
    { name: 'NDA (National Defence Academy)' },
    { name: 'Railway Recruitment Boards (RRB) JE' }
  ],
  skillCourses: [
    { name: 'Python Programming Bootcamp', duration: '2 months' },
    { name: 'CAD / SolidWorks Modelling', duration: '1 month' }
  ],
  careers: [
    { title: 'Software Architect', salary: '₹14–45 LPA', growth: 'high' },
    { title: 'Clinical Researcher', salary: '₹6–16 LPA', growth: 'medium' }
  ]
};

// ── 2. COMMERCE STREAM ──────────────────────────────────────────────
const commerceStream: Stream = {
  id: 'commerce',
  label: 'Commerce Stream',
  icon: '📈',
  gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  glowClass: 'glow-amber',
  tagline: 'Trade, Finance & Strategic Business Management',
  description: 'Deep dive into accounting, wealth creation, business studies, and macroeconomics.',
  academic: [
    {
      id: 'comm_finance', label: 'Finance & Accounting', icon: '💰', color: 'from-amber-400 to-orange-500',
      description: 'Core accounting, strategic financial management, and tax planning.',
      subjects: ['SEBA', 'MEBA'],
      courses: [{ name: 'B.Com (Hons)', duration: '3 yrs' }, { name: 'CA (Chartered Accountant)', duration: '4 yrs' }]
    },
    {
      id: 'comm_it', label: 'Finance + IT', icon: '💻', color: 'from-cyan-400 to-blue-500',
      description: 'Combining financial acumen with computer applications (CEBA).',
      subjects: ['CEBA'],
      courses: [{ name: 'B.Com Computer Applications', duration: '3 yrs' }, { name: 'BBA Information Systems', duration: '3 yrs' }]
    },
    {
      id: 'comm_business', label: 'Business Studies', icon: '🏢', color: 'from-orange-500 to-red-500',
      description: 'Business Studies, Economics, Accountancy tracks.',
      subjects: ['Business Studies', 'Economics', 'Accountancy'],
      courses: [{ name: 'BBA', duration: '3 yrs' }, { name: 'BMS (Management)', duration: '3 yrs' }]
    },
    {
      id: 'comm_banking', label: 'Banking & Insurance', icon: '🏦', color: 'from-red-500 to-rose-600',
      description: 'Economics, Business Studies, and Accountancy tailored for banking.',
      courses: [{ name: 'B.Com Banking & Insurance', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Financial Accounting (Tally)', duration: '1 yr' }],
  vocational: [{ name: 'ITI Stenography', duration: '1 yr' }],
  govtExams: [
    { name: 'CA Foundation / CMA / CS' },
    { name: 'Banking PO / Clerk (IBPS, SBI)' },
    { name: 'IPMAT (Integrated MBA Entry)' }
  ],
  skillCourses: [
    { name: 'Advanced Tally ERP & GST', duration: '2 months' },
    { name: 'Financial Modeling (CFI)', duration: '3 months' }
  ],
  careers: [
    { title: 'Chartered Accountant (CA)', salary: '₹8–30 LPA', growth: 'high' },
    { title: 'Investment Analyst', salary: '₹10–25 LPA', growth: 'high' }
  ]
};

// ── 3. ARTS / HUMANITIES ─────────────────────────────────────────────
const artsStream: Stream = {
  id: 'arts',
  label: 'Arts / Humanities',
  icon: '🎭',
  gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  glowClass: 'glow-violet',
  tagline: 'Understand Society, Policy, and Human Expressions',
  description: 'Pathways focusing on governance, human mind, legal frameworks, and expressive arts.',
  academic: [
    {
      id: 'arts_civil', label: 'Civil Services Track', icon: '🏛️', color: 'from-violet-500 to-fuchsia-500',
      description: 'History, Economics, Political Science pathways.',
      subjects: ['HEPS', 'HEP'],
      courses: [{ name: 'BA Political Science', duration: '3 yrs' }, { name: 'BA History', duration: '3 yrs' }]
    },
    {
      id: 'arts_law', label: 'Law Pathway', icon: '⚖️', color: 'from-blue-500 to-indigo-600',
      description: 'History, Economics, Political Science & Legal studies.',
      subjects: ['HEPL', 'HPL'],
      courses: [{ name: 'Integrated BA-LLB', duration: '5 yrs' }]
    },
    {
      id: 'arts_psych', label: 'Psychology Track', icon: '🧠', color: 'from-pink-500 to-rose-500',
      description: 'History, Economics, Psychology and Human Behavior studies.',
      subjects: ['HEPSY', 'PSP'],
      courses: [{ name: 'BA Psychology', duration: '3 yrs' }]
    },
    {
      id: 'arts_media', label: 'Media & Journalism', icon: '📰', color: 'from-orange-400 to-amber-500',
      description: 'History, Economics, Journalism (HEJ, JPS).',
      subjects: ['HEJ', 'JPS'],
      courses: [{ name: 'BA Journalism & Mass Comm.', duration: '3 yrs' }]
    },
    {
      id: 'arts_creative', label: 'Performing & Visual Arts', icon: '🎨', color: 'from-yellow-400 to-amber-500',
      description: 'History, Psychology, Fine Arts (HPFA, PAHP).',
      subjects: ['HPFA', 'PAHP'],
      courses: [{ name: 'Bachelor of Fine Arts (BFA)', duration: '4 yrs' }]
    },
    {
      id: 'arts_geography', label: 'Geography & Environmental Science', icon: '🌍', color: 'from-emerald-400 to-teal-500',
      description: 'History, Geography, Political Science.',
      subjects: ['HGP', 'GEP'],
      courses: [{ name: 'BA Geography', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Journalism', duration: '1 yr' }],
  vocational: [{ name: 'ITI Stenography (English)', duration: '1 yr' }],
  govtExams: [
    { name: 'UPSC Civil Services Examination' },
    { name: 'CLAT (Common Law Admission Test)' },
    { name: 'CUET (Central Universities Entrance)' }
  ],
  skillCourses: [
    { name: 'Professional Content Writing', duration: '1 month' },
    { name: 'Geographic Information Systems (GIS) Basics', duration: '2 months' }
  ],
  careers: [
    { title: 'IAS Officer', salary: '₹56K–2.5L/month', growth: 'stable' },
    { title: 'Human Rights Lawyer', salary: '₹5–18 LPA', growth: 'high' }
  ]
};

// ── 4. COMPUTER & IT ───────────────────────────────────────────────
const computerITStream: Stream = {
  id: 'computer_it',
  label: 'Computer & IT',
  icon: '💻',
  gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  glowClass: 'glow-cyan',
  tagline: 'Master Software, Infrastructure, and Intelligence',
  description: 'Pathways focusing on web technologies, cyber defense, cloud deployment, and AI/ML models.',
  academic: [
    {
      id: 'it_software', label: 'Software Development', icon: '🖥️', color: 'from-sky-400 to-blue-500',
      description: 'Web development, App development, and coding principles (Python/Java).',
      courses: [{ name: 'BCA (Computer Applications)', duration: '3 yrs' }, { name: 'B.Sc Computer Science', duration: '3 yrs' }]
    },
    {
      id: 'it_analytics', label: 'Data Science & Intelligence', icon: '🤖', color: 'from-violet-500 to-fuchsia-600',
      description: 'AI/ML, Data Science, Data Analytics, Tableau, and Power BI visualization.',
      courses: [{ name: 'B.Sc Data Science', duration: '3 yrs' }]
    },
    {
      id: 'it_infra', label: 'Cloud & Cyber Security', icon: '🛡️', color: 'from-teal-400 to-emerald-500',
      description: 'Cyber Security, Cloud Computing, and Infrastructure administration.',
      courses: [{ name: 'BCA Cloud & Cyber Security', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Computer Science & Eng.', duration: '3 yrs' }],
  vocational: [{ name: 'ITI COPA (Computer Operator)', duration: '1 yr' }],
  govtExams: [{ name: 'NIMCET (For MCA)', note: 'Top NITs' }],
  skillCourses: [
    { name: 'Meta Full-Stack Developer Certificate', duration: '6 months' },
    { name: 'Google Cyber Security Professional Certificate', duration: '3 months' }
  ],
  careers: [
    { title: 'Full-Stack Developer', salary: '₹6–24 LPA', growth: 'high' },
    { title: 'AI / ML Engineer', salary: '₹12–40 LPA', growth: 'high' }
  ]
};

// ── 5. DESIGN & CREATIVE ─────────────────────────────────────────────
const designCreativeStream: Stream = {
  id: 'design_creative',
  label: 'Design & Creative',
  icon: '🎨',
  gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
  glowClass: 'glow-rose',
  tagline: 'Bring Visual Concepts and Products to Life',
  description: 'UI/UX design, interactive animation, visual effects, and textile/apparel creation.',
  academic: [
    {
      id: 'creative_visual', label: 'Visual Design & UI/UX', icon: '🖌️', color: 'from-pink-500 to-rose-500',
      description: 'Graphic Design, UI/UX Design for digital products.',
      courses: [{ name: 'B.Des (Interaction / UI-UX)', duration: '4 yrs' }]
    },
    {
      id: 'creative_media', label: 'Animation & VFX', icon: '🎬', color: 'from-orange-500 to-red-500',
      description: '3D modeling, rendering, and visual special effects.',
      courses: [{ name: 'B.Sc Animation & VFX', duration: '3 yrs' }]
    },
    {
      id: 'creative_fashion', label: 'Apparel & Space Design', icon: '👗', color: 'from-purple-500 to-pink-500',
      description: 'Fashion Design and Interior Space planning.',
      courses: [{ name: 'B.Des Fashion Design', duration: '4 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Fashion Design', duration: '3 yrs' }, { name: 'Diploma in Animation', duration: '2 yrs' }],
  vocational: [{ name: 'ITI Sewing Technology / Tailoring', duration: '1 yr' }, { name: 'ITI Cosmetology / Beautician', duration: '1 yr' }],
  govtExams: [{ name: 'NID Entrance (NID DAT)' }, { name: 'NIFT Entrance Exam' }],
  skillCourses: [
    { name: 'Figma UI/UX Advanced Design', duration: '2 months' },
    { name: 'Blender 3D Modeling Fundamentals', duration: '3 months' }
  ],
  careers: [
    { title: 'UI/UX Product Designer', salary: '₹8–28 LPA', growth: 'high' },
    { title: '3D Lighting Artist / VFX Animator', salary: '₹5–18 LPA', growth: 'high' }
  ]
};

// ── 6. MEDICAL & HEALTHCARE ──────────────────────────────────────────
const medicalStream: Stream = {
  id: 'medical',
  label: 'Medical & Healthcare',
  icon: '🏥',
  gradient: 'linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)',
  glowClass: 'glow-rose',
  tagline: 'Heal, Rehabilitate, and Serve Humanity',
  description: 'Nursing care, pharmaceutical science, physical therapy, and laboratory tech.',
  academic: [
    {
      id: 'med_clinical', label: 'Nursing & Allied Care', icon: '💊', color: 'from-red-500 to-pink-500',
      description: 'Professional nursing, therapeutic care, and healthcare diagnostics.',
      courses: [{ name: 'B.Sc Nursing', duration: '4 yrs' }]
    },
    {
      id: 'med_pharma', label: 'Pharmacy & Nutrition', icon: '🧪', color: 'from-amber-500 to-orange-500',
      description: 'Pharmacology, drug formulation, and nutrition/dietetics.',
      courses: [{ name: 'B.Pharma', duration: '4 yrs' }, { name: 'B.Sc Nutrition & Dietetics', duration: '3 yrs' }]
    },
    {
      id: 'med_therapy', label: 'Physiotherapy & MLT', icon: '🦴', color: 'from-violet-500 to-purple-500',
      description: 'Physical rehabilitation, diagnostic tests, and lab technology (MLT).',
      courses: [{ name: 'BPT (Physiotherapy)', duration: '4.5 yrs' }, { name: 'B.Sc Medical Lab Technology', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Nursing / GNM', duration: '3.5 yrs' }, { name: 'Diploma in Medical Lab Tech (DMLT)', duration: '2 yrs' }],
  vocational: [{ name: 'ITI Health Sanitary Inspector', duration: '1 yr' }],
  govtExams: [{ name: 'AIIMS Paramedical Entrance' }, { name: 'State Paramedical Board Exams' }],
  skillCourses: [{ name: 'Basic Life Support (BLS) Cert.', duration: '1 week' }],
  careers: [
    { title: 'Clinical Pharmacist', salary: '₹4–12 LPA', growth: 'high' },
    { title: 'Registered Physiotherapist', salary: '₹5–16 LPA', growth: 'high' }
  ]
};

// ── 7. ENGINEERING & TECHNOLOGY ──────────────────────────────────────
const engineeringStream: Stream = {
  id: 'engineering',
  label: 'Engineering & Tech',
  icon: '⚙️',
  gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  glowClass: 'glow-indigo',
  tagline: 'Pioneer Infrastructure and Modern Technology Systems',
  description: 'Mechanical systems, structural engineering, computing networks, and electronics.',
  academic: [
    {
      id: 'eng_systems', label: 'Technical Systems', icon: '🔩', color: 'from-blue-500 to-indigo-600',
      description: 'Core Engineering: PCMC, PCME, PCMS, PCM, PCMG options.',
      courses: [{ name: 'B.Tech Mechanical Eng.', duration: '4 yrs' }, { name: 'B.Tech Civil Eng.', duration: '4 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Mechanical / Civil Eng.', duration: '3 yrs' }],
  vocational: [{ name: 'ITI Fitter / Welder / Machinist', duration: '2 yrs' }],
  govtExams: [{ name: 'JEE Main' }, { name: 'GATE (Graduate Aptitude Test)' }],
  skillCourses: [{ name: 'AutoCAD & Revit Drafting', duration: '2 months' }],
  careers: [
    { title: 'Design Engineer', salary: '₹6–18 LPA', growth: 'stable' },
    { title: 'Structural Analyst', salary: '₹5–15 LPA', growth: 'stable' }
  ]
};

// ── 8. FINANCE & ACCOUNTING ──────────────────────────────────────────
const financeStream: Stream = {
  id: 'finance',
  label: 'Finance & Accounting',
  icon: '💹',
  gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  glowClass: 'glow-emerald',
  tagline: 'Deploy Capital, Leverage Stocks, and Audit Businesses',
  description: 'Software accounting tools, market analytics, financial forecasting, and taxation.',
  academic: [
    {
      id: 'fin_core', label: 'Financial Accounting & Banking', icon: '📊', color: 'from-emerald-500 to-teal-500',
      description: 'Banking finance, microeconomics, and analytical investing tools.',
      courses: [{ name: 'B.Sc Finance', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Banking and Finance', duration: '1 yr' }],
  vocational: [{ name: 'Tally & QuickBooks Certification', duration: '3 months' }],
  govtExams: [{ name: 'CA Foundation Exam' }, { name: 'SEBI Grade A Officer' }],
  skillCourses: [
    { name: 'Stock Market Trading & Technical Analysis', duration: '1 month' },
    { name: 'Financial Modeling & Valuation (CFI)', duration: '2 months' }
  ],
  careers: [
    { title: 'Portfolio Manager', salary: '₹9–25 LPA', growth: 'high' },
    { title: 'Tax Consultant', salary: '₹5–14 LPA', growth: 'stable' }
  ]
};

// ── 9. GOVERNMENT JOBS / CIVIL SERVICES ──────────────────────────────
const governmentStream: Stream = {
  id: 'government',
  label: 'Government Jobs',
  icon: '🏛️',
  gradient: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
  glowClass: 'glow-violet',
  tagline: 'Serve Your Nation in Civil, Administrative, and Security Cadres',
  description: 'Central administrative recruitment, state police, defense, and railways.',
  academic: [
    {
      id: 'gov_admin', label: 'Administrative & Defense Studies', icon: '🎖️', color: 'from-indigo-500 to-violet-500',
      description: 'Paths leading to central administrative support and public sector undertakings.',
      courses: [{ name: 'BA Public Administration', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Public Relations', duration: '1 yr' }],
  vocational: [{ name: 'Direct Police/Constable Training', duration: '1 yr' }],
  govtExams: [
    { name: 'SSC MTS (Multi-Tasking Staff)' },
    { name: 'SSC GD / Police Constable' },
    { name: 'RRB Group D (Railways)' },
    { name: 'Indian Army GD / Navy MR' }
  ],
  skillCourses: [{ name: 'Civil Exams Preparation & Reasoning', duration: 'Ongoing' }],
  careers: [
    { title: 'Central Govt Clerk / Assistant', salary: '₹3–8 LPA', growth: 'stable' },
    { title: 'Police Sub-Inspector / Constable', salary: '₹4–10 LPA', growth: 'stable' }
  ]
};

// ── 10. HOSPITALITY & TOURISM ────────────────────────────────────────
const hospitalityStream: Stream = {
  id: 'hospitality',
  label: 'Hospitality & Tourism',
  icon: '🍽️',
  gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  glowClass: 'glow-amber',
  tagline: 'Manage Premium Hotels, Tour Networks, and Culinary Artworks',
  description: 'Guest relations, culinary production, lodging management, and travel networks.',
  academic: [
    {
      id: 'hosp_services', label: 'Hotel & Culinary Management', icon: '🏨', color: 'from-amber-500 to-orange-500',
      description: 'Professional hospitality management and culinary arts specialization.',
      courses: [{ name: 'BHM (Bachelor of Hotel Management)', duration: '4 yrs' }, { name: 'B.Sc Culinary Arts', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Hotel Management', duration: '3 yrs' }],
  vocational: [{ name: 'ITI Food Production & Catering', duration: '1.5 yrs' }],
  govtExams: [{ name: 'NCHMCT JEE (Hotel Mgmt)' }],
  skillCourses: [{ name: 'Culinary Arts & French Cuisine', duration: '3 months' }],
  careers: [
    { title: 'Hotel General Manager', salary: '₹8–30 LPA', growth: 'high' },
    { title: 'Executive Chef', salary: '₹6–24 LPA', growth: 'high' }
  ]
};

// ── 11. LAW ─────────────────────────────────────────────────────────
const lawStream: Stream = {
  id: 'law',
  label: 'Law & Jurisprudence',
  icon: '⚖️',
  gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
  glowClass: 'glow-indigo',
  tagline: 'Argue Cases, Protect Rights, and Define Legal Frameworks',
  description: 'Corporate law, trial advocacy, constitutional jurisprudence, and public litigation.',
  academic: [
    {
      id: 'law_studies', label: 'Integrated Legal Studies', icon: '📜', color: 'from-slate-500 to-zinc-600',
      description: 'Comprehensive legal frameworks, drafting, and trial practices.',
      courses: [{ name: 'Integrated BA-LLB', duration: '5 yrs' }, { name: 'LLB (after graduation)', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Cyber Law', duration: '1 yr' }],
  vocational: [{ name: 'Legal Documentation Certificate', duration: '6 months' }],
  govtExams: [{ name: 'CLAT (Common Law Admission Test)' }, { name: 'Judicial Services Examination' }],
  skillCourses: [{ name: 'Contract Drafting & Negotiation', duration: '2 months' }],
  careers: [
    { title: 'Corporate Legal Counsel', salary: '₹10–35 LPA', growth: 'high' },
    { title: 'Advocate (Litigation)', salary: '₹5–50 LPA', growth: 'high' }
  ]
};

// ── 12. MEDIA & COMMUNICATION ───────────────────────────────────────
const mediaStream: Stream = {
  id: 'media',
  label: 'Media & Comm.',
  icon: '📡',
  gradient: 'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)',
  glowClass: 'glow-rose',
  tagline: 'Broadcast Stories, Edit Videos, and Direct Public Relations',
  description: 'Digital mass media, print journalism, content optimization, and public relations.',
  academic: [
    {
      id: 'media_broadcasting', label: 'Journalism & Content Strategy', icon: '📺', color: 'from-rose-500 to-orange-500',
      description: 'Video production, journalism, creative writing, and digital media.',
      courses: [{ name: 'BA Journalism & Mass Comm.', duration: '3 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Mass Communication', duration: '1 yr' }],
  vocational: [{ name: 'Professional Video Editing Certificate', duration: '3 months' }],
  govtExams: [{ name: 'IIMC PG Diploma Entrance' }],
  skillCourses: [
    { name: 'Creative Content Writing & SEO', duration: '1 month' },
    { name: 'Adobe Premiere Pro Video Editing', duration: '2 months' }
  ],
  careers: [
    { title: 'Media Broadcaster', salary: '₹4–15 LPA', growth: 'medium' },
    { title: 'Digital Media Strategist', salary: '₹5–20 LPA', growth: 'high' }
  ]
};

// ── 13. SPORTS & FITNESS ─────────────────────────────────────────────
const sportsStream: Stream = {
  id: 'sports',
  label: 'Sports & Fitness',
  icon: '🏆',
  gradient: 'linear-gradient(135deg, #10b981 0%, #84cc16 100%)',
  glowClass: 'glow-emerald',
  tagline: 'Optimise Human Biology, Train Athletes, and Drive Sports Analytics',
  description: 'Physical rehabilitation, gym coaching, athletics, and sports management.',
  academic: [
    {
      id: 'sports_phy', label: 'Sports Science & Phys. Ed.', icon: '🏋️', color: 'from-emerald-500 to-lime-500',
      description: 'Kinesiology, sports nutrition, and exercise physiology.',
      courses: [{ name: 'B.Sc Sports Science', duration: '3 yrs' }, { name: 'B.P.Ed (Physical Education)', duration: '4 yrs' }]
    }
  ],
  diploma: [{ name: 'Diploma in Sports Coaching', duration: '1 yr' }],
  vocational: [{ name: 'Certified Personal Gym Trainer (CPT)', duration: '3 months' }, { name: 'Yoga Instructor Training', duration: '3 months' }],
  govtExams: [{ name: 'Sports Authority of India (SAI) Coach Entrance' }, { name: 'Army Sports Quota Direct Entry' }],
  skillCourses: [{ name: 'Sports Nutrition & Dietary Planning', duration: '2 months' }],
  careers: [
    { title: 'Athletic Coach', salary: '₹4–18 LPA', growth: 'high' },
    { title: 'Sports Scientist', salary: '₹6–22 LPA', growth: 'high' }
  ]
};

// ── 14. VOCATIONAL / ITI ─────────────────────────────────────────────
const vocationalStream: Stream = {
  id: 'vocational',
  label: 'Vocational & ITI',
  icon: '🔩',
  gradient: 'linear-gradient(135deg, #78716c 0%, #44403c 100%)',
  glowClass: 'glow-amber',
  tagline: 'Master Crucial Technical and Industrial Trades',
  description: 'Hands-on training, mechanical repair, IT services, and tailoring.',
  academic: [
    {
      id: 'voc_tech', label: 'Technical Trades', icon: '🔧', color: 'from-zinc-500 to-neutral-600',
      description: 'Electrician, Fitter, Welder, Turner, Machinist.',
      courses: [{ name: 'ITI Electrician', duration: '2 yrs' }, { name: 'ITI Fitter', duration: '2 yrs' }]
    },
    {
      id: 'voc_it', label: 'IT Trade', icon: '💻', color: 'from-blue-500 to-indigo-500',
      description: 'Computer Operator & Programming Assistant (COPA).',
      courses: [{ name: 'ITI COPA', duration: '1 yr' }]
    },
    {
      id: 'voc_auto', label: 'Auto Mechanics', icon: '⚙️', color: 'from-red-500 to-orange-500',
      description: 'Diesel Mechanic, Motor Vehicle maintenance.',
      courses: [{ name: 'ITI Diesel Mechanic', duration: '1 yr' }]
    },
    {
      id: 'voc_creative', label: 'Creative Trades', icon: '✂️', color: 'from-pink-500 to-rose-500',
      description: 'Tailoring, garment sewing, and cosmetology/beautician skills.',
      courses: [{ name: 'ITI Cosmetology', duration: '1 yr' }, { name: 'ITI Tailoring / Sewing Tech', duration: '1 yr' }]
    }
  ],
  diploma: [{ name: 'Lateral Entry Diploma in Engineering', duration: '2 yrs' }],
  vocational: [{ name: 'ITI Plumber', duration: '1 yr' }],
  govtExams: [{ name: 'Apprenticeship (NAPS)' }, { name: 'Railway Technician Entry' }],
  skillCourses: [{ name: 'PMKVY Skill Certificate', duration: '3 months' }],
  careers: [
    { title: 'Industrial Electrician', salary: '₹3–9 LPA', growth: 'stable' },
    { title: 'COPA Technician', salary: '₹3–8 LPA', growth: 'medium' }
  ]
};

// ── 15. DIPLOMA / POLYTECHNIC ────────────────────────────────────────
const diplomaStream: Stream = {
  id: 'diploma',
  label: 'Diploma Stream',
  icon: '🎓',
  gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
  glowClass: 'glow-cyan',
  tagline: 'Practical Engineering and Non-Engineering Careers',
  description: 'Three-year technical diplomas offering immediate jobs or lateral B.Tech entry.',
  academic: [
    {
      id: 'dip_eng', label: 'Engineering Diplomas', icon: '🏗️', color: 'from-blue-500 to-cyan-500',
      description: 'Mechanical, Civil, Computer Science (CSE), Electrical, Electronics (ECE) Diplomas.',
      courses: [{ name: 'Diploma CSE', duration: '3 yrs' }, { name: 'Diploma Mechanical', duration: '3 yrs' }]
    },
    {
      id: 'dip_non_eng', label: 'Non-Engineering Diplomas', icon: '🧪', color: 'from-rose-500 to-pink-500',
      description: 'Nursing, Medical Lab Tech (MLT), Pharmacy, Animation, Fashion, Hotel Management.',
      courses: [{ name: 'Diploma Animation', duration: '2 yrs' }, { name: 'Diploma MLT', duration: '2 yrs' }]
    }
  ],
  diploma: [{ name: ' CET Polytechnic Diploma', duration: '3 yrs' }],
  vocational: [{ name: 'NTTF Technical Course', duration: '1 yr' }],
  govtExams: [{ name: 'JEECUP Polytechnic CET' }, { name: 'State Lateral Entry B.Tech Exams' }],
  skillCourses: [{ name: 'CNC Machine Programming', duration: '2 months' }],
  careers: [
    { title: 'Junior Engineer (JE)', salary: '₹4–12 LPA', growth: 'stable' },
    { title: 'Technologist', salary: '₹3–9 LPA', growth: 'medium' }
  ]
};

// ── Master Exports ───────────────────────────────────────────────────
export const ALL_STREAMS: Stream[] = [
  scienceStream, commerceStream, artsStream,
  computerITStream, designCreativeStream,
  medicalStream, engineeringStream, financeStream,
  governmentStream, hospitalityStream, lawStream,
  mediaStream, sportsStream, vocationalStream, diplomaStream
];

export const STREAM_MAP: Record<StreamId, Stream> = Object.fromEntries(
  ALL_STREAMS.map(s => [s.id, s])
) as Record<StreamId, Stream>;
