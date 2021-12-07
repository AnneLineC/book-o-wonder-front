import { useDispatch } from 'react-redux';
import { setDisplay } from '../../../../actions';

import './styles.scss';

const LoginMenu = () => {
  const dispatch = useDispatch();
  const handleLinkClick = (name) => {
    dispatch(setDisplay(name));
  };
  return (
    <button
      type="button"
      className="login-menu"
      onClick={
      () => {
        handleLinkClick('connexionMenu');
      }
    }
    >
      <span className="login-menu__text sr-only">Menu de connexion</span>
      <span className="login-menu__icon header-app__icon"><i className="far fa-user" /></span>
    </button>
  );
};

export default LoginMenu;
