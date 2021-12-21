import { Navigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFieldValue, changePasswordAttempt, setFormSentState } from '../../actions';

import './styles.scss';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.logged);
  const oldPasswordValue = useSelector((state) => state.user.oldPasswordValue);
  const newPasswordValue = useSelector((state) => state.user.newPasswordValue);
  const newPasswordConfirmValue = useSelector((state) => state.user.newPasswordConfirmValue);
  const isSubmitted = useSelector((state) => state.display.changePasswordForm.sent);
  const isError = useSelector((state) => state.display.changePasswordForm.error);

  const handleInputOldPasswordChange = (event) => {
    dispatch(setFieldValue('oldPasswordValue', event.target.value));
  };

  const handleInputNewPasswordChange = (event) => {
    dispatch(setFieldValue('newPasswordValue', event.target.value));
  };

  const handleInputNewPasswordConfirmChange = (event) => {
    dispatch(setFieldValue('newPasswordConfirmValue', event.target.value));
  };

  const handleChangePasswordFormSubmit = (event) => {
    event.preventDefault();
    dispatch(changePasswordAttempt());
  };

  const handleAccountLinkClick = () => {
    dispatch(setFormSentState('changePasswordForm', false));
  };

  return (
    <div className="change-password-page">

      {!isLogged && <Navigate to="/connexion" />}

      {!isSubmitted
      && (
      <form autoComplete="off" className="change-password-page__form" onSubmit={handleChangePasswordFormSubmit}>

        <label className="change-password-page__label" htmlFor="oldPassword">
          <span className="sr-only">Ancien mot de passe</span>
          <input
            className="change-password-page__input"
            type="password"
            name="password"
            id="password"
            placeholder="Ancien mot de passe"
            value={oldPasswordValue}
            onChange={handleInputOldPasswordChange}
          />
        </label>

        <label className="change-password-page__label" htmlFor="newPassword">
          <span className="sr-only">Nouveau mot de passe</span>
          <input
            className="change-password-page__input"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Nouveau mot de passe"
            minLength={8}
            value={newPasswordValue}
            onChange={handleInputNewPasswordChange}
          />
        </label>

        <label className="change-password-page__label" htmlFor="newPassword-confirm">
          <span className="sr-only">Confirmez le nouveau mot de passe</span>
          <input
            className="change-password-page__input"
            type="password"
            name="newPasswordconfirm"
            id="newPasswordconfirm"
            placeholder="Confirmez votre nouveau mot de passe"
            value={newPasswordConfirmValue}
            onChange={handleInputNewPasswordConfirmChange}
          />
        </label>

        {isError && <p className="change-password-page__error">Erreur survenue lors de l'envoi. Veillez vérifier vos champs.</p>}

        <button
          type="submit"
          className="change-password-page__save"
        >
          Sauvegarder
        </button>
      </form>
      )}

      {isSubmitted
        && (
        <div className="change-password-page__validation">
          <p className="change-password-page__validation-title">
            Mot de passe modifié !
          </p>
          <p className="change-password-page__validation-subtext">
            Votre mot de passe a bien été modifié.
          </p>
          <Link to="/mon-compte">
            <button
              type="submit"
              className="change-password-page__account"
              onClick={handleAccountLinkClick}
            >
              Retourner sur mon compte
            </button>
          </Link>
        </div>
        )}
    </div>
  );
};

export default ChangePassword;
