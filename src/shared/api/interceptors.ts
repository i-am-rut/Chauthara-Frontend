import { apiClient } from "./client";
import { mapApiError } from "./errors/mapApiError";

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,

  (error) => {
    return Promise.reject(
      mapApiError(error)
    );
  }
);

export function setupInterceptors() {
  return apiClient;
}