export interface AuthUser {
  id: string;
  username: string;
  displayName: string;
}

export type SessionStatus =
  | "unknown"
  | "authenticated"
  | "unauthenticated";

export interface AuthState {
  status: SessionStatus;
  user: AuthUser | null;
}