/**
 * utils.js
 * HTTP helpers for connecting frontend with backend API using fetch.
 * The base URL is defined in .env as VITE_API_URL.
 */

/**
 * Get API base url from Vite env variables.
 * @returns {string}
 */
export function apiBase() {
  return import.meta.env.VITE_API_URL || "";
}

/**
 * Fetch GET request.
 * @param {string} path - API endpoint path (e.g. "/tasks").
 * @returns {Promise<any>} Response JSON.
 */
export async function httpGet(path) {
  const url = `${apiBase()}${path}`;
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`);
  return res.json();
}

/**
 * Fetch POST request.
 * @param {string} path - API endpoint path.
 * @param {object} body - JSON body to send.
 * @returns {Promise<any>} Response JSON.
 */
export async function httpPost(path, body) {
  const url = `${apiBase()}${path}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${url} failed: ${res.status}`);
  return res.json();
}

/**
 * Fetch PUT request.
 * @param {string} path - API endpoint path.
 * @param {object} body - JSON body to update.
 * @returns {Promise<any>} Response JSON.
 */
export async function httpPut(path, body) {
  const url = `${apiBase()}${path}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`PUT ${url} failed: ${res.status}`);
  return res.json();
}

/**
 * Fetch DELETE request.
 * @param {string} path - API endpoint path.
 * @returns {Promise<any>} Response JSON.
 */
export async function httpDelete(path) {
  const url = `${apiBase()}${path}`;
  const res = await fetch(url, { method: "DELETE" });
  if (!res.ok) throw new Error(`DELETE ${url} failed: ${res.status}`);
  return res.json();
}
