import classes from './InputPlanCard.module.css';

const InputPlanCard = ({ isPremium, checkBoxHandler, plan }) => {
  console.log(isPremium);
  console.log(plan.name);

  return (
    <div>
      <div className={classes['card']}>
        <input
          type="radio"
          name="pricing"
          id={`${plan.name === 'Premium' ? 'premiumCard' : 'standardCard'}`}
          // isPremium: true
          // plan.name === 'Premium' -> true
          // else
          // !isPremium: true
          // plan.name === 'Estándard' -> true
          defaultChecked={
            isPremium && plan.name === 'Premium'
              ? true
              : !isPremium && plan.name === 'Estándar'
              ? true
              : false
          }
          onClick={checkBoxHandler}
        ></input>
        <label
          htmlFor={`${
            plan.name === 'Premium' ? 'premiumCard' : 'standardCard'
          }`}
        >
          <h5>{plan.name}</h5>
          <h2>
            <span>{plan.currency}</span>
            {plan.price}.<span> {plan.period}</span>
          </h2>
        </label>
      </div>
    </div>
  );
};

export default InputPlanCard;
