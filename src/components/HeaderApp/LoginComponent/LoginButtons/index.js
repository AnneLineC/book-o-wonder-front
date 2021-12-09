import { NavLink } from 'react-router-dom';
import './styles.scss';

const LoginButtons = () => (
  <div className="login-buttons">
    <NavLink to="/connexion">
      <button
        className="login-buttons__button login-buttons__button--signin"
        type="button"
      >
        Connexion
      </button>
    </NavLink>

    <NavLink to="/inscription">
      <button
        className="login-buttons__button login-buttons__button--signup"
        type="button"
      >
        Inscription
      </button>
    </NavLink>
  </div>
);

export default LoginButtons;
