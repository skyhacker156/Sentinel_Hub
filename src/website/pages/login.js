// pages/login.js
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 border border-gray-800 rounded">
        <h1 className="text-2xl font-bold mb-8 text-center">Founder Login</h1>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
            disabled
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
            disabled
          />
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 rounded cursor-not-allowed opacity-50"
            disabled
          >
            Enter War Room (stub)
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-500">
          Rough Framing – authentication not active yet
        </p>
      </div>
    </div>
  );
}
