import { Carousel } from 'react-responsive-carousel';
import './styles.scss';
// eslint-disable-next-line no-unused-vars
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';

const HomePage = () => (
  <div className="home-page-main">

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

export default HomePage;
