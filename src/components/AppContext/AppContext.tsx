// src/components/AppContext/AppContext.tsx

import { getAuth, removeAuth, saveAuth } from "../../services/storage";
import { createContext, useState } from "react";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  logout: () => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const user = "John Doe";
  const [isLoggedIn, setIsLoggedInState] = useState<boolean>(() => getAuth());

  const setIsLoggedIn = (value: boolean) => {
    setIsLoggedInState(value);
    saveAuth(value);
  };

  const logout = () => {
    setIsLoggedInState(false);
    removeAuth();
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </AppContext.Provider>
  );
};
