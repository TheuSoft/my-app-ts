// src/services/login.tsx
import { api } from "../api";

export const login = async (email: string): Promise<boolean> => {
  const data: any = await api;
  if (email !== data.email) {
    alert("Email inválido!");
    return false;
  }
  alert(`Login realizado ${email}!`);
  return true;
};
