export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ForgotPasswordProps {
  token: string | null;
}

export interface BoardProps {
  date: string;
}

export interface BoardProgramIds {
  exerciseId: string;
  programId: string;
  isTimer: boolean;
  date: string;
}
