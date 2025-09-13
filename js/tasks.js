/**
 * tasks.js
 * Handles CRUD operations for tasks (get, create, update, delete).
 * Uses backend API with fetch helpers.
 */

import { httpGet, httpPost, httpPut, httpDelete } from "./utils.js";

/**
 * Get all tasks.
 * @returns {Promise<Array>} List of tasks.
 */
export async function getTasks() {
  return httpGet("/tasks");
}

/**
 * Create a new task.
 * @param {Object} task - Task data (title, detail, dateTime, status).
 */
export async function createTask(task) {
  return httpPost("/tasks", task);
}

/**
 * Update a task by id.
 * @param {string} id - Task id.
 * @param {Object} updates - Fields to update.
 */
export async function updateTask(id, updates) {
  return httpPut(`/tasks/${id}`, updates);
}

/**
 * Delete a task by id.
 * @param {string} id - Task id.
 */
export async function deleteTask(id) {
  return httpDelete(`/tasks/${id}`);
}
