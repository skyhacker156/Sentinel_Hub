# Enclave Interface Specification

**How Repository A (Sentinel_Hub) Talks to Repository B (Sealed Engine)**

---

## Purpose

This document defines the **black-box interface** between the public enclave shell (Repository A) and the sealed S3 engine (Repository B). It specifies:

1. **What data flows in** (market data, signals)
2. **What data flows out** (trading verdicts)
3. **How the interface is called** (function signatures, error handling)
4. **What must never be exposed** (proprietary mathematics)

---

## Core Principle

The enclave shell is a **black box**. From Repository A's perspective:

- Input: Market data (OHLCV, indicators, etc.)
- Output: Trading verdict ("BUY", "SELL", "NO TRADE")
- Internal logic: **SEALED** (never exposed to Repository A)

---

## Interface Definition

### 1. EnclaveShell Class

The primary interface that Repository A code calls.
```python
class EnclaveShell:
    """
    Public interface for requesting trading verdicts from the sealed S3 engine.
    
    This class:
    - Lives in Repository A
    - Calls the compiled engine from Repository B
    - Returns verdicts without revealing internal logic
    - Handles errors gracefully
    """
    
    def __init__(self, engine_path: str = None):
        """
        Initialize the enclave shell.
        
        Args:
            engine_path (str): Path to the compiled S3 engine binary.
                               Default: looks on USB or configured storage.
        
        Raises:
            EngineLoadError: If the engine binary cannot be found or loaded.
        """
        pass
    
    def request_verdict(self, market_data: dict) -> str:
        """
        Request a trading verdict from the sealed engine.
        
        Args:
            market_data (dict): Market data for analysis.
                Required keys:
                - 'timestamp': Unix timestamp
                - 'open': Opening price
                - 'high': High price
                - 'low': Low price
                - 'close': Closing price
                - 'volume': Trade volume
                - Optional: additional indicators (RSI, MACD, etc.)
        
        Returns:
            str: One of "BUY", "SELL", "NO TRADE"
        
        Raises:
            EngineError: If the engine fails or returns invalid data.
            ValidationError: If market_data is malformed.
        
        Example:
            >>> shell = EnclaveShell(engine_path="/mnt/usb/libs3.so")
            >>> verdict = shell.request_verdict({
            ...     'timestamp': 1700000000,
            ...     'open': 150.0,
            ...     'high': 152.5,
            ...     'low': 149.0,
            ...     'close': 151.0,
            ...     'volume': 1000000
            ... })
            >>> print(verdict)
            'BUY'
        """
        pass
    
    def validate_engine_signature(self) -> bool:
        """
        Verify the engine binary's cryptographic signature.
        
        This ensures the engine hasn't been tampered with.
        
        Returns:
            bool: True if signature is valid, False otherwise.
        
        Raises:
            SignatureError: If signature verification fails.
        """
        pass
    
    def check_usb_attached(self) -> bool:
        """
        Check if the USB drive containing the engine is attached.
        
        Returns:
            bool: True if USB is detected, False otherwise.
        """
        pass
    
    def get_engine_version(self) -> str:
        """
        Get the version of the loaded S3 engine.
        
        Returns:
            str: Version string (e.g., "1.0.0")
        """
        pass
    
    def get_last_verdict(self) -> str:
        """
        Get the most recent verdict (without calling the engine again).
        
        Returns:
            str: Last verdict ("BUY", "SELL", "NO TRADE"), or None if no verdict yet.
        """
        pass
```

---

## Input Data Structure

### market_data Dictionary

Data passed to `request_verdict()` must include:
```python
market_data = {
    # Required fields
    'timestamp': int,          # Unix timestamp (e.g., 1700000000)
    'open': float,             # Opening price
    'high': float,             # High price
    'low': float,              # Low price
    'close': float,            # Closing price
    'volume': int,             # Trading volume
    
    # Optional fields (for additional context)
    'symbol': str,             # Ticker symbol (e.g., "AAPL")
    'exchange': str,           # Exchange (e.g., "NASDAQ")
    'rsi': float,              # RSI indicator (0-100)
    'macd': float,             # MACD value
    'bollinger_upper': float,  # Bollinger Band upper
    'bollinger_lower': float,  # Bollinger Band lower
    'vwap': float,             # Volume Weighted Average Price
    
    # Custom indicators (engine may use or ignore)
    'custom_indicator_1': float,
    'custom_indicator_2': float,
}
```

**Validation Rules**:
- All prices must be > 0
- Volume must be >= 0
- Timestamp must be valid Unix time
- Optional fields, if present, must be numeric

---

## Output: Trading Verdicts

The engine returns exactly one of three verdicts:

### "BUY"
- The sealed engine judges conditions favorable for buying
- Repository A: Execute a BUY order (or notify user)
- Repository A: Log the decision

### "SELL"
- The sealed engine judges conditions favorable for selling
- Repository A: Execute a SELL order (or notify user)
- Repository A: Log the decision

