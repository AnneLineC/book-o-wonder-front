import HeaderApp from '../HeaderApp';
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import ContactPage from '../ContactPage';

import FooterApp from '../FooterApp';


import './styles.scss';

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <ContactPage />
      <FooterApp />
    </div>
  );
}

export default App;
