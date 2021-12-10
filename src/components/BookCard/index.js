import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
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

const BookCard = ({ picture }) => {
  const baseURI = useSelector((state) => (state.display.baseURI));
  return (
    <div
      className="bookcard"
      style={{ backgroundImage: `url("${baseURI}/images_book_folder/${picture}")` }}
    />
  );
};

BookCard.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default BookCard;
