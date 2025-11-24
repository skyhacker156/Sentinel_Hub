# SENTINEL PRESSURE BAROMETER
## React/TypeScript Implementation Guide

**Status:** Prototype Ready for Development  
**Estimated Build Time:** 6-8 weeks (full MVP to production)  
**Current Phase:** Core Components Complete, Mock Data Integration  

---

## ARCHITECTURE OVERVIEW

### File Structure

```
sentinel-barometer/
├── src/
│   ├── components/
│   │   ├── PressureGauge.tsx          # Φ_norm circular gauge
│   │   ├── VelocitySpeedometer.tsx    # V(t) semicircle gauge
│   │   ├── ClarityIndicator.tsx       # η, CAI, clarity state
│   │   ├── BarometerPanel.tsx         # Integrated single-asset barometer
│   │   └── MultiAssetGrid.tsx         # (TODO) 6-12 asset grid
│   ├── hooks/
│   │   ├── useBarometerStore.ts       # Zustand state management
│   │   └── useDataStream.ts           # (TODO) Real data integration
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces
│   ├── utils/
│   │   ├── mockData.ts                # Mock data generation
│   │   └── dataTransforms.ts          # (TODO) Data normalization
│   ├── styles/
│   │   └── globals.css                # (TODO) Global styles
│   └── App.tsx                        # Main app component
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## COMPONENT HIERARCHY

```
App
├── Control Panel (Start/Stop, Speed)
├── BarometerPanel (BTC/USD)
│   ├── PressureGauge (Φ_norm)
│   ├── VelocitySpeedometer (V(t))
│   ├── ClarityIndicator (η, CAI, clarity)
│   ├── Shadow Momentum display
│   └── Entry/Exit buttons
└── Action Log
```

---

## DATA FLOW

### 1. Backend → Frontend

Your S³ backend returns this JSON every 5 seconds (or on-demand):

```json
{
  "phi_norm": 0.45,
  "eta": 0.52,
  "cai": 0.87,
  "v": 0.12,
  "sm": 0.38,
  "clarity_state": true,
  "entry_valid": true,
  "exit_signal": false,
  "timestamp": 1700761200000,
  "open": 45010.50,
  "high": 45234.75,
  "low": 44891.25,
  "close": 45123.40,
  "volume": 1234567
}
```

### 2. Frontend Processing

```
Backend JSON
    ↓
useBarometerStore.updatePressure()
    ↓
Store calculates:
  - clarity_duration_bars
  - pressure_trend
  - exit_probability
    ↓
Components read from store
    ↓
Render updated UI
```

### 3. User Interaction

```
User clicks ENTRY/EXIT button
    ↓
Handler function (onEntry, onExit)
    ↓
Log action with timestamp
    ↓
Could trigger trading system (future)
```

---

## IMPLEMENTATION PHASES

### Phase 1: Core Components (Weeks 1-2)

**Status:** ✅ COMPLETE

- [x] PressureGauge.tsx
- [x] VelocitySpeedometer.tsx
- [x] ClarityIndicator.tsx
- [x] BarometerPanel.tsx
- [x] State management (Zustand)
- [x] Types and interfaces

### Phase 2: Data Integration (Weeks 3-4)

**Status:** 🔄 IN PROGRESS

- [ ] Replace mock data with real backend API
- [ ] Create `useDataStream` hook for WebSocket connection
- [ ] Add error handling and reconnection logic
- [ ] Add data normalization and validation
- [ ] Historical data retrieval for backtesting

**Implementation:** 

```typescript
// hooks/useDataStream.ts
export const useDataStream = (asset_symbol: string, backend_url: string) => {
  const updatePressure = useBarometerStore((state) => state.updatePressure);

  useEffect(() => {
    const ws = new WebSocket(`${backend_url}/pressure/${asset_symbol}`);
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data) as PressureState;
      updatePressure(data);
    };

    return () => ws.close();
  }, [asset_symbol, backend_url, updatePressure]);
};
```

### Phase 3: Multi-Asset Dashboard (Weeks 5-6)

**Status:** ⏳ PENDING

- [ ] MultiAssetGrid component (6-12 panels)
- [ ] Panel resizing by coherence strength
- [ ] Asset sorting by V(t) velocity
- [ ] Correlation heatmap
- [ ] Asset switching UI

### Phase 4: Production Polish (Weeks 7-8)

**Status:** ⏳ PENDING

- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Theme system (dark/light mode)
- [ ] Performance optimization
- [ ] Error boundaries and error handling
- [ ] Unit tests (Jest + React Testing Library)
- [ ] E2E tests (Cypress)
- [ ] Documentation

---

## HOW TO RUN LOCALLY

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup

```bash
# Clone repository
git clone https://github.com/sentinel-labs/sentinel-barometer.git
cd sentinel-barometer

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

