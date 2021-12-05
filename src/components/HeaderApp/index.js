import LoggedMenu from './LoggedMenu';
import LoginComponent from './LoginComponent';
import './styles.scss';

const HeaderApp = () => {
    const isLogged = true;
    return (
        <header className="header-app">
            <div className="header-app__element header-app__element--menu">
                {!isLogged && <LoginComponent />}
                {isLogged && <LoggedMenu />}
            </div>
            <div className="header-app__element header-app__element--categories">
                <span className="sr-only">Catégories</span>
                <i className="header-app__icon fas fa-book" />
            </div>
            <div className="header-app__element header-app__element--audio-player">
                <span className="sr-only">Lecteur audio</span>
                <i className="header-app__icon fas fa-headphones" />
            </div>
            <h1 className="header-app__title">Book'O'Wonder</h1>
        </header>
    );
}

export default HeaderApp;
