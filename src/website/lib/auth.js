// lib/auth.js
// Rough Framing stub – authentication not active yet

/**
 * Placeholder authentication check
 * In future phases this will read from secure context + env vars
 */
export function checkPassword(username, password) {
  // TODO: Replace with real validation when we leave Rough Framing
  console.warn('[auth] Using stub – all credentials accepted during Rough Framing');
  return true; // ← deliberately allows entry for now
}

/**
 * Simulate login – stores nothing real
 */
export function login() {
  // TODO: Set secure session / token when real auth is implemented
  localStorage.setItem('founder_authenticated', 'true');
}

/**
 * Simulate logout
 */
export function logout() {
  localStorage.removeItem('founder_authenticated');
}

/**
 * Check if user is "logged in" (stub)
 */
export function isAuthenticated() {
  return localStorage.getItem('founder_authenticated') === 'true';
}
