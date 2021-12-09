import { useSelector, useDispatch } from 'react-redux';
import { setDisplay } from '../../../actions';

import './styles.scss';

const LoggedMenu = () => {
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.user.name);

  const handleLinkClick = (name) => {
    dispatch(setDisplay(name));
  };
  return (
    <div className="logged-menu">
      <span className="logged-menu__username">{nickname}</span>
      <button
        type="button"
        onClick={
        () => {
          handleLinkClick('connectedMenu');
        }
      }
      >
        <span className="logged-menu__text sr-only">Menu</span>
        <span className="logged-menu__icon header-app__icon"><i className="fas fa-user" /></span>
      </button>
    </div>
  );
};

export default LoggedMenu;
