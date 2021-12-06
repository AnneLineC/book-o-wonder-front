import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setDisplay } from '../../actions';

import './styles.scss';

const MenuList = ({ linksList, menuName, isMenuOpen }) => {
  const dispatch = useDispatch();
  const handleCloseIconClick = (menuName) => {
    dispatch(setDisplay(menuName));
  }

  const className = isMenuOpen ? "menu-list menu-list--open" : "menu-list";

  return (
    <div className={className}>
      <button 
        type="button"
        className="menu-list__close-icon"
        onClick={
            () => {handleCloseIconClick(menuName)}
          }
      >
          <i class="fas fa-times"></i>
      </button>
      <ul className="menu-list__list">
        {linksList.map((link) => (
          <li className="menu-list__item">
            <NavLink 
              key={link.slug}
              to={link.slug}
              onClick={
                () => {handleCloseIconClick(menuName)}
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
)};

MenuList.propTypes = {
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

export default MenuList;
