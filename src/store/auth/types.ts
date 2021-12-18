import { IData } from 'src/api/constans'

export interface IUser extends IData {
  username: string;
  email: string;
  id: string;
  accessToken: string;
  refreshToken: string;
  verifyAt: string;
}
export interface IRefreshToken extends IData {
  accessToken: string;
}
export interface LoginResponse {
  email: string;
  password: string;
}
export interface SignUpForm {
  username: string | number;
  email: string;
  password: string;
}
export interface StateInterface {
  user: IUser | null,
  auth: boolean
}

export enum Mutations {
  SET_AUTH = 'setAuth',
  SET_USER = 'setUser',
  SET_LOGOUT = 'setLogout'
}
