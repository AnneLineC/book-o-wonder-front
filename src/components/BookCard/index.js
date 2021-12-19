import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './styles.scss';

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
