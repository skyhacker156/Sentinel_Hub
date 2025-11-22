// pages/login.js
import { useState } from 'react';
import { login } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Stub always accepts during Rough Framing
    login();
    router.push('/founder');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 border border-gray-800 rounded">
        <h1 className="text-2xl font-bold mb-8 text-center">Founder Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded transition"
          >
            Enter War Room
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-500">
          Rough Framing – all credentials accepted
        </p>
      </div>
    </div>
  );
}
