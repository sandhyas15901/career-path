import { ReactNode } from 'react';
import { ArrowLeft, Sprout } from 'lucide-react';

interface AppShellProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  onBack?: () => void;
  backLabel?: string;
  topAction?: ReactNode;
  footerNote?: string;
  children: ReactNode;
}

export default function AppShell({
  title,
  subtitle,
  kicker = 'Learnify Design System',
  onBack,
  backLabel = 'Back',
  topAction,
  footerNote = 'Shared cyberpunk glass theme powered by the login screen design tokens.',
  children,
}: AppShellProps) {
  return (
    <div className="theme-shell">
      <div className="page-shell">
        <header className="cyber-navbar">
          <div className="flex items-start gap-4">
            {onBack && (
              <button type="button" onClick={onBack} className="cyber-btn cyber-btn-secondary !rounded-full !px-4 !py-2">
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
              </button>
            )}

            <div>
              <p className="page-kicker">{kicker}</p>
              <h1 className="page-title">{title}</h1>
              {subtitle && <p className="page-subtitle">{subtitle}</p>}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {topAction}
            <div className="cyber-brand">
              <div className="cyber-brand-mark">
                <Sprout className="h-5 w-5" />
              </div>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-white">PathBloom</p>
                <p className="text-xs text-white/50">Cyberpunk LMS Shell</p>
              </div>
            </div>
          </div>
        </header>

        <main className="cyber-main">{children}</main>

        <footer className="cyber-footer">
          <span>{footerNote}</span>
          <span className="hidden sm:inline">Dark base, neon accents, glassmorphism by default.</span>
        </footer>
      </div>
    </div>
  );
}
