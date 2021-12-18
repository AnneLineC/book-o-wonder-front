import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import BookCard from '../BookCard';
import './styles.scss';

const HomePage = () => {
  const isLogged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.name);
  const pinnedpages = useSelector((state) => state.user.pinnedpages);
  const baseURI = useSelector((state) => (state.display.baseURI));

  return (
    <div className="home-page-main">

      {isLogged
      && (
        <>
          <p className="home-page__title">Bienvenue {nickname} !</p>
          <p className="home-page__pinnedpaged-title">Reprendre une lecture en cours</p>
          <div className="pinnedpaged-books">
            {pinnedpages.map((pinnedpage) => (
              <Link key={pinnedpage.book.id} to={`/livre/${pinnedpage.book.id}/lecture`}>
                <div className="pinnedpaged-books__card">
                  <BookCard picture={pinnedpage.book.picture} />
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {!isLogged
      && (
      <>
        <p className="home-page__title">Book'O'Wonder, c'est quoi ?</p>
        <div className="home-page__container">
          <div className="home-page__highlight">
            <i className="home-page__avatar fas fa-book" />
            <p className="home-page__content">
              {/* eslint-disable-next-line max-len */}
              Un lecteur de livre intéractif vous permettant de vivre une aventure parmi une ludothèque fournie
            </p>
          </div>
          <div className="home-page__highlight">
            <i className="home-page__avatar fas fa-headphones" />
            <p className="home-page__content">
              {/* eslint-disable-next-line max-len */}
              Un lecteur audio vous permettant mettre une ambiance sonore afin de savourer votre lecture
            </p>
          </div>
          <div className="home-page__highlight">
            <i className="home-page__avatar fas fa-bookmark" />
            <p className="home-page__content">
              Un système de marque-page vous permettant de reprendre votre dernière lecture en cours
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
