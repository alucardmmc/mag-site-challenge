import { useEffect, useState } from 'react';
import validateForm from './validateForm';

const useForm = (validate, callback) => {
  const [values, setValues] = useState({
    name: '',
    creditCard: '',
    expirationDate: '',
    securityCode: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(values));
    setSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      callback();
    }
  }, [errors, submitted, callback])

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
