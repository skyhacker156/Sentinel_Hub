// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Sentinel Laboratories</h1>
        <p className="mt-4 text-gray-400">Public landing page – Rough Framing</p>
        <p className="mt-8">
          <a href="/login" className="text-blue-400 underline">
            Founder Login →
          </a>
        </p>
      </div>
    </div>
  );
}
