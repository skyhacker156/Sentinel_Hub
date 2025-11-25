# Public Interface Catalog — Sentinel_Hub

**Status:** Active  
**Scope:** Public-facing endpoints only. No sealed logic. No internal APIs.  
**Badge Required:** PRISM

---

## Purpose

This document catalogs every public interface that external systems can interact with.

It answers: "What can I connect to, how do I call it, and what comes back?"

---

## Quick Reference

| Interface | Type | Auth | Status |
|-----------|------|------|--------|
| `/api/v1/health` | REST | None | Active |
| `/api/v1/status` | REST | API Key | Active |
| `/api/v1/ingest` | REST | API Key | Active |
| `/api/v1/results` | REST | API Key | Active |
| `/ws/stream` | WebSocket | API Key | Active |
| `/webhook/notify` | Webhook (outbound) | Signature | Active |

---

## REST Endpoints

### `GET /api/v1/health`

**Purpose:** System health check. No authentication required.

| Field | Value |
|-------|-------|
| Method | `GET` |
| Auth | None |
| Rate Limit | 60/min |

**Request:**
```
GET /api/v1/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-11-24T12:00:00Z"
}
```

---

### `GET /api/v1/status`

**Purpose:** System status with operational details.

| Field | Value |
|-------|-------|
| Method | `GET` |
| Auth | API Key (header) |
| Rate Limit | 30/min |

**Request:**
```
GET /api/v1/status
Authorization: Bearer {api_key}
```

**Response:**
```json
{
  "status": "operational",
  "version": "1.0.0",
  "uptime_seconds": 86400,
  "last_update": "2025-11-24T12:00:00Z"
}
```

---

### `POST /api/v1/ingest`

**Purpose:** Submit data to Table A (public input layer).

| Field | Value |
|-------|-------|
| Method | `POST` |
| Auth | API Key (header) |
| Rate Limit | 100/min |
| Max Payload | 1MB |

**Request:**
```
POST /api/v1/ingest
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "source": "adapter_name",
  "payload": { ... },
  "timestamp": "2025-11-24T12:00:00Z"
}
```

**Response:**
```json
{
  "accepted": true,
  "id": "ingest_abc123",
  "queued_at": "2025-11-24T12:00:01Z"
}
```

**Notes:**
- Data enters Table A only
- No visibility into what happens after queueing
- Use `/api/v1/results` to retrieve outputs

---

### `GET /api/v1/results`

**Purpose:** Retrieve public outputs from Table B.

| Field | Value |
|-------|-------|
| Method | `GET` |
| Auth | API Key (header) |
| Rate Limit | 60/min |

**Request:**
```
GET /api/v1/results?since=2025-11-24T00:00:00Z&limit=100
Authorization: Bearer {api_key}
```

**Response:**
```json
{
  "results": [
    {
      "id": "result_xyz789",
      "timestamp": "2025-11-24T12:00:00Z",
      "data": { ... }
    }
  ],
  "count": 1,
  "has_more": false
}
```

**Notes:**
- Results come from Table B only
- No explanation of how results were generated
- Results are what they are — no provenance data

---

## WebSocket

### `WSS /ws/stream`

**Purpose:** Real-time stream of public outputs from Table B.

| Field | Value |
|-------|-------|
| Protocol | WebSocket (WSS) |
| Auth | API Key (query param) |
| Heartbeat | 30s |

**Connection:**
```
wss://api.sentinel.hub/ws/stream?api_key={api_key}
```

**Messages (server → client):**
```json
{
  "type": "result",
  "id": "result_xyz789",
  "timestamp": "2025-11-24T12:00:00Z",
  "data": { ... }
}
```
```json
{
  "type": "heartbeat",
  "timestamp": "2025-11-24T12:00:30Z"
}
```

**Notes:**
- Stream delivers Table B outputs as they become available
- No internal state or processing status exposed
- Reconnect with same API key to resume

---

## Webhook (Outbound)

### `POST /webhook/notify`

**Purpose:** Sentinel_Hub calls YOUR endpoint when results are ready.

| Field | Value |
|-------|-------|
| Direction | Outbound (Sentinel → You) |
| Auth | HMAC signature (header) |
| Retry | 3 attempts, exponential backoff |

**Payload sent to your endpoint:**
```json
{
  "event": "result.ready",
  "id": "result_xyz789",
  "timestamp": "2025-11-24T12:00:00Z",
  "data": { ... }
}
```

**Signature verification:**
```
X-Sentinel-Signature: sha256={hmac_signature}
```

Verify by computing HMAC-SHA256 of the raw body with your webhook secret.

---

## Authentication

### API Key

All authenticated endpoints require:
```
Authorization: Bearer {api_key}
```

**Obtain keys:** Contact Founder or see `/governance/API_ACCESS.md`

**Key scopes:**
| Scope | Access |
|-------|--------|
| `read` | `/status`, `/results`, `/ws/stream` |
| `write` | `read` + `/ingest` |
| `admin` | `write` + webhook management |

---

## Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| `/health` | 60 | 1 min |
| `/status` | 30 | 1 min |
| `/ingest` | 100 | 1 min |
| `/results` | 60 | 1 min |
| `/ws/stream` | 1 connection | per key |

**Exceeded?** Response `429 Too Many Requests` with `Retry-After` header.

---

## Error Responses

All endpoints return consistent error format:
```json
{
  "error": true,
  "code": "RATE_LIMITED",
  "message": "Too many requests. Retry after 30 seconds.",
  "retry_after": 30
}
```

| Code | Meaning |
|------|---------|
| `UNAUTHORIZED` | Missing or invalid API key |
| `FORBIDDEN` | Key lacks required scope |
| `RATE_LIMITED` | Too many requests |
| `BAD_REQUEST` | Malformed payload |
| `NOT_FOUND` | Resource doesn't exist |
| `INTERNAL_ERROR` | Something broke — contact support |

---

## What This Catalog Does NOT Include

- Internal APIs between services (sealed)
- Hallway interfaces (sealed)
- Repository B/C endpoints (sealed)
- Processing status or queue depth (sealed)

**Rule:** If it's not in this catalog, it's not public.

---

## Reference

- `DATA_FLOW_OVERVIEW.md` — How data moves through public layers
- `FOLDER_PURPOSE_MATRIX.md` — Where code for these interfaces lives
- `/governance/API_ACCESS.md` — How to request API keys

---

Last updated: November 24, 2025  
Maintained by: Founder + STEWARD  
Status: Ready for architecture review
