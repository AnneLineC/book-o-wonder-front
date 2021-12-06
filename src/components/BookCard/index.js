import './styles.scss';

const BookCard = () => (
    <div className>

    </div>
    
    
    {!isLogged && <LoginComponent />}
    {isLogged && <LoggedMenu />}
    
    //props booleen pour l'étoile si true ou false
);

export default BookCard;