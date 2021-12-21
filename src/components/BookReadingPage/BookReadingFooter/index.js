import PropTypes from 'prop-types';
import './styles.scss';

const BookReadingFooter = ({ changeFontSize, fontSize }) => (
  <div className="book-reading-footer">
    <div className="font-size">
      <button type="button" className="font-size__button" onClick={() => changeFontSize(Math.max(80, fontSize - 10))}>-</button>
      <span>{fontSize}%</span>
      <button type="button" className="font-size__button" onClick={() => changeFontSize(Math.min(180, fontSize + 10))}>+</button>
    </div>
  </div>
);

BookReadingFooter.propTypes = {
  changeFontSize: PropTypes.func.isRequired,
  fontSize: PropTypes.number.isRequired,
};

export default BookReadingFooter;
