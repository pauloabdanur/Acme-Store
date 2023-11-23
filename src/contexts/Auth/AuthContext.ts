import { createContext } from 'react';
import { User } from '../../types';

export type AuthContextType = {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => string | void;
  signUp: (
    name: string,
    email: string,
    phone: string,
    password: string
  ) => string | void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
