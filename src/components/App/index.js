// eslint-disable no-debugger, no-console


import HeaderApp from '../HeaderApp';
import RegisterPage from '../RegisterPage';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import ContactPage from '../ContactPage';
import MenuList from '../MenuList';
import FooterApp from '../FooterApp';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.scss';


function App() {
  const isConnexionMenuOpen = useSelector(state => state.display.connexionMenu);
  console.log(isConnexionMenuOpen);
  return (
    <div className="App">
      <MenuList 
        menuName="connexionMenu" 
        linksList={[{label: "Connexion", slug: "/connexion"}, {label: "Inscription", slug: "/inscription"}]}
        isMenuOpen={isConnexionMenuOpen}
      />
      <MenuList 
        menuName="categoriesMenu" 
        linksList={[{label: "Connexion", slug: "/connexion"}, {label: "Inscription", slug: '/inscription'}]}
        isMenuOpen={isConnexionMenuOpen}
      />
      <HeaderApp />
      <HomePage />

      <Routes>
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterApp />
    </div>
  );
}

export default App;
