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

      {!isSubmitted
      && (
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

        {isError && <p className="register-page__error">Erreur survenue lors de l'envoi. Veillez vérifier vos champs.</p>}
       
        <button
          type="submit"
          className="ask-reset-page__ask-reset"
        >
          Envoyer
        </button>
      </form>
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

export default AskReset;
