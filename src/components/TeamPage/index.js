import Bastien from '../../docs/images/Bastien-Autem.jpeg'
import AnneLine from '../../docs/images/Anne-Line-Colombo.jpeg'
import Florian from '../../docs/images/Florian-Sanchez.jpeg'
import Marianne from '../../docs/images/Marianne-Holveck.jpeg'
import Mathieu from '../../docs/images/Mathieu-Foulon.jpeg'

import './styles.scss';
/* eslint-disable */
const Team = () => (
    <main className="team">

        <section className="team__presentation">
            <h1 className="team__presentation-title">Qui sommes-nous ?</h1>
            <p className="team__content-presentation"> Nous sommes tout les 5 des élèves de l'école <a href="https://oclock.io/" className="team__link">O'Clock</a>. Nous faisons parti de la promotion "Wonderland", qui a débuté en 12 juillet 2021, et fini le 24 décembre 2021.</p>
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
                    <h3 className="team__job">Développeur Front-End React</h3>
                </div>
            </div>
            <div className="team__container-info">
                <p className="team__content">THE Product-Owner, celui qui a eu l'idée du projet, ce Wonderful site. Et ce magnifique Carousel aussi d'ailleurs.</p>
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
                    <h3 className="team__job">Développeuse Front-End React</h3>
                </div>
            </div>
            <div className="team__container-info">
                <p className="team__content">THE Scrum-Master, celle qui nous gouverne tous. Elle s'occupe notamment de diriger l'équipe, de définir les tâches de chacun, et de vérifier le bon fonctionnement de l'équipe.</p>
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
                <p className="team__content">Des magnifiques boutons, mais pas que, Mathieu s'est occupé de la partie Back-Office, que ce soit la gestion de la base de données, au côté "Front" du Back-Office.</p>
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
                <p className="team__content">Vous voulez une API qui déchire ? C'est elle qu'il faut contacter. En plus d'avoir fait notre logo, Marianne s'est occupé de la partie communication entre la partie Front et la partie Back du site.</p>
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
                    <h3 className="team__job">Développeur Front-End React</h3>
                </div>
            </div>
            <div className="team__container-info">
                <p className="team__content"></p>
            </div>
        </section>

    </main>
);

export default Team;