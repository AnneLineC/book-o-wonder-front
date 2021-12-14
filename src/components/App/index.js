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
import MediaPlayer from '../MediaPlayer';
import SortedBooksPage from '../SortedBooksPage';
import BookReadingPage from '../BookReadingPage';
import Error404 from '../Error404';
import { loadCategoriesFromAPI, loadSoundsFromAPI } from '../../actions';
import './styles.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadCategoriesFromAPI());
      dispatch(loadSoundsFromAPI());
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
      <HeaderApp />
      <ConnexionMenu />
      <ConnectedMenu />
      <CategoriesMenu />
      <MediaPlayer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/categorie/:id" element={<SortedBooksPage />} />
        <Route path="/livre/:id/lecture" element={<BookReadingPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <FooterApp />
    </div>
  );
};

export default App;
