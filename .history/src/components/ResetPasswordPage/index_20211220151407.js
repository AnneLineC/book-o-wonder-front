import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { setFieldValue, resetPasswordAttempt } from '../../actions';

import './styles.scss';

const ResetPassword = () => {
  const { token } = useParams();

  const dispatch = useDispatch();

  const newPasswordValue = useSelector((state) => state.user.newPasswordValue);
  const newPasswordConfirmValue = useSelector((state) => state.user.newPasswordConfirmValue);
  const isSubmitted = useSelector((state) => state.display.registerForm.sent);
  const isError = useSelector((state) => state.display.registerForm.error);

  const handleInputNewPasswordReset = (event) => {
    dispatch(setFieldValue('newPasswordValue', event.target.value));
  };

  const handleInputNewPasswordConfirmReset = (event) => {
    dispatch(setFieldValue('newPasswordConfirmValue', event.target.value));
  };

  const handleChangePasswordFormSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPasswordAttempt(token));
  };

  return (
    <div className="reset-password-page">
      {!isSubmitted
      && (
      <div>
      <h1 className="reset-password-page__title">RĂ©initialisation du mot de passe</h1>

      <form autoComplete="off" className="reset-password-page__form" onSubmit={handleChangePasswordFormSubmit}>

        <label className="reset-password-page__label" htmlFor="newPassword-confirm">
          <span className="sr-only">Nouveau mot de passe</span>
          <input
            className="reset-password-page__input"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Nouveau mot de passe"
            value={newPasswordValue}
            onChange={handleInputNewPasswordReset}
          />
        </label>

        <label className="reset-password-page__label" htmlFor="newPassword-confirm">
          <span className="sr-only">Confirmez le nouveau mot de passe</span>
          <input
            className="reset-password-page__input"
            type="password"
            name="newPasswordconfirm"
            id="newPasswordconfirm"
            placeholder="Confirmez votre nouveau mot de passe"
            value={newPasswordConfirmValue}
            onChange={handleInputNewPasswordConfirmReset}
          />
        </label>

        {isError && <p className="register-page__error">Erreur survenue lors de l'envoi. Veillez vĂ©rifier vos champs.</p>}

        <button
          type="submit"
          className="reset-password-page__reset-password"
        >
          RĂ©initialiser
        </button>
      </form>
      </div>
      )}

      {isSubmitted
        && (
        <div className="reset-password-page__validation">
          <p className="reset-password-page__validation-title">
            Merci de votre inscription !
          </p>
          <p className="reset-password-page__validation-subtext">
            Un email de confirmation vous a Ă©tĂ© envoyĂ© Ă  l'adresse <span className="reset-password-page__validation-mail">{emailValue}</span>
          </p>
          <Link to="/connexion">
            <button
              type="submit"
              className="reset-password-page__connexion"
            >
              Se connecter
            </button>
          </Link>
        </div>
        )}

    </div>
  );
};

export default ResetPassword;
