import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, loginAttempt, registerAttempt, sendContactFormAttempt } from '../../actions';
import './styles.scss';

const ContactPage = () => {

    const dispatch = useDispatch();
    
    const nicknameValue = useSelector(state => state.user.nicknameValue);
    const emailValue = useSelector(state => state.user.emailValue);
    const objectValue = useSelector(state => state.user.objectValue);
    const contentValue = useSelector(state => state.user.textValue);

    

    const handleInputNicknameChange = (event) => {
        dispatch(setFieldValue('nicknameValue', event.target.value))
    }

    const handleInputEmailChange = (event) => {
        dispatch(setFieldValue('emailValue', event.target.value))
    }

    const handleInputObjectChange = (event) => {
        dispatch(setFieldValue('objectValue', event.target.value))
    }

    const handleInputContentValueChange = (event) => {
        dispatch(setFieldValue('contentValue', event.target.value))
    }

    const handleSendFormSubmit = (event) => {
        event.preventDefault();
        dispatch(sendContactFormAttempt())
    }


return (
  <div className="contact-page">
    
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

    <form autoComplete="off" className="contact-page__form">
        
        <label className="contact-page__label" htmlFor="email"></label> 
                <input
                    className="contact-page__input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="votre adresse mail"
                    value={emailValue}
                    onChange={handleInputEmailChange}
                />
        
        <label className="contact-page__label" htmlFor="pseudo"></label> 
        <input
            className="contact-page__input"
            type="text"
            name="nickname"
            id="nickname"
            placeholder="votre pseudo"
            value={nicknameValue}
            onChange={handleInputNicknameChange}
            
        />
        </form >

        <form autoComplete="off" className="contact-page__formm">
        <label className="contact-page__labell" htmlFor="object"></label> 
        <input
            className="contact-page__object"
            type="text"
            name="object"
            id="object"
            placeholder="Objet du message"
            value={objectValue}
            onChange={handleInputObjectChange}
            
        />
        
        <label className="contact-page__labell"  htmlFor="content"></label> 
        <textarea
            cols="33"
            className="contact-page__textarea"
            name="content"
            id="content"
            placeholder="Votre texte ici"
            value={contentValue}
            onChange={handleInputContentValueChange} 
        />

            <button
                type="submit"
                className="contact-page__send"
                onSubmit={handleSendFormSubmit}
                >
                Envoyer
            </button>
    </form>
  </div>
  );
}
export default ContactPage;
