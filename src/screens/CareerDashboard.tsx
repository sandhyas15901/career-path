  import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ChevronRight, GraduationCap, Building, Wrench,
  Shield, BookOpen, Briefcase, ExternalLink, Home, ChevronDown, ChevronUp, Trophy
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STREAM_MAP, SubField, CourseItem, CareerRole, StreamId } from '../data/careerData';

// ── Breadcrumb trail ─────────────────────────────────────────────────
interface Crumb {
  label: string;
  onClick: () => void;
}

function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3 h-3 text-white/20" />}
          <button
            onClick={c.onClick}
            className={`text-xs font-semibold tracking-wide transition-colors duration-200
              ${i === crumbs.length - 1 ? 'text-indigo-400 font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            {c.label}
          </button>
        </span>
      ))}
    </div>
  );
}

// ── Section card ─────────────────────────────────────────────────────
interface SectionCardProps {
  icon: React.ElementType;
  label: string;
  count?: number;
  colorClass: string;
  onClick: () => void;
  delay?: number;
}

function SectionCard({ icon: Icon, label, count, colorClass, onClick, delay = 0 }: SectionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 300, damping: 25 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group glass rounded-2xl p-6 border border-white/8 hover:border-white/20
        hover:bg-white/6 transition-all duration-300 text-left w-full shadow-xl card-lift"
    >
      <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white font-bold text-sm mb-1 tracking-wide">{label}</h3>
      {count !== undefined && (
        <p className="text-white/35 text-xs">{count} options mapped</p>
      )}
      <div className="flex items-center gap-1.5 text-xs text-indigo-400/80 group-hover:text-indigo-400 font-medium mt-4">
        Explore <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </motion.button>
  );
}

// ── Sub-field card ───────────────────────────────────────────────────
function SubFieldCard({ field, onClick, delay = 0 }: { field: SubField; onClick: () => void; delay?: number }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 300, damping: 25 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative rounded-2xl p-6 border border-white/8 hover:border-white/20
        transition-all duration-300 text-left w-full overflow-hidden shadow-xl card-lift
        bg-gradient-to-br ${field.color} bg-opacity-[0.06] hover:bg-opacity-[0.1]`}
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <span className="text-4xl mb-4 block">{field.icon}</span>
        <h3 className="text-white font-bold text-base mb-1.5 tracking-wide">{field.label}</h3>
        <p className="text-white/50 text-xs leading-relaxed mb-4">{field.description}</p>
        {field.subjects && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {field.subjects.map(s => (
              <span key={s} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/8 font-semibold uppercase tracking-wider">
                {s}
              </span>
            ))}
          </div>
        )}
        {field.children && (
          <p className="text-white/35 text-xs flex items-center gap-1 mt-2">
            <ChevronRight className="w-3.5 h-3.5" /> {field.children.length} streams available
          </p>
        )}
      </div>
    </motion.button>
  );
}

// ── Course list ──────────────────────────────────────────────────────
function CourseList({ courses }: { courses: CourseItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? courses : courses.slice(0, 4);

  return (
    <div>
      <div className="space-y-2.5">
        {visible.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start justify-between p-4 rounded-xl border border-white/6
              bg-white/3 hover:bg-white/6 hover:border-white/10 transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-white/90 text-sm font-semibold tracking-wide">{c.name}</p>
                {c.note && <p className="text-white/40 text-xs mt-1">{c.note}</p>}
              </div>
            </div>
            {c.duration && (
              <span className="text-xs text-white/50 bg-white/6 border border-white/8 rounded-lg px-2.5 py-1 ml-2 flex-shrink-0 font-medium">
                {c.duration}
              </span>
            )}
          </motion.div>
        ))}
      </div>
      {courses.length > 4 && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-3 flex items-center gap-1.5 text-indigo-400 text-xs hover:text-indigo-300 transition-colors font-semibold"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Show less' : `Show ${courses.length - 4} more`}
        </button>
      )}
    </div>
  );
}

