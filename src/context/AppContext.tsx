import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import { StreamId } from '../data/careerData';
import { apiRequest, ApiError } from '../lib/api';
import {
  clearStoredAccessToken,
  getAccessToken,
  getRememberMePreference,
  loadStoredAccessToken,
  saveAccessToken,
} from '../lib/auth';

export type AppScreen =
  | 'start'
  | 'login'
  | 'home'
  | 'profile'
  | 'test_rules'
  | 'interest_test'
  | 'interest_results'
  | 'aptitude_test'
  | 'final_result'
  | 'career_dashboard'
  | 'user_dashboard'
  | 'career_role'
  | 'academic_courses'
  | 'academic_streams'
  | 'science_streams'
  | 'commerce_streams'
  | 'diploma_polytechnic'
  | 'engineering_diplomas'
  | 'mechanical_manufacturing'
  | 'civil_infrastructure'
  | 'electrical_power_systems'
  | 'electronics_communication'
  | 'computer_it_engineering'
  | 'automobile_ev_technology'
  | 'robotics_automation'
  | 'environmental_energy_engineering'
  | 'industrial_production_technology'
  | 'computer_it_diplomas'
  | 'arts_humanities_focus'
  | 'civil_services_focus'
  | 'law_focus'
  | 'psychology_focus'
  | 'media_focus'
  | 'arts_focus'
  | 'geography_focus'
  | 'business_focus'
  | 'banking_economics_focus'
  | 'finance_accounting_focus'
  | 'finance_it_focus'
  | 'medical_stream_combinations'
  | 'engineering_stream_combinations'
  | 'computer_it_stream_combinations'
  | 'pure_science_research'
  | 'software_app_development'
  | 'networking_cloud_cybersecurity'
  | 'ai_data_science_iot'
  | 'game_development_multimedia'
  | 'ui_ux_web_technologies'
  | 'medical_paramedical_diplomas'
  | 'nursing-patient-care'
  | 'pharmacy'
  | 'lab-diagnostic-technology'
  | 'imaging-operation-theatre'
  | 'emergency-cardiac-dialysis'
  | 'dental-eye-rehabilitation'
  | 'hospital-administration-public-health'
  | 'general-nursing'
  | 'critical-care-nursing'
  | 'pediatric-nursing'
  | 'geriatric-nursing'
  | 'pharmacy-practice'
  | 'pharmaceutical-chemistry'
  | 'hospital-pharmacy'
  | 'retail-pharmacy'
  | 'medical-laboratory-technology'
  | 'pathology-laboratory'
  | 'diagnostic-imaging'
  | 'clinical-laboratory'
  | 'medical-imaging-technology'
  | 'operation-theatre-technology'
  | 'radiology-imaging'
  | 'surgical-technology'
  | 'emergency-medical-technology'
  | 'cardiac-care-technology'
  | 'dialysis-technology'
  | 'critical-care-emergency'
  | 'dental-technology'
  | 'optometry-technology'
  | 'rehabilitation-therapy'
  | 'prosthetics-orthotics'
  | 'hospital-administration'
  | 'public-health-management'
  | 'healthcare-management'
  | 'medical-record-management'
  | 'design-creative-diplomas'
  | 'animation-multimedia'
  | 'ui-ux-web-design'
  | 'fashion-design'
  | 'interior-design'
  | 'photography-video-production'
  | 'fine-arts-illustration'
  | 'business-management'
  | 'accounting-finance'
  | 'banking-insurance'
  | 'digital-marketing-ecommerce'
  | 'retail-sales-management'
  | 'entrepreneurship-startup-management'
  | 'logistics-supply-chain'
  | 'agriculture_environmental_diplomas'
  | 'agriculture_environmental_comparison'
  | 'hospitality_tourism_diplomas'
  | 'hotel_management_diploma'
  | 'tourism_management_diploma'
  | 'culinary_arts_diploma'
  | 'event_management_diploma'
  | 'airline_management_diploma'
  | 'spa_wellness_diploma'
  | 'horticulture_diploma'
  | 'dairy_animal_husbandry_diploma'
  | 'fisheries_aquaculture_diploma'
  | 'environmental_science_diploma'
  | 'forestry_wildlife_diploma'
  | 'agricultural_business_diploma'
  | 'commerce-business'
  | 'vocational_iti'
  | 'vocational_career_path'
  | 'government_exams'
  | 'skill_based_courses'
  | 'about_us'
  | 'features'
  | 'get_premium'
  | 'dynamic_career_page';

