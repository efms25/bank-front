import { api } from "../api";

interface ILogin {
  login: boolean;
  email?: string;
  password?: string;
  name?: string;
  balance?: number;
  id?: string;
}

export const login = async (
  email: string,
  password: string
): Promise<ILogin> => {
  const data: any = await api;

  if (email === data.email && password === data.password) {
    return {
      login: true,
      ...data,
    };
  }
  return {login: false};
};
