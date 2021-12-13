import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setDisplay } from '../../actions';

import Modal from '../Modal';

import './styles.scss';

const ConnexionMenu = () => {
  const dispatch = useDispatch();
  const isConnectedMenuOpen = useSelector((state) => state.display.connectedMenu);

  const handleLinkClick = () => {
    dispatch(setDisplay('connectedMenu'));
  };

  const handleDeconnexionClick = () => {
    // TODO : action et reducer pour remettre le currentUser à null
    dispatch();
  };

  const baseURI = useSelector((state) => (state.display.baseURI));

  return (
    <Modal componentName="connectedMenu" isComponentOpen={isConnectedMenuOpen}>
      <ul className="connected-menu__list">
        <li className="connected-menu__item">
          <NavLink
            to="/mon-compte"
            onClick={handleLinkClick}
          >
            Mon compte
          </NavLink>
        </li>
        <li className="connected-menu__item">
          <NavLink
            to="/inscription"
            onClick={handleDeconnexionClick}
          >
            Deconnexion
          </NavLink>
        </li>
        <li className="connected-menu__item">
          <a
            href={`${baseURI}/`}
            onClick={handleLinkClick}
          >
            Administration (admin)
          </a>
        </li>
      </ul>
    </Modal>
  );
};

export default ConnexionMenu;
