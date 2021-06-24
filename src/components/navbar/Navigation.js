import NavLinks from './NavLinks';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
