import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { User } from '../../types';
import { addUser, getUserByEmail, getUsers } from '../../utils/userUtils';

interface Props {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    const userList = getUsers();

    if (userToken && userList) {
      const userExists = userList.filter(
        (user: User) => user.email === JSON.parse(userToken).email
      );

      if (userExists) setUser(userExists[0]);
    }
  }, []);

  const signIn = (email: string, password: string) => {
    const userExists = getUserByEmail(email);

    if (userExists) {
      if (userExists.email === email && userExists.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('token', JSON.stringify({ email, token }));
        setUser(userExists);
        return;
      } else {
        return 'Email ou senha incorretos';
      }
    } else {
      return 'Usuário não cadastrado';
    }
  };

  const signUp = (
    name: string,
    email: string,
    phone: string,
    password: string
  ) => {
    const userExists = getUserByEmail(email);

    if (userExists) {
      return 'Já existe uma conta com esse email';
    }

    const newUser: User = {
      name,
      email,
      phone,
      password,
    };

    setUser(newUser);
    addUser(newUser);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
