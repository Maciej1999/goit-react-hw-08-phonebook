import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import css from './../components/Phonebook/Phonebook.module.css';

export const LoginPage = () => {
  const error = useSelector(selectError);
  return (
    <main
      style={{ width: '100%', boxSizing: 'border-box', padding: '0.4em 0px' }}
    >
      <LoginForm />
      {error ? <span className={css.error}>{error}</span> : ''}
    </main>
  );
};

export default LoginPage;
