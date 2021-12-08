import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setDisplay } from '../../actions';

import Modal from '../Modal';

import './styles.scss';

const CategoriesMenu = () => {
  const dispatch = useDispatch();
  const isCategoriesMenuOpen = useSelector((state) => state.display.categoriesMenu);
  const categoriesList = useSelector((state) => state.display.categoriesList);

  const handleLinkClick = () => {
    dispatch(setDisplay('categoriesMenu'));
  };

  return (
    <Modal componentName="categoriesMenu" appearingDesktopSide="left" isComponentOpen={isCategoriesMenuOpen}>
      <ul className="categories-menu__list">
        {
          categoriesList.map(
            (category) => (
              <li className="categories-menu__item">
                <NavLink
                  to={`/category/${category.id}`}
                  onClick={handleLinkClick}
                >
                  {category.label}
                </NavLink>
              </li>
            ),
          )
        }

      </ul>
    </Modal>
  );
};

export default CategoriesMenu;
