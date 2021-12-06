import './styles.scss';

const LoggedMenu = () => (
  <div className="logged-menu">
    <span class="logged-menu__username">Monnomici</span>
    <button type="button">
      <span class="logged-menu__text sr-only">Menu</span>
      <span class="logged-menu__icon header-app__icon"><i class="fas fa-user"></i></span>
    </button>
  </div>
);

export default LoggedMenu;
