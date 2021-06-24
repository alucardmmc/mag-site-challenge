import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const NavLinks = (props) => {
  const history = useHistory();

  const ClickMainHandler = () => {
    props.isMobile && props.onClickLink();
    history.push('/');
  };

  const ClickSuscripcionHandler = () => {
    props.isMobile && props.onClickLink();
    history.push('/suscripcion');
  };

  return (
    <ul>
      <li onClick={ClickMainHandler}>
        <Link to="/">Inicio</Link>
      </li>
      <li onClick={ClickSuscripcionHandler}>
        <Link to="/suscripcion">Suscripción</Link>
      </li>
    </ul>
  )
};

export default NavLinks;