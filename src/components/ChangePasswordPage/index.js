import { Navigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, changePasswordAttempt } from '../../actions';

import './styles.scss';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.logged);
  const passwordValue = useSelector((state) => state.user.passwordValue);
  const newPasswordValue = useSelector((state) => state.user.newPasswordValue);
  const newPasswordConfirmValue = useSelector((state) => state.user.newPasswordConfirmValue);

  const handleInputOldPasswordChange = (event) => {
    dispatch(setFieldValue('passwordValue', event.target.value));
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

  return (
    <div className="change-password-page">

      {!isLogged && <Navigate to="/connexion" />}

      <form autoComplete="off" className="register-page__form" onSubmit={handleChangePasswordFormSubmit}>

        <label className="change-password-page__label" htmlFor="oldPassword">
          <span className="sr-only">Ancien mot de passe</span>
          <input
            className="change-password-page__input"
            type="password"
            name="password"
            id="password"
            placeholder="Ancien mot de passe"
            value={passwordValue}
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

        <button
          type="submit"
          className="change-password-page__change-password"
        >
          Sauvegarder
        </button>

        <button
          type="submit"
          className="change-password-page__save"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
