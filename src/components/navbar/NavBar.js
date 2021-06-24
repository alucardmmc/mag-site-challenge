import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={classes['nav-bar']}>
      <div className={classes['nav-bar__container']}>
        <h1 className={classes['nav-bar__logo']}>Mag.</h1>
        <MobileNavigation />
        <Navigation />
      </div>
    </header>
  );
};

export default NavBar;