// ── Career role card ─────────────────────────────────────────────────
function CareerRoleCard({ role, delay = 0, onClick }: { role: CareerRole; delay?: number; onClick?: () => void }) {
  const growthColor = {
    high: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    stable: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  }[role.growth || 'stable'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 300, damping: 25 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass rounded-2xl p-5 border border-white/8 hover:border-white/20 hover:bg-white/6 transition-all duration-300 card-lift shadow-lg cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <p className="text-white font-bold text-sm leading-snug tracking-wide">{role.title}</p>
        {role.growth && (
          <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold flex-shrink-0 capitalize tracking-wider ${growthColor}`}>
            {role.growth === 'high' ? '📈 ' : role.growth === 'medium' ? '📊 ' : '🔒 '}{role.growth}
          </span>
        )}
      </div>
      {role.salary && (
        <div className="flex items-center gap-1 text-indigo-400 text-xs font-bold mt-1">
          <Trophy className="w-3.5 h-3.5" />
          <span>Avg. Salary: {role.salary}</span>
        </div>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN COMPONENT — CAREER PATH DASHBOARD WITH INTERACTIVE DRILL-DOWN
// ═══════════════════════════════════════════════════════════════════════
type DashView =
  | 'overview'                            // Steps 1 & 2
  | 'academic'                            // Step 3
  | 'academic_sub'                        // Step 4
  | 'academic_leaf'                       // Step 5 (Deep combinations)
  | 'diploma'
  | 'vocational'
  | 'govt_exams'
  | 'skill_courses'
  | 'careers';

export default function CareerDashboard() {
  const { selectedStream, recommendedStream, setScreen } = useApp();
  const streamId = (selectedStream || recommendedStream) as StreamId;
  const stream = STREAM_MAP[streamId];

  const [view, setView] = useState<DashView>('overview');
  const [activeAcademic, setActiveAcademic] = useState<SubField | null>(null);
  const [activeSubField, setActiveSubField] = useState<SubField | null>(null);

  if (!stream) return null;

  // ── Breadcrumbs matching state depth ─────────────────────────────
  const crumbs: Crumb[] = [
    { label: '🏠 Dashboard', onClick: () => setView('overview') },
  ];
  if (view === 'academic' || view === 'academic_sub' || view === 'academic_leaf') {
    crumbs.push({ label: 'Academic Courses', onClick: () => { setView('academic'); setActiveAcademic(null); } });
  }
  if ((view === 'academic_sub' || view === 'academic_leaf') && activeAcademic) {
    crumbs.push({ label: activeAcademic.label, onClick: () => { setView('academic_sub'); setActiveSubField(null); } });
  }
  if (view === 'academic_leaf' && activeSubField) {
    crumbs.push({ label: activeSubField.label, onClick: () => {} });
  }
  if (view === 'diploma')      crumbs.push({ label: 'Diploma / Polytechnic', onClick: () => {} });
  if (view === 'vocational')   crumbs.push({ label: 'Vocational / ITI', onClick: () => {} });
  if (view === 'govt_exams')   crumbs.push({ label: 'Government Exams', onClick: () => {} });
  if (view === 'skill_courses') crumbs.push({ label: 'Skill Courses', onClick: () => {} });
  if (view === 'careers')      crumbs.push({ label: 'Career Roles', onClick: () => {} });

  // ── 6 Primary clickable card configs ─────────────────────────────
  const mainSections = [
    { icon: GraduationCap, label: 'Academic Courses', view: 'academic' as DashView, color: 'bg-gradient-to-br from-indigo-500 to-violet-600', count: stream.academic.length },
    { icon: Building,      label: 'Diploma / Polytechnic', view: 'diploma' as DashView, color: 'bg-gradient-to-br from-cyan-500 to-blue-600', count: stream.diploma.length },
    { icon: Wrench,        label: 'Vocational / ITI', view: 'vocational' as DashView, color: 'bg-gradient-to-br from-amber-500 to-orange-600', count: stream.vocational.length },
    { icon: Shield,        label: 'Government Exams', view: 'govt_exams' as DashView, color: 'bg-gradient-to-br from-violet-500 to-purple-600', count: stream.govtExams.length },
    { icon: BookOpen,      label: 'Skill Courses', view: 'skill_courses' as DashView, color: 'bg-gradient-to-br from-emerald-500 to-teal-600', count: stream.skillCourses.length },
    { icon: Briefcase,     label: 'Career Roles', view: 'careers' as DashView, color: 'bg-gradient-to-br from-rose-500 to-pink-600', count: stream.careers.length, navigateToScreen: true },
  ];

  const handleBack = () => {
    if (view === 'overview') setScreen('final_result');
    else if (view === 'academic_leaf') {
      if (activeSubField) { setActiveSubField(null); setView('academic_sub'); }
      else { setActiveAcademic(null); setView('academic'); }
    }
    else if (view === 'academic_sub') { setActiveAcademic(null); setView('academic'); }
    else setView('overview');
  };

  // ── Render dynamic content ───────────────────────────────────────
  const renderContent = () => {
    // ── STEP 1 & 2: OVERVIEW
    if (view === 'overview') {
      return (
        <div>
          {/* Recommended highlight hero banner */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden mb-8 p-8 recommended-ring shadow-2xl"
          >
            {/* Ambient gradients */}
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute inset-0" style={{ background: stream.gradient, opacity: 0.15 }} />
            
            <div className="relative z-10 flex items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30 tracking-wider">
                    ⭐ TOP RECOMMENDED STREAM
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white flex items-center gap-3">
                  <span className="text-4xl">{stream.icon}</span>
                  {stream.label}
                </h1>
                <p className="text-white/60 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
                  {stream.tagline} — {stream.description}
                </p>
              </div>
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="text-6xl hidden md:block"
              >
                {stream.icon}
              </motion.div>
            </div>
          </motion.div>

          {/* 6 primary card category grid */}
          <h2 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">
            Pathways to explore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mainSections.map((s, i) => (
              <SectionCard
                key={s.view}
                icon={s.icon}
                label={s.label}
                count={s.count}
                colorClass={s.color}
                onClick={() => (s as any).navigateToScreen ? setScreen('career_role') : setView(s.view)}
                delay={i * 0.07}
              />
            ))}
          </div>

          {/* Career outcome preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 glass rounded-3xl p-7 border border-white/8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-bold text-lg tracking-wide">Top Career Outcomes</h3>
                <p className="text-white/40 text-xs mt-0.5">Recommended outcomes tailored for you</p>
              </div>
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stream.careers.map((role, i) => (
                <CareerRoleCard key={i} role={role} delay={i * 0.06} onClick={() => setScreen('career_role')} />
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    // ── STEP 3: ACADEMIC (Science/Commerce/Arts sub-categories)
    if (view === 'academic') {
      return (
        <div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-display font-extrabold text-white mb-1.5">
            Academic Courses
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-white/45 text-sm mb-6">
            Choose a stream below to explore available sub-branches and exams.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stream.academic.map((field, i) => (
              <SubFieldCard
                key={field.id}
                field={field}
                delay={i * 0.08}
                onClick={() => {
                  setActiveAcademic(field);
                  if (field.children && field.children.length > 0) {
                    setView('academic_sub');
                  } else {
                    setView('academic_leaf');
                  }
                }}
              />
            ))}
          </div>
        </div>
      );
    }

    // ── STEP 4: ACADEMIC_SUB (e.g. Science clicked -> Medical / Engineering / Flexible sub-cards)
    if (view === 'academic_sub' && activeAcademic) {
      const children = activeAcademic.children || [];
      return (
        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 flex items-start gap-4">
            <div className="text-4xl">{activeAcademic.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">{activeAcademic.label}</h2>
              <p className="text-white/40 text-sm mt-0.5 leading-relaxed">{activeAcademic.description}</p>
            </div>
          </motion.div>
          <h3 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Specialisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {children.map((child, i) => (
              <SubFieldCard
                key={child.id}
                field={child}
                delay={i * 0.08}
                onClick={() => {
                  setActiveSubField(child);
                  setView('academic_leaf');
                }}
              />
            ))}
          </div>

          {activeAcademic.courses && activeAcademic.courses.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 glass rounded-3xl p-6 border border-white/8 shadow-xl"
            >
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                Undergraduate Courses
              </h3>
              <CourseList courses={activeAcademic.courses} />
            </motion.div>
          )}
        </div>
      );
    }

    // ── STEP 5: ACADEMIC_LEAF (e.g. Engineering clicked -> PCMC, PCME, PCMS, PCM, PCMG subject combos)
    if (view === 'academic_leaf') {
      const field = activeSubField || activeAcademic;
      if (!field) return null;
      return (
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className={`relative rounded-3xl overflow-hidden p-8 mb-8 bg-gradient-to-br ${field.color}`}
          >
            <div className="absolute inset-0 opacity-15"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10">
              <span className="text-5xl mb-4 block">{field.icon}</span>
              <h2 className="text-3xl font-display font-extrabold text-white leading-tight">{field.label}</h2>
              <p className="text-white/80 text-sm md:text-base mt-2 max-w-xl leading-relaxed">{field.description}</p>
              {field.subjects && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {field.subjects.map(s => (
                    <span key={s} className="text-xs px-3.5 py-1 rounded-full bg-white/20 text-white font-bold border border-white/20 uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Courses */}
            {field.courses && field.courses.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-3xl p-6 border border-white/8 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-white font-bold text-base">Key Degree Courses</h3>
                </div>
                <CourseList courses={field.courses} />
              </motion.div>
            )}

            {/* Careers */}
            {field.careers && field.careers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-3xl p-6 border border-white/8 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-amber-400" />
                  <h3 className="text-white font-bold text-base">Recommended Careers</h3>
                </div>
                <div className="space-y-3">
                  {field.careers.map((c, i) => (
                    <CareerRoleCard key={i} role={c} delay={i * 0.06} onClick={() => setScreen('career_role')} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      );
    }

    // ── Diploma
    if (view === 'diploma') {
      return (
        <div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-display font-extrabold text-white mb-1.5">
            Diploma / Polytechnic
          </motion.h2>
          <p className="text-white/45 text-sm mb-6">Explore professional polytechnic and practical diploma paths.</p>
          <CourseList courses={stream.diploma} />
        </div>
      );
    }

    // ── Vocational
    if (view === 'vocational') {
      return (
        <div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-display font-extrabold text-white mb-1.5">
            Vocational / ITI Trades
          </motion.h2>
          <p className="text-white/45 text-sm mb-6">Hands-on job-ready trades with direct employability.</p>
          <CourseList courses={stream.vocational} />
        </div>
      );
    }

    // ── Government Exams
    if (view === 'govt_exams') {
      return (
        <div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-display font-extrabold text-white mb-1.5">
            Government Exams Mapped
          </motion.h2>
          <p className="text-white/45 text-sm mb-6">Highly sought-after competitive recruitment channels.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stream.govtExams.map((exam, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="glass p-5 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{exam.name}</h3>
                    {exam.note && <p className="text-white/40 text-xs mt-1 leading-relaxed">{exam.note}</p>}
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 ml-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    // ── Skill Courses
    if (view === 'skill_courses') {
      return (
        <div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-display font-extrabold text-white mb-1.5">
            Skill-Based Courses (All Courses Library)
          </motion.h2>
          <p className="text-white/45 text-sm mb-6">Premium industry-recognised certifications to add directly to your profile.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stream.skillCourses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-2xl p-5 border border-white/8 hover:border-indigo-500/40 hover:bg-white/6 transition-all duration-300 cursor-pointer card-lift group flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-semibold leading-snug">{course.name}</p>
                    {course.duration && (
                      <p className="text-white/35 text-xs mt-1.5 flex items-center gap-1 font-medium">
                        ⏱ {course.duration}
                      </p>
                    )}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-emerald-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    // ── Career Roles
    if (view === 'careers') {
      return (
        <div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-display font-extrabold text-white mb-1.5">
            Career Roles & Average Pay
          </motion.h2>
          <p className="text-white/45 text-sm mb-6">Projected salaries and growth opportunities mapped directly to this stream.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stream.careers.map((role, i) => (
              <CareerRoleCard key={i} role={role} delay={i * 0.08} onClick={() => setScreen('career_role')} />
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0d0d1a] py-8 px-4">
      {/* Dynamic ambient blur based on stream colors */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full blur-3xl pointer-events-none"
        style={{ background: stream.gradient }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Navigation / Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 pb-4 border-b border-white/5"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="p-2.5 rounded-xl text-white/40 hover:text-white hover:bg-white/8 border border-white/5 hover:border-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Breadcrumb crumbs={crumbs} />
          </div>

          <button
            onClick={() => setScreen('final_result')}
            className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-semibold bg-white/4 hover:bg-white/8 border border-white/5 hover:border-white/10 rounded-xl px-4 py-2 transition-all"
          >
            <Home className="w-4 h-4" /> Results
          </button>
        </motion.div>

        {/* State-driven view renderer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view + (activeAcademic?.id || '') + (activeSubField?.id || '')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
