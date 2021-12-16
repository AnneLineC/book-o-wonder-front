import { Link } from 'react-router-dom';

import './styles.scss';
/* eslint-disable */
const MentionsLegales = () => (
    <main className="mentions-legales">

    <h1 className="mentions-legales__page-title">Mentions légales</h1>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Présentation du site</h2>
    <p className="mentions-legales__content">En vertu de l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site <Link className="mentions-legales__link" to="/">bookowonder.fr</Link> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
    <p className="mentions-legales__content">Le présent site est édité par : Bastien Autem, TEST ayant pour numéro de SIRET 100000000000000 et qui est domicilié au 42 rue du test 90000 Test</p>
    <p className="mentions-legales__content">Responsable de la publication: Bastien Autem, joignable par téléphone au <a className="mentions-legales__link" href="+33606060606">06.06.06.06.06</a> et par email <a className="mentions-legales__link" href="mailto:test@test.com">test@test.com</a></p>
    <p className="mentions-legales__content">Webmaster du site: Book&apos;O&apos;Wonder, joingnable par téléphone au <a className="mentions-legales__link" href="+33606060606">06.06.06.06.06</a></p>
    <p className="mentions-legales__content">Hébergeur du site: Surge, qui est domicilé <a className="mentions-legales__link" href="https://surge.sh/">https://surge.sh/</a> et joignable par téléphone au <a className="mentions-legales__link" href="+33606060606">06.06.06.06.06</a></p>
    </section>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Propriété intellectuelle et contrefaçons</h2>
    <p className="mentions-legales__content">L&apos;entreprise Book&apos;O&apos;Wonder est propriétaire des droits de propriété intellectuelle ou détient les droits d&apos;usage sur tous les éléments accessibles sur le site, notamment : les textes, les images, les graphismes, le logo, les icônes, …</p>
    <p className="mentions-legales__content">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l&apos;entreprise Book&apos;O&apos;Wonder.</p>
    <p className="mentions-legales__content">Toute exploitation non autorisée du site ou d&apos;un quelconque élément qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
    </section>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Cookies et traceurs</h2>
    <p className="mentions-legales__content">Le site internet <Link className="mentions-legales__link" to="/">bookowonder.fr</Link> possède un système de mesure d&apos;audience, ainsi qu&apos;une fonction de partage sur les réseaux sociaux.</p>
    <p className="mentions-legales__content">En application de la directive européenne dite «paquet télécom», les internautes doivent être informés et donner leur consentement préalablement à l&apos;insertion de traceurs(plus couramment appelés« cookies»). Les internautes doivent disposer d&apos;une possibilité de choisir de ne pas être tracés lorsqu&apos;ils visitent un site ou utilisent une application. Les éditeurs de sites internet ont donc l&apos;obligation de solliciter au préalable le consentement des utilisateurs.</p>
    <p className="mentions-legales__content">Le refus d&apos;installation d&apos;un cookie peut entraîner l&apos;impossibilité d&apos;accéder à certains services. L&apos;internaute peut toutefois configurer son navigateur internet pour refuser l&apos;installation des cookies.</p>
    <h3 className="mentions-legales__sub-title">Mesure d&apos;audience</h3>
    <p className="mentions-legales__content">Les cookies de mesure d&apos;audience sont de petits fichiers qui permettent de connaitre et d&apos;analyser les statistiques de trafic sur le site internet : les pages visitées, le nombre de visites, le taux de rebond, la provenance des visites, … Les cookies de mesure d&apos;audience sont totalement anonymes.</p>
    <p className="mentions-legales__content">Sur ce site, c&apos;est la solution Google Analytics qui est utilisée pour mesurer l&apos;audience.</p>
    <h3 className="mentions-legales__sub-title">Réseaux sociaux</h3>
    <p className="mentions-legales__content">Les cookies liés aux réseaux sociaux sont associés aux boutons qui facilitent le partage des pages et articles sur les réseaux sociaux.</p>
    </section>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Formulaire de contact et commentaires</h2>
    <p className="mentions-legales__content">Vous pouvez être amené à nous indiquer votre adresse e-mail lorsque vous remplissez notre formulaire de contact ou déposez un commentaire sur l&apos;un des articles du site site <Link className="mentions-legales__link" to="/">bookowonder.fr</Link>.</p>
    <p className="mentions-legales__content">En aucun cas, votre adresse e-mail ne sera cédée à des tiers.</p>
    </section>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Modération des commentaires</h2>
    <p className="mentions-legales__content">Le choix de validation d&apos;un commentaire sur le site <Link className="mentions-legales__link" to="/">bookowonder.fr</Link> est laissé à l&apos;entière appréciation du responsable de publication. Les commentaires peuvent être supprimés, modifiés et corrigés pour une meilleure compréhension des visiteurs(notamment pour l&apos;orthographe).</p>
    <p className="mentions-legales__content">L&apos;internaute peut signer son commentaire de son nom ou pseudo ou nom de son entreprise. Il peut également renseigné une URL dans le champ «site web». Ce lien peut ne pas apparaitre si il a été jugé que le commentaire n&apos;apportait pas réellement de plus value à l&apos;article. Ceci, même si le commentaire est publié.</p>
    <p className="mentions-legales__content">Voici des exemples de cas ou un commentaire peut-être modéré ou supprimé :</p>
    <ul className="mentions-legales__list">
    <li className="mentions-legales__list-item">Il a été supprimé par l&apos;anti-spam</li>
    <li className="mentions-legales__list-item">Il n&apos;apporte pas réellement de plus value et n&apos;est pas utile pour les internautes</li>
    <li className="mentions-legales__list-item">Il est truffé de fautes d&apos;orthographe ou incompréhensible</li>
    <li className="mentions-legales__list-item">Il semble être déposé uniquement dans un but auto-promotionnel</li>
    <li className="mentions-legales__list-item">Le mail indiqué est visiblement faux</li>
    <li className="mentions-legales__list-item">Il est jugé diffamatoire pour un tiers</li>
    </ul>
    </section>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Newsletter</h2>
    <p className="mentions-legales__content">Vous pouvez vous abonner à la newsletter du site. Vous recevez alors automatiquement et gratuitement des newsletters traitants les sujets du site <Link className="mentions-legales__link" to="/">bookowonder.fr</Link>.</p>
    <p className="mentions-legales__content">Vous pouvez vous désinscrire à tout moment de la newsletter en cliquant sur le lien de désabonnement présent en bas de chaque newsletter.</p>
    <p className="mentions-legales__content">En aucun cas, votre adresse e-mail ne sera cédée à des tiers.</p>
    </section>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Liens hypertextes</h2>
    <p className="mentions-legales__content">Ce site internet contient un certain nombre de liens hypertextes vers d&apos;autres sites. Cependant, <Link className="mentions-legales__link" to="/">bookowonder.fr</Link> n&apos;a pas la possibilité de suivre et vérifier le contenu de ces sites, et n&apos;assumera en conséquence aucune responsabilité de ce fait.</p>
    </section>

    <section className="mentions-legales__section">
    <h2 className="mentions-legales__main-title">Flux RSS</h2>
    <p className="mentions-legales__content">Les flux RSS sont exclusivement destinés aux visiteurs du site pour une utilisation personnelle et ne sauraient en aucun cas servir à alimenter d&apos;autres sites, sauf autorisation écrite préalable de <Link className="mentions-legales__link" to="/">bookowonder.fr</Link>.</p>
    </section>

    </main>
);

export default MentionsLegales;