export interface UserProfile {
  id?: number;
  username?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  role?: string;
  profileStatus?: string;
  isEmailVerified?: boolean;
  mobileNumber?: string;
  lastLoginAt?: string | null;
  country?: string;
  state?: string;
  city?: string;
  hobbies?: string;
  schoolName?: string;
  stateBoard?: string;
  tenthMarks?: string;
  streamInterest?: string[];
  interests?: string[];
  preferredStream?: string;
  favoriteSubjects?: string[];
  careerGoal?: string;
  address?: string;
}

export interface StoredAnswer {
  [key: string]: any;
}

export interface StreamScore {
  streamId: StreamId;
  interestScore: number;
  aptitudeScore: number;
  totalScore: number;
}

interface AppState {
  screen: AppScreen;
  user: UserProfile | null;
  authReady: boolean;
  interestScores: Partial<Record<StreamId, number>>;
  interestAnswers: StoredAnswer[];
  top3Streams: StreamId[];
  aptitudeScores: Partial<Record<StreamId, number>>;
  aptitudeAnswers: StoredAnswer[];
  recommendedStream: StreamId | null;
  selectedStream: StreamId | null;
  intendedScreen: AppScreen | null;
  selectedVocationalStream: string | null;
  previousScreen: AppScreen | null;
  navigationHistory: AppScreen[];
  isPremiumModalOpen: boolean;
  premiumModalSource: string | null;
  toast: { message: string; type: 'success' | 'error' | 'info' | 'warning' } | null;
  selectedCareerId: string | null;
}

interface AppContextType extends AppState {
  setScreen: (s: AppScreen) => void;
  goBack: (fallbackScreen?: AppScreen) => void;
  setUser: (u: UserProfile | null) => void;
  setInterestScores: (scores: Partial<Record<StreamId, number>>) => void;
  setInterestAnswers: (answers: StoredAnswer[]) => void;
  setTop3Streams: (t: StreamId[]) => void;
  setAptitudeScores: (scores: Partial<Record<StreamId, number>>) => void;
  setAptitudeAnswers: (answers: StoredAnswer[]) => void;
  setRecommendedStream: (id: StreamId) => void;
  setSelectedStream: (id: StreamId) => void;
  setSelectedVocationalStream: (id: string) => void;
  setPreviousScreen: (screen: AppScreen | null) => void;
  openPremiumModal: (source?: string) => void;
  closePremiumModal: () => void;
  login: (identifier: string, password: string, rememberMe: boolean) => Promise<UserProfile>;
  logout: () => Promise<void>;
  authenticatedRequest: <T>(path: string, init?: RequestInit) => Promise<T>;
  consumeIntendedScreen: () => AppScreen;
  resetAll: () => void;
  isProfileComplete: () => boolean;
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  hideToast: () => void;
  setSelectedCareerId: (id: string | null) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const defaultState: AppState = {
  screen: 'start',
  user: null,
  authReady: false,
  interestScores: {},
  interestAnswers: [],
  top3Streams: [],
  aptitudeScores: {},
  aptitudeAnswers: [],
  recommendedStream: null,
  selectedStream: null,
  intendedScreen: null,
  selectedVocationalStream: null,
  previousScreen: null,
  navigationHistory: ['start'],
  isPremiumModalOpen: false,
  premiumModalSource: null,
  toast: null,
  selectedCareerId: null,
};

const publicScreens = new Set<AppScreen>(['start', 'login', 'government_exams']);

function isProtectedScreen(screen: AppScreen) {
  return !publicScreens.has(screen);
}

function mapBackendUser(user: any, previousUser: UserProfile | null = null): UserProfile {
  return {
    id: user.id,
    username: user.username,
    name: user.name || [user.first_name, user.last_name].filter(Boolean).join(' ') || user.username,
    email: user.email,
    phoneNumber: user.profile?.mobile_number || previousUser?.phoneNumber || '',
    role: user.profile?.role || 'student',
    profileStatus: user.profile?.profile_status || 'active',
    isEmailVerified: Boolean(user.profile?.is_email_verified),
    mobileNumber: user.profile?.mobile_number || '',
    lastLoginAt: user.profile?.last_login_at || user.last_login || null,
    country: user.profile?.country || previousUser?.country || '',
    state: user.profile?.state || previousUser?.state || '',
    city: user.profile?.city || previousUser?.city || '',
    hobbies: user.profile?.hobbies || previousUser?.hobbies || '',
    schoolName: user.profile?.school_name || previousUser?.schoolName || '',
    stateBoard: user.profile?.state_board || previousUser?.stateBoard || '',
    tenthMarks: user.profile?.tenth_marks || previousUser?.tenthMarks || '',
    streamInterest: user.profile?.stream_interest || previousUser?.streamInterest || [],
    interests: previousUser?.interests || [],
    preferredStream: previousUser?.preferredStream || '',
    favoriteSubjects: user.profile?.favorite_subjects || previousUser?.favoriteSubjects || [],
    careerGoal: user.profile?.career_goal || previousUser?.careerGoal || '',
    address: user.profile?.address || previousUser?.address || '',
  };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState);
  const isNavigatingRef = useRef(false);
  const hasBootstrappedHistoryRef = useRef(false);

