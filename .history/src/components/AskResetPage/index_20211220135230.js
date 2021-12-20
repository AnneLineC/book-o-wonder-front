import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFieldValue, askResetAttempt } from '../../actions';

import './styles.scss';

const AskReset = () => {
  const dispatch = useDispatch();

  const emailValue = useSelector((state) => state.user.emailValue);
  const isSubmitted = useSelector((state) => state.display.registerForm.sent);
  const isError = useSelector((state) => state.display.registerForm.error);

  const handleInputEmail = (event) => {
    dispatch(setFieldValue('emailValue', event.target.value));
  };

  const handleAskResetPasswordFormSubmit = (event) => {
    event.preventDefault();
    dispatch(askResetAttempt());
  };

  return (
    <div className="ask-reset-page">
      <h1 className="ask-reset-page__title">Demande de réinitialisation de mot de passe</h1>
      <p className="ask-reset-page__content">Un email vous sera envoyé (si vous êtes inscrit) pour réinitialiser votre mot de passe.</p>

      <form autoComplete="off" className="ask-reset-page__form" onSubmit={handleAskResetPasswordFormSubmit}>

        <label className="ask-reset-page__label" htmlFor="email">
          <span className="sr-only">Votre adresse mail</span>
          <input
            className="ask-reset-page__input"
            type="email"
            name="email"
            id="email"
            placeholder="Votre adresse mail"
            value={emailValue}
            onChange={handleInputEmail}
          />
        </label>

        <button
          type="submit"
          className="ask-reset-page__ask-reset"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default AskReset;
