// pages/founder/index.js
export default function FounderDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Founder War Room</h1>
      
      <div className="space-y-6 max-w-2xl">
        <p className="text-xl text-gray-400">
          Authentication gate passed (stub)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <a href="/founder/hud" className="block p-8 border border-gray-800 rounded hover:border-gray-600 transition">
            <h2 className="text-2xl font-semibold">HUD →</h2>
            <p className="text-gray-500 mt-2">Heads-Up Display (placeholder)</p>
          </a>
          
          <a href="/founder/workspaces" className="block p-8 border border-gray-800 rounded hover:border-gray-600 transition">
            <h2 className="text-2xl font-semibold">Workspaces →</h2>
            <p className="text-gray-500 mt-2">Notes, journal, command center</p>
          </a>
        </div>
        
        <div className="mt-16 text-center text-gray-600">
          <p>Rough Framing Phase – No live data, no sealed logic</p>
          <p className="mt-4">
            <a href="/" className="text-blue-400 underline">← Back to public site</a>
          </p>
        </div>
      </div>
    </div>
  );
}
