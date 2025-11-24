// pages/founder/index.jsx
// The War Room — A log cabin workspace for the founder
// Everything builds around the fireplace and worktable

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function WarRoom() {
  const [time, setTime] = useState(new Date());

  // Update clock every minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <>
      <Head>
        <title>War Room</title>
      </Head>

      <div style={styles.cabin}>
        {/* Snow falling outside the window */}
        <div style={styles.windowContainer}>
          <div style={styles.window}>
            <div style={styles.snowScene}>
              <div style={styles.snowfall}></div>
              <div style={styles.trees}></div>
            </div>
            <div style={styles.windowFrame}></div>
          </div>
          <div style={styles.clock}>{formatTime(time)}</div>
        </div>

        {/* The Fireplace — anchor point */}
        <div style={styles.fireplaceArea}>
          <div style={styles.fireplace}>
            <div style={styles.mantle}></div>
            <div style={styles.firebox}>
              <div style={styles.fire}>
                <div style={styles.flame1}></div>
                <div style={styles.flame2}></div>
                <div style={styles.flame3}></div>
              </div>
              <div style={styles.logs}>
                <div style={styles.log1}></div>
                <div style={styles.log2}></div>
              </div>
              <div style={styles.embers}></div>
            </div>
            <div style={styles.hearth}></div>
          </div>
        </div>

        {/* The Worktable — where things get built */}
        <div style={styles.worktableArea}>
          <div style={styles.worktable}>
            <div style={styles.tableTop}>
              {/* Items on the table — each can become interactive later */}
              <div style={styles.tableItem} data-item="notebook">
                <span style={styles.itemIcon}>📓</span>
                <span style={styles.itemLabel}>Notes</span>
              </div>
              <div style={styles.tableItem} data-item="blueprints">
                <span style={styles.itemIcon}>📐</span>
                <span style={styles.itemLabel}>Plans</span>
              </div>
              <div style={styles.tableItem} data-item="tools">
                <span style={styles.itemIcon}>🔧</span>
                <span style={styles.itemLabel}>Tools</span>
              </div>
              <div style={styles.tableItem} data-item="lamp">
                <span style={styles.itemIcon}>💡</span>
                <span style={styles.itemLabel}>Lamp</span>
              </div>
              <div style={styles.tableItem} data-item="coffee">
                <span style={styles.itemIcon}>☕</span>
                <span style={styles.itemLabel}>Coffee</span>
              </div>
              <div style={styles.tableItem} data-item="files">
                <span style={styles.itemIcon}>📁</span>
                <span style={styles.itemLabel}>Files</span>
              </div>
            </div>
            <div style={styles.tableLegs}></div>
          </div>
        </div>

        {/* Cabin ambiance elements */}
        <div style={styles.cabinWall}></div>
        <div style={styles.floor}></div>

        {/* Ambient glow from fire */}
        <div style={styles.fireGlow}></div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          height: 100%;
          overflow: hidden;
          background: #1a0f0a;
        }

        /* Fireplace animation */
        @keyframes flicker {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 1; }
          25% { transform: scaleY(1.1) scaleX(0.95); opacity: 0.9; }
          50% { transform: scaleY(0.95) scaleX(1.05); opacity: 1; }
          75% { transform: scaleY(1.05) scaleX(0.98); opacity: 0.85; }
        }

        @keyframes ember {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes snowfall {
          0% { background-position: 0 0, 0 0, 0 0; }
          100% { background-position: 500px 1000px, 400px 800px, 300px 600px; }
        }

        @keyframes fireGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}

