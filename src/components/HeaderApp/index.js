import LoginComponent from './LoginComponent';
import './styles.scss';

const HeaderApp = () => (
  <header className="header-app">
    <h1 className="header-app__title">Book'O'Wonder</h1>
    <LoginComponent />
  </header>
);

export default HeaderApp;
