import HeaderApp from '../HeaderApp';
import LoginPage from '../LoginPage';
import MenuList from '../MenuList';
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
        linksList={[{label: "Connexion", slug: "/connexion"}, {label: "Inscription", slug: "/inscription"}]}
        isMenuOpen={isConnexionMenuOpen}
      />
      <HeaderApp />
      <Routes>
        <Route path="/connexion" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
