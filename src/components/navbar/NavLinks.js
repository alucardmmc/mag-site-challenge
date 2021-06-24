import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
  const ClickLinkHandler = () => (
    props.isMobile && props.onClickLink()
  );

  return (
    <ul>
      <li onClick={ClickLinkHandler}>
        <Link to="/">Inicio</Link>
      </li>
      <li onClick={ClickLinkHandler}>
        <Link to="/suscripcion">Suscripción</Link>
      </li>
    </ul>
  )
};

NavLinks.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onClickLink: PropTypes.func,
}

export default NavLinks;