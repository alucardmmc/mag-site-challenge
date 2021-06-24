import classes from './Toggle.module.css';

const Toggle = ({leftTitle, rightTitle, sliderHandler}) => {
  return (
    <div className={classes['subscription__toggle']}>
      <span>{leftTitle}</span>
      <label className={classes['toggle__switch']}>
        <input type="checkbox" />
        <span className={classes['slider']} onClick={sliderHandler}></span>
      </label>
      <span>{rightTitle}</span>
    </div>
  );
};

export default Toggle;
