import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { signed, signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = signIn(email, password);

    if (response) {
      setError(response);
      return;
    }

    navigate('/');
  };

  useEffect(() => {
    if (signed) {
      navigate('/');
    }
  }, [signed, navigate]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Login</label>
      <div className={styles.content}>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          required={true}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          required={true}
        />
        <label className={styles.labelError}>{error}</label>
        <Button text="Login" onClick={handleSubmit} />
        <label className={styles.labelSignUp}>
          Não tem uma conta?{' '}
          <span>
            <Link className={styles.registerLink} to="/register">
              Cadastre-se
            </Link>
          </span>
        </label>
      </div>
    </div>
  );
};

export default LoginPage;
