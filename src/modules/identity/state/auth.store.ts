import { create } from "zustand";

import type {
  AuthState,
  AuthUser,
} from "./auth.types";

interface AuthStore extends AuthState {
  establishSession: (
    user: AuthUser
  ) => void;

  clearSession: () => void;

  markUnknown: () => void;
}

export const useAuthStore =
  create<AuthStore>((set) => ({
    status: "unknown",
    user: null,

    establishSession: (user) =>
      set({
        status: "authenticated",
        user,
      }),

    clearSession: () =>
      set({
        status: "unauthenticated",
        user: null,
      }),

    markUnknown: () =>
      set({
        status: "unknown",
        user: null,
      }),
  }));