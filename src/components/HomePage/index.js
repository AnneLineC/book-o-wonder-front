import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import BookCard from '../BookCard';
import { deletePinnedpageInBDD, loadHighlightedBooksFromAPI } from '../../actions';

import logo from './logo-book-o-wonder-colore.png';
import './styles.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.name);
  const pinnedpages = useSelector((state) => state.user.pinnedpages);

  const handleDeleteButtonClick = (id) => {
    dispatch(deletePinnedpageInBDD(id));
  };

  useEffect(
    () => {
      dispatch(loadHighlightedBooksFromAPI());
    },
  );

  const hasPinnedpages = pinnedpages !== [];

  return (
    <div className="home-page">

      {isLogged
      && (
        <>
          <div className="home-page__intro">
            <img className="home-page__logo" src={logo} alt="Book'O'Wonder" />
            <h1 className="home-page__title">
              Bienvenue<br /> <span className="home-page__title-sitename">{nickname}</span> !
            </h1>
          </div>
          {hasPinnedpages && <p className="home-page__pinnedpaged-title">Reprendre une lecture en cours</p>}
          <div className="pinnedpaged-books">
            {pinnedpages.map((pinnedpage) => (
              <div className="pinnedpaged-book">
                <div className="pinnedpaged-book__card">
                  <Link key={pinnedpage.book.id} to={`/livre/${pinnedpage.book.id}/lecture`}>
                    <BookCard picture={pinnedpage.book.picture} />
                  </Link>
                  <button
                    className="pinnedpaged-book__delete"
                    type="button"
                    onClick={
                      (event) => {
                        event.stopPropagation();
                        handleDeleteButtonClick(pinnedpage.id);
                      }
                    }
                  >
                    Retirer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {!isLogged
      && (
      <>
        <div className="home-page__intro">
          <img className="home-page__logo" src={logo} alt="Book'O'Wonder" />
          <h1 className="home-page__title"><span className="home-page__title-sitename">Book'O'Wonder</span>,<br /> c'est quoi ?</h1>
        </div>
        <div className="home-page__container">
          <div className="home-page__highlight">
            <i className="home-page__avatar fas fa-book" />
            <p className="home-page__content">
              {/* eslint-disable-next-line max-len */}
              <span className="home-page__highlight-title">Un lecteur de livre intéractif</span><br />vous permettant de vivre une aventure parmi une ludothèque fournie
            </p>
          </div>
          <div className="home-page__highlight">
            <i className="home-page__avatar fas fa-headphones" />
            <p className="home-page__content">
              {/* eslint-disable-next-line max-len */}
              <span className="home-page__highlight-title">Un lecteur audio</span><br /> vous permettant mettre une ambiance sonore afin de savourer votre lecture
            </p>
          </div>
          <div className="home-page__highlight">
            <i className="home-page__avatar fas fa-bookmark" />
            <p className="home-page__content">
              <span className="home-page__highlight-title">Un système de marque-page</span><br /> vous permettant de reprendre votre dernière lecture en cours
            </p>
          </div>
        </div>
      </>
      )}

      <Carousel infiniteLoop useKeyboardArrows autoPlay autoFocus>
        <div className="home-page__test">
          <img src="https://i.postimg.cc/BbpCMQ48/alice.jpg" alt="alice" border="0" />
        </div>
        <div className="home-page__test">
          <img src="https://i.postimg.cc/g07PQbSc/alacrois-edesmondes.jpg" alt="croiseedesmondes" border="0" />
        </div>
        <div className="home-page__test">
          <img src="https://i.postimg.cc/z3YBgpxn/template.jpg" alt="template" border="0" />
        </div>
      </Carousel>

    </div>
  );
};

export default HomePage;
