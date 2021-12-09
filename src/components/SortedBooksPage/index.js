// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import BookCard from '../BookCard';

import './styles.scss';

const SortedBooksPage = () => {
  const { id } = useParams();
  const booksList = useSelector((state) => state.books.booksList);

  // console.log(booksList);
  // const CategoryChosen = useSelector((state) => state.book.picture);

  return (
    <div className="sortedbookspage">
      {booksList.map((book) => (
        <div className="sortedbookspage__card">
          <BookCard key={book.id} picture={book.picture} />
          <h3 className="sortedbookspage__title">{book.title}</h3>
          <p className-="sortedbookspage__author">{book.author.firstname} {book.author.lastname}</p>
        </div>
      ))}
    </div>
  );

  // Faire une sorte de :
  // (catégorie récupéré).book.map()

  // Récupérer les données de la catégorie choisie
  // Puis afficher uniquement les livres ayant cette catégories
  // Avec BookCard + titre et auteur en dessous
  // map() pour faire le tour des livres de la catégories sur BookCard
  // Voir dans le component Content de oRecipes
};

export default SortedBooksPage;
