/**
 * auth.js
 * Handles user authentication: register, login, logout, recover password.
 * Uses backend API from utils/api.js.
 */

import { registerUser as apiRegisterUser, loginUser as apiLoginUser } from "../utils/api.js";

/**
 * Register a new user.
 * @param {Object} data - User data (firstName, lastName, age, email, password).
 */
export async function registerUser(data) {
  try {
    const response = await apiRegisterUser(data);
    return response;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
}

/**
 * Login user.
 * @param {string} email
 * @param {string} password
 */
export async function loginUser(email, password) {
  try {
    const response = await apiLoginUser({ email, password });
    return response;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
}

/**
 * Logout user.
 * Clears session storage.
 */
export function logoutUser() {
  sessionStorage.removeItem("userId");
}

/**
 * Recover password via email.
 * @param {string} email
 */
export async function recoverPassword(email) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/recover`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error al recuperar la contraseña");
    }

    return response.json();
  } catch (error) {
    console.error("Recover password error:", error.message);
    throw error;
  }
}
