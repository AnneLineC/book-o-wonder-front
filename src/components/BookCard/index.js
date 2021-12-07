import './styles.scss';
const picture = useSelector(state => state.book.picture);


const BookCard = ({ }) => (
    <div className="bookcard" style="background-image:" {picture}>
        <div className="star"></div>
    </div>
    
    
    {!isLogged && <LoginComponent />}
    {isLogged && <LoggedMenu />}
    
    //props booleen pour l'étoile si true ou false
);

BookCard.propTypes = {
    picture: PropTypes.string.isRequired,
}
export default BookCard;


// Ne pas mettre de flex sur ça !!! uniquement dans le composant parent
