import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

import PlanDetails from '../components/plans/PlanDetails';

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
  }

  return (
    <div className={classes.subscription}>
      <div className={classes['subscription__toggle']}>
        <span>Plan Estándar</span>
        <label className={classes['toggle__switch']}>
          <input type="checkbox" />
          <span className={classes['slider']} onClick={sliderHandler}></span>
        </label>
        <span>Plan Premium</span>
      </div>

      <div className={classes.card}>
        <div className={classes['card-title']}>
          <h1>
            <span className={classes['card-title__currency']}>
              {plan.currency}
            </span>
            <span className={classes['card-title__price']}>{plan.price}</span>
            <span className={classes['card-title__period']}>{plan.period}</span>
          </h1>
          <h2>{plan.description}</h2>
        </div>
        <div className={classes['card-info']}>
          <PlanDetails isPremium={isPremium} planDetails={planDetails} />
        </div>
        <button
          className={`${classes['card-button']} ${isPremium ? classes['card-button__cta'] : ''}`}
          onClick={subscriptionHandler}
        >
          Suscribirme
        </button>
      </div>
    </div>
  );
};

export default Suscripcion;
