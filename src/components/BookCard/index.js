import PropTypes from 'prop-types';
import './styles.scss';

// import Favorite from './Favorite'

// const picture = useSelector(state => state.book.picture);

// const BookCard = ({ picture }) => (
//     if (isLogged) {
//         <div className="bookcard" style={`background-image: ${picture}`}>
//             <Favorite />
//         </div>
//     } else {
//         <div className="bookcard" style="background-image:" {picture}>
//         </div>
//     }
// );

// background-image: url("paper.gif");

const BookCard = ({ picture }) => (
  <div
    className="bookcard"
    style={{ backgroundImage: `url("../../docs/images/${picture}")` }}
  >
    {/* Favorite todo */}
  </div>
);

BookCard.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default BookCard;

// Ne pas mettre de flex sur ça !!! uniquement dans le composant parent
// Mettre un flex uniquement pour l'étoile
