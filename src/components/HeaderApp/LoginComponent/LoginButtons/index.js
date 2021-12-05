import './styles.scss';

const LoginButtons = () => (
  <div className="login-buttons">
    <button className="login-buttons__button login-buttons__button--signin" type="button">Connexion</button>
    <button className="login-buttons__button login-buttons__button--signup" type="button">Inscription</button>
  </div>
);

export default LoginButtons;
