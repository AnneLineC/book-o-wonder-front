import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setFieldValue, resetPasswordAttempt } from '../../actions';

import './styles.scss';

const ResetPassword = (props) => {
  const dispatch = useDispatch();

  const newPasswordValue = useSelector((state) => state.user.newPasswordValue);
  const newPasswordConfirmValue = useSelector((state) => state.user.newPasswordConfirmValue);

  const handleInputNewPasswordReset = (event) => {
    dispatch(setFieldValue('newPasswordValue', event.target.value));
  };

  const handleInputNewPasswordConfirmReset = (event) => {
    dispatch(setFieldValue('newPasswordConfirmValue', event.target.value));
  };

  const handleChangePasswordFormSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPasswordAttempt());
  };

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  const token

  const URLToken = props.location.search;

  const extractParamsUrl = (chaineGET) => {
    chaineGET = chaineGET.split('&');
    const result = {};

    chaineGET.forEach((el) => {
      const param = el.split('=');
      param[0] = param[0].replace('?', '');
      result[param[0]] = param[1];
    });

    return result;
  };

  const token = extractParamsUrl(URLToken);
  console.log(props.location.search);

  return (
    <div className="reset-password-page">
      <h1 className="reset-password-page__title">Réinitialisation du mot de passe</h1>

      <form autoComplete="off" className="register-page__form" onSubmit={handleChangePasswordFormSubmit}>

        <label className="reset-password-page__label" htmlFor="newPassword-confirm">
          <span className="sr-only">Nouveau mot de passe</span>
          <input
            className="reset-password-page__input"
            type="password"
            name="newPasswordconfirm"
            id="newPasswordconfirm"
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

        <button
          type="submit"
          className="reset-password__reset-password"
        >
          Réinitialiser
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
