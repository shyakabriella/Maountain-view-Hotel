// src/config/api.js
export const API_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api").replace(/\/$/, "");
export const STORAGE_URL = (import.meta.env.VITE_STORAGE_URL || "http://127.0.0.1:8001/storage").replace(/\/$/, "");
export const APP_URL = API_URL.replace(/\/api$/, "");

export const getImageUrl = (path) => {
  if (!path || typeof path !== 'string') return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/storage/")) return `${APP_URL}${path}`;
  if (path.startsWith("storage/")) return `${APP_URL}/${path}`;
  return `${STORAGE_URL}/${path}`;
};

export const apiRequest = async (url, method = "GET", body = null, token = null, isFormData = false) => {
  const options = { 
    method, 
    headers: { 
      Accept: "application/json",
    } 
  };
  
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  
  if (body) {
    if (isFormData) {
      options.body = body;
      delete options.headers["Content-Type"];
    } else {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }
  }
  
  const response = await fetch(`${API_URL}${url}`, options);
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  return await response.json();
};