### "NO TRADE"
- The sealed engine judges conditions unfavorable for trading
- Repository A: Do nothing
- Repository A: Log the decision

---

## Error Handling

### EngineLoadError
Raised when the engine binary cannot be loaded.
```python
try:
    shell = EnclaveShell(engine_path="/mnt/usb/libs3.so")
except EngineLoadError as e:
    # Log the error
    logger.error(f"Engine load failed: {e}")
    # Fall back to safe state (NO TRADE)
    verdict = "NO TRADE"
```

### EngineError
Raised when the engine fails during execution.
```python
try:
    verdict = shell.request_verdict(market_data)
except EngineError as e:
    # Log the error (but don't expose why)
    logger.error(f"Engine error: {e}")
    # Return safe default
    return "NO TRADE"
```

### ValidationError
Raised when market_data is malformed.
```python
try:
    verdict = shell.request_verdict(invalid_data)
except ValidationError as e:
    # Log the invalid data
    logger.error(f"Invalid market data: {e}")
    # Return safe default
    return "NO TRADE"
```

### SignatureError
Raised when engine signature verification fails.
```python
if not shell.validate_engine_signature():
    logger.critical("Engine signature invalid. Do not proceed.")
    raise SignatureError("Engine has been tampered with.")
```

---

## What Repository A Can Do

✅ **Allowed**:
- Call `request_verdict()` with market data
- Check if USB is attached
- Verify engine signature
- Log verdicts and results
- Display verdicts in HUD
- Execute trades based on verdicts
- Handle errors gracefully

---

## What Repository A CANNOT Do

❌ **Forbidden**:
- Inspect or modify the engine binary
- Attempt to reverse-engineer engine logic
- Call the engine directly (only through EnclaveShell)
- Access any internal engine state
- Modify the enclave shell to expose engine internals
- Predict or approximate verdict logic
- Write tests that assume specific verdict patterns

---

## Security Considerations

### USB Detection
The enclave shell **must** verify the USB is attached before loading the engine.
```python
def check_usb_attached(self) -> bool:
    """Prevent running sealed engine code in memory if USB is removed."""
    usb_paths = ['/mnt/usb', '/Volumes/USB', 'D:\\']
    return any(os.path.exists(path) for path in usb_paths)
```

### Signature Verification
The engine binary **must** be cryptographically signed. Before execution:
```python
def validate_engine_signature(self) -> bool:
    """
    Verify the engine binary is authentic and unmodified.
    Uses RSA or ECDSA signature from Repository B.
    """
    pass
```

### Error Isolation
Errors in the engine must not expose internal logic:
```python
def request_verdict(self, market_data):
    try:
        result = self._call_engine(market_data)
        return result
    except Exception as e:
        # Log the error internally
        logger.error(f"Engine error: {e}")
        # Return safe default, don't expose error details
        return "NO TRADE"
```

### No State Leakage
The engine must not leak state between calls. Each verdict is independent.

---

## Testing & Mocking

### Mock Engine for Repository A Testing

Repository A **must** include mock implementations for testing HUD and shell logic without calling the real engine:
```python
class MockEngine:
    """Test engine that returns predictable verdicts."""
    
    def request_verdict(self, market_data):
        # Simple logic for testing: if close > open, BUY
        if market_data['close'] > market_data['open']:
            return "BUY"
        elif market_data['close'] < market_data['open']:
            return "SELL"
        else:
            return "NO TRADE"
```

**Important**: Mock logic must NOT attempt to approximate real S3 behavior.

---

## Example: HUD Using EnclaveShell
```python
# In Repository A (Sentinel_Hub)
from src.enclave import EnclaveShell

class TradingHUD:
    def __init__(self, engine_path="/mnt/usb/libs3.so"):
        self.shell = EnclaveShell(engine_path)
    
    def on_market_tick(self, market_data):
        """Called when new market data arrives."""
        # Get verdict from sealed engine
        verdict = self.shell.request_verdict(market_data)
        
        # Display to user
        self.display_verdict(verdict)
        
        # Log the decision
        self.log_trade_decision(market_data, verdict)
        
        # Execute trade (if appropriate)
        if verdict == "BUY":
            self.execute_buy_order()
        elif verdict == "SELL":
            self.execute_sell_order()

# This code never knows HOW the engine decided.
# It only knows that it did, and what the verdict was.
```

---

## Summary

| Aspect | Details |
|--------|---------:|
| **Input** | Market data (OHLCV, indicators) |
| **Output** | Trading verdict: "BUY", "SELL", or "NO TRADE" |
| **Interface** | EnclaveShell class with request_verdict() method |
| **Location** | Interface in Repository A, logic in Repository B |
| **Calls** | Unidirectional: Repository A → Repository B |
| **Secrets** | Never exposed; engine logic remains sealed |
| **Testing** | Mock engine in Repository A for testing |
| **Security** | USB detection, signature verification, error isolation |

---

**Next**: See `research-summary.md` for high-level overview of what the S3 engine does (without revealing its math).

---

**Questions?** Contact the Founder.
