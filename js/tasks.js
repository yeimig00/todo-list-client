/**
 * tasks.js
 * Handles CRUD operations for tasks (get, create, update, delete).
 * Uses backend API from utils/api.js or fetch helpers.
 */

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Get all tasks.
 * @returns {Promise<Array>} List of tasks.
 */
export async function getTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) throw new Error("Error fetching tasks");
    return await response.json();
  } catch (error) {
    console.error("getTasks error:", error.message);
    throw error;
  }
}

/**
 * Create a new task.
 * @param {Object} task - Task data (title, detail, dateTime, status).
 */
export async function createTask(task) {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error creating task");
    }
    return await response.json();
  } catch (error) {
    console.error("createTask error:", error.message);
    throw error;
  }
}

/**
 * Update a task by id.
 * @param {string} id - Task id.
 * @param {Object} updates - Fields to update.
 */
export async function updateTask(id, updates) {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error updating task");
    }
    return await response.json();
  } catch (error) {
    console.error("updateTask error:", error.message);
    throw error;
  }
}

/**
 * Delete a task by id.
 * @param {string} id - Task id.
 */
export async function deleteTask(id) {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error deleting task");
    }
    return await response.json();
  } catch (error) {
    console.error("deleteTask error:", error.message);
    throw error;
  }
}
