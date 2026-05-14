import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Sprout,
  Eye,
  EyeOff,
  KeyRound,
  LoaderCircle,
  Lock,
  Mail,
  Smartphone,
  User,
  UserRoundCog,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import { apiRequest, ApiError } from '../lib/api';

type Mode = 'login' | 'signup' | 'forgot' | 'reset' | 'verify';

type Toast = {
  tone: 'success' | 'error' | 'info';
  message: string;
};

const roles = [
  { value: 'student', label: 'Student' },
  { value: 'counselor', label: 'Counselor' },
  { value: 'admin', label: 'Admin' },
];

const passwordRules = [
  { label: 'At least 8 characters', test: (value: string) => value.length >= 8 },
  { label: 'One uppercase letter', test: (value: string) => /[A-Z]/.test(value) },
  { label: 'One lowercase letter', test: (value: string) => /[a-z]/.test(value) },
  { label: 'One number', test: (value: string) => /\d/.test(value) },
];

export default function LoginScreen() {
  const { login } = useApp();
  const [mode, setMode] = useState<Mode>('login');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [verificationMeta, setVerificationMeta] = useState({ uid: '', token: '', email: '' });
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    role: 'student',
    rememberMe: true,
    verificationToken: '',
    resetUid: '',
    resetToken: '',
    resetPassword: '',
    resetConfirmPassword: '',
  });

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const passwordScore = useMemo(
    () => passwordRules.filter(rule => rule.test(form.password)).length,
    [form.password],
  );

  const resetPasswordScore = useMemo(
    () => passwordRules.filter(rule => rule.test(form.resetPassword)).length,
    [form.resetPassword],
  );

  const shell = {
    page: 'bg-[#081120] text-white',
    card: 'bg-white/10 border-white/15 text-white shadow-[0_30px_90px_rgba(8,15,30,0.4)]',
    field: 'bg-white/7 border-white/12 text-white placeholder:text-white/35 focus:border-cyan-300/60 focus:ring-cyan-300/20',
    muted: 'text-white/55',
    subdued: 'text-white/35',
    pill: 'bg-white/7 border-white/10',
  };

  const inp = `w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:ring-4 ${shell.field}`;

  const notify = (tone: Toast['tone'], message: string) => setToast({ tone, message });

  const readError = (err: unknown) => {
    if (err instanceof ApiError) {
      const entries = Object.entries(err.payload).filter(([, value]) => value);
      if (entries.length) {
        const [, value] = entries[0];
        if (Array.isArray(value)) return String(value[0]);
        if (typeof value === 'string') return value;
      }
      if (err.payload.raw) {
        if (err.payload.raw.includes('DisallowedHost')) {
          return 'Backend host is not allowed by Django. Restart the backend after the auth configuration update.';
        }
        return `Request failed with status ${err.status}.`;
      }
      return err.message;
    }
    if (err instanceof Error) {
      return err.message;
    }
    return 'Something went wrong. Please try again.';
  };

  const validateMode = () => {
    if (mode === 'login') {
      if (!form.email.trim() || !form.password.trim()) return 'Enter your email or username and password.';
      return '';
    }
    if (mode === 'signup') {
      if (!form.name.trim() || !form.email.trim() || !form.username.trim()) return 'Complete the required account details.';
      if (form.password !== form.confirmPassword) return 'Passwords do not match.';
      if (passwordScore < 3) return 'Choose a stronger password before continuing.';
      return '';
    }
    if (mode === 'forgot') {
      if (!form.email.trim()) return 'Enter the email for your account.';
      return '';
    }
    if (mode === 'verify') {
      if (!verificationMeta.uid || !form.verificationToken.trim()) return 'Enter the verification token.';
      return '';
    }
    if (!form.resetUid.trim() || !form.resetToken.trim()) return 'Reset link information is required.';
    if (form.resetPassword !== form.resetConfirmPassword) return 'Passwords do not match.';
    if (resetPasswordScore < 3) return 'Use a stronger password for the reset.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationMessage = validateMode();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setLoading(true);
    try {
      if (mode === 'login') {
        await login(form.email.trim(), form.password, form.rememberMe);
        notify('success', 'Secure session started successfully.');
      } else if (mode === 'signup') {
        const payload = await apiRequest<{
          message: string;
          uid: string;
          verification_token?: string;
          user: { email: string };
        }>('/auth/register/', {
          method: 'POST',
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            username: form.username.trim(),
            password: form.password,
            confirm_password: form.confirmPassword,
            mobile_number: form.mobileNumber.trim(),
            role: form.role,
          }),
        });

        setVerificationMeta({
          uid: payload.uid,
          token: payload.verification_token || '',
          email: payload.user.email,
        });
        setForm(current => ({
          ...current,
          verificationToken: payload.verification_token || '',
        }));
        setMode('verify');
        notify('success', payload.message);
      } else if (mode === 'forgot') {
        const payload = await apiRequest<{ message: string; uid: string; debug_token?: string }>(
          '/auth/password-reset-request/',
          {
            method: 'POST',
            body: JSON.stringify({ email: form.email.trim() }),
          },
        );

        setForm(current => ({
          ...current,
          resetUid: payload.uid,
          resetToken: payload.debug_token || '',
        }));
        setMode('reset');
        notify('info', payload.message);
      } else if (mode === 'verify') {
        const payload = await apiRequest<{ message: string }>('/auth/verify-email/', {
          method: 'POST',
          body: JSON.stringify({
            uid: verificationMeta.uid,
            token: form.verificationToken.trim(),
          }),
        });
        setMode('login');
        notify('success', payload.message);
      } else {
        const payload = await apiRequest<{ message: string }>('/auth/password-reset-confirm/', {
          method: 'POST',
          body: JSON.stringify({
            uid: form.resetUid.trim(),
            token: form.resetToken.trim(),
            new_password: form.resetPassword,
            confirm_password: form.resetConfirmPassword,
          }),
        });
        setMode('login');
        notify('success', payload.message);
      }
    } catch (err) {
      if (err instanceof ApiError && err.payload.requires_verification) {
        setVerificationMeta({
          uid: String(err.payload.uid || ''),
          token: String(err.payload.verification_token || ''),
          email: form.email.trim(),
        });
        setForm(current => ({
          ...current,
          verificationToken: String(err.payload.verification_token || ''),
        }));
        setMode('verify');
      }
      const message = readError(err);
      setError(message);
      notify('error', message);
    } finally {
      setLoading(false);
    }
  };

  const resendVerification = async () => {
    if (!verificationMeta.email && !form.email.trim()) {
      setError('Enter the email address you signed up with first.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const payload = await apiRequest<{ message: string; uid: string; verification_token?: string }>(
        '/auth/resend-verification/',
        {
          method: 'POST',
          body: JSON.stringify({
            email: verificationMeta.email || form.email.trim(),
          }),
        },
      );
      setVerificationMeta(current => ({
        ...current,
        uid: payload.uid,
        token: payload.verification_token || current.token,
      }));
      setForm(current => ({
        ...current,
        verificationToken: payload.verification_token || current.verificationToken,
      }));
      notify('info', payload.message);
    } catch (err) {
      setError(readError(err));
    } finally {
      setLoading(false);
    }
  };

  const titleMap: Record<Mode, string> = {
    login: 'Secure sign in',
    signup: 'Create your account',
    forgot: 'Recover your password',
    reset: 'Set a new password',
    verify: 'Verify your email',
  };

  const subtitleMap: Record<Mode, string> = {
    login: 'Access assessments, dashboards, and protected progress securely.',
    signup: 'Register with real validation, role-aware access, and email verification.',
    forgot: 'We will prepare a secure reset token for your account.',
    reset: 'Choose a strong new password and invalidate existing sessions.',
    verify: 'Activate your account before the first sign in.',
  };

  return (
    <div className={`min-h-screen relative overflow-hidden px-4 py-8 transition-colors duration-500 ${shell.page}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-[-10%] h-80 w-80 rounded-full blur-3xl bg-cyan-400/20" />
        <div className="absolute top-[25%] right-[-8%] h-96 w-96 rounded-full blur-3xl bg-indigo-500/25" />
        <div className="absolute bottom-[-10%] left-[20%] h-96 w-96 rounded-full blur-3xl bg-emerald-400/12" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '26px 26px' }}
        />
      </div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={`fixed left-1/2 top-5 z-50 w-[min(92vw,28rem)] -translate-x-1/2 rounded-2xl border px-4 py-3 text-sm shadow-2xl backdrop-blur-xl ${
            toast.tone === 'success'
              ? 'border-emerald-400/30 bg-emerald-500/15 text-emerald-50'
              : toast.tone === 'error'
                ? 'border-rose-400/30 bg-rose-500/15 text-rose-50'
                : 'border-sky-400/30 bg-sky-500/15 text-sky-50'
          }`}
        >
          {toast.message}
        </motion.div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-[2rem] border p-6 backdrop-blur-2xl sm:p-8 ${shell.card}`}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/30">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">PathBloom</p>
              <p className={`text-xs ${shell.subdued}`}>Authentication and access control</p>
            </div>
          </div>

          <div className={`mb-6 rounded-2xl border p-1 ${shell.pill}`}>
            <div className="grid grid-cols-2 gap-1">
              {(['login', 'signup'] as const).map(item => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setMode(item);
                    setError('');
                  }}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    mode === item
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                      : shell.muted
                  }`}
                >
                  {item === 'login' ? 'Sign in' : 'Create account'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold">{titleMap[mode]}</h2>
            <p className={`mt-2 text-sm leading-6 ${shell.muted}`}>{subtitleMap[mode]}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Full name</span>
                    <div className="relative">
                      <User className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${shell.subdued}`} />
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(current => ({ ...current, name: e.target.value }))}
                        placeholder="Aarav Sharma"
                        className={`${inp} pl-11`}
                      />
                    </div>
                  </label>
                  <label className="block">
                    <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Username</span>
                    <div className="relative">
                      <UserRoundCog className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${shell.subdued}`} />
                      <input
                        type="text"
                        value={form.username}
                        onChange={e => setForm(current => ({ ...current, username: e.target.value }))}
                        placeholder="aarav.sharma"
                        className={`${inp} pl-11`}
                      />
                    </div>
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Mobile number</span>
                    <div className="relative">
                      <Smartphone className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${shell.subdued}`} />
                      <input
                        type="tel"
                        value={form.mobileNumber}
                        onChange={e => setForm(current => ({ ...current, mobileNumber: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className={`${inp} pl-11`}
                      />
                    </div>
                  </label>
                  <label className="block">
                    <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Role</span>
                    <select
                      value={form.role}
                      onChange={e => setForm(current => ({ ...current, role: e.target.value }))}
                      className={inp}
                    >
                      {roles.map(role => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </>
            )}

            {mode !== 'verify' && mode !== 'reset' && (
              <label className="block">
                <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>
                  {mode === 'login' ? 'Email or username' : 'Email address'}
                </span>
                <div className="relative">
                  <Mail className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${shell.subdued}`} />
                  <input
                    type="text"
                    value={form.email}
                    onChange={e => setForm(current => ({ ...current, email: e.target.value }))}
                    placeholder={mode === 'login' ? 'you@example.com or username' : 'you@example.com'}
                    className={`${inp} pl-11`}
                  />
                </div>
              </label>
            )}

            {(mode === 'login' || mode === 'signup') && (
              <label className="block">
                <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Password</span>
                <div className="relative">
                  <Lock className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${shell.subdued}`} />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={form.password}
                    onChange={e => setForm(current => ({ ...current, password: e.target.value }))}
                    placeholder="Enter a secure password"
                    className={`${inp} pl-11 pr-11`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(current => !current)}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 ${shell.subdued}`}
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </label>
            )}

            {mode === 'signup' && (
              <>
                <label className="block">
                  <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Confirm password</span>
                  <div className="relative">
                    <KeyRound className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${shell.subdued}`} />
                    <input
                      type={showConfirmPass ? 'text' : 'password'}
                      value={form.confirmPassword}
                      onChange={e => setForm(current => ({ ...current, confirmPassword: e.target.value }))}
                      placeholder="Re-enter your password"
                      className={`${inp} pl-11 pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPass(current => !current)}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 ${shell.subdued}`}
                    >
                      {showConfirmPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </label>

                <div className={`rounded-2xl border p-4 ${shell.pill}`}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium">Password strength</p>
                    <p className={`text-xs ${shell.subdued}`}>{passwordScore}/4 checks</p>
                  </div>
                  <div className="mb-4 grid grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full ${
                          index < passwordScore
                            ? 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {passwordRules.map(rule => {
                      const passed = rule.test(form.password);
                      return (
                        <div key={rule.label} className={`flex items-center gap-2 text-xs ${passed ? 'text-emerald-400' : shell.subdued}`}>
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {rule.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {mode === 'login' && (
              <div className="flex items-center justify-between gap-4">
                <label className={`inline-flex items-center gap-3 text-sm ${shell.muted}`}>
                  <input
                    type="checkbox"
                    checked={form.rememberMe}
                    onChange={e => setForm(current => ({ ...current, rememberMe: e.target.checked }))}
                    className="h-4 w-4 rounded border-white/20 bg-transparent text-cyan-500"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setMode('forgot');
                    setError('');
                  }}
                  className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {mode === 'verify' && (
              <>
                <div className={`rounded-2xl border p-4 text-sm leading-6 ${shell.pill}`}>
                  <p className="font-medium">Verification target</p>
                  <p className={shell.muted}>{verificationMeta.email || form.email || 'Use your registered email address.'}</p>
                  {verificationMeta.token && (
                    <p className={`mt-3 break-all text-xs ${shell.subdued}`}>
                      Debug token: {verificationMeta.token}
                    </p>
                  )}
                </div>
                <label className="block">
                  <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Verification token</span>
                  <input
                    type="text"
                    value={form.verificationToken}
                    onChange={e => setForm(current => ({ ...current, verificationToken: e.target.value }))}
                    placeholder="Paste the verification token"
                    className={inp}
                  />
                </label>
              </>
            )}

            {mode === 'reset' && (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Reset UID</span>
                    <input
                      type="text"
                      value={form.resetUid}
                      onChange={e => setForm(current => ({ ...current, resetUid: e.target.value }))}
                      className={inp}
                    />
                  </label>
                  <label className="block">
                    <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Reset token</span>
                    <input
                      type="text"
                      value={form.resetToken}
                      onChange={e => setForm(current => ({ ...current, resetToken: e.target.value }))}
                      className={inp}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>New password</span>
                  <input
                    type="password"
                    value={form.resetPassword}
                    onChange={e => setForm(current => ({ ...current, resetPassword: e.target.value }))}
                    className={inp}
                    placeholder="Create a new password"
                  />
                </label>
                <label className="block">
                  <span className={`mb-2 block text-xs font-medium uppercase tracking-[0.2em] ${shell.subdued}`}>Confirm new password</span>
                  <input
                    type="password"
                    value={form.resetConfirmPassword}
                    onChange={e => setForm(current => ({ ...current, resetConfirmPassword: e.target.value }))}
                    className={inp}
                    placeholder="Repeat the new password"
                  />
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full ${
                        index < resetPasswordScore
                          ? 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                          : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={loading}
              className="mt-2 !rounded-2xl !bg-gradient-to-r !from-cyan-500 !to-indigo-600 !shadow-lg !shadow-cyan-500/25"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Processing request...
                </span>
              ) : (
                {
                  login: 'Sign in securely',
                  signup: 'Create verified account',
                  forgot: 'Send reset instructions',
                  verify: 'Verify email address',
                  reset: 'Reset password now',
                }[mode]
              )}
            </Button>
          </form>

          <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 text-sm ${shell.muted}`}>
            {mode === 'verify' ? (
              <button type="button" onClick={resendVerification} className="font-medium text-cyan-400 hover:text-cyan-300">
                Resend verification token
              </button>
            ) : mode === 'forgot' || mode === 'reset' ? (
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setError('');
                }}
                className="font-medium text-cyan-400 hover:text-cyan-300"
              >
                Back to sign in
              </button>
            ) : (
              <span>Protected screens stay locked until authentication succeeds.</span>
            )}

            {(mode === 'login' || mode === 'signup') && (
              <button
                type="button"
                onClick={() => {
                  setMode(mode === 'login' ? 'signup' : 'login');
                  setError('');
                }}
                className="font-medium text-cyan-400 hover:text-cyan-300"
              >
                {mode === 'login' ? 'Need an account?' : 'Already have an account?'}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
