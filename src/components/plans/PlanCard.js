import React from 'react';

import PlanDetails from './PlanDetails';
import classes from './PlanCard.module.css';

const PlanCard = ({ plan, isPremium, planDetails, subscriptionHandler }) => {
  return (
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
        className={`${classes['card-button']} ${
          isPremium ? classes['card-button__cta'] : ''
        }`}
        onClick={subscriptionHandler}
      >
        Suscribirme
      </button>
    </div>
  );
};

export default PlanCard;
