// REACT
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

// INTERFACES
import { IUser } from "../interfaces/auth";

interface AuthContextData {
  user: IUser | undefined;
  signIn: () => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    const userLocal = localStorage.getItem('@KaBum-teste:user');
    const token = localStorage.getItem('@KaBum-teste:token');

    if (userLocal && token) {
      setUser(JSON.parse(userLocal))
    }
  }, []);

  const signIn = () => {
    let data: IUser = {
      name: 'Luis Henrique',
      avatar: '/images/user.svg'
    };

    localStorage.setItem('@KaBum-teste:user', JSON.stringify(data));
    localStorage.setItem('@KaBum-teste:token', 'token_teste_200');

    setUser(data);
  }

  const signOut = () => {
    setUser(undefined);

    localStorage.removeItem('@KaBum-teste:user');
    localStorage.removeItem('@KaBum-teste:token');
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };