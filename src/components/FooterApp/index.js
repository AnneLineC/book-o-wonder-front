import './styles.scss';
import { Link } from "react-router-dom"

const FooterApp = () => (
  <footer>
    <nav>
      <ul class="nav--list">
        <li class="nav--listItem"><a href="#">Nous contacter</a></li>
        <li class="nav--listItem"><a href="#">Notre équipe</a></li>
        <li class="nav--listItem"><a href="#">Mentions Légales</a></li>
      </ul>
    </nav>

        {/*<Link to="/Nous_contacter">Nous contacter</Link>
        <Link to="/Notre_equipe">Notre équipe</Link>
        <Link to="/Mentions_Legales">Mentions Légales</Link>*/}
  </footer>
);

export default FooterApp;