import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedMenu from './LoggedMenu';
import LoginComponent from './LoginComponent';
import { setDisplay } from '../../actions';
import './styles.scss';

const HeaderApp = () => {
  const isLogged = false;
  const dispatch = useDispatch();
  const handleMenuButtonClick = (name) => {
    dispatch(setDisplay(name));
  };
  return (
    <header className="header-app">
      <div className="header-app__element header-app__element--menu">
        {!isLogged && <LoginComponent />}
        {isLogged && <LoggedMenu />}
      </div>
      <button
        type="button"
        className="header-app__element header-app__element--categories"
        onClick={
          () => {
            handleMenuButtonClick('categoriesMenu');
          }
        }
      >
        <span className="sr-only">Catégories</span>
        <i className="header-app__icon fas fa-book" />
      </button>
      <button type="button" className="header-app__element header-app__element--audio-player">
        <span className="sr-only">Lecteur audio</span>
        <i className="header-app__icon fas fa-headphones" />
      </button>
      <Link to="/"><h1 className="header-app__title">Book'O'Wonder</h1></Link>
    </header>
  );
};

export default HeaderApp;
