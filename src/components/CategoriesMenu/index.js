import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setDisplay, loadCategoriesFromAPI } from '../../actions';

import Modal from '../Modal';

import './styles.scss';

const CategoriesMenu = () => {
  const dispatch = useDispatch();
  const isCategoriesMenuOpen = useSelector((state) => state.display.categoriesMenu);
  const categoriesList = useSelector((state) => state.display.categoriesList);

  useEffect(
    () => {
      dispatch(loadCategoriesFromAPI());
    },
    [],
  );

  const handleLinkClick = () => {
    dispatch(setDisplay('categoriesMenu'));
  };

  return (
    <Modal componentName="categoriesMenu" appearingDesktopSide="left" isComponentOpen={isCategoriesMenuOpen}>
      <ul className="categories-menu__list">
        {
          categoriesList.map(
            (category) => (
              <li key={category.id} className="categories-menu__item">
                <NavLink
                  to={`/categorie/${category.id}`}
                  onClick={handleLinkClick}
                >
                  {category.name}
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
