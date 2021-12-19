// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { setFieldValue, loginAttempt } from '../../actions';

import './styles.scss';

const LoginPage = () => {
  const isLogged = useSelector((state) => state.user.logged);
  const emailValue = useSelector((state) => state.user.emailValue);
  const passwordValue = useSelector((state) => state.user.passwordValue);
  const isError = useSelector((state) => state.display.connexionForm.error);
  console.log(isError);

  const dispatch = useDispatch();

  const handleInputEmailChange = (event) => {
    dispatch(setFieldValue('emailValue', event.target.value));
  };

  const handleInputPasswordChange = (event) => {
    dispatch(setFieldValue('passwordValue', event.target.value));
  };

  const handleConnexionFormSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAttempt());
  };

  return (
    <div className="login-page">

      {isLogged && <Navigate to="/" />}

      <form autoComplete="off" className="login-page__form" onSubmit={handleConnexionFormSubmit}>
        <label htmlFor="email">
          <input
            className="login-page__input"
            type="email"
            name="email"
            id="email"
            placeholder="Adresse mail"
            value={emailValue}
            onChange={handleInputEmailChange}
          />
        </label>
        <label htmlFor="password">
          <span className="sr-only">Mot de Passe</span>
          <input
            className="login-page__input"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={passwordValue}
            onChange={handleInputPasswordChange}
          />
        </label>

        {isError && <p className="register-page__error">Erreur dans votre email ou votre mot de passe</p>}

        <button
          type="submit"
          className="login-page__connexion"
        >
          Connexion
        </button>
      </form>

      <p className="login-page__forgotten">
        <Link to="/reinitialisation">Mot de passe oublié</Link>
      </p>

      <p className="login-page__account">
        Si vous n'avez pas de compte, vous pouvez vous inscrire :
      </p>

      <Link to="/inscription">
        <button
          type="submit"
          className="login-page__subscription"
        >
          Inscription
        </button>
      </Link>

    </div>
  );
};

export default LoginPage;
