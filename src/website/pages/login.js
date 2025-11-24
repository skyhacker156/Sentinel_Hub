import { useState } from 'react';
import { login } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Attempt login with password
    const success = login(password);

    if (success) {
      // Clear form and redirect
      setPassword('');
      router.push('/founder');
    } else {
      setError('Invalid password');
      setPassword('');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 border border-gray-800 rounded">
        <h1 className="text-2xl font-bold mb-2 text-center">Founder Login</h1>
        <p className="text-center text-sm text-gray-500 mb-8">War Room Access</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              placeholder="Access Code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-600 focus:outline-none focus:border-gray-500"
              required
              disabled={loading}
              autoFocus
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900 bg-opacity-30 border border-red-700 rounded text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Authenticating...' : 'Enter War Room'}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-gray-600">
          Protected routes – authentication required
        </p>
      </div>
    </div>
  );
}
