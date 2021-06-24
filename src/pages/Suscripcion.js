import { useHistory } from 'react-router-dom';

import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

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
          <ul>
            {isPremium &&
              planDetails.map((details) => (
                <li key={details.id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className={classes['info__icon']}
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <p className={classes['info_details']}>
                    {details.description}
                  </p>
                </li>
              ))}

            {!isPremium &&
              planDetails.map((details) => (
                <li key={details.id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className={`${classes['info__icon']} ${
                      details.id >= 3 ? classes['info__icon--unchecked'] : ''
                    }`}
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <p
                    className={`${classes['info_details']} ${
                      details.id >= 3 ? classes['info__details--unchecked'] : ''
                    }`}
                  >
                    {details.description}
                  </p>
                </li>
              ))}
          </ul>
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
