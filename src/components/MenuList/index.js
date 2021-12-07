import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setDisplay } from '../../actions';

import './styles.scss';

const MenuList = ({ linksList, menuName, isMenuOpen }) => {
  const dispatch = useDispatch();
  const handleCloseIconClick = (name) => {
    dispatch(setDisplay(name));
  };

  const className = isMenuOpen ? 'menu-list menu-list--open' : 'menu-list';

  return (
    <div className={className}>
      <button
        type="button"
        className="menu-list__close-icon"
        onClick={
            () => {
              handleCloseIconClick(menuName);
            }
          }
      >
        <i className="fas fa-times" />
      </button>
      <ul className="menu-list__list">
        {linksList.map((link) => (
          <li className="menu-list__item">
            <NavLink
              key={link.slug}
              to={link.slug}
              onClick={
                () => {
                  handleCloseIconClick(menuName);
                }
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

MenuList.propTypes = {
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  menuName: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MenuList;
