import LoggedMenu from './LoggedMenu';
import LoginComponent from './LoginComponent';
import MenuList from '../MenuList';
import './styles.scss';

const HeaderApp = () => {
    const isLogged = false;
    return (
        <header className="header-app">
            <div className="header-app__element header-app__element--menu">
                {!isLogged && <LoginComponent />}
                {isLogged && <LoggedMenu />}
            </div>
            <button type="button" className="header-app__element header-app__element--categories">
                <span className="sr-only">Catégories</span>
                <i className="header-app__icon fas fa-book" />
            </button>
            <button type="button" className="header-app__element header-app__element--audio-player">
                <span className="sr-only">Lecteur audio</span>
                <i className="header-app__icon fas fa-headphones" />
            </button>
            <h1 className="header-app__title">Book'O'Wonder</h1>
        </header>
    );
}

export default HeaderApp;
