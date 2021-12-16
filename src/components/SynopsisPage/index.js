import { Link } from 'react-router-dom';
import './styles.scss';

const SynopsisPage = () => (
  <div className="synopsis-page">
    <div className="synopsis-page__cover" />
    <h2 className="synopsis-page__title">Alice au Pays des Merveilles</h2>
    <div className="synopsis-page__recommandations">
      <p className="synopsis-page__recommandations-item"><i className="fas fa-thumbs-up item--up" /><span className="synopsis-page__recommandations-number">3</span></p>
      <p className="synopsis-page__recommandations-item"><i className="fas fa-thumbs-down item--down" /><span className="synopsis-page__recommandations-number">1</span></p>
    </div>
    <Link to={`/livre/1/lecture`}><button className="synopsis-page__reading" type="button">Lecture</button></Link>
    <p className="synopsis-page__extract">Il était une fois au pays de Roméo et Alice, un lapin se promenait en compagnie d'une endive. Il était une fois au pays de Roméo et Alice, un lapin se promenait en compagnie d'une endive.Il était une fois au pays de Roméo et Alice, un lapin se promenait en compagnie d'une endive.Il était une fois au pays de Roméo et Alice, un lapin se promenait en compagnie d'une endive.Il était une fois au pays de Roméo et Alice, un lapin se promenait en compagnie d'une endive.</p>
  </div>
);

export default SynopsisPage;
