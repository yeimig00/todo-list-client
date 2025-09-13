/**
 * auth.js
 * Handles user authentication: register, login, logout, recover password.
 * Uses backend API with fetch helpers from utils.js.
 */

import { httpPost } from "./utils.js";

/**
 * Register a new user.
 * @param {Object} data - User data (firstName, lastName, age, email, password).
 */
export async function registerUser(data) {
  return httpPost("/auth/register", data);
}

/**
 * Login user.
 * @param {string} email
 * @param {string} password
 */
export async function loginUser(email, password) {
  return httpPost("/auth/login", { email, password });
}

/**
 * Logout user.
 * This example clears sessionStorage only, since we are not using JWT yet.
 */
export function logoutUser() {
  sessionStorage.removeItem("userId");
}

/**
 * Recover password via email.
 * @param {string} email
 */
export async function recoverPassword(email) {
  return httpPost("/auth/recover", { email });
}
