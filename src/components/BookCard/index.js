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

const BookCard = ({ picture }) => (
  <div
    className="bookcard"
    // style={{ backgroundImage: `url("../../docs/images/${picture}")` }}
    style={{ backgroundImage: 'url("{picture} ")' }}
  />
);

BookCard.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default BookCard;
