export interface Product {
  id: number;
  name: string;
  description: string;
  value: string;
}

export interface WordsData {
  verbs: string[];
  adjectives: string[];
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  id?: string;
  name?: string;
  email: string;
  phone?: string;
  password: string;
}
