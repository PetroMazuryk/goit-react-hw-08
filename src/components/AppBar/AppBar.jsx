import { FcTabletAndroid } from 'react-icons/fc';
import { IconContext } from 'react-icons';

import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={css.container}>
      <div>
        <IconContext.Provider value={{ size: '36px' }}>
          <FcTabletAndroid />
        </IconContext.Provider>
        <span className={css.span}> Your favorite phone book</span>
      </div>
    </div>
  );
};
