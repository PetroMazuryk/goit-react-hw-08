import css from './HomeTitle.module.css';
export const HomeTitle = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        Please <span className={css.span}>Login</span> or{' '}
        <span className={css.span}>Register</span> to view and save your own
        contacts!
      </p>
    </div>
  );
};
