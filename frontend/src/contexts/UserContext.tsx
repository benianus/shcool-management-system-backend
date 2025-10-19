import { getTokenFromLocalStorage } from "@/helpers";
import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  authenticated: false,
  setAuthenticated: (value: boolean) => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    getTokenFromLocalStorage("token", "test")
  );

  return (
    <UserContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
