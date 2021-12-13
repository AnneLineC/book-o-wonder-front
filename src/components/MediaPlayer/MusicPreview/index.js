import PropTypes from 'prop-types';
import './styles.scss';

const MusicPreview = ({ title, category }) => (
  <div className="music-preview">
    <h2 className="music-preview__title">{title}</h2>
    <span className="music-preview__category">{category}</span>
  </div>
);

MusicPreview.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default MusicPreview;
