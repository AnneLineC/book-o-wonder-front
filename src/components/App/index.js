import HeaderApp from '../HeaderApp';
import LoginPage from '../LoginPage';
import MenuList from '../MenuList';
import { Route, Routes } from 'react-router-dom';

import './styles.scss';

function App() {
  const isConnexionMenuOpen = true;
  return (
    <div className="App">
      {isConnexionMenuOpen && <MenuList linksList={[{label: "Connexion", slug: "connexion"}, {label: "Inscription", slug: "inscription"}]}/>}
      <HeaderApp />
      <Routes>
        <Route path="/connexion" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
