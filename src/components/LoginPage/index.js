// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, loginAttempt } from '../../actions';

import './styles.scss';

const LoginPage = () => {
    
    const emailValue = useSelector(state => state.user.emailValue);
    const passwordValue = useSelector(state => state.user.passwordValue);

    const dispatch = useDispatch();

    const handleInputEmailChange = (event) => {
        dispatch(setFieldValue('emailValue', event.target.value))
    }

    const handleInputPasswordChange = (event) =>  {
        dispatch(setFieldValue('passwordValue', event.target.value))
    }

    const handleConnexionFormSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAttempt())
    }

    return (
        <div className="login-page">
            
            <form autoComplete="off" className="login-page__form">
                <label htmlFor="email">Adresse Mail</label> 
                <input
                    className="login-page__input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    value={emailValue}
                    onChange={handleInputEmailChange}
                />
                <label htmlFor="password">Mot de Passe</label>
                <input
                    className="login-page__input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    value={passwordValue}
                    onChange={handleInputPasswordChange}
                />
                <button
                    type="submit"
                    className="login-page__connexion"
                    onSubmit={handleConnexionFormSubmit}
                >
                Connexion
                </button>
            </form>

            <p className="login-page__forgotten">
                Si vous avez oublié votre mot de passe, 
                <br/>
                <a href="#">contactez les administrateurs</a>
            </p>

            <p className="login-page__account">
                Si vous n'avez pas de compte, vous pouvez vous inscrire :
            </p>
                
            <button
                type="submit"
                className="login-page__subscription"
            >
            Inscription
            </button>
                
        </div>
    );
}

// LoginPage.defaultProps = {
//     type: 'text',
// }

// LoginPage.propTypes = {
//     type: PropTypes.string,
//     placeholder: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }


export default LoginPage;
