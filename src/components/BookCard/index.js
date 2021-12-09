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
    style={{ backgroundImage: 'url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/willful-sin-dangers-design-template-3a668d6f61992e49d7e9308fb68044af_screen.jpg?ts=1637039339")' }}
  />
);

BookCard.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default BookCard;
