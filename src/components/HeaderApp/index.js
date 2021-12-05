import LoggedMenu from './LoggedMenu';
import LoginComponent from './LoginComponent';
import './styles.scss';

const HeaderApp = () => {
    const isLogged = true;
    return (
        <header className="header-app">
            <h1 className="header-app__title">Book'O'Wonder</h1>
            {!isLogged && <LoginComponent />}
            {isLogged && <LoggedMenu />}
        </header>
    );
}

export default HeaderApp;
