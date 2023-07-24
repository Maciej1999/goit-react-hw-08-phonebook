import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={`footer ${css.footer}`}>
      <span>Website created by Maciej Sikora</span>
    </footer>
  );
};
