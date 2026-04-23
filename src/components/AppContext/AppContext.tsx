// src/components/AppContext/AppContext.tsx

import {
  getAuth,
  getUser,
  removeAuth,
  saveAuth,
  saveUser,
  type StoredUser,
} from "../../services/storage";
import { createContext, useState } from "react";

interface IAppContext {
  user: StoredUser | null;
  isLoggedIn: boolean;
  login: (user: StoredUser) => void;
  logout: () => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<StoredUser | null>(getUser());
  const [isLoggedIn, setIsLoggedInState] = useState<boolean>(() => getAuth());

  const login = (userData: StoredUser) => {
    setUser(userData);
    setIsLoggedIn(true);
    saveUser(userData);
    saveAuth(true);
  };

  const setIsLoggedIn = (value: boolean) => {
    setIsLoggedInState(value);
    saveAuth(value);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedInState(false);
    removeAuth();
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
