import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';

const ReactFormValidation3 = ({}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (form) => {
    alert(`Multiple validation Input: ${form.mulitpleValidation}`);
  };

  return (
    <form className="ReactFormValidation3" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        name="mulitpleValidation"
        type="text"
        ref={register({
          maxLength: {
            value: 20,
            message: 'The input is too long 🤟',
          },
          validate: {
            isEmail: (value) => validator.isEmail(value) || 'Not a valid email 📧',
          },
          pattern: {
            value: /^[A-Za-z@.]+$/,
            message: 'Input can not contain numbers',
          },
        })}
      />
      {errors.mulitpleValidation && (
        <p>{errors.mulitpleValidation.message}</p>
      )}
    </form>
  );
};

export default ReactFormValidation3;


const ReactFormValidation = ({}) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (form) => {
      alert(`Required Input: ${form.requiredInput}`);
    };

    return (
      <form className="ReactFormValidation" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="requiredInput"
          type="text"
          ref={register({ required: true })}
        />
        {errors.requiredInput && (
          <p>{`Input field "${errors.requiredInput.ref.name}" is required 🐑`}</p>
        )}
      </form>
    );
};

export ReactFormValidation;