import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

import Toggle from '../components/UI/Toggle';
import PlanCard from '../components/plans/PlanCard';

import classes from './Suscripcion.module.css';

const Suscripcion = () => {
  const history = useHistory();
  const [store, dispatch] = useContext(StoreContext);
  const { isPremium, standardPlan, premiumPlan, planDetails } = store;

  const plan = isPremium ? premiumPlan : standardPlan;

  const sliderHandler = () => {
    dispatch({ type: types.changePlan });
  };

  const subscriptionHandler = () => {
    history.push('/datos');
  };

  return (
    <div className={classes['subscription']}>
      <div className={classes['desktop-container']}>
        <h1>Conviértete en un Suscriptor de Mag.</h1>
        <h2>Realiza decisiones informadas con Mag.</h2>
        <p>
          Manténte informado de las últimas noticias en materias de finanzas,
          política, educación y demás. Con nuestros paquetes digitales,
          obtendrás una copia electrónica igual al impreso y fácil de navegar.
        </p>
        <img
          src="https://epublisher.world/wp-content/uploads/2021/02/digitale-kranten-uitgeven-2048x1490.png"
          alt="News"
        />
      </div>

      <div className={classes['mobile-container']}>
        <Toggle
          leftTitle={`Plan ${standardPlan.name}`}
          rightTitle={`Plan ${premiumPlan.name}`}
          sliderHandler={sliderHandler}
        />

        <div className={classes['card-container']}>
          <PlanCard
            plan={plan}
            isPremium={isPremium}
            planDetails={planDetails}
            subscriptionHandler={subscriptionHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Suscripcion;
