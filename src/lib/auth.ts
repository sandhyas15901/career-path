const ACCESS_TOKEN_KEY = 'pathbloom_access_token';
const AUTH_PERSIST_KEY = 'pathbloom_remember_me';

let inMemoryAccessToken = '';

function getStorage(rememberMe: boolean) {
  return rememberMe ? window.localStorage : window.sessionStorage;
}

export function setAccessToken(token: string) {
  inMemoryAccessToken = token;
}

export function getAccessToken() {
  return inMemoryAccessToken;
}

export function saveAccessToken(token: string, rememberMe: boolean) {
  window.localStorage.setItem(AUTH_PERSIST_KEY, String(rememberMe));
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  getStorage(rememberMe).setItem(ACCESS_TOKEN_KEY, token);
  setAccessToken(token);
}

export function loadStoredAccessToken() {
  const rememberMe = window.localStorage.getItem(AUTH_PERSIST_KEY) === 'true';
  const token =
    window.localStorage.getItem(ACCESS_TOKEN_KEY) ||
    window.sessionStorage.getItem(ACCESS_TOKEN_KEY) ||
    '';

  setAccessToken(token);
  return { token, rememberMe };
}

export function clearStoredAccessToken() {
  inMemoryAccessToken = '';
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(AUTH_PERSIST_KEY);
}

export function getRememberMePreference() {
  return window.localStorage.getItem(AUTH_PERSIST_KEY) === 'true';
}
