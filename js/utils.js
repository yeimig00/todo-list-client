/**
 * utils.js
 * HTTP helpers for connecting frontend with backend API using fetch.
 * The base URL is defined in .env as VITE_API_URL.
 */

/** Get API base url from Vite env variables */
export function apiBase() {
  let base = import.meta.env.VITE_API_URL || "";
  // Quita slash final si existe
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

/** Build full URL safely */
function buildUrl(path) {
  return `${apiBase()}${path.startsWith("/") ? path : "/" + path}`;
}

/** GET request */
export async function httpGet(path) {
  const url = buildUrl(path);
  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("httpGet error:", err);
    throw err;
  }
}

/** POST request */
export async function httpPost(path, body) {
  const url = buildUrl(path);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `POST ${url} failed: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error("httpPost error:", err);
    throw err;
  }
}

/** PUT request */
export async function httpPut(path, body) {
  const url = buildUrl(path);
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `PUT ${url} failed: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error("httpPut error:", err);
    throw err;
  }
}

/** DELETE request */
export async function httpDelete(path) {
  const url = buildUrl(path);
  try {
    const res = await fetch(url, { method: "DELETE" });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `DELETE ${url} failed: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error("httpDelete error:", err);
    throw err;
  }
}
