import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { Link } from 'react-router-dom';
import classes from './Confirmacion.module.css';

const Confirmacion = () => {
  const [store] = useContext(StoreContext);
  const { isPremium, standardPlan, premiumPlan } = store;

  const plan = isPremium ? premiumPlan : standardPlan;

  return (
    <div className={classes.confirmation}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 426.667 426.667"
      >
        <g>
          <g>
            <polygon points="293.333,135.04 190.08,240.213 137.173,187.093 108.8,215.467 192.213,298.667 326.187,168.747 		" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M213.333,0C95.513,0,0,95.513,0,213.333s95.513,213.333,213.333,213.333s213.333-95.513,213.333-213.333
			S331.154,0,213.333,0z M213.333,388.053c-96.495,0-174.72-78.225-174.72-174.72s78.225-174.72,174.72-174.72
			c96.446,0.117,174.602,78.273,174.72,174.72C388.053,309.829,309.829,388.053,213.333,388.053z"
            />
          </g>
        </g>
      </svg>
      <div className={classes['message']}>
        <span className={classes['message__welcome']}>Bienvenido, has adquirido el</span>
        <span className={classes['message__plan']}>Plan {plan.name}</span>
        <span className={classes['message__price']}>{plan.currency}{plan.price}. {plan.period}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum diam a nunc varius, quis iaculis ipsum auctor. Nullam sit
          amet sodales massa, nec suscipit erat. Phasellus quis eros eget velit
          dictum tristique sit amet tincidunt erat.
        </p>
        <Link to="/suscripcion">Ir a ver mi plan</Link>
      </div>
      <div className={classes['link__page']}>
        <Link to="/suscripcion">Ir a Mag.pe</Link>
      </div>
    </div>
  );
};

export default Confirmacion;
