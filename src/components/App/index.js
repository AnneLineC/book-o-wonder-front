import HeaderApp from '../HeaderApp';
import LoginPage from '../LoginPage';
import MenuList from '../MenuList';

import './styles.scss';

function App() {
  return (
    <div className="App">
      <MenuList />
      <HeaderApp />
      <LoginPage />
    </div>
  );
}

export default App;
