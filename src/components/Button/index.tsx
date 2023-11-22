import styles from './styles.module.css';

interface Props {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
