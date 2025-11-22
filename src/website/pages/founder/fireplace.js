// pages/founder/fireplace.js
import ProtectedRoute from '../../components/ProtectedRoute';

export default function Fireplace() {
  return (
    <ProtectedRoute>
      <div className="fixed inset-0 overflow-hidden">
        {/* Ultra-minimal back button */}
        <a
          href="/founder"
          className="fixed top-8 left-8 z-50 text-white/70 hover:text-white text-sm underline"
        >
          ← War Room
        </a>

        {/* Full-screen fireplace – pure HTML5 video + subtle overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fireplace-with-burning-wood-1090-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gentle dark overlay so text remains readable */}
        <div className="fixed inset-0 bg-black/40" />

        {/* Centered welcome */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-90">
              Sentinel War Room
            </h1>
            <p className="text-lg md:text-xl opacity-70">
              The fire is lit. You are home.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
