// eslint-disable no-debugger, no-console
import { useLocation, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
import BookReadingPage from '../BookReadingPage';
import MentionsLegales from '../MentionsLegales';
import Error404 from '../Error404';

import './styles.scss';
import { loadCategoriesFromAPI } from '../../actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadCategoriesFromAPI());
    },
    [],
  );

  // React router dom hook allowing to know the  currentlocation
  const location = useLocation();
  // Allow scrolling at the top of the page when navigating
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );

  return (
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
        <Route path="/Mentions-Legales" element={<MentionsLegales />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <FooterApp />
    </div>
  );
};

export default App;