  const update = (partial: Partial<AppState>) =>
    setState(prev => ({ ...prev, ...partial }));

  const commitScreenChange = (
    nextScreen: AppScreen,
    options: {
      replace?: boolean;
      intendedScreen?: AppScreen | null;
      preserveHistory?: boolean;
    } = {},
  ) => {
    setState(prev => {
      if (prev.screen === nextScreen && !options.replace && options.intendedScreen === undefined) {
        return prev;
      }

      const nextHistory = options.preserveHistory
        ? prev.navigationHistory
        : options.replace
          ? [...prev.navigationHistory.slice(0, -1), nextScreen]
          : [...prev.navigationHistory, nextScreen];

      return {
        ...prev,
        screen: nextScreen,
        previousScreen: prev.screen === nextScreen ? prev.previousScreen : prev.screen,
        intendedScreen: options.intendedScreen === undefined ? prev.intendedScreen : options.intendedScreen,
        navigationHistory: nextHistory.length > 0 ? nextHistory : [nextScreen],
      };
    });
  };

  const clearAuthState = () => {
    clearStoredAccessToken();
    commitScreenChange(state.screen === 'start' ? 'start' : 'login', {
      replace: true,
      intendedScreen: null,
    });
    setState(prev => ({
      ...prev,
      user: null,
      authReady: true,
      isPremiumModalOpen: false,
      premiumModalSource: null,
    }));
  };

  const refreshSession = async () => {
    try {
      const payload = await apiRequest<{ tokens: { access: string } }>('/auth/refresh/', {
        method: 'POST',
        credentials: 'include',
      });
      saveAccessToken(payload.tokens.access, getRememberMePreference());
      return payload.tokens.access;
    } catch (error) {
      // Refresh failed - likely no valid refresh token or session expired
      clearStoredAccessToken();
      return '';
    }
  };