// Styles object — kept in file for now, can extract later
const styles = {
  cabin: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(180deg, #2d1f1a 0%, #1a0f0a 100%)',
    overflow: 'hidden',
    fontFamily: "'Georgia', serif",
  },

  // Log cabin wall texture
  cabinWall: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
    background: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 40px,
        rgba(0,0,0,0.3) 40px,
        rgba(0,0,0,0.3) 42px
      ),
      linear-gradient(90deg, #3d2817 0%, #4a3020 50%, #3d2817 100%)
    `,
    opacity: 0.7,
    pointerEvents: 'none',
  },

  floor: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '25%',
    background: 'linear-gradient(180deg, #2a1a10 0%, #1a0f08 100%)',
    borderTop: '3px solid #3d2817',
  },

  // Window with snow
  windowContainer: {
    position: 'absolute',
    top: '40px',
    right: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
  },

  window: {
    width: '180px',
    height: '220px',
    background: '#0a1628',
    borderRadius: '4px',
    border: '12px solid #5c3d2e',
    boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.5)',
    position: 'relative',
    overflow: 'hidden',
  },

  snowScene: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, #1a2a4a 0%, #2a3a5a 50%, #f0f4f8 85%, #fff 100%)',
  },

  snowfall: {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(2px 2px at 20px 30px, white, transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
      radial-gradient(1px 1px at 90px 40px, white, transparent),
      radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.9), transparent),
      radial-gradient(1px 1px at 160px 120px, white, transparent)
    `,
    backgroundSize: '200px 200px',
    animation: 'snowfall 8s linear infinite',
    opacity: 0.8,
  },

  trees: {
    position: 'absolute',
    bottom: '15%',
    left: '10%',
    width: '80%',
    height: '40%',
    background: `
      conic-gradient(from 210deg at 20% 100%, transparent 30deg, #1a3d2a 30deg 150deg, transparent 150deg),
      conic-gradient(from 210deg at 50% 100%, transparent 30deg, #0f2a1f 30deg 150deg, transparent 150deg),
      conic-gradient(from 210deg at 80% 100%, transparent 30deg, #1a3d2a 30deg 150deg, transparent 150deg)
    `,
    opacity: 0.6,
  },

  windowFrame: {
    position: 'absolute',
    inset: 0,
    border: '2px solid #3d2817',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
    pointerEvents: 'none',
    background: `
      linear-gradient(90deg, transparent 49%, #5c3d2e 49% 51%, transparent 51%),
      linear-gradient(0deg, transparent 49%, #5c3d2e 49% 51%, transparent 51%)
    `,
  },

  clock: {
    marginTop: '12px',
    color: '#a89080',
    fontSize: '14px',
    fontFamily: "'Courier New', monospace",
    letterSpacing: '2px',
  },

  // Fireplace
  fireplaceArea: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
  },

  fireplace: {
    width: '280px',
    height: '300px',
    position: 'relative',
  },

  mantle: {
    position: 'absolute',
    top: 0,
    left: '-20px',
    right: '-20px',
    height: '25px',
    background: 'linear-gradient(180deg, #5c3d2e 0%, #4a3020 100%)',
    borderRadius: '4px 4px 0 0',
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
  },

  firebox: {
    position: 'absolute',
    top: '25px',
    left: '20px',
    right: '20px',
    bottom: '20px',
    background: '#0a0505',
    borderRadius: '8px 8px 0 0',
    border: '15px solid #6b4430',
    borderBottom: 'none',
    overflow: 'hidden',
  },

  fire: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '100px',
  },

  flame1: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '80px',
    background: 'linear-gradient(0deg, #ff6b35 0%, #ff8c42 30%, #ffd700 70%, #fff 100%)',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    animation: 'flicker 0.5s ease-in-out infinite',
    filter: 'blur(2px)',
  },

  flame2: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    width: '40px',
    height: '60px',
    background: 'linear-gradient(0deg, #ff4500 0%, #ff6b35 50%, #ffd700 100%)',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    animation: 'flicker 0.7s ease-in-out infinite 0.1s',
    filter: 'blur(1px)',
  },

  flame3: {
    position: 'absolute',
    bottom: 0,
    right: '20%',
    width: '35px',
    height: '55px',
    background: 'linear-gradient(0deg, #ff4500 0%, #ff8c42 50%, #ffcc00 100%)',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    animation: 'flicker 0.6s ease-in-out infinite 0.2s',
    filter: 'blur(1px)',
  },

  logs: {
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '140px',
    height: '30px',
  },

  log1: {
    position: 'absolute',
    bottom: '5px',
    left: '10px',
    width: '80px',
    height: '18px',
    background: 'linear-gradient(90deg, #3d2817 0%, #2a1a10 50%, #3d2817 100%)',
    borderRadius: '9px',
    transform: 'rotate(-8deg)',
  },

  log2: {
    position: 'absolute',
    bottom: '8px',
    right: '10px',
    width: '70px',
    height: '16px',
    background: 'linear-gradient(90deg, #4a3020 0%, #2a1a10 50%, #4a3020 100%)',
    borderRadius: '8px',
    transform: 'rotate(10deg)',
  },

  embers: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '15px',
    background: 'radial-gradient(ellipse at center, #ff4500 0%, #cc3300 40%, transparent 70%)',
    animation: 'ember 2s ease-in-out infinite',
    filter: 'blur(2px)',
  },

  hearth: {
    position: 'absolute',
    bottom: 0,
    left: '-10px',
    right: '-10px',
    height: '20px',
    background: 'linear-gradient(180deg, #5c4033 0%, #3d2817 100%)',
    borderRadius: '0 0 4px 4px',
  },

  // Worktable
  worktableArea: {
    position: 'absolute',
    bottom: '8%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 15,
  },

  worktable: {
    width: '700px',
    position: 'relative',
  },

  tableTop: {
    background: 'linear-gradient(180deg, #5c4033 0%, #4a3528 50%, #3d2817 100%)',
    height: '80px',
    borderRadius: '8px 8px 0 0',
    border: '3px solid #6b4f3a',
    borderBottom: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 30px',
    boxShadow: '0 -4px 20px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,200,150,0.1)',
  },

  tableItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    background: 'transparent',
    border: '1px solid transparent',
  },

  itemIcon: {
    fontSize: '28px',
    marginBottom: '4px',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
  },

  itemLabel: {
    fontSize: '11px',
    color: '#a89080',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: "'Courier New', monospace",
  },

  tableLegs: {
    height: '40px',
    background: `
      linear-gradient(90deg, 
        transparent 10%, 
        #3d2817 10% 15%, 
        transparent 15% 85%, 
        #3d2817 85% 90%, 
        transparent 90%
      )
    `,
  },

  // Ambient fire glow
  fireGlow: {
    position: 'absolute',
    top: '20%',
    left: '30%',
    right: '30%',
    bottom: '40%',
    background: 'radial-gradient(ellipse at center, rgba(255,100,50,0.15) 0%, transparent 70%)',
    pointerEvents: 'none',
    animation: 'fireGlow 3s ease-in-out infinite',
  },
};
