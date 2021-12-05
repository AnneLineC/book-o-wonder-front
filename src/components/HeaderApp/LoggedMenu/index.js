import './styles.scss';

const LoggedMenu = () => (
  <div className="logged-menu">
    <span class="logged-menu__username">Monnomici</span>
    <span class="logged-menu__text sr-only">Menu</span>
    <span class="logged-menu__icon header-app__icon"><i class="fas fa-user"></i></span>
  </div>
);

export default LoggedMenu;
