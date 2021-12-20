import Bastien from '../../assets/images/bastien.jpg';
import AnneLine from '../../assets/images/anne-line.jpg';
import Florian from '../../assets/images/florian.jpg';
import Marianne from '../../assets/images/marianne-holveck.jpeg';
import Mathieu from '../../assets/images/mathieu-foulon.jpeg';

import './styles.scss';
/* eslint-disable */
const Team = () => (
    <main className="team">

        <section className="team__presentation">
            <h1 className="team__presentation-title">Notre équipe</h1>
            <h1 className="team__presentation-subtitle">Qui sommes-nous ?</h1>
            <p className="team__content-presentation"> Nous sommes tous les 5 des élèves de l'école <a href="https://oclock.io/" className="team__link">O'Clock</a>.<br /> Nous faisons partie de la promotion "<span className="team__wonderland">Wonderland</span>", qui a fait sa rentrée le 12 juillet 2021 pour terminer la formation le 23 décembre 2021.</p>
        </section>

        <section className="team__section-left">
            <div className="team__container-photo-and-title-left">
                <div className="team__container-photo">
                    <a className="team__link" href="https://www.linkedin.com/in/bastien-autem/">
                        <img src={Bastien} className="team__photo"></img>
                    </a>
                </div>
                <div className="team__container-title">
                    <h2 className="team__name"><a className="team__link" href="https://www.linkedin.com/in/bastien-autem/">Bastien Autem</a></h2>
                    <h3 className="team__job">Développeur Front-End ReactJS</h3>
                </div>
            </div>
            <div className="team__container-info">
                <p className="team__content">THE Product-Owner, celui qui a eu l'idée de ce projet projet, ce Wonderful site. Et du magnifique Carousel en page d'accueil aussi d'ailleurs. Dynamique et plein d'enthousiasme, il a su répandre la bonne humeur dans l'équipe comme personne.</p>
            </div>
        </section>

        <section className="team__section-right">
            <div className="team__container-photo-and-title-right">
                <div className="team__container-photo">
                    <a className="team__link" href="https://www.linkedin.com/in/anne-line-colombo/">
                        <img src={AnneLine} className="team__photo"></img>
                    </a>
                </div>
                <div className="team__container-title">
                    <h2 className="team__name"><a className="team__link" href="https://www.linkedin.com/in/anne-line-colombo/">Anne-Line Colombo</a></h2>
                    <h3 className="team__job">Développeuse Front-End ReactJS</h3>
                </div>
            </div>
            <div className="team__container-info">
                <p className="team__content">THE Scrum-Master, celle qui nous gouverne tous. Elle s'occupe notamment de manager l'équipe, de définir les tâches de chacun, et de vérifier que l'ensemble tourne bien. Toujours pleine de bonnes idées et avec l'envie de bien faire , elle s'est très vite rendue indispensable au sein de l'équipe.</p>
            </div>
        </section>

        <section className="team__section-left">
            <div className="team__container-photo-and-title-left">
                <div className="team__container-photo">
                    <a className="team__link" href="https://www.linkedin.com/in/mathieu-foulon-developpeur-web/">
                        <img src={Mathieu} className="team__photo"></img>
                    </a>
                </div>
                <div className="team__container-title">
                    <h2 className="team__name"><a className="team__link" href="https://www.linkedin.com/in/mathieu-foulon-developpeur-web/">Mathieu Foulon</a></h2>
                    <h3 className="team__job">Développeur Back-End Symfony</h3>
                </div>
            </div>    
            <div className="team__container-info">
                <p className="team__content">Mathieu s'est occupé de la partie Back-Office, que ce soit la gestion de la base de données ou le côté "Front" du Back-Office. Un administrateur pourrait y trouver ses magnifiques boutons, mais pas que. Il est aussi le roi des CORS et des .htaccess, pour notre plus grand bonheur.</p>
            </div>
        </section>

        <section className="team__section-right">
            <div className="team__container-photo-and-title-right">
                <div className="team__container-photo">
                    <a className="team__link" href="https://www.linkedin.com/in/marianne-holveck/">
                        <img src={Marianne} className="team__photo"></img>
                    </a>
                </div>
                <div className="team__container-title">
                    <h2 className="team__name"><a className="team__link" href="https://www.linkedin.com/in/marianne-holveck/">Marianne Holveck</a></h2>
                    <h3 className="team__job">Développeuse Back-End Symfony</h3>
                </div>
            </div>
            <div className="team__container-info">
                <p className="team__content">Vous voulez une API qui déchire ? C'est elle qu'il faut contacter. En plus d'avoir fait notre magnifique logo, Marianne s'est occupée de la partie communication entre la partie Front et la partie Back du site. Avec beaucoup d'enthousiasme et de légèreté , elle a sû régler nos petits soucis de routes en un clignement de cils. </p>
            </div>
        </section>

        <section className="team__section-left">
            <div className="team__container-photo-and-title-left">
                <div className="team__container-photo">
                    <a className="team__link" href="https://www.linkedin.com/in/sanchez-florian/">
                        <img src={Florian} className="team__photo"></img>
                    </a>
                </div>
                <div className="team__container-title">
                    <h2 className="team__name"><a className="team__link" href="https://www.linkedin.com/in/sanchez-florian/">Florian Sanchez</a></h2>
                    <h3 className="team__job">Développeur Front-End ReactJS</h3>
                </div>
            </div>
            <div className="team__container-info">
                <p className="team__content">Parfois... telle une chenille... on devient un magnifique papillon. Florian s'est transformé pendant cette apothéose et a sû faire face aux soucis qui étaient devant lui. Pour se faire la main, il s'est d'abord occupé de notre footer et de ses pages, et a terminé en beauté avec la gestion du renouvellement d'un mot de passe oublié.</p>
            </div>
        </section>

    </main>
);

export default Team;