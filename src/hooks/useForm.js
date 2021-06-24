import { useState } from 'react';
import validateForm from './validateForm';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    creditCard: '',
    expirationDate: '',
    securityCode: '',
    submitted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (values.submitted === true) {
      setErrors(validateForm(values));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({
      ...values,
      submitted: true,
    })

    setErrors(validateForm(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