  const authenticatedRequest = async <T,>(path: string, init: RequestInit = {}) => {
    try {
      return await apiRequest<T>(path, init, getAccessToken());
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        const nextToken = await refreshSession();
        if (nextToken) {
          return apiRequest<T>(path, init, nextToken);
        }
      }
      throw error;
    }
  };

  const login = async (identifier: string, password: string, rememberMe: boolean) => {
    const payload = await apiRequest<{ user: any; tokens: { access: string } }>('/auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        identifier,
        password,
        remember_me: rememberMe,
      }),
    });

    saveAccessToken(payload.tokens.access, rememberMe);

    const mappedUser = mapBackendUser(payload.user);
    const targetScreen = state.intendedScreen || 'home';
    setState(prev => ({
      ...prev,
      user: mappedUser,
      authReady: true,
    }));
    commitScreenChange(targetScreen, { intendedScreen: null });
    return mappedUser;
  };

  const logout = async () => {
    try {
      await authenticatedRequest<{ message: string }>('/auth/logout/', {
        method: 'POST',
        body: JSON.stringify({}),
      });
    } catch {
      // Allow local logout even if the server call fails.
    } finally {
      clearAuthState();
      update({ toast: { message: 'Logged out successfully.', type: 'success' } });
    }
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    update({ toast: { message, type } });
  };

  const hideToast = () => {
    update({ toast: null });
  };

  const consumeIntendedScreen = () => {
    const next = state.intendedScreen || 'home';
    update({ intendedScreen: null });
    return next;
  };

  useEffect(() => {
    let active = true;

    const bootstrapAuth = async () => {
      const screenFromHash = window.location.hash.replace(/^#/, '') as AppScreen;
      const initialScreen = screenFromHash || defaultState.screen;

      const { token } = loadStoredAccessToken();

      try {
        if (!token) {
          const refreshed = await refreshSession();
          if (!refreshed) {
            if (active) {
              setState(prev => ({
                ...prev,
                authReady: true,
                screen: initialScreen,
                previousScreen: null,
                navigationHistory: [initialScreen],
              }));
            }
            return;
          }
        }

        const payload = await apiRequest<{ user: any }>('/auth/me/', {}, getAccessToken());
        if (!active) return;

        setState(prev => ({
          ...prev,
          user: mapBackendUser(payload.user, prev.user),
          authReady: true,
          screen: initialScreen === 'start' || initialScreen === 'login' ? 'home' : initialScreen,
          previousScreen: null,
          navigationHistory: [initialScreen === 'start' || initialScreen === 'login' ? 'home' : initialScreen],
        }));
      } catch {
        if (!active) return;
        clearStoredAccessToken();
        setState(prev => ({
          ...prev,
          user: null,
          authReady: true,
          screen: initialScreen === 'start' ? 'start' : 'login',
          previousScreen: null,
          navigationHistory: [initialScreen === 'start' ? 'start' : 'login'],
        }));
      }
    };

    bootstrapAuth();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!state.authReady) {
      return;
    }

    const url = `${window.location.pathname}${window.location.search}#${state.screen}`;
    const statePayload = { screen: state.screen };

    if (!hasBootstrappedHistoryRef.current) {
      window.history.replaceState(statePayload, '', url);
      hasBootstrappedHistoryRef.current = true;
      return;
    }

    if (isNavigatingRef.current) {
      isNavigatingRef.current = false;
      window.history.replaceState(statePayload, '', url);
      return;
    }

    window.history.pushState(statePayload, '', url);
  }, [state.authReady, state.screen]);

  useEffect(() => {
    const handlePopState = () => {
      const screenFromHash = window.location.hash.replace(/^#/, '') as AppScreen;
      const fallback = state.user ? 'home' : 'start';
      const nextScreen = screenFromHash || fallback;

      isNavigatingRef.current = true;
      setState(prev => {
        const trimmedHistory =
          prev.navigationHistory.length > 1
            ? prev.navigationHistory.slice(0, -1)
            : [nextScreen];

        return {
          ...prev,
          screen: nextScreen,
          previousScreen: trimmedHistory.at(-2) || prev.previousScreen || null,
          navigationHistory: trimmedHistory,
        };
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [state.user]);

  const isProfileComplete = () => {
    if (!state.user) return false;
    
    const requiredFields = [
      state.user.hobbies,
      state.user.schoolName,
      state.user.stateBoard,
      state.user.tenthMarks,
      state.user.streamInterest,
      state.user.favoriteSubjects,
      state.user.careerGoal,
      state.user.address,
    ];
    
    return requiredFields.every(field => 
      field !== undefined && field !== null && field !== '' && 
      (Array.isArray(field) ? field.length > 0 : true)
    );
  };

  const ctx: AppContextType = {
    ...state,
    setScreen: s => {
      if (isProtectedScreen(s) && !state.user) {
        commitScreenChange('login', { intendedScreen: s });
        return;
      }
      commitScreenChange(s);
    },
    goBack: fallbackScreen => {
      if (state.navigationHistory.length > 1) {
        isNavigatingRef.current = true;
        window.history.back();
        return;
      }

      commitScreenChange(fallbackScreen || (state.user ? 'home' : 'start'), { replace: true });
    },
    setPreviousScreen: screen => update({ previousScreen: screen }),
    setUser: u => update({ user: u }),
    setInterestScores: scores => update({ interestScores: scores }),
    setInterestAnswers: answers => update({ interestAnswers: answers }),
    setTop3Streams: t => update({ top3Streams: t }),
    setAptitudeScores: scores => update({ aptitudeScores: scores }),
    setAptitudeAnswers: answers => update({ aptitudeAnswers: answers }),
    setRecommendedStream: id => update({ recommendedStream: id }),
    setSelectedStream: id => {
      update({ selectedStream: id });
      commitScreenChange('career_dashboard');
    },
    setSelectedVocationalStream: id => update({ selectedVocationalStream: id }),
    openPremiumModal: source => update({ isPremiumModalOpen: true, premiumModalSource: source || null }),
    closePremiumModal: () => update({ isPremiumModalOpen: false, premiumModalSource: null }),
    login,
    logout,
    authenticatedRequest,
    consumeIntendedScreen,
    resetAll: () => setState(prev => ({
      ...defaultState,
      authReady: true,
      user: prev.user,
      screen: prev.user ? 'home' : 'start',
      navigationHistory: [prev.user ? 'home' : 'start'],
    })),
    isProfileComplete,
    showToast,
    hideToast,
    setSelectedCareerId: id => update({ selectedCareerId: id }),
  };

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
