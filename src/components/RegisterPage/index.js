import './styles.scss';

const RegisterPage = () => (
  <div className="register-page">
    
    <form autoComplete="off" className="register-page__form">
        
        <label className="register-page__label" htmlFor="pseudo">Pseudo</label> 
        <input
            className="register-page__input"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder=""
        />
                
        <label className="register-page__label" htmlFor="email">Adresse Mail</label> 
        <input
            className="register-page__input"
            type="email"
            name="email"
            id="email"
            placeholder=""
        />
                
        <label className="register-page__label" htmlFor="password">Mot de Passe</label>
        <input
            className="register-page__input"
            type="password"
            name="password"
            id="password"
            placeholder=""
        />

        <label className="register-page__label" htmlFor="password-confirm">Confirmation du mot de passe</label>
        <input
            className="register-page__input"
            type="password"
            name="password"
            id="password"
            placeholder=""
        />
        
        <button
            type="submit"
            className="register-page__register"
            >
            Inscription
        </button>
            
    </form>

        <p className="register-page__connect">
            Si vous avez déjà un compte, vous pouvez vous connecter :
        </p>
    
    <button
        type="submit"
        className="register-page__connexion"
        >
        Connexion
    </button>

</div>
);

export default RegisterPage;
