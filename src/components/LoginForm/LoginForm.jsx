import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './../Phonebook/Phonebook.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className={`${css.card}`}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="email">
          Email
        </label>
        <input
          className={css.input}
          type="email"
          id="email"
          name="email"
          title="Email address used to log in."
          placeholder="maciej.sikora@poczta.pl"
          required
        />

        <label className={css.label} htmlFor="password">
          Password
        </label>
        <input
          className={css.input}
          type="password"
          id="password"
          name="password"
          title="Password used to log in."
          placeholder="maceij"
          required
        />
        <button className={`${css.login} ${css.button}`} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
