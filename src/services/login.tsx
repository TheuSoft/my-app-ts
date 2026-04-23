import { api } from "../api";

export interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const login = async (email: string, password: string): Promise<UserData | null> => {
  const data = (await api) as UserData;
  if (email !== data.email || password !== data.password) {
    alert("Credenciais inválidas!");
    return null;
  }
  alert(`Login realizado ${email}!`);
  return data;
};
