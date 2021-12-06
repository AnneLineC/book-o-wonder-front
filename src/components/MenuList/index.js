import PropTypes from 'prop-types';

import './styles.scss';

const MenuList = ({ linksList }) => (
  <div className="menu-list">
    <div className="menu-list__close-icon">
        <i class="fas fa-times"></i>
    </div>
    <ul className="menu-list__list">
      {
        linksList.map(
          (link) => (<li className="menu-list__item">{link}</li>)
        )
      }
    </ul>
  </div>
);

MenuList.propTypes = {
  linkList: PropTypes.array.isRequired,
};

export default MenuList;
