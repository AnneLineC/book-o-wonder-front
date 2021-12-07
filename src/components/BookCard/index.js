import './styles.scss';

const BookCard = () => (
    <div className="bookcard" style='background-image: {book.picture}'>


    </div>
    
    
    {!isLogged && <LoginComponent />}
    {isLogged && <LoggedMenu />}
    
    //props booleen pour l'étoile si true ou false
);

export default BookCard;