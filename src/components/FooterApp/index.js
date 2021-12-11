import './styles.scss';
import { NavLink } from 'react-router-dom';

const FooterApp = () => (
  <footer>
    <nav>
      <ul className="nav--list">
        <li className="nav--listItem"><NavLink to="/contact">Nous contacter</NavLink></li>
        <li className="nav--listItem"><NavLink to="/notre-equipe">Notre équipe</NavLink></li>
        <li className="nav--listItem"><NavLink to="/mentions-legales">Mentions Légales</NavLink></li>
      </ul>
    </nav>
  </footer>
);

export default FooterApp;
