import PropTypes from 'prop-types';
import './styles.scss';

const MusicPreview = ({ title, categories }) => (
  <div className="music-preview">
    <h2 className="music-preview__title">{title}</h2>
    <div className="music-preview__categories">
      {categories.map(
        (category) => (<span className="music-preview__category">{category.name}</span>)
      )}
    </div>
  </div>
);

MusicPreview.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired,
};

export default MusicPreview;
