import { useState } from 'react';

import NavLinks from './NavLinks';
import classes from './MobileNavigation.module.css';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const onIconClickHandler = () => {
    setOpen(!open);
  };

  const hamburguerIcon = (
    <svg
      viewBox="0 0 100 80"
      width="40"
      height="40"
      className={classes['navigation-mobile__hamburguer']}
      onClick={onIconClickHandler}
    >
      <rect width="100" height="20" rx="8"></rect>
      <rect y="30" width="100" height="20" rx="8"></rect>
      <rect y="60" width="100" height="20" rx="8"></rect>
    </svg>
  );

  const closeIcon = (
    <svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      className={classes['navigation-mobile__close']}
      onClick={onIconClickHandler}
    >
      <path
        d="M 2 2 L 22 22 M 2 22 L22 2"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );

  const closeMobileMenuHandler = () => {
    setOpen(false);
  };

  return (
    <nav className={classes['navigation-mobile']}>
      {open ? closeIcon : hamburguerIcon}
      {open && (
        <NavLinks isMobile={true} onClickLink={closeMobileMenuHandler} />
      )}
    </nav>
  );
};

export default MobileNavigation;
