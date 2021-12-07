import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../actions';

import './styles.scss';

const Modal = ({ componentName, isComponentOpen, appearingDesktopSide, children }) => {
  const dispatch = useDispatch();
  const handleCloseIconClick = (name) => {
    dispatch(setDisplay(name));
  };

  const classNameBySide = appearingDesktopSide === 'left' ? 'menu-list menu-list--left' : 'menu-list';
  const className = isComponentOpen ? `${classNameBySide} menu-list--open` : classNameBySide;

  return (
    <div className={className}>
      <button
        type="button"
        className="menu-list__close-icon"
        onClick={
            () => {
              handleCloseIconClick(componentName);
            }
          }
      >
        <i className="fas fa-times" />
      </button>
      {children}
    </div>
  );
};

Modal.defaultProps = {
  appearingDesktopSide: 'right',
};

Modal.propTypes = {
  componentName: PropTypes.string.isRequired,
  isComponentOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  appearingDesktopSide: PropTypes.string,
};

export default Modal;
