import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUpPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { signed, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = signUp(name, email, phone, password);

    if (response) {
      setError(response);
      return;
    }

    alert('Usuário cadastrado com sucesso!');
    navigate('/');
  };

  useEffect(() => {
    if (signed) {
      navigate('/');
    }
  }, [signed, navigate]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Cadastro</label>
      <div className={styles.content}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError('');
          }}
          required={true}
        />
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
          type="text"
          placeholder="Digite seu telefone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
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
        <Button text="Confirmar Cadastro" onClick={handleSubmit} />
        <label className={styles.labelSignUp}>
          Já tem uma conta?{' '}
          <span>
            <Link className={styles.registerLink} to="/login">
              Faça Login
            </Link>
          </span>
        </label>
      </div>
    </div>
  );
};

export default SignUpPage;
