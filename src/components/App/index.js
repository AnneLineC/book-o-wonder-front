import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderApp from '../HeaderApp';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import ContactPage from '../ContactPage';
import FooterApp from '../FooterApp';
import ConnexionMenu from '../ConnexionMenu';
import ConnectedMenu from '../ConnectedMenu';
import CategoriesMenu from '../CategoriesMenu';
import SortedBooksPage from '../SortedBooksPage';

import './styles.scss';

const App = () => (
  <div className="App">
    <ConnexionMenu />
    <ConnectedMenu />
    <CategoriesMenu />
    <HeaderApp />
    <SortedBooksPage />
    <Routes>
      <Route path="/connexion" element={<LoginPage />} />
      <Route path="/inscription" element={<RegisterPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <FooterApp />
  </div>
);

export default App;
