import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderApp from '../HeaderApp';
import LoginPage from '../LoginPage';
import ContactPage from '../ContactPage';
import MenuList from '../MenuList';
import FooterApp from '../FooterApp';

import './styles.scss';

const App = () => {
  const isConnexionMenuOpen = useSelector((state) => state.display.connexionMenu);
  const isConnectedMenuOpen = useSelector((state) => state.display.connectedMenu);
  const isCategoriesMenuOpen = useSelector((state) => state.display.categoriesMenu);
  const categoriesList = useSelector((state) => state.display.categoriesList);

  return (
    <div className="App">
      <MenuList
        menuName="connexionMenu"
        linksList={[{ label: 'Connexion', slug: '/connexion' }, { label: 'Inscription', slug: '/inscription' }]}
        isMenuOpen={isConnexionMenuOpen}
      />
      <MenuList
        menuName="connectedMenu"
        linksList={[{ label: 'Mon Compte', slug: '/mon-compte' }, { label: 'Deconnexion', slug: '/' }, { label: 'Administration', slug: '/' }]}
        isMenuOpen={isConnectedMenuOpen}
      />
      <MenuList
        menuName="categoriesMenu"
        linksList={categoriesList}
        isMenuOpen={isCategoriesMenuOpen}
      />
      <HeaderApp />
      <Routes>
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterApp />
    </div>
  );
};

export default App;
