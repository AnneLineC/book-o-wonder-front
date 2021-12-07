import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../actions';

import './styles.scss';

const Modal = ({ componentName, isComponentOpen, children }) => {
  const dispatch = useDispatch();
  const handleCloseIconClick = (name) => {
    dispatch(setDisplay(name));
  };

  const className = isComponentOpen ? 'menu-list menu-list--open' : 'menu-list';

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

Modal.propTypes = {
  componentName: PropTypes.string.isRequired,
  isComponentOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
