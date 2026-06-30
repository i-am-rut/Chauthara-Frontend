import axios from "axios";
import { AppError } from "./AppError";

export function mapApiError(error: unknown) {
  if (axios.isAxiosError(error)) {
    return new AppError(
      error.response?.data?.message ||
        "Request failed",
      error.response?.status
    );
  }

  return new AppError("Unexpected error");
}