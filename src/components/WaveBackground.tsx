import React from 'react';

const css = `
  @keyframes ws1 { from { transform: translateX(0) } to { transform: translateX(-50%) } }
  @keyframes ws2 { from { transform: translateX(0) } to { transform: translateX(-50%) } }
  @keyframes ws3 { from { transform: translateX(0) } to { transform: translateX(-50%) } }
`;

export default function WaveBackground() {
  return (
    <>
      <style>{css}</style>
      <div
        className="fixed inset-0"
        style={{ zIndex: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, #10151f 0%, #0d1219 40%, #090d15 70%, #070a11 100%)' }}
      >
        {/* Wave 3 — back, slowest */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', overflow: 'hidden' }}>
          <svg
            viewBox="0 0 2880 160"
            preserveAspectRatio="none"
            style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '100%', animation: 'ws3 36s linear infinite' }}
          >
            <path
              d="M0,60 C480,140 960,0 1440,60 C1920,140 2400,0 2880,60 L2880,160 L0,160 Z"
              fill="rgba(18,25,42,0.92)"
            />
          </svg>
        </div>

        {/* Wave 1 — middle */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', overflow: 'hidden' }}>
          <svg
            viewBox="0 0 2880 160"
            preserveAspectRatio="none"
            style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '100%', animation: 'ws1 24s linear infinite' }}
          >
            <path
              d="M0,80 C360,10 1080,150 1440,80 C1800,10 2520,150 2880,80 L2880,160 L0,160 Z"
              fill="rgba(26,34,55,0.85)"
            />
          </svg>
        </div>

        {/* Wave 2 — front, fastest */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%', overflow: 'hidden' }}>
          <svg
            viewBox="0 0 2880 160"
            preserveAspectRatio="none"
            style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '100%', animation: 'ws2 16s linear infinite' }}
          >
            <path
              d="M0,90 C240,20 720,160 1440,90 C1680,20 2160,160 2880,90 L2880,160 L0,160 Z"
              fill="rgba(34,46,72,0.78)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
