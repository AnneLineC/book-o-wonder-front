import './styles.scss';
import { Link } from "react-router-dom"

const FooterApp = () => (
  <footer>
    <ul>
        <ol><a href=""></a>Nous contacter</ol>
        <ol><a href=""></a>Notre équipe</ol>
        <ol><a href=""></a>Mentions Légales</ol>

        <Link to="/Nous_contacter">Mentions Légales</Link>
        <Link to="/Notre_">Mentions Légales</Link>
        <Link to="/Mentions_Legales">Mentions Légales</Link>
    </ul>
  </footer>
);

export default FooterApp;