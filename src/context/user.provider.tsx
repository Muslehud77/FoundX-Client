"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { TUser } from "../types";
import { getCurrentUser, logoutUser } from "../services/AuthService";
import { usePathname, useRouter } from "next/navigation";
import { privateRoutes } from "../constant";

type TUserProviderValues = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  handleLogout: () => void;
};

const UserContext = createContext<TUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  const isPrivateRoute = (pathname: string) => {
    return privateRoutes.some((route) => pathname.startsWith(route));
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setIsLoading(false);
    console.log(pathname);
    if (isPrivateRoute(pathname)) {
      router.push("/login");
    }
  };

  useEffect(() => {
    handleUser();
  }, [pathname]);

  const value = { user, setUser, isLoading, setIsLoading, handleLogout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
