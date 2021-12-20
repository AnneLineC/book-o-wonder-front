import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  setFieldValue, contactFormAttempt,
} from '../../actions';
import './styles.scss';

const ContactPage = () => {
  const dispatch = useDispatch();

  const nicknameValue = useSelector((state) => state.user.nicknameValue);
  const emailValue = useSelector((state) => state.user.emailValue);
  const objectValue = useSelector((state) => state.user.objectValue);
  const contentValue = useSelector((state) => state.user.textValue);
  const isSubmitted = useSelector((state) => state.display.registerForm.sent);
  const isError = useSelector((state) => state.display.registerForm.error);

  const handleInputNicknameChange = (event) => {
    dispatch(setFieldValue('nicknameValue', event.target.value));
  };

  const handleInputEmailChange = (event) => {
    dispatch(setFieldValue('emailValue', event.target.value));
  };

  const handleInputObjectChange = (event) => {
    dispatch(setFieldValue('objectValue', event.target.value));
  };

  const handleInputContentValueChange = (event) => {
    dispatch(setFieldValue('contentValue', event.target.value));
  };

  const handleSendFormSubmit = (event) => {
    event.preventDefault();
    console.log(contactFormAttempt);
    dispatch(contactFormAttempt());
  };

  return (
    <div className="contact-page">

      {!isSubmitted
      && (
      <div>
      <p className="contact-page__title">
        Nous contacter
      </p>

      <p className="contact-page__contact">
        Vous pouvez nous contacter en envoyant un mail à : xxxxx@xxxxx.com
        Ou en remplissant le formulaire ci-dessous:
      </p>

      <p className="contact-page__required">
        Tous les champs sont obligatoires
      </p>

      <form autoComplete="off" className="contact-page__form" onSubmit={handleSendFormSubmit}>
        <div className="contact-page__top">
          <label className="contact-page__label" htmlFor="email">
            <span className="sr-only">Email</span>
            <input
              className="contact-page__input"
              type="email"
              name="email"
              id="email"
              placeholder="Votre adresse mail"
              value={emailValue}
              onChange={handleInputEmailChange}
            />
          </label>

          <label className="contact-page__label" htmlFor="pseudo">
            <span className="sr-only">Pseudo</span>
            <input
              className="contact-page__input"
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Votre pseudo"
              value={nicknameValue}
              onChange={handleInputNicknameChange}
            />
          </label>
        </div>

        <div className="contact-page__bottom">
          <label className="contact-page__labell" htmlFor="object">
            <span className="sr-only">Objet du message</span>
            <input
              className="contact-page__object"
              type="text"
              name="object"
              id="object"
              placeholder="Objet du message"
              value={objectValue}
              onChange={handleInputObjectChange}
            />
          </label>

          <label className="contact-page__labell" htmlFor="content">
            <span className="sr-only">Tapez votre message ici</span>
            <textarea
              cols="33"
              className="contact-page__textarea"
              name="content"
              id="content"
              placeholder="Votre texte ici"
              value={contentValue}
              onChange={handleInputContentValueChange}
            />
          </label>

          {isError && <p className="register-page__error">Erreur survenue lors de l'envoi. Veillez vérifier vos champs.</p>}

          <button
            type="submit"
            className="contact-page__send"
          >
            Envoyer
          </button>
        </div>
      </form>
      </div>
      )}

        {isSubmitted
        && (
        <div className="register-page__validation">
          <p className="register-page__validation-title">
            Merci de votre message !
          </p>
          <p className="register-page__validation-subtext">
            Merci pour votre message, nous y répondrons dès que possible
          </p>
          <Link to="/">
            <button
              type="submit"
              className="register-page__home"
            >
              Retour à l'accueil
            </button>
          </Link>
        </div>
        )}

    </div>
  );
};
export default ContactPage;
