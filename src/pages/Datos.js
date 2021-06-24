import { useContext, useState } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

import classes from './Datos.module.css';
import useForm from '../hooks/useForm';
import validateForm from '../hooks/validateForm';
import PlanDetails from '../components/plans/PlanDetails';
import { useHistory } from 'react-router-dom';

const Datos = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [store, dispatch] = useContext(StoreContext);
  const { isPremium, standardPlan, premiumPlan, planDetails } = store;

  const submitForm = () => {
    history.push('/confirmacion');
  }

  const { handleChange, values, handleSubmit, errors } = useForm(validateForm, submitForm);

  const plan = isPremium ? premiumPlan : standardPlan;

  const ModalHandler = () => {
    setOpenModal(!openModal);
  };

  const LinkHandler = () => {
    dispatch({ type: types.changePlan });
  }

  return (
    <div className={classes.data}>
      <h1>Completa el siguiente formulario con tus datos!</h1>
      <form className={classes['form__container']} onSubmit={handleSubmit}>
        <div className={classes['field__name']}>
          <label htmlFor="name">Nombre y Apellidos</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className={`${errors.name ? classes['error-input'] : ''}`}
          />
          {errors.name && (
            <span className={classes['error-text']}>* {errors.name}</span>
          )}
        </div>

        <div className={classes['field__creditcard']}>
          <label htmlFor="creditCard">Número de tarjeta</label>
          <input
            id="creditCard"
            name="creditCard"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="xxxx xxxx xxxx xxxx"
            maxLength="16"
            value={values.creditCard}
            onChange={handleChange}
            className={`${errors.creditCard ? classes['error-input'] : ''}`}
          />
          {errors.creditCard && (
            <span className={classes['error-text']}>* {errors.creditCard}</span>
          )}
        </div>

        <div className={classes['field__expiration']}>
          <label htmlFor="expirationDate">F. Expira</label>
          <input
            id="expirationDate"
            name="expirationDate"
            type="text"
            placeholder="MM/AA"
            maxLength="4"
            value={values.expirationDate}
            onChange={handleChange}
            className={`${errors.expirationDate ? classes['error-input'] : ''}`}
          />
          {errors.expirationDate && (
            <span className={classes['error-text']}>
              * {errors.expirationDate}
            </span>
          )}
        </div>

        <div className={classes['field__security-code']}>
          <label htmlFor="securityCode">CVC</label>
          <input
            id="securityCode"
            name="securityCode"
            type="text"
            maxLength="3"
            value={values.securityCode}
            onChange={handleChange}
            className={`${errors.securityCode ? classes['error-input'] : ''}`}
          />
          {errors.securityCode && (
            <span className={classes['error-text']}>
              * {errors.securityCode}
            </span>
          )}
        </div>

        <button className={classes['form__button']}>
          Pagar {plan.currency + plan.price}.00
        </button>
      </form>

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
  );
};

export default Datos;
