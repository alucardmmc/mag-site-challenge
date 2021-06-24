import classes from './PlanDetails.module.css';

const PlanDetails = ({isPremium, planDetails}) => {
  return (
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
            <p className={classes['info_details']}>{details.description}</p>
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
  );
};

export default PlanDetails;