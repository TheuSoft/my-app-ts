// src/components/AppContext/AppContext.tsx
import { createContext, useState } from "react";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const user = "John Doe";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
