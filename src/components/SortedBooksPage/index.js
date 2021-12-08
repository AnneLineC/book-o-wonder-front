import PropTypes from 'prop-types';
import BookCard from './../BookCard'

import './styles.css';

const CategoryChosen = useSelector(state => state.book.picture);

const SortedBooksPage = ( { book.title, book.author, book } ) => {
  <div className="SortedBooksPage">
    {books.map((book) => (
      <div clasName="content-book">
        <BookCard key={book.id} picture={book.picture} />
        <h3 className="title--book"> {book.title} </h3>
        <h4 className="author--book"> {book.author} </h4>
      </div>
    ))}
  </div>



    
    // Faire une sorte de :
    // (catégorie récupéré).book.map()

    // Récupérer les données de la catégorie choisie
    // Puis afficher uniquement les livres ayant cette catégories
    // Avec BookCard + titre et auteur en dessous
    // map() pour faire le tour des livres de la catégories sur BookCard
    // Voir dans le component Content de oRecipes

}

export default SortedBooksPage;