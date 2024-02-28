import { FcTabletAndroid } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { AuthNav } from '../../components/AuthNav/Authnav';
import { useAuth } from '../../hooks';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.container}>
      <Navigation />
      <div>
        <IconContext.Provider value={{ size: '36px' }}>
          <FcTabletAndroid />
        </IconContext.Provider>
        <span className={css.span}> Your favorite phone book</span>
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </div>
  );
};
