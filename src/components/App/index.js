import HeaderApp from '../HeaderApp';
import LoginPage from '../LoginPage';
import MenuList from '../MenuList';

import './styles.scss';

function App() {
  return (
    <div className="App">
      <MenuList linksList={["Lien 1", "Lien 2"]}/>
      <HeaderApp />
      <LoginPage />
    </div>
  );
}

export default App;
