// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFieldValue, loginAttempt } from '../../actions';

import './styles.scss';

const LoginPage = () => {
  const emailValue = useSelector((state) => state.user.emailValue);
  const passwordValue = useSelector((state) => state.user.passwordValue);

  const dispatch = useDispatch();

  const handleInputEmailChange = (event) => {
    dispatch(setFieldValue('emailValue', event.target.value));
  };

  const handleInputPasswordChange = (event) => {
    dispatch(setFieldValue('passwordValue', event.target.value));
  };

  const handleConnexionFormSubmit = (event) => {
    event.preventDefault();
    console.log('handler OK');
    dispatch(loginAttempt());
  };

  return (
    <div className="login-page">

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

        <button
          type="submit"
          className="login-page__connexion"
        >
          Connexion
        </button>
      </form>

      <p className="login-page__forgotten">
        Si vous avez oublié votre mot de passe,
        <br />
        <a href="#">contactez les administrateurs</a>
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

// LoginPage.defaultProps = {
//     type: 'text',
// }

// LoginPage.propTypes = {
//     type: PropTypes.string,
//     placeholder: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }

export default LoginPage;
