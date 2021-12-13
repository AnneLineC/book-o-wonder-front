import PropTypes from 'prop-types';
import './styles.scss';

const BookReadingFooter = ({ changeSize, size }) => (
  <div className="book-reading-footer">
    <div className="font-size">
      <button type="button" className="font-size__button" onClick={() => changeSize(Math.max(80, size - 10))}>-</button>
      <span>{size}%</span>
      <button type="button" className="font-size__button" onClick={() => changeSize(Math.min(130, size + 10))}>+</button>
    </div>
  </div>
);

BookReadingFooter.propTypes = {
  changeSize: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

export default BookReadingFooter;
