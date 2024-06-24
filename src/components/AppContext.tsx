import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
  user: string;
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

type UserData = {
  email: string;
  name: string;
  balance?: number;
  id: string;
};

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null)

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      const { name, email, balance, id } = JSON.parse(storage);
      setIsLoggedIn(login);
      setUserData({ name, email, balance, id });
    }
  }, [storage]);

  const user = "Eric Santana";

  return (
    <AppContext.Provider value={{ user, userData, isLoggedIn, setIsLoggedIn, setUserData }}>
      {children}
    </AppContext.Provider>
  );
};
