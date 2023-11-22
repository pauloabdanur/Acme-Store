import { User } from '../types';

const USER_STORAGE_KEY = 'registeredUsers';

export function getUsers(): User[] | undefined {
  const storedUsers = localStorage.getItem(USER_STORAGE_KEY);
  if (storedUsers) {
    const users: User[] = JSON.parse(storedUsers);
    return users;
  }
  return undefined;
}

export function getUserByEmail(email: string): User | undefined {
  const storedUsers = localStorage.getItem(USER_STORAGE_KEY);
  if (storedUsers) {
    const users: User[] = JSON.parse(storedUsers);
    return users.find((user) => user.email === email);
  }
  return undefined;
}

export function addUser(user: User): void {
  const storedUsers = localStorage.getItem(USER_STORAGE_KEY);
  const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];
  users.push(user);
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
}
