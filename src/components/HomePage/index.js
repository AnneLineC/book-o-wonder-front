import { Carousel } from 'react-responsive-carousel';
import './styles.scss';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactDOM from 'react-dom';


const HomePage = () => (
<div className="home-page-main">
    
    
        <p className="home-page__title">Book'O'Wonder, c'est quoi ?</p>
    
    <div className="home-page__container">
        
        <div className="home-page__highlight">
            <i className="home-page__avatar fas fa-book" 
            />
        
            
        
            <p className="home-page__content">
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

    <Carousel>
                <div>
                    <img src="https://panels-images.twitch.tv/panel-44379234-image-94455114-03a4-4818-b199-88b2035d0cdc" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://panels-images.twitch.tv/panel-44379234-image-9b993a3e-5e52-4d7b-9024-a7b657603f64" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://panels-images.twitch.tv/panel-44379234-image-7289cc2d-bd2c-453a-b747-409df43e2835" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

</div>
);

export default HomePage;
