import './styles.scss';

const MenuList = () => (
  <div className="menu-list">
    <div className="menu-list__close-icon">
        <i class="fas fa-times"></i>
    </div>
    <ul className="menu-list__list">
        <li className="menu-list__item">Ceci est un item</li>
        <li className="menu-list__item">Ceci est un item</li>
        <li className="menu-list__item">Ceci est un item</li>
        <li className="menu-list__item">Ceci est un item</li>
    </ul>
  </div>
);

export default MenuList;
