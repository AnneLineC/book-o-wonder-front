import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './styles.scss';

const MenuList = ({ linksList }) => (
  <div className="menu-list">
    <div className="menu-list__close-icon">
        <i class="fas fa-times"></i>
    </div>
    <ul className="menu-list__list">
      {linksList.map((link) => (
        <li className="menu-list__item">
          <NavLink 
            key={link.slug}
            to={`/${link.slug}`} 
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

MenuList.propTypes = {
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

export default MenuList;
