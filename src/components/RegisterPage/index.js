import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, loginAttempt, registerAttempt } from '../../actions';

import './styles.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const nicknameValue = useSelector((state) => state.user.nicknameValue);
  const emailValue = useSelector((state) => state.user.emailValue);
  const passwordValue = useSelector((state) => state.user.passwordValue);
  const passwordConfirmValue = useSelector((state) => state.user.passwordConfirmValue);

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

  const handleConnexionFormSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAttempt());
  };

  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAttempt());
  };

  return (
    <div className="register-page">

      <form autoComplete="off" className="register-page__form">

        <label className="register-page__label" htmlFor="pseudo">Pseudo</label>
        <input
          className="register-page__input"
          type="text"
          name="nickname"
          id="nickname"
          placeholder=""
          value={nicknameValue}
          onChange={handleInputNicknameChange}
        />

        <label className="register-page__label" htmlFor="email">Adresse Mail</label>
        <input
          className="register-page__input"
          type="email"
          name="email"
          id="email"
          placeholder=""
          value={emailValue}
          onChange={handleInputEmailChange}
        />

        <label className="register-page__label" htmlFor="password">Mot de Passe</label>
        <input
          className="register-page__input"
          type="password"
          name="password"
          id="password"
          placeholder=""
          value={passwordValue}
          onChange={handleInputPasswordChange}
        />

        <label className="register-page__label" htmlFor="password-confirm">Confirmation du mot de passe</label>
        <input
          className="register-page__input"
          type="password"
          name="passwordconfirm"
          id="passwordconfirm"
          placeholder=""
          value={passwordConfirmValue}
          onChange={handleInputPasswordConfirmChange}
        />

        <button
          type="submit"
          className="register-page__register"
          onSubmit={handleRegisterFormSubmit}
        >
          Inscription
        </button>

      </form>

      <p className="register-page__connect">
        Si vous avez déjà un compte, vous pouvez vous connecter :
      </p>

      <button
        type="submit"
        className="register-page__connexion"
        onSubmit={handleConnexionFormSubmit}
      >
        Connexion
      </button>

    </div>
  );
};

export default RegisterPage;
