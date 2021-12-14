import PropTypes from 'prop-types';
import './styles.scss';

const MusicPreview = ({
  id, title, categories, handleSetMusic,
}) => (
  <button
    type="button"
    className="music-preview"
    onClick={
      () => {
        handleSetMusic(id);
      }
    }
  >
    <h2 className="music-preview__title">{title}</h2>
    <div className="music-preview__categories">
      {categories.map(
        (category) => (<span key={category.id} className="music-preview__category">{category.name}</span>),
      )}
    </div>
  </button>
);

MusicPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  handleSetMusic: PropTypes.func.isRequired,
};

export default MusicPreview;
