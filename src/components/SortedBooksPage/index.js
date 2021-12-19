// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadBooksByCategoryFromAPI } from '../../actions';
import BookCard from '../BookCard';

import './styles.scss';

const SortedBooksPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const booksList = useSelector((state) => state.books.books);
  console.log(booksList);
  const categoryName = useSelector((state) => state.books.name);
  const dispatch = useDispatch();

  useEffect(
    () => {
      // This function will be executed when the SortedBooksPage component will render
      dispatch(loadBooksByCategoryFromAPI(id));
    },
    [location],
  );

  return (
    <div className="sortedbookspage">
      <h1 className="sortedbookspage__title">
        <span className="sortedbookspage__subtitle">Livres de la catégorie</span><br />
        {categoryName}
      </h1>
      <div className="sortedbookspage__content">
        {booksList.map((book) => (
          <div key={book.id} className="sortedbookspage__card">
            <Link to={`/livre/${book.id}`}>
              <BookCard picture={book.picture} />
            </Link>
            <h3 className="sortedbookspage__book-title">{book.title}</h3>
            <p className="sortedbookspage__author">{book.author.firstname} {book.author.lastname}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortedBooksPage;
