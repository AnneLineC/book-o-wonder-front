import HeaderApp from '../HeaderApp';
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import FooterApp from '../FooterApp';

import './styles.scss';

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <RegisterPage />
      <LoginPage />
      <FooterApp />
    </div>
  );
}

export default App;
