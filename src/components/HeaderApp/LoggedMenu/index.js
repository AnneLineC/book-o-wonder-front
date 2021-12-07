import './styles.scss';

const LoggedMenu = () => (
  <div className="logged-menu">
    <span className="logged-menu__username">Monnomici</span>
    <button type="button">
      <span className="logged-menu__text sr-only">Menu</span>
      <span className="logged-menu__icon header-app__icon"><i className="fas fa-user" /></span>
    </button>
  </div>
);

export default LoggedMenu;
