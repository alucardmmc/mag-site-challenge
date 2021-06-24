import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

import classes from './Datos.module.css';
import useForm from '../hooks/useForm';
import validateForm from '../hooks/validateForm';
import PlanDetails from '../components/plans/PlanDetails';
import Form from '../components/form/Form';
import InputPlanCard from '../components/plans/InputPlanCard';

const Datos = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [store, dispatch] = useContext(StoreContext);
  const { isPremium, standardPlan, premiumPlan, planDetails } = store;

  const submitForm = () => {
    dispatch({ type: types.formSubmitted });
    history.push('/confirmacion');
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    validateForm,
    submitForm
  );

  const plan = isPremium ? premiumPlan : standardPlan;

  const ModalHandler = () => {
    setOpenModal(!openModal);
  };

  const LinkHandler = () => {
    dispatch({ type: types.changePlan });
  };

  const checkBoxHandler = (e) => {
    console.log(e.target.id);

    if (e.target.id === 'standardCard' && isPremium) {
      dispatch({ type: types.changePlan });
    } else if (e.target.id === 'premiumCard' && !isPremium) {
      dispatch({ type: types.changePlan });
    }
  };

  return (
    <div className={classes.data}>
      <div className={classes['desktop-container']}>
        <InputPlanCard isPremium={isPremium} checkBoxHandler={checkBoxHandler} plan={standardPlan} />
        <InputPlanCard isPremium={isPremium} checkBoxHandler={checkBoxHandler} plan={premiumPlan} />
      </div>

      <div className={classes['data__form']}>
        <Form
          values={values}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          plan={plan}
        />
      </div>

      <div className={classes['mobile-container']}>
        <div className={classes['modal']}>
          <div className={classes['modal-body']} onClick={ModalHandler}>
            <div className={classes['modal-body__title']}>
              <span className={classes['plan__name']}>Plan {plan.name}</span>
              <span className={classes['plan__price']}>
                {plan.currency + plan.price} {plan.period}
              </span>
            </div>
            {openModal && (
              <div className={`${classes['modal-body__description']}`}>
                <h2>{plan.description}</h2>
                <PlanDetails isPremium={isPremium} planDetails={planDetails} />
              </div>
            )}
          </div>
          <div className={classes['modal-change']}>
            <span onClick={LinkHandler}>Cambiar al Plan {plan.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datos;
