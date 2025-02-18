"use client";
import { getCurrentUser } from "@/services/AuthService/LoginAction";
import { IUser } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
// import { createContext } from "vm";
type TUserContext = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
const UserContext = createContext<TUserContext | undefined>(undefined);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  console.log(user);
  const [isLoading, setIsLoading] = useState(true);
  const handleUser = async () => {
    const user = await getCurrentUser();

    setUser(user);
    setIsLoading(false);
  };
  useEffect(() => {
    handleUser();
  }, [isLoading]);
  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (context == undefined) {
    throw new Error("useUser is must used within UserProvider");
  }
  return context;
};
export default UserProvider;