### Start Streaming

1. Click "START STREAM" button
2. Choose update frequency (5 seconds recommended)
3. Watch the barometer update in real-time
4. Click "ENTRY" when entry_valid = true
5. Click "EXIT" when exit_signal = true
6. View actions in the log

---

## INTEGRATING REAL DATA

When ready to connect to your S³ backend:

### Step 1: Create API client

```typescript
// utils/api.ts
export const getPressureState = async (symbol: string): Promise<PressureState> => {
  const response = await fetch(`/api/pressure/${symbol}`);
  return response.json();
};

export const subscribeToStream = (
  symbol: string,
  callback: (state: PressureState) => void
) => {
  const ws = new WebSocket(`ws://localhost:8000/stream/${symbol}`);
  ws.onmessage = (event) => callback(JSON.parse(event.data));
  return () => ws.close();
};
```

### Step 2: Replace mock data hook

```typescript
// In App.tsx
const handleEntry = useCallback(async () => {
  if (current) {
    // Call your trading API
    await executeEntry({
      symbol: 'BTC/USD',
      price: current.close,
      quantity: 1,
    });
  }
}, [current]);
```

### Step 3: Add real assets

```typescript
// Add multiple assets
const [assets] = useState(['BTC/USD', 'ETH/USD', 'SOL/USD']);
const multiAsset = useMultiAssetStore();

useEffect(() => {
  assets.forEach((asset) => {
    multiAsset.addAsset(asset);
    subscribeToStream(asset, (state) => {
      multiAsset.updateAsset(asset, state);
    });
  });
}, [assets]);
```

---

## TESTING

### Unit Tests

```bash
npm run test
```

Example test:

```typescript
// components/__tests__/PressureGauge.test.tsx
import { render, screen } from '@testing-library/react';
import { PressureGauge } from '../PressureGauge';

describe('PressureGauge', () => {
  it('renders green when pressure is high', () => {
    render(<PressureGauge phi_norm={2.0} />);
    const gauge = screen.getByRole('img');
    expect(gauge).toHaveStyle('color: rgb(68, 255, 68)');
  });

  it('renders red when pressure is low', () => {
    render(<PressureGauge phi_norm={-2.0} />);
    const gauge = screen.getByRole('img');
    expect(gauge).toHaveStyle('color: rgb(255, 68, 68)');
  });
});
```

### Manual Testing Checklist

- [ ] Pressure gauge updates correctly with phi_norm
- [ ] Velocity speedometer needle moves
- [ ] Clarity indicator shows correct states
- [ ] Entry button enables when entry_valid = true
- [ ] Exit button enables when exit_signal = true
- [ ] Ghost bar reflects shadow momentum direction
- [ ] Action log records all trades
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors

---

## PERFORMANCE CONSIDERATIONS

### Current

- Single asset: ~60fps smooth rendering
- Mock data stream: 5-20 updates/second

### Scaling to Multi-Asset

- 6 assets: ~50fps (acceptable)
- 12 assets: ~30fps (acceptable, may need optimization)
- 50+ assets: Requires virtualization (render only visible panels)

### Optimization Strategies

1. **Use React.memo** for components
2. **Virtualize grid** for 50+ assets (react-window)
3. **Debounce store updates** if needed
4. **Move animations to CSS** when possible

---

## SECURITY & CLASSIFICATION

**This barometer is classified: INTERNAL — Founder & Systems Leads Only**

✅ **Safe to expose:**
- Component rendering logic
- UI/UX design
- Data structures

❌ **Never expose:**
- How Φ is calculated
- Threshold values
- Signal definitions
- Your secret sauce

**Your backend** stays locked. Frontend only renders what backend sends.

---

## SUPPORT & TROUBLESHOOTING

### Common Issues

**Q: Data not updating?**  
A: Check that stream is running (green button) and check browser console for errors.

**Q: Colors look wrong?**  
A: Verify color values in component files match barometer spec (v1.1).

**Q: Exit button not appearing?**  
A: Exit appears when V(t) ≤ 0. Check that your backend is sending correct V values.

**Q: Performance is slow?**  
A: Check number of assets. If 50+, enable panel virtualization.

---

## NEXT STEPS

1. **Week 1:** Integrate real data connection (replace mock)
2. **Week 2:** Add multi-asset grid (6 assets)
3. **Week 3:** Deploy to staging environment
4. **Week 4:** Beta test with 10-20 users
5. **Week 5:** Gather feedback and iterate
6. **Week 6:** Production launch

---

**Questions?** Contact Sentinel Labs engineering team.  
**Classification:** INTERNAL
