// components/Navbar.js
import Link from 'next/link';
import { isAuthenticated, logout } from '../lib/auth';

export default function Navbar() {
  const authenticated = isAuthenticated();

  return (
    <nav className="border-b border-gray-800 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Sentinel Laboratories
        </Link>

        <div className="space-x-8 text-sm">
          {authenticated ? (
            <>
              <Link href="/founder" className="text-gray-300 hover:text-white">
                War Room
              </Link>
              <button
                onClick={() => {
                  logout();
                  window.location.href = '/';
                }}
                className="text-gray-400 hover:text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/login" className="text-blue-400 hover:text-blue-300">
                Founder Login →
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
