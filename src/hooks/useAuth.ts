import { AuthContext } from '../contexts/Auth/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
