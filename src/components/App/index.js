// eslint-disable no-debugger, no-console
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HeaderApp from '../HeaderApp';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import ContactPage from '../ContactPage';
import FooterApp from '../FooterApp';
import ConnexionMenu from '../ConnexionMenu';
import ConnectedMenu from '../ConnectedMenu';
import CategoriesMenu from '../CategoriesMenu';
import SortedBooksPage from '../SortedBooksPage';

import './styles.scss';
import BookReadingPage from '../BookReadingPage';

const App = () => (
  <div className="App">
    <ConnexionMenu />
    <ConnectedMenu />
    <CategoriesMenu />
    <HeaderApp />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/connexion" element={<LoginPage />} />
      <Route path="/inscription" element={<RegisterPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/categorie/:id" element={<SortedBooksPage />} />
      <Route path="/livre/:id/lecture" element={<BookReadingPage />} />
    </Routes>
    <FooterApp />
  </div>
);

export default App;
