import LoginButtons from './LoginButtons';
import './styles.scss';

const LoginComponent = () => (
  <div className="login-component">
    <LoginButtons />
    <div className="login-menu">
        <span class="login-menu__icon"><i class="far fa-user"></i></span>
        <span class="login-menu__text">Connexion</span>
    </div>
  </div>
);

export default LoginComponent;
