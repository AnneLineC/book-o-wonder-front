/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setFieldValue, registerAttempt } from '../../actions';

import './styles.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const nicknameValue = useSelector((state) => state.user.nicknameValue);
  const emailValue = useSelector((state) => state.user.emailValue);
  const passwordValue = useSelector((state) => state.user.passwordValue);
  const passwordConfirmValue = useSelector((state) => state.user.passwordConfirmValue);
  const isSubmitted = useSelector((state) => state.display.registerForm.sent);
  const isError = useSelector((state) => state.display.registerForm.error);

  const handleInputNicknameChange = (event) => {
    dispatch(setFieldValue('nicknameValue', event.target.value));
  };

  const handleInputEmailChange = (event) => {
    dispatch(setFieldValue('emailValue', event.target.value));
  };

  const handleInputPasswordChange = (event) => {
    dispatch(setFieldValue('passwordValue', event.target.value));
  };

  const handleInputPasswordConfirmChange = (event) => {
    dispatch(setFieldValue('passwordConfirmValue', event.target.value));
  };

  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAttempt());
  };

  return (

    <div className="register-page">

      {!isSubmitted
      && (
      <div>
        <form autoComplete="off" className="register-page__form" onSubmit={handleRegisterFormSubmit}>

          <label className="register-page__label" htmlFor="pseudo">
            <span className="sr-only">Pseudo</span>
            <input
              className="register-page__input"
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Pseudo"
              value={nicknameValue}
              onChange={handleInputNicknameChange}
            />
          </label>

          <label className="register-page__label" htmlFor="email">
            <span className="sr-only">Adresse Mail</span>
            <input
              className="register-page__input"
              type="email"
              name="email"
              id="email"
              placeholder="Adresse mail"
              value={emailValue}
              onChange={handleInputEmailChange}
            />
          </label>

          <label className="register-page__label" htmlFor="password">
            <span className="sr-only">Mot de passe</span>
            <input
              className="register-page__input"
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              minLength={8}
              value={passwordValue}
              onChange={handleInputPasswordChange}
            />
          </label>

          <label className="register-page__label" htmlFor="password-confirm">
            <span className="sr-only">Confirmez le mot de passe</span>
            <input
              className="register-page__input"
              type="password"
              name="passwordconfirm"
              id="passwordconfirm"
              placeholder="Confirmez votre mot de passe"
              value={passwordConfirmValue}
              onChange={handleInputPasswordConfirmChange}
            />
          </label>

          {isError && <p className="register-page__error">Erreur survenue lors de l'envoi. Veillez vérifier vos champs.</p>}

          <button
            type="submit"
            className="register-page__register"
          >
            Inscription
          </button>

        </form>

        <p className="register-page__connect">
          Si vous avez déjà un compte, vous pouvez vous connecter :
        </p>

        <Link to="/connexion">
          <button
            type="submit"
            className="register-page__connexion"
          >
            Connexion
          </button>
        </Link>
      </div>
      )}

      {isSubmitted
        && (
        <div className="register-page__validation">
          <p className="register-page__validation-title">
            Merci de votre inscription !
          </p>
          <p className="register-page__validation-subtext">
            Un email de confirmation vous a été envoyé à l'adresse <span className="register-page__validation-mail">{emailValue}</span>
          </p>
          <Link to="/connexion">
            <button
              type="submit"
              className="register-page__connexion"
            >
              Se connecter
            </button>
          </Link>
        </div>
        )}

    </div>
  );
};

export default RegisterPage;
