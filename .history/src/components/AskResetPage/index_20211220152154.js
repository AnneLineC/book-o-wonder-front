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
      {!isSubmitted
      && (
        <div>
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

        {isError && <p className="ask-reset-page__error">Erreur survenue lors de l'envoi. Veillez vérifier vos champs (adresse mail correcte, et bien inscrit).</p>}
       
        <button
          type="submit"
          className="ask-reset-page__ask-reset"
        >
          Envoyer
        </button>
      </form>
      </div>
      )}

      {isSubmitted
      && (
      <div className="ask-reset-page__validation">
        <p className="ask-reset-page__validation-title">
          Email envoyé !
        </p>
        <p className="ask-reset-page__validation-subtext">
          Un email de réinitialisation de votre mot de passe vous a été envoyé à l'adresse <span className="ask-reset-page__validation-mail">{emailValue}</span>
        </p>
        <Link to="/">
          <button
            type="submit"
            className="ask-reset-page__connexion"
          >
            Retour à l'accueil
          </button>
        </Link>
      </div>
      )}
    </div>
  );
};

export default AskReset;
