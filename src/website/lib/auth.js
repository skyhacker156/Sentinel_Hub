// lib/auth.js
// Founder authentication – password validation + session management

const FOUNDER_PASSWORD = 'Ryu';
const SESSION_KEY = 'founder_session_token';
const SESSION_TIMESTAMP_KEY = 'founder_session_timestamp';

/**
 * Validate password against founder password
 */
export function checkPassword(password) {
  if (!password) return false;
  return password === FOUNDER_PASSWORD;
}

/**
 * Create a session token and store in localStorage
 * Token format: base64(founder_${timestamp}_${random})
 */
export function login(password) {
  if (!checkPassword(password)) {
    return false;
  }

  const token = Buffer.from(`founder_${Date.now()}_${Math.random()}`).toString(
    'base64'
  );
  const timestamp = Date.now();

  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, token);
    localStorage.setItem(SESSION_TIMESTAMP_KEY, timestamp.toString());
  }

  return true;
}

/**
 * Destroy session (logout)
 */
export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_TIMESTAMP_KEY);
  }
}

/**
 * Check if valid session exists
 */
export function isAuthenticated() {
  if (typeof window === 'undefined') return false;

  const token = localStorage.getItem(SESSION_KEY);
  const timestamp = localStorage.getItem(SESSION_TIMESTAMP_KEY);

  if (!token || !timestamp) {
    return false;
  }

  return true;
}

/**
 * Get current session token (for debugging/verification)
 */
export function getSessionToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(SESSION_KEY);
}
