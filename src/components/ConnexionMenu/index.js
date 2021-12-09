import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setDisplay } from '../../actions';

import Modal from '../Modal';

import './styles.scss';

const ConnexionMenu = () => {
  const isConnexionMenuOpen = useSelector((state) => state.display.connexionMenu);

  const dispatch = useDispatch();
  const handleLinkClick = () => {
    dispatch(setDisplay('connexionMenu'));
  };

  return (
    <Modal componentName="connexionMenu" isComponentOpen={isConnexionMenuOpen}>
      <ul className="connexion-menu__list">
        <li className="connexion-menu__item">
          <NavLink
            to="/connexion"
            onClick={handleLinkClick}
          >
            Connexion
          </NavLink>
        </li>
        <li className="connexion-menu__item">
          <NavLink
            to="/inscription"
            onClick={handleLinkClick}
          >
            Inscription
          </NavLink>
        </li>
      </ul>
    </Modal>
  );
};

export default ConnexionMenu;
