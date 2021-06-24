import React from 'react';
import classes from './Form.module.css';

const Form = ({ values, errors, handleChange, handleSubmit, plan }) => {
  return (
    <React.Fragment>
      <h1 className={classes['form__title']}>
        Completa el siguiente formulario con tus datos!
      </h1>
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
    </React.Fragment>
  );
};

export default Form;
